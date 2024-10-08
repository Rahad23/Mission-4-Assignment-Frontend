import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import Pagination_ from "@/pages/Pagination/Pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGetHomeProductQuery } from "@/redux/features/products/Products";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

//Aos animation customization
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 90, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 100, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const FeaturedProduct = () => {
  const { data } = useGetHomeProductQuery(undefined);

  interface Category {
    name: string;
    stock: number;
    _id: string;
  }

  interface Products {
    category: Category;
    createdAt: string;
    description: string;
    isAvailable: boolean;
    name: string;
    price: string;
    productImg: string;
    ratings: number;
    updatedAt: string;
    _id: string;
  }

  return (
    <div className="mt-28">
      <h1 className="uppercase text-center text-xl font-semibold text-[#2D3A4B]">
        Featured Products
      </h1>
      <div className="lg:px-24 px-7 mt-10 grid lg:grid-cols-4 grid-cols-2 gap-4">
        {data?.data?.result.map((data: Products) => (
          <Card key={data._id} data-aos="fade-in">
            <CardHeader className="px-7">
              <img
                src={data?.productImg}
                className="w-[200px] mx-auto"
                alt=""
              />
              <div className="mt-2 gap-y-0 flex flex-col">
                <span className="text-base font-semibold">
                  <span className="text-base text-gray-700">Category:</span>{" "}
                  {data?.category?.name}
                </span>
                <span className="text-base font-semibold">
                  <span className="text-base text-gray-700">Name:</span>{" "}
                  {data?.name}
                </span>
                <span className="flex items-center text-base font-semibold">
                  <span className="text-base text-gray-700">Price:</span>{" "}
                  <TbCurrencyTaka className="text-2xl" />
                  {data?.price}
                </span>
              </div>
            </CardHeader>
            <CardContent className="justify-center flex items-center">
              <Link to={`/product-details/${data?._id}`}>
                {" "}
                <Button className="text-base py-1 px-3 text-[#2D3A4B] rounded-lg bg-[#FDE428] hover:bg-[#FDE428]">
                  View Product
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <div className="mt-7">
        <Pagination_ paginationData={0} />
      </div> */}
    </div>
  );
};

export default FeaturedProduct;
