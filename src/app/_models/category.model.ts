
export interface ICategory {
  id?: number;
  nom?: string;
  description?: string;
}

export class Category implements ICategory {
  constructor(
    public id?: number,
    public nom?: string,
    public description?: string,
  ) {}
}