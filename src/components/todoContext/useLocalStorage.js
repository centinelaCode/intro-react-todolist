import {useState, useEffect} from 'react';

const useLocalStorage = (itemName, initialValue) => {
   // states
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(true);
   const [item, setItem] = useState(initialValue);
 
   useEffect(() => {
     try {
       setTimeout(() => {
         //localstorage
         const localStorageItem = localStorage.getItem(itemName);
         let parsedItem;
 
         if (!localStorageItem) {
           localStorage.setItem(itemName, JSON.stringify(initialValue));
           parsedItem = initialValue;
         } else {
           parsedItem = JSON.parse(localStorageItem);
         }
 
         setItem(parsedItem);
         setLoading(false);
       }, 3000);
     } catch (error) {
       setError(error);
     }
   });
 
   const saveItem = (newItem) => {
     try {
       // to string all Item
       const stringifiedItem = JSON.stringify(newItem);
       localStorage.setItem(itemName, stringifiedItem);
       setItem(newItem);
     } catch (error) {
       setError(error);
     }
   };
 
   return {
     item,
     saveItem,
     loading,
     error,
   };
 };

 export default useLocalStorage;