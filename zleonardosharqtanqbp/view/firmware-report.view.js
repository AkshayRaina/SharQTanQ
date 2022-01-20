sap.ui.jsview("ZLeonardo_SharqTanq_BP.view.firmware-report", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq_BP.view.firmware-report
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq_BP.controller.firmware-report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq_BP.view.firmware-report
	 */
	createContent: function(oController) {

		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{firmwareTable>srNo}"
				}),
				new sap.m.Text({
					text: "{firmwareTable>version}"
				}),
				new sap.m.Link({
					text: "{firmwareTable>firmware}"
				}),
				new sap.m.Text({
					text: "{firmwareTable>description}"
				}),
				new sap.m.Text({
					text: "{firmwareTable>checksum}"
				}),
				new sap.m.Text({
					text: "{firmwareTable>createdDate}"
				}),
				new sap.m.Image({
					width: "20px",
					height: "20px",
					src: {
						parts: [{
							path: "firmwareTable>approve",
							type: new sap.ui.model.type.String()
						}],
						formatter: function(status) {
							if (status === "approved") {
								return "images/accept.png";
							} else {
								return "images/reject.png";
							}
						}
					}
				}),
				new sap.m.SegmentedButton({
					items: [
						new sap.m.SegmentedButtonItem({
							width: "50%",
							icon: "sap-icon://delete",
							type: sap.m.ButtonType.Emphasized,
							text: "{firmwareTable>deleteAction}"
						}),
						new sap.m.SegmentedButtonItem({
							width: "53%",
							icon: "sap-icon://accept",
							type: sap.m.ButtonType.Emphasized,
							text: "{firmwareTable>publishAction}"
						})
					]
				})
			]
		});

		var oTable = new sap.m.Table("firmwareTableId", {
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
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Title('firmwareTitleId', {
						text: "Baseboard Firware Details"
					})
				]
			}),
			columns: [
				new sap.m.Column({
					width: "7%",
					header: [new sap.m.Label({
						text: "SR No"
					})]
				}),
				new sap.m.Column({
					width: "7%",
					header: [new sap.m.Label({
						text: "Version"
					})]
				}),
				new sap.m.Column({
					width: "14%",
					header: [new sap.m.Label({
						text: "Firmware"
					})]
				}),
				new sap.m.Column({
					width: "16.5%",
					header: [new sap.m.Label({
						text: "Description"
					})]
				}),
				new sap.m.Column({
					width: "8.5%",
					header: [new sap.m.Label({
						text: "Checksum"
					})]
				}),
				new sap.m.Column({
					width: "10%",
					header: [new sap.m.Label({
						text: "Current Date"
					})]
				}),
				new sap.m.Column({
					width: "7%",
					header: [new sap.m.Label({
						text: "Approve"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Action"
					})]
				})
			]
		});

		oTable.bindItems("firmwareTable>/data", oTemplate, null);

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