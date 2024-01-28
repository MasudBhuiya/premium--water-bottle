import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='flex px-4 flex-col-reverse max-w-[1440px] mt-10 md:mt-20 items-center justify-between mx-auto md:flex-row'>
            <div className='w-full md:w-1/2'>
                <h1 className='banner-title text-4xl md:text-7xl'>Premium Drinking <br /> Water Bottle</h1>
                <p className='banner-sub-title my-5'>A water bottle is a container designed for holding and transporting water. It typically has a narrow neck and a cap or lid to prevent spills. </p>
                <button className='banner-btn md:font-bold px-9'>Buy Now & Get Free a Premium Bag</button>
                <div className='flex items-center mt-6'>
                    <span className='flex relative'>
                        <img className='w-12 rounded-full border-2 border-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcUnv77tNZ4m9l8OvOwnDLheOSWMsrayF4rhvApkyoOF2SI9m3kAoDrx1rDCz9DAH1Lg&usqp=CAU" alt="" />
                        <img className='w-12 rounded-full relative end-4 border-2 border-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcUnv77tNZ4m9l8OvOwnDLheOSWMsrayF4rhvApkyoOF2SI9m3kAoDrx1rDCz9DAH1Lg&usqp=CAU" alt="" />
                        <img className='w-12 rounded-full border-2 relative end-8 border-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcUnv77tNZ4m9l8OvOwnDLheOSWMsrayF4rhvApkyoOF2SI9m3kAoDrx1rDCz9DAH1Lg&usqp=CAU" alt="" />
                    </span>
                    <p>100k+ Happy Customer</p>
                </div>
            </div>
            <div style={{borderRadius: '0 120px 0 0'}} className=' md:bg-cyan-800 w-[314px] h-[517px] flex items-center relative'>
                <img className='h-[440px] relative md:end-32' src="https://s3-alpha-sig.figma.com/img/b158/e31b/869865cc061ba6a0eabf8e053fadeaec?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-sLK9OdPOLLdGXkMF7ZL9npKO1k9Ov05Oc8UYePe2ImUVrBHfVNAygeee4d2mkbIWYGAIi4zKWvusnv8MpI-b0cfFf-pzTkqD2lsZslm3JzxvkGhy28Bf2UcupJBpJRgckrQxdSrpzbsMPFzd4yGx0S0MAIxiBVb998-tdFOQS-H-7-5sdYG8FnVkhOP3Ij9fOP6HcFocZ4yUH6xdD6Me0dgicHTBluqSphy7BMPCBD3NCtHI0nx6atnCDoeRy70ELsYT4y5BnyD6sG3wC66OYFyVR7JAgZ-PvzD7UZEiohuobT-JNtlbH5vgmhjeQGSfiOpqUKN2hwoo63mBfAEw__" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Home;