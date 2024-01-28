import { useState } from 'react';

const CardComponent = () => (
  <div className="card">
    <h3>{}</h3>
    <p>{}</p>
  </div>
);

const App = () => {
  const [showAll, setShowAll] = useState(false);
  const defaultCardCount = 3;

  const cardData = [
    { name: 'Card 1', details: 'Details for Card 1' },
    { name: 'Card 2', details: 'Details for Card 2' },
    { name: 'Card 3', details: 'Details for Card 3' },
    { name: 'Card 4', details: 'Details for Card 4' },
    { name: 'Card 5', details: 'Details for Card 5' },
    // Add more card objects as needed
  ];

  const displayedCards = showAll ? cardData : cardData.slice(0, defaultCardCount);

  return (
    <div>
      <div className="card-container">
        {displayedCards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
      {!showAll && (
        <button onClick={() => setShowAll(true)}>See All Cards</button>
      )}
    </div>
  );
};

export default App;
