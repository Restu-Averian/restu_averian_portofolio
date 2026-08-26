import { useCallback, useEffect, useState, forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MobileCarouselArrow } from "./MobileCarouselArrow";
import { MobileCarouselDots } from "./MobileCarouselDots";

/**
 * @typedef {Object} MobileCarouselProps
 * @property {import("react").ReactNode} children
 * @property {string} [trackClassName]
 * @property {string} [viewportClassName]
 * @property {boolean} [showArrows]
 */

/**
 * Mobile-only Embla carousel wrapper.
 * Falls back to native layout on desktop (lg viewport and above).
 *
 * @type {import("react").ForwardRefExoticComponent<MobileCarouselProps & import("react").RefAttributes<HTMLDivElement>>}
 */
export const MobileCarousel = forwardRef(
  (
    {
      children,
      trackClassName = "",
      viewportClassName = "",
      showArrows = false,
    },
    ref,
  ) => {
    // Embla only active below lg (1024px)
    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: "start",
      loop: false,
      containScroll: "trimSnaps",
      breakpoints: {
        "(min-width: 1024px)": { active: false },
      },
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onInit = useCallback((emblaApi) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
      if (!emblaApi) return;

      onInit(emblaApi);
      onSelect(emblaApi);
      emblaApi
        .on("reInit", onInit)
        .on("reInit", onSelect)
        .on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    const scrollTo = useCallback(
      (index) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi],
    );

    const scrollPrev = useCallback(
      (e) => {
        e.stopPropagation();
        emblaApi && emblaApi.scrollPrev();
      },
      [emblaApi],
    );

    const scrollNext = useCallback(
      (e) => {
        e.stopPropagation();
        emblaApi && emblaApi.scrollNext();
      },
      [emblaApi],
    );

    const setViewportRef = useCallback(
      (node) => {
        emblaRef(node);
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [emblaRef, ref],
    );

    return (
      <div className="group/carousel max-lg:flex max-lg:h-full max-lg:flex-col lg:contents">
        <div className="max-lg:relative max-lg:flex-1 max-lg:min-h-0 lg:contents">
          <div
            className={`max-lg:overflow-hidden ${viewportClassName}`}
            ref={setViewportRef}
          >
            <div className={`flex max-lg:flex-row ${trackClassName}`}>
              {children}
            </div>
          </div>

          {/* Navigation Arrows */}
          {showArrows && scrollSnaps.length > 1 && (
            <>
              {canScrollPrev && (
                <MobileCarouselArrow direction="left" onClick={scrollPrev} />
              )}

              {canScrollNext && (
                <MobileCarouselArrow direction="right" onClick={scrollNext} />
              )}
            </>
          )}
        </div>

        <MobileCarouselDots
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
          scrollTo={scrollTo}
        />
      </div>
    );
  },
);

MobileCarousel.displayName = "MobileCarousel";
