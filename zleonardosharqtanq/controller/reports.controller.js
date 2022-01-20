sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZLeonardo_SharqTanq.controller.reports", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZLeonardo_SharqTanq.view.reports
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZLeonardo_SharqTanq.view.reports
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZLeonardo_SharqTanq.view.reports
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZLeonardo_SharqTanq.view.reports
		 */
		//	onExit: function() {
		//
		//	}

		openMachineReport: function() {
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

		openTDSReport: function() {
			var shellLayout = new sap.ui.getCore().byId("shellLayout");

			var tdsReport = sap.ui.getCore().byId('tds-report');
			if (tdsReport === undefined) {
				tdsReport = new sap.ui.view({
					id: "tds-report",
					viewName: "ZLeonardo_SharqTanq.view.tds-report",
					type: sap.ui.core.mvc.ViewType.JS,
					clearTarget: true,
					targetAggregation: "content"
				});
			}

			shellLayout.removeAllContent();
			shellLayout.addContent(tdsReport);

			return shellLayout;
		},
		
		openCustomerReport:function() {
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
		
		openWaterReport: function() {
			var shellLayout = new sap.ui.getCore().byId("shellLayout");

			var waterReport = sap.ui.getCore().byId('water-report');
			if (waterReport === undefined) {
				waterReport = new sap.ui.view({
					id: "water-report",
					viewName: "ZLeonardo_SharqTanq.view.water-report",
					type: sap.ui.core.mvc.ViewType.JS,
					clearTarget: true,
					targetAggregation: "content"
				});
			}

			shellLayout.removeAllContent();
			shellLayout.addContent(waterReport);

			return shellLayout;
		},
		
		openServiceRequestReport: function() {
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
		
		openConnectedUsersReport: function() {
			var shellLayout = new sap.ui.getCore().byId("shellLayout");

			var connectedUsersReport = sap.ui.getCore().byId('connected-users-report');
			if (connectedUsersReport === undefined) {
				connectedUsersReport = new sap.ui.view({
					id: "connected-users-report",
					viewName: "ZLeonardo_SharqTanq.view.connected-users-report",
					type: sap.ui.core.mvc.ViewType.JS,
					clearTarget: true,
					targetAggregation: "content"
				});
			}

			shellLayout.removeAllContent();
			shellLayout.addContent(connectedUsersReport);

			return shellLayout;
		},
		
		openFirmwareReport: function() {
			var shellLayout = new sap.ui.getCore().byId("shellLayout");

			var firmwareReport = sap.ui.getCore().byId('firmware-report');
			if (firmwareReport === undefined) {
				firmwareReport = new sap.ui.view({
					id: "firmware-report",
					viewName: "ZLeonardo_SharqTanq.view.firmware-report",
					type: sap.ui.core.mvc.ViewType.JS,
					clearTarget: true,
					targetAggregation: "content"
				});
			}

			shellLayout.removeAllContent();
			shellLayout.addContent(firmwareReport);

			return shellLayout;
		},
		

	});

});