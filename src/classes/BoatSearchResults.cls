public with sharing class BoatSearchResults {

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){

        List<Boat__c> boats = new List<Boat__c>();
        if(String.isNotEmpty(boatTypeId)){
            System.debug('boatTypeId =' + boatTypeId);
            boats = [SELECT Name, BoatType__c, Picture__c, Description__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Contact__r.Name FROM Boat__c WHERE BoatType__c =: boatTypeId];
        } else {
            System.debug('all');
            boats = [SELECT Name, BoatType__c, Picture__c, Description__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Contact__r.Name FROM Boat__c];
        }
        System.debug('boats= ' + boats);
        return boats;
    }

    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        List<BoatType__c> boatTypes = new List<BoatType__c>();
        try {
            boatTypes = [SELECT Name FROM BoatType__c];
        } catch (DmlException ex){
            System.debug(ex.getMessage());
        }
        return boatTypes;
    }

}