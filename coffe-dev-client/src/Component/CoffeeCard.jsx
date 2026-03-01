import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { name, supplier, Price, photo, _id } = coffee;

  const handleDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/coffes/${id}`, {
          method: "DELETE", // Specify the DELETE method
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Item has been deleted.",
                icon: "success",
              });
              const remainingCoffes = coffees.filter((cof) => cof._id !== id);

              setCoffees(remainingCoffes);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-[#F5F4F1] shadow-sm p-8 rounded-xl flex items-center justify-between">
      <figure className="w-1/3">
        <img src={photo} alt={name} className="h-64 object-contain" />
      </figure>

      <div className="flex-grow ml-8 space-y-3">
        <p className="text-xl">
          <span className="font-bold">Name:</span> {name}
        </p>
        <p className="text-xl">
          <span className="font-bold">Chef:</span> {supplier}
        </p>
        <p className="text-xl">
          <span className="font-bold">Price:</span> {Price} taka
        </p>
      </div>

      <div className="card-actions justify-end">
        <div className="join join-vertical space-y-4">
          <Link to={`coffes/${_id}`}>
            <button className="btn btn-square bg-[#D2B48C] hover:bg-[#b89a74] border-none text-white">
              <FaEye size={20} />
            </button>
          </Link>

          <Link to={`/updateCoffe/${_id}`}>
            <button className="btn btn-square bg-[#3C393B] hover:bg-[#2a282a] border-none text-white">
              <FaPen size={18} />
            </button>
          </Link>

          <button
            onClick={() => handleDelet(_id)}
            className="btn btn-square bg-[#EA4744] hover:bg-[#d43d3a] border-none text-white"
          >
            <FaTrash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
