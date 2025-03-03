
/* eslint-disable */
import { initGlobal } from './global';

module.exports = async function (globalConfig: any, projectConfig: any) {
    console.log(globalConfig.testPathPattern);
    console.log(projectConfig.cache);
    initGlobal();
};