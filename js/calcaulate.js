// let firstNum = "";
// let secondNum = "";
// let operator = "";
// let $numBtn = document.querySelectorAll(".num");
// const $operator = document.querySelector("#operator");
// const $result = document.querySelector("#result");

// const onClickNum = (event) => {
//   if (!operator) {
//     // 아직 연산자가 선택되지 않았을 때 (first number)
//     firstNum += event.target.textContent;
//     $result.value += event.target.textContent;
//     return;
//   }
//   if (!secondNum) {
//     // 연산자 선택 시
//     $result.value = ""; // 결과창에서 첫번째 값을 비워둔다.
//   }
//   // 이하부터는 두 번째 숫자
//   secondNum += event.target.textContent;
//   $result.value += event.target.textContent;
// };

// const onClickOperator = (op) => () => {
//   if (firstNum) {
//     // 첫 번째 숫자가 존재하는 경우
//     operator = op;
//     $operator.value = op;
//   } else {
//     // 첫 번째 숫자를 선택하지 않은 경우
//     alert("Please enter a number.");
//   }
// };

// // 각 숫자 버튼에 이벤트 걸기
// for (i = 0; i < $numBtn.length; i++) {
//   $numBtn[i].addEventListener("click", onClickNum);
// }

// document.querySelector("#calculate").addEventListener("click", () => {
//   if (secondNum) {
//     switch (operator) {
//       case "+":
//         $result.value = parseInt(firstNum) + parseInt(secondNum);
//         break;
//       case "-":
//         $result.value = parseInt(firstNum) - parseInt(secondNum);
//         break;
//       case "/":
//         $result.value = parseInt(firstNum) / parseInt(secondNum);
//         break;
//       case "*":
//         $result.value = parseInt(firstNum) * parseInt(secondNum);
//         break;
//     }
//   } else {
//     alert("Please enter a number.");
//   }
//   // 두 번 이상 계산할 때에는 결괏값을 첫 번째 값에 넣고 나머지 값은 초기화
//   $operator.value = "";
//   firstNum = $result.value;
//   secondNum = "";
//   operator = "";
// });

// document.querySelector("#clear").addEventListener("click", () => {
//   firstNum = "";
//   secondNum = "";
//   operator = "";
//   $operator.value = "";
//   $result.value = "";
// });

// document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
// document
//   .querySelector("#minus")
//   .addEventListener("click", onClickOperator("-"));
// document
//   .querySelector("#divide")
//   .addEventListener("click", onClickOperator("/"));
// document
//   .querySelector("#multiply")
//   .addEventListener("click", onClickOperator("*"));

// //2
const labelInput = document.querySelector(".input");
const keyClear = document.querySelector(".key--clear");
const keyDelete = document.querySelector(".key--delete");
const keyFunctions = document.querySelectorAll(".key--function");
const keyEquals = document.querySelector(".key--equals");
const keypads = document.querySelectorAll(".keypads");
const keyDot = document.querySelector(".key--dot");

(function () {
  // 계산에 필요한 데이터
  let value = 0;
  let inputValue = "";
  let operatorPre = "";
  let operator = "";

  // 계산 실행 함수
  const operate = function (operator) {
    // value = Number(value);
    // inputValue = Number(inputValue);

    switch (operator) {
      case "/":
        value /= inputValue;
        break;
      case "*":
        value *= inputValue;
        break;
      case "-":
        value -= inputValue;
        break;
      case "+":
        value += inputValue;
        break;
    }

    // 출력값의 자릿수 제한
    // if (value.toString().length > 12) {
    //   value = value.toString().slice(0, 13);
    // }
    // return value.toLocaleString();
  };

  // equals, clear, deleteOne, addDot
  const equals = function () {
    value = labelInput.textContent = operate(operator);
    operator = "";
  };
  const clear = function () {
    value = 0;
    inputValue = "";
    operator = "";
    labelInput.textContent = value;
  };
  const deleteOne = function () {
    inputValue = inputValue.slice(0, -1);
    labelInput.textContent = inputValue || 0;
  };
  const addDot = function () {
    inputValue += ".";
    labelInput.textContent = inputValue;
  };

  // 숫자 입력값 생성
  const setNumber = function (num) {
    if (!isNaN(num) && inputValue.length < 12) {
      inputValue += num;
      labelInput.textContent = inputValue;
    }
  };

  // 연산자 셋팅
  const setOperator = function (key) {
    operatorPre = operator;
    operator = key;
    if (value && inputValue) {
      value = labelInput.textContent = operate(operatorPre);
    }
    value = value || inputValue;
    inputValue = "";
  };

  // 이벤트 리스너
  // 숫자 클릭이벤트 감지
  keypads.forEach((key) => {
    key.addEventListener("click", (e) => {
      let num = e.target.textContent.trim();
      setNumber(num);
    });
  });

  // 연산자 클릭이벤트 감지
  keyFunctions.forEach((key) =>
    key.addEventListener("click", (e) => {
      let key = e.target.textContent.trim();
      setOperator(key);
    })
  );

  // equals, clear, deleteOne 클릭감지
  keyEquals.addEventListener("click", () => {
    equals();
  });
  keyClear.addEventListener("click", () => {
    clear();
  });
  keyDelete.addEventListener("click", () => {
    deleteOne();
  });

  // 키보드 이벤트 감지
  // window.addEventListener("keydown", function (e) {
  //   let key = e.key;
  //   if (!isNaN(key)) setNumber(key);
  //   else if (key === "/" || key === "*" || key === "-" || key === "+")
  //     setOperator(key);
  //   else if (key === "Enter") equals();
  //   else if (key === "Backspace") deleteOne();
  //   else if (key === "Escape") clear();
  //   else if (key === ".") addDot();
  // });

  // keyDot.addEventListener("click", () => {
  //   addDot();
  // });
})();

let keyResultValue = document.querySelector(".result-value");
let keyOperate = document.querySelectorAll("#operate");
let keyNumberValue = document.querySelectorAll("#num");

(function () {
  let value = 0;
  let initialValue = "";
  let operator = "";

  const operate = function () {
    switch (operator) {
      case "-":
        initialValue -= value;
        operate = "";
        
    }
  };
})();
