sap.ui.jsview("ZLeonardo_SharqTanq.view.reports", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq.view.reports
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq.controller.reports";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq.view.reports
	 */
	createContent: function(oController) {

		var midTile1 = new sap.m.GenericTile("",{
			header: "Status: Online",
			subheader: "Signal Strength: -64",
			headerImage:  "sap-icon://email",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile2 = new sap.m.GenericTile("",{
			header: "Connected Users",
			subheader: "1",
			headerImage:  "sap-icon://flag",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile3 = new sap.m.GenericTile("",{
			header: "Average TDS",
			subheader: "74 ppm",
			headerImage:  "sap-icon://documents",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile4 = new sap.m.GenericTile("",{
			header: "Water Consumption",
			subheader: "0.449 litre",
			headerImage:  "sap-icon://favorite",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile5 = new sap.m.GenericTile("",{
			header: "Total Users",
			subheader: "485",
			headerImage:  "sap-icon://family-care",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile6 = new sap.m.GenericTile("",{
			header: "Application Users",
			subheader: "Android: 230",
			headerImage:  "sap-icon://iphone",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile7 = new sap.m.GenericTile("",{
			header: "Application Users",
			subheader: "iOS :119",
			headerImage:  "sap-icon://ipad",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile8 = new sap.m.GenericTile("",{
			header: "Refer A Friend",
			subheader: "110",
			headerImage:  "sap-icon://add-contact",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		

		// var midTile9 = new sap.m.GenericTile("",{
		// 	header: "Dashboard",
		// 	subheader: "9795",
		// 	headerImage:  "sap-icon://bbyd-dashboard",
		// 	backgroundImage: "images/bg.png",
		// 	/*tileContent: new sap.m.TileContent({
		// 		unit: "Table ",
		// 		footer: "Graph",
		// 		content: new sap.m.NumericContent({
		// 			value: "1",
		// 			//icon: "sap-icon://chart-table-view"
		// 		})
		// 	}),
		// 	press: function(oEvent) {
		// 		oController.openMachineReport(oEvent);
		// 	}*/
		// }).addStyleClass("analyticTile");
		
		var midTile10 = new sap.m.GenericTile("",{
			header: "Bottle",
			subheader: "4867",
			headerImage:  "sap-icon://lab",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile11 = new sap.m.GenericTile("",{
			header: "Flush",
			subheader: "1254",
			headerImage:  "sap-icon://favorite",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile12 = new sap.m.GenericTile("",{
			header: "Mineral",
			subheader: "1356",
			headerImage:  "sap-icon://measuring-point",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		var midTile13 = new sap.m.GenericTile("",{
			header: "Filter",
			subheader: "998",
			headerImage:  "sap-icon://measuring-point",
			backgroundImage: "images/bg.png",
			/*tileContent: new sap.m.TileContent({
				unit: "Table ",
				footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}*/
		}).addStyleClass("analyticTile");
		
		// var midTile14 = new sap.m.GenericTile("",{
		// 	header: "Reservoir",
		// 	subheader: "1782",
		// 	headerImage:  "sap-icon://documents",
		// 	backgroundImage: "images/bg.png",
		// 	/*tileContent: new sap.m.TileContent({
		// 		unit: "Table ",
		// 		footer: "Graph",
		// 		content: new sap.m.NumericContent({
		// 			value: "1",
		// 			//icon: "sap-icon://chart-table-view"
		// 		})
		// 	}),
		// 	press: function(oEvent) {
		// 		oController.openMachineReport(oEvent);
		// 	}*/
		// }).addStyleClass("analyticTile");
		
		// var midTile15 = new sap.m.GenericTile("",{
		// 	header: "About",
		// 	subheader: "680",
		// 	headerImage:  "sap-icon://home",
		// 	backgroundImage: "images/bg.png",
		// 	/*tileContent: new sap.m.TileContent({
		// 		unit: "Table ",
		// 		footer: "Graph",
		// 		content: new sap.m.NumericContent({
		// 			value: "1",
		// 			//icon: "sap-icon://chart-table-view"
		// 		})
		// 	}),
		// 	press: function(oEvent) {
		// 		oController.openMachineReport(oEvent);
		// 	}*/
		// }).addStyleClass("analyticTile");
		
		// var midTile16 = new sap.m.GenericTile("",{
		// 	header: "Profile",
		// 	subheader: "867",
		// 	headerImage:  "sap-icon://person-placeholder",
		// 	backgroundImage: "images/bg.png",
		// 	/*tileContent: new sap.m.TileContent({
		// 		unit: "Table ",
		// 		footer: "Graph",
		// 		content: new sap.m.NumericContent({
		// 			value: "1",
		// 			//icon: "sap-icon://chart-table-view"
		// 		})
		// 	}),
		// 	press: function(oEvent) {
		// 		oController.openMachineReport(oEvent);
		// 	}*/
		// }).addStyleClass("analyticTile");

		var oPanel0 = new sap.m.Panel({
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			//headerText: "Panel Header",
			content: [midTile1 , midTile2 , midTile3 , midTile4 , midTile5 , midTile6 , midTile7 , midTile8, /*midTile9 ,*/ midTile10 , midTile11 , midTile12 , midTile13 /*, midTile14 , midTile15 , midTile16*/ ]
		});
	
	
		var tile1 = new sap.m.GenericTile({
			header: "Machine Directory",
			subheader: "Report",
			headerImage:  "sap-icon://machine",
			tileContent: new sap.m.TileContent({
				unit: "Table ",
				// footer: "Graph",
				content: new sap.m.NumericContent({
					value: "1",
					//icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openMachineReport(oEvent);
			}
		});
		
		var tile2 = new sap.m.GenericTile({
			header: "Average TDS",
			subheader: "Report",
			headerImage:  "sap-icon://lab",
			tileContent: new sap.m.TileContent({
				unit: "Table ",
				// footer: "Graph",
				content: new sap.m.NumericContent({
					value: "2",
					// icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openTDSReport(oEvent);
			}
		});
		
		var tile3 = new sap.m.GenericTile({
			header: "Customer Details",
			subheader: "Report",
			headerImage:  "sap-icon://customer-view",
			tileContent: new sap.m.TileContent({
				unit: "Table ",
				// footer: "Graph",
				content: new sap.m.NumericContent({
					value: "3",
					// icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openCustomerReport(oEvent);
			}
		});
		
		var tile4 = new sap.m.GenericTile({
			header: "Water Consumption",
			subheader: "Report",
			headerImage:  "sap-icon://lab",
			tileContent: new sap.m.TileContent({
				unit: "Table ",
				// footer: "Graph",
				content: new sap.m.NumericContent({
					value: "4",
					// icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openWaterReport(oEvent);
			}
		});
		
		var tile5 = new sap.m.GenericTile({
			header: "IoT Service Request",
			subheader: "Report",
			headerImage:  "sap-icon://developer-settings",
			tileContent: new sap.m.TileContent({
				unit: "Table ",
				// footer: "Graph",
				content: new sap.m.NumericContent({
					value: "5",
					// icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openServiceRequestReport(oEvent);
			}
		});
		
		var tile6 = new sap.m.GenericTile({
			header: "Connected Users",
			subheader: "Report",
			headerImage:  "sap-icon://family-care",
			tileContent: new sap.m.TileContent({
				unit: "Table ",
				// footer: "Graph",
				content: new sap.m.NumericContent({
					value: "6",
					// icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openConnectedUsersReport(oEvent);
			}
		});
		
		var tile7 = new sap.m.GenericTile({
			header: "Firmware Details",
			subheader: "Report",
			headerImage:  "sap-icon://machine",
			tileContent: new sap.m.TileContent({
				unit: "Table ",
				//footer: "Graph",
				content: new sap.m.NumericContent({
					value: "7",
					// icon: "sap-icon://chart-table-view"
				})
			}),
			press: function(oEvent) {
				oController.openFirmwareReport(oEvent);
			}
		});

		var oPanel = new sap.m.Panel({
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			//headerText: "Panel Header",
			content: [tile1 , tile2 , tile3, tile4, tile5, tile6, tile7 ]
		});

		return [ oPanel0 , oPanel ] ;

	}

});