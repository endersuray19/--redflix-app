
import Input from "@/component/Input";
import { useCallback, useState } from "react";

const Auth = ()=>{
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const[variant, setVariant] = useState("login");
    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=>currentVariant ==='login'?'register':'login')
    },[])
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
                                <Input label="Email" onChange={(ev:any)=>setEmail(ev.target.value)} id="email" type="email" value=""/>
                            )}
                            
                             <Input label="Username" onChange={(ev:any)=>setUsername(ev.target.value)} id="username" type="username" value=""/>
                              <Input label="Password" onChange={(ev:any)=>setPassword(ev.target.value)} id="password" type="password" value=""/>
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{variant === 'login' ? 'Login': 'Sign up'}</button>
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