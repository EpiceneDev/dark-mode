import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkValue')

    useEffect(() => {
        if(useLocalStorage == true) {
            return (
                
            )
        }
    })
}