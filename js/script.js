$(document).ready(function(){
    let display = $("#display");
    let operation = "";

    function equal()
    {
        let slist = display.val().split(operation);

        if(operation == "" || slist.length < 2)
            return false;

        display.val("");
        
        switch(operation)
        {
            case "+":
                display.val(Number(slist[0]) + Number(slist[1]));
                break;
            case "-":
                display.val(Number(slist[0]) - Number(slist[1]));
                break;
            case "*":
                display.val(Number(slist[0]) * Number(slist[1]));
                break;
            case "/":
                if(slist[1] != 0)
                    display.val(Number(slist[0]) / Number(slist[1]));
                else
                    window.alert("nao pode dividir por 0 burro");
                break;
            case "^":
                display.val(Math.pow(Number(slist[0]), Number(slist[1])));
                break;
        }

        operation = "";
        return true;
    }

    $("#clear").click(() => display.val("")); // botão limpar

    $("#equal").click(equal);

    $("#backspace").click(() => display.val(display.val().slice(0, display.val().length-1)));
    
    for(let i = 0; i < 10; i++)
    {
        let currbtn = $("#btn" + i);
        currbtn.click(() => display.val(display.val() == "0" ? currbtn.val() : display.val() + currbtn.val()));
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

        display.val(display.val() + "^");
        operation = "^";
    });

    $(document).keyup((event) => {
        let key = event.originalEvent.key;

        if(key >= 0 && key <= 9)
            $("#btn" + key).click();

        switch(key)
        {
            case "Backspace":
                $("#backspace").click();
                break;

            case "+":
                $("#add").click();
                break;

            case "-":
                $("#sub").click();
                break;
            
            case "*":
                $("#mult").click();
                break;
            
            case "/":
                $("#div").click();
                break;

            case "^":
                $("#pow").click();
                break;

            case "Enter":
                $("#equal").click();
                break;
        }
            
    })
})