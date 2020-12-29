/**
 * 
 */

var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')
var temp=document.querySelector('.temp');
var country=document.querySelector('.country');
var desc=document.querySelector('.desc');



  button.addEventListener('click',function()
   {
	fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1fd9e7b03b8f473efc9847e127c182dd')
	.then(response => response.json())
	.then(data => {
	    var tempValue= data['main']['temp'];
	    var countryValue= data["sys"]["country"];
	    var descValue= data['weather'][0]['description'];
	   
	    
	  
	    temp.innerHTML=tempValue;
	   country.innerHTML=countryValue;
	    desc.innerHTML=descValue;
	    
	})
	
	.catch(err=> alert("Wrong city..!"))
})



