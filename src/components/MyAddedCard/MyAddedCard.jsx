// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
// import { useState } from "react";

const MyAddedCard = () => {
    const [mylists, setMyLists] = useState([]);
    const myAddedlists = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(myAddedlists);

    useEffect(()=>{
        const mydata = myAddedlists?.filter(mylist => mylist?.email == user?.email);
        setMyLists(mydata)
    },[myAddedlists, user])

    const handleDelete = item => {
        Swal.fire({
            title: `Are you sure? You want to delete '${item.name}'`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(item._id)
                fetch(`https://assignment-eleven-server-f4fww2rtx-masudbhuiya.vercel.app/bottles/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = mylists.filter(cof => cof._id !== item._id);
                            setMyLists(remaining)
                        }
                    })
            }
        })
    }


    return (
                
<div className="h-[90vh]">
        <div className="max-w-[1400px] mx-auto">
            
            <div className="uppercase h-[60px] flex justify-evenly items-center">
                <h1 className="text-xl font-bold">Added Total: {mylists.length} </h1>
                {/* <h1 className="text-xl font-bold">Total Price: ${total}</h1> */}
            </div>
            <div>
            <div className="md:hidden">
            <table className="table  table-sm">

              <tbody className="item-center">
                {mylists?.map((list, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? " bg-slate-100 flex flex-col" : " bg-slate-50 flex flex-col"
                    }
                  >
                    <td className="sm:text-xl flex"><span className='text-white font-bold w-[30%]  bg-sky-500 flex items-center justify-center -my-2 me-3'>Image: </span><img className='w-10 rounded-sm' src={list?.image} alt="" /></td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className='text-white font-bold w-[30%]  bg-sky-500 flex items-center justify-center -my-2 me-3'>Bottle Name: </span>{list?.name}</td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className='text-white font-bold w-[30%]  bg-sky-500 flex items-center justify-center -my-2 me-3'>Brand: </span>{list?.brand}</td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className='text-white font-bold w-[30%]  bg-sky-500 flex items-center justify-center -my-2 me-3'>My Quantity: </span>{list?.myQuantity}</td>
                    <hr className="font-bold" />
                    
                    <td className="sm:text-xl flex"><span className='text-white font-bold w-[30%]  bg-sky-500 flex items-center justify-center -my-2 me-3'>Price: </span>{list?.price * list?.myQuantity}</td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className='text-white font-bold w-[30%]  bg-sky-500 flex items-center justify-center -my-2 me-3'>Payment: </span><p><Link to={`/dashboard/payment/${list?.classId}`}  className="btn bg-sky-500 hover:bg-sky-800 btn-sm text-white">PAY</Link></p></td>
                    <hr className="font-bold" />
                    <td className="sm:text-xl flex"><span className='text-white font-bold w-[30%]  bg-sky-500 flex items-center justify-center -my-2 me-3'>Action: </span>Delete</td>
                    <hr className="font-bold border-2 border-white" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
                <div className="hidden md:block ">
                    <table className="table w-full mx-auto">
                        {/* head */}
                        <thead>
                            <tr className="bg-sky-500 text-xl">
                                    <th className="text-center">#</th>
                                <th>Image</th>
                                <th>Bottle Name</th>
                                <th>Brand</th>
                                <th>My Quantity</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mylists?.map((list, index) =>
                                    <tr  key={index}
                                    className={
                                      index % 2 === 0 ? " bg-slate-100" : "bg-gray-50"
                                    }>
                                        <td className=" text-center text-lg">
                                            {index + 1}.
                                        </td>
                                        <td>
                                            <img className="w-12 h-12 rounded" src={list?.image} alt="Avatar Tailwind CSS Component" />
                                        </td>
                                        <td className='text-black text-lg'>{list?.name}</td>
                                        <td className='text-black text-lg'>{list?.brand}</td>
                                        <td className="text-black text-lg">{list?.myQuantity}</td>
                                        <td className="text-black text-lg">{list?.price * list?.myQuantity}</td>
                                        <td><Link to={`/dashboard/payment/${list?.classId}`}  className="btn bg-sky-500 hover:bg-sky-800 btn-sm text-white">PAY</Link></td>
                                        <td>
                                            <button onClick={()=>handleDelete(list)} className="btn btn-ghost  text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyAddedCard;