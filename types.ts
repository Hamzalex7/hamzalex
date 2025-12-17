export interface GiftCard {
  id: number;
  name: string;
  value: string;
  image: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}