import "./HeroDetail.css";

export default function HeroDetail({ heroes }) {
  return (
    <div>
      <img src={heroes[1].thumbnail.path + "/standard_fantastic.jpg"} alt="" />
    </div>
  );
}
