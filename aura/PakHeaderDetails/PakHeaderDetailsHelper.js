({
	loadData : function(component) {
		
        var actionHeader = component.get("c.getPakHeaderDetail");
        actionHeader.setParams({
            recordId: component.get("v.recordId")
            
        });
        actionHeader.setCallback(this, function(response){
            
            component.set("v.lstPakHeaders",response.getReturnValue());
            console.log('records',response.getReturnValue());
        });
        $A.enqueueAction(actionHeader);
        
        
        var action = component.get("c.getRelatedListDetails");
        action.setParams({
            recordId: component.get("v.recordId")
            
        });
        action.setCallback(this, function(response){
            
            component.set("v.lstPakParts",response.getReturnValue());
            console.log('records',response.getReturnValue());
        });
        $A.enqueueAction(action);
        
        var actionHistory = component.get("c.getRelatedApprovalHistoryDetails");
        actionHistory.setParams({
            recordId: component.get("v.recordId")
            
        });
        actionHistory.setCallback(this, function(response){
            
            component.set("v.lstAppHistory",response.getReturnValue());
            console.log('records',response.getReturnValue());
        });
        $A.enqueueAction(actionHistory);
        
	}
})