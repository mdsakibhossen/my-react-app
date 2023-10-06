import PersonalInfo from "./PersonalInfo";
import Interest from "./Interest";
import Skill from "./Skill";

const Biodata = (props) => {
  return (
    <div className="bioData">
      <h1>
        Biodata of {props.fName} {props.lName}
      </h1>
      <h2>Personal Info</h2>
      <PersonalInfo
        fName={props.fName}
        lName={props.lName}
        age={props.age}
        email={props.email}
        phoneNumber={props.phoneNumber}
        marriedStatus={props.marriedStatus}
        address={props.address}
        country={props.country}
      />
      <h2>Interests</h2>
      <Interest interests={props.interests} />
      <h2>Skills</h2>
      <Skill skills={props.skills} />
    </div>
  );
};

export default Biodata;
