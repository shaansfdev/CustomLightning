({
    getRFidRecords : function(component, event, helper) {
        var RecId = component.get("v.DateId");
        var action= component.get("c.RFIDRecords");
        //alert('**RecId**'+RecId);
        action.setParams({
            "RecID":RecId
        });
        action.setCallback(this,function(response){
            
            var result = response.getReturnValue();
            component.set("v.lstRFID",response.getReturnValue());
            console.log('Result returned',result);
            console.log('Id returned',result[0].RFID_Date__c);
            component.set("v.DateId",result[0].RFID_Date__c);
        });
        $A.enqueueAction(action);
        
    },SearchHelper: function(component, event) {
        // show spinner message
        component.find("Id_spinner").set("v.class" , 'slds-show');
        var serverAction = component.get("c.fetchProductLitm");
        var RecId = component.get("v.DateId");
        
        serverAction.setParams({
            "RecID": component.get("v.DateId"),
            "searchKeyWord": component.get("v.searchKeyword"),            
        });
        
        
        serverAction.setCallback(this, function(response) {
            // hide spinner when response coming from server 
            component.find("Id_spinner").set("v.class" , 'slds-hide');
            var state = response.getState();
            
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
                
                // if storeResponse size is 0 ,display no record found message on screen.
                if (storeResponse.length == 0) {
                    component.set("v.Message", true);
                } else {
                    component.set("v.Message", false);
                }
                
                // set numberOfRecord attribute value with length of return value from server
                component.set("v.TotalNumberOfRecord", storeResponse.length);
                
                // set searchResult list with return value from server.
                component.set("v.lstRFID", storeResponse); 
                
            }else if (state === "INCOMPLETE") {
                alert('Response is Incompleted');
            }else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " + 
                              errors[0].message);
                    }
                } else {
                    alert("Unknown error");
                }
            }
        });
        $A.enqueueAction(serverAction);
    },
    convertToCsv : function(component,event){
        var csvString , Keys , columnDivider , lineDivider;
        var lstHeader = component.get("v.lstRFID");
        console.log('*lstHeader**',lstHeader);
        keys = ['RFID Name','Account Name','Serial Number','ABC','DEF'];
        columnDivider = ',';
        lineDivider = '\n';
        csvString = '';
        csvString += keys.join(columnDivider);
        csvString += lineDivider;
        for(var i =0;i<lstHeader.length;i++){
             csvString += '"'+lstHeader[i].Name +'"'+columnDivider+lineDivider;
        }
        console.log('**Helper csvString*',csvString);
    }
})