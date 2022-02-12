// salad&app_id=5d088b59
import ExternalApiError from "@/errors/ExternalApiError";
import api from "./externalAPIs/edamam";

function auth() {
  return `&app_id=${process.env.EDAMAM_API_ID}&&app_key=${process.env.EDAMAM_API_KEY}`;
}

export async function getRecipesByDishType(dishTypes: string[]) {
  try {
    const query = dishTypes.reduce((prev, curr) => {
      return  prev + "&dishType=" + curr;
    }, "");
    const response = await api.get(`/search?q=${query}${auth()}`);
    return response.data.hits;
  } catch (error) {
    throw new ExternalApiError("Edamam API error");
  }
}
