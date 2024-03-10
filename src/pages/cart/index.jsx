import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Cart() {
    return (
        <>
            <Navbar />
            <section className="p-4 bg-gray-300 h-screen">
                <article className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Cart(3)</h2>

                    <div className="flex gap-4 " >
                        <figure className="">
                            <img src="https://via.placeholder.com/150" alt="item-name" />
                        </figure>
                        <div>
                            <div className="flex justify-between gap-4 items-center ">
                                <h3 className="font-medium leading-10 text-xl">Sport Short Sleeve T-shirt & Shorts Set</h3>
                                <span className="font-semibold text-xl" >GHS93.00</span>
                            </div>
                            <p className="leading-10"><span>Seller:&nbsp;kili Brand Shop</span> | <span>Size: M</span></p>
                            <span className="bg-indigo-500 text-white p-1 rounded-md">In Stock</span>
                        </div>
                    </div>
                </article>
            </section>


            <Footer />
        </>
    );
}


