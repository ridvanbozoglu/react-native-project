import { useQuery } from "@tanstack/react-query";
import { getRicks } from "./fetchApi";

export const useGetRicks = (name: string) => {
    return useQuery({
        queryKey: ['ricks', name],
        queryFn: () => getRicks(name),
        enabled: !!name, 
    });
};