import Loader from './loader';
import { ProcessEnv } from '../types/index';

class AppLoader extends Loader {
    constructor() {
        super(ProcessEnv.API_URL, {
            apiKey: ProcessEnv.API_KEY,
        });
    }
}

export default AppLoader;
