/**
 * Created by Fran on 5.3.2018..
 */


$(document).ready(function(){

    function nowTime(){
        var date = new Date()
        var h = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()

        h = (h<10)? '0'+h : h
        min = (min<10)? '0'+min : min
        sec = (sec<10)? '0'+sec : sec

        $('#h').text(h)
        $('#min').text(min)
        $('#sec').text(sec)

        //background color
        h = parseFloat(h)
        min = parseFloat(min)
        sec = parseFloat(sec)


        var num
        if(h<12){
            num = ((h*60 + min) / 6.6)/100
        }else{
            num = (((h-12)*60 + min) / 6.6)/100
        }

        var white = 'rgba(0,0,0,' + num +')'
        var blue = 'rgba(0,188,212,' + num +')'
        var green = 'rgba(0,204,8,' + num +')'
        var yellow = 'rgba(255,229,0,' + num +')'
        var pink = 'rgba(233,30,99,' + num +')'

        var currentColor = white

        $('.backBrightness').css('backgroundColor', currentColor)

        //color border between day and night
        var darknessChange = 0.5

        //info button
        var info = $('.info')
        if(num > darknessChange && info.hasClass('i-day')){
            info.toggleClass('i-day').toggleClass('i-night')
        }else if(num <= darknessChange && info.hasClass('i-night')){
            info.toggleClass('i-day').toggleClass('i-night')
        }


        //info content
        info.hover(function(){
            info.find('.info-content').removeClass('none')
        },function(){
            info.find('.info-content').addClass('none')
        })

        //home button
        var homeBtn = $('.linklist')
        if(num > darknessChange && homeBtn.hasClass('linklist-day')){
            console.log('night')
            homeBtn.toggleClass('linklist-day').toggleClass('linklist-night')
        }else if(num <= darknessChange && homeBtn.hasClass('linklist-night')){
            console.log('day')
            homeBtn.toggleClass('linklist-day').toggleClass('linklist-night')
        }
    }

    nowTime()
    setInterval(nowTime,1000)
})