export default async function getCurrentUser() {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/auth/users/me`,
            {
                method: "GET",
                credentials: "include",
            }
        );
        console.log(response)
        if (!response.ok) {
            throw new Error("Failed to fetch current user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
