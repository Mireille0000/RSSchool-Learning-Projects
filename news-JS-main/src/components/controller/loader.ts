import {ParamsEverything} from '../types/index';
import {GenericOptions} from '../types/index';
import {ResponseNews} from '../types/index';
import {Endpoint} from '../types/index';

class Loader {
    baseLink: string;
    options: GenericOptions;

    constructor(baseLink : string, options : GenericOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} } : {endpoint: Endpoint, options : GenericOptions},
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res : Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options : GenericOptions, endpoint : Endpoint) {
        const urlOptions : GenericOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method : string, endpoint : Endpoint, callback : (data: ResponseNews) => void, options: GenericOptions) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
