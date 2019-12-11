global class ProjectCalloutServiceMock implements HttpCalloutMock {
   //Implement http mock callout here
   global HTTPResponse respond(HTTPRequest request) {
        // Create a fake response
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setBody('{"opportunityId": "00641000004EKmFAAW","opportunityName": "test","accountName": "ACME Corp, Inc.","closeDate": "2016-10-30", "amount": 150000}');
        response.setStatus('OK');
        response.setStatusCode(201);
        return response; 
    }
}