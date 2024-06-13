/**
 * Tests the registerSheetToCalendar function.
 */
function testRegisterSheetToCalendar() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = [
    ['Event 1', '2023-03-01 10:00:00', '2023-03-01 11:00:00'],
    ['Event 2', '2023-03-01 11:00:00', '2023-03-01 12:00:00']
  ];
  
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  
  registerSheetToCalendar();
  
  var calendarId = 'your_calendar_id';
  var calendar = CalendarApp.getCalendarById(calendarId);
  var events = calendar.getEvents();
  
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    Logger.log(event.getTitle());
  }
}

/**
 * Tests the getRegisteredData function.
 */
function testGetRegisteredData() {
  var data = getRegisteredData();
  Logger.log(data);
}