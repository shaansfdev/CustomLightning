({
	createOpp : function(component) {
		var action = component.get("c.OppSave");
        action.setParams({
            "Opp" : component.get("v.OppObj")
        });
        action.setCallback(this,function(response){
            console.log('record created',response.getReturnValue());
            component.set("v.OppObj",response.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})