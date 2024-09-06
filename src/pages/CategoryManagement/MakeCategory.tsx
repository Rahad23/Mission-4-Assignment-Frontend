import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useCreateCategoryMutation } from "@/redux/features/category/Category";
import { useState } from "react";
import { getCurrentFormattedDate } from "../ProductsDetails/TimeFormate";
import { Loader2 } from "lucide-react";

const MakeCategory = () => {
  const [inputText, setInputText] = useState("");
  const [stock, setStock] = useState("");
  const { toast } = useToast();
  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  const makeCategory = async () => {
    if (inputText && stock) {
      const data = { name: inputText, stock: Number(stock) };

      const result = await createCategory(data);
      if (result?.data?.success) {
        setInputText("");
        setStock("");
        toast({
          title: "Create category successfully!",
          description: getCurrentFormattedDate(),
          style: { background: "#7af59b", color: "#2D3A4B" },
          //   action: (
          //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          //   ),
        });
      }
    }
  };

  return (
    <div className="w-full mt-32">
      <Card className="w-96 mx-auto py-1">
        <CardContent className="">
          <div className="mt-3">
            <h1 className="text-lg font-semibold">Make Category</h1>
          </div>
          <div className="mt-4 flex flex-col gap-y-3">
            <div>
              <Label htmlFor="name" className="text-gray-950">
                Name:{" "}
              </Label>
              <Input
                onChange={(e) => setInputText(e.target.value)}
                className="mt-1"
                value={inputText}
                id="name"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="name" className="text-gray-950">
                Stock:{" "}
              </Label>
              <Input
                onChange={(e) => setStock(e.target.value)}
                className=""
                value={stock}
                type="number"
              />
            </div>
            {isLoading ? (
              <Button className="capitalize bg-[#2D3A4B] rounded-none mt-4 flex gap-x-2 items-center cursor-default">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait
              </Button>
            ) : (
              <Button onClick={makeCategory} className="mt-2">
                Save
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MakeCategory;
