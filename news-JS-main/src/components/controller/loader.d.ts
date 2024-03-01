import { GenericOptions } from '../types/index';
import { Endpoint } from '../types/index';
import { Callback } from '../types/index';
declare class Loader {
    baseLink: string;
    options: GenericOptions;
    constructor(baseLink: string, options: GenericOptions);
    getResp<T>({ endpoint, options }: {
        endpoint: Endpoint;
        options: GenericOptions;
    }, callback?: Callback<T>): void;
    errorHandler(res: Response): Response;
    makeUrl(options: GenericOptions, endpoint: Endpoint): string;
    load<T>(method: string, endpoint: Endpoint, callback: (data: T) => void, options: GenericOptions): void;
}
export default Loader;
