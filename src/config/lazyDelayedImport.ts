import { LAZY_LOAD_TIME } from './index';
import { lazy, ComponentType } from 'react';

const lazyDelayedImport = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  minLoadTime = LAZY_LOAD_TIME,
) =>
  lazy(() =>
    Promise.all([factory(), new Promise((resolve) => setTimeout(resolve, minLoadTime))]).then(
      ([moduleExports]) => moduleExports,
    ),
  );

export default lazyDelayedImport;
