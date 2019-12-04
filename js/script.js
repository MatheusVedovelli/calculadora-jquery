$(function(){
    let display = $("#display");
    let operation = "";

    function equal()
    {
        display.val(eval(display.val()));
        operation = "";
    }

    $("#clear").click(() => display.val("")); // botão limpar

    $("#equal").click(equal);

    $("#backspace").click(() => display.val(display.val().slice(0, display.val().length-1)));
    
    for(let i = 0; i < 10; i++)
    {
        let currbtn = $("#btn" + i);
        currbtn.click(() => display.val(display.val() + currbtn.val()));
    }

    $("#add").click(() => {
        if(operation != "")
            equal();

        display.val(display.val() + "+");
        operation = "+";
    });

    $("#sub").click(() => {
        if(operation != "")
            equal();

        display.val(display.val() + "-");
        operation = "-";
    });

    $("#div").click(() => {
        if(operation != "")
            equal();

        display.val(display.val() + "/");
        operation = "/";
    });

    $("#mult").click(() => {
        if(operation != "")
            equal();

        display.val(display.val() + "*");
        operation = "*";
    });

    $("#pow").click(() => {
        if(operation != "")
            equal();

        display.val(display.val() + "**");
        operation = "**";
    });
})