import AppController from '../controller/controller';
import { AppView } from '../view/appView';
declare class App {
    controller: AppController;
    view: AppView;
    constructor();
    start(): void;
}
export default App;
