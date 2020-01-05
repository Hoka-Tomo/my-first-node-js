// Strictモード
'use strict'
// numberという定数に、process.argv[2]（これは、Node.jsがデフォルトで提供しているコマンドラインの引数が入った配列）
// [2]は、慣例的にコマンドの後ろに書いた最初の引数は2番目になるため。
// || 0 は、process.argv[2]がnullやundefinedなどのFalsyな値だったときには、numberには0が代入される。
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);