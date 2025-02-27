import axios from 'axios';
import Input from "@/pages/component/Input";
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react';
//import icon 
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
//page auth
const Auth = ()=>{
    //email digunakan  misal untuk input oleh pengguna, setemail digunakan untuk mengatur value email
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const[variant, setVariant] = useState("login");
    //mengatur toggle login
    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=>currentVariant ==='login'?'register':'login')
    },[]);
    //fungsi login
     const login = useCallback(async()=>{
        try{
            //menggunakan signin dengna value email dan password
            await signIn('credentials',{
                email, password,callbackUrl:'/profiles'
            });
        }
        catch(error){
            console.log(error);
        }//Jika email dan password tidak berubah, fungsi login yang sama akan digunakan di setiap render, menghemat performa.

    },[email,password]);
    //fungsi register
    const register = useCallback(async()=>{
        try{
            //mengirim value ke register.ts untuk mendaftarkan akun
            await axios.post("/api/register",{
                email,
                name,
                password
            });
            //login ketika berhasil register
            login();
        }catch(error){
            console.log(error);
        }
    },[email, name,password,login]);
  
    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat bg-fixed bg-center]">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <div className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12"/>
                </div>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                           {variant === 'login' ? 'Sign in' : 'register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                               <Input label="Name" onChange={(ev:any)=>setName(ev.target.value)} id="name" type="text" value={name}/>
                            )}
                             <Input label="Email" onChange={(ev:any)=>setEmail(ev.target.value)} id="email" type="email" value={email}/>
                             
                              <Input label="Password" onChange={(ev:any)=>setPassword(ev.target.value)} id="password" type="password" value={password}/>
                        </div>
                        <button onClick={variant === 'login' ?login :register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{variant === 'login' ? 'Login': 'Sign up'}</button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div onClick={()=>signIn('google',{callbackUrl:'/profiles'})} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition" >
                                <FcGoogle size={30}/>
                            </div>
                             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition" onClick={()=>signIn('github',{callbackUrl:'/profiles'})}>
                                <FaGithub size={30}/>
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Redflix ?' :'Already have an account'}
                        
                        <span onClick={toggleVariant} className=" text-white ml-1 hover:underline cursor-pointer">
                            {variant === 'login' ?'Create an account':'login'}
                        </span>
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Auth;
