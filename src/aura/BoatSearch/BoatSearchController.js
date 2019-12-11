({
    onFormSubmit : function (component, event, helper) {
        var message = event.getParam("formData");

        console.log('BoatSearchController '+ message);

        var boatTypeId = event.getParam("formData");
        var BSRcmp = component.find("bsr");
        var auraMethodResult = BSRcmp.search(boatTypeId);
        console.log("auraMethodResult: " + auraMethodResult);
    }
})