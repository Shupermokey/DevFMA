import { Card } from "./Card";
import { Character } from "../types";



type TopCharCardsProps = {
  data: Character[];
}

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
