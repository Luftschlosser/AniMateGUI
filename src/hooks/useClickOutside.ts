import { RefObject, useEffect } from 'react';

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  refs: Array<RefObject<T>>,
  handler: (event: MouseEvent | TouchEvent) => void,
  conditionEl: T | null,
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      const target = event.target as Node;
      const contained = refs.some((ref) => ref.current?.contains(target));

      // Do nothing if clicking refs element or children
      if (contained || conditionEl?.contains(target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchend', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [refs, handler, conditionEl]);
};
export default useClickOutside;
