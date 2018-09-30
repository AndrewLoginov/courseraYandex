// Телефонная книга
var phoneBook = {

};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
var book = {};
 module.exports = function  (command) {
         var commandName=command.split(' ').splice(0,1).join('');
         var bookName=command.split(' ').splice(1,1).join('');
         var bookNumber=command.split(' ').splice(2,1).join('').split(',');
            if (commandName==='ADD') {
                if(book.hasOwnProperty(bookName)){
                    book[bookName] = book[bookName].concat(bookNumber);
                }else {
                    book[bookName]=bookNumber;
                };
            };
            if (commandName==='SHOW'){
                var showArr=[];
                for (var key in book){
                    if (book[key].length>0) {
                        showArr=showArr.concat(key+': '+book[key].join(', '));
                    };
                };
                return showArr.reverse();
            };
            if (commandName==='REMOVE_PHONE') {
                var bookNumberRemove=command.split(' ').splice(1,1).join('');
                for (var key in book){
                        for (var k=0; k<book[key].length; k++){
                            if (bookNumberRemove===book[key][k]){
                                book[key].splice(k,1);
                                 return true;
                            };
                        };
                    };
                return false;
            };
        };
