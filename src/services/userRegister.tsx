export default async function userRegister(
    userEmail: string | undefined,
    userPassword: string | undefined
) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    username: userEmail,
                    password: userPassword,
                }),
            }
        );
        if (!response.ok) {
            throw new Error("Failed to fetch register");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}