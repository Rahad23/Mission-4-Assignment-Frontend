import EmblaCarousel from "./PopularProductCarusel";
const PopularProducts = () => {
  return (
    <div className="mt-12 lg:px-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-xl font-semibold text-[#2D3A4B]">
          Popular Products
        </h1>
        <p className="capitalize text-sm font-semibold text-[#666666] mt-1 tracking-wider">
          Product that are always on sale
        </p>
      </div>
      <EmblaCarousel />
    </div>
  );
};

export default PopularProducts;
