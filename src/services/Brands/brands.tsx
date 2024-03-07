import api from "../api";

import { BrandsService, standardizeGetAllBrands } from "../interface/brands";

export interface BrandsResponse extends BrandsService.BrandsModel {}

export const getAllBrands = async () => {
  try {
    const result = await api.get("/carros/marcas");
    return standardizeGetAllBrands(result.data);
  } catch (e: any) {
    throw {
      error: true,
      data: e.response.data,
    };
  }
};
