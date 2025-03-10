import { useProductStore } from "../store/product";
import { NavBack, NavBar } from "../components/index";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    productName: "",
    price: "",
    image: null,
  });

  const { createProducts } = useProductStore();

  const handleFileChange = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setNewProduct({ ...newProduct, image: file });
    }
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const { success, message } = await createProducts(newProduct);
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
    setNewProduct({ productName: "", price: "", image: null });
  };

  return (
    <div>
      <div className="flex justify-center">
        <NavBar></NavBar>
      </div>

      <div className="flex justify-center">
        <NavBack></NavBack>
      </div>

      <div className="mt-24 flex justify-center items-center">
        <div className="flex flex-col max-w-[800px] dark:bg-[#313131] shadow-lg py-8">
          <h2 className="text-center font-semibold text-3xl dark:text-white">
            CREATE NEW PRODUCT
          </h2>
          <div className="max-w-[800px]">
            <form
              action=""
              className="dark:text-white mt-8 max-sm:justify-center text-xl flex flex-col px-10 gap-5"
            >
              <div className="flex justify-between max-sm:flex-col gap-2">
                <label className="mr-5">Product Name</label>
                <input
                  className="px-3 rounded-sm dark:bg-[#6d6d6d] w-[350px] border"
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  value={newProduct.productName}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      productName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-between max-sm:flex-col gap-2">
                <label className="mr-5">Product Price</label>
                <input
                  className="px-3 rounded-sm dark:bg-[#6d6d6d] w-[350px] border"
                  type="number"
                  name="price"
                  placeholder="Product Price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-between max-sm:flex-col gap-2">
                <label className="mr-5">Product image</label>
                <input
                  type="file"
                  className=" rounded-sm dark:bg-[#6d6d6d] w-[350px]"
                  name="image"
                  //placeholder="Product Image"
                  //value={newProduct.image}
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-pink-600 py-1 px-5 text-white"
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Toaster position="bottom-center" closeButton richColors></Toaster>
      </div>
    </div>
  );
};

export default CreatePage;
