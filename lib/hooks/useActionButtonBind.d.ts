import React from 'react';
interface ActionButtonBindOptions {
    actionRef?: React.RefObject<HTMLButtonElement>;
    patientSet: boolean;
}
export default function useActionButtonBind(options: ActionButtonBindOptions): void;
export {};
