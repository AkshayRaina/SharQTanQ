sap.ui.jsview("ZLeonardo_SharqTanq_BP.view.main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.main
	 */
	getControllerName: function() {
		return "ZLeonardo_SharqTanq_BP.controller.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.main
	 */
	createContent: function(oController) {
		
		var oTemplate = new sap.m.StandardListItem({
			title: "{menu>item}",
			icon: "sap-icon://" + "{menu>icon}",
			type: sap.m.ListType.Active,
			press: function(oEvent){
				oController.handleItem(oEvent);
			}
		});
		
		var oList = new sap.m.List("listId",{
			id: "menuListId"
			//headerText: "Menu"
		});
		oList.bindAggregation("items","menu>/navItems",oTemplate);
		
		var oShell = new sap.ui.unified.Shell('shellLayout', {
			showPane: false,
			icon: "images/Quinnox_logo.png",
			headerHeading: 'Quinnox SAP Connected Goods Product',
			headerVisible: true,
			searchVisible: true,
			paneContent: [
				oList
			],
			content: [
				new	sap.ui.commons.layout.BorderLayout('borderLayoutId', {
					width: "1000px",
					height: "350px",
					bottom: new sap.ui.commons.layout.BorderLayoutArea('', {
						contentAlign: "center",
						content: [new sap.ui.commons.Image('imageID', {
							src: 'images/Quinnox_logo.png'
						})]
					})
				})
			]
		});

		var oShellHeadItem = new sap.ui.unified.ShellHeadItem('menuItem', {
			icon: "sap-icon://menu2",
			showSeparator: true,
			press: function() {
				if (oShell.getShowPane()) {
					oShell.setShowPane(false);
				} else {
					oShell.setShowPane(true);
				}
			}
		});

		var oShellHeadEndItem = new sap.ui.unified.ShellHeadItem('logout', {
			icon: "sap-icon://log",
			showSeparator: true
		});

		oShell.addHeadItem(oShellHeadItem);
		oShell.addHeadEndItem(oShellHeadEndItem);

		return oShell;

	}

});