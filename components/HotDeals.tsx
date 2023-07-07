import React, { useEffect, useState } from "react";
interface Products {
  product_name: string;
  product_price: string;
  product_type: string;
  product_discount: number;
  product_img: string;
}
const HotDeals = () => {
  const [hotDealsProducts, setHotDealsProducts] = useState<Products[]>([]);

  const getHotDealsProducts = async () => {
    try {
      const response = await fetch(
        "https://api.hiring.masterkey.tech/api/v1/products/search?search=hot%20deals%20for%20you"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch hot deals products");
      }
      const data = await response.json();
      console.log(data.products[0].Result);
      setHotDealsProducts(data.products[0].Result);
    } catch (error) {
      console.error(error);
      setHotDealsProducts([]);
    }
  };

  useEffect(() => {
    getHotDealsProducts();
  }, []);
  return (
    <div className="w-full md:w-[calc(100% - 1042px)] h-auto md:h-[760px]">
      <div className="w-full box-border flex flex-row py-2.5 px-5 items-center justify-start text-4xl md:text-5xl border-b-[2px] border-dashed border-sandybrown">
        <div className="font-semibold">hot deals for you</div>
      </div>
      <div className="w-full grid grid-cols-3 justify-between">
        {hotDealsProducts.map((product) => (
          <div className="flex flex-col p-2.5 items-center  gap-2 md:gap-5">
            <img
              className="w-[235px] h-[235px] object-cover"
              alt=""
              src={product.product_img}
            />
            <div className="font-medium inline-block ">
              {product.product_name}
            </div>
            <div className="flex justify-around gap-8">
              <div>₹{product.product_price}</div>
              <div className="text-red">{`-${product.product_discount}% off`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
