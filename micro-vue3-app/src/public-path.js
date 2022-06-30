import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';


export const isQiankun = qiankunWindow.__POWERED_BY_QIANKUN__

// if (isQiankun) {
//     const base  = 'http://localhost:7100/'
//     qiankunWindow.__dynamicImportHandler__ = function(importer) {
//         return base + importer;
//     }
//     qiankunWindow.__dynamicImportPreload__ = function(preloads) {
//         return preloads.map(preload => base + preload);
//     }
// }

