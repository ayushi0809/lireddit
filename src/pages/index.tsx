
import {NavBar} from "../components/NavBar"
import {withUrqlClient} from "next-urql"
import { createUrqlClient} from "../utils/createUrqlClient"
import { usePostQuery } from "../generated/graphql";


const Index = () => {
const [{data}] = usePostQuery();
return (<>
<NavBar></NavBar>
<div>hello Ayushi</div>
<br />
{!data ? null : data.post.map(p => <div key = {p.id}>{p.title}</div>)}
</>)};

export default withUrqlClient(createUrqlClient)(Index)