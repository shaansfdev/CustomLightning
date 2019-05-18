({
    getDataTable : function(component, event, helper) {
        helper.fetchDatable(component,event,helper);
    },
    scriptsLoaded : function(component, event, helper){
        console.log('Scripts loaded...');
    },
    callAction : function(component , event , helper){
        var urldef = $A.get('e.force:navigateToURL');
        urldef.setParams({
            "url" : 'https://www.google.com'
        });
        urldef.fire();
    }
})