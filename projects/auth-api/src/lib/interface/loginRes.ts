export interface LoginAPIData {

  message: string;
  token:string;
  user:{

    _id: number;
    Username: string;
    firstName: string;
   lastName: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
    createdAt: string;
  };

}

export interface LoginRes{
  message: string,
  token:string,
  userEmail:string
}





