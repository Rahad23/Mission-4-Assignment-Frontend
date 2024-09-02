import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useGetCategoryQuery } from "@/redux/features/category/Category";
import { useMakeProductMutation } from "@/redux/features/products/Products";
import {
  resetProductState,
  setCategoryId,
  setDescription,
  setName,
  setPrice,
  setProductImg,
} from "@/redux/features/products/ProductSlice";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { getCurrentFormattedDate } from "../ProductsDetails/TimeFormate";
import { Loader2 } from "lucide-react";
import { productSchema } from "./ProductDataValidation";

const MakeProduct = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const [zodError, setZodError] = useState([]);
  const dispatch = useDispatch();
  const productData = useAppSelector((state: RootState) => state.product);
  const [makeProduct, { isLoading: makeProductLoading }] =
    useMakeProductMutation();
  const { data, isLoading: categoryLoading } = useGetCategoryQuery(undefined);
  const { toast } = useToast();
  //here dispatch set category _id
  const handleChange = (value: string) => {
    setSelectedValue(value);
    const categoryId = data?.data?.find(
      (category: { name: string }) => category?.name === value
    )?._id;
    dispatch(setCategoryId(categoryId));
  };

  //here dispatch set file
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    dispatch(setProductImg(file));
  };

  //make product mutation
  const submitProduct = async () => {
    try {
      // zod validation
      const resultValidation = productSchema.parse(productData);

      if (resultValidation) {
        const formData = new FormData();

        // Append file with key "file"
        if (productData.productImg) {
          formData.append("file", productData.productImg);
        }

        // Create an object for other data fields
        const dataFields = {
          name: productData.name,
          price: productData.price,
          description: productData.description,
          category: productData.category || "",
        };

        // Append data object as a JSON string with key "data"
        formData.append("data", JSON.stringify(dataFields));

        const result = await makeProduct(formData);

        if (result?.data?.success) {
          dispatch(resetProductState());
          setSelectedValue(undefined);
          toast({
            title: "Product Created successfully!",
            description: getCurrentFormattedDate(),
            style: { background: "#7af59b", color: "#2D3A4B" },
            //   action: (
            //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            //   ),
          });
          location.reload();
        }
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setZodError(e.errors);
        console.log(e.errors);

        toast({
          title: "Please check all required fields!!",
          description: "",
          style: {
            background: "#FF4D4D",
            color: "#fff",
          },
        });
      } else {
        console.error("Unexpected error:", e);
      }
    }
  };

  return (
    <div className="pr-6 w-full">
      <Card className="h-screen border-t-0 rounded-t-none overflow-y-scroll no-scrollbar">
        <CardHeader>
          <CardTitle>Create a new product</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4 grid-cols-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Category</Label>
              <Select value={selectedValue} onValueChange={handleChange}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {categoryLoading ? (
                    <SelectItem value="Loading...">Loading</SelectItem>
                  ) : (
                    data?.data?.map((data) => (
                      <SelectItem
                        key={data?._id}
                        className="capitalize"
                        value={data?.name}
                      >
                        {data?.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>

              <span className="text-red-600 text-sm">
                {zodError?.find((err) => err.path[0] === "category")?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                value={productData.name}
                onChange={(e) => dispatch(setName(e.target.value))}
                id="name"
                placeholder="Name of your product"
              />
              <span className="text-red-600 text-sm">
                {zodError?.find((err) => err.path[0] === "name")?.message}
              </span>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price</Label>
              <Input
                value={productData.price}
                onChange={(e) => dispatch(setPrice(e.target.value))}
                id="price"
                placeholder="Price"
              />
              <span className="text-red-600 text-sm">
                {zodError?.find((err) => err.path[0] === "price")?.message}
              </span>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input onChange={handleFileChange} id="picture" type="file" />
              <span className="text-red-600 text-sm">
                {zodError?.find((err) => err.path[0] === "productImg")?.message}
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 mt-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              onChange={(e) => dispatch(setDescription(e.target.value))}
              className=""
              value={productData.description}
              placeholder="Type your description here."
            />
            <span className="text-red-600 text-sm">
              {zodError?.find((err) => err.path[0] === "description")?.message}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          {/* <Button variant="outline">Clear</Button> */}
          {makeProductLoading ? (
            <Button className="capitalize bg-[#2D3A4B] rounded-none mt-4 flex gap-x-2 items-center cursor-default">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait
            </Button>
          ) : (
            <Button onClick={submitProduct} className="w-96 text-xl">
              Publish
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default MakeProduct;
