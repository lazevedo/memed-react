import React from 'react';
import { ProviderNotPlacedError, PrescriptionPrintedNotFunctionError } from '../errors';
import MemedContext from '../contexts/MemedContext';
export default function useMemed(options) {
    const memed = React.useContext(MemedContext);
    const [optionsSet, setOptionsSet] = React.useState(false);
    if (!memed) {
        throw ProviderNotPlacedError;
    }
    React.useEffect(() => {
        if (options && !optionsSet) {
            const { onPrescriptionPrinted } = options;
            /**
             * I had to do this because of non-ts-implementations using the lib
             */
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (typeof onPrescriptionPrinted !== 'function') {
                throw PrescriptionPrintedNotFunctionError;
            }
            memed.setOptions(options);
            setOptionsSet(true);
        }
    }, [optionsSet, options, memed]);
    return memed;
}
