export async function lobbyReady() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/ready`,
      { method: "POST", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch lobby ready status");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function lobbyUnready() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobby/unready`,
      { method: "POST", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch lobby unready status");
    }
  } catch (error) {
    console.error(error);
  }
}
