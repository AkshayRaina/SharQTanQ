sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZLeonardo_SharqTanq_BP.controller.product_BP", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZLeonardo_SharqTanq_BP.view.product_BP
		 */
		onInit: function() {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZLeonardo_SharqTanq_BP.view.product_BP
		 */
		onBeforeRendering: function() {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZLeonardo_SharqTanq_BP.view.product_BP
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZLeonardo_SharqTanq_BP.view.product_BP
		 */
		//	onExit: function() {
		//
		//	}

		onClickGeoVision: function(oevent) {

			var oFridgeMap = new sap.ui.vbm.AnalyticMap({
				//id: "mapId",
				width: "600px",
				height: "450px",
				navControlVisible: true,
				/*resources: new sap.ui.vbm.Resource({
					name: "PinGreen.png",
					src: "images/pingreen.png"
				}),*/
				vos: new sap.ui.vbm.Spots({
					items: [new sap.ui.vbm.Spot({
						position: " 77.630592; 12.897681 ;0",
						tooltip: "Quinnox Consultancy Services Ltd",
						icon: "sap-icon://map",
						/*click: function(oEvent) {
							spotClick(oEvent);
						}*/
					})]
				})
			});

			var oDialog = new sap.m.Dialog({
				title: "Refrigerator 1 Location",
				resizable: true,
				draggable: true,
				type: sap.m.DialogType.Message,
				content: [oFridgeMap],
				endButton: new sap.m.Button({
					text: "Close",
					type: sap.m.ButtonType.Emphasized,
					press: function() {
						oDialog.close();
					}
				})
			});

			oDialog.open();

		},

		onClickNotifications: function(oEvent) {

			var oNotifDialog = new sap.m.Dialog({
				horizontalScrolling: true,
				showHeader: true,
				state: "None",
				stretch: false,
				title: "Notifications",
				type: "Standard",
				verticalScrolling: true,
				content: [
					new sap.m.HBox({
						alignItems: "Stretch",
						direction: "Row",
						fitContainer: false,
						width: "703.9931640625px",
						height: "107.93403625488281px",
						justifyContent: "SpaceAround",
						renderType: "Div",
						visible: true,
						displayInline: false,
						items: [
							new sap.m.VBox({
								alignItems: "Stretch",
								direction: "Column",
								fitContainer: false,
								width: "auto",
								height: "auto",
								justifyContent: "Start",
								renderType: "Div",
								visible: true,
								displayInline: false,
								items: [
									new sap.m.Title({
										text: "You have 4 Notifications.",
										titleStyle: "Auto",
										width: "auto",
										textAlign: "Begin",
										visible: true
									}),
									new sap.m.Label({
										text: "The Cooler SMRTFL-DE-129 is having open door.",
										design: "Standard",
										width: "100%",
										required: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									}),
									new sap.m.Label({
										text: "Over Loading of Side Panels.",
										design: "Standard",
										width: "100%",
										required: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									}),
									new sap.m.Label({
										text: "Temperature level decreased beyond normal.",
										design: "Standard",
										width: "100%",
										required: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									}),
									new sap.m.Label({
										text: "Ice Cooler not working due to excessive heat.",
										design: "Standard",
										width: "100%",
										required: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									})
								]
							}),
							new sap.m.VBox({
								alignItems: "Stretch",
								direction: "Column",
								fitContainer: false,
								width: "auto",
								height: "auto",
								justifyContent: "Start",
								renderType: "Div",
								visible: true,
								displayInline: false,
								items: [
									new sap.m.Text({
										text: "",
										width: "65px",
										maxLines: 1,
										wrapping: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									}),
									new sap.m.Text({
										text: "Dec 4, 2017",
										width: "100px",
										maxLines: 1,
										wrapping: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									}),
									new sap.m.Text({
										text: "Dec 4, 2017",
										width: "100px",
										maxLines: 1,
										wrapping: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									}),
									new sap.m.Text({
										text: "Dec 4, 2017",
										width: "100px",
										maxLines: 1,
										wrapping: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									}),
									new sap.m.Text({
										text: "Dec 4, 2017",
										width: "100px",
										maxLines: 1,
										wrapping: false,
										textAlign: "Begin",
										textDirection: "Inherit"
									})
								]
							})
						]
					})
				],
				endButton: new sap.m.Button({
					text: "OK",
					type: sap.m.ButtonType.Emphasized,
					press: function() {
						oNotifDialog.close();
					}
				})
			});

			oNotifDialog.open();

		},
		
		openBusinessPartnerView: function(oEvent){
			window.open("#/BusinessPartner");
		}


	});

});