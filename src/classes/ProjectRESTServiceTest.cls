@isTest
private class ProjectRESTServiceTest {
    
    //Implement Apex REST service tests here
    @isTest static void testPostProjectData() {
        Opportunity opp = new Opportunity();
        opp.Name = 'test';
        opp.StageName = 'Prospecting';
        opp.CloseDate = Date.newInstance(2019, 11, 20);
        opp.Amount = 150000;
        insert opp;
        
        Project__c prjt = new Project__c();
            prjt.ProjectRef__c = 'ProjectRef2';
            prjt.Name = 'ProjectName2';
            prjt.Opportunity__c = opp.Id;
            prjt.Start_Date__c = Date.today();
            prjt.End_Date__c = Date.today().addDays(10);
            prjt.Billable_Amount__c = 1500;
            prjt.Status__c = 'Running';
        insert prjt;
        
        // Call the method to test
        Test.startTest();
        String message = ProjectRESTService.postProjectData(
           'ProjectRef', 'ProjectName', String.valueOf(opp.Id),
                                       Date.today(), Date.today(), 15000, 'Running');
        Test.stopTest();
        // Verify results
        System.assert(message != null);	
        System.assertEquals('OK', message);
        System.debug('-->> ' + [SELECT id, Name, ProjectRef__c FROM Project__c WHERE Name = 'ProjectName2']);
    }
    
     @isTest static void testPostProjectDataFailure() {
        Opportunity opp = new Opportunity();
        opp.Name = 'test';
        opp.StageName = 'Prospecting';
        opp.CloseDate = Date.newInstance(2019, 11, 20);
        opp.Amount = 150000;
        insert opp;
        
        Project__c prjt = new Project__c();
            prjt.ProjectRef__c = 'ProjectRef2';
            prjt.Name = 'ProjectName2';
            prjt.Opportunity__c = opp.Id;
            prjt.Start_Date__c = Date.today();
            prjt.End_Date__c = Date.today().addDays(10);
            prjt.Billable_Amount__c = 1500;
            prjt.Status__c = 'Running';
        insert prjt;
        
        // Call the method to test
        Test.startTest();
        String message = ProjectRESTService.postProjectData(
           'ProjectRef', 'ProjectName', 'qwe',
                                       Date.today(), Date.today(), 15000, 'Running');
        Test.stopTest();
        // Verify results
        System.assert(message != null);	
         Opportunity opp2 = [SELECT id, DeliveryInstallationStatus__c FROM Opportunity WHERE id =: opp.Id];
        System.assertNotEquals(opp2.DeliveryInstallationStatus__c, 'In progress');

    }
}