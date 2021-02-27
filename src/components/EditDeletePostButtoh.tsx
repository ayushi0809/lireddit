import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { useDeletePostMutation, useMeQuery} from '../generated/graphql';

interface EditDeletePostButtonProps {
    id: number;
    creatorId: number

}

export const EditDeletePostButton: React.FC<EditDeletePostButtonProps> = ({
    id,
    creatorId
}) => {
    const [{data: meData}] = useMeQuery();
    const [,deletePost] = useDeletePostMutation();
    if(meData?.me?.id !== creatorId ){
        return null
    }
    return (

        <Box >
         <NextLink href = '/post/edit/[id]' as ={`/post/edit/${id}`}>
     <IconButton as = {Link} mr = {4} aria-label = "Edit Post" icon = {<EditIcon/>} ></IconButton>
     </NextLink>
     <IconButton aria-label = "Delete Post" icon = {<DeleteIcon/>} onClick={() => { deletePost({id})}}></IconButton>
     </Box>
    );
}