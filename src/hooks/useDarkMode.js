import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
    const [darkFlag, setDarkFlag] = useLocalStorage(1, false);

    useEffect(() => {
        
        if(darkFlag === true) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        };
    }, [darkFlag]);

    return [darkFlag, setDarkFlag];
}