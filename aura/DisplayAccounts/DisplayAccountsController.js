({
	getAccounts : function(component, event, helper) {
        component.set('v.columns', [ 
            {label: 'Account Id', fieldName: 'Id', type: 'text'},
            {label: 'Account name', fieldName: 'Name', type: 'text'},
            {label: 'Industry', fieldName: 'Industry', type: 'text'},
            {label: 'AnnualRevenue', fieldName: 'AnnualRevenue', type: 'currency'},
        ]);
       

		helper.fetchAcc(component, event, helper);
	}
})