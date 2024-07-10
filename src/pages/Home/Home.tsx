// import AdCarousel from "./Carousel/AdCarousel";

// import AdCarousel from "./Carousel/AdCarousel";

import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import CarouselAd from "./Carousel/CarouselAd/CarouselAd";
import PopularProducts from "./PopularProducts/PopularProducts";
import Products from "./Products/Products";
import FaqSection from "./Faq/FaqSection";

const Home = () => {
  return (
    <>
      <CarouselAd />
      <PopularProducts />
      <Products />
      <FeaturedProduct />
      <FaqSection />
    </>
  );
};

export default Home;
