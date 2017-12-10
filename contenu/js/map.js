var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
    // set up the map
    map = new L.Map(document.getElementById('map'));

    // create the tile layer with correct attribution
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});

    // start the map in South-East England
    map.setView(new L.LatLng(46.822109, 2.653995000000009), 6);
    map.addLayer(osm);
    
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
    
    var marker = L.marker([46.822109, 2.653995000000009]).addTo(map);
}

initmap();
/*
// carte avec marqueurs
//Initialisation de la carte
function initMap() {
    
    var map = new google.maps.Map(document.getElementById('mapid'), {
        center: {lat: 46.822109, lng: 2.653995000000009},
        zoom: 13,          
        styles : [
        {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#c9c9c9'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          }
        ]
        });


    var lmap = L.map('mapid').setView([2.653995000000009, 46.822109], 13);
   
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
    
    var marker = L.marker([2.653995000000009, 46.822109]).addTo(map);
}
*/