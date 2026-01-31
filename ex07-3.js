function calcBMI(){let height=Number(document.getElementById("height").value);
                   let weight=Number(document.getElementById("weight").value);


let heightMeter=height / 100;
let bmi=weight/(heightMeter*heightMeter);

document.getElementById("result").innerHTML=
                "あなたのBMIは" +bmi.toFixed(1)+"です";
                  }
