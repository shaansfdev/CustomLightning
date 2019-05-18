({
	getCalcResult : function(component, event, helper) {
		var num1 = parseInt(component.get("v.Num1"));
        alert(num1);
        var num2 = parseInt(component.get("v.Num2"));
        alert(num2);
        var Result = num1 + num2;
        alert(Result);
        component.set("v.Res",Result);
	}
})