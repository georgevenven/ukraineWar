var map = L.map('map').setView([49, 31], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ2lib25mcm9nIiwiYSI6ImNsMDFqc2syczB1bGgza2xzcDIyMDh1cmcifQ.k8aEPsqM-ip0458DEvwIig'
}).addTo(map);