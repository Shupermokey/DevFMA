import { Card } from "./Card";
import { TopCharCardsProps } from "../types";

export const CharCards = ({data} : TopCharCardsProps) => {
  return (
    <section id="character-cards">
      {
      data.map((element, id) =>
         (<Card
         key={id}
          name={element.name}
          img={element.imageUrl}
          nickname={element.nickName}
          text={element.background}
        />)
      
      )}
    </section>
  );
};
