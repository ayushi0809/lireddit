
import {NavBar} from "../components/NavBar"
import {withUrqlClient} from "next-urql"
import { createUrqlClient} from "../utils/createUrqlClient"
import { usePostQuery } from "../generated/graphql";
import { Layout } from "../components/Layout";
import { Link } from '@chakra-ui/react';
import React from "react";
import NextLink from "next/link";


const Index = () => {
const [{data}] = usePostQuery({
    variables:{
        limit: 10,
    },
});
return (<Layout>
    <NextLink href = "/create-post">
<Link>Create Post</Link>
</NextLink>
<br />
{!data ? <div>loading...</div>: data.posts.map((p) => <div key = {p.id}>{p.title}</div>)}
</Layout>)};

export default withUrqlClient(createUrqlClient,{ssr:true})(Index)