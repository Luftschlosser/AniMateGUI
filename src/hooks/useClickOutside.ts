import { useEffect, RefObject } from 'react';

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  refs: Array<RefObject<T>>,
  handler: (event: MouseEvent | TouchEvent) => void,
  conditionEl: T | null,
): void => {
  useEffect(() => {
    if (!conditionEl) return; // Skip if conditionEl is not set

    const listener = (event: MouseEvent | TouchEvent): void => {
      const target = event.target as Node;

      // Check if the click is inside any of the refs' elements
      const contained = refs.some((ref) => ref.current?.contains(target));
      const test = [...conditionEl.childNodes].some((el) => (el as Node) === target);
      [...conditionEl.childNodes].forEach((e) => console.log('CHILD', e));
      console.log('target:', target);
      // console.log('conditionEl:', conditionEl);
      // console.log('Clicked Element:', test);

      // Do nothing if clicking inside any refs or conditionEl (the button or its children)
      if (contained || conditionEl.contains(target)) {
        return;
      }

      // Trigger the handler if the click is outside both refs and conditionEl
      handler(event);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchend', listener);

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [refs, handler, conditionEl]); // Run effect whenever refs, handler, or conditionEl changes
};

export default useClickOutside;