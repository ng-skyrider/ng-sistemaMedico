import { Routes } from '@angular/router';
import { DashboardInitComponent } from './pages/dashboard-init/dashboard-init.component';
import { HistoriesClinicComponent } from './pages/patient/histories-clinic/histories-clinic.component';
import { HistoriesClinicExportComponent } from './pages/patient/histories-clinic-export/histories-clinic-export.component';
import { PatientIdentificationComponent } from './pages/patient/patient-identification/patient-identification.component';
import { RiskFactorsMonitoringComponent } from './pages/patient/risk-factors-monitoring/risk-factors-monitoring.component';
import { FollowUpConsultationComponent } from './pages/patient/follow-up-consultation/follow-up-consultation.component';
import { ConsolidadoInformacionRelacionadaComponent } from './pages/personal-salud/consolidado-informacion-relacionada/consolidado-informacion-relacionada.component';
import { RegistrarUsuariosComponent } from './pages/user/registrar-usuarios/registrar-usuarios.component';
import { PatientRegisterComponent } from './pages/patient/patient-register/patient-register.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: 'home',
        component: DashboardInitComponent
    },
    {
        path: 'historiesClinic',
        component: HistoriesClinicComponent
    },
    {
        path: 'historiesClinicExport',
        component: HistoriesClinicExportComponent
    },
    {
        path: 'patientIdentification',
        component: PatientIdentificationComponent
    },
    {
        path:'riskFactorsMonitoring',
        component: RiskFactorsMonitoringComponent
    },
    {
        path: 'followUpConsultation',
        component: FollowUpConsultationComponent
    },
    { 
        path: 'ConsolidadoInformacionR',
        component: ConsolidadoInformacionRelacionadaComponent
    },
    {
        path: 'RegistrarUsuarios',
        component: RegistrarUsuariosComponent
    },
    {
        path: 'RegistrarPacientes',
        component: PatientRegisterComponent
    },
    {
        path: '', // Default route for '/dashboard'
        redirectTo: 'home', // Redirects '/dashboard' to '/dashboard/home'
        pathMatch: 'full'
    }
];
