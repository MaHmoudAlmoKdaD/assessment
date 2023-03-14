import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Welcome from "./welcome/Welcome";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <Welcome />
    </div>
  );
};

export default Home;
