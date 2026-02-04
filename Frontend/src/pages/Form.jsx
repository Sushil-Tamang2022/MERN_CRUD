import { useState } from "react";

const Form = () => {
  const [image, setImage] = useState(null);
  const [produtData, setProductData] = useState({
    name: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product details:", produtData);
    console.log("File:", image);
  };
  const handleChangle = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center p-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-5 py-8 rounded-2xl space-y-3 w-100 shadow-lg"
      >
        <h2 className="text-xl font-semibold text-center mb-2">Product form</h2>
        <div>
          <div>
            {" "}
            <label className="block text-sm text-gray-800" htmlFor="fname">
              Product title
            </label>
            <input
              className="w-full p-2 rounded-lg text-sm text-gray-600 border focus:outline-none"
              type="text"
              name="name"
              value={produtData.name}
              onChange={handleChangle}
              placeholder="Enter product title"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-800" htmlFor="email">
            Price
          </label>
          <input
            className="w-full p-2 rounded-lg text-sm text-gray-600 border focus:outline-none"
            type="text"
            name="price"
            value={produtData.price}
            onChange={handleChangle}
            placeholder="Enter product price"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-800" htmlFor="password">
            Product image
          </label>
          <input
            className="w-full p-2 rounded-lg text-sm text-gray-600 border focus:outline-none"
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="upload file"
            required
          />
        </div>

        <button className="w-full py-2 mt-4 bg-green-500 hover:bg-green-700 rounded-2xl cursor-pointer p-2 text-white text-center">
          Submit now
        </button>
      </form>
    </div>
  );
};

export default Form;
