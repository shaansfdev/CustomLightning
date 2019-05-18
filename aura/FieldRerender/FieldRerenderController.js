({
	FieldToBeRendered: function(component, event, helper) {
        var firstTag = component.get('v.FirstTagToRender');
        var secondTag = component.get('v.SecondTagToRender');
        if(firstTag != null && firstTag != ""){
            var tag = firstTag;
            var attr = JSON.parse(component.get('v.FirstTagAttributes'));
            $A.createComponent(tag, attr, function(comp){
                var op = component.find('firsttagspace');
                var body = op.get('v.body');
                body.push(comp);
                op.set('v.body', body); 
            });   
        } 
        if(secondTag != null && secondTag != ""){
            var tag = secondTag;
            var attr = JSON.parse(component.get('v.SecondTagAttributes'));
            $A.createComponent(tag, attr, function(comp){
                var op = component.find('secondtagspace');
                var body = op.get('v.body');
                body.push(comp);
                op.set('v.body', body); 
            });   
        }
        component.set('v.FirstTagToRender', '');
        component.set('v.SecondTagToRender', '');
    }
})