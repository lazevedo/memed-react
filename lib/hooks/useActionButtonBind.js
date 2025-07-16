import React from 'react';
import { showPrescription } from '../actions';
export default function useActionButtonBind(options) {
    const { actionRef, patientSet } = options;
    React.useEffect(() => {
        if ((actionRef === null || actionRef === void 0 ? void 0 : actionRef.current) && patientSet) {
            actionRef.current.addEventListener('click', showPrescription);
        }
        return () => {
            if (actionRef === null || actionRef === void 0 ? void 0 : actionRef.current) {
                actionRef === null || actionRef === void 0 ? void 0 : actionRef.current.removeEventListener('click', showPrescription);
            }
        };
    }, [actionRef, patientSet]);
}
