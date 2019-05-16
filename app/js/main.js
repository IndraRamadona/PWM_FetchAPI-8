/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// helper functions ----------

function logResult(result) { //bagian ini berfungsi untuk menampilkan resul pada console ketika salah satu data kita klik maka akan muncul di bagian console
  console.log(result);
}

function logError(error) { //fungsi bagian ini jika program terdapat kesalahan maka bagian ini akan muncul]
  console.log('Looks like there was a problem:', error);
}

function showImage(responseAsBlob) { // bagian ini digunakan untuk merespon data yang di pakai pada id img dan container, kemudian juga merespon url yang digunakan pada img
  const container = document.getElementById('img-container');
  const imgElem = document.createElement('img');
  container.appendChild(imgElem);
  const imgUrl = URL.createObjectURL(responseAsBlob);
  imgElem.src = imgUrl;
}

function showText(responseAsText) { // bagian ini digunakan untuk merespon dan menampilkan pada bagian data text, jika data di respon maka akan muncul pesan berupa isi data text tersebut
  const message = document.getElementById('message');
  message.textContent = responseAsText;
}


function validateResponse(response) { // bagian ini digunakan untuk mempalidasi data yang dimana setiap data direpon benar makan data yang ditampilkan benar, kemudian jika error maka akan muncul status bahwasannya data tidak di respon
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) { // bagian ini berfungsi untuk merespon data json
  return response.json();
}

function readResponseAsBlob(response) { // bagian ini digunakan untuk menyediakan tempat data yang digunakan seperti json,text,img
  return response.blob();
}

function readResponseAsText(response) { // bagian ini digunakan untuk membaca data text 
  return response.text();
}

// Fetch JSON ----------

// bagian ini digunakan untuk menampilkan atau menangkap file json misalnya animasi.json, kemudian data json di validasi atau di respon, jika error maka data tidak akan muncul
function fetchJSON() {
  // TODO
  fetch('examples/animals.json')
	.then(validateResponse) // 2
	.then(readResponseAsJSON) // 3
	.then(logResult) // 4
	.catch(logError);

}
const jsonButton = document.getElementById('json-btn');// bagian ini digunakan untuk memanggil element id yaitu json-btn kemudian ditambahkan eventlistener dengan cara klik pada colom fetchjson
jsonButton.addEventListener('click', fetchJSON);


// Fetch Image ----------

// bagian ini digunakan untuk menampilkan atau menangkap file img misalnya tetching.img, kemudian data json di validasi atau di respon, jika error maka data tidak akan muncul
function fetchImage() {
  // TODO
  fetch('examples/fetching.jpg')
	.then(validateResponse)
	.then(readResponseAsBlob)
	.then(showImage)
	.catch(logError);
}
const imgButton = document.getElementById('img-btn');// bagian ini digunakan untuk memanggil element id yaitu img-btn kemudian ditambahkan eventlistener dengan cara klik pada colom fetchimg
imgButton.addEventListener('click', fetchImage);


// Fetch text ----------
// bagian ini digunakan untuk menampilkan atau menangkap file text misalnya words.text, kemudian data json di validasi atau di respon, jika error maka data tidak akan muncul
function fetchText() {
  // TODO
  fetch('examples/words.txt')
	.then(validateResponse)
	.then(readResponseAsText)
	.then(showText)
	.catch(logError);
}
const textButton = document.getElementById('text-btn');// bagian ini digunakan untuk memanggil element id yaitu img-btn kemudian ditambahkan eventlistener dengan cara klik pada colom fetchtext
textButton.addEventListener('click', fetchText);

// bagian ini digunakan untuk mengambil data yang berada pada url dibawah, kemudian jika data tersebut direspon makan akan di tampilkan dengan menggunakan showtext
// jika data salah maka url tersebut tidak akan menampilkan data yang ada didalamnya
function fetchdata() {
  // TODO
  fetch('http://jsonplaceholder.typicode.com/users')
	.then(validateResponse) // 2
	.then(readResponseAsText)// 3
	.then(showText) // 4
	.catch(logError);

}
const dataButton = document.getElementById('data-btn');// bagian ini digunakan untuk memanggil element id yaitu data-btn kemudian ditambahkan eventlistener dengan cara klik pada colom fetchdata
dataButton.addEventListener('click', fetchdata);


// HEAD request ----------

function headRequest() {
  // TODO
}
const headButton = document.getElementById('head-btn');
headButton.addEventListener('click', headRequest);


// POST request ----------

/* NOTE: Never send unencrypted user credentials in production! */
function postRequest() {
  // TODO
}
const postButton = document.getElementById('post-btn');
postButton.addEventListener('click', postRequest);
