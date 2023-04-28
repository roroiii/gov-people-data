export type Params = {
  [key: string]: string;
};

export interface PeopleAttr {
  year: string;
  params: {
    COUNTY: string;
    TOWN: string;
  };
}
