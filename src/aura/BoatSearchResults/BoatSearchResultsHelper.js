({
    onSearch : function(cmp) {

        console.log('boatTepeID = ' + cmp.get("v.boatTypeId"));

        var action = cmp.get("c.getBoats");
        action.setParams({
            boatTypeId : cmp.get("v.boatTypeId")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.boats",  response.getReturnValue());
                console.log('boats= ' + response.getReturnValue());
            }else {
                console.log('error load boats');
            }
        });
        $A.enqueueAction(action);
    },


})