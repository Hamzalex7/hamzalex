import { Gift, DollarSign, ShieldCheck, Users, Globe, Smartphone } from 'lucide-react';

export const SMART_LINK = "https://adbleumedia.com/smartlink/XXXXX";

export const GIFT_CARDS = [
  { id: 1, name: "Amazon", value: "$25", image: "https://picsum.photos/300/180?random=1", color: "from-yellow-500 to-orange-600" },
  { id: 2, name: "PayPal", value: "$50", image: "https://picsum.photos/300/180?random=2", color: "from-blue-600 to-blue-800" },
  { id: 3, name: "Uber", value: "$15", image: "https://picsum.photos/300/180?random=3", color: "from-gray-800 to-black" },
  { id: 4, name: "Google Play", value: "$10", image: "https://picsum.photos/300/180?random=4", color: "from-green-500 to-teal-600" },
  { id: 5, name: "Visa", value: "$100", image: "https://picsum.photos/300/180?random=5", color: "from-blue-700 to-indigo-900" },
];

export const TESTIMONIALS = [
  { id: 1, name: "Mike T.", country: "USA", text: "Cashed out $50 Amazon in just 1 week! Actually legit.", rating: 5, avatar: "https://picsum.photos/50/50?random=10" },
  { id: 2, name: "Sarah J.", country: "AU", text: "Best way to kill time on the train. Got my coffee money sorted.", rating: 5, avatar: "https://picsum.photos/50/50?random=11" },
  { id: 3, name: "Kim S.", country: "KR", text: "Lots of fun games I would play anyway. The rewards are a bonus!", rating: 5, avatar: "https://picsum.photos/50/50?random=12" },
];

export const STATS = [
  { label: "Downloads", value: "10M+", icon: Smartphone },
  { label: "Paid Out", value: "$150M+", icon: DollarSign },
  { label: "Trust Score", value: "4.8/5", icon: ShieldCheck },
];
