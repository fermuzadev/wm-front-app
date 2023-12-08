const USERS_ENDPOINT = "https://dating-app-back.onrender.com/users";

export const fetchData = async () => {
  try {
    const response = await fetch(USERS_ENDPOINT, {
      method: "GET",
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    const data = await response.json();
    return await data.users;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
