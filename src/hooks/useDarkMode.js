import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
    const [darkFlag, setDarkFlag] = useLocalStorage(1, false);

    useEffect(() => {
        darkFlag === true ? document.querySelector('body').classList.add('dark-mode') 
        : 
        document.querySelector('body').classList.remove('dark-mode');
    }, [darkFlag]);

    return [darkFlag, setDarkFlag];
}