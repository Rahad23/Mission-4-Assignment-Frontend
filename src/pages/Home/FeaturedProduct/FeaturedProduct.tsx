import { Card, CardContent, CardHeader } from "@/components/ui/card";
import productImg from "../../../assets/cartImg/item-img-1-1.jpg";
import { Button } from "@/components/ui/button";
import Pagination_ from "@/pages/Pagination/Pagination";
import AOS from "aos";
import "aos/dist/aos.css";
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
];

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
  return (
    <div className="mt-28">
      <h1 className="uppercase text-center text-xl font-semibold text-[#2D3A4B]">
        Featured Products
      </h1>
      <div className="lg:px-24 mt-10 grid grid-cols-4 gap-4">
        {products.map((data) => (
          <Card key={data.id} data-aos="fade-in">
            <CardHeader>
              <img src={data.img} className="w-[200px] mx-auto" alt="" />
            </CardHeader>
            <CardContent className="justify-center flex items-center">
              <Button className="text-base py-1 px-3 text-[#2D3A4B] rounded-lg bg-[#FDE428] hover:bg-[#FDE428]">
                View Product
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-7">
        <Pagination_ />
      </div>
    </div>
  );
};

export default FeaturedProduct;
