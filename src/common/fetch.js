
//URL GET
let { hostname } = window.location;

if (hostname.indexOf('m.') != -2) {
  //hostname 문자열에서 m. 포함된 경우 제거
  var baseUrl = hostname.slice(2);
} else {
  var baseUrl = hostname;
}

let api = "coins" //api code 받아와야함


//HTTP Method
let rqMethod = "GET";

let rqValue = {
  method: rqMethod,
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  mode: 'cors',
  'cache': 'no-cache',
  credentials: 'include'
};

//console.log(rqValue);


const Fetch = (apiName, param) => {
  //api 주소 
  let apiUrl = "//api." + baseUrl + "/v1/" + apiName;

  return fetch(apiUrl, rqValue)
    .then((response) => response.json())
    .then(function (data){
      
      var data = JSON.stringify(data, null, "\t");
      
      return data;
    })
    .then(function (data) {
      console.log("통신성공");
      
      let fetch = data;
      //console.log(fetch);
      return fetch;
    })
    .catch(function (error) {
      console.log("통신실패");
      let fetch = error.message;
      return fetch;
    });
}

//console.log(rqValue);

export default Fetch;

