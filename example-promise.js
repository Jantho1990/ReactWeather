// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Rochester', function(err, temp){
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found.');
//     }, 1000);
//   });
// }
//
// getTempPromise('Rochester').then(function(temp){
//   console.log('success', temp);
// }, function(err){
//   console.log('error', err);
// });

// Challenge Area
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }else{
      reject('One or both of the arguments was not a number.');
    }
  });
}

addPromise('1', 2).then(function(sum){
  console.log('Sum:', sum);
}, function(err){
  console.log('Error:', err);
});
