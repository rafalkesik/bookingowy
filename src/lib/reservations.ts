const hostexApiToken = process.env.HOSTEX_API_TOKEN;

export default async function getReservations() {
  console.log("Attempting to fetch reservations from Hostex...");
  
  if (!hostexApiToken) {
    throw new Error("Missing HOSTEX_API_TOKEN environment variable");
  }

  const response = await fetch(
    "https://api.hostex.io/v3/reservations?order_by=check_in_date&limit=100",
    {
      method: "GET",
      headers: {
        "Hostex-Access-Token": hostexApiToken,
        "accept": "application/json",
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch reservations from Hostex");
  }

  const parsedResponse = await response.json();
  const reservations = parsedResponse?.data?.reservations.reverse();
  console.log("Reservations fetched successfuly");

  return reservations;
}