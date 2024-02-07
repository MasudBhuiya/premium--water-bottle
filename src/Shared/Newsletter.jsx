

const Newsletter = () => {
    return (
        <div>
            {/* newsletter section  */}
            <section className='mt-12 md:mt-36  max-w-[1440px] md:flex mb-16 justify-center md:justify-between items-center gap-10 mx-auto px-5 '>
                <img className='w-full sm:w-[270px] sm:h-[270px]' src="https://s3-alpha-sig.figma.com/img/7762/f7c0/5ec2946c9ec0e797330d219d19d29740?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8LQrP5wqDcAaUOK6CCEDOk0z14n7-cR7tlHyeV4Nnty1Wi-YXEa2blz3xSPgnwZAG8fNTrX5uM4eahyEKPHQVUAMgyKsIJDiemw0~wXTcfgvJ38MPtyzGX-tiTi~kpOr45PqIGwmX-xoylRomE6uwWb6C37wy5IigIOt55apeqaoXWtxTKGtOJZKtS7yYmo6kF5ab1UX1cuyC25vn85F1xYv22M1RJ7HadCn0qX~nLZYmJtBKtyOSLZ-tKPj6kCca6ieK3w-PJ-L39E3dpAK31OoYbXDqp-rb8fz1BRlSF3kUkvYpk8s1HZ1VX1cju5mmYbG~WU9sK3gZBCnq22qw__" alt="" />
                <div className='w-full md:w-[40%] my-6 items-center text-center'>
                    <h1 className='text-4xl font-semibold mb-2'>Join Our Newsletter</h1>
                    <p>Sign up for deals, new products and promotions</p>

                    <input className='w-10/12 py-2 relative md:-start-5 mt-5' type="email" name="" placeholder='Enter your email' id="" />
                    <input type="submit" name="" id="" />
                    <hr className='border-1 border-gray-400' />
                </div>
                <img className='w-full sm:w-[270px] sm:h-[270px]' src="https://s3-alpha-sig.figma.com/img/96ba/f961/b99e17ef820e5d8dba250d7ba56e90d6?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NE7ObBeHdTGvz844EeP5xonVy2wjjdU~fEvffcfACDC0LilLq~ScuG~~B5ZoPtgzdqDzSrDEHmKfMsgQMat9CvA0nsRaK~9cY-AuzrZ4SJtAJfDHJI8GyQwsJ9TlYR4Ek2jvDihUpTqVBp7kBJtQn~Vn1-RFTcJr0y3PHI4z0zk1yLQrBFokPKsibD3DrPvZ-JqoSUhy404t1cI7y1jErrnJRD-HV8fF98~YLsMTLO4gKLwpI2H3FpdmuMVeXFZ2rg6jcBQP~daE4zzP-0ns1Mweq2q5My7L1kM~yVIFcHz-dLzihGKTOtRiZp~kp08lNd7KsKBX9TNdeOen2FndTw__" alt="" />
            </section>
        </div>
    );
};

export default Newsletter;