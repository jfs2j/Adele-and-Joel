
import React, { useState } from 'react';
import { RSVPFormData, AccommodationFormData, Language } from '../types';

interface FormProps {
  type: 'rsvp' | 'accommodation';
  lang: Language;
}

const FormField = ({ label, required, children }: { label: string, required?: boolean, children?: React.ReactNode }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-medium text-[#555]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

export const CustomForm: React.FC<FormProps> = ({ type, lang }) => {
  const [submitted, setSubmitted] = useState(false);

  const strings = {
    en: {
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      attending: 'Will you be attending?',
      yes: "Yes, I'll be there!",
      no: 'Regretfully, no',
      guests: 'Number of Guests',
      dietary: 'Dietary Restrictions',
      dietaryPlaceholder: 'e.g. Vegetarian, Gluten-free...',
      message: 'Message to the Couple',
      submitRsvp: 'Submit RSVP',
      guestName: 'Guest Name',
      checkIn: 'Check-in Date',
      checkOut: 'Check-out Date',
      numRooms: 'Number of Rooms',
      roomType: 'Room Type',
      deposit: 'Deposit Amount',
      depositNote: '€200 per room – refundable',
      depositSub: 'A deposit secures your reservation. We\'ll handle all arrangements directly with the hotel.',
      requests: 'Special Requests',
      reserveBtn: 'Reserve Your Room',
      thanks: 'Thank You!',
      successRsvp: "Your response has been recorded. We can't wait to see you!",
      successAcc: "Your reservation request has been received. We'll confirm via email within 24 hours.",
      anotherResponse: 'Send another response',
    },
    fr: {
      fullName: 'Nom Complet',
      email: 'Adresse E-mail',
      phone: 'Numéro de Téléphone',
      attending: 'Serez-vous présent ?',
      yes: "Oui, je serai là !",
      no: 'Malheureusement non',
      guests: "Nombre d'invités",
      dietary: 'Restrictions Alimentaires',
      dietaryPlaceholder: 'ex : Végétarien, Sans gluten...',
      message: 'Message aux mariés',
      submitRsvp: 'Envoyer ma réponse',
      guestName: 'Nom de l’invité',
      checkIn: 'Date d’arrivée',
      checkOut: 'Date de départ',
      numRooms: 'Nombre de chambres',
      roomType: 'Type de chambre',
      deposit: 'Montant de l’acompte',
      depositNote: '200 € par chambre – remboursable',
      depositSub: 'Un acompte sécurise votre réservation. Nous gérons tous les arrangements directement avec l’hôtel.',
      requests: 'Demandes Spéciales',
      reserveBtn: 'Réserver votre chambre',
      thanks: 'Merci !',
      successRsvp: "Votre réponse a été enregistrée. Nous avons hâte de vous voir !",
      successAcc: "Votre demande de réservation a été reçue. Nous confirmerons par e-mail dans les 24 heures.",
      anotherResponse: 'Envoyer une autre réponse',
    }
  };

  const s = strings[lang];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(`${type.toUpperCase()} Form Submitted:`, data);
    setSubmitted(true);
    setTimeout(() => {
      document.getElementById(`${type}-success`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  if (submitted) {
    return (
      <div id={`${type}-success`} className="text-center p-12 bg-[#fcfcfc] border border-sage rounded-xl shadow-sm">
        <h3 className="text-2xl font-serif text-sage mb-2">{s.thanks}</h3>
        <p className="text-[#666]">
          {type === 'rsvp' ? s.successRsvp : s.successAcc}
        </p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-gold underline underline-offset-4">
          {s.anotherResponse}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-8 bg-white border border-[#f0f0f0] rounded-2xl shadow-sm">
      {type === 'rsvp' ? (
        <>
          <FormField label={s.fullName} required>
            <input name="fullName" type="text" required className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none" />
          </FormField>
          <FormField label={s.email} required>
            <input name="email" type="email" required className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none" />
          </FormField>
          <FormField label={s.phone}>
            <input name="phone" type="tel" className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none" />
          </FormField>
          <FormField label={s.attending} required>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 pt-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="attending" value="yes" required className="w-4 h-4 text-sage accent-[#8B9D83]" />
                <span>{s.yes}</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="attending" value="no" required className="w-4 h-4 text-sage accent-[#8B9D83]" />
                <span>{s.no}</span>
              </label>
            </div>
          </FormField>
          <FormField label={s.guests} required>
            <select name="guests" required className="p-3 border rounded bg-white focus:ring-2 focus:ring-sage focus:outline-none">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </FormField>
          <FormField label={s.dietary}>
            <textarea name="dietary" rows={2} className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none" placeholder={s.dietaryPlaceholder}></textarea>
          </FormField>
          <FormField label={s.message}>
            <textarea name="message" rows={3} className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none"></textarea>
          </FormField>
          <button type="submit" className="w-full py-4 bg-sage text-white font-medium rounded-lg hover:bg-[#5a6a54] transition-colors shadow-md">
            {s.submitRsvp}
          </button>
        </>
      ) : (
        <>
          <FormField label={s.guestName} required>
            <input name="guestName" type="text" required className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none" />
          </FormField>
          <FormField label={s.email} required>
            <input name="email" type="email" required className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none" />
          </FormField>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label={s.checkIn} required>
              <input name="checkIn" type="date" required className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none" />
            </FormField>
            <FormField label={s.checkOut} required>
              <input name="checkOut" type="date" required className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none" />
            </FormField>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label={s.numRooms} required>
              <select name="numRooms" required className="p-3 border rounded bg-white focus:ring-2 focus:ring-sage focus:outline-none">
                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </FormField>
            <FormField label={s.roomType} required>
              <select name="roomType" required className="p-3 border rounded bg-white focus:ring-2 focus:ring-sage focus:outline-none">
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
              </select>
            </FormField>
          </div>
          <div className="p-4 bg-sage/5 border border-sage/20 rounded-lg">
            <p className="text-sm text-[#555]">
              <strong>{s.deposit}:</strong> {s.depositNote}
            </p>
            <p className="text-xs text-[#777] mt-1">{s.depositSub}</p>
          </div>
          <FormField label={s.requests}>
            <textarea name="requests" rows={3} className="p-3 border rounded focus:ring-2 focus:ring-sage focus:outline-none"></textarea>
          </FormField>
          <button type="submit" className="w-full py-4 bg-sage text-white font-medium rounded-lg hover:bg-[#5a6a54] transition-colors shadow-md">
            {s.reserveBtn}
          </button>
        </>
      )}
    </form>
  );
};
