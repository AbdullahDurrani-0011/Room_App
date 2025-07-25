const text1 = document.getElementById("InnerText1");
const text2 = document.getElementById("InnerText2");



InnerText1.addEventListener("input", () => {
  InnerText2.value = InnerText1.value;
});

InnerText2.addEventListener("input", () => {
  InnerText1.value = InnerText2.value;
});



// let counter = 0;
// const intervalId = setInterval(function() {
//   window.location.href = "index.html";
//   counter++;
//   if (counter === 5) {
//     clearInterval(intervalId); 
//   }
// }, 1000); 


// function myTimer() {
//   const d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }


// var countDownDate = new Date("5:00 , 00").getTime();

// let  x = setInterval(function() {

//   let  now = new Date().getTime();
    
//   let  distance = countDownDate - now;
    


//   let  minutes = Math.floor((distance % (  60 * 60 )) / (1000 * 60));
//   let  seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
//   document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    

//   if (distance < 5 && distance >= 5) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "stop";
//   }
// }, 1000);


   function CountDown(duration, display) {
            if (!isNaN(duration)) {
                var timer = duration, minutes, seconds;
                
              var interVal=  setInterval(function () {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "300" + seconds : seconds;

                    $(display).html("<b>" + minutes + "m : " + seconds + "s" + "</b>");
                    if (--timer < 0) {
                        timer = duration;
                       SubmitFunction();
                       $('#display').empty();
                       clearInterval(interVal)
                    }
                    },1000);
            }
        }
        
        function SubmitFunction(){
       $('form').submit();
        
        }
    
         CountDown(300,$('#display'));