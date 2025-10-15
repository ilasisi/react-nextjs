// "use client";

// import { useParams } from "next/navigation";

const MovieDetailsPage = async ({ params }) => {
    // const params = await useParams();
    const { categoryId, id } = await params;
    console.log(id, categoryId);
    return <div>MovieDetailsPage</div>;
};

export default MovieDetailsPage;
