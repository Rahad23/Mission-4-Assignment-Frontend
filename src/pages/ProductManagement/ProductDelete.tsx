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
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { useDeleteProductMutation } from "@/redux/features/products/Products";
import { MdOutlineDelete } from "react-icons/md";

const ProductDelete = ({ id, isDelete }) => {
  const [deleteProduct, { isLoading: deleteLoading }] =
    useDeleteProductMutation(id);

  const deleteProductInServer = async () => {
    const result = await deleteProduct(id);
    if (result?.data?.success) {
      isDelete(true);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full p-0 rounded-none border-none flex justify-between"
        >
          <MdOutlineDelete className="mr-2 h-4 w-4 text-red-600" />
          Delete
          <DropdownMenuShortcut>⌘Delete</DropdownMenuShortcut>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            product data from our servers
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteProductInServer}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProductDelete;
