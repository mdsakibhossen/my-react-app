// import './App.css';
import Biodata from './components/Biodata';

function App() {
  return (
    <div className="App">
      <Biodata 
        fName = "Shakib"
        lName = "Sardar"
        age = {23}
        email = "shakib6443@gmail.com"
        phoneNumber = "017837383738"
        marriedStatus = "Unmarried"
        address = "Ashulia, Savar, Dhaka"
        country = "Bangladesh"
        interests = {["sports","web development"]}
        skills = {["HTML","CSS","JS"]}
      />
      <hr />
      <Biodata
        fName="Anik"
        lName="Mia"
        age={26}
        email="anik@gmail.com"
        phoneNumber=""
        marriedStatus="Unmarried"
        address="Ashulia, Savar, Dhaka"
        country="Bangladesh"
        interests={["Coding","Traveling","watching TV","Listening song"]}
        skills={["HTML", "CSS"]}
      />
    </div>
  );
}

export default App;
