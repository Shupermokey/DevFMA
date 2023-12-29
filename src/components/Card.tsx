import "../Cards.css"

type Card = {
  name: string;
  img: string;
  text: string;
  nickname: string | null;
}

export const Card = ({name, img, text, nickname}: Card) => {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        {nickname && <h4>{nickname}</h4>}
      </div>
      <img src={img} alt="FMA character" />
      <p>{text}</p>
    </div> 
    
  )
}