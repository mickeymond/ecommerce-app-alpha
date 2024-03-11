import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import cooker_1 from "../../assets/images/cooker_1.jpg";

export default function Cart() {
  const savedItems = [
    {
      id: 1,
      item_name: "Sport Short Sleeve T-shirt & Shorts Set",
      image: cooker_1,
      price: 93.0,
      seller: "Kili Brand Shop",
      size: ["S", "M", "L", "XL"],
      availability_status: true,
    },
    {
      id: 2,
      item_name: "Nasco NASGS-K1CSS Gas Cooker",
      image: cooker_1,
      price: 139.0,
      seller: "Kili Brand Shop",
      size: ["S", "M", "L", "XL"],
      availability_status: false
    },
  ];
  return (
    <>
      <Navbar />
      <section className="p-4 bg-gray-300 h-screen">
        <article className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Cart({savedItems.length})</h2>
          {savedItems.map((item) => {
            return (
              <div keys={item.id} className="flex gap-4 mb-4 border-b-4 pb-4">
                <figure className="">
                  <img
                    src={item.image}
                    alt={item.item_name}
                    style={{ height: 100, width: 100 }}
                  />
                </figure>
                <div>
                  <div className="flex justify-between gap-4 items-center ">
                    <h3 className="font-medium leading-10 text-xl">
                      item.item_name
                    </h3>
                    <span className="font-semibold text-xl">
                      GHS{item.price}{" "}
                    </span>
                  </div>
                  <p className="leading-10">
                    <span>Seller:&nbsp;{item.seller}</span> |{" "}
                    <span>Size: {item.size[1]} </span>
                  </p>
                  <span className= {` ${item.availability_status ? "bg-indigo-500" : "bg-red-500"} text-white p-1 rounded-md`}>
                   {item.availability_status ? "In Stock": "Sold Out"}
                  </span>
                </div>
              </div>
            );
          })}
        </article>
      </section>
      <Footer />
    </>
  );
}
