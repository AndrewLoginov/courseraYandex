/**
 * @param {String} tweet
 * @returns {String[]}
 */
 module.exports = function  (tweet) {
   var arr=tweet.match(/#\S+/gi);
   if (arr===null){
       var ar=[];
       return ar
   }else {
       var sr=arr.join('').split(/#/gi);
       sr.splice(0,1);
       return sr ;
   }

};
