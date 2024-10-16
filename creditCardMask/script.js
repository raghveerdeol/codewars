// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
console.log(maskify('S444es'));

function maskify(cc) {
        // make array from string 
        let arrayCc = cc.split("");
        // declare empty string 
        let ccString = '';
        for (let i = 0; i < arrayCc.length; i++) {
            // if i less than array length - 4 add # 
            if (i < arrayCc.length - 4) {
                ccString = ccString + '#'; 
            } else {
                ccString = ccString + arrayCc[i];
            }
        }
        return ccString;
}
