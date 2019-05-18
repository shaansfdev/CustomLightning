({
	loadData : function(component) {
		
        var action = component.get("c.getRelatedListDetails");
        action.setParams({
            recordId: component.get("v.recordId")
            
        });
        action.setCallback(this, function(response){
            
            component.set("v.lstPakParts",response.getReturnValue());
            console.log('records',response.getReturnValue());
        });
        $A.enqueueAction(action);
	},
    
})