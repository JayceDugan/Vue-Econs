interface ListObject {
  [key: string]: string;
}

export interface MapObjectInterface {
  list: ListObject;
  keys: Array<string>;
}
