const util = {
    pxToRem: function(content, fontSize){
        return content.replace(/(\d+)px/g, function(s) {
            s = s.replace('px', '');
            var value = parseInt(s) / fontSize /2;//   此处 1rem =120px
            return value + "rem";
        })
    }
}
export default util
