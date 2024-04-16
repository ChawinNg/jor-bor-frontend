export async function joinLobby(lobbyId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/join/${lobbyId}`,
      { method: "POST", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to join lobby");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function leaveLobby() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/leave/`,
      { method: "POST", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to leave lobby");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function createLobby(
  name: string | undefined,
  max_players: number | undefined,
  is_public: boolean | undefined
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/create/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, max_players, is_public }),
        credentials: "include",
      }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to create lobby");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
