import React from "react";
import './CSS/Login.css';

export default function Login() {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-wrap ">
        <button className="w-80 h-80 m-4 bg-blue-500 text-white rounded-lg">Customer Login</button>
        <button className="w-80 h-80 m-4 bg-blue-500 text-white rounded-lg">Powerhouse Login</button>
        <button className="w-80 h-80 m-4 bg-blue-500 text-white rounded-lg">Laundry Login</button>
      </div>
    </div>
  );
}
// customer login , powerhouse login , laundry login