//Bad way of doing things in next.js

import axios from "axios";

// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function User() {
//   const [data, setData] = useState();
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => setData(response.data));
//   }, []);
// //   const mdata = data?.map((user) => ({
// //     id: user.id,
// //     name: user.username,
// //   }));
//   return (
//     <>
//       user page
//       {JSON.stringify(
//         //@ts-expect-error "use generics to solve this ts error"
//         data?.map((user) => ({
//           id: user.id,
//           name: user.username,
//         })),
//       )}
//     </>
//   );
// }

// Good way to do things in next js

async function getUsers(){
    return await axios.get("http://localhost:3000/api/v1/user/details")
}
export default async function User(){
    const users = await getUsers();
    //console.log(users)
    return <>
    {JSON.stringify(users.data)}
    </>
}