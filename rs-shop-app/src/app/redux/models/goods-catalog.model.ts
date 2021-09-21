export interface IAllCategories {
  allCategories: ICategory[];
}

export interface ICategory {
  id: string;
  name: string;
  subCategories: ISubCategory[];
}

interface ISubCategory {
  id: string;
  name: string;
}
