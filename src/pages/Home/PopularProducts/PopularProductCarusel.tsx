import React, { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import productImg from "../../../assets/cartImg/item-img-1-1.jpg";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import "./EmblaCarouselStyle/base.css";
import "./EmblaCarouselStyle/embla.css";
import "./EmblaCarouselStyle/sandbox.css";

const products = [
  {
    id: 1,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 2,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 3,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 4,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 5,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 6,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 7,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 7,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 9,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 10,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 11,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
  {
    id: 12,
    name: "Wooden chair",
    price: 220,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis aliquam. Excepturi magni vel blanditiis odit id, corrupti veritatis quas corporis repudiandae modi inventore quae labore similique dicta nisi? Vero?",
    img: productImg,
    itsAvailable: true,
  },
];

const EmblaCarousel = () => {
  const options: EmblaOptionsType = { loop: true };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products.map((data) => (
            <div className="embla__slide" key={data.id}>
              <div className="embla__slide__number relative">
                <img src={data.img} height={"150px"} width={"150px"} alt="" />
                <div className="absolute bottom-0">
                  <button className="text-sm py-1 px-1 text-[#2D3A4B] rounded-lg bg-[#FDE428]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons flex gap-x-2">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
