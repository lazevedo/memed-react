import React from 'react';
import { ModuleOptions, Patient } from '../domain';
export interface MemedContextValue {
    setDoctorToken: React.Dispatch<React.SetStateAction<string>>;
    setPatient: React.Dispatch<React.SetStateAction<Patient | undefined>>;
    setActionRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLButtonElement> | undefined>>;
    setOptions: React.Dispatch<React.SetStateAction<ModuleOptions | undefined>>;
    onLogout: (scriptId?: string) => void;
    showPrescription: () => void;
    hidePrescription: () => void;
    loadingModule: boolean;
}
declare const MemedContext: React.Context<MemedContextValue | undefined>;
export default MemedContext;
