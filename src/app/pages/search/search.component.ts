import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Sample patient data (in a real app, this would come from a service)
  private allPatients = [
    { dni: '12345678', name: 'Carlos', lastName: 'Sanchez', medicalHistoryId: 'H-001', fechaEmision: '2023-01-15', ubigeo: '150101' },
    { dni: '87654321', name: 'Ana', lastName: 'Gomez', medicalHistoryId: 'H-002', fechaEmision: '2023-02-20', ubigeo: '150102' },
    { dni: '11223344', name: 'Luis', lastName: 'Fernandez', medicalHistoryId: 'H-003', fechaEmision: '2023-03-10', ubigeo: '150103' },
    { dni: '44332211', name: 'Maria', lastName: 'Rodriguez', medicalHistoryId: 'H-004', fechaEmision: '2023-04-05', ubigeo: '150104' },
    { dni: '55667788', name: 'Juan', lastName: 'Perez', medicalHistoryId: 'H-005', fechaEmision: '2023-05-25', ubigeo: '150101' },
    { dni: '88776655', name: 'Lucia', lastName: 'Martinez', medicalHistoryId: 'H-006', fechaEmision: '2023-06-18', ubigeo: '150102' },
  ];

  searchForm = new FormGroup({
    searchControl: new FormControl(''),
    fechaEmisionControl: new FormControl(''),
    ubigeoControl: new FormControl('')
  });

  filteredPatients: any[] = [];
  searchBy: 'dni' | 'history' | 'name' = 'dni';

  text = input<string>('');

  constructor() { }

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(
      startWith(this.searchForm.value), // Emit initial value
      debounceTime(300),
      switchMap(formValue => this.filterPatients(formValue))
    ).subscribe(patients => {
      this.filteredPatients = patients;
    });
    
    if (this.text()) {
      this.searchForm.get('searchControl')?.setValue(this.text());
    }
  }

  setSearchBy(filter: 'dni' | 'history' | 'name') {
    this.searchBy = filter;
    // Trigger a new search by updating the form value
    this.searchForm.get('searchControl')?.setValue(this.searchForm.get('searchControl')?.value || '');
  }

  filterPatients(formValue: any) {
    const { searchControl, fechaEmisionControl, ubigeoControl } = formValue;
    const lowerCaseQuery = (searchControl || '').toLowerCase();

    let filtered = this.allPatients;

    // Filter by text query first
    if (lowerCaseQuery) {
        filtered = filtered.filter(patient => {
            switch (this.searchBy) {
                case 'dni':
                    return patient.dni.includes(lowerCaseQuery);
                case 'history':
                    return patient.medicalHistoryId.toLowerCase().includes(lowerCaseQuery);
                case 'name':
                    const fullName = `${patient.name} ${patient.lastName}`.toLowerCase();
                    return fullName.includes(lowerCaseQuery);
                default:
                    return false;
            }
        });
    }

    // Then filter by issue date
    if (fechaEmisionControl) {
        filtered = filtered.filter(patient => !patient.fechaEmision || patient.fechaEmision === fechaEmisionControl);
    }

    // Then filter by ubigeo
    if (ubigeoControl) {
        filtered = filtered.filter(patient => !patient.ubigeo || patient.ubigeo.includes(ubigeoControl));
    }

    return of(filtered);
  }
}
