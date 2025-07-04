# Componente de Vigilancia Epidemiológica - IPRESS

## Descripción

Este componente implementa el formulario digital oficial del Ministerio de Salud de Perú para la **"Vigilancia Epidemiológica de Infecciones Asociadas a la Atención de Salud – Formato de Seguimiento de Pacientes con Factor de Riesgo (Dispositivos Médicos)"**.

## Características

### 📋 Campos del Formulario

#### Datos de la Institución
- **IPRESS**: Institución Prestadora de Servicios de Salud
- **Sala**: Sala hospitalaria
- **Servicio**: Servicio médico
- **Total de pacientes**: Número total de pacientes hospitalizados en el mes
- **Mes**: Selector de mes (1-12)
- **Año**: Selector de año (actual y 10 años anteriores)

#### Datos por Paciente
- **N° de cama**: Número de cama asignada
- **Historia clínica/DNI**: Identificación del paciente
- **Apellidos y nombres**: Datos personales
- **Sexo**: Masculino/Femenino
- **Fecha de ingreso**: Fecha de admisión al servicio
- **Edad/peso RN**: Edad del paciente o peso del recién nacido
- **Diagnóstico**: Diagnóstico médico de ingreso
- **Dispositivos médicos**: Selección múltiple de dispositivos vigilados
- **Seguimiento diario**: Checkboxes para cada día del mes (1-31)
- **Total de días**: Cálculo automático de días con dispositivo
- **Observaciones**: Campo de texto libre

### 🔧 Dispositivos Médicos Vigilados

- **VM**: Ventilación Mecánica
- **CVC**: Catéter Venoso Central
- **SVD**: Sonda Vesical Permanente
- **Otros**: Otros dispositivos médicos

### 🎯 Funcionalidades

#### Gestión de Pacientes
- ✅ Agregar pacientes dinámicamente
- ✅ Eliminar pacientes
- ✅ Validación de campos obligatorios
- ✅ Cálculo automático de totales

#### Seguimiento Diario
- ✅ Grid interactivo de 31 días
- ✅ Cálculo automático de días con dispositivo
- ✅ Resumen de totales generales

#### Validación y UX
- ✅ Validación en tiempo real
- ✅ Mensajes de error informativos
- ✅ Interfaz responsive
- ✅ Animaciones suaves

### 🎨 Diseño

- **Estilo**: Diseño moderno y profesional
- **Colores**: Paleta médica con azules y verdes
- **Responsivo**: Optimizado para móviles y tablets
- **Accesibilidad**: Controles accesibles y navegación por teclado

## Uso

### Navegación
```
/dashboard/vigilancia-epidemiologica/ipress
```

### Componente Angular
```typescript
<app-ipress></app-ipress>
```

### Estructura de Datos
```typescript
interface FormData {
  ipress: string;
  sala: string;
  servicio: string;
  totalPacientesHospitalizados: number;
  mes: number;
  anio: number;
  pacientes: PacienteFormData[];
}

interface PacienteFormData {
  numeroCama: number;
  historiaClinica: string;
  apellidosNombres: string;
  sexo: string;
  fechaIngreso: string;
  edadPesoRN: string;
  diagnosticoIngreso: string;
  dispositivosMedicos: string[];
  seguimientoDiario: boolean[];
  totalDiasDispositivo: number;
  observaciones: string;
}
```

## Desarrollo

### Dependencias
- Angular 17+
- Reactive Forms
- Common Module
- Componentes personalizados: `NotifyComponent`, `LoadingComponent`

### Archivos del Componente
- `ipress.component.ts` - Lógica del componente
- `ipress.component.html` - Template HTML
- `ipress.component.scss` - Estilos CSS
- `ipress.component.spec.ts` - Pruebas unitarias

### Pruebas
```bash
ng test --include="**/ipress.component.spec.ts"
```

## Consideraciones Técnicas

### Performance
- Uso de `FormArray` para manejo dinámico de pacientes
- Cálculos automáticos con `valueChanges`
- Validación reactiva

### Seguridad
- Validación tanto en frontend como preparado para backend
- Sanitización de datos de entrada
- Manejo de errores robusto

### Mantenibilidad
- Código modular y reutilizable
- Documentación completa
- Tipado estricto con TypeScript

## Futuras Mejoras

- [ ] Integración con base de datos
- [ ] Exportación a PDF/Excel
- [ ] Historial de formularios
- [ ] Validación avanzada de fechas
- [ ] Integración con APIs de RENIEC
- [ ] Dashboards analíticos

## Soporte

Para reportar errores o solicitar funcionalidades, contactar al equipo de desarrollo del sistema médico. 