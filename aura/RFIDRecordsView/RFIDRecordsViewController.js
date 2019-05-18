({
    FetchRFIDRecords : function(component, event, helper) {
        helper.getRFidRecords(component, event, helper);
    },
    
    RedirectToRFIDCmp : function(component, event, helper){
        
        var RFrecordId = event.target.getAttribute("data-recId");
        console.log('recordId===>>>',RFrecordId);
        var evt = $A.get("e.force:navigateToSObject");
        evt.setParams({
            "recordId": RFrecordId,
            "slideDevName": "Detail"
        });
        evt.fire();
    },
    
    Search: function(component, event, helper) {
        var searchField = component.find('searchField');
        
        var isValueMissing = searchField.get('v.validity').valueMissing;
        var RFrecordId = event.target.getAttribute("data-recId");
        console.log('recordId===>>>',RFrecordId);
        // if value is missing show error message and focus on field
        if(isValueMissing) {
            // searchField.showHelpMessageIfInvalid();
            // searchField.focus();
            helper.SearchHelper(component, event);
        }else{
            // else call helper function 
            helper.SearchHelper(component, event);
        }
    },
    
    CreateCSV:function(component,event,helper){
        console.log('In button JS');
        var CSVData = helper.convertToCsv(component,event,helper); // Way to form the CSV
        console.log('***CSVData**',CSVData);
        // 34 - 39 to download the file as CSV
        var headerElement = document.createElement('a');
        headerElement.href = 'data:text/csv;charset=UTF-8,' + encodeURI(CSVData);
        headerElement.target = '_self';
        headerElement.download = 'RFID.CSV';
        document.body.appendChild(headerElement);
        headerElement.click();
    },
    
    navigateToRFIDDate : function (component,event,helper){
        var evt = $A.get("e.force:navigateToComponent");        
        evt.setParams({
            componentDef : "c:RFIDDates"
        });
        evt.fire();    
    },
})