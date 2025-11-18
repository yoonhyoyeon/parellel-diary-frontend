import { rootRoute } from './rootRoute';
import {
  authRoute,
  protectedRoute,
  indexRoute,
  createPageRoute,
  diariesRoute,
  diaryDetailRoute,
  parallelDetailRoute,
  analysisRoute,
} from './routes';

export const routeTree = rootRoute.addChildren([
  authRoute,
  protectedRoute.addChildren([
    indexRoute,
    createPageRoute,
    diariesRoute,
    diaryDetailRoute,
    parallelDetailRoute,
    analysisRoute,
  ]),
]);


