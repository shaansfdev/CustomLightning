({
	SaveData : function(component, event, helper) {
		var title = component.find("NameId");
        var isError = false;
        if($A.util.isUndefined(title.get("v.value")) || $A.util.isEmpty(title.get("v.value")) ){
            title.showHelpMessageIfInvalid();
            isError = true;
        }
        else{
            console.log('**Inelse**',title);
        }
	}
})