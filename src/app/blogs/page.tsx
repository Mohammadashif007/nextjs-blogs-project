// import BlogCard from "@/components/ui/BlogCard";
// import { Blog } from "@/types";
// import { Metadata } from "next";
// import React from "react";

import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

// export const metaData: Metadata = {
//     title : "NexaBlog | Blogs"
// }

// const BlogsPage = async () => {
//     const res = await fetch("http://localhost:5000/blogs", {
//         cache: "no-store",
//     });
//     const blogs = await res.json();
//     return (
//         <div className="w-[90%] mx-auto">
//             <h1 className="text-3xl text-center my-5 font-bold">
//                 Explore
//                 <span className="text-teal-600"> All Blogs</span>
//             </h1>
//             <p className="text-center text-gray-400 w-2/5 mx-auto">
//                 <i>
//                     Dive into the fascinating world of quantum computing, where
//                     unlocking unprecedented computational power.
//                 </i>
//             </p>
//             <div className="grid grid-cols-3 gap-3 my-10">
//                 {blogs.map((blog: Blog) => (
//                     <BlogCard key={blog.id} blog={blog}></BlogCard>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BlogsPage;

export const metadata  = {
    title: "NexaBlog | Blogs"
}

const BlogsPage = async () => {
    const res = await fetch("http://localhost:5000/blogs", {cache: "no-store"});
    const blogs = await res.json();
    return (
        <div className="my-10 w-[90%] mx-auto">
            <h1 className="text-3xl text-center my-5 font-bold">
                Latest Blogs From{" "}
                <span className="text-teal-600">NexaBlog</span>
            </h1>
            <p className="text-center text-gray-400 w-2/5 mx-auto">
                <i>
                    Dive into the fascinating world of quantum computing, where
                    unlocking unprecedented computational power.
                </i>
            </p>
            <div className="grid grid-cols-3 gap-3 my-10">
                {blogs.map((blog: Blog) => (
                    <BlogCard key={blog.id} blog={blog}></BlogCard>
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;
