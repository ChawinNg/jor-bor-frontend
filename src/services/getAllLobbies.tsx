export default async function getAllLobbies() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/lobbies`,
      { method: "GET", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch all lobbies");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
