import fetcher from "@/lib/fetcher"
import useSWR from "swr"


//custom hook untuk mengambil billboard
const useBillboard=()=>{
    //mengambil data endpoin API
    const {data,error, isLoading} = useSWR('/api/random',fetcher,{
        //konfigurasi useSWR
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false,
    })//pengembalian data,erro dan loading
    return{
        data,
        error,
        isLoading
    }
}
export default useBillboard;