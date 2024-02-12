"use client";

import React, { useEffect,useState } from 'react';
import { 
  useSessionContext, 
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

import useClickMeModal from '@/hooks/useClickMeModal';

import Modal from './Modal';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Human strength lies in the ability to change yourself. –Saitama, One Punch Man",
  "You can die anytime, but living takes true courage. –Kenshin Himura, Rurouni Kenshin",
  "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder. –Gildarts Clive, Fairy Tail",
  "A person can change, at the moment when the person wishes to change.  –Haruhi Fujioka, Ouran Highschool Host Club",
  "You will never be able to love anybody else until you love yourself. –Lelouch Lamperouge, Code Geass",
  "All we can do is live until the day we die. Control what we can…and fly free. –Deneil Young, Space Brothers",
  "If you don't take risks, you can't create a future. –Monkey D. Luffy, One Piece",
  "If you don’t share someone’s pain, you can never understand them. – Nagato, Naruto",
  "There’s no shame in falling down! True shame is to not stand up again! – Shintaro Midorima, Kuroko’s Basketball",
  "When you hit the point of no return, that’s the moment it truly becomes a journey. If you can still turn back, it’s not really a journey. –Hinata   Miyake, A Place Further than the Universe",
  "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful. –Roy Mustang, Full Metal Alchemist",
  "Simplicity is the easiest path to true beauty. –Seishuu Handa, Barakamon ",
  "The past is the past. We cannot indulge ourselves in memories and destroy the present. –Murata Ken, Kyou Kara Maou! ",
  "Knowing what it feels like to be in pain, is exactly why we try to be kind to others. –Jiraiya, Naruto",
  "Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one's heart. –Mavis Vermillon, Fairy Tail",
  "We need to stop living for others. From now on…Let’s live for ourselves! –Historia Reiss, Attack on Titan",
  "Helping other people is the best way to make up for your mistakes. –Kenshin Himura, Rurouni Kenshin"
  // Add more quotes as needed
];


const ClickMeModal = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useClickMeModal();
  const [randomQuote, setRandomQuote] = useState('');

  

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  useEffect(() => {
    if (isOpen) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }
  }, [isOpen]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal 
      title="Glad you clicked that button." 
      description="Now read some quotes form Anime." 
      isOpen={isOpen} 
      onChange={onChange} 
    >
      <p>{randomQuote}</p>
    </Modal>
  );
}

export default ClickMeModal;