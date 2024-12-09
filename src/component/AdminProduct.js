import React, { useEffect, useState } from 'react';
import { addAdminProduct, deleteAdminProduct, get_product, updateAdminProduct } from '../api/Api';
import { FadeLoader } from 'react-spinners';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';
import UploadImage from '../helper/UploadImage';

function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const [productData, setProductData] = useState({
    brand: '',
    model: '',
    price: '',
    features: {
      camera: '',
      memory: '',
      processor: '',
      rating: '',
      storage: '',
      os: ''
    },
    productImage: ''
  });

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await get_product();
      if (fetchedProducts) {
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProductHandler = async (productId) => {
    await deleteAdminProduct(productId);
    fetchProducts();
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name.includes('features.')) {
      const featureName = name.split('.')[1];
      setProductData((prev) => ({
        ...prev,
        features: {
          ...prev.features,
          [featureName]: value
        }
      }));
    } else {
      setProductData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Include the uploaded image URL if available
    const updatedData = {
      ...productData,
      productImage: previewImage // Ensure we use the latest image URL
    };

    if (isEditing) {
      await updateAdminProduct(currentProductId, updatedData);
    } else {
      await addAdminProduct(updatedData);
    }

    setShowModal(false);
    fetchProducts();
    resetForm();
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    if (file) {

  
      try {
        // Upload the image to Cloudinary
        const uploadImageCloudinary = await UploadImage(file);
  
        // Check if upload is successful and update the preview and product image with the final URL
        if (uploadImageCloudinary.url) {
          setPreviewImage(uploadImageCloudinary.url);  // Show the final Cloudinary URL for preview
          setProductData((prev) => ({
            ...prev,
            productImage: uploadImageCloudinary.url,  // Save the Cloudinary URL to product data
          }));
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      } 
    }
  };
  
  const resetForm = () => {
    setProductData({
      brand: '',
      productImage: '',
      model: '',
      price: '',
      features: {
        camera: '',
        memory: '',
        processor: '',
        rating: '',
        storage: '',
        os: ''
      }
    });
    setPreviewImage('');
    setIsEditing(false);
    setCurrentProductId(null);
  };

  const handleEditClick = (product) => {
    setProductData(product);
    setCurrentProductId(product._id);
    setIsEditing(true);
    setPreviewImage(product.productImage);
    setShowModal(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let updatedProducts = products.filter(product =>
      product.model && product.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(updatedProducts);
  }, [searchTerm, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <FadeLoader
          color="#3498db"
          height={13}
          margin={2}
          radius={2}
          speedMultiplier={0.75}
          width={5}
        />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className='flex flex-col sm:flex-row justify-between items-center my-3'>
        <h2 className="text-2xl font-semibold mb-4 sm:mb-0 text-gray-800">Products</h2>
        <button
          onClick={() => { resetForm(); setShowModal(true); }}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition flex items-center"
        >
          <FaPlus className="w-5 h-5" />
          <span className="ml-2">Add New Product</span>
        </button>
      </div>

      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search by model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product._id} className=" bg-[#f7f8eb] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={product.productImage}
                // alt={product.model}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.brand} {product.model}</h3>
                <p className="text-gray-600 mt-1"><strong>Price:</strong> ${product.price}</p>
                <p className="text-gray-600 mt-1"><strong>Camera:</strong> {product.features.camera}</p>
                <p className="text-gray-600 mt-1"><strong>Memory:</strong> {product.features.memory}</p>
                <p className="text-gray-600 mt-1"><strong>Processor:</strong> {product.features.processor}</p>
                <p className="text-gray-600 mt-1"><strong>Rating:</strong> {product.features.rating}</p>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    aria-label="Edit Product"
                  >
                    <FaEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteProductHandler(product._id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                    aria-label="Delete Product"
                  >
                    <FaTrashAlt className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Adding/Editing Product */}
      {showModal && (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-y-scroll pt-[400px] pb-[30px] bg-[black] bg-opacity-20">
          <div className="p-4 bg-[#1F2937] rounded-lg shadow-lg max-w-full sm:max-w-2xl w-full text-white">
            <h3 className="text-xl font-semibold mb-6 text-center bg-[#957C7C] rounded-t-[10px] text-white py-[10px]">
              {isEditing ? 'Edit Product' : 'Add New Product'}
            </h3>
            <form onSubmit={onSubmitHandler} className="rounded-[20px] space-y-6 max-w-[550px] mx-auto border-[#936b6b] border-[2px] shadow-md p-4">
              <div>
                <label className="block mb-2">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={productData.brand}
                  onChange={onChangeHandler}
                  className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Model</label>
                <input
                  type="text"
                  name="model"
                  value={productData.model}
                  onChange={onChangeHandler}
                  className="border border-gray-300 rounded-lg  p-3 w-full bg-[#535c69]"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={onChangeHandler}
                  className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                  required
                />
              </div>

              <div>
                <h4 className="font-semibold mb-2">Features</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">Camera</label>
                    <input
                      type="text"
                      name="features.camera"
                      value={productData.features.camera}
                      onChange={onChangeHandler}
                      className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Memory</label>
                    <input
                      type="text"
                      name="features.memory"
                      value={productData.features.memory}
                      onChange={onChangeHandler}
                      className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                      required
                    />            
                  </div>
                  <div>
                    <label className="block mb-2">Processor</label>
                    <input
                      type="text"
                      name="features.processor"
                      value={productData.features.processor}
                      onChange={onChangeHandler}
                      className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Rating</label>
                    <input
                      type="text"
                      name="features.rating"
                      value={productData.features.rating}
                      onChange={onChangeHandler}
                      className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Storage</label>
                    <input
                      type="text"
                      name="features.storage"
                      value={productData.features.storage}
                      onChange={onChangeHandler}
                      className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Operating System</label>
                    <input
                      type="text"
                      name="features.os"
                      value={productData.features.os}
                      onChange={onChangeHandler}
                      className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-2">Product Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUploadProduct}
                  className="border border-gray-300 rounded-lg p-3 w-full bg-[#535c69]"
                />
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="mt-2 w-full h-48 object-contain border border-gray-300 rounded"
                  />
                )}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                  {isEditing ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProduct;

  