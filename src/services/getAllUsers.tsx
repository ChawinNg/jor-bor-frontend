export default async function getAllUsers() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/users`,
      { method: "GET", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to get all users");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
