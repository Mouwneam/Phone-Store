import { useProductStore } from "../store/product.js";
import { NavBar, ProductCard } from "../components/index";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { getAllProducts, products, loading } = useProductStore();

  const emptyProduct = (
    <div className="flex gap-5">
      <h6>No products found</h6>
      <h6 className="text-pink-600">
        <Link to="/CreatePage">Create a product</Link>
      </h6>
    </div>
  );

  const mainBody = async () => {
    await products.length;
    const bod = products.length > 0 ? emptyProduct : "";
    return bod;
  };

  useEffect(() => {
    getAllProducts();
    mainBody();
  }, [getAllProducts]);

  /*console.log("products: ", products);
  console.log(products.length);*/

  //const mainBody = products.length > 0 ? setBod(emptyProduct) : "";

  return (
    <div className=" bg-grape/20 dark:text-white mb-5">
      <div className="flex justify-center">
        <NavBar></NavBar>
      </div>

      <section className="flex flex-col justify-center items-center mt-10">
        <div className="w-[90%] flex flex-col items-center ">
          <h4 className="text-4xl mb-7 font-semibold">Products</h4>
          <div>{loading && <p>Loading</p>}</div>
          <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1 w-full">
            {products.map((product) => (
              <ProductCard key={product.id} data={product}></ProductCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
