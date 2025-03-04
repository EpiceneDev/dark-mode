import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // define some state --> will receive an initial value to set up our localStorage property
    // const item = JSON.parse(localStorage.getItem(key));
  
    // const [storedValue, setStoredValue] = useState(() => {
    //     item || initialValue);
    // }
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse and return stored json or, if undefined, return initialValue
      return item ? JSON.parse(item) : initialValue;
    });
    // define a SETTER FUNCTION that set's a value to localStorage when called, also set our state property to the new value
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};
