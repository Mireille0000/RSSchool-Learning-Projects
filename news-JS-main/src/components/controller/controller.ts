import AppLoader from './appLoader';
import { ResponseNews } from '../types/index';
import { ResponseSources } from '../types';

class AppController extends AppLoader {
    getSources(callback: (data: ResponseSources) => void) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {},
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: ResponseNews) => void) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as Element).classList.contains('source__item')) {
                const sourceId = (target as Element).getAttribute('data-source-id') as string;
                if ((newsContainer as Element).getAttribute('data-source') !== sourceId) {
                    (newsContainer as Element).setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as Element).parentNode; //
        }
    }
}

export default AppController;
