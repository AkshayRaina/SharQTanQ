sap.ui.jsview("ZLeonardo_SharqTanq.view.machine-report", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq.view.machine-report
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq.controller.machine-report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq.view.machine-report
	 */
	createContent: function(oController) {

		var comboBoxTemplate = new sap.ui.core.ListItem({
			text: "{text}",
			key: "{key}"
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
							/*label: new sap.m.Label({
								text: "From Date to Date",
								layoutData: new sap.ui.layout.form.GridElementData({
									hCells: "1"
								})
							}),*/
							fields: [
								new sap.m.DateRangeSelection("machine_from_to_date_id",{
									placeholder: "From Date to Date",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								//oStateCombo,
								new sap.m.ComboBox("machine_state_id",{
									placeholder: "State",
									items: {
										path: "/state",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.ComboBox("machine_city_id",{
									placeholder: "City",
									items: {
										path: "/city",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.ComboBox("machine_model_id",{
									placeholder: "Model",
									items: {
										path: "/model",
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
								new sap.m.Input("machine_serial_no_id",{
									placeholder: "Serial No",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Input("machine_mobile_id",{
									placeholder: "Mobile No(Admin)",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.ComboBox("machine_firmware_id",{
									placeholder: "Firmware",
									items: {
										path: "/firmware",
										template: comboBoxTemplate
									},
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}).setModel(comboBoxModel),
								new sap.m.Input("machine_family_members_id",{
									placeholder: "Family Members",
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
								new sap.m.Input("machine_input_tds_id",{
									placeholder: "Input TDS",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Input("machine_water_consumption_id",{
									placeholder: "Water Consumption",
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Text({
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "2"
									})
								}),
								new sap.m.Button("machine_submit_id",{
									text: "Submit",
									type: sap.m.ButtonType.Emphasized,
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "1"
									}),
									press: function(oEvent){
										oController.submit(oEvent);
									}
								}),
								new sap.m.Button("machine_clear_id",{
									text: "Clear",
									type: sap.m.ButtonType.Emphasized,
									layoutData: new sap.ui.layout.form.GridElementData({
										hCells: "1"
									}),
									press: function(oEvent){
										oController.clear(oEvent);
									}
								})
							]
						})
					]
				})
			]
		});

		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{machineTable>id}"
				}),
				/*new sap.ui.core.Icon({
					src: "sap-icon://" + "{machineTable>status}",
					color: "{machineTable>color}"
					//text: "{machineTable>status}"
				}),*/
				new sap.ui.commons.Image({
					width: "20px",
					height: "20px",
					src: {
						parts: [{
							path: "machineTable>status",
							type: new sap.ui.model.type.String()
						}],
						formatter: function(status) {
							if (status === "accept") {
								return "images/accept.png";
							} else {
								return "images/reject.png";
							}
						}
					}
					// src: "sap-icon://" + "{machineTable>status}",
					// color: "{machineTable>color}"
					//text: "{machineTable>status}"
				}),
				new sap.m.Text({
					text: "{machineTable>barcode}"
				}),
				new sap.m.Text({
					text: "{machineTable>model}"
				}),
				new sap.m.Text({
					text: "{machineTable>firmware}"
				}),
				new sap.m.Text({
					text: "{machineTable>updatedDateTime}"
				}),
				new sap.m.Text({
					text: "{machineTable>gpsLocation}"
				}),
				new sap.m.Text({
					text: "{machineTable>location}"
				}),
				new sap.m.Text({
					text: "{machineTable>customerAdmin}"
				}),
				new sap.m.Link({
					text: "{machineTable>loginAdmin}"
				}),
				new sap.m.Text({
					text: "{machineTable>createdDateTime}"
				})
			]
		});

		var oTable = new sap.m.Table("machineTableId", {
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
					new sap.m.Title('machineTitleId', {
						width: "50%",
						text: "Machine Directory"
					}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "2"})}),
					new sap.m.Input("machineSearchButtonId", {
						width: "40%",
						placeholder: "Search"
					})
				]
			}),
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Machine ID"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Machine Status"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Barcode"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Model"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Firmware"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "List Updated"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "GPS Location"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Location"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Customer(Admin)"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Login Id(Admin)"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Created Date"
					})]
				})
			]
		});

		oTable.bindItems("machineTable>/data", oTemplate, null);

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
			content: [oForm, oTable]
		});

		return oPanel;

	}

});