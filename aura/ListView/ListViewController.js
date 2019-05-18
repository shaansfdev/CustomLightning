({
	getPakHeaders : function(component, event, helper) {
		
        helper.getRecords(component, event, helper);
	},
    cancelTouchMove : function(component, event, helper) {
        //event.stopPropagation();
    },
    redirectTo : function(component, event, helper) {
        
        console.log('recordId1===>>>',event.currentTarget.getAttribute("data-recId"));
        //console.log('recordId===>>>',event.target.getAttribute("data-recId"));
        var recordDetailId = event.currentTarget.getAttribute("data-recId");
        //console.log('recordId===>>>',recordId);
        var evt = $A.get("e.force:navigateToComponent");
        evt.setParams({
            componentDef : "c:FieldSetOutputView",
            componentAttributes: {
                recordId : recordDetailId
            }
        });
        evt.fire();
        //event.stopPropagation();
    },
    sortByName: function(component, event, helper) {
        helper.sortBy(component, "Name", event, helper);
    },
    sortByBlock: function(component, event, helper) {
        helper.sortBy(component, "LastModifiedDate", event, helper);
    },
})