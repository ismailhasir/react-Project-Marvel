import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ heroes }) {
  return (
    <div className="hero-list">
      {!heroes && <div> WAIT A SECOND</div>}
      {heroes &&
        heroes.map((hero) => {
          return (
            <div key={hero.id}>
              <Link exact to="/detail">
                <img
                  src={hero.thumbnail.path + "/standard_fantastic.jpg"}
                  alt=""
                  className="hero-card"
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
}
