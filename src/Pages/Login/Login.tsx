import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { AuthContext } from '../../Contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom";
import UserLogin from '../../Models/UserLogin';
import { RotatingLines } from 'react-loader-spinner';
import Jorge from '../../assets/Jorge.png';



function Login(){
    let navigate = useNavigate();

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {} as UserLogin
      );

    const { user, handleLogin } = useContext(AuthContext);

    const {isLoading} = useContext(AuthContext) 

    useEffect(() => {
        if (user.token !== "") {
            navigate('/home')
        }
    }, [user])

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
      }
      
      function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(userLogin)
      }


    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
            <form onSubmit={login} className="flex justify-center items-center flex-col w-1/2 gap-4">
                <h2 className="text-slate-900 text-5x1 text-4xl">Entrar</h2>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email" 
                        placeholder="Email"   
                        className="border-2 border-slate-700 rounded p-2"
                        value={userLogin.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password"
                        id="password"
                        name="password" 
                        placeholder="Password"   
                        className="border-2 border-slate-700 rounded p-2"
                        value={userLogin.password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>

                <button type='submit' className="rounded bg-dark-pastel-blue hover:bg-escuro-dark-pastel-blue text-white w-1/2 py-2 flex justify-center">
                    {isLoading ? <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  /> :
                    <span>Entrar</span>}
                </button>

                <hr className="border-slate-800 w-full"/> 

                <p>
                        Ainda não tem uma conta? {' '}
                        <Link to="/Register" className="text-cyan-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
            </form>
            <div className='flex justify-center items-center flex-col w-1/2 gap-4'>
                    <img src={Jorge} alt="" />
            </div>
        </div>
        
    )
}

export default Login;