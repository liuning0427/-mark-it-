$(".pic-1-2").hover(function(){
    $(".pic-1-1").stop().fadeTo(500,1,function(){
        $(this).css("display", "block");
    })
    $(".pic-1-1-1").stop().fadeTo(500,1,function(){
        $(this).css("display", "block");
    })
},function(){
    $(".pic-1-1").stop().fadeTo(500,0,function(){
        $(this).css("display", "none");
    })
    $(".pic-1-1-1").stop().fadeTo(500,0,function(){
        $(this).css("display", "none");
    })
})
$(".pic-2-2").hover(function(){
    $(".pic-2-1").stop().fadeTo(500,1,function(){
        $(this).css("display", "block");
    })
    $(".pic-2-1-1").stop().fadeTo(500,1,function(){
        $(this).css("display", "block");
    })
},function(){
    $(".pic-2-1").stop().fadeTo(500,0,function(){
        $(this).css("display", "none");
    })
    $(".pic-2-1-1").stop().fadeTo(500,0,function(){
        $(this).css("display", "none");
    })
})
$(".pic-3-2").hover(function(){
    $(".pic-3-1").stop().fadeTo(500,1,function(){
        $(this).css("display", "block");
    })
    $(".pic-3-1-1").stop().fadeTo(500,1,function(){
        $(this).css("display", "block");
    })
},function(){
    $(".pic-3-1").stop().fadeTo(500,0,function(){
        $(this).css("display", "none");
    })
    $(".pic-3-1-1").stop().fadeTo(500,0,function(){
        $(this).css("display", "none");
    })
})

// 遇到的问题：鼠标移入元素时，遮罩层不停闪烁
// 原因：显示层遮住了添加事件的元素，所以反复执行 onmouseover onmouseout。
// 解决方法: 在遮罩层的css上添加pointer-events: none;

$(".btn").on("click",function(){
    $(".menu").toggle();
})