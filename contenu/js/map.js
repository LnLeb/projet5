var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
    // initialisation de la carte
    map = new L.Map(document.getElementById('map'));

    // options de zoom et affichage des options
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});

    // Carte centrée sur le centre de la France
    map.setView(new L.LatLng(46.822109, 2.653995000000009), 6);
    map.addLayer(osm);
    
    ajaxGet("../contenu/js/ows_service=WFS&version=1.0.0&request=GetFeature&typeName=odt_det_pdipr&outputFormat=json", function(reponse) {
    var infos = JSON.parse(reponse);
        console.log(infos.features);
    var elements = infos.features.forEach(function(element){
        var circuit = [{
            type: element.type,
            id: element.id,
            geometry: {
                type: element.geometry.type,
                coordinates: element.geometry.coordinates[[]],
                lat: element.geometry.coordinates[[1]],
                lng: element.geometry.coordinates[[0]]
            },
            geometry_name: element.geometry_name,
            properties: {
                sous_type: element.properties.sous_type,
                iden: element.properties.iden
            }
        }];
        /*L.geoJSON(circuit).addTo(map);
        var lat = element.geometry.coordinates[[[1]]];
        var lng = element.geometry.coordinates[[[0]]];
        var marker = L.marker(lat, lng).addTo(map); */ 
    
    var marker = L.marker([46.822109, 2.653995000000009]).addTo(map);
});
});
    
    var states = [{
        
        "type":"Feature",
        "id":"odt_det_pdipr.1",
        "geometry": {
            "type":"MultiLineString",
            "coordinates":[[
                [-0.020584879999944405,44.603812875000074],
                [-0.020965750999948796,44.60298593200008],
                [-0.02108376799992584,44.602497534000065],
                [-0.021196493999980248,44.601883282000074],
                [-0.021375528999953985,44.601348588000064]
            ]]
        },
        "geometry_name":"shape",
        "properties": {"sous_type":"Voie de Vezelay","iden":1675}
    }];
 L.geoJSON(states).addTo(map);
}

initmap();
