sap.ui.jsview("ZLeonardo_SharqTanq_BP.view.tds-report", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq_BP.view.tds-report
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq_BP.controller.tds-report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq_BP.view.tds-report
	 */
	createContent: function(oController) {
     
    sap.ui.getCore().loadLibrary("sap.viz");
    jQuery.sap.require("sap.ui.core.format.DateFormat");
    	
    	var xsTdsModel = new sap.ui.model.json.JSONModel("/XSHANA/AKSHAY/dev/myproducts/services.xsodata/PHSensor", false); //connected with destination through neo-app
		
		var oTdsTemplate = new sap.m.ColumnListItem({
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
					text: "{C_PHVALUE}"
				})
			]
		});
 
		var oTdsTable = new sap.m.Table("oTds_Table_Id1",{
			headerText: "TDS Data Table",
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
						text: "TDS Value"
					})]
				})
				]
		});
		oTdsTable.setModel(xsTdsModel);
		oTdsTable.bindItems("/d/results", oTdsTemplate, null);
              
        var oTdsDatasetData = {
            dimensions : [
                {axis : 1, name: "Timestamp", value: "{G_CREATED}"}
            ],
            measures : [
                {group: 1, name : "TDS", value : "{C_PHVALUE}"}
            ],
            data : {
                path : "/d/results"
            }
        };
        
        var oTdsDataset = new sap.viz.core.FlattenedDataset(oTdsDatasetData);
        oTdsDataset.setModel(xsTdsModel);
          
        var oTdsChart = new sap.viz.ui5.Line({
            id: "oTds_Chart_Id1",
    		width : "80%",
            height : "400px",
            plotArea: {	
            },
            title: {
                visible : true,
                text : "TDS Live Report"
            },
            dataset: oTdsDataset
        });

    	
    	
    	
    	
    	
        var modelData = {
                data:[
                    {week :"Week 1",tds:300},
                    {week :"Week 2",tds:290},
                    {week :"Week 3",tds:450},
                    {week :"Week 4",tds:455},
                    {week :"Week 5",tds:450},
                    {week :"Week 6",tds:400}
                    ]
              };
              
        var datasetData = {
            dimensions : [
                {axis : 1, name: "Week", value: "{week}"},
                //{axis : 2, name: "TDS", value: "{tds}"}
            ],
            measures : [
                //{group: 2, name : "TDS", value : "{tds}"},
                {group: 1, name : "TDS", value : "{tds}"}
            ],
            data : {
                path : "/data"
            }
        };
        
        var oDataset = new sap.viz.core.FlattenedDataset(datasetData);
        var oModel = new sap.ui.model.json.JSONModel(modelData);
        oDataset.setModel(oModel);
          
        var oChart = new sap.viz.ui5.Bar({
            id: "Column",
    		width : "80%",
            height : "400px",
            plotArea: {
            //	'colorPalette': d3.scale.category20().range	
            },
            title: {
                visible : true,
                text : "Average TDS"
            },
            dataset: oDataset
        });

		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{tdsTable>days}"
				}),
				new sap.m.Text({
					text: "{tdsTable>eight}"
				}),
				new sap.m.Text({
					text: "{tdsTable>nine}"
				}),
				new sap.m.Text({
					text: "{tdsTable>ten}"
				}),
				new sap.m.Text({
					text: "{tdsTable>eleven}"
				}),
				new sap.m.Text({
					text: "{tdsTable>twelve}"
				})
			]
		});

		var oTable = new sap.m.Table("tdsTableId", {
			editable: false,
			inset : true,
			enableBusyIndicator : true,
			modeAnimationOn : true,
			growing: true,
			growingThreshold: 5,
			growingScrollToLoad: true,
			growingTriggerText : "Load More Data",
			headerToolbar: new sap.m.Toolbar({
				content:[
				new sap.m.Button({
					text: "Export",
					icon: "sap-icon://excel-attachment",
					type: sap.m.ButtonType.Emphasized,
					press: [oController.Export, oController]
				}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Title("tdsTitleId",{
						text: "Total Dissolved Solids"
				})]
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

		oTable.bindItems("tdsTable>/data", oTemplate, null);

		var oPanel = new sap.m.Panel("", {
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			headerToolbar: new sap.m.Toolbar({
				content:
					[
					new sap.m.Button({
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
  						
  							var xsTdsModel1 = new sap.ui.model.json.JSONModel("/XSHANA/AKSHAY/dev/myproducts/services.xsodata/PHSensor", false); //connected with destination through neo-app
							
							if(xsTdsModel1.oData !== undefined){
							
  								var oTdsTempTable = sap.ui.getCore().byId("oTds_Table_Id1");
  								oTdsTempTable.setModel(xsTdsModel1);
		    			
								var oTdsTempChart = sap.ui.getCore().byId("oTds_Chart_Id1");
  								oTdsTempChart.getDataset().setModel(xsTdsModel1);
							}
						}
					})
					]
			}),
			content: [ oTdsTable , oTdsChart , oChart , oTable]

		});

		return oPanel;

	}

});