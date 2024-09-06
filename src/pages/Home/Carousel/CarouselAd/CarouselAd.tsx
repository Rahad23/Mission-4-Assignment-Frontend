import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { useGetAdvertisementQuery } from "@/redux/features/advertisement/advertisement";
import { Link } from "react-router-dom";

const CarouselTwo = () => {
  const { data } = useGetAdvertisementQuery(undefined);

  interface AdvertisementData {
    ad_img: string;
    ad_name: string;
    category: string;
    createdAt: string;
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
  }

  return (
    <div className="px-7 lg:px-0">
      <Carousel
        className=" overflow-hidden shadow-lg rounded-none mx-auto"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {data?.data?.map((slider: AdvertisementData) => (
            <CarouselItem key={slider._id} className="min-w-full">
              <Card className="bg-transparent">
                <CardContent className="flex items-center justify-center h-[300px] lg:h-[500px] p-0 relative">
                  <img
                    src={slider?.ad_img}
                    className="w-full  object-cover transition-transform duration-500 hover:scale-105"
                    alt=""
                  />
                  <div className="absolute top-[30%] lg:left-28 left-16">
                    <h4 className="capitalize lg:text-xl text-base font-bold text-[#2D3A4B]">
                      {slider?.title}
                    </h4>
                    <h1 className="lg:text-7xl text-3xl font-bold lg:mt-4 mt-1 text-[#161b22]">
                      {slider?.ad_name}
                    </h1>
                    <Link to={`/category/${slider?.category}`}>
                      <Button className="lg:mt-10 mt-14 bg-[#2D3A4B] w-56 h-14 rounded-sm text-xl">
                        Shop-Now
                      </Button>
                    </Link>
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
    </div>
  );
};

export default CarouselTwo;
