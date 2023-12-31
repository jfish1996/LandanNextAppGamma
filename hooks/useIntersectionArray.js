import React, { useEffect } from "react";

export function useIntersectionArray(
  ref,
  feedView,
  setter,
  filtering,
  filteredPosts
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setter(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    ref.current.forEach((divElement) => {
      observer.observe(divElement);
    });
    // return () => {
    //   observer.disconnect();
    // };
  }, [ref.current, feedView, filtering, filteredPosts]);

  useEffect(() => {
    ref.current = [];
  }, [feedView, filtering, filteredPosts]);
}
