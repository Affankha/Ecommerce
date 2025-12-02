import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion } from "motion/react";
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="py-8 mb-12 text-4xl text-center">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
            // rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            delay: 1,
          }}
        >
          <Title text1={"LATEST"} text2={"COLLECTION"} />
        </motion.div>
        <motion.div
          animate={{ opacity: 0, opacity: 2 }}
          transition={{ delay: 2 }}
          whileHover={{backgroundColor: "red"}}
        >
          <p className="w-3/4 m-auto text-lg font-light text-gray-700 sm:text-lg">
            Discover the essence of modern elegance with our latest collection,
            curated to elevate your style effortlessly.
          </p>
        </motion.div>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 place-items-center">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
