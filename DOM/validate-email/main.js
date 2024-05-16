let validateEmail = email =>{
    let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if(regexp.test(email)){
        console.log(`${email} đã đúng định dạng email`);
    }else{
        console.log(`${email} không đúng định dạng email. Mẫu email định dạng đúng : abc.@gmail.com`);
    }
}
//Kiểm thử:
//Mẫu email hợp lệ
validateEmail('a@gmail.com');
validateEmail('ab@yahoo.com');
validateEmail('abc@hotmail.com');
//Mẫu email hợp lệ
validateEmail('@gmail.com');
validateEmail('ab@gmail.');
validateEmail('@#abc@gmail.com');