import { MdHubNotInitializedError } from '../errors';
export default function showPrescription() {
    if (!('MdHub' in window)) {
        throw MdHubNotInitializedError;
    }
    window.MdHub.module.show('plataforma.prescricao');
}
