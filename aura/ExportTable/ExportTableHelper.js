({
	FetchAccounts : function(component,event,helper) {
		var action = component.get("c.FetchAccTable");
        action.setCallback(this,function(response){
            var result = response.getReturnValue();
            component.set("v.AccountList",response.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})