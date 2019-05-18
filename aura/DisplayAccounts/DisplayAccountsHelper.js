({
	fetchAcc : function(component) {
		
        var action = component.get("c.FetchAccs");
        action.setCallback(this,function(response){
           
            console.log('incoming rsponse-->>',response);
            console.log('incoming rsponse1-->>',response.getReturnValue());
            component.set("v.ListAccount",response.getReturnValue());
            component.set('v.data',response.getReturnValue());
        });
    	$A.enqueueAction(action);
    }
})