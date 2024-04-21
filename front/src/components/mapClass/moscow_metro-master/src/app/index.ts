import Map from './app';

declare const define: any;
declare const exports: any;
declare global {
    interface Window { MoscowMetro: any; }
    interface Document { selection: any; }
}

const isRequireJS = (): boolean => typeof define === 'function' && define.amd;
const isCommonJS = (): boolean => typeof exports === 'object' && typeof module === 'object';

(() => {
    if (typeof window !== 'undefined') {
        const previous = window.MoscowMetro;
        window.MoscowMetro = Map;
        window.MoscowMetro.noConflict = () => {
            window.MoscowMetro = previous;
        };
        return;
    }

    if (isCommonJS()) {
        return module.exports = Map;
    }

    if (isRequireJS()) {
        return define(Map);
    }

    throw new Error('This environment was not anticipated by Moscow Metro');
})();
