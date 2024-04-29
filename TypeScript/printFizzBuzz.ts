// printFizzBuzzという名前の関数を一つ作ってください。
// 入力: number型の値
// 出力: なし。
// 内部的動作:
//   console.logを用いて値を出力する。
//   その値は入力値によって変動します。下記に場合わけを書きます
//   
//   場合分け(場合 -> console.logで出力する値)
//   - 3の倍数だけど5の倍数ではない場合 -> fizz
//   - 5の倍数だけど3の倍数ではない場合 -> buzz
//   - 3と5の倍数の場合 -> fizz-buzz
//   - それ以外の場合 -> none

// 制約（約束）:
// - 基本的にはJava(JavaScript以外の知っている言語)で解くつもりで解くこと。
//   そうすることで静的型付け言語としてのTypeScriptの表現力を見て欲しいです。（Javaならここでclassを書くけど、TypeScriptならtypeがあって、それを使うのかーみたいな話。）
// - できる限り型を記述すること。（型推論というのがTSにもあります。JavaにもあってJavaだとvarがそれを使う際のキーワードになります。その型推論をTSでなるべく使わないこと）
// - 面倒くさがること。極力関数にしてみたり、共通化を図ってみること（誤った共通化について知っているのであれば、その観点を持った上で共通化しないという選択を取ること）

// コメント:
// いっぱい書いてますが、TSの構文をこの問題を通じて理解していただければOKです。
// 大体型が書けるねーとなればOK!

type PrintFizzBuzzType = ( input :number ) => void;

let inputUserNum: number = Number(prompt("数字を入れてください","0")?.replace(/[^0-9]/g,"")); 

let printFizzBuzz :PrintFizzBuzzType = (inputNum)=>{
     switch(true){
        case inputNum <= 0 :
            return console.log('none');
        case inputNum % (3*5) === 0 :
            return console.log('fizz-buzz');
        case inputNum % 3 === 0 :
            return console.log('fizz');
        case inputNum % 5 === 0 : 
            return console.log('buzz');
        default :
            return console.log('none');
    }
}

function printFizzBuzzIf(inputNum: number){
    if(inputNum <= 0){
        console.log('自然数を入れてください');
    }else if(inputNum % (3*5) === 0){
        console.log('fizz-buzz');
    }else if(inputNum % 3 === 0){
        console.log('fizz');
    }else if(inputNum % 5 === 0){
        console.log('buzz');
    }else{
        console.log('none');
    }
}

function printFizzBuzzSwitch(inputNum: number){
    switch(true){
        case inputNum <= 0 :
            return console.log('自然数を入れてください');
        case inputNum % (3*5) === 0 :
            return console.log('fizz-buzz');
        case inputNum % 3 === 0 :
            return console.log('fizz');
        case inputNum % 5 === 0 : 
            return console.log('buzz');
        default :
            return console.log('none');
    }
}

printFizzBuzzSwitch(inputUserNum);
printFizzBuzzIf(0);// X_X
printFizzBuzzIf(3);// fizz
printFizzBuzzIf(5);// buzz
printFizzBuzzIf(15);// fizz-buzz
printFizzBuzzIf(18);// fizz
printFizzBuzzIf(10);// buzz
printFizzBuzzIf(25);// buzz
printFizzBuzzIf(30);// fizz-buzz
printFizzBuzzIf(32);// none
printFizzBuzzIf(32);// none
printFizzBuzz(0);//none
printFizzBuzz(3);//fizz
printFizzBuzz(5);//buzz
printFizzBuzz(15);//fizz-buzz
printFizzBuzz(inputUserNum);