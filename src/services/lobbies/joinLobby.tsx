export default async function joinLobby(lobbyId: string) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/join/${lobbyId}`,
            {
                method: "POST",
                credentials: "include",
            }
        );
        if (!response.ok) {
            throw new Error("Failed to join lobby");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
