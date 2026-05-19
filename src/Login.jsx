import React, { useState } from "react";
const Login = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-500 px-4 ">
        <form action="">
          {/*heading*/}
          <h1 className="font-bold text-2xl text-blue-400">Login</h1>

          {/*fill details*/}
          <div>

          </div>


        </form>
      </div>
    </>
  )
}
export default Login;
// import React, { useState } from "react";

// function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Email:", email);
//     console.log("Password:", password);

//     alert("Login Successful");
//   };

//   return (

//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
//       >

//         <h1 className="text-3xl font-bold text-center text-sky-700 mb-6">
//           Login
//         </h1>

//         {/* Email */}
//         <div className="mb-4">

//           <label className="block text-gray-700 mb-2">
//             Email
//           </label>

//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-500"
//           />                                 

//         </div>

//         {/* Password */}
//         <div className="mb-6">

//           <label className="block text-gray-700 mb-2">
//             Password
//           </label>

//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-500"
//           />

//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg text-lg font-semibold transition"
//         >
//           Login
//         </button>

//       </form>

//     </div>
//   );
// }

// export default Login;