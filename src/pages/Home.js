// import React, { useContext, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { get_product } from "../api/Api";
// import Context from "../context";
// import { Link } from "react-router-dom";

// const textVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 2,
//       ease: "easeInOut",
//     },
//   },
// };

// function Home() {
//   const [allProduct, setAllProduct] = useState([]);
//   const [selectedModel, setSelectedModel] = useState(""); // State for selected model
//   const { user } = useContext(Context);

//   useEffect(() => {
//     get_product()
//       .then((res) => {
//         setAllProduct(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   // Function to handle selection of a model
//   const handleModelChange = (e) => {
//     setSelectedModel(e.target.value);
//   };

//   // Filter the products based on the selected model
//   const filteredProducts = allProduct.filter(
//     (product) => product.model === selectedModel
//   );

//   return (
//     <div className="overflow-x-hidden">
//       {/* Hero Section */}
//       <div className="bg-[#e7e7e7] relative">
//         {user?.role === "admin" && (
//           <div className="fixed z-50 right-10 bottom-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
//             <Link to="/admin">
//               <p className="text-sm">admin</p>
//             </Link>
//           </div>
//         )}
//         <div className="container mx-auto px-4 py-12 md:flex md:flex-row items-center">
//           <motion.div
//             className="md:w-1/2 p-6 text-center md:text-left"
//             initial="hidden"
//             animate="visible"
//             variants={textVariants}
//           >
//             <p className="text-lg font-semibold text-[#474747] mb-2">
//               WHAT WE'RE ABOUT
//             </p>
//             <div className="font-extrabold w-full">
//               <h2>Find Your Perfect Phone</h2>
//             </div>
//             <p className="text-[#474747] mb-6">
//               Choose a model from the dropdown to see more details.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Dropdown to Select a Model */}
//       <div className="container mx-auto px-4 py-6">
//         <label
//           htmlFor="model-select"
//           className="block text-lg font-semibold mb-2"
//         >
//           Select a Model:
//         </label>
//         <select
//           id="model-select"
//           value={selectedModel}
//           onChange={handleModelChange}
//           className="block w-full p-2 border border-gray-300 rounded-lg"
//         >
//           <option value="">-- Select a Model --</option>
//           {allProduct.map((product, index) => (
//             <option key={index} value={product.model}>
//               {product.model}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Products Section */}
//       <div className="container mx-auto px-4 py-12 text-center">
//         <p className="text-3xl font-bold text-[#212121] mb-4">Product Details</p>
//         {filteredProducts.length === 0 ? (
//           <p className="text-lg text-[#474747] max-w-3xl mx-auto mb-6">
//             No products available for the selected model.
//           </p>
//         ) : (
//           <div className="max-w-[700px] mx-auto">
//             {filteredProducts.map((val, index) => (
//               <div key={index} className="border rounded-lg shadow-md mx-auto p-6">
//                 {/* Mobile Product Card */}
//                 <div className="flex flex-col md:flex-row">
//                   {/* Image */}
//                   <div className="md:w-1/3 flex justify-center items-center">
//                     <img
//                       src={val.productImage}
//                       alt={val.model}
//                       className="w-full h-48 object-cover rounded-md"
//                     />
//                   </div>

//                   {/* Product Details */}
//                   <div className="md:w-2/3 mt-4 md:mt-0 md:ml-4">
//                     <h3 className="text-2xl font-bold text-[#212121] mb-2">
//                       {val.model}
//                     </h3>
//                     <p className="text-xl text-[#FF7004] mb-2">${val.price}</p>

//                     {/* Product Features in Grid Layout */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <p className="text-sm text-[#474747]">
//                         <span className="font-semibold">Rating:</span>{" "}
//                         {val.features.rating}
//                       </p>
//                       <p className="text-sm text-[#474747]">
//                         <span className="font-semibold">Processor:</span>{" "}
//                         {val.features.processor}
//                       </p>
//                       <p className="text-sm text-[#474747]">
//                         <span className="font-semibold">RAM:</span>{" "}
//                         {val.features.ram}GB
//                       </p>
//                       <p className="text-sm text-[#474747]">
//                         <span className="font-semibold">Storage:</span>{" "}
//                         {val.features.storage}GB
//                       </p>
//                       <p className="text-sm text-[#474747]">
//                         <span className="font-semibold">Camera:</span>{" "}
//                         {val.features.camera}MP
//                       </p>
//                       <p className="text-sm text-[#474747]">
//                         <span className="font-semibold">Battery:</span>{" "}
//                         {val.features.battery}mAh
//                       </p>
//                     </div>

