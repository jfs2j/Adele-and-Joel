
import React from 'react';
import { Leaf, Heart, MapPin, Calendar, Clock, Music, Utensils, Star, Flower2, Users } from 'lucide-react';
import { ScheduleItem, FAQItem, Language } from './types';

export const COLORS = {
  sage: '#73866C',
  gold: '#B68D40',
  cream: '#FDFBF7',
  white: '#FFFFFF',
};

export interface GalleryImage {
  url: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?q=80&w=800&auto=format&fit=crop', alt: 'Wedding Couple' },
  { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop', alt: 'Wedding Details' },
  { url: 'https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=800&auto=format&fit=crop', alt: 'Celebration' },
  { url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop', alt: 'The Kiss' },
  { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop', alt: 'Dance Floor' },
  { url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop', alt: 'The Couple' },
];

export const TRANSLATIONS = {
  en: {
    nav: {
      story: 'Our Story',
      moments: 'Moments',
      witnesses: 'Witnesses',
      bigDay: 'The Big Day',
      schedule: 'Schedule',
      rsvp: 'RSVP',
      stay: 'Stay',
      registry: 'Registry',
      music: 'Soundtrack',
      faq: 'FAQ',
    },
    hero: {
      subheading: 'Invite You to Celebrate Their Union',
      location: 'Alfortville, France',
      rsvpBtn: 'Join Us',
      dateMain: '18',
      month: 'April',
      year: '2026',
      day: 'Saturday',
      time: '14:30',
    },
    announcement: {
      text: "“We joyfully invite you to celebrate our love as we unite in marriage. Join us for a moment of conviviality and joy.”",
      subtext: "Please join us for our civil ceremony and reception. Our religious and traditional celebrations will follow at a later date.",
    },
    story: {
      title: 'Our Journey',
      subtitle: 'A Love Story That Spans Continents and Cultures.',
      text1: 'From different corners of the world, our paths crossed and our hearts intertwined. What began as a chance encounter blossomed into a love that spans continents.',
      text2: 'From McLean to Alfortville, our story is one of patience, devotion, and the beautiful certainty that we were meant to find each other.',
    },
    witnesses: {
      title: 'Our Witnesses',
      subtitle: 'The Cherished Souls Standing By Our Side.',
      brideTitle: 'Bride’s Witnesses',
      groomTitle: 'Groom’s Witnesses',
      names: {
        witness1: 'Witness Name',
        witness2: 'Witness Name',
        witness3: 'Witness Name',
        witness4: 'Witness Name',
      }
    },
    gallery: {
      title: 'Captured Moments',
      subtitle: 'The Beauty of Our Journey Together.',
    },
    bigDay: {
      title: 'The Celebration',
      when: 'When',
      where: 'Where',
      attire: 'Theme & Dress Code',
      date: 'Saturday, April 18, 2026',
      timeLabel: 'Commencing at 14:30',
      venue: 'Place François-Mitterrand',
      venueNote: '94140 Alfortville (Salle MCF2)',
      themeLabel: 'Theme: Natural Sophistication',
      dressCodeLabel: 'Dress Code: Formal & Festive',
      colorsLabel: 'Suggested Colors: Sage Green, White, Gold, Earth Tones',
    },
    schedule: {
      title: 'The Day’s Flow',
      items: [
        { time: '14:30', title: 'Civil Ceremony', description: 'Join us as we exchange vows at Place François-Mitterrand.', icon: 'ceremony' },
        { time: '16:30', title: 'Garden Reception', description: 'A chic cocktail hour and celebration in Alfortville.', icon: 'celebration' },
        { time: '19:30', title: 'Gala Dinner', description: 'An elegant multi-course dinner followed by music and dance.', icon: 'dinner' },
      ] as ScheduleItem[],
    },
    music: {
      title: 'Our Soundtrack',
      subtitle: 'The Songs That Define Our Story.',
      text: 'Music has always been the heartbeat of our relationship.',
    },
    rsvp: {
      title: 'Kindly Respond',
      subtitle: 'Your Presence Would Make Our Day Complete.',
    },
    stay: {
      title: 'Accommodations',
      subtitle: "Curated Stays for Our Cherished Guests.",
      note: "Every room booked through our portal helps us start our married life with joy.",
    },
    registry: {
      title: 'Our Registry',
      text: "“Your love and well-wishes are the greatest gifts we could ask for.”",
      howTo: 'How to Contribute',
      cash: 'Honeyfund',
      cashNote: 'A Contribution to Our Future Home and Travels',
      stayOption: 'Guest Experience',
      stayNote: 'Every Booking Supports Our New Beginning',
    },
    faq: {
      title: 'Common Questions',
      items: [
        { question: 'What should I wear?', answer: 'We request formal attire in Sage Green, White, Gold, or Earth Tones.' },
        { question: 'Will there be parking?', answer: 'Parking details will be included in the formal digital invite.' },
      ] as FAQItem[],
    },
    contact: {
      title: 'Get In Touch',
      text: "Questions about travel or the venue?",
    }
  },
  fr: {
    nav: {
      story: 'Notre Histoire',
      moments: 'Moments',
      witnesses: 'Témoins',
      bigDay: 'Célébration',
      schedule: 'Programme',
      rsvp: 'RSVP',
      stay: 'Séjour',
      registry: 'Liste',
      music: 'Musique',
      faq: 'FAQ',
    },
    hero: {
      subheading: 'Vous Invitent à Célébrer Leur Union',
      location: 'Alfortville, France',
      rsvpBtn: 'Rejoignez-Nous',
      dateMain: '18',
      month: 'Avril',
      year: '2026',
      day: 'Samedi',
      time: '14h30',
    },
    announcement: {
      text: "“Nous sommes ravis de vous inviter à célébrer notre union et de vous joindre à nous pour un moment de convivialité.”",
      subtext: "Rejoignez-nous pour notre cérémonie civile et notre réception. Nos célébrations religieuses suivront ultérieurement.",
    },
    story: {
      title: 'Notre Histoire',
      subtitle: 'Un Récit d’Amour par-delà les Frontières.',
      text1: "De différents horizons, nos chemins se sont croisés pour ne plus jamais se quitter.",
      text2: "De McLean à Alfortville, notre récit est empreint de patience et de dévouement.",
    },
    witnesses: {
      title: 'Nos Témoins',
      subtitle: 'Les Âmes Précieuses à Nos Côtés.',
      brideTitle: 'Témoins de la Mariée',
      groomTitle: 'Témoins du Marié',
      names: {
        witness1: 'Nom du Témoin',
        witness2: 'Nom du Témoin',
        witness3: 'Nom du Témoin',
        witness4: 'Nom du Témoin',
      }
    },
    gallery: {
      title: 'Souvenirs Partagés',
      subtitle: 'La Beauté de Notre Parcours à Deux.',
    },
    bigDay: {
      title: 'Le Grand Jour',
      when: 'Quand',
      where: 'Où',
      attire: 'Thème et Tenue',
      date: 'Samedi 18 Avril 2026',
      timeLabel: 'Début à 14h30 précises',
      venue: 'Place François-Mitterrand',
      venueNote: '94140 Alfortville (Salle MCF2)',
      themeLabel: 'Thème : Nature Chic',
      dressCodeLabel: 'Tenue : Élégante et Festive',
      colorsLabel: 'Couleurs suggérées : Vert sauge, Blanc, Or, Tons naturels',
    },
    schedule: {
      title: 'Le Déroulement',
      items: [
        { time: '14h30', title: 'Cérémonie Civile', description: 'Rejoignez-nous à la Place François-Mitterrand.', icon: 'ceremony' },
        { time: '16h30', title: 'Cocktail de Réception', description: 'Une célébration chic et conviviale.', icon: 'celebration' },
        { time: '19h30', title: 'Dîner de Gala', description: 'Un dîner gastronomique suivi d’une soirée dansante.', icon: 'dinner' },
      ] as ScheduleItem[],
    },
    music: {
      title: 'Notre Playlist',
      subtitle: 'Les Chansons qui Racontent Notre Histoire.',
      text: 'La musique a toujours été au cœur de notre relation.',
    },
    rsvp: {
      title: 'Votre Réponse',
      subtitle: 'Votre Présence est le Plus Beau des Cadeaux.',
    },
    stay: {
      title: 'Hébergement',
      subtitle: "Une Sélection Raffinée pour Votre Confort.",
      note: "Chaque réservation via notre site nous aide à bâtir notre futur.",
    },
    registry: {
      title: 'Liste de Mariage',
      text: "“Votre affection est notre plus grand présent.”",
      howTo: 'Comment Participer',
      cash: 'Cagnotte de Mariage',
      cashNote: 'Pour nos futurs voyages et notre installation',
      stayOption: 'Expérience Invité',
      stayNote: 'Votre Séjour Contribue à Notre Nouveau Départ',
    },
    faq: {
      title: 'Informations Utiles',
      items: [
        { question: 'Quel est le code vestimentaire ?', answer: 'Vert sauge, Blanc, Or ou Tons naturels.' },
      ] as FAQItem[],
    },
    contact: {
      title: 'Nous Contacter',
      text: "Une question sur votre séjour ?",
    }
  }
};

export const BotanicalDivider = () => (
  <div className="flex justify-center items-center py-24 opacity-40">
    <div className="h-[1px] w-32 md:w-64 bg-sage/30"></div>
    <div className="mx-8 text-sage">
      <Flower2 size={32} />
    </div>
    <div className="h-[1px] w-32 md:w-64 bg-sage/30"></div>
  </div>
);

export const Monogram = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 400 400" className="w-56 h-56 md:w-72 md:h-72 overflow-visible">
      {/* Wreath - Meeting at the bottom, sweeping upwards (pointing up) */}
      <path d="M200 340C140 340 80 280 80 180" fill="none" stroke="#73866C" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
      <path d="M200 340C260 340 320 280 320 180" fill="none" stroke="#73866C" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
      
      {/* Leaves Cluster Left - oriented upwards */}
      <g fill="#73866C" fillOpacity="0.9">
        <ellipse cx="200" cy="340" rx="9" ry="4" transform="rotate(-15 200 340)" />
        <ellipse cx="150" cy="320" rx="11" ry="5" transform="rotate(-30 150 320)" />
        <ellipse cx="105" cy="275" rx="13" ry="6" transform="rotate(-45 105 275)" />
        <ellipse cx="85" cy="215" rx="11" ry="5.5" transform="rotate(-65 85 215)" />
        <ellipse cx="80" cy="180" rx="10" ry="5" transform="rotate(-85 80 180)" />
      </g>
      
      {/* Leaves Cluster Right - oriented upwards */}
      <g fill="#73866C" fillOpacity="0.9">
        <ellipse cx="250" cy="320" rx="11" ry="5" transform="rotate(30 250 320)" />
        <ellipse cx="295" cy="275" rx="13" ry="6" transform="rotate(45 295 275)" />
        <ellipse cx="315" cy="215" rx="11" ry="5.5" transform="rotate(65 315 215)" />
        <ellipse cx="320" cy="180" rx="10" ry="5" transform="rotate(85 320 180)" />
      </g>

      {/* Golden botanical buds */}
      <g fill="#B68D40" fillOpacity="0.7">
        <circle cx="130" cy="330" r="3.5" />
        <circle cx="270" cy="330" r="3.5" />
        <circle cx="95" cy="290" r="4.5" />
        <circle cx="305" cy="290" r="4.5" />
        <circle cx="75" cy="235" r="3.5" />
        <circle cx="325" cy="235" r="3.5" />
      </g>

      {/* "A & J" Monogram Letters */}
      <text x="135" y="240" fontFamily="'Cormorant Garamond', serif" fontSize="125" fill="#73866C" fontWeight="300" textAnchor="middle">A</text>
      <text x="200" y="225" fontFamily="'Alex Brush', cursive" fontSize="65" fill="#B68D40" fontStyle="italic" textAnchor="middle">&</text>
      <text x="265" y="240" fontFamily="'Cormorant Garamond', serif" fontSize="125" fill="#73866C" fontWeight="300" textAnchor="middle">J</text>
      
      {/* Elegant Golden Swash Flourish crossing the base */}
      <path d="M100 245C150 270 250 270 300 245" stroke="#B68D40" strokeWidth="1.8" fill="none" strokeOpacity="0.4" strokeLinecap="round" />
      <circle cx="100" cy="245" r="2.5" fill="#B68D40" fillOpacity="0.5" />
      <circle cx="300" cy="245" r="2.5" fill="#B68D40" fillOpacity="0.5" />
    </svg>
  </div>
);
