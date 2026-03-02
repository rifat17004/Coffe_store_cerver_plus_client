import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignupPage = () => {
  const { handleEmailPassSignin } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    // sending email pass to auth
    handleEmailPassSignin(userData.email, userData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* --- Themed Back to Home Link --- */}
        <div className="mb-8">
          <a
            href="/"
            className="flex items-center gap-2 text-[#374151] hover:text-[#331A15] transition-colors"
            style={{ fontFamily: "Rancho, cursive", fontSize: "30px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to home
          </a>
        </div>

        {/* --- Signup Card --- */}
        <div className="card w-full shadow-xl bg-[#F4F3F0] rounded-none border-t-4 border-[#331A15]">
          <form onSubmit={handleSignup} className="card-body p-10">
            <h2
              className="text-5xl font-bold text-center mb-8 text-[#374151]"
              style={{ fontFamily: "Rancho, cursive" }}
            >
              Sign Up
            </h2>

            {/* Name Field */}
            <div className="form-control w-full mb-4">
              <label className="label pt-0">
                <span
                  className="label-text text-xl font-semibold text-[#374151]"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  Full Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full bg-white focus:outline-[#331A15]"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control w-full mb-4">
              <label className="label pt-0">
                <span
                  className="label-text text-xl font-semibold text-[#374151]"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  Email Address
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white focus:outline-[#331A15]"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full mb-6">
              <label className="label pt-0">
                <span
                  className="label-text text-xl font-semibold text-[#374151]"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-white focus:outline-[#331A15]"
                required
              />
            </div>

            {/* Buttons Section */}
            <div className="form-control gap-4">
              <button
                type="submit"
                className="btn w-full bg-[#D2B48C] hover:bg-[#B68D5D] text-[#331A15] border-2 border-[#331A15] font-bold text-2xl"
                style={{ fontFamily: "Rancho, cursive" }}
              >
                Sign Up
              </button>

              <div className="divider text-[#374151] font-bold">OR</div>

              <button
                type="button"
                className="btn w-full bg-white text-black border-2 border-[#e5e5e5] hover:border-[#331A15] flex items-center justify-center gap-3"
              >
                {/* Google SVG */}
                <svg width="20" height="20" viewBox="0 0 512 512">
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 0 1 0-171l63 49q-12 37 0 73"
                  />
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  />
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0 1 90 341"
                  />
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0 0 53-179H260v74h102q-7 37-38 57"
                  />
                </svg>
                Sign up with Google
              </button>
            </div>

            <p className="text-center mt-8 text-[#374151] font-medium">
              Already have an account?{" "}
              <a href="/login" className="link font-bold text-[#331A15]">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
