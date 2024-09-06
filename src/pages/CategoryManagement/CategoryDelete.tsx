import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  useDeleteCategoryMutation,
  useGetSingleCategoryProductsQuery,
} from "@/redux/features/category/Category";
import { getCurrentFormattedDate } from "../ProductsDetails/TimeFormate";

const CategoryDelete = ({ id }: { id: string }) => {
  const [deleteCategory] = useDeleteCategoryMutation();
  const { toast } = useToast();
  const { data } = useGetSingleCategoryProductsQuery(id);
  const deleteCategoryData = async () => {
    const result = await deleteCategory(id);

    if (result?.data?.success) {
      toast({
        title: "Category Deleted successfully!",
        description: getCurrentFormattedDate(),
        style: { background: "#7af59b", color: "#2D3A4B" },
        //   action: (
        //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        //   ),
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="p-0 border-none w-full flex justify-start font-semibold text-red-600"
          disabled={data?.data?.result.length > 0}
          title={
            data?.data?.result.length > 0
              ? `You cannot delete this category. The are ${data?.data?.result.length} products in this category`
              : "Delete now"
          }
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      {}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            category and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteCategoryData}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CategoryDelete;
