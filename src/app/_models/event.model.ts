
export interface IEvent{
  id?: number;
  name?: string;
  description?: string;
  beginDate?: string;
  endDate?: string;
}

export class Event implements IEvent {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public beginDate?: string,
    public endDate?: string,
  ) {}
}