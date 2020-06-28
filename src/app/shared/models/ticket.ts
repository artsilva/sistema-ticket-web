export class Ticket {
  id: number;
  icon?: string;
  status: string;
  title: string;
  tech: string;
  petitioner: string;
  creation: string;
  expire: string;
  action: string;
  details: string;
  reason?: string;

  constructor(
    id: number,
    status: string,
    title: string,
    tech: string,
    petitioner: string,
    creation: string,
    expire: string,
    action: string,
    details: string,
    reason?: string
  ) {
    this.id = id;
    this.status = status;
    this.title = title;
    this.tech = tech;
    this.petitioner = petitioner;
    this.creation = creation;
    this.expire = expire;
    this.action = action;
    this.details = details;
    this.reason = reason;
  }
}
