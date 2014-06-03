# node-holiday-jp

JavaScript porting of [holiday_jp](https://github.com/komagata/holiday_jp)

## Installation

```
npm install holiday-jp
```

## Usage

```javascript
var holiday = require('holiday-jp')

// find holidays between 3/6/2014 ~ 30/8/2014
// returns Array of Object (see below for their properties)
holiday.between(new Date(2014, 5, 3), new Date(2014, 8, 30))

// whether given date is holiday or not
// return true (or false)
holiday.isHoliday(new Date(2014, 10, 3))
```

## Properties

* `name: String` - name of the holiday (ex. "文化の日")
* `nameEn: String` - English translation (ex. "National Culture Day")
* `wdayName: String` - day of the week (ex. "月")
* `date: Date` - Date object of the holiday (ex. Mon Nov 03 2014 00:00:00 GMT+0900 (JST))

## License

MIT
