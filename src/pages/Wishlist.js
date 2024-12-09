// import React, { useEffect, useState } from 'react';
// import { deleteWishlist, getWishlist } from '../api/Api';
// import CommenSection from '../component/CommenSection';
// import WishlistCard from '../component/WishlistCard';

// function Wishlist() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const res = await getWishlist();
//       setData(res);
//     } catch (err) {
//       setError('Failed to fetch wishlist items.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteWishlistHandler = async (productId) => {
//    await deleteWishlist(productId)
//     fetchData();
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <CommenSection title="Wishlist" />

//       <div className="container mx-auto py-12 px-10">
//         {data ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {data.map((item) => (
//               <WishlistCard key={item._id} data={item.productId} onRemove={deleteWishlistHandler}></WishlistCard>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-gray-500">Your wishlist is empty.</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Wishlist;

import React, { useEffect, useState } from 'react';
import { deleteWishlist, getWishlist, addToCart } from '../api/Api';
import CommenSection from '../component/CommenSection';
import {  FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Wishlist() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

   const fetchData = async () => {
    try {
      const res = await getWishlist();
      setData(res);
    } catch (err) {
      setError('Failed to fetch wishlist items.');
    } finally {
      setLoading(false);
    }
  };
  const deleteWishlistHandler = async (productId) => {
   await deleteWishlist(productId)
    fetchData();
  };

 

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <CommenSection title="Wishlist" />

      <div className="container mx-auto py-12 px-10">
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <div key={item._id} className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-300">
                <Link to={`/productdescription/${item.productId._id}`}>
                  <img
                    className="w-full bg-opacity-20 bg-[#7a95a2] object-cover rounded-t-lg"
                    src={item.productId.productImage} // Display product image
                    alt={item.productId.model}
                  />
                </Link>
                <div className="flex flex-col flex-grow p-4 bg-gray-50">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.productId.brand} {item.productId.model}
                  </h2>
                  <p className="text-gray-600 mb-3">
                    <strong>Processor:</strong> {item.productId.features.processor}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Camera:</strong> {item.productId.features.camera}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Memory:</strong> {item.productId.features.memory}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Storage:</strong> {item.productId.features.storage}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>OS:</strong> {item.productId.features.os}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Rating:</strong> {item.productId.features.rating} / 5
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-red-600 font-semibold text-lg">
                      ${item.productId.price}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
                  <button
                    className="flex items-center text-gray-700 hover:text-red-600 transition-transform transform hover:scale-110"
                    onClick={() => deleteWishlistHandler(item.productId._id)}
                  >
                    <FaRegHeart className="text-xl mr-2" />
                    <span className="font-medium text-base">Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">Your wishlist is empty.</div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
