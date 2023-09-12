import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h2>About US</h2>
      <p>This is Namaste React About Us Page!!!</p>
      <User />

      <UserClass name={"Asen De Silva class"}/>
    </div>
  );
};

export default About;
