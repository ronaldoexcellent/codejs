// Check your console, if you see errors after connection successful, know they come from whatever code you write here.

// Test Connection JavaScript Compatibility [Remove if you no longer need]...
alert($('layout').parentElement.nodeName);
alert(`Welcome To ${app.name}. Created by ${app.author}. Copyright ${app.copyright}.`);
alert(d.fullDate());

_dEdit = "0";

// add functions to buttons
rangeSelect(1, 27, () => restrict($$('layout button')[i]));

// clear/on button - enable all full features.
click($$('layout button')[0], () => {
    if ($$('layout button')[1].disabled == true) {
        voice.output('Ready!');
        rangeSelect(1, 27, ()=> $$('layout button')[i].disabled = false);
    }
    else if ($("[role=calculations]").innerHTML !== " " && $("[role=result]").innerHTML !== " ") {
        voice.output('Cleared!');
    }
    html($("[role=calculations]"), 0), html($("[role=result]"), 0);
    css($("[role=calculations]"), "cursor:pointer"), css($("[role=result]"), "cursor:pointer");
});

// Add "maths." to maths expressions
rangeSelect(3, 8, ()=> click($$('layout button')[i], () => mathExp(event)));

function mathExp(e) {
    ($("[role=calculations]").innerHTML == "0") ? $("[role=calculations]").innerHTML = "Math." + html(e.target).toLowerCase() + "(" : $("[role=calculations]").innerHTML += "Math." + html(e.target).toLowerCase() + "(";
}

// Functionalise the rest of the buttons
rangeSelect(9, 26, ()=>{
    click($$('layout button')[i], () => buttons(event));
});

function buttons(e) {
    ($("[role=calculations]").innerHTML == "0") ? html($("[role=calculations]"), html(e.target)) : pushAfter($("[role=calculations]"), html(e.target));
    $e = e.target.innerHTML;
    if ($e==0||$e==1||$e==2||$e==3||$e==4||$e==5||$e==6||$e==7||$e==8||$e==9||$e=='+') {   
        voice.output(html(e.target));
    }
}

// Backspace
click($$('layout button')[1], () => {
    ($("[role=calculations]").innerHTML.length <= 1 || $("[role=calculations]").innerHTML[0] == "M" && $("[role=calculations]").innerHTML[$("[role=calculations]").innerHTML.length - 1] == "(" && ($("[role=calculations]").innerHTML.length == 9 || $("[role=calculations]").innerHTML.length == 10)) ? $("[role=calculations]").innerHTML = 0 : ($("[role=calculations]").innerHTML[$("[role=calculations]").innerHTML.length - 1] == "(" && $("[role=calculations]").innerHTML[$("[role=calculations]").innerHTML.length - 5] == ".") ? $("[role=calculations]").innerHTML = $("[role=calculations]").innerHTML.substring(0, $("[role=calculations]").innerHTML.length - 9) : ($("[role=calculations]").innerHTML[$("[role=calculations]").innerHTML.length - 1] == "(" && $("[role=calculations]").innerHTML[$("[role=calculations]").innerHTML.length - 6] == ".") ? $("[role=calculations]").innerHTML = $("[role=calculations]").innerHTML.substring(0, $("[role=calculations]").innerHTML.length - 10) :
    $("[role=calculations]").innerHTML = $("[role=calculations]").innerHTML.substring(0, $("[role=calculations]").innerHTML.length - 1);
    voice.output('erase');
});

// Squareroot
click($$('layout button')[2], () => {
    ($("[role=calculations]").innerHTML == "0") ? html($("[role=calculations]"), "Math.sqrt(") : pushAfter($("[role=calculations]"), "Math.sqrt(");
    voice.output('squareroot of');
});

// audio word group
click($$('layout button')[3], ()=>voice.output('raise to power'));
click($$('layout button')[4], ()=>voice.output('exponential'));
click($$('layout button')[5], ()=>voice.output('log'));
click($$('layout button')[6], ()=>voice.output('sign'));
click($$('layout button')[7], ()=>voice.output('cos'));
click($$('layout button')[8], ()=>voice.output('tan'));
click($$('layout button')[9], ()=>voice.output('open bracket'));
click($$('layout button')[10], ()=>voice.output('close bracket'));
click($$('layout button')[11], ()=>voice.output('multiplied by'));
click($$('layout button')[15], ()=>voice.output('divided by'));
click($$('layout button')[19], ()=>voice.output('subtracted by'));
click($$('layout button')[26], ()=>voice.output('point'));

// equality
function result() {
    $("[role=calculations]").blur();
    if ($$('layout button')[1].disabled == true) {
        restrict($("[role=result]"));
    }
    else {
        css($("[role=result]"), 'userselect:text');
        try {
            eval($("[role=calculations]").innerHTML);
            voice.output('calculating');
            unhide($('dialog'));
        }

        catch (err) {
            !(err) ? null : html($("[role=result]"), "Syntax Error!"), voice.output("Syntax Error!");
        }

        finally {
            if (isNaN(eval($("[role=calculations]").innerHTML))) {
                setTimeout(()=>{html($("[role=result]"), "No Result"), voice.output(html($("[role=result]")));}, 2500);
            }
            else {
                setTimeout(()=>{hide($('dialog')); html($("[role=result]"), eval(html($("[role=calculations]")))), voice.output(`The answer is ${html($("[role=result]"))}`)}, 3000);
            }
        }
    }
} click($$('layout button')[27], () => result());

// direct typing
dblclick($("[role=calculations]"), () => {
    if ($$('layout button')[1].disabled == true) {
        restrict($("[role=calculations]"));
    }

    else {
        if (_dEdit == 0) {
        voice.output('unlocked');
            $("[role=calculations]").contentEditable = true;
            $("[role=calculations]").focus();
            _dEdit = 1;
            
            if ($("[role=calculations]").innerHTML == "0" || $("[role=calculations]").innerHTML == "&nbsp;") {
                $("[role=calculations]").innerHTML = ""
            }
        }

        else if (_dEdit == 1) {
            voice.output('locked');
            $("[role=calculations]").contentEditable = false;
            $("[role=calculations]").blur();
            _dEdit = 0;

            if ($("[role=calculations]").innerHTML == "") {
                $("[role=calculations]").innerHTML = "0"
            }
        }
    }   click($("[role=result]"), () => result());
}); keydown($("[role=calculations]"), () => (this.keyCode == "13") ? result() : null);