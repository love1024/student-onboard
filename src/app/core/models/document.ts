export interface IDocument {
  name: string;
  key: string;
  required: boolean;
}

export interface IDocumentList {
  domestic: IDocument[];
  international: IDocument[];
}