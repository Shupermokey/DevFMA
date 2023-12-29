export const Card = ({name, img, text, nickname}) => {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickname}</h4>
      </div>
      <img src={img} alt="FMA character" />
      <p>{text}</p>
    </div> 
    
  )
}