"use client";

import { useFetch } from "@/hooks/useFetch";

export const Posts = () => {
    const { data, isLoading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
        ["posts"]
    );

    if (isLoading) return <p>Loading ...</p>;

    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <p className="text-3xl">Posts</p>
            {data?.map((post, index) => (
                <div key={index}>
                    <p>
                        {post.id} - {post.title}
                    </p>
                </div>
            ))}
        </div>
    );
};
