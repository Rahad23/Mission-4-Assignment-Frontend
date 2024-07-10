import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import sliderImage1 from "../../../../assets/CarouselImg/slide-bg-1.jpg";
import sliderImage2 from "../../../../assets/CarouselImg/slide-bg-2.jpg";
import { Button } from "@/components/ui/button";

const CarouselTwo = () => {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },
  ];

  return (
    <Carousel
      className=" overflow-hidden shadow-lg rounded-none mx-auto"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent className="flex">
        {sliderData.map((slider) => (
          <CarouselItem key={slider.id} className="min-w-full">
            <Card className="bg-transparent">
              <CardContent className="flex items-center justify-center h-[500px] p-0 relative">
                <img
                  src={slider?.image}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  alt=""
                />
                <div className="absolute top-[30%] left-28">
                  <h4 className="capitalize text-xl font-bold text-[#2D3A4B]">
                    The Latest product from ecoshop
                  </h4>
                  <h1 className="text-7xl font-bold mt-4 text-[#161b22]">
                    Featured Cycle
                  </h1>
                  <Button className="mt-10 bg-[#2D3A4B] w-56 h-14 rounded-sm text-xl">
                    Shop-Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
        &#9664;
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
        &#9654;
      </CarouselNext>
    </Carousel>
  );
};

export default CarouselTwo;
