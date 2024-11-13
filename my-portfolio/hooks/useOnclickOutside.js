import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Check if click happened inside the referenced element
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // If click is outside, call the handler function
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
