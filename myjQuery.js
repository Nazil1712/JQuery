
$(document).ready(function(){
    // $(Selector).action
    // $('h1').action() //jQuery Syntax

    $('h1').click(function(){
        console.log("You clicked on h1", this)
        $('h1').hide()
    })

    $('p').click(function(){
        console.log("You clicked on p", this)
        // $('p').hide();
        // $(this).hide();    // Clicked button will be hidden
        // $('#id').hide();
        // $('.class').hide();
    })


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


    $('*').click()
})