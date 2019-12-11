({
    onFullDetails : function (component, event, helper) {

        var navEvt = $A.get("e.force:navigateToSObject");
        if (navEvt){
            component.set("v.showButton", true);
            navEvt.setParams({
                "recordId": component.get("v.boat.Id")
            });
            navEvt.fire();
        }


    }
})