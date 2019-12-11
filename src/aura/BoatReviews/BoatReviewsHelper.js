({
    onInit : function (cmp) {
        var boat = cmp.get("v.boat");
        var action = cmp.get("c.getAll");
        action.setParams({
            "boatId" : boat.Id
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.boatReviews", response.getReturnValue());
            }else {
                var toastEvent = $A.get('e.force:showToast');
                if (toastEvent) {
                    toastEvent.setParams({
                        title: 'Error!',
                        message: 'Error load data boat review',
                        variant: 'error'
                    });
                    toastEvent.fire();
                } else {
                    alert (message);
                }
            }

        });
        $A.enqueueAction(action);
    },

//     onInit : function(component, event){
//         var boat = component.get("v.boat");
//         console.log("BRHjs:onInit started: boatId is " + boat.Id);
//         var action = component.get("c.getAll");
//         action.setParams({"boatId" : boat.Id});
//         console.log("boatId: " + boat.Id);

//         //add the callback behavior for when the response is received
//         action.setCallback(this,function(response){
//             var state = response.getState();
//             if (state === "SUCCESS"){
//                 component.set("v.boatReviews", response.getReturnValue());
//                 console.log("APEX success");
//                 }
//                 else {
//                 console.log("Failed with state: " + state);
//                 }
//         });
//         //send action off to be executed in APEX
//         $A.enqueueAction(action);
// },

})