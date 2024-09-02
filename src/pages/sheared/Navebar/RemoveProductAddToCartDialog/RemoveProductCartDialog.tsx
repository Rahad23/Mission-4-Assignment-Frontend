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

import { useUndoProductMutation } from "@/redux/features/addToCart/AddToCart";
import { RxCross2 } from "react-icons/rx";

const RemoveProductCartDialog = ({ id }) => {
  const [undoProduct, { isLoading: undoLoading }] = useUndoProductMutation();

  const undoAddToCart = async (id: string) => {
    const result = await undoProduct(id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="p-0 rounded-none border-none">
          <RxCross2
            className="absolute top-0 right-0 font-semibold text-red-600 cursor-pointer hover:text-red-700 hover:drop-shadow-lg hover:text-lg"
            title="Remove"
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Do you want to remove the product from the cart?
          </AlertDialogTitle>
          <AlertDialogDescription>
            If you remove product add-to-cart click the confirm button.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => undoAddToCart(id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveProductCartDialog;
