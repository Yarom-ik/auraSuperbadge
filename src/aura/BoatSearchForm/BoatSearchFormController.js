({
    doInit : function(component, event, helper) {
        helper.loadTypesBoads(component);
    },

    handleSetType : function(component, event, helper){
        console.log('selectedValue=' + component.find("boatTypes").get("v.value"));
        component.set("v.selectedType", component.find("boatTypes").get("v.value"));
    },

    newBoat : function(component, event, helper) {
        console.log("handleNewBoatForm handler called.")
        var boatTypeId = component.get("v.selectedType");

        console.log(boatTypeId);
        var createNewBoat = $A.get("e.force:createRecord");
        createNewBoat.setParams({
            "entityApiName": "Boat__c",
        })
        if(! boatTypeId==""){
            createNewBoat.setParams({
                "defaultFieldValues": {'BoatType__c': boatTypeId}
            })
        }
        createNewBoat.fire();
    },

    onFormSubmit : function(component, event, helper){
        console.log("start event");
        var cmpEvent = component.getEvent("formsubmit");

        cmpEvent.setParams({
            "formData" : component.get("v.selectedType")});
        cmpEvent.fire();


        // var formData = event.getParam("formData");
        // var boatTypeId = formData.boatTypeId;
        // var BSRcmp = component.find("BSRcmp");
        // var auraMethodResult = BSRcmp.search(boatTypeId);
        // console.log("auraMethodResult: " + auraMethodResult);
    },


})