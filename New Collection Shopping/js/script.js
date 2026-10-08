/* =========================================================
   AARANYA JEWELS
   PREMIUM INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     PRELOADER
  ======================================================= */

  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {

    setTimeout(() => {

      loader.classList.add("hidden");

    }, 1200);

  });


  /* =======================================================
     HEADER
  ======================================================= */

  const header = document.getElementById("header");

  const handleHeader = () => {

    if (window.scrollY > 70) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  };

  window.addEventListener(
    "scroll",
    handleHeader,
    { passive: true }
  );

  handleHeader();


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const menuToggle =
    document.getElementById("menuToggle");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const mobileLinks =
    mobileMenu.querySelectorAll("a");


  menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle(
      "menu-open"
    );

  });


  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

      document.body.classList.remove(
        "menu-open"
      );

    });

  });


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );


  revealElements.forEach((element) => {

    revealObserver.observe(element);

  });


  /* =======================================================
     CUSTOM CURSOR
  ======================================================= */

  const cursor =
    document.getElementById("cursor");

  const cursorDot =
    document.getElementById("cursorDot");


  if (
    window.matchMedia(
      "(pointer: fine)"
    ).matches
  ) {

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;


    window.addEventListener(
      "mousemove",
      (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursorDot.style.left =
          `${mouseX}px`;

        cursorDot.style.top =
          `${mouseY}px`;

      }
    );


    const animateCursor = () => {

      currentX +=
        (mouseX - currentX) * 0.15;

      currentY +=
        (mouseY - currentY) * 0.15;


      cursor.style.left =
        `${currentX}px`;

      cursor.style.top =
        `${currentY}px`;


      requestAnimationFrame(
        animateCursor
      );

    };

    animateCursor();


    const interactiveElements =
      document.querySelectorAll(
        "a, button, .image-frame"
      );


    interactiveElements.forEach(
      (element) => {

        element.addEventListener(
          "mouseenter",
          () => {

            cursor.classList.add(
              "active"
            );

          }
        );


        element.addEventListener(
          "mouseleave",
          () => {

            cursor.classList.remove(
              "active"
            );

          }
        );

      }
    );

  }


  /* =======================================================
     MAGNETIC BUTTONS
  ======================================================= */

  if (
    window.matchMedia(
      "(pointer: fine)"
    ).matches
  ) {

    const magneticElements =
      document.querySelectorAll(
        ".magnetic"
      );


    magneticElements.forEach(
      (element) => {

        element.addEventListener(
          "mousemove",
          (event) => {

            const rect =
              element.getBoundingClientRect();

            const x =
              event.clientX -
              rect.left -
              rect.width / 2;

            const y =
              event.clientY -
              rect.top -
              rect.height / 2;


            element.style.transform =
              `translate(${x * 0.12}px, ${y * 0.12}px)`;

          }
        );


        element.addEventListener(
          "mouseleave",
          () => {

            element.style.transform =
              "translate(0, 0)";

          }
        );

      }
    );

  }


  /* =======================================================
     SMOOTH ANCHOR SCROLL
  ======================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener(
        "click",
        (event) => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }
      );

    });


  /* =======================================================
     IMAGE PARALLAX
  ======================================================= */

  const parallaxImages =
    document.querySelectorAll(
      ".story-image img, .contact-image img"
    );


  const handleParallax = () => {

    if (
      window.matchMedia(
        "(max-width: 600px)"
      ).matches
    ) {
      return;
    }


    parallaxImages.forEach((image) => {

      const rect =
        image.getBoundingClientRect();

      const windowHeight =
        window.innerHeight;


      if (
        rect.bottom < 0 ||
        rect.top > windowHeight
      ) {
        return;
      }


      const progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);


      const movement =
        (progress - 0.5) * 20;


      image.style.transform =
        `translateY(${movement}px) scale(1.04)`;

    });

  };


  window.addEventListener(
    "scroll",
    handleParallax,
    { passive: true }
  );


  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        mobileMenu.classList.remove(
          "open"
        );

        document.body.classList.remove(
          "menu-open"
        );

      }

    }
  );

});