export class JobDraft {
  constructor (
    public id :number,
    public client_id : number,
    public service_type : string,
    public service_id : number,
    public client_type : string,
    public status : string,
    public longitude : number,
    public latitude : number,
    public related_info : string,
    ){}
}
