import { useProductStore } from "../store/product.js";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { toast, Toaster } from "sonner";

const ProductCard = ({ data }) => {
  const { deleteProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  return (
    <div className="border w-full h-full rounded-xl shadow-lg">
      <div className="w-full h-[300px] bg-white rounded-t-xl">
        <img
          className="h-full w-full rounded-t-xl object-cover object-center"
          src={data.image}
          alt=""
        />
      </div>

      <div className="p-3">
        <h2>{data.productName}</h2>
        <p>${data.price}</p>
        <div className="flex flex-row my-4 gap-3">
          <button className="p-4 bg-[#3c91ec] rounded-xl">
            <CiEdit color="white" />
          </button>
          <button
            className="p-4 bg-[#B82132] rounded-xl"
            onClick={() => handleDeleteProduct(data._id)}
          >
            <MdDeleteForever color="white"></MdDeleteForever>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Toaster position="bottom-center" closeButton richColors></Toaster>
      </div>
    </div>
  );
};

export default ProductCard;
