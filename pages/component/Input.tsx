import React from "react";
interface inputProps{
    id:string;
    onChange:any; 
    value:string;
    label:string;
    type?:string;
}
const Input: React.FC<inputProps>= ({
    id,
    onChange,
    value,
    label,
    type,
})=>{
 return (
        <div className="relative">
             <input value={value} type={type} onChange={onChange} id={id} className="block rounded-md px-6 pt-6 pb-2 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"  placeholder=" "/>
             <label htmlFor={id} className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 left-6 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:translate-y-3 peer-focus:scale-75">{label}</label>
        </div>
       
    )
}
   

export default Input;