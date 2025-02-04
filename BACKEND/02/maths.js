function add(a,b){
return a + b;
}
function sub(a,b){
    return a - b;
}

module.exports = {
    add , sub
} ;//this is the ideal way to do this not one after other that overwrites the other one 