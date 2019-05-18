({
	getLabels : function(component, event, helper) {
        var action = component.get("c.getControlForName");
        action.setCallback(this,function(response){
            var objLabels = response.getReturnValue();
            if(objLabels != null){
                component.set('v.objLabels', objLabels);
            }
        });
        $A.enqueueAction(action);
	}
})