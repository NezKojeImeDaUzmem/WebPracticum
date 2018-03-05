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
            num = ((h*60 + min) / 2.58).floor()
        }else{
            num = 255 - (((h-12)*60 + min) / 2.58)
        }
        num = parseInt(num)
        var colors = 'rgb(' + num + ',' + num + ',' +num + ')'
        $('main').css('backgroundColor', colors)

    }

    nowTime()
    setInterval(nowTime,1000)
})