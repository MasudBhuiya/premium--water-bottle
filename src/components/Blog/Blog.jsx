import { FaCalendar, FaUserCircle } from "react-icons/fa";
import Navbar2 from "../../Shared/Navbar/Navbar2";
import Newsletter from "../../Shared/Newsletter";


const Blog = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="bg-black h-[448px] font-bold flex flex-col items-center justify-center text-white px-5 ">
                <h1 className="text-4xl md:text-7xl text-center ">Blog Page</h1>
                <p className="md:max-w-[500px] mx-auto md:text-lg text-center mt-7">Unveiling the Art of Bottle Selection, Innovative Designs, and Sipping in Style</p>
                
            </div>

            {/* story section  */}
            <section className="max-w-[1440px] mx-auto px-5  mt-16 md:mt-32">
                <h1 className="text-5xl font-bold max-w-[1000px]">Dive into Purity: Where Every Drop Tells a Refreshing Story.</h1>
                <div className="md:flex gap-12 mt-6">
                    <div className="flex gap-4 items-center text-3xl text-gray-500">
                        <FaUserCircle></FaUserCircle>
                        <p>Henrik Annemark</p>
                    </div>
                    <div className="flex gap-4 items-center text-3xl text-gray-500">
                        <FaCalendar></FaCalendar>
                        <p>Henrik Annemark</p>
                    </div>
                </div>
                <div className="mt-16">
                    <img className="w-full h-[658px]" src="https://s3-alpha-sig.figma.com/img/474b/54eb/1e5022dff2f1275201ff1a7ca12f06f7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zal-52gRj6sa6mRvP7fvCfd6pYmTXfxFKKdUMvuyqJtm-dnNvBfuCzhL5bdur2-DRKzYDF4I-1Qp3EIzUVyBDEq-tyiGlE4p~ef-6SHCCijjuuohVLOnJbOZnCfpa74PA0vfYgv~wcUc0-QyOfCRaXazljQJCJJM-jMb16Rl4F8nvHkPUCiXZjjQHCTs0fAv8fxOp35t7CjtQ2J9BqX8jKla1BOA59MfF~lPfgI-oZ7FrNcZy0ENYXEN9y9rljCO7WOi7ayp2kEtmm6hDQ2O8lWm~-2v2SNQiq5rewIAPRb2Huh5~czHoFmiQ~u~ByyWDWRh582c1Pb5jrAEzJy8wQ__" alt="" />
                    <p className="mt-10 font-medium">In a world where life flows seamlessly, water emerges as the silent narrator of our existence. Each drop, a liquid tale echoing the essence of purity and vitality, becomes a testament to the intricate dance of nature. From serene rivers to cascading waterfalls, the story of water unfolds in a symphony of fluidity. It quenches our thirst for life, symbolizing resilience in its ability to adapt to any vessel or terrain. As we immerse ourselves in this liquid narrative, we discover a source of rejuvenation that transcends time and space. In every sip, a celebration of the precious bond between humanity and the elixir of life, reminding us to cherish and preserve the irreplaceable essence of water</p>
                </div>

                <section className='md:flex mt-12 md:mt-36 max-w-[1440px] items-center gap-20 mx-auto '>
                    <div className=''>
                        <img className='w-full md:w-[500px] h-[407px]' src="https://s3-alpha-sig.figma.com/img/ed95/5a87/fb4ca7c16f63bb7db912d4cda4689002?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jIgD4jxb59N6UWGGQr46I07C1dppjlPjZUS-QXHuM4bvGoKUuTPv2aa82O7gdc11GeupwECObfaWLaVswMtSlW~SaJAh0e4kmmMtFhUoOr2PkMmyxeA6ZlF7j9ZRyaOChW7C2Bm9H7c7QwStm8hU1Mc8buYCeLQrF5SOHm76LMRll40Ix6jetvTGMgiGpFdi9Pu1IPEgn4A2AGaOyWdW~fCnWLJf9-I7gqZCnC~1Xj7-v6uGFvT~T9dA3~SCZKHORg2oW1ppigJctUK2iS1yi1tQnTYBE2u~Hd0obFpYKzjXkRiLGfTCgl9EY-L3NzR7fwMsjl9XatIWT0aalmUSjw__" alt="" />
                    </div>
                    <div className='w-full md:w-2/3 flex flex-col items-center md:items-start mt-6 md:mt-0'>
                        <div>
                        <h1 className='text-3xl font-bold max-w-[820px] text-center md:text-start '>Elevate Your Essence: Unleash the Power of Pure Waters</h1>
                        <p className=' mt-5 max-w-[840px] font-medium text-center md:text-start'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neckA water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neck. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.</p>
                        </div>
                        <div className="mt-10">
                        <h1 className='text-3xl font-bold max-w-[820px] text-center md:text-start '>Elevate your essence, unleash pure waters` power; discover tranquility in every sip.</h1>
                        <p className=' mt-5 max-w-[840px] font-medium text-center md:text-start'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neckA water bottle is a container designed for holding and transporting water. It typically has a narrow neck.A water bottle is a container designed for holding and transporting water. It typically has a narrow neck.</p>
                        </div>
                    </div>
                </section>
                <div className="mt-16">
                    <img className="w-full h-[658px]" src="https://s3-alpha-sig.figma.com/img/5b38/5a01/1f903dc5950b75e858c37cd7f23ea969?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bTAn8YP5po~JdpQtY1yFrJl6Rng1jbLRcI6fKAZrfzMHskS-n2a-xVR-tYV2~Z3NKsaaCpgBOPlYaFzWdSYmu8LRMkSGqGZJXuWRpnIusMCAOuMByN1WZIYvcMisfmlkVIYZA7sBUuKbY0zutyDA4I7tUcw0kbaGQKVY4vVp6UqxwiEGjBhKDSQdoRo9-Dnwi3Ds9GPvMM0kIzKgiD79iNXIoCjIlGaHw1uM-TpJTUt63illYPcNFM~mAwwNGxT7nMEGhcPywFAr6t5uZIX0uUaBxXtl2xX3XvNnxt2B~zXISOimxkNbrkwXKiUx83sgi922rL1~KLEdUTNuxLlwbw__" alt="" />
                    <p className="mt-10 font-medium">In a world where life flows seamlessly, water emerges as the silent narrator of our existence. Each drop, a liquid tale echoing the essence of purity and vitality, becomes a testament to the intricate dance of nature. From serene rivers to cascading waterfalls, the story of water unfolds in a symphony of fluidity. It quenches our thirst for life, symbolizing resilience in its ability to adapt to any vessel or terrain. As we immerse ourselves in this liquid narrative, we discover a source of rejuvenation that transcends time and space. In every sip, a celebration of the precious bond between humanity and the elixir of life, reminding us to cherish and preserve the irreplaceable essence of water</p>
                </div>
            </section>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Blog;