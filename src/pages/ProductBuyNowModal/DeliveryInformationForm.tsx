import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { setName } from "@/redux/features/orders/OrdersSlice";
import { useAppDispatch } from "@/redux/hook";
import {
  setDeliveryAddress,
  setEmail,
  setPhoneNumber,
} from "../../redux/features/orders/OrdersSlice";
import { ZodIssue } from "zod";
interface DeliveryInformationFormProps {
  zodErrorData?: ZodIssue[]; // Optional, since you may not always have errors
}

const DeliveryInformationForm: React.FC<DeliveryInformationFormProps> = ({
  zodErrorData,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="p-8 flex flex-col gap-y-2">
      <div className="mb-3">
        <h1 className="text-xl text-gray-950 font-semibold pb-0 pt-5">
          Write Your Address
        </h1>
        <hr className="text-[#ddd]" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          className="focus:ring-0 focus:outline-none  !ring-0 !focus:ring-0 !focus:outline-none   !shadow-none rounded-none mt-1"
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <span className="text-red-600">
          {zodErrorData?.find((err) => err.path[0] === "name")?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="number">Phone number:</Label>
        <Input
          type="number"
          id="number"
          className="focus:ring-0 focus:outline-none  !ring-0 !focus:ring-0 !focus:outline-none   !shadow-none rounded-none mt-1"
          onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
        />
        <span className="text-red-600">
          {zodErrorData?.find((err) => err.path[0] === "phoneNumber")?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          className="focus:ring-0 focus:outline-none  !ring-0 !focus:ring-0 !focus:outline-none   !shadow-none rounded-none mt-1"
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <span className="text-red-600">
          {zodErrorData?.find((err) => err.path[0] === "email")?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="da">Delivery address:</Label>
        <Textarea
          className="focus:ring-0 focus:outline-none  !ring-0 !focus:ring-0 !focus:outline-none   !shadow-none rounded-none mt-1"
          placeholder="Type your delivery address"
          onChange={(e) => dispatch(setDeliveryAddress(e.target.value))}
        />
        <span className="text-red-600">
          {
            zodErrorData?.find((err) => err.path[0] === "deliveryAddress")
              ?.message
          }
        </span>
      </div>
    </div>
  );
};

export default DeliveryInformationForm;
