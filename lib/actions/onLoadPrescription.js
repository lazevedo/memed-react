import { MdSinapsePrescricaoNotInitializedError } from '../errors';
export default function onLoadPrescription(setPrescriptionLoaded) {
    if (!('MdSinapsePrescricao' in window)) {
        throw MdSinapsePrescricaoNotInitializedError;
    }
    window.MdSinapsePrescricao.event.add('core:moduleInit', function startMemedConfigs(modulo) {
        if (modulo.name === 'plataforma.prescricao') {
            setPrescriptionLoaded(true);
        }
    });
}
