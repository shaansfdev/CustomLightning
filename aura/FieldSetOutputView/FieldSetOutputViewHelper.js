({
    getsObjectDetail: function(component) {
        //Get Component Values
        var recordId = component.get("v.recordId");
        //Get Component Values
        //Intialize Method
        
        var action = component.get("c.getResult");
        
        //Set Parameter
        if(recordId != null && recordId.length > 0){
            action.setParams({
                "strRecordId" : recordId
            });
        } 
        else {
            return ;
        }
        //Set Parameter
        
        //Intialize Method
        
        //Call Back for action
        action.setCallback(this, function(response) {
            //debugger;
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var result = response.getReturnValue();
                if(result != null){
                    component.set("v.isApproval", result);
                }
            }
        });
        //Call Back for action
        
        //Execute Action
        $A.enqueueAction(action);
        //Execute Action
    },
    
    helperApproveOrReject : function(component){
        //Intialize Method
        var action = component.get("c.approveOrReject");
        
        //Get values from attribute
        var recordId = component.get("v.recordId");
        var approvalStatus = component.get("v.approvalStatus");
        var comment = component.get("v.comment");
        
        //Set Parameter
        action.setParams({
            "strComment" : comment,
            "strRecordId" : recordId,
            "strStatus" : approvalStatus,
        });
        //Set Parameter
        
        //Intialize Method
        
        //Call Back for action
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "The record has been preocessed successfully."
                });
                toastEvent.fire();          
                component.set("v.isApproval", false);
                document.getElementById("dvApproveReject").style.display = "none" ;
        		document.getElementById("dvBackdrop").classList.remove("slds-backdrop_open");
            }
        });
        //Call Back for action
        
        //Execute Action
        $A.enqueueAction(action);
        //Execute Action
    },
})