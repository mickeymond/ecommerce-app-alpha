import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { productItems } from "./products-json";

export default function Catalogue() {
    return (
        <>
            <Navbar />
        <div className="grid-cols-4 grid-rows-4 gap-3"> 
        {productItems.map((product) => (
            <div key={product.id} >
                 <div className="product-card">
                    {/* add width of 100% to images */}
                    <img src={product.image_url} alt="T-shirts" />
                    <h2>{product.name}</h2>
                    <p className="price">GHC {product.price}</p>
                    <p className="seller">{product.seller}</p>
                    <p><button type="submit">Add to Cart</button></p>
                </div> 
            </div>
        ))}

        </div>

            <Footer />
        </>
    );
}