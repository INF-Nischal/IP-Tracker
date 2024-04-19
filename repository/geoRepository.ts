import axios from "axios";

export async function getGeoData(ipAddress: string) {
  try {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country?apiKey=at_fSoRWPKhnOhxkF4KKBvTuFXGFQr6i&ipAddress=${ipAddress}`
    );
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error(error);
  }
}
