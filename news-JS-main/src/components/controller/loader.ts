import { GenericOptions } from '../types/index';
import { Endpoint } from '../types/index';
import { Callback } from '../types/index';

class Loader {
    baseLink: string;
    options: GenericOptions;

    constructor(baseLink: string, options: GenericOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    // ResponseSources | ResponseNews
    getResp<T>(
        { endpoint, options = {} }: { endpoint: Endpoint; options: GenericOptions },
        callback: Callback<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load<T>('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: GenericOptions, endpoint: Endpoint) {
        const urlOptions: GenericOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: Endpoint, callback: (data: T) => void, options: GenericOptions) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
