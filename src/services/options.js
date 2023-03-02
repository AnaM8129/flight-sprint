import axios from "axios";
const URL_OPTIONS = "http://localhost:4000/flightOptions";

export const getOptions = async () => {
  try {
    const { data } = await axios.get(URL_OPTIONS);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
