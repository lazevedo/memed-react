import { MdHubNotInitializedError } from '../errors';
export default async function setMemedPatient(patient) {
    if (!('MdHub' in window)) {
        throw MdHubNotInitializedError;
    }
    const { nome, endereco, cidade, telefone, peso, altura, idExterno, data_nascimento, cpf, } = patient;
    await window.MdHub.command.send('plataforma.prescricao', 'setPaciente', {
        nome,
        endereco,
        cidade,
        telefone,
        peso,
        altura,
        idExterno,
        data_nascimento,
        cpf,
    });
}
