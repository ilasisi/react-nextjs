"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const MoviesPage = () => {
    const router = useRouter();

    const goto = () => {
        router.push("/movies/1234");
    };
    return (
        <div>
            <button onClick={goto}>Movie details</button>
            MoviesPage
        </div>
    );
};

export default MoviesPage;
