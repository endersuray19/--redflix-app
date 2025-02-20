import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";


  export async function getServerSideProps(contex:NextPageContext) {
    const session = await getSession(contex);
    if(!session){
      return{
        redirect:{
          destination:'/auth',
          permanent:false,
        }
      }
    }
    return{
      props:{}
    }
  }
  export default function Home() {
    const {data: user} = useCurrentUser();

  return (
   <div>
      <h1 className="text-4xl text-red-700">Redflix</h1>
      <p className="text-white text-2xl">Logged in as :{user?.name}</p>
      <button className="h-10 w-full text-green-700 bg-white" onClick={()=>signOut()}>Logout!</button>
   </div>
  );
}
