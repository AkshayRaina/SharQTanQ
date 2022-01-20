sap.ui.jsview("ZLeonardo_SharqTanq.view.connected-users-report", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq.view.connected-users-report
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq.controller.connected-users-report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq.view.connected-users-report
	 */
	createContent: function(oController) {
		
		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{connectedUsersTable>name}"
				}),
				new sap.m.Text({
					text: "{connectedUsersTable>email}"
				}),
				new sap.m.Text({
					text: "{connectedUsersTable>device}"
				}),
				new sap.m.Text({
					text: "{connectedUsersTable>contact}"
				})
			]
		});

		var oTable = new sap.m.Table("connectedUsersTableId", {
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
				new sap.m.Title('userTitleId',{
						text: "Connected Users"
				})]
			}),
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Name"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Email"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Device"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Contact"
					})]
				})
			]
		});

		oTable.bindItems("connectedUsersTable>/data", oTemplate, null);

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