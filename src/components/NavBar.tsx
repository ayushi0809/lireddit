import React from "react";
import {Box, Button, Flex, Link} from "@chakra-ui/react";
import NextLink from "next/link"
import { useMeQuery } from "../generated/graphql";

 interface NavBarProps{}

 export const NavBar:React.FC<NavBarProps> = ({}) =>{
     const [{data, fetching}] = useMeQuery();
     let body = null
     //body is loading
     if(fetching){

     }
     //user not logged in
     else if(!data?.me){
         body = (
             <>
            <NextLink href = "/login" >
             <Link color = "white" mr = {2}>Login</Link>
             </NextLink>
             <NextLink href = "/register" >
             <Link color = "white">Register</Link>
             </NextLink>
             </>
         );
     }
     // user is logged in
     else{
        body = (
            <Flex>
        <Box mr = {2}>{data.me.username}</Box>
        <Button variant = "link">Logout</Button>
        </Flex>
        );
        console.log(data.me)
     }
     return (
         <Flex bg = "tomato" p ={4}>
         <Box ml = {'auto'}>
             {body}
             </Box>
             </Flex>
     );
 }