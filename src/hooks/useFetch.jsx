import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetch = (url, key) => {
    const fetchData = async () => {
        const response = await axios(url);

        return response.data;
    };
    return useQuery({
        queryKey: key,
        queryFn: fetchData,
    });
};
