import React from 'react';
import { setMemedPatient } from '../actions';
export default function useSetupPatient(params) {
    const { patient, prescriptionLoaded } = params;
    const [patientSet, setPatientSet] = React.useState(false);
    React.useEffect(() => {
        if (patient && prescriptionLoaded) {
            setMemedPatient(patient).then(() => {
                setPatientSet(true);
            });
        }
    }, [patient, prescriptionLoaded]);
    return { patientSet };
}
