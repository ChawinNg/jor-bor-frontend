export async function getAllFriends() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/social/friends`,
      { method: "GET", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch all friends");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getFriendRequests() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/social/requests`,
      { method: "GET", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch friend requests");
    }
  } catch (error) {
    console.error(error);
  }
}
