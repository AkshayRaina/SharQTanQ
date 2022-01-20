sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZLeonardo_SharqTanq_BP.controller.main", {
		
		handleItem:function(oEvent){
	
			//var router1 = sap.ui.core.UIComponent.getRouterFor(this);
			var context = oEvent.getSource().getBindingContext('menu');
			
			var path = context.sPath;
			
			var index = path.lastIndexOf("/")+1;
			index = path.substring(index,path.length);

			var oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
			
			switch(parseInt(index)){
				case 0: oHashChanger.setHash("dashboard"); break;
				case 1: oHashChanger.setHash("reports"); break;
				case 2: oHashChanger.setHash("alerts"); break;
				// case 3: oHashChanger.setHash("device-log"); break;
				//default : console.log(index);		
				
			}
			
			/*To close pane , when menu option clicked*/
			/*var temp = sap.ui.getCore().byId("shellLayout");
			temp.setShowPane(false);*/
		
		}//	
	});
});