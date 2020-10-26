//function that displays start message
function initGettingStarted() {
    alert("Find my favorite places to win! Zoom in close enough and a marker will appear and the next round will begin. Find all 10 to win! Press the cheat button to see all locations instantly!")
}
//array of locations
var locations= [
    {content:'Orland Park, IL', coords:{lat:41.6116,lng:-87.8543}},
    {content:'Fairplay, CO', coords:{lat:39.2213,lng:-105.9922}},
    {content:'Zakopane, Poland', coords:{lat:49.2992,lng:19.9496}},
    {content:'Sheboygan, WI', coords:{lat:43.7508,lng:-87.7145}},
    {content:'Myrtle Beach, SC', coords:{lat:33.6891,lng:-78.8867}},
    {content:'Krakow, Poland', coords:{lat:50.0647,lng:19.9450}},
    {content:'Gatlinburg, TN', coords:{lat:35.7143,lng:-83.5102}},
    {content:'Chicago, IL', coords:{lat:41.8781,lng:-87.6298}},
    {content:'Sarasota, FL', coords:{lat:27.3364,lng:-82.5307}},
    {content:'Grand Junction, CO', coords:{lat:39.0639,lng:-108.5506}}
];
//sets variables
var score = 0;
var round = 0;
var place = locations[round];

// Initialize and add the map
function initMap() {
    //array of locations just inside the map function
    var locations= [
        {content:'Orland Park, IL', coords:{lat:41.6116,lng:-87.8543}},
        {content:'Fairplay, CO', coords:{lat:39.2213,lng:-105.9922}},
        {content:'Zakopane, Poland', coords:{lat:49.2992,lng:19.9496}},
        {content:'Sheboygan, WI', coords:{lat:43.7508,lng:-87.7145}},
        {content:'Myrtle Beach, SC', coords:{lat:33.6891,lng:-78.8867}},
        {content:'Krakow, Poland', coords:{lat:50.0647,lng:19.9450}},
        {content:'Gatlinburg, TN', coords:{lat:35.7143,lng:-83.5102}},
        {content:'Chicago, IL', coords:{lat:41.8781,lng:-87.6298}},
        {content:'Sarasota, FL', coords:{lat:27.3364,lng:-82.5307}},
        {content:'Grand Junction, CO', coords:{lat:39.0639,lng:-108.5506}}
    ];
    // The map, centered at the middle
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 3, center: {lat:51.4684, lng:-9.7260}});
    //some variables needed to play game
    var round = 0;
    var place = locations[round];

    //plays game
    //playGame();
    
    //function to play the game
    function playGame() {
        if (map.getBounds().contains(locations[round].coords)) {
            addMarker(locations[round]);
            round = round + 1;
            place = locations[round];
            score = score + 10;
        }
    }

    
    //function that adds a marker at the location with an infowindow as well
    function addMarker(props){
      var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

          })
        var infoWindow = new google.maps.InfoWindow({
            content:props.content
        });
      marker.addListener('click', function(){
          infoWindow.open(map, marker);
      });
    }
    //logs inBounds result to console
    google.maps.event.addListener(map, 'idle', function() {
      checkBounds()
    });
    //checks bounds
    function checkBounds() {
        console.log('function checkBounds()');
        var zoomLevel = map.getZoom()
        var inBounds = false;

        if (map.getBounds().contains(locations[round].coords)) {
            inBounds = true;
        }

        console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
    }
    SetHint("Hint");
    SetScore(score);
}
//set hints
function SetHint(hint) {
    document.getElementById("hint-id").value = hint;  
}
//sets score
function SetScore() {
    document.getElementById("score-id").value = score;
}

