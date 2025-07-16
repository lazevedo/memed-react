import { MdHubNotInitializedError } from '../errors';
export default function setupOptions(options) {
    if (!('MdHub' in window)) {
        throw MdHubNotInitializedError;
    }
    const { onPrescriptionPrinted } = options;
    window.MdHub.event.add('prescricaoImpressa', onPrescriptionPrinted);
}
