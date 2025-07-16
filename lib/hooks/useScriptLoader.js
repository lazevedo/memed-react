import React from 'react';
import { createMemedScript, onLoadPrescription } from '../actions';
export default function useScriptLoader(options) {
    const { doctorToken, color, scriptSrc, scriptId } = options;
    const [prescriptionLoaded, setPrescriptionLoaded] = React.useState(false);
    React.useEffect(() => {
        if (doctorToken) {
            const memedScript = createMemedScript(doctorToken, color, scriptSrc, scriptId, setPrescriptionLoaded);
            memedScript.onload = onLoadPrescription.bind(null, setPrescriptionLoaded);
        }
    }, [doctorToken]);
    return { prescriptionLoaded };
}
