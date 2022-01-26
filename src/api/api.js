import axios from "axios";

const hash = "742d1eb28d5ad65eca97fd40feaae46a";

const fetchData = async () => {
  try {
    const result = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=36228b591971779d1294703f2c538f19&hash=${hash}`
    );
    console.log(result.data.data.results);
  } catch (error) {
    return "Please wait..";
  }
};

export default fetchData;
