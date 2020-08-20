// import CryptoJS from 'crypto-js/crypto-js'
// /**
//  * AES 解密 ：字符串 key iv  返回base64
//  *
//  */
// export function Decrypt(word) {
//     var key = CryptoJS.enc.Utf8.parse("hangzhouhuaxi123");
//     var decrypted = CryptoJS.AES.decrypt(word, key, {
//         mode: CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7
//     });
//     decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
//     return decrypted;
//   }　