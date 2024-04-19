import { SliderValue } from "@nextui-org/react";

export default async function createLobby(
    lobby_name: string | undefined,
    isLobbyPublic: boolean | undefined,
    lobby_code: string | undefined,
    lobby_max_player: SliderValue | undefined
) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: lobby_name,
                    is_public: isLobbyPublic,
                    lobby_code: lobby_code,
                    max_player: lobby_max_player,
                }),
                credentials: "include",
            }
        );
        if (!response.ok) {
            throw new Error("Failed to create lobby");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
