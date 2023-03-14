const countProps = function (obj) {
    let propCount = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)){
        propCount += 1;
      }
    }
      return propCount;
    }


  
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3