
export interface IEvent{
  id?: number;
  name?: string;
  description?: string;
  begin_date?: Date;
  end_date?: Date;
}

export class Event implements IEvent {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public begin_date?: Date,
    public end_date?: Date,
  ) {}
}