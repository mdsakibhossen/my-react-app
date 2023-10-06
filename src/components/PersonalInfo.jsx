
const PersonalInfo = (props) => {
  return (
    <div className="personalInfo">
      <ol>
        <li>
          Name: {props.fName} {props.lName}
        </li>
        <li>Age: {props.age}</li>
        <li>Email: {props.email}</li>
        {props.phoneNumber && <li>Phone Number: {props.phoneNumber}</li>}
        <li>Married Status: {props.marriedStatus}</li>
        <li>Address: {props.address}</li>
        <li>Country: {props.country}</li>
      </ol>
    </div>
  );
}

export default PersonalInfo