sap.ui.jsview("ZLeonardo_SharqTanq.view.water-report", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq.view.water-report
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq.controller.water-report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq.view.water-report
	 */
	createContent: function(oController) {

		sap.ui.getCore().loadLibrary("sap.viz");
    
    	var oXSModel = new sap.ui.model.json.JSONModel("/XSHANA/AKSHAY/dev/myproducts/services.xsodata/WLSensor", false); //connected with destination through neo-app

		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{G_DEVICE}"
				}),
				new sap.m.Text({
				 	value: "{G_CREATED}"
				}).bindProperty("text", {
						parts: [
				        	{path: "G_CREATED", type: new sap.ui.model.type.String()}
				    	],
				    	formatter: function(G_CREATED){	//Added by Akshay Raina
					       
					    	/*var date = G_CREATED;
					    	var date1 = date.substr(6,13);
					    	var date2 = Number(date1);
					    	var ret = new Date(date2).toUTCString(); 
					    	return ret;  */
							if(G_CREATED !== null){					       
								var timestamp = new Date(Number(G_CREATED.substr(6,13))).toUTCString();      
							  	return timestamp.toString();  
				    		}
				    	}
				}),	
				new sap.m.Text({
					text: "{C_CONSUMPTIONVALUE}"
				})
			]
		});
 
		var oTempTable = new sap.m.Table("oTempTableId",{
			headerText: "Water Consumption Data Table",
			editable: false,
			inset : true,
			enableBusyIndicator : true,
			modeAnimationOn : true,
			growing: true,
			growingThreshold: 5,
			growingScrollToLoad: true,
			growingTriggerText : "Load More Data",
			
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Device"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Timestamp"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Consumption Level"
					})]
				})
				]
		});
		oTempTable.setModel(oXSModel);
		oTempTable.bindItems("/d/results", oTemplate, null);
              
        var oTempDatasetData = {
            dimensions : [
                {axis : 1, name: "Timestamp", value: "{G_CREATED}"}
            ],
            measures : [
                {group: 1, name : "Level", value : "{C_CONSUMPTIONVALUE}"}
            ],
            data : {
                path : "/d/results"
            }
        };
        
        var oTempDataset = new sap.viz.core.FlattenedDataset(oTempDatasetData);
        oTempDataset.setModel(oXSModel);
          
        var oChart1 = new sap.viz.ui5.Line({
            id: "chart1Id",
    		width : "80%",
            height : "400px",
            plotArea: {	
            },
            title: {
                visible : true,
                text : "Water Consumption Live Report"
            },
            dataset: oTempDataset
        });
       
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        var graphModelData = {
                data:[
                    {week :"Week 1",water:79},
                    {week :"Week 2",water:77},
                    {week :"Week 3",water:75},
                    {week :"Week 4",water:77},
                    {week :"Week 5",water:81},
                    {week :"Week 6",water:77}
                    ]
              };
              
        var datasetData = {
            dimensions : [
                {axis : 1, name: "Week", value: "{week}"},
                //{axis : 2, name: "TDS", value: "{water}"}
            ],
            measures : [
                //{group: 2, name : "TDS", value : "{tds}"},
                {group: 1, name : "Water", value : "{water}"}
            ],
            data : {
                path : "/data"
            }
        };
        
        var oDataset = new sap.viz.core.FlattenedDataset(datasetData);
        var oModel = new sap.ui.model.json.JSONModel(graphModelData);
        oDataset.setModel(oModel);
          
        var oChart = new sap.viz.ui5.Line({
            id: "Line2",
    		width : "80%",
            height : "400px",
            plotArea: {
            //	'colorPalette': d3.scale.category20().range	
            },
            title: {
                visible : true,
                text : "Water Consumption Report"
            },
            dataset: oDataset
        });
        
        
        

		var comboBoxTemplate = new sap.ui.core.ListItem({
			text:"{text}",
			key:"{key}"
		});
		
		var comboBoxModel = new sap.ui.model.json.JSONModel();
		comboBoxModel.loadData('model/comboBox.json');	
		
		var oLayout = new sap.ui.layout.form.GridLayout("", {
			singleColumn: true
		});

		var oForm = new sap.ui.layout.form.Form({
			title: new sap.ui.core.Title({
				text: "Search"
			}),
			editable: false,
			layout: oLayout,
			formContainers: [
				new sap.ui.layout.form.FormContainer("", {
					expandable: false,
					formElements: [
						new sap.ui.layout.form.FormElement({
							fields: [
								new sap.m.DatePicker({
									placeholder: "Date",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Input({
									placeholder: "Customer ID",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.ComboBox({
									placeholder: "State",
									items: {
										path: "/state",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.ComboBox({
									placeholder: "City",
									items: {
										path: "/city",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel)
							]
						}),
						new sap.ui.layout.form.FormElement({
							fields: [
								new sap.m.Input({
									placeholder: "Machine Serial No",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Input({
									placeholder: "Family Members",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Input({
									placeholder: "Input TDS",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Input({
									placeholder: "Water Consumption",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								})
							]
						}),
						new sap.ui.layout.form.FormElement({
							fields: [
								new sap.m.Text({
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "6"
									})
								}),
								new sap.m.Button({
									text: "Submit",
									type: sap.m.ButtonType.Emphasized,
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "1"
									})
								}),
								new sap.m.Button({
									text: "Clear",
									type: sap.m.ButtonType.Emphasized,
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "1"
									})
								})
							]
						})
					]
				})
			]
		});

		var oTable2Template = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{waterTable>days}"
				}),
				new sap.m.Text({
					text: "{waterTable>eight}"
				}),
				new sap.m.Text({
					text: "{waterTable>nine}"
				}),
				new sap.m.Text({
					text: "{waterTable>ten}"
				}),
				new sap.m.Text({
					text: "{waterTable>eleven}"
				}),
				new sap.m.Text({
					text: "{waterTable>twelve}"
				})
			]
		});

		var oTable = new sap.m.Table("waterTableId", {
			editable: false,
			inset : true,
			enableBusyIndicator : true,
			modeAnimationOn : true,
			growing: true,
			growingThreshold: 5,
			growingScrollToLoad: true,
			growingTriggerText : "Load More Data",
			headerToolbar: new sap.m.Toolbar({
				content: [
					new sap.m.Button({
						text: "Export",
						icon: "sap-icon://excel-attachment",
						type: sap.m.ButtonType.Emphasized,
						press: [oController.Export, oController]
					}),					
					new sap.m.Text({
						layoutData: new sap.ui.layout.form.GridElementData({
							hCells: "2"
						})
					}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Title('waterTitleId', {
						text: "Water Consumption"
					})
				]
			}),
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Days"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Eight"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Nine"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Ten"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Eleven"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Twelve"
					})]
				})
			]
		});

		oTable.bindItems("waterTable>/data", oTable2Template, null);

		var oPanel = new sap.m.Panel("", {
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			headerToolbar: new sap.m.Toolbar({
				content: [new sap.m.Button({
					icon: "sap-icon://nav-back",
					type: sap.m.ButtonType.Emphasized,
					press: [oController.onNavBack]
				}),
				new sap.m.Button({
					text : "Refresh",
					type: sap.m.ButtonType.Emphasized,
					icon: "sap-icon://refresh",
					press : function(){
  						var oBusyDialog = new sap.m.BusyDialog();
    					oBusyDialog.open();
    					jQuery.sap.delayedCall(1000, this, function () {
        					oBusyDialog.close();
    					});
    						
  						var tempTable = sap.ui.getCore().byId("oTempTableId");
  						var oXSModel1 = new sap.ui.model.json.JSONModel("/XSHANA/AKSHAY/dev/myproducts/services.xsodata/WaterConsumptionSensorTable", false); //connected with destination through neo-app

  						tempTable.setModel(oXSModel1);
		    			
						var tempChart = sap.ui.getCore().byId("chart1Id");
  						tempChart.getDataset().setModel(oXSModel1);
  					}
				})
				]
			}),
			content: [ oTempTable, oChart1, oChart, oForm , oTable]

		});

		return oPanel;

	}

});