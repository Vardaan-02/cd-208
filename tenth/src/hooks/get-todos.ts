import { useQuery } from "@tanstack/react-query";

export default function useTodos() {
    return useQuery({
        queryKey: ['todos'],
        queryFn: () => {
            try {
                const response = fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response => response.json());

                return response;

            } catch (error) {
                return error;
            }
        }
    })
}