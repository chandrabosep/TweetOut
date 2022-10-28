var cpyBtn = document.querySelector(".copy");
var twitterBtn = document.querySelector(".twitter")


    var textArea = document.querySelector("#text-area");
    //Returns the element which matches id #text and stores in pText
    var btnClicked = document.querySelector('#generate');
    //Returns the element which matches id #btn and stores in pBtn
    

    //pBtn will listen for any clicks and calls the function 

  textArea.innerHTML = '<i class="fa-solid fa-heart"></i>';

    btnClicked.addEventListener("click",function(){
    //sends random elements from the set
    var randomTweet = tweets[Math.floor(Math.random()*tweets.length)];
    textArea.innerHTML = randomTweet;
    });


    
    cpyBtn.addEventListener("click",function(){
        navigator.clipboard.writeText(textArea.innerHTML);
    });

    twitterBtn.addEventListener("click",function(){
        var tweetUrl = "https://twitter.com/intent/tweet?url=" + textArea.innerHTML ;
        window.open(tweetUrl,"_blank");
    });
