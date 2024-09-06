import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useMakeAdvertisementMutation } from "@/redux/features/advertisement/advertisement";
import {
  resetAdState,
  setAdName,
  setAdTitle,
  setCategoryId,
} from "@/redux/features/advertisement/advertisementSlice";
import { useGetCategoryQuery } from "@/redux/features/category/Category";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCurrentFormattedDate } from "../ProductsDetails/TimeFormate";
import { advertiseSchema } from "./BannerAdManagementDataValidation";
import { z, ZodIssue } from "zod";
const BannerAdManagement = () => {
  interface AdvertisementResponse {
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

  interface SelectMapType {
    _id: string;
    name: string;
    __v: number;
    stock: number;
  }

  const { data, isLoading } = useGetCategoryQuery(undefined);

  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const [zodError, setZodError] = useState<ZodIssue[]>([]);
  const [adImgFile, setAdImgFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const advertisementData = useAppSelector(
    (state: RootState) => state.advertisement
  );
  const [makeAdvertisement, { isLoading: makeAdvertisementLoading }] =
    useMakeAdvertisementMutation<AdvertisementResponse>();
  const { toast } = useToast();
  const handleSelectInputData = (value: string) => {
    setSelectedValue(value);
    const categoryId = data?.data?.find(
      (category: { name: string }) => category?.name === value
    )?._id;
    dispatch(setCategoryId(categoryId));
  };

  //set file
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAdImgFile(file);
    }
  };

  const handleSubmit = async () => {
    try {
      const resultValidation = advertiseSchema.parse(advertisementData);

      if (resultValidation) {
        const formData = new FormData();

        // Append file with key "file"
        if (adImgFile) {
          formData.append("file", adImgFile);
        }

        // Create an object for other data fields
        const dataFields = {
          title: advertisementData.ad_title,
          ad_name: advertisementData.ad_name,
          category: advertisementData.category || "",
        };

        // Append data object as a JSON string with key "data"
        formData.append("data", JSON.stringify(dataFields));

        const result = (await makeAdvertisement(
          formData
        )) as AdvertisementResponse;

        if (result?.data?.success) {
          dispatch(resetAdState());

          toast({
            title: "Product Created successfully!",
            description: getCurrentFormattedDate(),
            style: { background: "#7af59b", color: "#2D3A4B" },
            //   action: (
            //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            //   ),
          });
        }

        if (result?.error) {
          toast({
            title: `${
              result?.error?.data?.errorSources[0]?.message
                ? result?.error?.data?.errorSources[0]?.message
                : "ERROR"
            }`,
            description: getCurrentFormattedDate(),
            style: { background: "#EF4444", color: "#ffff" },
            //   action: (
            //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            //   ),
          });
        }
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setZodError(e.errors);

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
    <div className="w-full mt-32">
      <Card className="mx-auto lg:w-[500px] w-[350px] px-4 text-lg font-medium">
        <h1 className="mt-5 text-gray-900 font-medium">Make Banner Ad</h1>
        <CardContent className="p-0 mt-4 mb-10 flex flex-col gap-y-2">
          <div>
            <Label htmlFor="title">Ad Title</Label>
            <Input
              value={advertisementData.ad_title}
              onChange={(e) => dispatch(setAdTitle(e.target.value))}
              id="title"
              type="text"
            />
            <span className="text-red-600 text-sm">
              {zodError?.find((err) => err.path[0] === "ad_title")?.message}
            </span>
          </div>
          <div>
            <Label htmlFor="name">Ad Name</Label>
            <Input
              onChange={(e) => dispatch(setAdName(e.target.value))}
              id="name"
              type="text"
            />
            <span
              className={
                zodError?.find((err) => err.path[0] === "ad_name")?.message
                  ? "text-red-600 text-sm"
                  : "text-gray-400 text-sm"
              }
            >
              {zodError?.find((err) => err.path[0] === "ad_name")?.message
                ? zodError?.find((err) => err.path[0] === "ad_name")?.message
                : "Always write unique Ad name"}
            </span>
          </div>
          <div>
            <Label htmlFor="category">Select Category</Label>
            <Select value={selectedValue} onValueChange={handleSelectInputData}>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  {isLoading ? (
                    <h1>Loading...</h1>
                  ) : (
                    data?.data.map((data: SelectMapType) => (
                      <SelectItem
                        key={data?._id}
                        className="capitalize"
                        value={data?.name}
                      >
                        {data?.name}
                      </SelectItem>
                    ))
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
            <span className="text-red-600 text-sm">
              {zodError?.find((err) => err.path[0] === "category")?.message}
            </span>
          </div>
          <div>
            <Label htmlFor="picture">Ad-Image</Label>
            <Input onChange={handleFileChange} id="picture" type="file" />
            <span className="text-red-600 text-sm">
              {!adImgFile && "Ad Image Is Required"}
            </span>
          </div>

          <div className="mt-7 flex justify-center">
            {makeAdvertisementLoading ? (
              <Button className="capitalize bg-[#2D3A4B] rounded-none mt-4 flex gap-x-2 items-center cursor-default">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="w-[50%] text-xl">
                Save
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BannerAdManagement;
