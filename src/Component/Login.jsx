import React,{ useState } from "react";
const Login = () => {

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
  
    if (Username === "" || Password === "") {
      alert("Please fill in all details");
    }
    else {
      alert("login successful");
    }

  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

        <form className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md" onSubmit={handleSubmit}>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-sky-700 mb-6">
            Login
          </h1>

          {/* Username */}
          <div className="mb-4">

            <label
              className="block text-gray-700 mb-2"
              htmlFor="username"
            >
              Username
            </label>

            <input
              type="text"
              placeholder="Username"
              id="username"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />

          </div>

          {/* Password */}
          <div className="mb-6">

            <label
              className="block mb-2 text-gray-700"
              htmlFor="password"
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              id="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Button */}
          <button
            type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg text-lg font-semibold transition" >
            Login
          </button>

        </form>

      </div>
    </>
  );
}
export default Login;