//                     {/* Action Button */}
//                     <Link to={`productdescription/${val?._id}`}>
//                       <button className="mt-4 px-4 py-2 bg-[#FF7004] text-white rounded-md transition hover:bg-[#212121]">
//                         View More
//                       </button>
//                     </Link> 
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { get_product } from "../api/Api";
import Context from "../context";
import { Link } from "react-router-dom";
import banner1 from "../assets/bannner1.png"

// Variants for text animation
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Home() {
  const [allProduct, setAllProduct] = useState([]);
  const [selectedModel, setSelectedModel] = useState(""); // State for selected model
  const { user } = useContext(Context);

  useEffect(() => {
    get_product()
      .then((res) => {
        setAllProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function to handle selection of a model
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  // Filter the products based on the selected model
  const filteredProducts = allProduct.filter(
    (product) => product.model === selectedModel
  );

  return (
    <div className="overflow-x-hidden">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] mb-8">
        <img
          src={banner1}
          alt="banner"
          className="w-full h-full object-cover"
        />
        {/* Optional Text Overlay on Banner */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 md:flex md:flex-row items-center text-dark">
          <motion.div
            className="md:w-1/2 p-6 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <p className="text-2xl font-semibold  mb-2">
              WHAT WE'RE ABOUT
            </p>
            <div className="font-extrabold text-xl w-full">
              <h2>Find Your Perfect Phone</h2>
            </div>
            <p className="text-lg mb-6">
              Choose a model from the dropdown to see more details.
            </p>
          </motion.div>
        </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#e7e7e7] relative">
        {user?.role === "admin" && (
          <div className="fixed z-50 right-10 bottom-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <Link to="/admin">
              <p className="text-sm">admin</p>
            </Link>
          </div>
        )}
       
      </div>

      {/* Dropdown to Select a Model */}
      <div className="container mx-auto px-4 py-6">
        <label
          htmlFor="model-select"
          className="block text-lg font-semibold mb-2"
        >
          Select a Model:
        </label>
        <select
          id="model-select"
          value={selectedModel}
          onChange={handleModelChange}
          className="block w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">-- Select a Model --</option>
          {allProduct.map((product, index) => (
            <option key={index} value={product.model}>
              {product.model}
            </option>
          ))}
        </select>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-3xl font-bold text-[#212121] mb-4">Product Details</p>
        {filteredProducts.length === 0 ? (
          <p className="text-lg text-[#474747] max-w-3xl mx-auto mb-6">
            No products available for the selected model.
          </p>
        ) : (
          <div className="max-w-[700px] mx-auto">
            {filteredProducts.map((val, index) => (
              <div key={index} className="border rounded-lg shadow-md mx-auto p-6">
                {/* Mobile Product Card */}
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3 flex justify-center items-center">
                    <img
                      src={val.productImage}
                      alt={val.model}
                      className="w-full  object-cover rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="md:w-2/3 mt-4 md:mt-0 md:ml-4">
                    <h3 className="text-2xl font-bold text-[#212121] mb-2">
                      {val.model}
                    </h3>
                    <p className="text-xl text-[#FF7004] mb-2">${val.price}</p>

                    {/* Product Features in Grid Layout */}
                    <div className="grid grid-cols-2 gap-4">
                      <p className="text-sm text-[#474747]">
                        <span className="font-semibold">Rating:</span>{" "}
                        {val.features.rating}
                      </p>
                      <p className="text-sm text-[#474747]">
                        <span className="font-semibold">Processor:</span>{" "}
                        {val.features.processor}
                      </p>
                      <p className="text-sm text-[#474747]">
                        <span className="font-semibold">RAM:</span>{" "}
                        {val.features.ram}GB
                      </p>
                      <p className="text-sm text-[#474747]">
                        <span className="font-semibold">Storage:</span>{" "}
                        {val.features.storage}GB
                      </p>
                      <p className="text-sm text-[#474747]">
                        <span className="font-semibold">Camera:</span>{" "}
                        {val.features.camera}MP
                      </p>
                      <p className="text-sm text-[#474747]">
                        <span className="font-semibold">Battery:</span>{" "}
                        {val.features.battery}mAh
                      </p>
                    </div>

                    {/* Action Button */}
                    <Link to={`productdescription/${val?._id}`}>
                      <button className="mt-4 px-4 py-2 bg-[#FF7004] text-white rounded-md transition hover:bg-[#212121]">
                        View More
                      </button>
                    </Link> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
