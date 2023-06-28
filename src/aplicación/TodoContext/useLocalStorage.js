import React from 'react'

export function useLocalStorageItem(itemName, initialValue) {
    const [error, setError] = React.useState(false)  
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)
      
      React.useEffect(() => {
        setTimeout(()=> {
          try {
            const localStorageTodos = localStorage.getItem(itemName)
          let parsedItem;
          
          if(!localStorageTodos) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          } else {
            parsedItem = JSON.parse(localStorageTodos)
          }
          setItem(parsedItem)
          setLoading(false)
          } catch(error) {
            setError(error);
          }
        }, 1000)
      });
    
    
      const saveItem = (newItem) => {
        try {
          const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
        } catch(error) {
          setError(error)
        }
      };
    
      return {
        item, 
        saveItem,
        loading,
        error,
      };
    }