import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Testimonial() {
  const [ref, inView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className={`testimonial ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="section-inner fade-up">
        <p className="quote-text">
          „Der Joeys Picknick hebt Streetfood auf ein Level, das man sonst nur in
          sterneprämierten Bistros erwartet. Ein absolutes Geschmackserlebnis."
        </p>
        <p className="quote-author">— Rhein-Main Food Magazin</p>
      </div>
    </section>
  );
}
