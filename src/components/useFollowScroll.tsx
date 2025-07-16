"use client"
import { useGSAP } from "@gsap/react";

import { useState, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
interface useFollowScrollOptions {
  zIndex?: number;
}
interface useFollowScrollProps {
  container: RefObject<HTMLDivElement | null>;
  target: RefObject<HTMLDivElement | null>;
  elm: RefObject<HTMLDivElement | null>;
  options?: useFollowScrollOptions;
}
/**
 * A hook that makes an element follow the scroll position of the page, with a spring animation.
 *
 * The element is kept within the bounds of the container, and can be aligned
 * to the center, top, bottom, left, right, or any of the four corners.
 *
 * The element is also given a zIndex of 50 by default, but this can be changed
 * by passing a zIndex option.
 *
 * @param {Object} props
 * @prop {RefObject<HTMLDivElement | null>} container - The parent wrapper containing the whole animation
 * @prop {RefObject<HTMLDivElement | null>} target - The element to attach the scroll trigger to
 * @prop {RefObject<HTMLDivElement | null>} elm - The element to move
 * @prop {Object} [options={}] - Optional configuration options
 * @prop {number} [options.zIndex=50] - The zIndex of the element
 *
 * @returns {Object} An object with one property: hasReachedTargetEl, which is a boolean
 * indicating whether the element is currently following the scroll position. and progress which is the number betwee
 */
const useFollowScroll = (props: useFollowScrollProps) => {
  const { target, elm, options, container } = props;
  const [hasReachedTargetEl, sethasReachedTargetEl] = useState<boolean>(false);
  const [progress, setScrollProgress] = useState<number>(0);

  const [trig, setTrig] = useState<boolean>(false);
  useGSAP(
    () => {
      if (!elm.current || !target.current) return;
      const el = elm.current;
      const endSection = target.current;
      const style = window.getComputedStyle(container.current!);
      const paddingLeft = parseFloat(style.paddingLeft || "0");
      const paddingRight = parseFloat(style.paddingRight || "0");
      const widthWithoutPadding =
        container?.current!.clientWidth - paddingLeft - paddingRight;

      gsap.set(el, {
        position: "fixed",
        left: elm.current?.getBoundingClientRect().left,
        x: elm.current?.getBoundingClientRect().left,
        zIndex: options?.zIndex || 50,
        maxWidth: `${widthWithoutPadding}px`,
      });
      ScrollTrigger.create({
        trigger: endSection,
        start: "top top",
        end: "bottom top",
        onEnter: () => {
          gsap.set(el, {
            position: "absolute",
            top: endSection.offsetTop,
            left: elm.current?.getBoundingClientRect().left,
            x: elm.current?.getBoundingClientRect().left,
            maxWidth: `${widthWithoutPadding}px`,
          });
          sethasReachedTargetEl(true);
        },
        onLeaveBack: () => {
          gsap.set(el, {
            position: "fixed",

            left: elm.current?.getBoundingClientRect().left,
            x: elm.current?.getBoundingClientRect().left,
            maxWidth: `${widthWithoutPadding}px`,
          });
          sethasReachedTargetEl(false);
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top center",
          endTrigger: ".black-section",
          end: "top top",
          scrub: 1.5,

          onUpdate: (self) => {
            setScrollProgress(self.progress); // ✅ capture progress
            sethasReachedTargetEl(self.progress >= 0.99);
          },
        },
      });
      tl.to(el, {
        width: `${target.current.clientWidth}px`,
        height: `${target.current.clientHeight}px`,
        maxWidth: `${Math.max(
          target.current.clientHeight,
          widthWithoutPadding
        )}px`,
        top: 20,
        left: 0,
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        borderRadius: "16px",
        ease: "power2.inOut",
        // position: "relative",
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { dependencies: [trig, container, elm, target, options] }
  );

  const reTrigger = () => setTrig((p) => !p);

  return {
    hasReachedTargetEl,
    reTrigger,
    progress,
  };
};

export default useFollowScroll;
