import mapboxgl from "mapbox-gl";

function addPoint(map) {
  console.log("zhixing");
  return new mapboxgl.Marker().setLngLat([12.550343, 55.665957]).addTo(map);
}
function test() {}
export { addPoint, test };
