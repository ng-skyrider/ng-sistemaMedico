import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SearchComponent } from "../search/search.component";
import { backEntrances, bouncingExits } from '../../shared/animations/animation.index';
import { fadeInLeft_animation } from '../../shared/animations/anim/fading';

@Component({
  selector: 'app-home',
  imports: [ NavbarComponent, SearchComponent,
    CommonModule
  ],
  animations: [ backEntrances('backInRight' ), backEntrances('backInDown' ),
    bouncingExits('bounceOut' )
   ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Cardiología',
      description: 'Atención especializada para el corazón.'
    },
    {
      icon: 'fas fa-stethoscope',
      title: 'Medicina General',
      description: 'Consultas y cuidados primarios de salud.'
    },
    {
      icon: 'fas fa-user-md',
      title: 'Cirugía',
      description: 'Procedimientos quirúrgicos con tecnología de punta.'
    },
    {
      icon: 'fas fa-pills',
      title: 'Farmacia',
      description: 'Amplia gama de medicamentos y productos.'
    },
    {
      icon: 'fas fa-ambulance',
      title: 'Emergencias',
      description: 'Servicio de emergencia disponible 24/7.'
    },
    {
      icon: 'fas fa-bone',
      title: 'Ortopedia',
      description: 'Tratamiento de lesiones y enfermedades óseas.'
    }
  ];

  staff = [
    {
      name: 'Tec. Juana Pérez',
      specialty: 'Cardiólogo Principal',
      image: 'assets/imgs/enfermera-1-min.jpg'
    },
    {
      name: 'Tec. Ana Gómez',
      specialty: 'Neuróloga Pediátrica',
      image: 'assets/imgs/enfermera-2-min.jpg'
    },
    {
      name: 'Tec. Rosa Ramírez',
      specialty: 'Cirujano Ortopédico',
      image: 'assets/imgs/enfermera-3-min.jpg'
    },
    {
      name: 'Tec. María Rodríguez',
      specialty: 'Directora Médica',
      image: 'assets/imgs/enfermera-4-min.jpg'
    }
  ];

  navTab: string = localStorage.getItem('nowNavigation') || 'inicio';

  router: Router = inject(Router);

  viewSearch: string = '';

  heroImages: any[] = [
    {
      id: 1,
      imgs: 'assets/imgs/medico-atendiendo-una-paciente.jpg',
      title: 'Atención y reporte 24/7',
      description: 'Bienvenido al sistema de atencion médica',
      rating: 5,
      reviews: 120
    },
    {
      id: 2,
      imgs: 'assets/imgs/enfermera-1-min.jpg',
      title: 'Enfermeras y médicos profesionales',
      description: 'Con el sistema de atencion médica, los médicos pueden ver los historiales clinicos de los pacientes.',
      rating: 3,
      reviews: 120
    },
    {
      id: 3,
      imgs: 'assets/imgs/enfermera-2-min.jpg',
      title: 'Historial clinico 24/7',
      description: 'El paciente puede ver su historial clinico en cualquier momento y en cualquier lugar.',
      rating: 4,
      reviews: 120
    },
    {
      id: 4,
      imgs: 'assets/imgs/enfermera-3-min.jpg',
      title: 'Infraestructura médica de ultima generacion',
      description: 'Los historiales clinicos pueden ser reutilizados para futuras consultas, gracias al almacenamiento en la nube.',
      rating: 3,
      reviews: 120
    },
    {
      id: 5,
      imgs: 'assets/imgs/enfermera-4-min.jpg',
      title: 'Comunidad de pacientes',
      description: 'En este lugar atendemos tus necesidades de salud, con una atencion personalizada.',
      rating: 4,
      reviews: 120
    }
  ];
  currentImageIndex: number = 0;

  animationState_right = false;
  animationState_down = false;
  animationWithState = false;

  animation_ingresar = false;

  animate(state_position: 'right' | 'down') {
    state_position == 'right' ? this.animationState_right = false : this.animationState_down = false;

    setTimeout(() => {
      state_position == 'right' ? this.animationState_right = true : this.animationState_down = true;
      this.animationWithState = !this.animationWithState;
    }, 24);
  }


  constructor() { }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.heroImages.length) % this.heroImages.length;
    this.animate('down');
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
    this.animate('right');
  }

  onLogin() {

    this.animation_ingresar = !this.animation_ingresar;

    setTimeout(() => {
      this.animation_ingresar = !this.animation_ingresar;
      this.router.navigate(['/pages/auth/login']);
    }, 400);
  }

  navigateIn(value: any) {
     this.navTab = value;
     
  }

  onSearch(value: string){
    this.viewSearch = value;
    // console.log(value);
  }
}
