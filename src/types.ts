type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

type City = {
  name: string,
  location: Location
};

type Host = {
  id: number,
  avatarUrl: string,
  isPro: boolean,
  name: string
};

type Offer = {
  id: number,
  title: string,
  bedrooms: number,
  goods: string[],
  host: Host,
  maxAdults: number,
  description: string,
  price: number,
  type: string,
  images: string[],
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

type ReviewItem = {
  id: number,
  user: User,
  rating: number,
  comment: string,
  date: string
}

export {
  Location,
  City,
  Offer,
  User,
  ReviewItem
};
