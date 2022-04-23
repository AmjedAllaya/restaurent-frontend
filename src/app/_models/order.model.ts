
export interface IOrder {
  id?: number;
  type?: string;
  date?: Date;
  status?: string;
}

export class Order implements IOrder {
  constructor(
    public id?: number,
    public type?: string,
    public date?: Date,
    public status?: string,
  ) {}
}