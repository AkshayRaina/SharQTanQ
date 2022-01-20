sap.ui.jsview("ZLeonardo_SharqTanq.view.customer-report", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq.view.customer-report
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq.controller.customer-report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq.view.customer-report
	 */
	createContent: function(oController) {

		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{customerTable>id}"
				}),
				new sap.m.Text({
					text: "{customerTable>name}"
				}),
				new sap.m.Image({
					width: "20px",
					height: "20px",
					src: {
						parts: [{
							path: "customerTable>status",
							type: new sap.ui.model.type.String()
						}],
						formatter: function(status) {
							if (status === "online") {
								return "images/accept.png";
							} else {
								return "images/reject.png";
							}
						}
					}
				}),
				new sap.m.Text({
					text: "{customerTable>no}"
				}),
				new sap.m.Link({
					text: "{customerTable>loginId}"
				}),
				new sap.m.Text({
					text: "{customerTable>type}"
				}),
				new sap.m.Text({
					text: "{customerTable>email}"
				}),
				new sap.m.Text({
					text: "{customerTable>city}"
				}),
				new sap.m.Text({
					text: "{customerTable>location}"
				}),
				new sap.m.Button({
					icon: "sap-icon://map",
					type: sap.m.ButtonType.Emphasized,
					text: "{customerTable>action}",
					press: function(oEvent) {
						oController.openCustomerLocation(oEvent);
					}
				})
			]
		});

		var oTable = new sap.m.Table("customerTableId", {
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
					new sap.m.Title('customerTitleId', {
						text: "Customer Details"
					})
				]
			}),
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Customer ID"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Customer Name"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Machine Status"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Mobile"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Login ID"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Customer Type"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Customer Email"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Customer City"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "GPS Location"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Action"
					})]
				})
			]
		});

		oTable.bindItems("customerTable>/data", oTemplate, null);

		var oPanel = new sap.m.Panel("", {
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			headerToolbar: new sap.m.Toolbar({
				content: [new sap.m.Button({
					icon: "sap-icon://nav-back",
					type: sap.m.ButtonType.Emphasized,
					press: [oController.onNavBack]
				})]
			}),
			content: [oTable]

		});

		return oPanel;

	}

});