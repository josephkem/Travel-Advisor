import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const res = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: "11.847676",
          tr_latitude: "12.838442",
          bl_longitude: "109.095887",
          tr_longitude: "109.149359",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_TRAVEL_API,
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};