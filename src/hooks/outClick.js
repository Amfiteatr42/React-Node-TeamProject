import { useEffect } from 'react';

export const useOutClick = (ref, cb) => {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

   document.addEventListener('mousedown', handleClick);
return () => {
  document.removeEventListener('mousedown', handleClick);
};
  }, [ref, cb]);
  
};
