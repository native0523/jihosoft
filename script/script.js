$(document).ready(function(){
    
    // 0 1 2 3
    var cur = 0; // 현재 우리가 보고있는(보고자하는) 슬라이드 번호
    function sliding(dir){  //미지수 dir
        cur = cur + dir;
        if(cur >= 4){
            cur = 0;
        }
        $(this).fadeOut();
        $(".slide").eq(cur).fadeIn();
    }
    
    function(){ sliding(1); });/*처음 0페이지였을 때 .sprev누르면 3페이지가 돼야*/
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
});
    
    
    
    
    
    
    
    
    
    
    
    
