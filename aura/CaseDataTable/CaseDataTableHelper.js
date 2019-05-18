({
	getCaseFieldHelper : function(component,event) {
		var action= component.get("c.getCasePicklist");
        
        action.setCallback(this,function(response){
            console.log('Picklist Value',response.getReturnValue());
            console.log('Picklist Value----',response.getReturnValue().MapPk);
            component.set("v.PicklistString",response.getReturnValue().MapPk);
            component.set("v.CaseList",response.getReturnValue().lstCase);
        });
        $A.enqueueAction(action);
	},
    getPriorityData : function(cmp,evt) {
        // alert('**In Helper**'+cmp);
		var action= cmp.get("c.FetchPriorityData");
        // alert(cmp.find('select').get('v.value') + ' Helper Priority');
        var Priorityval = cmp.find('select').get('v.value');
        var Statusval = cmp.find('select2').get('v.value');
        var Typeval = cmp.find('select3').get('v.value');
        var mapvalues = cmp.get("v.mapvalues");
        if(Priorityval != 'None'){
          mapvalues['Priority'] = Priorityval;  
        }
        if(Statusval != 'None'){
          mapvalues['Status'] = Statusval;  
        }
        if(Typeval != 'None'){
          mapvalues['Type'] = Typeval;  
        }
        alert('**mapvalues**'+mapvalues['Priority']+'**mapvalues[Status]***'+mapvalues['Status']+'***mapvalues[Type]***'+mapvalues['Type']);
        
        
        action.setParams({
            "MapFldVsValue" : mapvalues
        });
        action.setCallback(this,function(response){
            console.log('Case list****',response.getReturnValue());
            cmp.set("v.CaseList",response.getReturnValue());
        });
        $A.enqueueAction(action);
	}
    
})