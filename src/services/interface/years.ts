export namespace YearsService {
  export interface YearsResponse {
    codigo: string;
    nome: string;
  }
}

export const standardizeGetAllYears = (data: YearsService.YearsResponse[]) => {
  return data;
};
