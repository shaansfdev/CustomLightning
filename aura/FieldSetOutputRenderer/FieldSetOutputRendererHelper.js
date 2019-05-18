({
    configOutputMap: {
        "anytype": { componentDef: "ui:outputText" },
        "base64": { componentDef: "ui:outputText" },
        "boolean": {componentDef: "ui:outputCheckbox" },
        "combobox": { componentDef: "ui:outputText" },
        "currency": { componentDef: "ui:outputText" },
        "datacategorygroupreference": { componentDef: "ui:outputText" },
        "date": { componentDef: "ui:outputDate" },
        "datetime": { componentDef: "ui:outputDateTime" },
        "double": { componentDef: "ui:outputNumber", attributes: { values: { format: "0.00"} } },
        "email": { componentDef: "ui:outputEmail" },
        "encryptedstring": { componentDef: "ui:outputText" },
        "id": { componentDef: "ui:outputText" },
        "integer": { componentDef: "ui:outputNumber", attributes: { values: { format: "0"} } },
        "multipicklist": { componentDef: "ui:outputText" },
        "percent": { componentDef: "ui:outputNumber", attributes: { values: { format: "0"} } },
        "picklist": { componentDef: "ui:outputText" },
        "string": { componentDef: "ui:outputText" },
        "textarea": { componentDef: "ui:outputText"},
        "time": { componentDef: "ui:outputDateTime", attributes: { values: { format: "h:mm a"} } },
        "url": { componentDef: "ui:outputText" },
        "phone": { componentDef: "ui:outputPhone"},
        "richtextarea": { componentDef: "ui:outputRichText"},
        "reference" : { componentDef: "lightning:outputField"},
    },   
    
    getsObjectDetail: function(component) {
        console.log('In helper');
        //Get Component Values
        var FieldSet = component.get("v.FieldSet");
        var ObjectName = component.get("v.ObjectName");
        var recordId = component.get("v.recordId");
        //Get Component Values
        
        //Intialize Method
        var action = component.get("c.getResult");
        
        //Set Parameter
        if(FieldSet != null && FieldSet.length > 0 
           && ObjectName != null && ObjectName.length > 0 
           && recordId != null && recordId.length > 0){
            action.setParams({
                "strFieldSetName" : FieldSet,
                "strObjName" : ObjectName,
                "strRecordId" : recordId,
            });
        } 
        else {
            return ;
        }
        //Set Parameter
        
        //Intialize Method
        
        //Call Back for action
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var result = response.getReturnValue();
                if(result != null 
                   && result.mapFieldToFieldClass != null 
                   && result.lstResult != null && result.lstResult.length > 0){
                    component.set("v.SObjectList", result.lstResult);   
                    component.set("v.SObjectFields", result.mapFieldToFieldClass);
                    
                    var SObjects = result.lstResult;
                    var fieldNames = result.mapFieldToFieldClass;
                    
                    console.log('In SObjects',SObjects);
                    console.log('In fieldNames',fieldNames);
                    var values = [];
                    if(SObjects != null && SObjects.length >0 ){
                        for (var i=0; i<SObjects.length; i++){
                            if(fieldNames != null){
                                var withoutReferenceFields =  new Object();
                                for (var key in fieldNames) {
                                    var field = fieldNames[key];
                                    if(field.type.toLowerCase() != 'reference'){
                                        withoutReferenceFields[key] = field;
                                    }
                                }
                                
                                if(withoutReferenceFields != null){
                                    var fieldsKey = Object.keys(withoutReferenceFields);
                                    for(var k = 0; k < fieldsKey.length; k+=2){
                                        var secondField = null;
                                        var secondConfig = null;
                                        if((k+1) < fieldsKey.length){
                                            secondField = fieldNames[fieldsKey[k+1]];
                                            values.push({name: secondField.name, value: SObjects[i][secondField.name]});
                                            var secondLabel = [secondField.label];
                                            var secondValuesForArtifacts = SObjects[i][secondField.name];
                                            if(secondValuesForArtifacts == undefined){
                                                secondValuesForArtifacts = '';
                                            }    
                                            secondConfig = JSON.parse(JSON.stringify(this.configOutputMap[secondField.type.toLowerCase()]));
                                            secondConfig.attributes = secondConfig.attributes || {};
                                            secondConfig.attributes.values = secondConfig.attributes.values || {};
                                            secondConfig.attributes.values.value = secondValuesForArtifacts; 
                                            secondConfig.attributes.values.class="slds-form-element__static";                                             
                                        }
                                        
                                        var firstField = fieldNames[fieldsKey[k]];
                                        values.push({name: firstField.name, value: SObjects[i][firstField.name]});
                                        component.set("v.values", values);
                                        
                                        var firstLabel = [firstField.label];
                                        var firstValuesForArtifacts = SObjects[i][firstField.name];
                                        if(firstValuesForArtifacts == undefined){
                                            firstValuesForArtifacts = '';
                                        }
                                        
                                        var firstConfig = JSON.parse(JSON.stringify(this.configOutputMap[firstField.type.toLowerCase()]));
                                        
                                        firstConfig.attributes = firstConfig.attributes || {};
                                        firstConfig.attributes.values = firstConfig.attributes.values || {};
                                        firstConfig.attributes.values.value = firstValuesForArtifacts; 
                                        firstConfig.attributes.values.class="slds-form-element__static"; 
                                        
                                        $A.createComponent('c:FieldRerender', {
                                            'FirstTagToRender':firstConfig.componentDef,
                                            'SecondTagToRender':(secondConfig != null ? secondConfig.componentDef : ''),
                                            'FirstTagAttributes' : JSON.stringify(firstConfig.attributes.values),
                                            'SecondTagAttributes' : (secondConfig != null ? JSON.stringify(secondConfig.attributes.values) : ''),
                                            'FirstTagLabel' : firstField.label,
                                            'SecondTagLabel' : (secondField != null ? secondField.label : ''),
                                            'FirstisEditable': false,
                                            'SecondisEditable': false
                                        },function(comp){
                                            var op = component.find("detailView");
                                            var body = op.get('v.body');
                                            body.push(comp);
                                            op.set('v.body',body);
                                        });
                                    }                                    
                                }
                                debugger;
                            }
                        }
                    } 
                }
            }
        });
        //Call Back for action
        
        //Execute Action
        $A.enqueueAction(action);
        //Execute Action
    },    
})