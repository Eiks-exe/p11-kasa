import { promises } from "dns";
import path from "path";
import React, { useContext, useEffect, useState } from "react";
import { ILogement } from "../components/Gallery";
import { createContext } from "vm";

const url = "/ressources/logement.json"
const fetchData  = <T,>(): Promise<T> => {
    return fetch(url).then<T>(res => res.json() as Promise<T>);
}

export const useHouseContext = () => {
    const[Logements, setLogements ] = useState<ILogement[]>()
    useEffect(()=>{
        fetchData<ILogement[]>()
            .then((res)=>{
                setLogements(res)
            })
    },[])
    return Logements
}