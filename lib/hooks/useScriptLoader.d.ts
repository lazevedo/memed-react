interface ScriptLoaderOptions {
    doctorToken: string;
    color: string;
    scriptSrc: string;
    scriptId: string;
}
interface ScriptLoaderResult {
    prescriptionLoaded: boolean;
}
export default function useScriptLoader(options: ScriptLoaderOptions): ScriptLoaderResult;
export {};
