//Mon Sep 21 2026 14:16:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function add(_0x251dd1, _0x390596) {
  return _0x251dd1 + _0x390596;
}
function subtract(_0x33b643, _0x1fbf95) {
  return _0x33b643 - _0x1fbf95;
}
function multiply(_0x681997, _0x26798f) {
  return _0x681997 * _0x26798f;
}
function divide(_0xe07381, _0x2d9a01) {
  if (_0x2d9a01 === 0) {
    {
      throw new Error("除数不能为 0");
    }
  }
  return _0xe07381 / _0x2d9a01;
}
function runExample() {
  const _0x4ede31 = 20;
  const _0x237f14 = 4;
  console.log("=== 四则运算示例 (输入数字: " + _0x4ede31 + ", " + _0x237f14 + ") ===");
  console.log("加法: " + _0x4ede31 + " + " + _0x237f14 + " = " + add(_0x4ede31, _0x237f14));
  console.log("减法: " + _0x4ede31 + " - " + _0x237f14 + " = " + subtract(_0x4ede31, _0x237f14));
  console.log("乘法: " + _0x4ede31 + " * " + _0x237f14 + " = " + multiply(_0x4ede31, _0x237f14));
  console.log("除法: " + _0x4ede31 + " / " + _0x237f14 + " = " + divide(_0x4ede31, _0x237f14));
}
runExample();
const _0x15b02d = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};
module.exports = _0x15b02d;