@isTest
private class ProjectCalloutServiceTest {
    //Implement mock callout tests here
    @testSetup
    static void initData(){
        ServiceTokens__c cs = new ServiceTokens__c();
        cs.Name='ProjectServiceToken';
        cs.Token__c = '6c824523-ba42-43bc-8896-7c36a4cece62';
        insert cs;
    }
    
    @isTest
    static void testPostCallout() {        
        // Set mock callout class 
        Test.setMock(HttpCalloutMock.class, new ProjectCalloutServiceMock()); 
        // This causes a fake response to be sent
        // from the class that implements HttpCalloutMock. 
        //HttpResponse response = ProjectCalloutService.postOpportunityToPMS();
        Opportunity opp = new Opportunity();
        opp.Name = 'test';
        opp.StageName = 'Prospecting';
        opp.CloseDate = Date.newInstance(2019, 11, 20);
        opp.Amount = 150000;
        insert opp;
        List<Id> oppList = new List<Id>();
        oppList.add(opp.Id);
        
        Test.startTest();
        ProjectCalloutService.postOpportunityToPMS(oppList);
		Test.stopTest();
        
        List<Opportunity> opp2 = new List<Opportunity>();
        opp2 = [SELECT id, Name, StageName, CloseDate FROM Opportunity WHERE Name = 'test'];
        System.debug('--> ' + opp2);
        System.assertEquals('Submitted Project', opp2[0].StageName);
    }
    
     @isTest
    static void testPostCalloutFailure() {        
        // Set mock callout class 
        Test.setMock(HttpCalloutMock.class, new ProjectCalloutServiceMockFailure()); 
        Opportunity opp = new Opportunity();
        opp.Name = 'testFail';
        opp.StageName = 'Prospecting';
        opp.CloseDate = Date.newInstance(2019, 10, 20);
        opp.Amount = 150000;
        insert opp;
        List<Id> oppList = new List<Id>();
        oppList.add(opp.Id);
        
        Test.startTest();
        ProjectCalloutService.postOpportunityToPMS(oppList);
		Test.stopTest();
        
        List<Opportunity> opp2 = new List<Opportunity>();
        opp2 = [SELECT id, Name, StageName, CloseDate FROM Opportunity WHERE Name = 'testFail'];
        System.debug('--> ' + opp2);
        System.assertEquals('Resubmit Project', opp2[0].StageName);
    }
}