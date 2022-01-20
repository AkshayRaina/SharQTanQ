sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("ZLeonardo_SharqTanq.controller.dashboard", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZLeonardo_SharqTanq.view.dashboard
		 */
		onInit: function() {
		
		
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZLeonardo_SharqTanq.view.dashboard
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZLeonardo_SharqTanq.view.dashboard
		 */
			onAfterRendering: function() {
				// sap.ui.getCore().byId("shellLayout").setShowPane("false");
			},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZLeonardo_SharqTanq.view.dashboard
		 */
			onExit: function() {
				// sap.ui.getCore().byId("shellLayout").setShowPane("false");
			},
		
		waterReport: function(){
			var shellLayout = new sap.ui.getCore().byId("shellLayout");

			var machineReport = sap.ui.getCore().byId('machine-report');
			if (machineReport === undefined) {
				machineReport = new sap.ui.view({
					id: "machine-report",
					viewName: "ZLeonardo_SharqTanq.view.machine-report",
					type: sap.ui.core.mvc.ViewType.JS,
					clearTarget: true,
					targetAggregation: "content"
				});
			}

			shellLayout.removeAllContent();
			shellLayout.addContent(machineReport);

			return shellLayout;
		},
		
		customerReport: function(){
			var shellLayout = new sap.ui.getCore().byId("shellLayout");

			var customerReport = sap.ui.getCore().byId('customer-report');
			if (customerReport === undefined) {
				customerReport = new sap.ui.view({
					id: "customer-report",
					viewName: "ZLeonardo_SharqTanq.view.customer-report",
					type: sap.ui.core.mvc.ViewType.JS,
					clearTarget: true,
					targetAggregation: "content"
				});
			}

			shellLayout.removeAllContent();
			shellLayout.addContent(customerReport);

			return shellLayout;	
		},
		
		serviceReport: function(){
			var shellLayout = new sap.ui.getCore().byId("shellLayout");

			var serviceRequestReport = sap.ui.getCore().byId('service-request-report');
			if (serviceRequestReport === undefined) {
				serviceRequestReport = new sap.ui.view({
					id: "service-request-report",
					viewName: "ZLeonardo_SharqTanq.view.service-request-report",
					type: sap.ui.core.mvc.ViewType.JS,
					clearTarget: true,
					targetAggregation: "content"
				});
			}

			shellLayout.removeAllContent();
			shellLayout.addContent(serviceRequestReport);

			return shellLayout;
		},
		
		spotClick: function(){
			 window.open("http://www.quinnox.com");
		}
	});

});