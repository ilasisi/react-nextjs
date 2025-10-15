import React from "react";

const PostPage = async ({ params }) => {
    const { slug } = await params;

    console.log(slug);
    return <div>PostPage</div>;
};

export default PostPage;
