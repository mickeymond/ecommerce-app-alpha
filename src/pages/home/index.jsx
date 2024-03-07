import React from 'react';
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

import phone from "../../assets/images/phone.png";
import laptop from "../../assets/images/laptop.png";
import lap from "../../assets/images/lap.png";
import iphone from "../../assets/images/iphone.png";
import ipad from "../../assets/images/ipad.png";
import speaker from "../../assets/images/speaker.png";
import vrglasses from "../../assets/images/vr-glasses.png";
import noisedetection from "../../assets/images/noisedetection.png";
import travel from "../../assets/images/travel.png";
import fans from "../../assets/images/fans.png";


const PRODUCTS =[
    {
        id: 1,
        productName: "Iphone X",
        price: 5000.00,
        productImage: iphone,
    },
    {
        id: 2,
        productName: "Mackbook Pro 2022",
        price: 10000.00,
        productImage: lap,
    },
    {
        id: 3,
        productName: "Boss Speaker",
        price: 5500.00,
        productImage: speaker,
    },
    {
        id: 4,
        productName: "Ipad i27",
        price: 800.00,
        produtImage: ipad,
    }

]



export default function Home() {

    return (
        <>
            <Navbar/>
            <section>
                <div>
                </div>

                <div className="flex space-x-10 px-20">
                    <div className="bg-sky-500 flex w-100px py-10 px-5">
                        <img src={phone} alt="mobile phones"/>
                        <h1 className="mt-20 text-white text-2xl">Catch the Hottest Deals in Mobile Category</h1>
                    </div>

                    <div className="bg-sky-500 flex w-100px py-10 px-5">
                        <img src={laptop} alt="laptop"/>
                        <h1 className="mt-20 text-white text-2xl">Catch the Hottest Deals in Laptop Category</h1>
                    </div>
                </div>

            </section>

            <section className="py-10">
                <div>
                    <h1 className="text-center text-3xl">Our Products</h1>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-40 p-10">
                    {PRODUCTS.map(product => (
                        <div key={product.id}>
                            <img className="w-40 h-40" src={product.productImage} alt="products"/>
                            <p>{product.productName}</p>
                            <p>Ghs{product.price}</p>
                            <button className="border-2 drop-shadow-2xl p-2 rounded hover:bg-blue-400">Add to cart</button>

                        </div>
                    ))}
                </div>
            </section>

            <section className="flex bg-sky-500 p-10">
                <div>
                    <img src={vrglasses} alt="glasses"/>
                </div>
                <div className="mt-10 text-white">
                    <h3 className="font-bold text-4xl">Maximum comfort</h3>
                    <h1 className="font-bold text-7xl">Gear VR</h1>
                    <p>Ready to explore new worlds and participate in exciting adventures? Then you will need quality virtual reality glasses with a well-designed ergonomic design. Such as Gear VR.</p>
                    <button className="border-2 drop-shadow-2xl p-2 rounded hover:bg-cyan-950">Check Availability</button>
                </div>
            </section>

            <section className="p-10">
                <div className="text-center py-5 text-3xl">Blog Posts</div>

                <div className="flex space-x-10">
                    <div className="bg-cover bg-center p-20" style={{backgroundImage: `url(${noisedetection})`}}>
                        <p className="text-white">How does sense detect my devices</p>
                        <button className="text-white border-2 drop-shadow-2xl p-2 rounded hover:bg-sky-500">Read</button>
                    </div>

                    <div className="bg-cover bg-center p-20" style={{backgroundImage: `url(${travel})`}}>
                        <p className="text-white">Tips for travelling with electronic devices</p>
                        <button className="text-white border-2 drop-shadow-2xl p-2 rounded hover:bg-sky-500">Read</button>
                    </div>

                    <div className="bg-cover bg-center p-20" style={{backgroundImage: `url(${fans})`}}>
                        <p className="text-white">Micro fans and blowers in automation processes</p>
                        <button className="text-white border-2 drop-shadow-2xl p-2 rounded hover:bg-sky-500">Read</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}