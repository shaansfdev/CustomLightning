({
	SaveOpp : function(component, event, helper) {
        var OpprName = component.find("OppNameId");
        
        var OpprStage = component.find("StageNameId");
        var OpprCloseDate = component.find("CloseDateID");
        var isError = false;
        if(($A.util.isUndefined(OpprName.get("v.value")) || $A.util.isEmpty(OpprName.get("v.value")))){
            OpprName.showHelpMessageIfInvalid();
            isError = true;
        }
        else if(($A.util.isUndefined(OpprStage.get("v.value")) || $A.util.isEmpty(OpprStage.get("v.value")))){
            OpprStage.showHelpMessageIfInvalid();
        }
        else if(($A.util.isUndefined(OpprCloseDate.get("v.value")) || $A.util.isEmpty(OpprCloseDate.get("v.value")))){
            OpprCloseDate.showHelpMessageIfInvalid();
        }
            
		helper.createOpp(component, event, helper);
	}
})