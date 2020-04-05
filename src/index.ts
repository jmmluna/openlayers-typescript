import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const TARGET_ELEMENT:string = 'map';
const map: Map = new Map({});
const osm:TileLayer = new TileLayer({
  source: new XYZ({
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  })
});
const view:View = new View({
      center: [0, 0],
      zoom: 2
});

map.setTarget(TARGET_ELEMENT);
map.setView(view);
map.addLayer(osm);