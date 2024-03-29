import React, { useEffect } from 'react';
import {useRouter} from "next/router";
import { useMeQuery } from '../generated/graphql';

export const useisAuth = () => {
    const [{data,fetching}] = useMeQuery();
   const router = useRouter();
   useEffect(() =>{
    if(!fetching && !data?.me){
      router.replace("/login?next="+router.pathname);
    }
   },[fetching,data,router])
}