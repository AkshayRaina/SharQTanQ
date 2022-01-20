sap.ui.jsview("ZLeonardo_SharqTanq.view.device-log", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq.view.device-log
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq.controller.device-log";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq.view.device-log
	 */
	createContent: function(oController) {
		
		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{deviceLogTable>no}"
				}),
				new sap.m.Text({
					text: "{deviceLogTable>log}"
				}),
				new sap.m.Text({
					text: "{deviceLogTable>value}"
				}),
				new sap.m.Text({
					text: "{deviceLogTable>timestamp}"
				})
			]
		});

		var oTable = new sap.m.Table("deviceLogTableId", {
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
					icon: "sap-icon://excel-attachment",
					type: sap.m.ButtonType.Emphasized,
					text: "Export",
					press: [oController.Export, oController]
				}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
				new sap.m.Title('deviceLogTitleId',{
						text: "Device Logs"
				})]
			}),
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "No"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Log"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Error"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Timestamp"
					})]
				})
			]
		});

		oTable.bindItems("deviceLogTable>/data", oTemplate, null);

		var oPanel = new sap.m.Panel("", {
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			content: [oTable]

		});

		return oPanel;
		
	}

});