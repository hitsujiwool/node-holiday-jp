
var assert = require('assert');
var holiday = require('../');

describe('holiday.between(start, end)', function() {
  it ('should return all holidays between the given periad', function() {
    var start = new Date(2014, 5, 3);
    var end = new Date(2014, 8, 30);
    var holidays = holiday.between(start, end).map(function(item) { return item.name; });
    assert.deepEqual(holidays, ['海の日', '敬老の日', '秋分の日']);
  });

  it ('should do well in the border case', function() {
    // 3/11/2014 is "National Culture Day"
    var start = new Date(2014, 10, 3, 12);
    var end = new Date(2014, 10, 3, 12);
    assert.equal(holiday.between(start, end).length, 1);
  });
});

describe('holiday properties', function() {
  var cultureDay;
  
  before(function() {
    var start = new Date(2014, 10, 3, 12);
    var end = new Date(2014, 10, 3, 12);
    cultureDay = holiday.between(start, end)[0];    
  });

  it ('nameEn contains its English translation', function() {
    assert.equal(cultureDay.nameEn, 'National Culture Day');
  });

  it ('wdayName contains its day of the week', function() {
    assert.equal(cultureDay.wdayName, '月');
  });

  it ('date contains when the holiday is', function() {
    assert(cultureDay.date instanceof Date);
    assert.equal(+cultureDay.date, +new Date(2014, 10, 3));
  });

  it ('name contains its Japanese name', function() {
    assert.equal(cultureDay.name, '文化の日');
  });
});

describe('holiday.isHoliday(date)', function() {
  it ('should return true if the date is holiday', function() {
    assert.strictEqual(holiday.isHoliday(new Date(2014, 10, 3)), true);
  });

  it ('should return false if the date is not holiday', function() {
    assert.strictEqual(holiday.isHoliday(new Date(2014, 1, 6)), false);
  });
});
