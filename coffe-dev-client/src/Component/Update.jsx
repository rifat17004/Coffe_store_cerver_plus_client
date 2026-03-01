import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, Price, supplier, taste, category, details, photo } =
    coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const fromdata = new FormData(form);
    const formObject = Object.fromEntries(fromdata.entries());

    fetch(`http://localhost:8000/coffes/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="bg-[#F4F3F0] min-h-screen p-8 md:p-24">
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#374151] hover:text-primary transition-colors font-medium text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span style={{ fontFamily: "Rancho, cursive" }}>Back to home</span>
        </Link>
      </div>

      {/* Main Form Container */}
      <div className="bg-[#F4F3F0] border-2 border-white rounded-lg max-w-5xl mx-auto p-10 md:p-20 shadow-sm">
        <div className="text-center mb-8">
          <h2
            className="text-4xl font-bold mb-4 text-[#374151]"
            style={{ fontFamily: "Rancho, cursive" }}
          >
            Update Existing Coffee Details
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee}>
          {/* Row 1: Name and Chef */}
          <div className="md:flex gap-6 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered w-full bg-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-lg">Price</span>
              </label>
              <input
                type="text"
                name="Price"
                defaultValue={Price}
                placeholder="Enter coffee chef"
                className="input input-bordered w-full bg-white focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Row 2: Supplier and Taste */}
          <div className="md:flex gap-6 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-lg">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full bg-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-lg">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered w-full bg-white focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Row 3: Category and Details */}
          <div className="md:flex gap-6 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-lg">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered w-full bg-white focus:outline-none"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-lg">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered w-full bg-white focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Row 4: Photo URL */}
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text font-bold text-lg">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered w-full bg-white focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Update Coffee Details"
            className="btn btn-block bg-[#D2B48C] hover:bg-[#b89a74] border-2 border-[#331A15] text-[#331A15] text-xl normal-case"
            style={{ fontFamily: "Rancho, cursive" }}
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
