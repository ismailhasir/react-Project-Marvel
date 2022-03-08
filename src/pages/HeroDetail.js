import "./HeroDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ComicList from "../components/ComicList";

export default function HeroDetail({ hash }) {
  const { id } = useParams();
  const [singleHero, setSingleHero] = useState({ thumbnail: { path: "" } });
  const mainUrl = `http://gateway.marvel.com/v1/public/characters/${id}`;
  const newUrl = `${mainUrl}?ts=1&apikey=36228b591971779d1294703f2c538f19&hash=${hash}`;
  const comicUrl = `${mainUrl}/comics?ts=1&apikey=36228b591971779d1294703f2c538f19&hash=${hash}`;

  const [comics, SetComics] = useState();
  const [collection, SetCollection] = useState("");

  const getComics = async () => {
    const res = await fetch(comicUrl);
    const json = await res.json();
    const data = json.data.results;
    SetComics(data);
  };

  const fetchData = async () => {
    const res = await fetch(newUrl);
    const json = await res.json();
    const fetchedHero = json.data.results;
    setSingleHero(fetchedHero[0]);
  };

  useEffect(() => {
    fetchData();
    getComics();
  }, [id]);

  console.log(singleHero);

  return (
    <div className="detail-page">
      <div className="header">
        <div className="hero-header">
          <img
            src={singleHero.thumbnail.path + "/standard_fantastic.jpg"}
            alt=""
          />
          <h1>{singleHero.name}</h1>
        </div>
        <div className="hero-desc">
          <p>
            <strong>DESCRIPTION:</strong>
          </p>
          {singleHero.description && <p> {singleHero.description}</p>}
          {!singleHero.description && <p>There is no description avaliable.</p>}
        </div>
      </div>
      <ComicList comics={comics} />
    </div>
  );
}
