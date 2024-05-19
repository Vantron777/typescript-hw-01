import axios, { AxiosResponse } from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching from ${url}: ${error.message}`);
    } else {
      throw new Error(`Unexpected error: ${error}`);
    }
  }
}
