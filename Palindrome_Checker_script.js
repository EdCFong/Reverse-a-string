//JavaScript
function reverseString(str) {
	var my_array = str.split(/ +|\W|_/);
  str = my_array.join("");
  str = str.toLowerCase();

  var second_array = [];
  for(var i=0; i<str.length; i++)
   {
	  second_array.unshift(str[i]);
   }
  var second_str = second_array.join("");
  if(str == second_str)
  {
    return true;
  }
  else
  {
    return false;
  }
 }
 
 
  