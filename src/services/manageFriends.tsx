export async function addFriend(userId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/social/add/${userId}`,
      { method: "POST", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to add friend");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function acceptFriend(userId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/social/accept/${userId}`,
      { method: "POST", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to accept friend");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function rejectFriend(userId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/social/reject/${userId}`,
      { method: "POST", credentials: "include" }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to reject friend");
    }
  } catch (error) {
    console.error(error);
  }
}
