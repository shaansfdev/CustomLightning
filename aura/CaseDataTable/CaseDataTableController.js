({
	getCaseField : function(component, event, helper) {
		helper.getCaseFieldHelper(component,event,helper);
	},
    onChange: function (cmp, evt, helper) {
       // alert(cmp.find('select').get('v.value') + ' Priority');
        helper.getPriorityData(cmp,evt,helper);
    }
})