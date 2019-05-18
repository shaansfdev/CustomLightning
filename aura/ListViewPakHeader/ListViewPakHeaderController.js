({
    doInit : function(component, event, helper) {
        
        helper.callInitData(component, event, helper);
        
    },
    
    onPicklistChange: function(component, event, helper) {

        component.set("v.bShowListView", false); 
        var lstViewName = event.getSource().get("v.value"); 
        component.set("v.currentListViewName", lstViewName);
        component.set("v.bShowListView", true); 
    },
})