({
    fetchRFIDDates : function(component,event,helper) {
        var action = component.get("c.RFIDDateRecords");
        action.setCallback(this,function(response){
            var lstRecords = response.getReturnValue();
            if(lstRecords != null && lstRecords.length > 0){
                component.set('v.RFIDDates', JSON.parse(JSON.stringify(lstRecords)));
                component.set('v.copyRFIDDates', JSON.parse(JSON.stringify(lstRecords)));
            }
        });
        $A.enqueueAction(action);
        
    },
    
    helperSearchRecords : function(component,event,helper) {
        var searchKeyWord = component.get('v.searchKeyWord');
        if(searchKeyWord != null && searchKeyWord != ''){
            var action = component.get("c.RFIDGlobalRecords");
            action.setParams({
                "searchKeyWord":searchKeyWord
            });
            action.setCallback(this,function(response){
                var lstRecords = response.getReturnValue();
                component.set('v.RFIDDates', JSON.parse(JSON.stringify(lstRecords)));
                component.set('v.showBackButton', true);
                
            });
            $A.enqueueAction(action);   
        }
    },
    /* SendToRFID : function(component,event,helper){
       var action = component.get("c.RedirectRFID"); 
        action.setCallback(this,function(response){
            
        });
    } */
})