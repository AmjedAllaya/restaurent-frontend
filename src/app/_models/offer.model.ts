
export interface IOffer {
  id?: number;
  name?: string;
  description?: string;
}

export class Offer implements IOffer {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
  ) {}
}