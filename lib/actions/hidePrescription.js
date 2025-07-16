import { MdHubNotInitializedError } from '../errors';
export default function hidePrescription() {
    if (!('MdHub' in window)) {
        throw MdHubNotInitializedError;
    }
    window.MdHub.module.hide('plataforma.prescricao');
}
