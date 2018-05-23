function reducer(str, val){
  var splitter = str.split("");
  var res = splitter.reduce(function (prevResult, currValue){
    if (val===currValue){
      return true;
    }
    if (prevResult=== true){
      return true;
      }
      else{ 
        return false;
      }
  console.log(prevResult);
    
  });
return res;
}
reducer("kahbhbaksbdjhbhasajnnm", "k");