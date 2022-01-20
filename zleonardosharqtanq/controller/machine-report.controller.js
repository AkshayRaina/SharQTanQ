sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZLeonardo_SharqTanq.controller.machine-report", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZLeonardo_SharqTanq.view.machine-report
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZLeonardo_SharqTanq.view.machine-report
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZLeonardo_SharqTanq.view.machine-report
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZLeonardo_SharqTanq.view.machine-report
		 */
		//	onExit: function() {
		//
		//	}
		
		onNavBack: function() {

			var shellLayout = new sap.ui.getCore().byId("shellLayout");

			var reports = sap.ui.getCore().byId('reports');
			if (reports === undefined) {
				reports = new sap.ui.view({
					id: "reports",
					viewName: "ZLeonardo_SharqTanq.view.reports",
					type: sap.ui.core.mvc.ViewType.JS,
					clearTarget: true,
					targetAggregation: "content"
				});
			}

			shellLayout.removeAllContent();
			shellLayout.addContent(reports);

			return shellLayout;

		},
		
		clear: function() {
			sap.ui.getCore().byId("machine_from_to_date_id").setValue("");
			sap.ui.getCore().byId("machine_state_id").setValue("");
			sap.ui.getCore().byId("machine_city_id").setValue("");
			sap.ui.getCore().byId("machine_model_id").setValue("");
			sap.ui.getCore().byId("machine_serial_no_id").setValue("");
			sap.ui.getCore().byId("machine_mobile_id").setValue("");
			sap.ui.getCore().byId("machine_firmware_id").setValue("");
			sap.ui.getCore().byId("machine_family_members_id").setValue("");
			sap.ui.getCore().byId("machine_input_tds_id").setValue("");
			sap.ui.getCore().byId("machine_water_consumption_id").setValue("");
			
		},
		
		submit: function() {
			
		},
		
		Export: function() {
		
		var data = this.getView().getModel("machineTable").getData();						//use this when table called from tile in a view
			
		//	var data = this.getOwnerComponent().getModel("machineTable").getData();           //use this when table is an option directly from menu
			this.JSONToCSVConvertor(data, "Machine Directory", true);

		},

		JSONToCSVConvertor: function(JSONData, ReportTitle, ShowLabel) {

			// If JSONData is not an object then JSON.parse will parse the JSON

			// string in an Object

			var arrData = typeof JSONData.data != 'object' ? JSON.parse(JSONData.data) : JSONData.data;

			var CSV = "";

			// Set Report title in first row or line

			CSV += ReportTitle + '\r\n\n';

			if (ShowLabel) {

				var row = "";

				row = row.slice(0, -1);

				CSV += row + '\r\n';

			}

			//loop is to extract each row

			for (var i = 0; i < arrData.length; i++) {

				var row = "", len;

				row += '"'+arrData[i].id + '", "'+arrData[i].status + '", "'+arrData[i].barcode + '", "'+arrData[i].model + '" , "'+arrData[i].firmware + '", "'+arrData[i].updatedDateTime + '", "'+arrData[i].gpsLocation + '", "'+arrData[i].location + '" , "'+arrData[i].customerAdmin + '", "'+arrData[i].loginAdmin + '", "'+arrData[i].createdDateTime + '"';
                    
                len = row.length;    
				row.slice(0,len-1);

				CSV += row + '\r\n';

			}

			if (CSV === "") 
			{
				alert("Invalid data");
				return;
			}

			// Generate a file name

			var fileName = "Report - ";

			fileName += ReportTitle.replace(/ /g, " ");                //"_" replaces " " in names, so i made it " "

			// Initialize file format you want csv or xls

			var uri = 'data: text / csv;charset = utf - 8, ' + escape(CSV);

			// Now the little tricky part.

			// you can use either>> window.open(uri);

			// but this will not work in some browsers

			// or you will not get the correct file extension

			// this trick will generate a temp <a /> tag

			var link = document.createElement("a");

			link.href = uri;

			// set the visibility hidden so it will not effect on your web layout

			link.style = "visibility: hidden";

			link.download = fileName + ".csv";

			// this part will append the anchor tag and remove it after automatic

			// click

			document.body.appendChild(link);

			link.click();

			document.body.removeChild(link);

		}

	});

});