export default async function getRequests() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/social/requests`,
      { method: "GET", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch friend requests");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
