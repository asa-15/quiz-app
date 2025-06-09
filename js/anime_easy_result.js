let a = sessionStorage.getItem('anime_easy_correct1');
let co1 = Number(a)

let b = sessionStorage.getItem('anime_easy_incorrect1');
let ic1 = Number(b)
let total1 = co1 + ic1

let correct1 = Math.round(co1 / total1 * 100)
let incorrect1 = 100 - correct1
console.log(co1)
console.log(ic1)
console.log(total1)

let c = sessionStorage.getItem('anime_easy_correct2');
let co2 = Number(c)

let d = sessionStorage.getItem('anime_easy_incorrect2');
let ic2 = Number(d)
let total2 = co2 + ic2

let correct2 = Math.round(co2 / total2 * 100)
let incorrect2 = 100 - correct2



let e = sessionStorage.getItem('anime_easy_correct3');
let co3 = Number(e)

let f = sessionStorage.getItem('anime_easy_incorrect3');
let ic3 = Number(f)
let total3 = co3 + ic3

let correct3 = Math.round(co3 / total3 * 100)
let incorrect3 = 100 - correct3


let g = sessionStorage.getItem('anime_easy_correct4');
let co4 = Number(g)

let h = sessionStorage.getItem('anime_easy_incorrect4');
let ic4 = Number(h)
let total4 = co4 + ic4

let correct4 = Math.round(co4 / total4 * 100)
let incorrect4 = 100 - correct4


let j = sessionStorage.getItem('anime_easy_correct5');
let co5 = Number(j)

let k = sessionStorage.getItem('anime_easy_incorrect5');
let ic5 = Number(k)
let total5 = co5 + ic5

let correct5 = Math.round(co5 / total5 * 100)
let incorrect5 = 100 - correct5


let qt1 = sessionStorage.getItem('qt1');
let qt2 = sessionStorage.getItem('qt2');
let qt3 = sessionStorage.getItem('qt3');
let qt4 = sessionStorage.getItem('qt4');
let qt5 = sessionStorage.getItem('qt5');
let n = [qt1,qt2,qt3,qt4,qt5]
console.log(n);


let json = [
  {
      "type" : "A",
      "text" : "正解",
      "value" : correct1,
      "result" : co1,
      "result2" : ic1
  },
  {
      "type" : "O",
      "text" : "正解",
      "value" : correct2,
      "result" : co2,
      "result2" : ic2
  },
  {
      "type" : "B",
      "text" : "正解",
      "value" : correct3,
      "result" : co3,
      "result2" : ic3
  },
  {
      "type" : "AB",
      "text" : "正解",
      "value" : correct4,
      "result" : co4,
      "result2" : ic4
  },
  {
    "type" : "E",
    "text" : "正解",
    "value" : correct5,
    "result" : co5,
    "result2" : ic5
}
]


let json2 = [
  {
      "type" : "D",
      "text" : "不正解",
      "value" : incorrect1
  },
  {
      "type" : "D",
      "text" : "不正解",
      "value" : incorrect2
  },
  {
      "type" : "D",
      "text" : "不正解",
      "value" : incorrect3
  },
  {
      "type" : "D",
      "text" : "不正解",
      "value" : incorrect4
  },
  {
    "type" : "D",
    "text" : "不正解",
    "value" : incorrect5
}
]

let ax =
[
  {
      "text" : "Q1",
      "value" : "「a」"
  },
  {
      "text" : "Q2",
      "value" : "「b」"
  },
  {
      "text" : "Q3",
      "value" : "「c」"
  },
  {
      "text" : "Q4",
      "value" : "「d」"
  },
  {
    "text" : "Q5",
    "value" : "「e」"
}
]

let x = 0
let graphs = "";

for(i in json){
    if(n[x] == "True"){
       ans = "<img src='images/correct.png'>"
     }else{
       ans = "<img src='images/incorrect.png'>";
     };


  graphs += `<h2>${ax[x].text}&ensp;正解は${ax[x].value}</h2><p>正解${json[x].result}人 不正解${json[x].result2}人</p><div class = "allim"><div class ="marubatsu">${ans}</div><div class ="mbb"> <img class = img"" src =images/R.png></div></div></div>
  <div class="bar"><div class="bar-info bar-style type-${json[i].type}" data-total="${json[i].value}"><p class = "ab">${json[i].text}<span class="percent">${json[i].value}</span></p></div><div class="bar-info bar-style2 type-${json2[i].type}" data-total="${json2[i].value}"><p class ="abc">${json2[i].text}<span class="percent">${json2[i].value}</span></p></div></div>`
  x++
}
$('.wrapper').html(graphs);





$(document).ready(function() {// DOMが読み込まれて準備ができたら実行
    // $.ajax({
    //   url: 'data.json',
    //   dataType: 'json',
    //   success:function(json){
    //     console.log(json);
    //       let graphs = "";
    //       for(i in json){
    //         graphs += `<div class="bar"><div class="bar-info type-${json[i].type}" data-total="${json[i].value}">${json[i].type}<span class="percent">${json[i].value}</span></div></div>`;
    //       }
    //     $('.wrapper').html(graphs);
    //   },
    //   error: function(){
    //       alert("データの読み込みに失敗しました。しばらく経ってからアクセスし直してみて下さい。");
    //   }
    // })
  
      function typeSet() {
      //bar-info のクラスを使用して各要素を反復処理し、data-total の値を変数に格納
        $('.bar-info').each(function() {
         
          total = $(this).data("total");
          $(this).css("width", total + "%");//jQuery の CSS メソッドを使用して、各バーの幅を動的に更新する
        });
        //$(this) は、jQueryを使用してイベントハンドラ内で現在の要素（イベントが発生した要素）を指し示す特殊なセレクタ。これを使用すると、イベントが発生した要素に対して操作を行う際に便利
        
      //クラスパーセントを使用して各要素を繰り返す。
        $('.percent').each(function() {
          
          var $this = $(this);
          //カウンター。最大の数値に達するまで段階的に増加させる
          $({Counter: 0}).animate({
            Counter: $this.text()//text()で.percentのテキストを取得
          }, {
            duration: 3000,
            easing: 'swing',
            step: function() { $this.text(Math.ceil(this.Counter) + "%"); }
            //Math.ceilは引数として与えた数以上の最小の整数を返します(引数が0.8->1を返す)
          });
        });
      };//typeSet()終了
  
      // アニメーションが始まる前に短い遅延を発生させます。
      setTimeout(typeSet, 100);
    });

const thanks = new Audio('images/thanks.wav')
let thanks_button = document.querySelector(".btn-53")

// 音声ファイルを削除したため、以下の元のコードは現在は動作しません。
// 当時は「thanks」音声の再生後に自動的にトップページへ戻る処理をしていました。
// thanks_button.addEventListener('click', function() {
//   thanks.play();
//   setInterval(() => {
//       if (thanks.ended){
//           window.location.href="index.html"
//       }
//     }, 300)
//   });

thanks_button.addEventListener('click', function () {
  if (typeof thanks.play === 'function') {
    thanks.play().then(() => {
      thanks.onended = () => {
        window.location.href = "index.html";
      };
    }).catch(() => {
      window.location.href = "index.html";
    });
  } else {
    window.location.href = "index.html";
  }
});
