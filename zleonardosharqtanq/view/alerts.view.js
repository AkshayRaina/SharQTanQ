sap.ui.jsview("ZLeonardo_SharqTanq.view.alerts", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq.view.alerts
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq.controller.alerts";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq.view.alerts
	 */
	createContent: function(oController) {
		
		var alertTile1 = new sap.m.GenericTile("",{
			header: "Total Closed Alerts",
			subheader: "2",
			//headerImage:  "sap-icon://email",
			backgroundImage: "images/alert.png",
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
		}).addStyleClass("alertTile");
		
		var alertTile2 = new sap.m.GenericTile("",{
			header: "Total Open Alerts",
			subheader: "8",
			// headerImage:  "sap-icon://flag",
			backgroundImage: "images/alert.png",
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
		}).addStyleClass("alertTile");
		
		var alertTile3 = new sap.m.GenericTile("",{
			header: "Total Closed Alerts",
			subheader: "0",
			// headerImage:  "sap-icon://email",
			backgroundImage: "images/alert.png",
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
		}).addStyleClass("alertTile");
		
		var alertTile4 = new sap.m.GenericTile("",{
			header: "Total Open Alerts",
			subheader: "0",
			// headerImage:  "sap-icon://flag",
			backgroundImage: "images/alert.png",
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
		}).addStyleClass("alertTile");
		
		
		var oLayout = new sap.ui.layout.HorizontalLayout("alertsLayoutId", {
			content: [
				new sap.ui.layout.HorizontalLayout("layout1Id", {
					content: [	alertTile1,	alertTile2 ]
				}),
				/*new sap.ui.layout.HorizontalLayout("layout2Id", {
					content: [	alertTile3,	alertTile4 ]
				})*/
			]
		});
		
		var oPanel1 = new sap.m.Panel({
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			content: [oLayout ]
		});
		
		var comboBoxTemplate = new sap.ui.core.ListItem({
			text: "{text}",
			key: "{key}"
		});
		
		var comboBoxModel = new sap.ui.model.json.JSONModel();
		comboBoxModel.loadData("model/comboBox.json"); 
		
		var lay = new sap.ui.layout.form.GridLayout("", {
			singleColumn: true
		});

		var oForm = new sap.ui.layout.form.Form({
			title: new sap.ui.core.Title({
				text: "Search"
			}),
			editable: false,
			layout: lay,
			formContainers: [
				new sap.ui.layout.form.FormContainer("", {
					expandable: false,
					formElements: [
						new sap.ui.layout.form.FormElement({
							/*label: new sap.m.Label({
								text: "From Date to Date",
								layoutData: new sap.ui.layout.form.GridElementData({
									hCells: "1"
								})
							}),*/
							fields: [
								new sap.m.DateRangeSelection("alert_from_to_date_id",{
									placeholder: "From Date to Date",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.ComboBox("alert_state_id",{
									placeholder: "State",
									items: {
										path: "/state",
										template: comboBoxTemplate 
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.ComboBox("alert_city_id",{
									placeholder: "City",
									items: {
										path: "/city",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.ComboBox("alert_status_id",{
									placeholder: "Status",
									items: {
										path: "/status",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel)
							]
						}),
						new sap.ui.layout.form.FormElement({
							/*label: new sap.m.Label({
								text: "From Date to Date",
								layoutData: new sap.ui.layout.form.GridElementData({
									hCells: "1"
								})
							}),*/
							fields: [
								new sap.m.ComboBox("alert_priority_id",{
									placeholder: "Priority",
									items: {
										path: "/priority",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.ComboBox("alert_alert_source_id",{
									placeholder: "Alert Source",
									items: {
										path: "/alertSource",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.ComboBox("alert_model_id",{
									placeholder: "Model",
									items: {
										path: "/model",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.Input("alert_serial_no_id",{
									placeholder: "Serial No",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								})
							]
						}),
						new sap.ui.layout.form.FormElement({
							/*label: new sap.m.Label({
								text: "From Date to Date",
								layoutData: new sap.ui.layout.form.GridElementData({
									hCells: "1"
								})
							}),*/
							fields: [
								new sap.m.Input("alert_mobile_id",{
									placeholder: "Mobile No(Admin)",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.ComboBox("alert_firmware_id",{
									placeholder: "Firmware",
									items: {
										path: "/firmware",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.Input("alert_family_members_id",{
									placeholder: "Family Members",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Input("alert_input_tds_id",{
									placeholder: "Input TDS",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Input("alert_water_consumption_id",{
									placeholder: "Water Consumption",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
							]
						}),
						new sap.ui.layout.form.FormElement({
							/*label: new sap.m.Label({
								text: "From Date to Date",
								layoutData: new sap.ui.layout.form.GridElementData({
									hCells: "1"
								})
							}),*/
							fields: [
								new sap.m.Text({
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Text({
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Text({
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Button("alert_submit_id",{
									text: "Submit",
									type: sap.m.ButtonType.Emphasized,
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "1"
									}),
									press: function(oEvent) {
										oController.submit(oEvent);
									}
								}),
								new sap.m.Button("alert_clear_id",{
									text: "Clear",
									type: sap.m.ButtonType.Emphasized,
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "1"
									}),
									press: function(oEvent) {
										oController.clear(oEvent);
									}
								})
							]
						})
					]
				})
			]
		});
		
		var oPanel2 = new sap.m.Panel("", {
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			content: [oForm]
		});
		
		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{alertTable>alertDate}"
				}),
				new sap.m.Link({
					text: "{alertTable>ticketNo}"
				}),
				new sap.ui.commons.Image({
					width: "20px",
					height: "20px",
					src: {
						parts: [{
							path: "alertTable>status",
							type: new sap.ui.model.type.String()
						}],
						formatter: function(status) {
							if (status === "open") {
								return "images/accept.png";
							} else {
								return "images/reject.png";
							}
						}
					}
				}),
				new sap.m.Link({
					text: "{alertTable>alertStatus}"
				}),
				new sap.m.Text({
					text: "{alertTable>machineId}"
				}),
				new sap.m.Text({
					text: "{alertTable>description}"
				}),
				new sap.m.Text({
					text: "{alertTable>ticketUpdate}"
				}),
				new sap.m.Text({
					text: "{alertTable>alertLife}"
				}),
				new sap.m.Text({
					text: "{alertTable>customerId}"
				}),
				new sap.m.Text({
					text: "{alertTable>feedback}"
				}),
				new sap.m.Text({
					text: "{alertTable>escalationStatus}"
				})
			]
		});

		var oTable = new sap.m.Table("alertTableId", {
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
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Title('alertTitleId', {
						width: "50%",
						text: "Alert Details"
					}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Input("alertSearchButtonId", {
						width: "40%",
						placeholder: "Search"
					})
				]
			}),
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Alert Date"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "EFL CRM Ticket No"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Status (Open/Close)"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Alert Status"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Machine ID"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Description"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "EFL Ticket Update"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Alert Life"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Customer ID"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Feedback"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Escalation Status"
					})]
				})
			]
		});

		oTable.bindItems("alertTable>/data", oTemplate, null);

		var oPanel3 = new sap.m.Panel("", {
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			content: [oTable]
		});

		
		return [ oPanel1 , oPanel2 , oPanel3];
		
		
		
	}

});