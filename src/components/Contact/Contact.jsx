
import { FaPhoneAlt } from "react-icons/fa";
import Navbar2 from "../../Shared/Navbar/Navbar2";
import { IoMdPin } from "react-icons/io";
import Footer from "../../Shared/Footer/Footer";
import Newsletter from "../../Shared/Newsletter";


const Contact = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="bg-black h-[448px] font-bold flex flex-col items-center justify-center text-white px-5 ">
                <h1 className="text-4xl md:text-7xl text-center ">Contact Us</h1>
                <p className="md:max-w-[500px] mx-auto md:text-lg text-center mt-7">Unveiling the Art of Bottle Selection, Innovative Designs, and Sipping in Style</p>
            </div>

            {/* contact section  */}
            <section className="max-w-[1400px] mx-auto px-5 mt-[120px] flex flex-col-reverse gap-16 md:flex-row">
                <div className="w-full">
                    <h1 className="text-4xl font-bold">We`re here to help you</h1>
                    <p className="text-gray-500 my-5">Shoot us a message if you have any question. We`re here to help!</p>
                    <form>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xl font-bold " htmlFor="">Your name</label><br />
                                <input type="text" name="name" placeholder="your name" className="w-full border-2 rounded-md mt-4 p-2 block" id="" />
                            </div>
                            <div>
                                <label className="text-xl font-bold " htmlFor="">Your email</label><br />
                                <input type="text" name="name" placeholder="your email" className="w-full border-2 rounded-md mt-4 p-2 block" id="" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label className="text-xl font-bold " htmlFor="">What kind of bottle are you looking for?</label><br />
                            <input type="text" name="name" placeholder="subject" className="w-full border-2 rounded-md mt-4 p-2 block" id="" />
                        </div>
                        <div className="mt-5">
                            <label className="text-xl font-bold " htmlFor="">Details</label><br />
                            <textarea className="w-full border-2 rounded-md mt-4 p-2 block" placeholder="write here" name="message" id="" cols="30" rows="8"></textarea>
                        </div>
                        <input className="btn btn-block bg-[#03677C] mt-8 text-white text-lg font-bold hover:bg-[#1b454e]" type="submit" value="Send Now" />
                    </form>
                </div>
                <div className=" w-full">
                <h1 className="text-4xl font-bold">Get In Touch</h1>
                    <p className="text-gray-500 my-5">I`m here to help! How can I assist you today? If you have any questions or need information on a specific topic, feel free to let me know. Keep in mind that while I can provide information and answer questions.</p>
                    <hr className="border" />
                <h1 className="text-3xl font-bold mt-7">Address</h1>
                    <div className="mt-4 mb-5 flex items-center gap-4">
                    <div>
                    <IoMdPin className="text-6xl text-[#03677C]"/>
                    </div>

                        <div>
                            <p className="text-[18px] font-bold text-gray-500 mb-3">Australia-154 45l Street</p>
                            <p className="text-[18px] font-bold text-gray-500">Office 7568 Berlik Del400235</p>
                        </div>
                    </div>
                    <hr className="border" />
                <h1 className="text-3xl font-bold mt-7">Emergency Call</h1>
                    <div className="mt-4 mb-5 flex items-center gap-4">
                    <div>
                    <FaPhoneAlt className="text-5xl text-[#03677C]"/>
                    </div>

                        <div>
                            <p className="text-[18px] font-bold text-gray-500 mb-3">+(567) 1234-567-8900</p>
                            <p className="text-[18px] font-bold text-gray-500">+(567) 1234-567-8900</p>
                        </div>
                    </div>
                    <hr className="border" />
                    <h1 className="text-3xl font-bold mt-7">Address</h1>
                    <p className="text-gray-500 my-5">I`m here to help! How can I assist you today? If you have any questions or need information on a specific topic, feel free to let me know. Keep in mind that while I can provide information and answer questions.</p>
                </div>
            </section>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Contact;