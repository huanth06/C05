let isUsZipCode = code =>{
    let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if(regexp.test(code)){
        return true;
    }
    return false;
}
var zipcode = "03201 - 2150";
console.log(isUsZipCode(zipcode));
zipcode = '11368';
console.log(isUsZipCode(zipcode));