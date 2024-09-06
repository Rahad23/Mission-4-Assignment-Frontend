import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const faqEcoShop = [
    {
      id: 1,
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse through our product categories or use the search bar to find the items you're looking for. Once you find a product, click on it, select the quantity, and click Add to Cart. After reviewing your cart, click Checkout and follow the instructions to complete your order.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We currently offer cash on delivery as our payment method. You can place an order online, and payment will be collected at the time of delivery. Please ensure you have the correct amount ready when receiving your order.",
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer:
        "We offer a hassle-free return policy. You can return any product within 30 days of receipt as long as it is unused, in its original packaging, and accompanied by a receipt or proof of purchase. To initiate a return, please contact our customer service team.",
    },
    {
      id: 4,
      question: "How long will it take to receive my order?",
      answer:
        "Delivery times depend on your location and the shipping method selected at checkout. Standard shipping typically takes 5-7 business days, while expedited shipping options are available for faster delivery. You can view more details on our Shipping Information page.",
    },
    {
      id: 5,
      question: "Can I cancel or change my order after it’s been placed?",
      answer:
        "If your order has not yet been processed for shipping, you can cancel or make changes. Please contact customer support as soon as possible to request changes or cancellations. Once an order is shipped, it cannot be modified, but you can still return the product after receiving it.",
    },
    {
      id: 6,
      question: "How do I contact customer support?",
      answer: (
        <h1>
          {" "}
          You can reach our customer support team{" "}
          <Link
            to={"/about-us"}
            className="border-b-[1px] border-blue-700 font-bold text-gray-950"
            title="Here You find all support contact list"
          >
            About-Us
          </Link>
          , through our About-Us page, or by calling. Our customer service hours
          are Monday through Friday, 9 AM to 5 PM (PST).
        </h1>
      ),
    },
  ];

  return (
    <div className="lg:px-24 px-7 mt-40 pb-7">
      <h1 className="uppercase text-center text-xl font-semibold text-[#2D3A4B]">
        FAQ
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-[#ddd] lg:px-6 text-[#2D3A4B] mt-6"
      >
        {faqEcoShop.map((data) => (
          <AccordionItem
            key={data?.id}
            value={`item-${data?.id}`}
            className="px-2 lg:px"
          >
            <AccordionTrigger>{data?.question}</AccordionTrigger>
            <AccordionContent>{data?.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
