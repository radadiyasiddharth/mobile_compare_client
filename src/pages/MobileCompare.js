// import React, { useState, useEffect, useContext } from "react";
// import { get_product } from "../api/Api";
// import Context from "../context"; 

// function MobileCompare() {
//   const [mobiles, setMobiles] = useState([]);
//   const [selectedMobile1, setSelectedMobile1] = useState(null);
//   const [selectedMobile2, setSelectedMobile2] = useState(null);
//   const [comparisonResult, setComparisonResult] = useState(null);
//   const { user } = useContext(Context); 

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const products = await get_product();
//       setMobiles(products);
//     };
//     fetchProducts();
//   }, []);


//   const handleCompare = () => {
//     if (!selectedMobile1 || !selectedMobile2) {
//       alert("Please select two mobiles to compare.");
//       return;
//     }

//     if (selectedMobile1._id === selectedMobile2._id) {
//       alert("Please select a different model for comparison.");
//       return;
//     }

//     setComparisonResult([selectedMobile1, selectedMobile2]);
//   };


//   if (!user) {
//     return (
//       <div className="container mx-auto py-8 text-center">
//         <h1 className="text-2xl font-bold mb-4">Please Log in to Compare Mobiles</h1>
//         <p className="text-lg">
//           You need to be logged in to compare mobile phones. Please{" "}
//           <a href="/login" className="text-blue-500 underline">log in</a> or{" "}
//           <a href="/signup" className="text-blue-500 underline">sign up</a> to continue.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-bold mb-4">Compare Mobiles</h1>


//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div>
//           <label htmlFor="mobile1" className="block text-lg font-medium mb-2">
//             Select Mobile 1
//           </label>
//           <select
//             id="mobile1"
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             onChange={(e) =>
//               setSelectedMobile1(mobiles.find((m) => m._id === e.target.value))
//             }
//           >
//             <option value="">Select a mobile</option>
//             {mobiles.map((mobile) => (
//               <option key={mobile._id} value={mobile._id}>
//                 {mobile.brand} {mobile.model}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="mobile2" className="block text-lg font-medium mb-2">
//             Select Mobile 2
//           </label>
//           <select
//             id="mobile2"
//             className="w-full p-2 border border-gray-300 rounded-lg"
//             onChange={(e) =>
//               setSelectedMobile2(mobiles.find((m) => m._id === e.target.value))
//             }
//           >
//             <option value="">Select a mobile</option>
//             {mobiles.map((mobile) => (
//               <option key={mobile._id} value={mobile._id}>
//                 {mobile.brand} {mobile.model}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <button
//         className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//         onClick={handleCompare}
//       >
//         Compare
//       </button>


//       {comparisonResult && (
//         <div className="overflow-x-auto mt-8">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-4 py-2">Feature</th>
//                 <th className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[0].brand} {comparisonResult[0].model}
//                 </th>
//                 <th className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[1].brand} {comparisonResult[1].model}
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Processor</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[0].features.processor}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[1].features.processor}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Camera</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[0].features.camera}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[1].features.camera}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Memory</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[0].features.memory}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[1].features.memory}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Storage</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[0].features.storage}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[1].features.storage}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">OS</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[0].features.os}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[1].features.os}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Rating</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[0].features.rating} / 5
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {comparisonResult[1].features.rating} / 5
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Price</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   ${comparisonResult[0].price}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   ${comparisonResult[1].price}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Product Image</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <img
//                     src={comparisonResult[0].productImage}
//                     alt={`${comparisonResult[0].brand} ${comparisonResult[0].model}`}
//                     className="w-24"
//                   />
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <img
//                     src={comparisonResult[1].productImage}
//                     alt={`${comparisonResult[1].brand} ${comparisonResult[1].model}`}
//                     className="w-24"
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MobileCompare;

import React, { useState, useEffect, useContext } from "react";
import { get_product } from "../api/Api";
import Context from "../context";
import { FaMobileAlt, FaMemory, FaCamera, FaMicrochip, FaHdd, FaAndroid, FaStar } from "react-icons/fa";

function MobileCompare() {
  const [mobiles, setMobiles] = useState([]);
  const [selectedMobile1, setSelectedMobile1] = useState(null);
  const [selectedMobile2, setSelectedMobile2] = useState(null);
  const [comparisonResult, setComparisonResult] = useState(null);
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await get_product();
      setMobiles(products);
    };
    fetchProducts();
  }, []);

  const handleCompare = () => {
    if (!selectedMobile1 || !selectedMobile2) {
      alert("Please select two mobiles to compare.");
      return;
    }

    if (selectedMobile1._id === selectedMobile2._id) {
      alert("Please select a different model for comparison.");
      return;
    }

    setComparisonResult([selectedMobile1, selectedMobile2]);
  };

  if (!user) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Please Log in to Compare Mobiles</h1>
        <p className="text-lg">
          You need to be logged in to compare mobile phones. Please{" "}
          <a href="/login" className="text-blue-500 underline">log in</a> or{" "}
          <a href="/signup" className="text-blue-500 underline">sign up</a> to continue.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Compare Mobiles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="mobile1" className="block text-lg font-medium mb-2">
            Select Mobile 1
          </label>
          <select
            id="mobile1"
            className="w-full p-2 border border-gray-300 rounded-lg"
            onChange={(e) =>
              setSelectedMobile1(mobiles.find((m) => m._id === e.target.value))
            }
          >
            <option value="">Select a mobile</option>
            {mobiles.map((mobile) => (
              <option key={mobile._id} value={mobile._id}>
                {mobile.brand} {mobile.model}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mobile2" className="block text-lg font-medium mb-2">
            Select Mobile 2
          </label>
          <select
            id="mobile2"
            className="w-full p-2 border border-gray-300 rounded-lg"
            onChange={(e) =>
              setSelectedMobile2(mobiles.find((m) => m._id === e.target.value))
            }
          >
            <option value="">Select a mobile</option>
            {mobiles.map((mobile) => (
              <option key={mobile._id} value={mobile._id}>
                {mobile.brand} {mobile.model}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        onClick={handleCompare}
      >
        Compare
      </button>

      {comparisonResult && (
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">
                  <FaMobileAlt className="inline-block mr-2" />
                  Feature
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  {comparisonResult[0].brand} {comparisonResult[0].model}
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  {comparisonResult[1].brand} {comparisonResult[1].model}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <FaMicrochip className="inline-block mr-2" />
                  Processor
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[0].features.processor}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[1].features.processor}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <FaCamera className="inline-block mr-2" />
                  Camera
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[0].features.camera}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[1].features.camera}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <FaMemory className="inline-block mr-2" />
                  Memory
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[0].features.memory}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[1].features.memory}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <FaHdd className="inline-block mr-2" />
                  Storage
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[0].features.storage}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[1].features.storage}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <FaAndroid className="inline-block mr-2" />
                  OS
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[0].features.os}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[1].features.os}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <FaStar className="inline-block mr-2" />
                  Rating
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[0].features.rating} / 5
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {comparisonResult[1].features.rating} / 5
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Price
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${comparisonResult[0].price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${comparisonResult[1].price}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Product Image</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={comparisonResult[0].productImage}
                    alt={`${comparisonResult[0].brand} ${comparisonResult[0].model}`}
                    className="w-24"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={comparisonResult[1].productImage}
                    alt={`${comparisonResult[1].brand} ${comparisonResult[1].model}`}
                    className="w-24"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MobileCompare;
