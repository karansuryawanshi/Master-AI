"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import ProModel from './pro-model';

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null;
    }


  return (
    <>
        <ProModel></ProModel>
    </>
  )
}

export default ModelProvider
