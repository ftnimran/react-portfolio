import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;

      setShowButton(scrollY > heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToHero}
      className={`hidden md:inline-flex fixed bottom-6 right-6 z-50 justify-center items-center w-10 h-10 
      bg-transparent border-2 border-[#0ef] rounded-full text-[20px] text-[#0ef] 
      transition-all duration-500 ease-in-out 
      hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] hover:-translate-y-1
      
      ${
        showButton
          ? "opacity-0 animate-slideTop"
          : "opacity-0 pointer-events-none"
      }
      `}
    >
      <i class="bx bx-up-arrow-alt"></i>
    </button>
  );
};

export default ScrollToTopButton;
