


import React, { useContext } from "react";
import {  FaTrash } from "react-icons/fa";
import Context from "../context";

function WishlistCard({ data, onRemove }) {
  const { countproduct } = useContext(Context);


  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-300">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={data.productImage}
        alt={data.model}
      />
      <div className="flex flex-col flex-grow p-4 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {data.brand} {data.model}
        </h2>
        <div className="text-gray-600 mb-3">
          <p><strong>Camera:</strong> {data.features.camera}</p>
          <p><strong>Memory:</strong> {data.features.memory}</p>
          <p><strong>Processor:</strong> {data.features.processor}</p>
          <p><strong>Storage:</strong> {data.features.storage}</p>
          <p><strong>OS:</strong> {data.features.os}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-red-600 font-semibold text-lg">
            ${data.price}
          </span>
          <span className="text-sm text-yellow-500">
            Rating: {data.features.rating} / 5
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
        <button
          className="flex items-center text-gray-700 hover:text-red-600 transition-transform transform hover:scale-110"
          onClick={() => onRemove(data?._id)}
        >
          <FaTrash className="text-xl mr-2" />
          <span className="font-medium text-base">Remove</span>
        </button>
      </div>
    </div>
  );
}

export default WishlistCard;
