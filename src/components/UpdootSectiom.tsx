import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React from 'react'
import { PostsQuery } from '../generated/graphql';

interface UpdootSectionProps {
    post: PostsQuery["posts"]["posts"][0];
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({}) => {
    return (

        <Flex direction = "column" justifyContent="center" alignItems = "center" mr = {4}>
         <IconButton 
            aria-label = 'updoot post'
         icon = {<ChevronUpIcon/>} >
         </IconButton>
         {p.points}
         <IconButton 
            aria-label = 'downdoot post'
         icon = {<ChevronDownIcon/>} >
         </IconButton>
         </Flex>
    );
}