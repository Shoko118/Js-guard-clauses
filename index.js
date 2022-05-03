// passing function

function printCallBack(value) {
  console.log(value);
}

function useCallBack(callBack) {
  callBack("YO THIS IS THE VALUE");
}

useCallBack(printCallBack);
