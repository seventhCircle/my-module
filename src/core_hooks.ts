import {atomWithReset} from 'jotai/utils';
export const hello = () => console.info('hello world')

export const atomResettable = atomWithReset(0);