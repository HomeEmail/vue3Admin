const CryptoJS = require('crypto-js'); // 引用AES源码js

function encryptByKey(s, key = '1234123412ABCDEF') {
  const ciphertext = CryptoJS.AES.encrypt(s, key).toString();
  return ciphertext;
}
function decryptByKey(s, key = '1234123412ABCDEF') {
  const bytes = CryptoJS.AES.decrypt(s, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

// 解密方法
function decryptByKeyIv(word, k = '1234123412ABCDEF', v = 'ABCDEF1234123412') {
  const key = CryptoJS.enc.Utf8.parse(k); // 十六位十六进制数作为秘钥
  const iv = CryptoJS.enc.Utf8.parse(v); // 十六位十六进制数作为秘钥偏移量
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
// 加密方法
function encryptByKeyIv(word, k = '1234123412ABCDEF', v = 'ABCDEF1234123412') {
  const key = CryptoJS.enc.Utf8.parse(k); // 十六位十六进制数作为秘钥
  const iv = CryptoJS.enc.Utf8.parse(v); // 十六位十六进制数作为秘钥偏移量
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString().toUpperCase();
}

export default {
  decryptByKeyIv,
  encryptByKeyIv,
  encryptByKey,
  decryptByKey,
};
