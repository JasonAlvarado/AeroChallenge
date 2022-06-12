export interface IProduct {
  _id: string;
  category: string;
  cost: number;
  createDate: string;
  img: Images;
  name: string;
}

export interface Images {
  hdUrl: string;
  url: string;
}
