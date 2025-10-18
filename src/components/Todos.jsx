"use client";

import { useFetch } from "@/hooks/useFetch";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const Todos = () => {
    const { data, isLoading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/todos",
        ["todos"]
    );

    const mutation = useMutation({
        mutationFn: (newTodo) => {
            return axios.post(
                "https://jsonplaceholder.typicode.com/todos",
                newTodo
            );
        },
    });

    if (isLoading) return <p>Loading ...</p>;

    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <p className="text-3xl">Todos</p>
            <div>
                {mutation.isPending ? (
                    "Adding todo..."
                ) : (
                    <>
                        {mutation.isError ? (
                            <div>
                                An error occurred: {mutation.error.message}
                            </div>
                        ) : null}

                        {mutation.isSuccess ? <div>Todo added!</div> : null}

                        <button
                            onClick={() => {
                                mutation.mutate({
                                    id: new Date(),
                                    title: "Do Laundry",
                                });
                            }}
                        >
                            Create Todo
                        </button>
                    </>
                )}
            </div>
            {data?.map((todo, index) => (
                <div key={index}>
                    <p>
                        {todo.id} - {todo.title}
                    </p>
                </div>
            ))}
        </div>
    );
};
