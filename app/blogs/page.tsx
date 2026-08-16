import axios from "axios";

async function getBlogs() {
    const res = (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;

    //console.log(res)
    return res
}

export default async function Blogs(){
    const blogs = await getBlogs();
    return <>
        <div>
            {JSON.stringify(blogs)}
        </div>
    </>
}