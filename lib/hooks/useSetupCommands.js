import React from 'react';
import { disableSensitiveCommands, setupOptions } from '../actions';
export default function useSetupCommands(params) {
    const { options, prescriptionLoaded } = params;
    React.useEffect(() => {
        if (prescriptionLoaded) {
            disableSensitiveCommands();
            if (options) {
                setupOptions(options);
            }
        }
    }, [options, prescriptionLoaded]);
}
