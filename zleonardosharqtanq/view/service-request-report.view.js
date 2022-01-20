sap.ui.jsview("ZLeonardo_SharqTanq.view.service-request-report", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq.view.service-request-report
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq.controller.service-request-report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq.view.service-request-report
	 */
	createContent: function(oController) {
		
		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{serviceTable>srNo}"
				}),
				new sap.m.Text({
					text: "{serviceTable>description}"
				}),
				new sap.m.Text({
					text: "{serviceTable>status}"
				}),
				new sap.m.Text({
					text: "{serviceTable>date}"
				})
			]
		});

		var oTable = new sap.m.Table("serviceTableId", {
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
				new sap.m.Title('serviceTitleId',{
						text: "Service Requests"
				})]
			}),
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "SR No"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Description"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Status"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Date"
					})]
				})
			]
		});

		oTable.bindItems("serviceTable>/data", oTemplate, null);

		var oPanel = new sap.m.Panel("", {
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			headerToolbar: new sap.m.Toolbar({
				content:
					[new sap.m.Button({
						icon: "sap-icon://nav-back",
						type: sap.m.ButtonType.Emphasized,
						press: [oController.onNavBack]
					})
					]
			}),
			content: [oTable]

		});

		return oPanel;
		
		
	}

});