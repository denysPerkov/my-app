import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Input } from "./Input";

type CardType = {
  id: string;
  colour: string;
};

export const CardContainer: React.FC<{}> = () => {
  const [intervalValue, setIntervalValue] = useState(5);
  const [pause, setPause] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);

  const cardsHolder = [
    { id: crypto.randomUUID(), colour: "green" },
    { id: crypto.randomUUID(), colour: "red" },
    { id: crypto.randomUUID(), colour: "yellow" },
    { id: crypto.randomUUID(), colour: "black" },
    { id: crypto.randomUUID(), colour: "blue" },
  ];

  console.log(intervalValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pause) {
        return;
      }

      const randomCard = cardsHolder[Math.floor(Math.random() * 4) + 1];

      setCards((prev) => [...prev, randomCard]);
    }, intervalValue * 100  );

    return () => clearTimeout(timer);
  }, [pause, cards.length]);

  const handleSort = () => {
    const newCards = [...cards].sort(() => Math.random() - 1);
    setCards(newCards);
  };

  //   const handleSort = () => {

  //     setCards((prevCards) => {
  //       return [...prevCards].sort(() => Math.random() - 1);
  //     });
  //   };

  const cardList = cards.map((item) => {
    return <Card key={item.id} id={item.id} colour={item.colour} />;
  });

  const handlePause = () => {
    setPause((prevValue) => !prevValue);
  };

  return (
    <div>
      <div className="mb-3">
        <Button label="Start" onButtonClick={handlePause} />
        <Button label="Stop" onButtonClick={handlePause} buttonType="danger" />
        <Button label="Sort" onButtonClick={handleSort} buttonType="primary" />
      </div>
      <div className="mb-3">
        <Input value={intervalValue} onChange={setIntervalValue} />
      </div>
      <div style={{display: "flex", flexWrap: "wrap"}}>{cardList}</div>
    </div>
  );
};
