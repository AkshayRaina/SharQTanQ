sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZLeonardo_SharqTanq_BP.controller.alerts", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZLeonardo_SharqTanq_BP.view.alerts
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZLeonardo_SharqTanq_BP.view.alerts
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZLeonardo_SharqTanq_BP.view.alerts
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZLeonardo_SharqTanq_BP.view.alerts
		 */
		//	onExit: function() {
		//
		//	}
		
		clear: function() {
			sap.ui.getCore().byId("alert_from_to_date_id").setValue("");
			sap.ui.getCore().byId("alert_state_id").setValue("");
			sap.ui.getCore().byId("alert_city_id").setValue("");
			sap.ui.getCore().byId("alert_status_id").setValue("");
			sap.ui.getCore().byId("alert_priority_id").setValue("");
			sap.ui.getCore().byId("alert_alert_source_id").setValue("");
			sap.ui.getCore().byId("alert_model_id").setValue("");
			sap.ui.getCore().byId("alert_serial_no_id").setValue("");
			sap.ui.getCore().byId("alert_mobile_id").setValue("");
			sap.ui.getCore().byId("alert_firmware_id").setValue("");
			sap.ui.getCore().byId("alert_family_members_id").setValue("");
			sap.ui.getCore().byId("alert_input_tds_id").setValue("");
			sap.ui.getCore().byId("alert_water_consumption_id").setValue("");
			
		},
		
		submit: function() {
			
		},
		
		Export: function() {
		
			//var data = this.getView().getModel("alertTable").getData();					//use this when table called from tile in a view
			
			var data = this.getOwnerComponent().getModel("alertTable").getData();           //use this when table is an option directly from menu
			this.JSONToCSVConvertor(data, "Alert Details", true);

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

				row += '"'+arrData[i].alertDate + '", "'+arrData[i].ticketNo + '", "'+arrData[i].status + '", "'+arrData[i].alertStatus + '", "'+arrData[i].machineId + '", "'+arrData[i].description + '", "'+arrData[i].ticketUpdate + '" , "'+arrData[i].alertLife + '" , "'+arrData[i].customerId + '" , "'+arrData[i].feedback + '" , "'+arrData[i].escalationStatus + '"';
                    
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

			fileName += ReportTitle.replace(/ /g, " ");

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