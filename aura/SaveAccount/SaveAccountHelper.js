({
	datacreate : function(component) {
		
        var action = component.get("c.createRecord");
        action.setParams({
            "objContact" : component.get("v.obj")
        });
        action.setCallback(this,function(response){
            console.log('Record CReaed',response.getReturnValue());
            
        });
        $A.enqueueAction(action);
	}
})