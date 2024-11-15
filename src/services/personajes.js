import { apiService } from "./rickandmortyService";

export const personajesRickAndMorty = {
  async getPersonajes(page = 1) {
    try {
      const data = await apiService.get(`character?page=${page}`);
      return data;
    } catch (error) {
      console.error("Error al obtener personajes:", error.message);
      throw error;
    }
  },
};
