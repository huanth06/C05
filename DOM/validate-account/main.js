let regexAcc = acc => {
    let regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(acc)) {
        console.log(`${acc} hợp lệ.`);
    } else {
        console.log(`${acc} không hợp lệ.`);
    }
}
//Xây dựng mẫu account hợp lệ
let accArr1 = ['123abc_','_abc123','______','123456','abcdefg']
//Xây dựng mẫu account không hợp lệ
let accArr2 = ['.@','12345','1234_','abcde'];
//Tạo chương trình thực thi kiểm thử
let validateAcc = accArr =>{
    accArr.map(accItem=>{
        regexAcc(accItem)
    });
}  
validateAcc(accArr1);
validateAcc(accArr2);