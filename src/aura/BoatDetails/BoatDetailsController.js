({
    onBoatSelected : function (component, event, helper) {
        var boat = event.getParam("boat");
        console.log('event -> boat ' + boat.Id);
        component.set("v.id", boat.Id);

        //reload force:recordData
        var service = component.find("service");
        service.reloadRecord();
    },

    onBoatReviewAdded : function (component, event, helper) {
        component.set("v.selectedTabId", "boatreviewtab");

        // refresh apex boatReviews
        var BRcmp = component.find("ref");
        console.log('BRcmp onBoatReviewAdded= ' + BRcmp);
        if (BRcmp != undefined){
            var auraMethodResult = BRcmp.refresh();
        }

    },

    onRecordUpdated : function (component, event, helper) {
        //refresh apex boatReviews
        var BRcmp = component.find("ref");
        console.log('BRcmp onRecordUpdated= ' + BRcmp);
        if (BRcmp != undefined){
            var auraMethodResult = BRcmp.refresh();
        }
    }
})