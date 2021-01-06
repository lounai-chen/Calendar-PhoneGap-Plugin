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
  listCalendars : function (successCallback, errorCallback) {
     exec(successCallback, errorCallback, "Calendar", "listCalendars", []);
  },
 createEventWithOptions : function (title, location, notes, startDate, endDate, options, successCallback, errorCallback) {
    if (!(startDate instanceof Date && endDate instanceof Date)) {
      errorCallback("startDate and endDate must be JavaScript Date Objects");
      return;
    }

    // merge passed options with defaults
    var mergedOptions = Calendar.prototype.getCalendarOptions();
    for (var val in options) {
      if (options.hasOwnProperty(val)) {
        mergedOptions[val] = options[val];
      }
    }
    if (options.recurrenceEndDate != null) {
      mergedOptions.recurrenceEndTime = options.recurrenceEndDate.getTime();
    }
    exec(successCallback, errorCallback, "Calendar", "createEventWithOptions", [{
      "title": title,
      "location": location,
      "notes": notes,
      "startTime": startDate instanceof Date ? startDate.getTime() : null,
      "endTime": endDate instanceof Date ? endDate.getTime() : null,
      "options": mergedOptions
    }]);
  },
}

module.exports = Calendar;
 
