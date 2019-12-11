({
    doSearch : function(component, event, helper) {
        helper.onSearch(component);
    },

    doAction : function (component, event, helper) {
        var params = event.getParam('arguments');
        if (params) {
            component.set("v.boatTypeId", params.boatTypeId);
            console.log('dsd ' + component.get("v.boatTypeId"));
            // add your code here
        }
        helper.onSearch(component);
    },

    onBoatSelect : function (component, event, helper) {
        var boatId = event.getParam("boatId");
        console.log('event -> tileId ' + boatId);
        component.set("v.selectedBoatId", boatId);
    }

    // boatSearchResults : function (component, event, helper) {
    //     helper.onSearch();
    // }
})