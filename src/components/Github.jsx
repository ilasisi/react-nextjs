"use client";

import { useFetch } from "@/hooks/useFetch";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

// Create a single supabase client for interacting with your database
const supabase = createClient(
    "https://cdljotcshayfizjzhmce.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkbGpvdGNzaGF5Zml6anpobWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMDQ3NDQsImV4cCI6MjA2ODY4MDc0NH0._1e35PnpVBzTyBDrkpcXSEWhwScVsuS3JoP5W6O1Wr4"
);

export const Github = () => {
    const { isLoading, error, data } = useFetch(
        "https://api.github.com/repos/facebook/react",
        ["repoData"]
    );

    useEffect(() => {
        const fetchProfile = async () => {
            const { data: sData, sError } = await supabase
                .from("users")
                .select();

            const { error } = await supabase
                .from("users")
                .insert({ name: "Mordor" });

            console.log(sData);
        };

        fetchProfile();
    }, []);

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
            <strong>👀 {data?.subscribers_count}</strong>{" "}
            <strong>✨ {data?.stargazers_count}</strong>{" "}
            <strong>🍴 {data?.forks_count}</strong>
        </div>
    );
};
