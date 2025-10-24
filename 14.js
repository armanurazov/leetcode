var longestCommonPrefix = function(strs) {
    var count = 0;
    var flag = 0;
    var len = strs.length
    var result = '';
    while (flag == 0){
        for (var i = 1; i < len; i++){
            if(strs[0][count] == strs[i][count]){
                //console.log('i: '+ i + ' and count: '+ count);
            }else{
                flag = 1;
                for(var i = 0; i < count; i++){
                    result = result + strs[0][i];
                }
                return result;
            }
        }
        count++;
    }
    return '';
    
};

var longestCommonPrefixOptimized = function(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefixOptimized(["flower","flow","flight"]))