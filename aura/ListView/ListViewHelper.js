({
	getRecords : function(component) {
		
        component.set("v.isLoading",true);
        var action= component.get("c.fetchPakHeaderRecords");
        action.setCallback(this,function(response){
            
            var result = response.getReturnValue();
            component.set("v.lstPakHeaders",response.getReturnValue());
            component.set("v.isLoading",false);
        });
        $A.enqueueAction(action);
	},
    
    sortBy: function(component, field, event, helper) {
        window.setTimeout(
            
            $A.getCallback(function(res) {
                var records;
                if(component.get('v.lstPakHeaders')!=null)
                {
                    records = component.get("v.lstPakHeaders");
                }
                else
                {
                    records = component.get("v.lstPakHeaders"); 
                }
                
                var sortAsc = component.get("v.sortAsc"),
                    sortField = component.get("v.sortField");
                
                sortAsc = sortField != field || !sortAsc;
                
                records.sort(function(a,b){
                    var aVal;
                    var bVal;
                    aVal = a[field];
                    bVal = b[field];
                    
                    var t1 = aVal == bVal,
                        t2 = (!aVal && bVal) || (aVal < bVal);
                    return t1? 0: (sortAsc?-1:1)*(t2?1:-1);
                });
                
                component.set("v.sortAsc", sortAsc);
                component.set("v.sortField", field);
                component.set("v.lstPakHeaders",records);                
            }) ,500);
               
        
        
    },
})