// import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
        const navigate = useNavigate()
        const handleGoBack =()=>{
            navigate(-1)
        }
        const {error, status} = useRouteError()
        // console.log(error?.message, status)
    return (
        <div className='flex items-center  h-[100vh] justify-center text-center error'>
            
            <div>
            <h1 className='text-9xl md:text-[185px] text-yellow-500 font-bold '>{status|| 400}</h1>
            <h1 className='text-2xl font-bold'>{error?.message}</h1>
            <Link><button className='banner-btn px-12 p-2 rounded text-white font-medium mt-8' onClick={handleGoBack}>Go Back</button></Link>
            </div>
            {/* <div>
                <img className='-rotate-45' src="https://s3-alpha-sig.figma.com/img/d9b3/5545/477df4c8f2421cf7f18e0d6e4ede7c29?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7EKBRVuBBKy7YkN535I4KmAi4RsO9X8eDp5TIN5QQfuKCCB6gs8rsospFtYKBJq65wHI3K5r9XVkPuKDPD49Leh~kcsi8eq1g2ULXbY2QjUdOE5fs3WLJhRzg4cd9PFF4D5SrCKcxmQdECP8BJYLz4JgFqEgCDAyj9OARgWlL8UUHGcQAZMJVffPhL6xXa2UKz4ECrvvs8TiXWbFAecsq3m8sf2ZmO1b2wVsDTYdLyxlCPQm-Qr-va9~vWiUN42WE5jNzcJI0eye7hbdbY7taErwjhtRiWuQ3KGocIvN6OuvBdnoVW5~Jmn0nbb5u6q5VtbLaZnRzD1UNw8hMjxqQ__" alt="" />
            </div> */}
        </div>
    );
};

export default ErrorPage;