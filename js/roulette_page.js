$(function(){
    var i = 0;
    var times = 5;
    var d = 0;
    var sta = 0;
    $(".press").on("click",function(){
        i = parseInt(Math.random() * 360)
        if(sta == 0){
            if(times > 0){
                times -- ;
                $(".font28px .red").html(times);
                set = setInterval(function(){
                    if(d< i){
                        d ++ ;
                        sta = 1;
                    } else{
                        if(i> 0 && i<= 22.5 || i <= 202.5 && i > 157.5){
                            $(".shadow").fadeIn();
                            $(".award").fadeIn().css({"background":"url(../images/30fee.png) no-repeat","background-size": "100% 100%" });
                        } else if(i> 22.5 && i <=67.5 || i> 202.5 && i <= 247.5){
                            $(".shadow").fadeIn();
                            $(".award").fadeIn().css({"background":"url(../images/300Mdata.png) no-repeat","background-size": "100% 100%" });
                        } else if(i> 67.5 && i<= 112.5 || i>247.5 && i<= 292.5){
                            $(".shadow").fadeIn();
                            $(".award").fadeIn().css({"background":"url(../images/100Mdata.png) no-repeat","background-size": "100% 100%" });
                        } else if(i> 112.5 && i <= 157.5 || i> 292.5 && i<= 337.5){
                            $(".shadow").fadeIn();
                            $(".award").fadeIn().css({"background":"url(../images/500Mdata.png) no-repeat" ,"background-size": "100% 100%" });
                        }
                        clearInterval(set);
                        sta = 0;
                    }
                    $(".roulette").css({"transform":"rotate("+d+"deg)"}) 
                },1000/240)
            } else{
                $(".press").css({"background":"url(../images/Pointer2.png) no-repeat"})
                clearInterval(set) 
            }
        }
        
    }) 
    
    $(".x").on("click",function(){
        $(".award").fadeOut();
        $(".shadow").fadeOut();
    })
})