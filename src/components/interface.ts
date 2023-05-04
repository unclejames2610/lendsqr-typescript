export interface IProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

export interface IGuarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface ISocials {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface IEducation {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

export interface IUser {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: IProfile[];
  guarantor: IGuarantor[];
  accountBalance: string;
  accountNumber: string;
  socials: ISocials[];
  education: IEducation[];
  id: string;
  [key: string]: any;
}
