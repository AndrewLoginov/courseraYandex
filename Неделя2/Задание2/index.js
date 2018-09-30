/**
 * @param {String[]} hashtags
 * @returns {String}
 */
 module.exports = function  (hashtags) {
        if(hashtags.length===0){
            return hashtags.join(' ');
        }else{
            var arr=hashtags.join(',').toLowerCase().split(',');
            arr.forEach(function (element, index, array) {
                    for (var i= index+1; i<array.length;i++){
                        if (array[index]===array[i]) {
                            array.splice(i,1);
                            i--;
                        };
                    };
            });
            return arr.join(', ');
        }
};
