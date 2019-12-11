({
    onBoatClick : function (component, event, helper) {
        var boatSelect = component.getEvent("boatSelect");
        // var boatId = event.getSource().get("v.name");
        var boatId = component.get("v.boat");
        console.log('boatId to event ' + boatId.Id);
        boatSelect.setParams({
            "boatId" : boatId.Id
        });
        boatSelect.fire();

        //new event BoatSelected
        var appEvent = $A.get("e.c:BoatSelected");
        var boat = component.get("v.boat");
        console.log('boat to event ' + boat);
        appEvent.setParams({
            "boat" : boat
        });
        appEvent.fire();

        //new event show Map
        var plotMapMarker = $A.get("e.c:plotMapMarker");

        var boat2 = component.get("v.boat");
        plotMapMarker.setParams({
            "sObjectId": boat2.Id,
            "lat": boat2.Geolocation__Latitude__s,
            "long": boat2.Geolocation__Longitude__s,
            "label": boat2.Name
        });
        console.log('!!! send event to plotMapMarker=' + boat2.Geolocation__Latitude__s);
        plotMapMarker.fire();
    }
})