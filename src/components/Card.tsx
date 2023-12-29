import "../Cards.css"

export const Card = ({name, img, text, nickname}: {name:string, img:string, text:string, nickname:string}) => {
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