const url_api = "https://rickandmortyapi.com/api/";

export const apiService = {
  async get(endpoint) {
    try 
    {
      const response = await fetch(`${url_api}${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error : ${response.status}`);
      }

      const data = await response.json();
      return data || [];
    } catch (error) {
      console.error("Error en la API:", error.message);
      throw error;
    }
  },
};
