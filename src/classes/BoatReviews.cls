public with sharing class BoatReviews {

    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        List<BoatReview__c> boatReviews = new List<BoatReview__c>();
        try {
            if (String.isNotEmpty(boatId)) {
                boatReviews = [SELECT Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName
                FROM BoatReview__c WHERE Boat__r.Id =: boatId];
            }else {
                return null;
            }
        }catch (DmlException e){
            System.debug(e.getMessage());
        }
        System.debug('BoatReview = ' + boatReviews);
        return boatReviews;
    }

}