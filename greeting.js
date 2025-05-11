let greeting;

console.log("0");

async function hello() {
  console.log("1");
  return (greeting = await new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Success!"), 1000); // задача выполнена успешно (через 1 секунду)
  }));
}
console.log("2");

hello().then(
  //     function (result) {
  //   alert(result);
  // }
  function (result) {
    console.log("3");
    console.log(result);
  }
);
