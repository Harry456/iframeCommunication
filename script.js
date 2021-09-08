let iframeReceiver = document.getElementById('iframe').contentWindow;
let iframeContentDocument = document.getElementById('iframe').contentDocument;

console.log(iframeReceiver);

let data = {
  userName: 'harry',
  email: 'harry@example.com',
};

//iframeReceiver.postMessage('hello message', 'http://127.0.0.1:5500');
//iframeReceiver.postMessage(data, 'http://127.0.0.1:5500');
iframeReceiver.postMessage(data, '*');

let a = iframeContentDocument.querySelector('forms');
console.log(iframeContentDocument);
console.log(a);
