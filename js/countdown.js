function CountDownTimer(dateTime, divId) {

    var end     = new Date(dateTime);
    var test    = new Date();
    var _second = 1000;
    var _minute = _second * 60;
    var _hour   = _minute * 60;
    var _day    = _hour * 24;
    var timer;

    function getDaysLeft(milliseconds) {
      return Math.floor(new Date(milliseconds) / _day % 24) + ' days, ';
    }

    function getHoursLeft(milliseconds) {
      return Math.floor(new Date(milliseconds) / _hour % 60) + ' hrs, ';
    }

    function getMinutesLeft(milliseconds) {
      return Math.floor(new Date(milliseconds) / _minute % 60) + ' mins, ';
    }

    function getSecondsLeft(milliseconds) {
      return Math.floor(new Date(milliseconds) / _second % 60) + ' secs ';
    }

    function showRemaining() {

       if ( Date.now() < end.getTime() ) {
         document.getElementsByName('countDown')[0].value =
          getDaysLeft(end.getTime() - Date.now()) +
          getHoursLeft(end.getTime() - Date.now()) +
          getMinutesLeft(end.getTime() - Date.now()) +
          getSecondsLeft(end.getTime() - Date.now());
       }

       else {
         document.getElementsByName('countDown')[0].value = "Can't countdown from something that I've passed..."
       }
    }

    timer = setInterval(showRemaining, 1000);
}

// Enter the date and time as a string in the following format.  Second parameter is the HTML id of element where you want
//    the countdown to appear.
CountDownTimer('02/02/2015 12:00 AM', 'countDown');
