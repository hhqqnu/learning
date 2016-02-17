var promise = new Promise(function(resolve,reject){
  console.log('Promise');
  resolve();
});

promise.then(function(){
  console.log('Resolve.');
});

console.log('hi!');


function loadImageAsync(url){
  return new Promise(function(resolve,reject){
    var img = new Image();
    img.onload= function(){
      resolve(img);
    };
    img.onerror=function(){
      reject(new Error('Could not load image at '+url));
    }
    img.src=url;
  });
}

loadImageAsync('http://').then(function(img){
  console.log(img);
}).catch(function(e){console.error(e);});
