export interface IPicture {
  id: string;
  author: string;
  description: string;
  filename: string;
  file: string;
  createdAt: Date;
  updatedAt: Date;

  getFile: () => string;
  lastModified: () => string;
}
