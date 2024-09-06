import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaRegEdit } from "react-icons/fa";
import productIcon from "../../assets/icons/new-product.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCategoryQuery } from "@/redux/features/category/Category";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  resetProductState,
  setCategoryId,
  setDescription,
  setName,
  setPrice,
} from "@/redux/features/products/ProductSlice";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { productEditSchema } from "./ProductDataValidation";
import {
  useGetOneProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/products/Products";
import { getCurrentFormattedDate } from "../ProductsDetails/TimeFormate";
import { z, ZodIssue } from "zod";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Loader2 } from "lucide-react";
const ProductEditDialog = ({ id }: { id: string }) => {
  interface SelectMapType {
    _id: string;
    name: string;
    __v: number;
    stock: number;
  }

  interface ProductEditResponse {
    data?: {
      success: boolean;
      message: string;
    };
    error?: {
      data: {
        errorSources: Array<{ message: string }>;
      };
    };
    isLoading: boolean;
  }

  const dispatch = useDispatch();
  const productData = useAppSelector((state: RootState) => state.product);
  const { data, isLoading: categoryLoading } = useGetCategoryQuery(undefined);
  const [adImgFile, setAdImgFile] = useState<File | null>(null);
  const [zodError, setZodError] = useState<ZodIssue[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const [updateProduct, { isLoading: productUpdateLoading }] =
    useUpdateProductMutation<ProductEditResponse>();
  const { data: singleProductData } = useGetOneProductQuery(id);

  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAdImgFile(file);
    }
  };

  const handleChange = (value: string) => {
    setSelectedValue(value);

    const categoryId = data?.data?.find(
      (category: { name: string }) => category?.name === value
    )?._id;
    dispatch(setCategoryId(categoryId));
  };

  //update product mutation
  const submitProduct = async () => {
    try {
      // zod validation
      const resultValidation = productEditSchema.parse(productData);

      if (resultValidation) {
        const formData = new FormData();

        // Append file with key "file"
        if (adImgFile) {
          formData.append("file", adImgFile);
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

        const payload = {
          formData,
          id,
        };

        const result = (await updateProduct(payload)) as ProductEditResponse;

        if (result?.data?.success) {
          dispatch(resetProductState());
          setSelectedValue(undefined);
          toast({
            title: "Product Updated successfully!",
            description: getCurrentFormattedDate(),
            style: { background: "#7af59b", color: "#2D3A4B" },
            //   action: (
            //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            //   ),
          });
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
    <Dialog>
      <DialogTrigger className="w-full">
        <Button
          variant="outline"
          className="w-full p-0 rounded-none border-none flex justify-between"
        >
          <FaRegEdit className="mr-2 h-4 w-4" />
          Edit
          <DropdownMenuShortcut>⌘Edit</DropdownMenuShortcut>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-xl h-[90%]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-x-1">
            Edit Product{" "}
            <img className="w-8 animate-bounce" src={productIcon} alt="" />
          </DialogTitle>
          <DialogDescription>
            Make changes to your product data here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="grid w-full items-center gap-4 grid-cols-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Category</Label>
              <Select
                value={
                  selectedValue
                    ? selectedValue
                    : singleProductData?.data?.category?.name
                }
                onValueChange={handleChange}
              >
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {categoryLoading ? (
                    <SelectItem value="Loading...">Loading</SelectItem>
                  ) : (
                    data?.data?.map((data: SelectMapType) => (
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
                defaultValue={
                  productData.name
                    ? productData.name
                    : singleProductData?.data?.name
                }
                onBlur={(e) => dispatch(setName(e.target.value))}
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
                defaultValue={singleProductData?.data?.price}
                onBlur={(e) => dispatch(setPrice(e.target.value))}
                id="price"
                placeholder="Price"
              />
              <span className="text-red-600 text-sm">
                {zodError?.find((err) => err.path[0] === "price")?.message}
              </span>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="">Change Picture</Label>
              <div className="flex items-center gap-x-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="p-0 rounded-none">
                        <PhotoProvider>
                          <PhotoView src={singleProductData?.data?.productImg}>
                            <img
                              className="w-28 cursor-pointer"
                              src={singleProductData?.data?.productImg}
                              alt=""
                            />
                          </PhotoView>
                        </PhotoProvider>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-green-500 text-gray-100">
                      <p className="font-semibold">View Photo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Input
                  onChange={handleFileChange}
                  className=""
                  id="picture"
                  type="file"
                />
              </div>
              <span className="text-red-600 text-sm">
                {!adImgFile && "Product image is required!"}
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 mt-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              onBlur={(e) => dispatch(setDescription(e.target.value))}
              className=""
              defaultValue={
                productData.description
                  ? productData.description
                  : singleProductData?.data?.description
              }
              placeholder="Type your description here."
            />
            <span className="text-red-600 text-sm">
              {zodError?.find((err) => err.path[0] === "description")?.message}
            </span>
          </div>
        </div>
        <DialogFooter>
          {productUpdateLoading ? (
            <Button className="capitalize bg-[#2D3A4B] rounded-none mt-4 flex gap-x-2 items-center cursor-default">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait
            </Button>
          ) : (
            <Button onClick={submitProduct}>Save changes</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductEditDialog;
