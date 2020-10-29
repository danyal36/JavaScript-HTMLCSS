//Make a iffi function and namespace it as calculator 
const calculator = (function () {

  //helper function of reduce
  const sumReducer = (accumulator, currentValue) =>{
    
    if(Array.isArray(currentValue)){
      let currentvalue1 = reduce(currentValue,sumReducer);
      
      return accumulator + currentvalue1;
    
    }
    
    return accumulator + currentValue;
  
  }

  //Reduce function to reduce array to one element
  function reduce(array, reducer,initialValue){
    
    let accumulator = (initialValue === undefined) ? ((typeof array[0]==="string") ? '':0) : initialValue;
    
    for(let i=0;i<array.length;i++){
      accumulator = reducer(accumulator, array[i], i, array); 
    }  
    
    return accumulator;
  
  }

  //function to check weather is empty or null is passed to arguments
  checkEmpty = (array) => {
    
    if (array.length === 0) {
      throw "Input is Empty"
    }

  }

  checkArguments = (array) => {
    
    if (array.length === 0) {
      throw "Insufficient Arguments or missing Arguments"
    }

  }

  checkErrors = (array) =>{
    for(i of array){
  
      if(i === null || i === undefined){
        throw "Null or Undefined is used"; 
      }
  
    }
  }

  arrayFlatter= (array,depth) => {
    var flatArray = [];
    for(let i=0;i<array.length;i++){
  
      if(Array.isArray(array[i])){
        var temp = arrayFlatter(array[i]);
        for(let j=0;j<temp.length;j++){
          flatArray.push(temp[j]);
        }
      }
  
      else{
        flatArray.push(array[i]);
      }
  
    }
  
    return flatArray;
  
  }

  // Function to perform sum on the inputs or array.
  sum = (...arguments) => {
    try {
      checkEmpty(arguments);
      checkErrors(arguments);
      for(let i in arguments){
          
        if(arguments[i].length>1){
          checkErrors(arguments[i]);
          arguments[i]=reduce(arguments[i],sumReducer);
        }

        else{
          
          return reduce(arguments,sumReducer);
        
        }

      }

      return arguments;
  
    }
    catch (e) {
    
      return e;
    
    }
  }
  
  //sumBy function to handle the objects.
  sumBy = (...arguments) => {
      var sum1;
      try{
        let keyValue=arguments.pop();
        checkArguments(arguments);
        
        if(arguments.length>1){
          checkEmpty(arguments[0]);
          (typeof arguments[0][keyValue]==='number')? sum1=0:sum1='';
          for(let i of arguments){
            
            if(i[keyValue] !== undefined){
              sum1 = sum1 + i[keyValue];
            }

          }
        }

        else{
          checkEmpty(arguments[0]);
          (typeof arguments[0][0][keyValue]==='number')?sum1=0:sum1='';
          for(let i of arguments[0]){
            
            if(i[keyValue] !== undefined){
              sum1 = sum1 + i[keyValue];
            }

          }
        }

        if(sum1 === ""){
          throw "Key does not exist in any object";
        }

        return sum1;

      }
      catch(e){
        
        return e;

      }
  }

  //return the variables or the function that can be accessable
  return { sum ,sumBy, arrayFlatter};

})();