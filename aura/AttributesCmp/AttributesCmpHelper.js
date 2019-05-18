({
	fetchNames : function(component) {
		
        console.log('Cmps-->',component);
        this.fetchDetails(component);
	},
    fetchDetails: function(component){
        
        console.log('My name before-->',component.get("v.myName"));
        component.set("v.myName","New Name");
    }
})