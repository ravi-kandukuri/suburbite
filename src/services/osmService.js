const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

export async function fetchRestaurants(lat, lon, radius = 2000) {
  const query = `
    [out:json];
    (
      node["amenity"="restaurant"](around:${radius},${lat},${lon});
      node["amenity"="fast_food"](around:${radius},${lat},${lon});
    );
    out center;
  `;

  const res = await fetch(OVERPASS_URL + "?data=" + encodeURIComponent(query));
  const json = await res.json();

  return json.elements.map(r => ({
    id: r.id,
    name: r.tags.name || "Unnamed",
    cuisine: r.tags.cuisine || "unknown",
    lat: r.lat,
    lon: r.lon
  }));
}
