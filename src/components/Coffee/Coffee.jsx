import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Coffee = () => {
  const coffees = useLoaderData();

  return (
    <div>
      <h1 className='uppercase text-3xl my-10 text-center font-bold text-rose-950'>
        Take Your coffee
      </h1>
      <div className='grid grid-cols-3 mx-14 gap-5'>
        {coffees?.map((coffee) => (
          <div className=''>
            <CoffeeCard key={coffee._id} coffee={coffee} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CoffeeCard = ({ coffee }) => {
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/coffee/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Coffee Deleted successfully!");
          location.reload();
        }
      });
  };

  return (
    <div className='flex items-center justify-between p-5 shadow-lg rounded-lg'>
      {/* img sec here */}
      <div>
        <figure>
          <img src={coffee?.photo} alt={coffee?.name} />
        </figure>
      </div>
      {/* img sec ends here */}
      {/* coffee info sec here */}
      <div>
        <h2 className='text-md font-bold mb-2'>{coffee?.name}</h2>
        <p className='text-gray-500 font-medium'>{coffee?.quantity}</p>
        <p className='text-gray-500 font-medium'>{coffee?.taste}</p>
        <p className='text-gray-500 font-medium'>{coffee?.supplier}</p>
      </div>
      {/* coffee info sec ends here */}
      {/* icon sec here */}
      <div className='flex flex-col items-center space-y-4'>
        <span className='cursor-pointer text-red-500'>
          <FaEye />
        </span>
        <span
          onClick={() => handleDelete(coffee?._id)}
          className='cursor-pointer text-red-500'
        >
          <FaTrash />
        </span>
        <span className='cursor-pointer text-red-500'>
          <FaEdit />
        </span>
      </div>
      {/* icon sec ends here */}
    </div>
  );
};

export default Coffee;
