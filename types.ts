
export type Language = 'en' | 'fr';

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: 'ceremony' | 'celebration' | 'dinner';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RSVPFormData {
  fullName: string;
  email: string;
  phone?: string;
  attending: 'yes' | 'no';
  guests: string;
  dietary?: string;
  message?: string;
}

export interface AccommodationFormData {
  guestName: string;
  email: string;
  checkIn: string;
  checkOut: string;
  numRooms: string;
  roomType: string;
  requests?: string;
}
