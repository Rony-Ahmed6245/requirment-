import { useState } from "react";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="">
            <div className="max-w-sm border group overflow-hidden shadow-lg bg-white pb-5 relative">
                <h1 className="bg-[#323333] text-sm text-white py-2 text-center">
                    iPhone 13 Pro Max
                </h1>
                <div className="flex justify-center">
                    <img
                        className="w-[70%] object-cover rounded-lg"
                        src="https://i.ibb.co.com/bgzGdfRT/QBCLTPU-SE4-Clr-Clr-001-1-1740509558-450x450.webp"
                        alt="Card Image"
                    />
                </div>
                <div className="mt-4">
                    <p className="text-black font-bold text-sm mt-2 text-center p-4">
                        HYBDARMRWITRINSTADCASDA Hybrid Armor With Ring Stand Case - DARK BLUE
                    </p>
                </div>

                <div className="flex justify-between items-center px-4 mb-4">
                    <div className="text-[14px] text-gray-900 font-medium">SKU G4635</div>
                    <div className="text-[14px] text-red-700 font-medium">Price: N/A</div>
                </div>
                <div className="flex justify-start items-center gap-2 px-4">
                    <h1 className="text-[16px] font-bold">Quantity </h1>
                    <input className="border w-[40px]" type="number" />
                </div>

                {/* Quick View Button */}
                <div className="absolute top-[50%] right-[20%] transform bg-white text-black px-4 py-2 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="text-[13px] uppercase font-bold" onClick={() => setIsModalOpen(true)}>Quick View</button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#F2F7FA] p-2 rounded-sm max-w-3xl relative">
                        <div className="bg-[#323333] p-2 rounded-sm border-yellow-600 border-[1px] flex justify-between items-center">
                            <h1 className=" text-[15px] font-bold text-white">
                                Robust Magnetic Kickstand Hybrid Case Cover - RED
                            </h1>
                            <button className="text-white" onClick={() => setIsModalOpen(false)}>
                                <input type="checkbox" name="" id="" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 p-2">
                            <div>
                                <img className="w-[90%]" src="https://i.ibb.co.com/bgzGdfRT/QBCLTPU-SE4-Clr-Clr-001-1-1740509558-450x450.webp" alt="" />
                            </div>
                            <div>
                                <h1 className="text-[18px] font-normal mb-2">Robust Magnetic Kickstand Hybrid Case Cover - RED</h1>
                                <li className="list-none text-[12px] py-[2px]"><span className="font-bold">Product Code:</span> Galaxy A26 5G</li>
                                <li className="list-none text-[12px] py-[2px]"><span className="font-bold">Availability:</span> In Stock</li>
                                <li className="list-none font-bold text-[12px] py-[2px]">Price: N/A Ex Tax: N/A</li>

                                <div className="flex justify-start items-center gap-2 text-[30px] mt-2 text-white">
                                    <div className="bg-[#646464] p-[2px]" >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="1em"
                                            height="1em"

                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="bg-[#646464] p-[2px]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            width="1em"
                                            height="1em"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M463 20.3L315.6 75.65L368.5 109C274 228 137.3 301.3 21.8 329.2l32.72 59.6C184.3 346.5 321.7 270.2 410.2 135.4l40.3 25.4zm7.7 116.7l-4.8 54.8l-51.3-32.4c-1.8 2.7-3.7 5.3-5.6 8V487h78V137zM320.1 265c-12.7 11-25.8 21.4-39.1 31.2V487h78V265zm-123.7 84c-14.4 7.6-28.8 14.6-43.4 21.2V487h78V349zM25 393v94h78v-94h-5.68c-14.82 5.5-29.63 10.6-44.35 15.3l-7.06 2.2l-9.6-17.5z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
