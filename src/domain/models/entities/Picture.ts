export interface IPicture {
  id: string;
  author: string;
  description: string;
  filename: string;
  file: string;
  createdAt: Date;
  updatedAt: Date;

  getName: () => string;
  getFile: () => string;
  lastModified: () => string;
}
