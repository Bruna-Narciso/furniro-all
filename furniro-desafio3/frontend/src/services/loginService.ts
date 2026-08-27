const API_URL = "http://localhost:3000";

export async function login(
  email: string,
  password: string,
) {
  const response = await fetch(
    `${API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Could not login.",
    );
  }

  return result;
}