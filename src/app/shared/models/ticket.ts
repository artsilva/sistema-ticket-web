export class Ticket {
  id?: number;
  icon?: string;
  areaid?: number;
  area?: string;
  statusid: number;
  status?: string;
  statusreason?: string;
  title: string;
  usertechid?: number;
  tech?: string;
  petitionerid: number;
  petitioner?: string;
  typeid: number;
  type?: string;
  datecreation: Date;
  datemodify?: Date;
  dateexpire?: Date;
  emails?: string;
  details: string;
}
