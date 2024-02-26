import './sources.css';
import { SourcesInterface } from '../../types';
import { SourcesNews } from '../../types';
declare class Sources {
    draw(data: SourcesNews[] | SourcesInterface[]): void;
}
export default Sources;
