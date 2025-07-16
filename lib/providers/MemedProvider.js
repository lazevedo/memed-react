import React from 'react';
import { useScriptLoader, useSetupCommands, useActionButtonBind, useSetupPatient } from '../hooks';
import MemedContext from '../contexts/MemedContext';
import { cleanUp, showPrescription, hidePrescription } from '../actions';
export default function MemedProvider(props) {
    const { children, color = '#00B8D6', scriptSrc = 'https://memed.com.br/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js', scriptId = 'memedScript' } = props;
    const [doctorToken, setDoctorToken] = React.useState('');
    const [patient, setPatient] = React.useState();
    const [actionRef, setActionRef] = React.useState();
    const [options, setOptions] = React.useState();
    const { prescriptionLoaded } = useScriptLoader({
        doctorToken,
        color,
        scriptSrc,
        scriptId
    });
    const { patientSet } = useSetupPatient({ patient, prescriptionLoaded });
    useSetupCommands({ options, prescriptionLoaded });
    useActionButtonBind({ patientSet, actionRef });
    const onLogout = React.useCallback(() => {
        if (prescriptionLoaded) {
            cleanUp(scriptId);
        }
    }, [scriptId, prescriptionLoaded]);
    const loadingModule = React.useMemo(() => !prescriptionLoaded || !patientSet, [prescriptionLoaded, patientSet]);
    const contextValue = React.useMemo(() => ({
        setDoctorToken,
        setPatient,
        setActionRef,
        onLogout,
        loadingModule,
        showPrescription,
        hidePrescription,
        setOptions
    }), [onLogout, loadingModule]);
    return React.createElement(MemedContext.Provider, { value: contextValue }, children);
}
