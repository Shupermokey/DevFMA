import "../TopChar.css"
import { TopCharCardsProps } from  "../types"


export const TopChar = ({data} : TopCharCardsProps) => {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {
          data
          .sort((a,b) => b.votes - a.votes)
          .slice(0,5)
          .map((element, index) => (
            <tr className={index % 2 === 0 ? "dark" : "light"}>
                <td>{element.name}</td>
                <td>{element.skillset.join(", ")}</td>
                <td>{element.votes}</td>
            </tr>
          ))
        }
      </table>
    </section>
  );
}