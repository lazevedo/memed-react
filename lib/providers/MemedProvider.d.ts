import React from 'react';
interface MemedContextProviderProps {
    children: React.ReactNode;
    color?: string;
    scriptSrc?: string;
    scriptId?: string;
}
export default function MemedProvider(props: MemedContextProviderProps): React.ReactElement;
export {};
