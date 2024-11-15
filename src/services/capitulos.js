import { apiService } from "./rickandmortyService";

export const capitulosRickAndMorty = {
  async getCapitulos(page = 1) {
    try {
      const data = await apiService.get(`episode?page=${page}`);
      return data;
    } catch (error) {
      console.error("Error al obtener capitulos:", error.message);
      throw error;
    }
  },
};
