import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react'
import { PostsQuery, useVoteMutation } from '../generated/graphql';

interface UpdootSectionProps {
    post: PostsQuery["posts"]["posts"][0];
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({post}) => {
    const [loadingState, setLoadingState] = useState<'updoot-loading' | 'downdoot-loading'|'not-loading'>('not-loading');
    const [,vote] = useVoteMutation();
    return (
        
        <Flex direction = "column" justifyContent="center" alignItems = "center" mr = {4}>
         <IconButton 
         onClick ={async () =>{
            if(post.voteStatus === 1){
                return;
            }
             setLoadingState('updoot-loading')
             await vote({
                 postId: post.id,
                 value: 1,
             })
             setLoadingState('not-loading')
         }}
         colorScheme={post.voteStatus===1 ? "green" : undefined}
         isLoading={loadingState==='updoot-loading'}
        aria-label = 'updoot post'
         icon = {<ChevronUpIcon/>} >
         </IconButton>
         {post.points}
         <IconButton 
         onClick ={async() =>{
             if(post.voteStatus === -1){
                 return;
             }
            setLoadingState('downdoot-loading')
            await vote({
                postId: post.id,
                value: -1,
            })
            setLoadingState('not-loading')
        }}
        colorScheme={post.voteStatus===-1 ? "red" : undefined}
        isLoading={loadingState==='downdoot-loading'}
        aria-label = 'downdoot post'
         icon = {<ChevronDownIcon/>} >
         </IconButton>
         </Flex>
    );
}