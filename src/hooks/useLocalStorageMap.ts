'use client'

import { useEffect, useState } from "react"

type WithDate = { date: string };

export function useLocalStorageMap<T extends WithDate>(key: string) {
  const [state, setState] = useState<Map<string, T>>(new Map());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(key);
      if (savedData) {
        try {
          const parsedArray = JSON.parse(savedData);
          setState(new Map(parsedArray.map((object: T): [string, T] => [object.date, object])));
          console.log("Loaded data from Local Storage: ", savedData);
        } catch (error){
          console.error("Error while loading from localStorage:", error);
        }
      }
    }
  }, [key]);

  const toggle = (item: T) => {
    const nextMap = new Map(state);
    console.log("Started toggling a date...")

    if (state.has(item.date)) {
      nextMap.delete(item.date);
    } else {
      nextMap.set(item.date, item);
    }

    setState(nextMap);

    try {
      localStorage.setItem(key, JSON.stringify(Array.from(nextMap.values())));
    } catch (error) {
      console.error("Error while setting value in localStorage: ", error);
    }
  }

  const set = (newState: Map<string, T>) => {
    setState(newState);

    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(Array.from(newState.values())));
    }
  }
 
  return [state, toggle, set] as const;
}