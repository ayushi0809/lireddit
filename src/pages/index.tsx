
import {NavBar} from "../components/NavBar"
import {withUrqlClient} from "next-urql"
import { createUrqlClient} from "../utils/createUrqlClient"
import { useDeletePostMutation, useMeQuery, usePostsQuery } from "../generated/graphql";
import { Layout } from "../components/Layout";
import { Box, Button, Flex, Heading, Icon, IconButton, Link, Stack, Text } from '@chakra-ui/react';
import React, { useState } from "react";
import NextLink from "next/link";
import { DeleteIcon , EditIcon } from "@chakra-ui/icons"
import { UpdootSection } from "../components/UpdootSectiom";


const Index = () => {
    const [variables,setVariables] =  useState({limit:10, cursor: null as null | string })
    const [{data: meData}] = useMeQuery();
    const [{data , fetching}] = usePostsQuery({
    variables,
});
const [,deletePost] = useDeletePostMutation();
if(!fetching && !data){
    return <div> Query Failed for some reasons </div>
}
return (<Layout>
{!data && fetching ? <div>loading...</div>:(
     <Stack spacing = {8}> 
     {data!.posts.posts.map((p) => !p ? null:
     (<Flex key = {p.id} p={5} shadow="md" borderWidth="1px">
       <UpdootSection post = {p}></UpdootSection>  
     <Box flex = {1}>
         <NextLink href = "/post/[id]" as = {`/post/${p.id}`}>
         <Link>
     <Heading fontSize="xl">{p.title}</Heading>
     </Link>
     </NextLink>
     <Text>Posted by {p.creator.username}</Text>
     <Flex align = "center">
     <Text  flex = {1} mt={4}>{p.textSnippet}</Text>
     {meData?.me?.id !== p.creator.id ? null : (<Box ml = 'auto'>
         <NextLink href = '/post/edit/[id]' as ={`/post/edit/${p.id}`}>
     <IconButton as = {Link} mr = {4} aria-label = "Edit Post" icon = {<EditIcon/>} ></IconButton>
     </NextLink>
     <IconButton aria-label = "Delete Post" icon = {<DeleteIcon/>} onClick={() => { deletePost({id: p.id})}}></IconButton>
     </Box>)}
     </Flex>
     </Box>
   </Flex>)
   )}
     </Stack>)}
     {
         data && data.posts.hasMore ? (
             <Flex>
                 <Button  onClick ={() => setVariables({
                     limit:variables.limit,
                     cursor: data.posts.posts[data.posts.posts.length -1].createdAt,
                 })}isLoading = {fetching} m = "auto" my = {8} >Load More...</Button>
             </Flex>
         ): null
     }
</Layout>)};

export default withUrqlClient(createUrqlClient,{ssr:true})(Index)