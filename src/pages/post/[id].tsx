import { Box, Heading } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import { EditDeletePostButton } from '../../components/EditDeletePostButtoh';
import { Layout } from '../../components/Layout';
import { usePostQuery, usePostsQuery } from '../../generated/graphql';
import { createUrqlClient } from '../../utils/createUrqlClient';



 const Post  = ({}) => {
     const router = useRouter();
     const intId = typeof router.query.id === 'string' ? parseInt(router.query.id): -1;
     const [{data,error, fetching}] = usePostQuery({
        pause: intId ===-1,
         variables:{
             id: intId
         }
     });
     if(fetching){
         return (
             <Layout>
                 <div>Loading...</div>
             </Layout>
         )
     }
     if(error){
     return <div>{error.message}</div>
     }

     if(!data?.post){
         return(
             <Layout>
                 <Box>Could not find post</Box>
             </Layout>
         )
     }

     
    return(
        <Layout>
            <Heading mb = {4}>{data?.post?.title}</Heading>
            <Box mb = {4}>{data?.post?.text}</Box>
            <EditDeletePostButton  id = {data.post.id} creatorId = {data.post.creator.id}></EditDeletePostButton>
        </Layout>
    );
}
export default withUrqlClient(createUrqlClient, {ssr: true})(Post);