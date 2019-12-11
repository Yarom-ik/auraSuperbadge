({
    loadTypesBoads : function(cmp) {

        var action = cmp.get("c.getBoatTypes");
        action.setParams({});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.boatsType", response.getReturnValue());
            }else {
                console.log('error load types boad');
            }

        });
        $A.enqueueAction(action);
    },

})