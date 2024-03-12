"use client";

import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web"

export const ChrispChat =()=>{
    useEffect(()=>{
        Crisp.configure("0112bc47-1188-4787-bed9-3e876107a72c")
    },[])

    return null;
}