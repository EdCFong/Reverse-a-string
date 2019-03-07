//JavaScript
function reverseString(str) {
	var my_array = new Array();
	var str2= '';
   for(var i=0; i<str.length; i++)
   {
	  my_array.unshift(str.charAt(i));
   }
   for(var i=0; i<str.length; i++)
   {
	  str2 = str2 + my_array[i];
   }  
 
   
   return str2;
 }
 
 reverseString("hello");
  