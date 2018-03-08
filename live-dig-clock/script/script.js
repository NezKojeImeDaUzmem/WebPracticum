/**
 * Created by Fran on 5.3.2018..
 */


$(document).ready(function(){



    var num
    var currentColor = ''

    var white
    var blue
    var green
    var yellow
    var pink

    function nowTime() {


        //color border between day and night
        var darknessChange = 0.5

        var date = new Date()
        var h = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()

        h = (h < 10) ? '0' + h : h
        min = (min < 10) ? '0' + min : min
        sec = (sec < 10) ? '0' + sec : sec

        $('#h').text(h)
        $('#min').text(min)
        $('#sec').text(sec)


        //background color
        h = parseFloat(h)
        min = parseFloat(min)
        sec = parseFloat(sec)

        if (h < 12) {
            num = ((h * 60 + min) / 7.2) / 100
        } else {
            num = (((h - 12) * 60 + min) / 7.2) / 100
        }


        white = 'rgba(0,0,0,' + num + ')'
        blue = 'rgba(0,188,212,' + num + ')'
        green = 'rgba(0,204,8,' + num + ')'
        yellow = 'rgba(255,229,0,' + num + ')'
        pink = 'rgba(233,30,99,' + num + ')'

        changeNow()


        //info button
        var info = $('.info')
        if (num > darknessChange && info.hasClass('i-day')) {
            info.toggleClass('i-day').toggleClass('i-night')
        } else if (num <= darknessChange && info.hasClass('i-night')) {
            info.toggleClass('i-day').toggleClass('i-night')
        }

        //home button
        var homeBtn = $('.linklist')
        if (num > darknessChange && homeBtn.hasClass('linklist-day')) {
            console.log('night')
            homeBtn.toggleClass('linklist-day').toggleClass('linklist-night')
        } else if (num <= darknessChange && homeBtn.hasClass('linklist-night')) {
            console.log('day')
            homeBtn.toggleClass('linklist-day').toggleClass('linklist-night')
        }
    }

    //hover bars button
    $('.colorBtn').hover(function(){$(this).find('.choseColorBox').removeClass('none')},
                         function(){$(this).find('.choseColorBox').addClass('none')})

    //hover info content
    var info = $('.info')
    info.hover(function () {
        info.find('.info-content').removeClass('none')
    }, function () {
        info.find('.info-content').addClass('none')
    })

    //changing background color
    $('.choseColorBox').click(function(event){
        var targetId = event.target.id
        if(targetId == 'white'){
            console.log('white')
            currentColor = white
        }
        else if(targetId == 'blue'){
            console.log('blue')
            currentColor = blue
        }
        else if(targetId == 'green'){
            console.log('green')
            currentColor = green
        }
        else if(targetId == 'yellow'){
            console.log('yellow')
            currentColor = yellow
        }
        else if(targetId == 'pink'){
            console.log('pink')
            currentColor = pink
        }
        changeNow()
    })

    function changeNow(){
        $('.backBrightness').css('backgroundColor', (currentColor == '')? white : currentColor)
    }

    nowTime()
    console.log(num)

    setInterval(nowTime,1000)

})

