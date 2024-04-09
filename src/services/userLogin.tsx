export default async function userLogin(
    userEmail: string | undefined,
    userPassword: string | undefined
) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: userEmail,
                    password: userPassword,
                }),
                credentials: "include",
            }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch login");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
