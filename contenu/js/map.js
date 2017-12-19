var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
    // initialisation de la carte
    map = new L.Map(document.getElementById('map'));

    // options de zoom et affichage des mentions
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 7, maxZoom: 18, attribution: osmAttrib});

    // Carte centrée sur le centre de la région Pays de la Loire
    map.setView(new L.LatLng(47.349998, -0.76667), 8);
    map.addLayer(osm);
}

initmap();
