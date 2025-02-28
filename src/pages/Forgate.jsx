

const Forgate = () => {
    return (
        <div>
            {/* start */}
            <div className="my-10 p-4">
                <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-start">
                    {/* 111111111111 */}
                    <div>
                        <h1 className="text-[28px] font-bold text-[#04386C]">Forgot Your Password?</h1>
                        <p className="text-gray-400 text-[13px] font-normal my-5">Enter the e-mail address associated with your account and you will receive a password reset email</p>
                        <div className="flex justify-start gap-5 items-center ">
                            <span className="text-gray-400 text-[15px] font-normal"> E-mail Address :</span> <input className="border-[1px] py-[1px] px-[2px] w-[300px]" type="email" name="" id="" />
                        </div>

                        <div className="flex gap-3 justify-end mt-5">
                            <button className="border hover:bg-red-700 bg-[#323333] text-white text-[13px] font-bold px-10 py-2 ">Continue</button>
                            <button className="border hover:bg-red-700 bg-[#323333] text-white text-[13px] font-bold px-10 py-2 ">Back</button>
                         
                        </div>
                    </div>
                    {/* 2222222222  */}
                    <div className="md:mr-0 mx-auto mt-5 md:mt-0">
                        <h1 className="text-[20px] mb-2 font-medium">Account</h1>
                        <li className="border-b-[1px] text-[13px] pr-[100px] py-[3px] list-none  font-normal text-[#826464]">Login / Register</li>
                        <li className="border-b-[1px] text-[13px] pr-[100px] py-[3px] list-none  font-normal text-[#826464]">Forgotten Password</li>
                        <li className="border-b-[1px] text-[13px] pr-[100px] py-[3px] list-none  font-normal text-[#826464]">My Account</li>
                        <li className="border-b-[1px] text-[13px] pr-[100px] py-[3px] list-none  font-normal text-[#826464]">Modify your shipping addresses</li>
                        <li className="border-b-[1px] text-[13px] pr-[100px] py-[3px] list-none  font-normal text-[#826464]">Modify your wish list</li>
                        <li className="border-b-[1px] text-[13px] pr-10 py-[3px] list-none  font-normal text-[#826464]">Order History</li>
                        <li className="border-b-[1px] text-[13px]  pr-[100px] py-[3px] list-none font-normal text-[#826464]">Commission</li>
                        <li className="border-b-[1px] text-[13px]  pr-[100px] py-[3px] list-none font-normal text-[#826464]"> Delete Credit Cards</li>
                    </div>
                </div>
            </div>


            
        </div>
    );
};

export default Forgate;