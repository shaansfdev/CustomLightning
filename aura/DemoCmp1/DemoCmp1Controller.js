({
	handleClick : function(component, event, helper) {
    var evt = $A.get("e.force:navigateToComponent");
     evt.setParams({
        componentDef : "c:DemoCmp2",
        componentAttributes: {

        }
    });
     evt.fire();
}
})