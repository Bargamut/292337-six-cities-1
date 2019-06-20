type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

type City = {
  name: string,
  location: Location
};

type Offer = {
  id: number,
  title: string,
  price: number,
  type: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  previewImage: string,
  location: Location,
  city: City
}

type User = {
  id?: number,
  email?: string,
  name?: string,
  avatarUrl?: string,
  isPro?: boolean
};

export {
  Location,
  City,
  Offer,
  User
};
