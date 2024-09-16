import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function App() {
  const [perView, setPerView] = useState(2);

  // Use effect to check the screen size and adjust perView accordingly
  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 768) {
        setPerView(1); // Mobile view
      } else {
        setPerView(2); // Desktop view
      }
    };

    // Set the initial value
    updatePerView();

    // Add event listener to handle screen resize
    window.addEventListener("resize", updatePerView);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updatePerView);
    };
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slides: {
      perView: perView,
    },
  },
  [
    (slider) => {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ]
);

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (1).jpg"
            alt="Slide 1"
            width={1500}
            height={300}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (2).jpg"
            alt="Slide 2"
            width={1500}
            height={300}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (3).jpg"
            alt="Slide 3"
            width={1500}
            height={300}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (4).jpg"
            alt="Slide 4"
            width={1500}
            height={300}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (5).jpg"
            alt="Slide 5"
            width={1500}
            height={300}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (6).jpg"
            alt="Slide 6"
            width={1500}
            height={300}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (1).jpg"
            alt="Thumbnail 1"
            width={300}
            height={150}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (2).jpg"
            alt="Thumbnail 2"
            width={300}
            height={150}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (3).jpg"
            alt="Thumbnail 3"
            width={300}
            height={150}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (4).jpg"
            alt="Thumbnail 4"
            width={300}
            height={150}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (5).jpg"
            alt="Thumbnail 5"
            width={300}
            height={150}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/images/partner (6).jpg"
            alt="Thumbnail 6"
            width={300}
            height={150}
            className="mb-4 max-h-[482px] object-fill"
          />
        </div>
      </div>
    </>
  );
}
