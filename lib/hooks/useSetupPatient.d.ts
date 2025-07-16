import { Patient } from '../domain';
interface SetupPatientParams {
    patient?: Patient;
    prescriptionLoaded: boolean;
}
interface SetupPatientResult {
    patientSet: boolean;
}
export default function useSetupPatient(params: SetupPatientParams): SetupPatientResult;
export {};
