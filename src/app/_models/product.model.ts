
export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public price?: number,
  ) {}
}