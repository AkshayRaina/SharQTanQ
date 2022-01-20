sap.ui.jsview("ZLeonardo_SharqTanq_BP.view.product_BP", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq_BP.view.product_BP
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq_BP.controller.product_BP";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq_BP.view.product_BP
	 */
	createContent: function(oController) {

		sap.ui.getCore().loadLibrary("sap.viz");
		
		var modelData1 = {
                data:[
                    {week :1,tds:"2PM"},
                    {week :0,tds:"3PM"},
                    {week :0,tds:"4PM"},
                    {week :0,tds:"5PM"},
                    {week :1,tds:"6PM"},
                    {week :0,tds:"7PM"},
                    {week :0,tds:"8PM"},
                    {week :0,tds:"9PM"},
                    {week :1,tds:"10PM"},
                    {week :0,tds:"11PM"}
                    ]
        };
              
        var datasetData1 = {
            dimensions : [
                {axis : 1, name: "Hour", value: "{tds}"},
                //{axis : 2, name: "TDS", value: "{tds}"}
            ],
            measures : [
                //{group: 2, name : "TDS", value : "{tds}"},
                {group: 1, name : "ON/OFF COUNT", value : "{week}"}
            ],
            data : {
                path : "/data"
            }
        };
        
        var oDataset1 = new sap.viz.core.FlattenedDataset(datasetData1);
        var oModel1 = new sap.ui.model.json.JSONModel(modelData1);
        oDataset1.setModel(oModel1);
          
        var oChart1 = new sap.viz.ui5.Bar({
            id: "Column1",
    		width : "80%",
            height : "400px",
            plotArea: {
            //	'colorPalette': d3.scale.category20().range	
            },
            title: {
                visible : true,
                text : "ON/OFF STATUS"
            },
            dataset: oDataset1
        });
        
        
        
        ////////////////////////////////////////////////////////////////
        
        
        
        
        var modelData2 = {
            data:[
                    {week :4.6,tds:"2PM"},
                    {week :4.9,tds:"3PM"},
                    {week :4.8,tds:"4PM"},
                    {week :4,tds:"5PM"},
                    {week :4.9,tds:"6PM"},
                    {week :5.2,tds:"7PM"},
                    {week :4.3,tds:"8PM"},
                    {week :4.8,tds:"9PM"},
                    {week :3.8,tds:"10PM"},
                    {week :3.7,tds:"11PM"}
                    ]
              };
              
        var datasetData2 = {
            dimensions : [
                {axis : 1, name: "Hour", value: "{tds}"},
                //{axis : 2, name: "TDS", value: "{tds}"}
            ],
            measures : [
                //{group: 2, name : "TDS", value : "{tds}"},
                {group: 1, name : "Temperature", value : "{week}"}
            ],
            data : {
                path : "/data"
            }
        };
        
        var oDataset2 = new sap.viz.core.FlattenedDataset(datasetData2);
        var oModel2 = new sap.ui.model.json.JSONModel(modelData2);
        oDataset2.setModel(oModel2);
          
        var oChart2 = new sap.viz.ui5.Column({
            id: "Column2",
    		width : "80%",
            height : "400px",
            plotArea: {
            //	'colorPalette': d3.scale.category20().range	
            },
            title: {
                visible : true,
                text : "AVERAGE TEMPERATURE (IN °C)"
            },
            dataset: oDataset2
        });
        
        
        //////////////////////////////////////////////////////////////
        
        
        
        
        var modelData3 = {
             data:[
                    {week :2.5,tds:"2PM"},
                    {week :1.4,tds:"3PM"},
                    {week :1.9,tds:"4PM"},
                    {week :2.1,tds:"5PM"},
                    {week :2.7,tds:"6PM"},
                    {week :1.9,tds:"7PM"},
                    {week :2.1,tds:"8PM"},
                    {week :2,tds:"9PM"},
                    {week :1.9,tds:"10PM"},
                    {week :2,tds:"11PM"}
                    ]
              };
              
        var datasetData3 = {
            dimensions : [
                {axis : 1, name: "Hour", value: "{tds}"},
                //{axis : 2, name: "TDS", value: "{tds}"}
            ],
            measures : [
                //{group: 2, name : "TDS", value : "{tds}"},
                {group: 1, name : "Duration", value : "{week}"}
            ],
            data : {
                path : "/data"
            }
        };
        
        var oDataset3 = new sap.viz.core.FlattenedDataset(datasetData3);
        var oModel3 = new sap.ui.model.json.JSONModel(modelData3);
        oDataset3.setModel(oModel3);
          
        var oChart3 = new sap.viz.ui5.Line({
            id: "Column3",
    		width : "80%",
            height : "400px",
            plotArea: {
            //	'colorPalette': d3.scale.category20().range	
            },
            title: {
                visible : true,
                text : "AVERAGE DURATION OF DOOR OPENINGS (IN SEC)"
            },
            dataset: oDataset3
        });
        
        
        
        ///////////////////////////////////////////////////////////////
        
        
        var modelData4 = {
             data:[
                    {week :9,tds:"2PM"},
                    {week :0,tds:"3PM"},
                    {week :10,tds:"4PM"},
                    {week :11,tds:"5PM"},
                    {week :14,tds:"6PM"},
                    {week :13,tds:"7PM"},
                    {week :10,tds:"8PM"},
                    {week :0,tds:"9PM"},
                    {week :3,tds:"10PM"},
                    {week :2,tds:"11PM"}
                    ]
              };
              
              
        var datasetData4 = {
            dimensions : [
                {axis : 1, name: "Hour", value: "{tds}"},
                //{axis : 2, name: "TDS", value: "{tds}"}
            ],
            measures : [
                //{group: 2, name : "TDS", value : "{tds}"},
                {group: 1, name : "Number", value : "{week}"}
            ],
            data : {
                path : "/data"
            }
        };
        
        var oDataset4 = new sap.viz.core.FlattenedDataset(datasetData4);
        var oModel4 = new sap.ui.model.json.JSONModel(modelData4);
        oDataset4.setModel(oModel4);
          
        var oChart4 = new sap.viz.ui5.Line({
            id: "Column4",
    		width : "80%",
            height : "400px",
            plotArea: {
            //	'colorPalette': d3.scale.category20().range	
            },
            title: {
                visible : true,
                text : "NUMBER OF DOOR OPENINGS PER HOUR"
            },
            dataset: oDataset4
        });
        
        ////////////////////////////////////////////////////////////////
        
        
        

		var oHBox = new sap.m.HBox({
			alignItems: "Stretch",
			direction: "Row",
			fitContainer: false,
			width: "auto",
			height: "auto",
			justifyContent: "Start",
			renderType: "Div",
			visible: true,
			displayInline: false,
			items: [
				new sap.m.VBox({
					direction: "Column",
					fitContainer: false,
					height: "724.515625px",
					width: "280px",
					justifyContent: "Center",
					renderType: "Div",
					visible: true,
					displayInline: false,
					items: [
						new sap.m.Image({
							src: "images/fridge.jpg",
							height: "550px",
							width: "265px",
							densityAware: false,
							press: function() {
								oController._onImagePress1();
							}
						}),
						new sap.m.Image({
							src: "images/map-location.png",
							height: "300.046875px",
							width: "265px",
							densityAware: false
						}),
						new sap.m.Text({
							text: "Current Location: Refrigerator 1 at Quinnox",
							width: "196.25px",
							maxLines: 2,
							wrapping: true,
							textAlign: "Center",
							textDirection: "Inherit"
						})
					]
				}),
				new sap.m.VBox({
					alignItems: "Center",
					direction: "Column",
					fitContainer: false,
					height: "auto",
					width: "968px",
					justifyContent: "Start",
					renderType: "Div",
					visible: true,
					displayInline: false,
					items: [
						new sap.m.HBox({
							alignItems: "Center",
							direction: "Row",
							fitContainer: false,
							width: "967.40625px",
							height: "59.875px",
							justifyContent: "Center",
							renderType: "Div",
							visible: true,
							displayInline: false,
							items: [
								new sap.m.Title({
									text: "Refrigerator 1",
									titleStyle: "H1",
									width: "auto",
									textAlign: "Center",
									visible: true
								}),
								new sap.m.Text({
									text: "",
									width: "20px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Text({
									text: "",
									width: "20px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								})
							]
						}),
						new sap.m.HBox({
							alignItems: "Center",
							direction: "Row",
							fitContainer: false,
							width: "auto",
							height: "140px",
							justifyContent: "SpaceAround",
							renderType: "Div",
							visible: true,
							displayInline: false,
							items: [
								new sap.m.Title({
									text: "Fridge Id: 1XD799",
									titleStyle: "H4",
									width: "auto",
									textAlign: "Begin",
									visible: true
								}),
								new sap.m.Text({
									text: "",
									width: "10px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Image({
									src: "images/green.png",
									height: "16.34375px",
									width: "16.34375px",
									densityAware: false
								}),
								new sap.m.Text({
									text: "",
									width: "7px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Title({
									text: "Monitored",
									titleStyle: "H4",
									width: "auto",
									textAlign: "Begin",
									visible: true
								}),
								new sap.m.Text({
									text: "",
									width: "10px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Button({
									text: "Geo-Vision",
									icon: "sap-icon://geographic-bubble-chart",
									type: sap.m.ButtonType.Emphasized,
									iconFirst: true,
									width: "auto",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									press: function(oEvent) {
										oController.onClickGeoVision(oEvent);
									}
								}),
								new sap.m.Text({
									text: "",
									width: "10px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Image({
									src: "images/connected2.png",
									height: "25px",
									width: "32.6875px",
									densityAware: false
								}),
								new sap.m.Text({
									text: "",
									width: "8px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Title({
									text: "Connected",
									titleStyle: "H4",
									width: "auto",
									textAlign: "Begin",
									visible: true
								}),
								new sap.m.Text({
									text: "",
									width: "10px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Image({
									src: "images/poweron.png",
									height: "26px",
									width: "16.421875px",
									densityAware: false
								}),
								new sap.m.Text({
									text: "",
									width: "8px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Title({
									text: "OFF",
									titleStyle: "H4",
									width: "auto",
									textAlign: "Begin",
									visible: true
								}),
								new sap.m.Text({
									text: "",
									width: "10px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Image({
									src: "images/bp2.jpg",
									height: "50px",
									width: "70px",
									densityAware: false
								}),
								new sap.m.Text({
									text: "",
									width: "8px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.VBox({
									alignItems: "Stretch",
									direction: "Column",
									fitContainer: false,
									height: "auto",
									width: "auto",
									justifyContent: "Start",
									renderType: "Div",
									visible: true,
									displayInline: false,
									items: [
										new sap.m.Title({
											text: "ADMIN",
											titleStyle: "H4",
											width: "auto",
											textAlign: "Begin",
											visible: true
										}),
										new sap.m.Title({
											text: "Akshay Raina",
											titleStyle: "Auto",
											width: "auto",
											textAlign: "Begin",
											visible: true
										})
									]
								}),
								new sap.m.Text({
									text: "",
									width: "20px",
									maxLines: 1,
									wrapping: false,
									textAlign: "Begin",
									textDirection: "Inherit"
								}),
								new sap.m.Button({
									text: "Notifications",
									iconFirst: true,
									width: "135px",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									icon: "sap-icon://message-popup",
									type: sap.m.ButtonType.Emphasized,
									press: function(oEvent) {
										oController.onClickNotifications(oEvent);
									}
								})
							]
						}),
						new sap.m.HBox({
							alignItems: "Stretch",
							direction: "Row",
							fitContainer: false,
							width: "955.00000000px",
							height: "123.88000000px",
							justifyContent: "SpaceBetween",
							renderType: "Div",
							visible: true,
							displayInline: false,
							items: [
								new sap.m.Label({
									text: "Status: Not Good",
									design: "Bold",
									width: "157px",
									required: false,
									textAlign: "Center",
									textDirection: "Inherit"
								}),
								new sap.m.Image({
									src: "images/reject.png",
									height: "50px",
									width: "50px",
									densityAware: false
								}),
								new sap.m.HBox({
									alignItems: "Center",
									direction: "Row",
									fitContainer: false,
									width: "592.40625px",
									height: "96.9375px",
									justifyContent: "SpaceAround",
									renderType: "Div",
									visible: true,
									displayInline: false,
									items: [
										new sap.m.VBox({
											alignItems: "Stretch",
											direction: "Column",
											fitContainer: false,
											width: "345.046875px",
											height: "85px",
											justifyContent: "Start",
											renderType: "Div",
											visible: true,
											displayInline: false,
											items: [
												new sap.m.Title({
													text: "Notifications (4)",
													titleStyle: "Auto",
													width: "auto",
													textAlign: "Center",
													visible: true
												}),
												new sap.m.Label({
													text: "Gas is leaking",
													design: "Standard",
													width: "319.875px",
													required: false,
													textAlign: "Begin",
													textDirection: "Inherit"
												}),
												new sap.m.Label({
													text: "Freeze Door is open",
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
											width: "151.46875px",
											height: "78px",
											justifyContent: "Start",
											renderType: "Div",
											visible: true,
											displayInline: false,
											items: [
												new sap.m.Text({
													text: "",
													width: "100.46875px",
													maxLines: 1,
													wrapping: false,
													textAlign: "Begin",
													textDirection: "Inherit"
												}),
												new sap.m.Text({
													text: "Dec 4, 2017",
													width: "115.34375px",
													maxLines: 1,
													wrapping: false,
													textAlign: "Begin",
													textDirection: "Inherit"
												}),
												new sap.m.Text({
													text: "Dec 4, 2017",
													width: "114.41000000px",
													maxLines: 1,
													wrapping: false,
													textAlign: "Begin",
													textDirection: "Inherit"
												}),
												new sap.m.Link({
													text: "Read All",
													textAlign: "Begin",
													width: "auto",
													target: "_blank",
													wrapping: false,
													enabled: true,
													visible: true,
													emphasized: false,
													subtle: false,
													press: function(oEvent) {
														oController.onClickNotifications(oEvent);
													}
												})
											]
										})
									]
								})
							]
						}),
						new sap.m.IconTabBar({
							expandable: false,
							expanded: true,
							applyContentPadding: false,
							backgroundDesign: "Solid",
							upperCase: false,
							visible: true,
							selectedKey: "Ok",
							items: [
								new sap.m.IconTabFilter({
									icon: "sap-icon://detail-view",
									iconColor: "Default",
									text: "Key Specs",
									count: "",
									design: "Vertical",
									showAll: false,
									textDirection: "Inherit",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									content: [
										new sap.m.Table({
											width: "100%",
											noDataText: "No data",
											mode: "None",
											showSeparators: "All",
											growing: false,
											growingThreshold: 20,
											growingScrollToLoad: false,
											infoToolbar: [],
											headerToolbar: [],
											columns: [
												new sap.m.Column({
													width: "auto",
													hAlign: "Left",
													vAlign: "Top",
													minScreenWidth: "Tablet",
													demandPopin: true,
													popinDisplay: "Inline",
													mergeDuplicates: false,
													header: [
														new sap.m.Text({
															text: "Detail",
															maxLines: 1,
															width: "auto",
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													],
													footer: []
												}),
												new sap.m.Column({
													width: "auto",
													hAlign: "Left",
													vAlign: "Top",
													minScreenWidth: "Tablet",
													demandPopin: true,
													popinDisplay: "Inline",
													mergeDuplicates: false,
													header: [
														new sap.m.Text({
															text: "Status",
															maxLines: 1,
															width: "auto",
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													],
													footer: []
												})
											],
											items: [
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Compressor",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Bad",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Refrigerant",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Low",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Condenser",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Weak",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Refrigerator Door",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Open",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Shelves",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Shelve two broken",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Ice Maker / Deep Freezer",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Swiched Off",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Digital Display screen or Temperature Controller",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Normal",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												})
											]
										})
									]
								}),
								new sap.m.IconTabFilter({
									icon: "sap-icon://detail-view",
									iconColor: "Default",
									text: "Features",
									count: "",
									design: "Vertical",
									showAll: false,
									textDirection: "Inherit",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									content: [
										new sap.m.Table({
											width: "100%",
											noDataText: "No data",
											mode: "None",
											showSeparators: "All",
											growing: false,
											growingThreshold: 20,
											growingScrollToLoad: false,
											infoToolbar: [],
											headerToolbar: [],
											columns: [
												new sap.m.Column({
													width: "auto",
													hAlign: "Left",
													vAlign: "Top",
													minScreenWidth: "Tablet",
													demandPopin: true,
													popinDisplay: "Inline",
													mergeDuplicates: false,
													header: [
														new sap.m.Text({
															text: "Detail",
															maxLines: 1,
															width: "auto",
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													],
													footer: []
												}),
												new sap.m.Column({
													width: "auto",
													hAlign: "Left",
													vAlign: "Top",
													minScreenWidth: "Tablet",
													demandPopin: true,
													popinDisplay: "Inline",
													mergeDuplicates: false,
													header: [
														new sap.m.Text({
															text: "Type",
															maxLines: 1,
															width: "auto",
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													],
													footer: []
												})
											],
											items: [
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Refrigerator voltage stabilizer",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "V-Guard VG 50 voltage stabilizer",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Refrigerator stand",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Ergonomically well designed",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Refrigerator Deodorizer",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Absorbs smell & controls bacteria growth.",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Ice trays",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Strong ice dispensers",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Refrigerator magnets",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Colorful and aesthetically pleasing magnets",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Removable anti fungal gasket",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Washable gasket",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												})
											]
										})
									]
								}),
								new sap.m.IconTabFilter({
									icon: "sap-icon://detail-view",
									iconColor: "Default",
									text: "New Comforts",
									count: "",
									design: "Vertical",
									showAll: false,
									textDirection: "Inherit",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									content: [
										new sap.m.Table({
											width: "100%",
											noDataText: "No data",
											mode: "None",
											showSeparators: "All",
											growing: false,
											growingThreshold: 20,
											growingScrollToLoad: false,
											infoToolbar: [],
											headerToolbar: [],
											columns: [
												new sap.m.Column({
													width: "auto",
													hAlign: "Left",
													vAlign: "Top",
													minScreenWidth: "Tablet",
													demandPopin: true,
													popinDisplay: "Inline",
													mergeDuplicates: false,
													header: [
														new sap.m.Text({
															text: "Detail",
															maxLines: 1,
															width: "auto",
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													],
													footer: []
												}),
												new sap.m.Column({
													width: "auto",
													hAlign: "Left",
													vAlign: "Top",
													minScreenWidth: "Tablet",
													demandPopin: true,
													popinDisplay: "Inline",
													mergeDuplicates: false,
													header: [
														new sap.m.Text({
															text: "Value",
															maxLines: 1,
															width: "auto",
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													],
													footer: []
												})
											],
											items: [
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Automatic defrosting",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Yes",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Power Failure warning",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Through Alerts by flashing temperature display",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Cabinet rollers",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "For easier cleaning",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Water Filter",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Status indicator to change the filter",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "In-door ice caddy,",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Saves approx 60 litres (2 cu ft) of usable freezer space",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												}),
												new sap.m.ColumnListItem({
													type: "Active",
													cells: [
														new sap.m.Text({
															text: "Fast Freeze",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														}),
														new sap.m.Text({
															text: "Yes",
															width: "auto",
															maxLines: 1,
															wrapping: false,
															textAlign: "Begin",
															textDirection: "Inherit"
														})
													]
												})
											]
										})
									]
								}),
								new sap.m.IconTabSeparator({
									icon: "",
									iconDensityAware: false
								}),
								new sap.m.IconTabFilter({
									icon: "sap-icon://vertical-stacked-chart",
									iconColor: "Default",
									text: "Report 1",
									count: 1,
									design: "Vertical",
									showAll: false,
									textDirection: "Inherit",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									content: [
										new sap.m.HBox({
											alignItems: "Center",
											direction: "Row",
											fitContainer: false,
											width: "auto",
											height: "61px",
											justifyContent: "SpaceBetween",
											renderType: "Div",
											visible: true,
											displayInline: false,
											items: [
												new sap.m.Title({
													text: "ON/OFF STATUS",
													titleStyle: "H5",
													width: "auto",
													textAlign: "Begin",
													visible: true
												}),
												new sap.m.Text({
													text: "",
													width: "370px",
													maxLines: 1,
													wrapping: false,
													textAlign: "Begin",
													textDirection: "Inherit"
												}),
												new sap.m.ComboBox({
													value: "Hourly",
													editable: true,
													enabled: true,
													visible: true,
													width: "177.21875px",
													valueState: "None",
													maxWidth: "100%",
													selectionChange: "",
													items: [
														new sap.ui.core.Item({
															text: "Hourly",
															enabled: true
														}),
														new sap.ui.core.Item({
															text: "Weekly",
															enabled: true
														}),
														new sap.ui.core.Item({
															text: "Monthly",
															enabled: true
														})
													]
												})
											]
										}),
										oChart1
									]
								}),
								new sap.m.IconTabFilter({
									icon: "sap-icon://vertical-stacked-chart",
									iconColor: "Default",
									text: "Report 2",
									count: 2,
									design: "Vertical",
									showAll: false,
									textDirection: "Inherit",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									content: [
										new sap.m.HBox({
											alignItems: "Center",
											direction: "Row",
											fitContainer: false,
											width: "auto",
											height: "61px",
											justifyContent: "SpaceBetween",
											renderType: "Div",
											visible: true,
											displayInline: false,
											items: [
												new sap.m.Title({
													text: "AVERAGE TEMPERATURE (IN °C)",
													titleStyle: "H5",
													width: "auto",
													textAlign: "Begin",
													visible: true
												}),
												new sap.m.Text({
													text: "",
													width: "370px",
													maxLines: 1,
													wrapping: false,
													textAlign: "Begin",
													textDirection: "Inherit"
												}),
												new sap.m.ComboBox({
													value: "Hourly",
													editable: true,
													enabled: true,
													visible: true,
													width: "177.21875px",
													valueState: "None",
													maxWidth: "100%",
													selectionChange: "_onComboBoxSelectionChange5",
													items: [
														new sap.ui.core.Item({
															text: "Hourly",
															enabled: true
														}),
														new sap.ui.core.Item({
															text: "Weekly",
															enabled: true
														}),
														new sap.ui.core.Item({
															text: "Monthly",
															enabled: true
														})
													]
												})
											]
										}),
										oChart2
									]
								}),

								new sap.m.IconTabFilter({
									icon: "sap-icon://vertical-stacked-chart",
									iconColor: "Default",
									text: "Report 3",
									count: 3,
									design: "Vertical",
									showAll: false,
									textDirection: "Inherit",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									content: [
										new sap.m.HBox({
											alignItems: "Center",
											direction: "Row",
											fitContainer: false,
											width: "auto",
											height: "61px",
											justifyContent: "SpaceBetween",
											renderType: "Div",
											visible: true,
											displayInline: false,
											items: [
												new sap.m.Title({
													text: "AVG DURATION OF DOOR OPENINGS(IN SEC)",
													titleStyle: "Auto",
													width: "auto",
													textAlign: "Begin",
													visible: true
												}),
												new sap.m.Text({
													text: "",
													width: "370.578125px",
													maxLines: 1,
													wrapping: false,
													textAlign: "Begin",
													textDirection: "Inherit"
												}),
												new sap.m.ComboBox({
													value: "Hourly",
													editable: true,
													enabled: true,
													visible: true,
													width: "177.21875px",
													valueState: "None",
													maxWidth: "100%",
													selectionChange: "_onComboBoxSelectionChange5",
													items: [
														new sap.ui.core.Item({
															text: "Hourly",
															enabled: true
														}),
														new sap.ui.core.Item({
															text: "Weekly",
															enabled: true
														}),
														new sap.ui.core.Item({
															text: "Monthly",
															enabled: true
														})
													]
												})
											]
										}),
										oChart3
									]
								}),

								new sap.m.IconTabFilter({
									icon: "sap-icon://vertical-stacked-chart",
									iconColor: "Default",
									text: "Report 4",
									count: 4,
									design: "Vertical",
									showAll: false,
									textDirection: "Inherit",
									enabled: true,
									visible: true,
									iconDensityAware: false,
									content: [
										new sap.m.HBox({
											alignItems: "Center",
											direction: "Row",
											fitContainer: false,
											width: "auto",
											height: "61px",
											justifyContent: "SpaceBetween",
											renderType: "Div",
											visible: true,
											displayInline: false,
											items: [
												new sap.m.Title({
													text: "NUMBER OF DOOR OPENINGS / HR",
													titleStyle: "Auto",
													width: "auto",
													textAlign: "Begin",
													visible: true
												}),
												new sap.m.Text({
													text: "",
													width: "370.46875px",
													maxLines: 1,
													wrapping: false,
													textAlign: "Begin",
													textDirection: "Inherit"
												}),
												new sap.m.ComboBox({
													value: "Hourly",
													editable: true,
													enabled: true,
													visible: true,
													width: "177.21875px",
													valueState: "None",
													maxWidth: "100%",
													selectionChange: "_onComboBoxSelectionChange7",
													items: [
														new sap.ui.core.Item({
															text: "Hourly",
															enabled: true
														}),
														new sap.ui.core.Item({
															text: "Weekly",
															enabled: true
														}),
														new sap.ui.core.Item({
															text: "Monthly",
															enabled: true
														})
													]
												})
											]
										}),
										oChart4
									]
								})
							]
						})
					]
				})
			]
		});

		jQuery.sap.require("sap.m.MessageBox");
		
		var temp = sap.m.MessageBox.show("Error Id is ERR-8973-ID, Please carry new condensor.",{
			icon: sap.m.MessageBox.Icon.SUCCESS,
			title: "Success"
		});

		return [oHBox, temp];
	}

});