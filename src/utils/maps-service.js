const URL_BASE = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const KEY_API = "&key=AIzaSyCwUZdS5HbYDe-Ycb7_vPS10nP4sGs5NPg";

export const getLocation = async (addr) => {
  if (addr) {
    var url = URL_BASE + addr.split(" ").join("+") + KEY_API;
    let response = await fetch(url);
    let data = await response.json();
    return JSON.stringify(data.results[0].geometry.location);
  }
  return {};
};
