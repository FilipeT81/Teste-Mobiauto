export namespace BrandsService {
  export interface BrandsModel {
    codigo: string;
    nome: string;
  }
}

export const standardizeGetAllBrands = (data: BrandsService.BrandsModel[]) => {
  return data;
};
