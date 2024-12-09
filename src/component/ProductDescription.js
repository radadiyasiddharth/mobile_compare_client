import React, {  useEffect, useState } from "react";
import { motion } from "framer-motion";
import {  addToWishlist, findProductById } from "../api/Api";
import { useParams } from "react-router-dom";
import {  FaRegHeart } from "react-icons/fa"; 

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

function ProductDescription() {
  

  const addtowishlist = async (productId) => {
    await addToWishlist(productId);
  };

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await findProductById(productId);
      setProduct(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error}</div>;
  if (!product) return <div className="text-center text-gray-600">Product not found</div>;

  return (
    <motion.div
      className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200 my-14"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative flex flex-col md:flex-row">
        <div className="relative  md:w-2/3 mb-6 md:mb-0 md:mr-6 overflow-hidden">
          <motion.img
            src={product.productImage}
            alt={product.model}
            className="w-[400px] h-full mx-auto rounded-lg"
            variants={imageVariants}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.div className="flex flex-col justify-between p-4 md:w-1/3">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.brand} {product.model}
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Processor:</strong> {product.features.processor}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Camera:</strong> {product.features.camera}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Memory:</strong> {product.features.memory}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Storage:</strong> {product.features.storage}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>OS:</strong> {product.features.os}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Rating:</strong> {product.features.rating} / 5
          </p>
          {product.productFakePrice && (
            <div className="text-gray-500 line-through mb-4">{`$${product.productFakePrice.toFixed(
              2
            )}`}</div>
          )}
          <div className="text-red-600 font-bold text-2xl mb-6">
            {`$${product.price.toFixed(2)}`}
          </div>
          <div className="flex space-x-4">
            <button
              className="flex items-center text-gray-700 hover:text-red-600 transition-transform transform hover:scale-110"
              onClick={() => addtowishlist(product._id)}
            >
              <FaRegHeart className="text-xl mr-2" />
              <span className="font-medium text-base">Wishlist</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProductDescription;
