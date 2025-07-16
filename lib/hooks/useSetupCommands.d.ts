import { ModuleOptions } from '../domain';
interface SetupCommandsParams {
    prescriptionLoaded: boolean;
    options?: ModuleOptions;
}
export default function useSetupCommands(params: SetupCommandsParams): void;
export {};
