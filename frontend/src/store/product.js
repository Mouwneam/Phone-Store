import { create } from "zustand";

const backendKey = import.meta.env.VITE_API_URL;

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  setProducts: (products) => set({ products }),
  createProducts: async (newProduct) => {
    if (!newProduct.productName || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields." };
    }

    const formData = new FormData();
    formData.append("productName", newProduct.productName);
    formData.append("price", newProduct.price);
    formData.append("image", newProduct.image);

    const res = await fetch(`${backendKey}/api/products`, {
      method: "POST",
      /*headers: {
        "Content-Type": "json/application",
      },*/
      //body: JSON.stringify(newProduct),
      body: formData,
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: `Product created successfully.` };
  },
  getAllProducts: async () => {
    set({ loading: true });
    const fetchProducts = await fetch(`${backendKey}/api/products`);
    const data = await fetchProducts.json();
    set({ products: data.data, loading: false });
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`${backendKey}/api/products/${pid}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    //Update the UI immediately, without needing a refresh
    set((state) => ({
      products: state.products.filter((product) => product._id != pid),
    }));
    return { success: true, message: data.message };
  },
}));
