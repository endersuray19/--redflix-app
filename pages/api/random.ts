import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/lib/prismadb";
//untuk menangani fungsi request dan respon
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    //bila request tidak ada get error
    if(req.method !== 'GET'){
        return res.status(405).end();
    }
    try{
        //harus login dulu
        await serverAuth(req);
        //menghitung jumlah data pada movie
        const movieCount = await prismadb.movie.count();
        //random 
        const randomIndex = Math.floor(Math.random() * movieCount);
        //memread semua movie dengan syarat hanya mengambil 1 saja
        const randomMovies = await prismadb.movie.findMany({
            take:1,
            //mengskip random film
            skip:randomIndex,
        })
        return res.status(200).json(randomMovies[0]);
    }catch(error){
        console.log(error);
        return res.status(400).end();
    }
}