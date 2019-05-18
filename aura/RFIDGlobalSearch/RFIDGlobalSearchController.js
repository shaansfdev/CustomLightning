({
	getRFIDGlobal : function(component, event, helper) {
		helper.fetchRFIDGlobal(component,event,helper);
	},
    RedirectToRFID :function(component, event, helper){
        // helper.SendToRFID(component,event,helper);
        //var urldef = $A.get('e.force:navigateToURL');
        
        var res = 'a031U000008PlB7QAK';
        var href = event.srcElement.href;
        console.log('****'+href);
        
       // urldef.setParams({
           // "url" : 'https://www.google.com'
        //});
        //urldef.fire();
    },
    
    RedirectToRFIDCmp : function(component, event, helper){
        
        var recordId = event.target.getAttribute("data-recId");
        console.log('recordId===>>>',recordId);
        var evt = $A.get("e.force:navigateToComponent");
        
        evt.setParams({
            componentDef : "c:RFIDRecordsView",
            componentAttributes: {
                DateId : recordId
            }
        });
        evt.fire();
        var message = $A.get("e.force:showToast");
        message.setParams({
            "title" : "Success",
            "type" : "success",
            "message" : "navigated Successfully"
        });
        message.fire();
    }
})