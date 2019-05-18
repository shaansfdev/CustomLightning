({
	fetchRFIDGlobal : function(component,event,helper) {
		var action = component.get("c.RFIDGlobalRecords");
        action.setCallback(this,function(response){
            component.set("v.RFIDDates",response.getReturnValue());
            
        });
        $A.enqueueAction(action);
        
	},
   /* SendToRFID : function(component,event,helper){
       var action = component.get("c.RedirectRFID"); 
        action.setCallback(this,function(response){
            
        });
    } */
})