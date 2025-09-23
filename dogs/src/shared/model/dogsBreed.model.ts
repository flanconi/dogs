export interface DogsBreed {
  id: number;
  name: string;
  origin: string;
  image: Image;
  breed_group: string;
}

interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}