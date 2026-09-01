'use client'

import { useEffect, useState } from "react"

export function useLocalStorageSet<T>(key: string) {
  const [state, setState] = useState<Set<T>>(new Set());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(key);
      if (savedData) {
        try {
          const parsedArray = JSON.parse(savedData);
          setState(new Set(parsedArray));
          console.log("Loaded data from Local Storage: ", savedData);
        } catch (error){
          console.error("Error while loading from localStorage:", error);
        }
      }
    }
  }, [key]);

  const toggle = (item: T) => {
    const nextSet = new Set(state);
    console.log("Started toggling a date...")

    if (state.has(item)) {
      nextSet.delete(item);
    } else {
      nextSet.add(item);
    }

    setState(nextSet);

    try {
      localStorage.setItem(key, JSON.stringify(Array.from(nextSet)));
      console.log("✅ Successfuly toggled the date.")
    } catch (error) {
      console.error("❌ Error while setting value in localStorage: ", error);
    }
  }

  const set = (newState: Set<T>) => {
    setState(newState);

    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(Array.from(newState)));
    }
  }
 
  return [state, toggle, set] as const;
}