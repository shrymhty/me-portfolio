// import { useEffect, useState } from "react";

// const useSectionObserver = (sectionIds) => {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.6, // 60% of section visible = active
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, options);

//     sectionIds.forEach((id) => {
//       const element = document.getElementById(id);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       sectionIds.forEach((id) => {
//         const element = document.getElementById(id);
//         if (element) observer.unobserve(element);
//       });
//     };
//   }, [sectionIds]);

//   return activeSection;
// };

// export default useSectionObserver;


import { useEffect, useState } from "react";

const useSectionObserver = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // middle of viewport

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
};

export default useSectionObserver;
