import React from "react";

function ComparisonSection({ comparedProducts }) {
  return (
    <div className="comparison-section container mx-auto px-4 py-8">
      <h3 className="text-xl font-bold text-center mb-4">Compare Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {comparedProducts.length > 0 ? (
          comparedProducts.map((product, index) => (
            <div key={index} className="border p-4 rounded shadow-lg">
              <h4 className="font-bold">{product.name}</h4>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              {/* Add more product comparison attributes here */}
            </div>
          ))
        ) : (
          <p className="text-center">No products selected for comparison.</p>
        )}
      </div>
    </div>
  );
}

export default ComparisonSection;
