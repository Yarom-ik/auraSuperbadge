({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },

    onPlotMapMarker : function(component, event, helper) {

        console.log('--Start onPlotMapMarker');


        var lat = String(event.getParam("lat"));
        var lg = String(event.getParam("long"));

        component.set('v.location',{
            "lat" : lat,
            "long" : lg
        });
        console.log('--V  location.sObjectId ' +  lg);


        // var location = component.get("v.location");
        console.log('--V  location ' +  location.lat);

        // location.sObjectId = String(event.getParam("sObjectId"));
        //
        // location.lat = event.getParam("lat");
        // location.long = event.getParam("long");
        // location.label = event.getParam("label");
        // console.log('--V onPlotMapMarker' + event.getParam("long"));
        // component.set("v.location", location);
    }
    
})