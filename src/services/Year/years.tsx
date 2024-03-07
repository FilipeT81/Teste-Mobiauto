import api from "../api";

import { YearsService, standardizeGetAllYears } from "../interface/years";

export interface YearsResponse extends YearsService.YearsResponse {}

export const getYears = async (brand: string, model: string) => {
  try {
    const result = await api.get(
      `/carros/marcas/${brand}/modelos/${model}/anos`
    );
    return standardizeGetAllYears(result.data);
  } catch (e: any) {
    throw {
      error: true,
      data: e.response.data,
    };
  }
};
