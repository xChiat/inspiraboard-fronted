import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return(
        <div className="flex flex-col items-center justify-center w-md h-[700px] bg-gray-50 border border-neutral-900 rounded-lg shadow-md p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Iniciar Sesión</h2>
            <span className="hidden w-3/4 mb-4 p-2 bg-red-400 rounded-lg border border-red-800 text-red-950">
            Inicio de sesio fallido
            </span>
            <form className="flex flex-col space-y-4 w-[24rem] mb-4">
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </form>
            <div className="flex w-[24rem] items-center mb-4">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-600">Recordar mi sesión</label>
            </div>
            <button className="w-[24rem] bg-yellow-400 text-neutral-950 px-4 py-2 rounded-lg mb-4 hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-200">
                Iniciar Sesión
            </button>
            <div className="">
                ¿Olvidaste tu contraseña? 
                <Link to="/reset-password" className="text-yellow-500 hover:underline hover:text-gray-800"> ¡Recuperala! </Link>
            </div>
        </div>
    )
}

export default LoginForm;