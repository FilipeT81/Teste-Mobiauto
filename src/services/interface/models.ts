export namespace ModelsService {
  export interface ModelsResponse {
    codigo: string;
    nome: string;
  }
}

export const standardizeGetAllModels = (data: ModelsService.ModelsResponse[]) => {
  return data;
};
