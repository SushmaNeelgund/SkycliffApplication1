export class Task{
  public constructor(
    public Id:string,
    public Title:string,
    public Status:string
  ){}
}
export class taskResolved{
  data: any[];
  public constructor( public task:any[], public errormessage:string)
  {}
}
