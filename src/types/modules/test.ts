export default class test {
  public id?: string;
  public title?: string;
  public cover?: string;
  public summary?: any;
  public content?: string;
  public html?: string;
  public toc?: string;
  public status?: string;
  public views?: number;
  public likes?: number;
  public isRecommended?: boolean;
  public needPassword?: boolean;
  public totalAmount?: any;
  public isPay?: boolean;
  public isCommentable?: boolean;
  public publishAt?: string;
  public createAt?: string;
  public updateAt?: string;
  public tags?: Tags[];
  public category?: Category;
}

export class Category {
  public id?: string;
  public label?: string;
  public value?: string;
  public createAt?: string;
  public updateAt?: string;
}

export class Tags {
  public id?: string;
  public label?: string;
  public value?: string;
  public createAt?: string;
  public updateAt?: string;
}
