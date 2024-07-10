// import { Card } from "@/components/ui/card";
import "./ProductsCardStyle/ProductsCard.css";
import productImg from "../../../assets/cartImg/item-img-1-1.jpg";
import { Button } from "@/components/ui/button";
const ProductsCard = () => {
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

  return products.map((data) => (
    <div
      key={data.id}
      className="card border-[1px] border-[#ddd] cursor-pointer"
    >
      <div className="image">
        <img src={data.img} />
      </div>
      <div className="details">
        <div className="center">
          <h1>
            {data.name}
            <br />
            <span>
              {data?.itsAvailable ? (
                <span className="available font-semibold">Available</span>
              ) : (
                <span className="unavailable font-semibold">Unavailable</span>
              )}
            </span>
          </h1>
          <p>
            {data.details.length > 40
              ? data.details.slice(0, 100) + "..."
              : data.details}
          </p>
          <ul>
            <li>
              {" "}
              <Button className="capitalize bg-[#2D3A4B] rounded-none">
                Buy Now
              </Button>
            </li>
            <li>
              <Button className="capitalize bg-[#2D3A4B] rounded-none">
                Details
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ));
};
// <Card key={data.id} className="rounded-none">
//   <img src={data.img} alt="" />
// </Card>
export default ProductsCard;
