addLoader();

$('form').onsubmit = () => {
    load(()=>{html($$('.players h2')[0], $$('[type=text]')[0].value);
    html($$('.players h2')[1], $$('[type=text]')[1].value);
    css($('#game-play'), "width:100%");})
};

// Create & add a random dice to the game from the images folder in files.
// Red dice
widgets.constructMultiple('img', 6);
loop(widget, ()=>{
    widget[i].src = "files/images/red dice/" + (i+1) + ".png";
    widget[i].classList.add('red');
    widget[i].setAttribute('val', (i + 1));
});
render($(".dice-container"), widget[randomize(widget)]);
$die_1 = widget;

// Blue dice
widgets.constructMultiple('img', 6);
loop(widget, ()=>{
    widget[i].src = "files/images/blue dice/" + (i+1) + ".png";
    widget[i].classList.add('blue');
    widget[i].setAttribute('val', (i + 1));
});
render($(".dice-container"), widget[randomize(widget)]);
$die_2 = widget;

 // Add functionality to players
$('.p1 #dbat').addEventListener("click", ()=> {
     op2()
}); function op2() {
    css($('#game-board'), "display:grid"); n = 0;
    $("#game-board h1").addEventListener("click", ()=>{
        p1()
    });
} function p1() {
    $('.p1').classList.replace("active", "inactive"), $('.p2').classList.replace("inactive", "active");
    renderBefore($('.p2 h1'), $('#dbat'));
    $('.p2 #dbat').addEventListener("click", ()=> {op()})
}

function op() {
    css($('#game-board'), "display:grid"); n = 1
    $("#game-board h1").addEventListener("click", ()=>{
        p2()
    })
} function p2() {
    $('.p2').classList.replace("active", "inactive"), $('.p1').classList.replace("inactive", "active");
    renderBefore($('.p1 h1'), $('#dbat'));
    $('.p1 #dbat').addEventListener("click", ()=> {op2()})
}

// Minimize Game-Board
function minimize() {
    css($('#game-board'), "transform: translate(50%, 50%)");
    setTimeout(()=>css($('#game-board'), "display:none"), 500);
}

// Total Points
function calcPoints() {
    if ($('.red').getAttribute('val') == 1 || $('.blue').getAttribute('val') == 1) {
        $score = 0, restrict($('dice-container')); setTimeout(()=>minimize(), 1000);
        if (n == 0) {p1()} else if (n == 1) {p2()}
    } else {
        $getPoints = parseInt($('.red').getAttribute('val')) + parseInt($('.blue').getAttribute('val'));
        $score = eval(Number($("#game-board h1").innerHTML) + $getPoints);
    }
    html($("#game-board h1"), $score);
}

// Assign re-roll functionality
$(".dice-container").addEventListener("click", ()=> {
    swap($(".red"), $die_1[randomize($die_1)]), swap($(".blue"), $die_2[randomize($die_2)]);
    calcPoints();
});
// Add Total-Points To Score
$("#game-board h1").addEventListener("click", ()=>{
    html($('.active h1'), eval(Number($("#game-board h1").innerHTML) + Number($('.active h1').innerHTML)));
    html($("#game-board h1"), 0);
    
    if ($('.active h1').innerHTML >= 150) {
        $('.active h1').innerHTML = 150;
        $('.active h3').innerHTML = "(Winner)";
        widgets.construct('div');
        html(widget, "<img src='files/images/goldcup.png' />"), 
        renderBefore($('.active h1'), widget);
        css($('#dbat'), "display:none");
        setTimeout(()=>{css($('aside'), "display:block")}, 2500);

        if (screen.width <= 900) {
            loop($$('.players'), ()=>{
                css($$('.players')[i], "display:list-item; height:50%; position:relative; width: 100%;");
            });
            css($('#game-play'), "display:block; width:100%;");
        }
    }

    minimize();
});

// Restart Game
$('aside button').onclick = () => {
    window.location.href = 'index.html';
};