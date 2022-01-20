sap.ui.jsview("ZLeonardo_SharqTanq_BP.view.BusinessPartner_BP", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ZLeonardo_SharqTanq_BP.view.BusinessPartner_BP
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq_BP.controller.BusinessPartner_BP";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf ZLeonardo_SharqTanq_BP.view.BusinessPartner_BP
	 */
	createContent: function(oController) {
	
	
		jQuery.sap.require("sap.uxap.ObjectPageHeader");
		jQuery.sap.require("sap.uxap.ObjectPageHeaderContent");
		jQuery.sap.require("sap.uxap.ObjectPageLayout");
		jQuery.sap.require("sap.ui.layout.VerticalLayout");
		
		var headerContent = new sap.ui.layout.VerticalLayout({
			width: "200%",
			content:[
			         
			         new sap.m.Label({
			        	 text: "BP No: 0001 "
			         }),
			         new sap.m.Label({
			        	 text: "Country: India"
			         }),
			         new sap.m.Label({
			        	 text: "BP Name: Business Partner A"
			         }),
			         new sap.m.Label({
			        	 text: "City: Bangalore"
			         }),
			         new sap.m.Label({
			        	 text: "Street: JP Nagar"
			         }),
			         new sap.m.Label({
			        	 text: "PostalCode: 560068"
			         }),
			         new sap.m.Label({
			        	 text: "Telephone: 22776039"
			         })
			]
		});
		var orderDate = new sap.m.VBox({
			height:"60px",
			items:[
			       new sap.m.Label({
			        	 text:'Service Agreement Validity'
			         }),
			         new sap.m.Label({
			        	 text:'02-April-2019'
			         }),
			         new sap.m.Label({
			        	 text:'Rating'
			         }),
			         new sap.m.RatingIndicator({
			         	value : 4
			         })
			 ]
		});
		
		var creditLimit = new sap.m.VBox({
			height:"60px",
			items:[
			       new sap.m.Label({
			        	 text:'Percentage of Success'
			         }),
			         new sap.m.ProgressIndicator({
			        	 state:sap.ui.core.ValueState.Success,
			        	 percentValue:90,
			        	 displayValue:"90%",
			        	 showValue:true
			         })
			 ]
		});
		
		var headerContent1 = new sap.ui.layout.VerticalLayout({
			content:[creditLimit,orderDate]
		});
		
		var header = new sap.uxap.ObjectPageHeader({	
			objectImageURI:"images/bp1.jpg",
			objectImageShape:sap.uxap.ObjectPageHeaderPictureShape.Circle,
			objectTitle:"Business Partner A",
			objectSubtitle:""
		});
		
		var midTile1 = new sap.m.GenericTile("",{
			header: "Total Issues",
			subheader: "No: 154",
			headerImage:  "sap-icon://quality-issue",
			backgroundImage: "images/bg.png",
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
		}).addStyleClass("analyticTile");
		
		var midTile2 = new sap.m.GenericTile("",{
			header: "Total Spares",
			subheader: "79",
			headerImage:  "sap-icon://tools-opportunity",
			backgroundImage: "images/bg.png",
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
		}).addStyleClass("analyticTile");
		
		var midTile3 = new sap.m.GenericTile("",{
			header: "Total Technicians",
			subheader: "9",
			headerImage:  "sap-icon://user-settings",
			backgroundImage: "images/bg.png",
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
		}).addStyleClass("analyticTile");
		
		
		var midTile4 = new sap.m.GenericTile("",{
			header: "Total Issues",
			subheader: "Pending: 4",
			headerImage:  "sap-icon://quality-issue",
			backgroundImage: "images/bg.png",
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
		}).addStyleClass("analyticTile");
		
		
		var oPanel0 = new sap.m.Panel({
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			//headerText: "Panel Header",
			content: [midTile1 , midTile2 , midTile3 , midTile4]
		});
		
		
		
		
		var oTemplate = new sap.m.ColumnListItem({
			visible: true,
			selected: true,
			cells: [
				new sap.m.Text({
					text: "{bpTable>serviceNo}"
				}),
				new sap.m.Text({
					text: "{bpTable>productName}"
				}),
				new sap.m.Text({
					text: "{bpTable>errorId}"
				}),
				new sap.m.Text({
					text: "{bpTable>errorDesc}"
				}),
				new sap.m.Text({
					text: "{bpTable>statusPending}"
				})
			]
		});

		var oTable = new sap.m.Table("bpTableId", {
			editable: false,
			inset : true,
			enableBusyIndicator : true,
			mode: sap.m.ListMode.SingleSelectLeft,
			modeAnimationOn : true,
			growing: true,
			growingThreshold: 5,
			growingScrollToLoad: true,
			growingTriggerText : "Load More Data",
			columns: [
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Service No"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Product Name"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Error Id"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Error Description"
					})]
				}),
				new sap.m.Column({
					header: [new sap.m.Label({
						text: "Status"
					})]
				})
			],
			select: function(oEvent){
				oController.openProductView(oEvent);
			}
		});

		oTable.bindItems("bpTable>/data", oTemplate, null);

		var oPanel1 = new sap.m.Panel("", {
			collapsed: false,
			showCollapseIcon: false,
			enabled: true,
			content: [oTable]
		});
		
		var createIndent = new sap.uxap.ObjectPageSection('createIndentId',{
			title:'Create Indent Information',
			showTitle: false,
			titleUppercase:true,
			visible:true,
			subSections:[
				new sap.uxap.ObjectPageSubSection({
					mode:sap.uxap.ObjectPageSubSectionMode.Expanded,
						titleUppercase:true,
						title:'Basic Details',
						visible:true,
						showTitle:true,
						blocks:[oPanel0 ]
				}),
				new sap.uxap.ObjectPageSubSection({
					mode:sap.uxap.ObjectPageSubSectionMode.Expanded,
						titleUppercase:true,
						title:'Error Details',
						visible:true,
						showTitle:true,
						blocks:[oPanel1]
				}),
//				new sap.uxap.ObjectPageSubSection({
//					mode:sap.uxap.ObjectPageSubSectionMode.Expanded,
//						titleUppercase:true,
//						title:'Payment Details',
//						visible:true,
//						showTitle:true,
//						blocks:[paymentDetailsView]
//				}),
				new  sap.uxap.ObjectPageSubSection({
					mode:sap.uxap.ObjectPageSubSectionMode.Expanded,
						titleUppercase:true,
						title:'Other Details',
						visible:true,
						showTitle:true,
						blocks:[]
				}),
				new  sap.uxap.ObjectPageSubSection({
					mode:sap.uxap.ObjectPageSubSectionMode.Expanded,
						titleUppercase:true,
						title:'Submit Details',
						visible:true,
						showTitle:true,
						blocks:[]
				})
			]
		});
		
		var oBpLayout = new sap.uxap.ObjectPageLayout({
			showAnchorBar:true,
			showAnchorBarPopover:true,
			subSectionLayout:sap.uxap.ObjectPageSubSectionLayout.TitleOnTop,
			useIconTabBar:true,
			showTitleInHeaderContent:true,
			showHeaderContent:true,
			headerTitle:header,
			headerContent:[headerContent,headerContent1],
			sections:[createIndent],
			showFooter : true,
			footer : new sap.m.Bar({
				contentRight : [
					// new sap.m.Button({
					// 	text : "Assign",
					// 	icon: "sap-icon://kpi-managing-my-area",
					// 	type: sap.m.ButtonType.Emphasized,
					// 	press: function(oEvent){
					// 		oController.onClickAssignButton(oEvent);
					// 	}
					// })
				]
			})
		});
		return [oBpLayout];
	
	}

});