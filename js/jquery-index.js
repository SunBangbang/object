$(function() {

    //页面飘落花瓣
    $(document).snowfall('clear');
    $(document).snowfall({
        image: "images/huaban.png",
        flakeCount: 50,
        minSize: 10,
        maxSize: 50
    });

    // 头部二维码效果
    $('.logo_guan').mouseenter(function() {
        $(this).next().stop().fadeIn(1000)
    })
    $('.yinDao').mouseleave(function() {
        $(this).children('.er').stop().fadeOut()
    })

    //banner轮播

    var index = 0;
    $('.arrow-right').click(function() {
        index++;
        if (index > $('.slider li').length - 1) {
            index = 0;
        }
        $('.slider li').eq(index).show().siblings().hide();
    })

    timeId = setInterval(function() {
        $('.arrow-right').click();
    }, 3000)

    $('.arrow-left').click(function() {
        index--;
        if (index < 0) {
            index = $('.slider li').length - 1;
        }
        $('.slider li').eq(index).show().siblings().hide();
    })


    //扫码/下载信息
    var $er = $('.xuan_tv .guan_xin .er')
    $er.mouseenter(function() {
        $(this).stop().animate({
            right: 380,
            top: 10
        }, 500, function() {
            $(this).stop().animate({
                right: 370,
                top: 0
            }, 500)
        })
    })
    var $desk_load = $('.xuan_tv .guan_xin .desk_load')
    $desk_load.mouseenter(function() {
        $(this).stop().animate({
            right: 50,
            top: 10
        }, 500, function() {
            $(this).stop().animate({
                right: 60,
                top: 0
            }, 500)
        })
    })

    //热门推荐轮播效果
    var config = [{
            width: 420,
            top: 70,
            left: 390,
            opacity: 0.7,
            zIndex: 2
        }, //0
        {
            width: 420,
            top: 120,
            left: 100,
            opacity: 0.8,
            zIndex: 3
        }, //1
        {
            width: 620,
            top: 150,
            left: 300,
            opacity: 1,
            zIndex: 4
        }, //2
        {
            width: 420,
            top: 120,
            left: 700,
            opacity: 0.8,
            zIndex: 3
        },
    ];

    var $lis = $('.xuan_tv .slide li');
    //每个li的值进行遍历
    $lis.each(function(i, ele) {
            $(ele).stop().animate(config[i], 1000)
        })
        //定时器
    setInterval(function() {
        config.push(config.shift());
        $lis.each(function(i, ele) {
            $(ele).stop().animate(config[i])
        })
    }, 2500)





    //人物介绍 li图标鼠标移入事件
    var $lis_d = $('.ren_wu .container .sect02 li')
    var $lis_h = $('.ren_wu .container .sect01 li')
    $lis_d.bind({
        mouseover: function() {
            //移入时大图切换
            var index = $(this).index();
            $lis_h.eq(index).addClass('selected').siblings().removeClass('selected');
        }
    })

    //移入时li的图片翻转换成另一张图


    $('.ren_wu .sect02 .tu01 span').mouseover(
        function() {
            $(this).addClass('current1')
        }
    )
    $('.ren_wu .sect02 .tu01 span').mouseout(
        function() {
            $(this).removeClass('current1')
        }
    )

    $('.ren_wu .sect02 .tu02 span').on({
        mouseover: function() {
            $(this).addClass('current2')
        },
        mouseout: function() {
            $(this).removeClass('current2')
        }
    })

    $('.ren_wu .sect02 .tu03 span').on({
        mouseover: function() {
            $(this).addClass('current3')
        },
        mouseout: function() {
            $(this).removeClass('current3')
        }
    })

    $('.ren_wu .sect02 .tu04 span').on({
        mouseover: function() {
            $(this).addClass('current4')
        },
        mouseout: function() {
            $(this).removeClass('current4')
        }
    })
    $('.ren_wu .sect02 .tu05 span').on({
        mouseover: function() {
            $(this).addClass('current5')
        },
        mouseout: function() {
            $(this).removeClass('current5')
        }
    })
    $('.ren_wu .sect02 .tu06 span').on({
        mouseover: function() {
            $(this).addClass('current6')
        },
        mouseout: function() {
            $(this).removeClass('current6')
        }
    })
    $('.ren_wu .sect02 .tu07 span').on({
        mouseover: function() {
            $(this).addClass('current7')
        },
        mouseout: function() {
            $(this).removeClass('current7')
        }
    })



    //查询翻转

    $('.section03 .query_fan .tu01 span').on({
        mouseenter: function() {
            $(this).addClass('active1')
        },
        mouseleave: function() {
            $(this).removeClass('active1')
        }
    })
    $('.section03 .query_fan .tu02 span').on({
        mouseover: function() {
            $(this).addClass('active2')
        },
        mouseout: function() {
            $(this).removeClass('active2')
        }
    })

    $('.section03 .query_fan .tu03 span').on({
        mouseover: function() {
            $(this).addClass('active3')
        },
        mouseout: function() {
            $(this).removeClass('active3')
        }
    })
    $('.section03 .query_fan .tu04 span').on({
        mouseover: function() {
            $(this).addClass('active4')
        },
        mouseout: function() {
            $(this).removeClass('active4')
        }
    })



    //同人专区tab切换个
    var $lis_tr = $('.section04 .tong_right_s li')
    var $uls_tr = $('.section04 .tong_right_x ul')
    $lis_tr.on({
        mouseover: function() {
            $(this).addClass('active').siblings().removeClass('active').end().css('color', 'black')
            var index = $(this).index();
            $uls_tr.eq(index).addClass('selected').siblings().removeClass('selected')
        },
        mouseout: function() {
            $(this).removeClass('active').css('color', '#fff');
        }

    })

    //音画鉴赏tab切换个
    var $lis_yh = $('.section04 .yin_right_s li')
    var $uls_yh = $('.section04 .yin_right_x ul')
    $lis_yh.on({
        mouseover: function() {
            $(this).addClass('active').siblings().removeClass('active').end().css('color', 'black')
            var index = $(this).index();
            $uls_yh.eq(index).addClass('selected').siblings().removeClass('selected')
        },
        mouseout: function() {
            $(this).removeClass('active').css('color', '#fff');
        }

    })

    //侧导航
    $('.gu_nav2').on('click', function() {
        $(this).stop().animate({
            right: '-88px',
        }, function() {
            $(this).prev().stop().animate({
                right: 0,
            })
        })
    })
    $('.shut').on('click', function() {
        $(this).parent().stop().animate({
            right: '-155px',
        }, function() {
            $('.gu_nav2').stop().animate({
                right: 0,
            })
        })
    })















})