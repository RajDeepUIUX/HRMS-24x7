import { useState } from 'react';
import InteractiveCard from './InteractiveCard';

interface Card {
  id: number;
  isFlipped: boolean;
  frontContent: {
    title: string;
    description: string;
    accent: string;
  };
  backContent: {
    title: string;
    icon: string;
  };
}

const initialCards: Card[] = [
  {
    id: 1,
    isFlipped: false,
    frontContent: {
      title: "Interactive Card #1",
      description: "Click to flip, hover to animate",
      accent: "from-blue-400/30 to-purple-600/30"
    },
    backContent: {
      title: "Flipped Side",
      icon: "🎨"
    }
  },
  {
    id: 2,
    isFlipped: false,
    frontContent: {
      title: "Creative Design",
      description: "Beautiful animations and transitions",
      accent: "from-green-400/30 to-teal-600/30"
    },
    backContent: {
      title: "Design Mode",
      icon: "✨"
    }
  },
  {
    id: 3,
    isFlipped: false,
    frontContent: {
      title: "Motion Graphics",
      description: "Smooth 3D transformations",
      accent: "from-pink-400/30 to-rose-600/30"
    },
    backContent: {
      title: "Animation Hub",
      icon: "🚀"
    }
  },
  {
    id: 4,
    isFlipped: false,
    frontContent: {
      title: "User Experience",
      description: "Intuitive interactions and feedback",
      accent: "from-orange-400/30 to-yellow-600/30"
    },
    backContent: {
      title: "UX Focus",
      icon: "💫"
    }
  }
];

export default function CardStack() {
  const [cards, setCards] = useState<Card[]>(initialCards);

  const handleFlip = (cardId: number) => {
    setCards(prev => prev.map(card => 
      card.id === cardId 
        ? { ...card, isFlipped: !card.isFlipped }
        : card
    ));
  };

  const handleSendToBack = (cardId: number) => {
    setCards(prev => {
      const cardIndex = prev.findIndex(card => card.id === cardId);
      if (cardIndex === -1) return prev;
      
      const cardToMove = prev[cardIndex];
      const remainingCards = prev.filter((_, index) => index !== cardIndex);
      
      // Add the card to the back (beginning of array since we render in reverse order)
      return [cardToMove, ...remainingCards];
    });
  };

  return (
    <div className="relative w-80 h-48">
      {/* Render cards in reverse order so the first card appears on top */}
      {cards.map((card, index) => {
        const stackIndex = cards.length - 1 - index;
        return (
          <InteractiveCard
            key={card.id}
            id={card.id}
            isFlipped={card.isFlipped}
            onFlip={() => handleFlip(card.id)}
            onSendToBack={() => handleSendToBack(card.id)}
            stackIndex={stackIndex}
            totalCards={cards.length}
            frontContent={card.frontContent}
            backContent={card.backContent}
          />
        );
      })}
      
      {/* Instructions */}
      <div className="absolute -bottom-16 left-0 right-0 text-center">
        <p className="text-white/60 text-sm mb-1">
          Click cards to flip • Click "Send to Back" to reorder
        </p>
        <p className="text-white/40 text-xs">
          Hover for enhanced animations
        </p>
      </div>
    </div>
  );
}