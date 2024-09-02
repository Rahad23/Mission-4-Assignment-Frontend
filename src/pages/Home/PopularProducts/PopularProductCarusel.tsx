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
import { Link } from "react-router-dom";
import {
  useGetHomeProductQuery,
  useGetProductQuery,
} from "@/redux/features/products/Products";

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
  const { data, isLoading } = useGetHomeProductQuery("");
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const products = data?.data?.result;
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {products?.map((data) => (
            <div className="embla__slide" key={data.id}>
              <div className="embla__slide__number relative flex flex-col">
                <img
                  src={data.productImg}
                  height={"150px"}
                  width={"150px"}
                  alt=""
                />

                <div className="flex flex-col gap-y-0 my-8">
                  <span className="text-xs text-[#2D3A4B] capitalize font-bold">
                    {data.name}
                  </span>
                </div>
                <div className="absolute bottom-0">
                  <Link to={"/products"}>
                    {" "}
                    <button className="text-xs py-1 px-1 text-[#2D3A4B] rounded-sm bg-[#FDE428]">
                      View
                    </button>
                  </Link>
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
