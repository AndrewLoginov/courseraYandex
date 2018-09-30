/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function(hours, minutes, interval) {
       var now = new Date(2018,10,12,hours,minutes);
       now.setMinutes(now.getMinutes()+interval);
       if (now.getHours()<10){
          var nowHour = "0" + now.getHours();
       } else {
           nowHour=now.getHours();
       }
       if (now.getMinutes()<10){
           var nowMinutes = "0" + now.getMinutes();
       } else {
           nowMinutes = now.getMinutes();
       }
        return nowHour+":"+ nowMinutes;
};

