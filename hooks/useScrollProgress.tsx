// "use client";
// import { useState, useEffect } from "react";

// const useScrollProgress = () => {
//   const [completion, setCompletion] = useState<number>(0);

//   useEffect(() => {
//     const updateScrollCompletion = () => {
//       const currentPages = Number(window.screenY) as number;

//       const scrollHeight = (+document.body.scrollHeight -
//         window.innerHeight) as number;

//       if (scrollHeight) {
//         setCompletion(((currentPages / scrollHeight) * 100) as number);
//       }
//     };
//     document.addEventListener("scroll", updateScrollCompletion);
//     return () => {
//       document.removeEventListener("scroll", updateScrollCompletion);
//     };
//   }, []);

//   return completion;
// };

// export default useScrollProgress;

// Note: This file would typically live outside components folder structure
// e.g., src/hooks/useScrollProgress.ts

"use client";
import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const updateScrollProgress = () => {
      lastKnownScrollPosition = window.scrollY;

      requestAnimationFrame(() => {
        calculateAndSetProgress();
      });

      ticking = true;
    };

    const calculateAndSetProgress = () => {
      const totalDocumentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      const visibleWindowHeight = Math.min(
        window.innerHeight,
        document.documentElement.clientHeight
      );

      const scrolledPercentage =
        ((lastKnownScrollPosition + visibleWindowHeight) /
          totalDocumentHeight) *
        100;

      setProgress((prevValue) =>
        prevValue === scrolledPercentage ? prevValue : scrolledPercentage
      );
      ticking = false;
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return progress;
};

export default useScrollProgress;
