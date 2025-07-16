export default function createMemedScript(doctorToken, color, scriptSrc, scriptId, setPrescriptionLoaded) {
    const memedScriptFound = document.getElementById(scriptId);
    if (memedScriptFound) {
        setPrescriptionLoaded(true);
        return memedScriptFound;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('data-color', color);
    script.setAttribute('data-token', doctorToken);
    script.src = scriptSrc;
    document.body.appendChild(script);
    return script;
}
