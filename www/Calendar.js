var exec = require('cordova/exec');

var Calendar = {
  requestReadPermission  : function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Calendar", "requestReadPermission", []);
  },
  hasReadPermission : function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Calendar", "hasReadPermission", []);
  },
  istEventsInRange: function (startDate, endDate, successCallback, errorCallback) {
     exec(successCallback, errorCallback, "Calendar", "listEventsInRange", [{
      "startTime": startDate instanceof Date ? startDate.getTime() : null,
      "endTime": endDate instanceof Date ? endDate.getTime() : null
    }])
  },
  listCalendars = function (successCallback, errorCallback) {
     exec(successCallback, errorCallback, "Calendar", "listCalendars", []);
  },
}

module.exports = Calendar;
 
