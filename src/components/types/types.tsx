export interface User {
  name: string;
  email: string;
  password: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  tariff: string;
}

export interface Message {
  content: string;
  time: string; // Format: "HH:mm"
}

export interface Car {
  id: number;
  model: string;
  year: number;
  price: number;
  views: number;
  message: Message;
  likes: number;
  company: string;
  country: string;
  mileage: number;
  color: string;
  user: User;
}
export interface AccauntSettingsState {
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export default interface CarData {
  cars: Car[];
}
