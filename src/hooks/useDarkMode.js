import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkModeKey", false)

    useEffect(() => {
        
        if(useLocalStorage.getItem("darkModeKey") == true) {
                document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        };
    }, [darkMode]);

    return [darkMode, setDarkMode];
}