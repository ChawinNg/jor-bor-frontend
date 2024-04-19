export default async function getOneLobby(lobbyId: string) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/${lobbyId}`,
            {
                method: "GET",
                credentials: "include",
            }
        );
        console.log(response)
        if (!response.ok) {
            throw new Error("Failed to fetch lobby");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
