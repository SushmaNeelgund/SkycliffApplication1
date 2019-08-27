export class User {
  public constructor(
    public user_email: string,
    public user_name: string,
    public user_password: string,
    public user_mobile_no: string
  ) {}
}
export class userResolved{
  data: any[];
  public constructor( public users:any[], public errormessage:string)
  {}
}
