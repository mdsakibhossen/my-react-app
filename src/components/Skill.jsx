
const skill = (props) => {
  return (
    <div className="skill">
      <ol>
        {props.skills.map((e) => (<li>{e}</li>))}
      </ol>
    </div>
  )
}

export default skill