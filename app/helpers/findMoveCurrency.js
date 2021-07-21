const emoji = require('../../static/emoji.json');

const findMoveCurrency = (current_cur, yesterday_cur) => {
    if(current_cur > yesterday_cur){
        return emoji.arrows.up;
    }else if(current_cur < yesterday_cur){
        return emoji.arrows.down;
    }else{
        return '';
    }
}
module.exports = findMoveCurrency;
