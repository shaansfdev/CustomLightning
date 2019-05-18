({
	doInit : function(component, event, helper) {
        console.log('In Iint');
       helper.getsObjectDetail(component,event,helper);
       //component.set("v.showSpinner", true); 
    },
    
    showSpinner_op : function (component, event, helper) {
        var toggleText = component.find("DetailSpinner");
		//$A.util.removeClass(toggleText,"toggle");  
        component.set('v.isdisplay','display:initial;');
        //component.set("v.showSpinner", true);
        
    },
    
    hideSpinner_op : function (component, event, helper) {
		var toggleText = component.find("DetailSpinner");
		$A.util.addClass(toggleText,"toggle");
        //component.set('v.isdisplay','display:none;');
        component.set("v.showSpinner", false);
    },
    
    //Use for Open popup
    showRejectModal : function(component, event, helper){        
        document.getElementById("dvApproveReject").style.display = "block" ;
        document.getElementById("dvBackdrop").classList.add("slds-backdrop_open");
        component.set("v.approvalStatus", 'Reject');
    },
    
    //Use for Open popup
    showApproveModal : function(component, event, helper){        
        document.getElementById("dvApproveReject").style.display = "block" ;
        document.getElementById("dvBackdrop").classList.add("slds-backdrop_open");
        component.set("v.approvalStatus", 'Approve');
    },    
    
    //Use this method for approve or reject 
    handleApproveOrReject : function(component, event, helper){        
        helper.helperApproveOrReject(component);
    },    
    
    //Use for close popup
    hideModal : function(component, event, helper){        
        document.getElementById("dvApproveReject").style.display = "none" ;
        document.getElementById("dvBackdrop").classList.remove("slds-backdrop_open");
    },
})