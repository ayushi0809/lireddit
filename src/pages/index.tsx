
import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React, { useState } from "react";
import { EditDeletePostButton } from "../components/EditDeletePostButtoh";
import { Layout } from "../components/Layout";
import { UpdootSection } from "../components/UpdootSectiom";
import { useDeletePostMutation, useMeQuery, usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";


const Index = () => {
    const [variables,setVariables] =  useState({limit:10, cursor: null as null | string })
    
    const [{data , fetching}] = usePostsQuery({
    variables,
});

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
     { (<Box ml = 'auto'>
         <EditDeletePostButton id = {p.id} creatorId = {p.creator.id}></EditDeletePostButton>
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