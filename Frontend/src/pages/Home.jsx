import { useEffect, useState } from "react";
const baseURL = "http://localhost:9000/api/product";
function Home() {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    let res = await fetch(`${baseURL}/getProduct`);
    res = await res.json();
    console.log(res.product);
    setProducts(res.product);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <main>
      <div className="bg-gray-500 p-10 text-center ">
        <div>
          <h1 className="text-5xl underline my-5">Product List</h1>
        </div>
        <div>
          {products?.length > 0 ? (
            <div className="flex gap-5 justify-center">
              {products?.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="border bg-white p-3 w-44 h-44 rounded-2xl"
                  >
                    <div>
                      <img
                        src={`http://localhost:9000/image/${item?.image}`}
                        alt="Product_image"
                      />
                    </div>
                    <div>
                      <h1>{item.title}</h1>
                      <h1>Rs.{item.price}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <h1> Product Not Found</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
