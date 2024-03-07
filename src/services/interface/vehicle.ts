export namespace FipeVehicleService {
  export interface FipeVehicleResponse {
    TipoVeiculo: number;
    Valor: string;
    Marca: string;
    Modelo: string;
    AnoModelo: number;
    Combustivel: string;
    CodigoFipe: string;
    MesReferencia: string;
    SiglaCombustivel: string;
  }
}

export const standardizeGetAllFipeVehicle = (data: FipeVehicleService.FipeVehicleResponse) => {
  return data;
};
