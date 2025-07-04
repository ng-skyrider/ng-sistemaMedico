import { Routes } from '@angular/router';
import { DashboardInitComponent, 
    HistoriesClinicComponent, 
    HistoriesClinicExportComponent, 
    PatientIdentificationComponent, 
    RiskFactorsMonitoringComponent, 
    FollowUpConsultationComponent, 
    ConsolidadoInformacionRelacionadaComponent, 
    RegistrarUsuariosComponent, 
    PatientRegisterComponent,
    IpressComponent } from './pages/pages.index';

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
        path: 'vigilancia-epidemiologica/ipress',
        component: IpressComponent
    },
    {
        path: 'vigilancia-epidemiologica',
        children: [
            {
                path: '',
                component: IpressComponent
            },
            {
                path: 'ipress',
                component: IpressComponent
            }
        ]
    },
    {
        path: '', // Default route for '/dashboard'
        redirectTo: 'home', // Redirects '/dashboard' to '/dashboard/home'
        pathMatch: 'full'
    }
];
