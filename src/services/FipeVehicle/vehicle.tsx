import api from "../api";

import {
  FipeVehicleService,
  standardizeGetAllFipeVehicle,
} from "../interface/vehicle";

export interface FipeVehicleResponse
  extends FipeVehicleService.FipeVehicleResponse {}

export const getFipeVehicle = async (
  brand: string,
  model: string,
  year: string
) => {
  try {
    const result = await api.get(
      `/carros/marcas/${brand}/modelos/${model}/anos/${year}`
    );
    return standardizeGetAllFipeVehicle(result.data);
  } catch (e: any) {
    throw {
      error: true,
      data: e.response.data,
    };
  }
};
