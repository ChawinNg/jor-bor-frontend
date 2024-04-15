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
