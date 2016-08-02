var holidays = require('./holidays.json');
var holiday = require('./lib/holiday');

function format(date) {
  return date.getFullYear() + '-' + pad((date.getMonth() + 1)) + '-' + pad(date.getDate());
}

function pad(n) {
  var str = n.toString();
  return (str.length < 2 ? '0' : '') + str;
}

function beginningOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

module.exports = {

  /**
   * Find holidays between `start` and `end`.
   *
   * @param {Date} start
   * @param {Date} end
   * @return {Array[Object]}
   * @api public
   */

  between: function(start, end) {
    var date;
    var res = [];
    for (var key in holidays) {
      date = beginningOfDay(new Date(key));
      // given `start` and `end` Date object are both normalized to beginning of the day
      if (beginningOfDay(start) <= date && date <= beginningOfDay(end)) {
        res.push(holiday(date, holidays[key]));
      }
    }
    return res;
  },

  /**
   * Return whether given date is holiday or not.
   *
   * @param {Date} date
   * @return {Boolean}
   * @api public
   */

  isHoliday: function(date) {
    return format(date) in holidays;
  }
};
