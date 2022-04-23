
export interface IOrder {
  id?: number;
  type?: string;
  date?: string;
  status?: string;
}

export class Order implements IOrder {
  constructor(
    public id?: number,
    public type?: string,
    public date?: string,
    public status?: string,
  ) {}
}