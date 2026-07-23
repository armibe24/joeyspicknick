import { useState, useEffect, useRef } from 'react';

export default function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce !== false) {
          observer.unobserve(currentRef);
        }
      } else {
        if (options.triggerOnce === false) {
          setIsIntersecting(false);
        }
      }
    }, {
      threshold: options.threshold || 0.15,
      root: options.root || null,
      rootMargin: options.rootMargin || '0px'
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef && options.triggerOnce === false) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.root, options.rootMargin, options.triggerOnce]);

  return [ref, isIntersecting];
}
