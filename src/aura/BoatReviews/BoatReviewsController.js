({
    doInit : function (component, event, helper) {
        helper.onInit(component);
    },

    // getAll : function(component, event, helper){
    //     helper.onInit(component);
    // },

    onUserInfoClick : function (component, event, helper) {
        var ctarget = event.currentTarget;
        var userId = ctarget.dataset.userid;

        var navEvt = $A.get("e.force:navigateToSObject");
        if (navEvt){
            navEvt.setParams({
                "recordId": userId
            });
            navEvt.fire();
        }
    }
})