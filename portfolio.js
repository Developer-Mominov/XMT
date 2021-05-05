if(localStorage.styr == null){
var str=prompt("What is your name?");
localStorage.setItem('styr',str);
}

$('body').css({
    "overflow":"hidden"
})
window.onload=function(){
 setTimeout(() => {
      
    $('.loadc').fadeOut(1000); 
    $('.main').fadeIn(0);
    $('body').css({
        "overflow":"auto"
    })  
   
    setTimeout(() => {
        tpw();    
    }, 2000);
    

 }, 1500);       
 
}

$(document.body).append("<div class='loadc'> <img class='sd'> <h2 class='local'>Welcome "+localStorage.styr+"<h2> </div>");
$('.sd').attr('src', './data/25.gif');






$(document).ready(function(){




});


/* ---------------------------------------  */
    var arr="I'm a Web Developer"
    var arr2="Welcome to my Website"
   
     var sum=0;
     var t="";
     var r=0;
     function tpw() 
    { 
     
        if($('.nrt').text().length <= arr.length && r==0)
        {
            
            console.log('jr2');
        sum++;
        t=arr.slice(0,sum); 
        $('.nrt').text(t+"|");
        setTimeout("tpw()",190);
        
        }
        else if(sum > 0 && r!= 2)
        {   
                
                console.log('jr1');
                r=1;
                sum--;
                t=arr.slice(0,sum); 
                $('.nrt').text(t+"|");
                setTimeout("tpw()",190);
                   
        }
        else if ($('.nrt').text().length <= arr2.length){
            r=2;
            sum++;
            t=arr2.slice(0,sum); 
            $('.nrt').text(t+"|");
            setTimeout("tpw()",190);
           
        }
        
        else{
 
            setTimeout(() => {

                r=0;    
                $('.nrt').text(".");
                t="";
                sum=1;
                setTimeout("tpw()",190);
                                
            }, 3000);

           
        }
        
         

    }

    /* ---------------------------------------  */
 
    var sc=0;    

    $(document).scroll(function(){


        

         sc = $('html,body').scrollTop();
       

         



        if(sc > 100 ){
            $('nav').removeClass('hgr2');
            $('nav').addClass("hgr");
            
     
       }else{
           
        $('.lop').css("background","#191919");
        $('nav').removeClass('hgr');

        $('nav').addClass("hgr2");
     

       }


     



    })

    $(".bar").click(function () { 
        
        $('.menubar').toggle(300);
        
    });
    $(".close").click(function () { 
        
        $('.menubar').toggle(300);
        
    });
    $(".menubar li").click(function(){
        $('.menubar').toggle(300);
      


    })