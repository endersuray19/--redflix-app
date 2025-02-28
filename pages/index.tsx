import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Navbar from "./component/navbar";
import Billboard from "./component/billboard";


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
    <Navbar/>
     <Billboard/>
   </div>
  );
}
