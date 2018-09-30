/**
 * @param {String} date
 * @returns {Object}
 */
var time = {};
module.exports = function (date) {
    var newObDate = new Date(date);
    time = {
        subtract: function (number, noOne) {
                if ((number<0)|| ((noOne !== 'years')&&(noOne !== 'months')&&(noOne !== 'days')&&(noOne !== 'hours')&&(noOne !== 'minutes'))){
                    throw new TypeError();
                }
                if (noOne === 'years') {
                    newObDate.setFullYear(newObDate.getFullYear() - number)
                }
                if (noOne === 'months') {
                    newObDate.setMonth(newObDate.getMonth() - number)
                }
                if (noOne === 'days') {
                    newObDate.setDate(newObDate.getDate() - number)
                }
                if (noOne === 'hours') {
                    newObDate.setHours(newObDate.getHours() - number)
                }
                if (noOne === 'minutes') {
                    newObDate.setMinutes(newObDate.getMinutes() - number)
                }
                return this;

        },
        add: function (number, noOne) {

                if ((number<0)|| ((noOne !== 'years')&&(noOne !== 'months')&&(noOne !== 'days')&&(noOne !== 'hours')&&(noOne !== 'minutes'))){
                    throw new TypeError();
                }
                if (noOne === 'years') {
                    newObDate.setFullYear(newObDate.getFullYear() + number)
                }
                if (noOne === 'months') {
                    newObDate.setMonth(newObDate.getMonth() + number)
                }
                if (noOne === 'days') {
                    newObDate.setDate(newObDate.getDate() + number)
                }
                if (noOne === 'hours') {
                    newObDate.setHours(newObDate.getHours() + number)
                }
                if (noOne === 'minutes') {
                    newObDate.setMinutes(newObDate.getMinutes() + number)
                }
                return this;
        },
        get value() {
            var getYear = newObDate.getFullYear();
            var getMonth = newObDate.getMonth() + 1;
            if (getMonth < 10) {
                getMonth = '0' + getMonth;
            }
            var getDay = newObDate.getDate();
            if (getDay < 10) {
                getDay = '0' + getDay;
            }
            var getHour = newObDate.getHours();
            if (getHour < 10) {
                getHour = '0' + getHour;
            }
            var getMinut = newObDate.getMinutes();
            if (getMinut < 10) {
                getMinut = '0' + getMinut;
            }
            return getYear + '-' + getMonth + '-' + getDay + ' ' + getHour + ':' + getMinut;
        }
    }
    return time;
};
