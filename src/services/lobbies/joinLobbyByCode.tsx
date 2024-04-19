export default async function joinLobbyByCode(code: string) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/codedJoin`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lobby_code: code,
                }),
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
