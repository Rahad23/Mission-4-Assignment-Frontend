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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/features/category/Category";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { getCurrentFormattedDate } from "../ProductsDetails/TimeFormate";

const CategoryEdit = ({ id }: { id: string }) => {
  const [inputText, setInputText] = useState("");
  const [stock, setStock] = useState("");
  const { toast } = useToast();
  const { data } = useGetSingleCategoryQuery(id);
  const [updateCategory, { isLoading: updateCategoryLoading }] =
    useUpdateCategoryMutation();

  const updateCategoryData = async () => {
    const data = {
      name: inputText,
      stock: Number(stock),
      id: id,
    };

    if (inputText && stock && id) {
      const result = await updateCategory(data);

      if (result?.data?.success) {
        setStock("");
        setInputText("");
        toast({
          title: "Category Updated successfully!",
          description: getCurrentFormattedDate(),
          style: { background: "#7af59b", color: "#2D3A4B" },
          //   action: (
          //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          //   ),
        });
      }
    } else {
      toast({
        title: "Please check all required field!",
        description: "",
        style: { background: "#EF4444", color: "#ffff" },
        //   action: (
        //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        //   ),
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="p-0 border-none w-full flex justify-start font-semibold capitalize text-[#2D3A4B]"
        >
          Edit category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Make changes to your category data here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={data?.data?.category?.name}
              className="col-span-3"
              onBlur={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Stock
            </Label>
            <Input
              onBlur={(e) => setStock(e.target.value)}
              defaultValue={data?.data?.category?.stock}
              id="username"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          {updateCategoryLoading ? (
            <Button className="capitalize bg-[#2D3A4B] rounded-none mt-4 flex gap-x-2 items-center cursor-default">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> wait
            </Button>
          ) : (
            <Button onClick={updateCategoryData}>Save changes</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryEdit;
