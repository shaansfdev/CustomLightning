({
	fetchCont : function(component) {
		var action = component.get("c.fetchCons");
        action.setParams({
            "Accid" : component.get("v.recordId")
        });
        action.setCallback(this,function(response){
            component.set("v.ContList",response.getReturnValue());
        });
        $A.enqueueAction(action);        
	}
})