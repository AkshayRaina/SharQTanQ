sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZLeonardo_SharqTanq.controller.BusinessPartner", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZLeonardo_SharqTanq.view.BusinessPartner
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZLeonardo_SharqTanq.view.BusinessPartner
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZLeonardo_SharqTanq.view.BusinessPartner
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZLeonardo_SharqTanq.view.BusinessPartner
		 */
		//	onExit: function() {
		//
		//	}
		
		onClickAssignButton: function(oEvent){
			jQuery.sap.require("sap.m.MessageBox");
			
			sap.m.MessageBox.show("BP has been Assigned. Service No. is 009849",{
				icon: sap.m.MessageBox.Icon.SUCCESS,
				title: "Success"
			});
		}
		
		

	});

});