
export default function Navbar() {
    return (
        <>
            <p>More code</p>
            <div className=" grid grid-rows-1 border-2 bg-gray-100 p-4">
                <div className="flex  justify-between">
                    <div className="text-3xl font-bold underline">
                        logo
                    </div>

                    <div className="relative">
                        <form action="">
                            <input
                                dir="ltl"
                                type='search'
                                id='search'
                                placeholder="Search Product by name or category"
                                className="border-none relative  px-20 py-2 rounded-s-lg"
                            />
                            <button
                                dir="rtl"
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-s-lg font-semibold text-white px-2 py-2"
                                onClick='search()'
                            >
                                Search
                            </button>

                        </form>
                    </div>
                    <div>
                        account
                        help
                        cart
                    </div>

                </div>
            </div>
        </>
    );
}