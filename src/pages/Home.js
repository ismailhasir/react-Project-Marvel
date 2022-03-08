import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ heroes }) {
  console.log(heroes);

  //MAP methodu ile her bir karakterlerin resmini gosteriyorum
  return (
    <div className="hero-list">
      {!heroes && <div> Loading..</div>}

      {heroes &&
        heroes.map((hero) => {
          return (
            <div key={hero.id}>
              <Link exact="true" to={`/details/${hero.id}`}>
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
