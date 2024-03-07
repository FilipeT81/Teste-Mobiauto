import api from "../api";

import { ModelsService, standardizeGetAllModels } from "../interface/models";

export interface ModelsResponse extends ModelsService.ModelsResponse {}

export const getModels = async (code: string) => {
  try {
    const result = await api.get(`/carros/marcas/${code}/modelos`);
    return standardizeGetAllModels(result.data.modelos);
  } catch (e: any) {
    throw {
      error: true,
      data: e.response.data,
    };
  }
};
