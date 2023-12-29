export const TopChar = ({data}) => {
  return (
    <div className="topChar-container">
      <div className="topChar-title">Top Characters</div>
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {
          data.map((element, index) => (
            <tr className={index % 2 === 0 ? "dark" : "light"}>
                <td>{element.name}</td>
                <td>{element.skillset.map((skill, index) => (
                  <span>
                     {index !== element.skillset.length -1 ? skill + ", ": skill}
                  </span>
                ))}</td>
                <td>{element.votes}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}