({
    showData : function(component, event, helper) {
        helper.showListViewData(component, event, helper);
    },
    
    onListViewChange : function(component, event, helper) {
        helper.showRecordsData(component, event, helper);
    },
})