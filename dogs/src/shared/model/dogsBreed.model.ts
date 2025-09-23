export interface DogsBreed {
  id: number;
  name: string;
  origin: string;
  image: Image;
  breed_group: string;
}

export interface DogsBreedDetails {
  id: number;
  name: string;
  origin: string;
  reference_image_id: string;
  breed_group: string;
  bred_for: string;
  temperament: string;
  life_span: string;
}

interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}