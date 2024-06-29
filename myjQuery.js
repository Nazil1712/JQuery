$(document).ready(function(){
    // alert('jQuery loaded')
    // $(Selector).action
    // $('h1').action() //jQuery Syntax

    // $('h1').click(function(){
    //     console.log("You clicked on h1", this)
    //     $('h1').hide()
    // })

    // $('p').click(function(){
    //     console.log("You clicked on p", this)
    //     // $('p').hide();
    //     // $(this).hide();    // Clicked button will be hidden
    //     // $('#id').hide();
    //     // $('.class').hide();
    // })

    
    // $('p').dblclick(function(){
    //     console.log("You DOUBLE CLICKED ON P", this)
    // })


    // $('p').mouseenter(function(){
    //     console.log("You enetered : ", this)
    // })


    // $('p').mouseleave(function(){
    //     console.log("You leaved : ", this)
    // })


    // .hover takes two parameters, 1) For mouseEnter and 2) mouseleave 
    // $('p').hover(function(){
    //     console.log("You Entered")
    // }, function() {
    //     console.log("You Leaved")
    // })



    // .on({})
    // $('p').on('click',function(){
    //     console.log("You clicked",this)
    // })


    // $('p').on({
    //     click:function(){
    //         console.log("You clicked on p =>",this)
    //     },
    //     dblclick:function(){
    //         console.log("You Double clicked =>", this)
    //     },
    //     mouseenter:function(){
    //         console.log("You Entered mouse")
    //     }
    // })



    // $('#wiki').hide(1000,function(){
    //     console.log("Wiki is hidden")
    // })
    // $('#wiki').show(1000,function(){
    //     console.log("Wiki is visible")
    // })


    // $('#content').click(function(){
    //     $('#wiki').toggle()
    // })


    // ************************************* //

    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()


    // $('#content').click(function(){
    //     $('#wiki').fadeOut(1000)
    // })


    // $('#content').click(function(){
    //     $('#wiki').fadeToggle(1000)
    // })


    // $('#content').click(function(){
    //     $('#wiki').fadeTo(1000,0.1)
    // })
    


    // ************************************* //
    // Slide

    // $('#content').click(function(){
    //     $('#wiki').slideToggle(10000,function(){
    //         console.log("SlideToggle Called")
    //     })
    // })
    

    // ************************************* //

    /* 
    // We have three types of selectors in jQuery
    1) Element Selector
    2) Class Selector
    3) Id Selector
    */

    // 1)  Example of Element selector
    // $('p').click()


    // 2) Example of Class selector
    // $('.text-red').click()

    // 3) Example of Id selector
    // $('#kk').click()


    // $('*').click()



    // ******************* Animate ****************** //

    // $('#content').click(function(){
    //     $('#wiki').animate({
    //         opacity: 0.5,
    //         width: '350px',
    //         height: '450px'
    //     },1000);
    // })


    // $('#content').click(function(){
    //     $('#wiki').animate({width:"200px"},4000)
    //     $('#wiki').animate({opacity:0.2},4000)
    //     $('#wiki').animate({width:"100px"},1000)
    // })


    // To stop animation, we can use => $('#wiki).stop()

    $('#content').click(function(){
        $('#wiki').text('Nazil N. Dhalwala')
    })
});