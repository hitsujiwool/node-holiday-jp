
var holidays = require('./lib/holidays');
var holiday = require('./lib/holiday');
var index = holidays.reduce(function(acc, item) {
  acc[item[0]] = holiday(beginningOfDay(new Date(item[0])), item[1]);
  return acc;
}, {});

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
    for (var key in index) {
      date = index[key].date;
      // given `start` and `end` Date object are both normalized to beginning of the day
      if (beginningOfDay(start) <= date && date <= beginningOfDay(end)) res.push(index[key]);
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
    return format(date) in index;
  }
};
