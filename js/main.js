
$(function(){

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position){

      // Getting Latitude Longitude

        var lat= position.coords.latitude;
        var long=position.coords.longitude;

        $("#lat").html(lat);
        $("#long").html(long);

        var latlng=new google.maps.LatLng(lat,long);

        //Create the map
        var mapOptions={
            zoom:14,//0-18
            center:latlng,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("maps"), mapOptions);

        var marker=new google.maps.Marker({
            position:latlng,
            map:map,
            title:"We are here",
            draggable:true,
            animation:google.maps.Animation.DROP
        });
    }
    function error(){

        $('body').html("Error");
    }

});