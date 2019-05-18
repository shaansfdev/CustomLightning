({
	fetchDatable : function(component,event) {
        
		var action = component.get("c.getPakList");
        action.setCallback(this,function(response){
            var result = response.getReturnValue();
            component.set("v.lstPak",result);
            console.log(result);
            setTimeout(function(){
                $('#tableid').DataTable();
            },500);
        });
        $A.enqueueAction(action);
	}
})