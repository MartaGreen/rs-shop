export interface ISearchedCategories {
  categories: ISearchedCategory[];
}

export interface ISearchedCategory {
  id: string;
  name: string;
  subCategories: ISearchedSubCategory[];
}

interface ISearchedSubCategory {
  id: string;
  name: string;
}
