({
    onInit : function(component, event, helper) {
        var recordTypeId = null;
        var skipCache = false;
        var boatid = component.get('v.boat.Id');

        component.find("service").getNewRecord(
            'BoatReview__c',
            recordTypeId,
            skipCache,
            $A.getCallback(function() {
                var review = component.get('v.boatReview');
                var error = component.get('v.recordError');
                if (error || !review) {
                    console.log('Error initalizing review template: ' + error);
                }

                    // review.Boat__c = component.get('v.boat').Id;
                component.set('v.boatReview.Boat__c', component.get('v.boat.Id'));
                var boatId = component.get('v.boatReview.Boat__c.Id');
                console.log('--->v.boatReview.Boat__c =' + boatId);

            })
        );

    },

    alertSuccess: function(message) {
        var toastEvent = $A.get('e.force:showToast');
        if (toastEvent) {
            toastEvent.setParams({
                title: 'Success!',
                message: message
            });
            toastEvent.fire();
        } else {
            alert (message);
        }
    }
})