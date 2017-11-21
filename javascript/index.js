
function id(id){
    return typeof(id) === "string"?document.getElementById(id):id;
}


var index = 0,
    timer = null,
    main = id("main-slider"),
    dots = id("dots"),
    banner = main.getElementsByTagName('div'),
    btn_li = dots.getElementsByTagName('li');
    console.log(main);
    console.log(banner);
var back = id("back"),
    next = id ("next");
function slideImg(){
    
    //滑过清除定时器，离开继续
    main.onmouseover = function(){
        //滑过清楚定时器
        if(timer)clearInterval(timer);
    }

    //离开继续轮播
    main.onmouseout = function(){    
        timer = setInterval(function(){
            index++;
            if(index>=banner.length){
                index = 0;
            }
            changeImg();
        },3000);
    } 
    //自动在main上触发鼠标离开的事件
    main.onmouseout();

    
    //遍历所有点击，且绑定点击事件，点击圆点切换图片
    for(var i=0;i<banner.length;i++){
        //给所有的span添加一个id属性，值为的，作为当前span的索引
        btn_li[i].id = i; 
        btn_li[i].onclick = function(){
            //改变index为当前span的id值
           index = this.id;
            //调用changeImg,实现切换图片
            changeImg();
        }
    }
}
    //下一张
    next.onclick = function(){
        index++;
        if(index>=banner.length){
            index=0;
        }
        changeImg();
    }
    back.onclick = function(){
        index--;
        if(index< 0){
            index =banner.length-1;
        }
        changeImg();
    }
    

//切换图片
function changeImg(){
    //遍历banner下所有的div， 将其隐藏
    for(var i=0;i<banner.length;i++){
        banner[i].style.display = 'none';
        btn_li[i].className = '';
    }
    //根据index索引找到当前的div,将其显示出来
    banner[index].style.display = 'block';
    btn_li[index].className = 'li-active';
}

slideImg();