sap.ui.jsview("ZLeonardo_SharqTanq_BP.view.dashboard", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq_BP.view.dashboard
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq_BP.controller.dashboard";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq_BP.view.dashboard
	 */
	createContent: function(oController) {

		var oGenericTile1 = new sap.m.GenericTile({
			backgroundImage: "images/",
			frameType: "TwoByOne",
			header: "Refridgerator",
			subheader: "Total Units: 10",
			// failedText: "Failed Text",
			// size: "",
			// state:"",
			// press: function(oEvent) {
			// 	oController.waterReport(oEvent);
			// },
			tileContent: new sap.m.TileContent({
				content: new sap.m.NewsContent({
					contentText: "Units Manufactured: 2",
					subheader: "Faulty Machines: 1"
				}),
				footer: "Units Online: 1"
			})
		});

		/*var oGenericTile2 = new sap.m.GenericTile({
			backgroundImage: "images/tile2.png",
			frameType: "TwoByOne",
			header: "Header",
			subheader: "Subheader",
			//failedText: "Failed Text",
			//size: "",
			//state:"",
			press: function(oEvent) {
				oController.pressOnTileTwo(oEvent);
			},
			tileContent: new sap.m.TileContent({
				footer: "August 21, 2016",
				content: new sap.m.NewsContent({
					contentText: "Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe",
					subheader: "Today, SAP News"
				})
			})
		});*/

		var oSlideTile1 = new sap.m.SlideTile({
			tiles: [oGenericTile1, /*oGenericTile2*/ ]
		});

		var oGenericTile3 = new sap.m.GenericTile({
			backgroundImage: "images/",
			frameType: "TwoByOne",
			header: "Customer Registration",
			subheader: "Sold(IR Raised): 0",
			//failedText: "Failed Text",
			//size: "",
			//state:"",
			/*press: function(oEvent) {
				oController.customerReport(oEvent);
			},*/
			tileContent: new sap.m.TileContent({
				content: new sap.m.NewsContent({
					contentText: "Installed(IR Confirmed): 0",
					subheader: "App Registration: 37"
				}),
				footer: "Users Online: 1"
			})
		});

		/*var oGenericTile4 = new sap.m.GenericTile({
			backgroundImage: "images/tile1.png",
			frameType: "TwoByOne",
			header: "Header",
			subheader: "Subheader",
			//failedText: "Failed Text",
			//size: "",
			//state:"",
			press: function(oEvent) {
				oController.pressOnTileOne(oEvent);
			},
			tileContent: new sap.m.TileContent({
				footer: "August 21, 2016",
				content: new sap.m.NewsContent({
					contentText: "SAP Unveils Powerful New Player Comparision Tool Exclusively on NFL.com",
					subheader: "Today, SAP News"
				})
			})
		});*/

		var oSlideTile2 = new sap.m.SlideTile({
			tiles: [oGenericTile3, /*oGenericTile4*/ ]
		});

		var oGenericTile5 = new sap.m.GenericTile({
			backgroundImage: "images/",
			frameType: "TwoByOne",
			header: "Service Requests Machine",
			subheader: "Installation: 0",
			//failedText: "Failed Text",
			//size: "",
			//state:"",
			/*press: function(oEvent) {
				oController.serviceReport(oEvent);
			},*/
			tileContent: new sap.m.TileContent({
				content: new sap.m.NewsContent({
					contentText: "Request Alerts (Refrigerator): 401",
					subheader: "Request Alerts (Customer): 819"
				}),
				footer: "Alerts: 1310"
			})
		});

		/*	var oGenericTile6 = new sap.m.GenericTile({
				backgroundImage: "images/tile2.png",
				frameType: "TwoByOne",
				header: "Header",
				subheader: "Subheader",
				//failedText: "Failed Text",
				//size: "",
				//state:"",
				press: function(oEvent) {
					oController.pressOnTileTwo(oEvent);
				},
				tileContent: new sap.m.TileContent({
					footer: "August 21, 2016",
					content: new sap.m.NewsContent({
						contentText: "Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe",
						subheader: "Today, SAP News"
					})
				})
			});*/

		var oSlideTile3 = new sap.m.SlideTile({
			tiles: [oGenericTile5, /*oGenericTile6*/ ]
		});

		var oPanel1 = new sap.m.Panel({
			expandable: false,
			expanded: true,
			//headerText: "Panel Header",
			content: [oSlideTile1, oSlideTile2, oSlideTile3]
		});


// var oMap = new sap.ui.vbm.AnalyticMap({
		// 	id: "mapId",
		// 	width: "640px",
		// 	height: "500px",
		// 	navControlVisible: true,
		// 	/*resources: new sap.ui.vbm.Resource({
		// 		name: "PinGreen.png",
		// 		src: "images/pingreen.png"
		// 	}),*/
		// 	vos: new sap.ui.vbm.Spots({
		// 		items: [
		// 			new sap.ui.vbm.Spot({
		// 				position: " 77.630592; 12.897681 ;0",
		// 				tooltip: "Quinnox Consultancy Services Ltd",
		// 				icon: "sap-icon://map",
		// 				click: function(oEvent) {
		// 					oController.spotClick(oEvent);
		// 				}
		// 			}),
		// 			new sap.ui.vbm.Spot({
		// 				position: " 77.1025; 28.7041 ;0",
		// 				tooltip: "Delhi",
		// 				icon: "sap-icon://map",
		// 				click: function(oEvent) {
		// 					// oController.spotClick(oEvent);
		// 				}
		// 			}),
		// 			new sap.ui.vbm.Spot({
		// 				position: "-122.057543; 37.387474; ;0 ",
		// 				tooltip: "Silicon Valley",
		// 				icon: "sap-icon://map",
		// 				click: function(oEvent) {
		// 					// oController.spotClick(oEvent);
		// 				}
		// 			}),
		// 			new sap.ui.vbm.Spot({
		// 				position: " -88.199565 ; 41.806360 ;0 ",
		// 				tooltip: "Quinnox Inc, Chicago",
		// 				icon: "sap-icon://map",
		// 				click: function(oEvent) {
		// 					// oController.spotClick(oEvent);
		// 				}
		// 			})
		// 		]
		// 	})
		// });

		var sTile1 = new sap.m.ObjectListItem("sTile1Id", {
			title: "Water Usage",
			intro: "Across India",
			number: "4785.13",
			numberUnit: "Ltr",
			// icon: "images/drop.png",
			markFavorite: true,
			markFlagged: true,
			showMarkers: true
		}).addStyleClass("addTileClass1");

		var sTile2 = new sap.m.ObjectListItem("sTile2Id", {
			title: "Optimum Temperature",
			intro: "Perishable Food",
			number: "3 to 5",
			numberUnit: "°C",
			// icon: "images/",
			markFavorite: true,
			markFlagged: true,
			showMarkers: true
		}).addStyleClass("addTileClass2");

		var oMap1 = new ref.google.Map({
			//address: "Quinnox Consultancy Services Ltd."
			address: "7, Hongasandra Main Rd, Hongasandra, Bengaluru, Karnataka 560068, India"
		});

		var oPanelMap = new sap.m.Panel({
			content: [oMap1]
		});

		var layout = new sap.ui.layout.HorizontalLayout("layoutId", {
			content: [
				//oMap,
				oPanelMap,
				new sap.ui.layout.VerticalLayout("layId", {
					content: [
						sTile1,
						sTile2
					]
				})
			]

		});

		var oPanel2 = new sap.m.Panel({
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			//headerText: "Panel Header",
			content: [layout]
		});
	

		return [oPanel1, oPanel2 ];

	}

});