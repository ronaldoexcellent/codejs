// Code JS Version 1.51
// Start
console.log('Loading Code JS Framework/Library... Version 1.51');
console.log('Finished Loading...');
console.time("Load Time");

// Framework/Library Data
const CodeJS = {
    version : "Code JS Version 1.51"
};

// Begin storage for date...
const dd = new Date();
const dayAvatar = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthAvatar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
const d = {
    day : () => {
        return dayAvatar[dd.getDay()]
    },
    date : () => {
        $last_digit = dd.getDate().toString()[dd.getDate().toString().length - 1];
        if ($last_digit == 1) {
            return dd.getDate() + "st"
        }
        else if ($last_digit == 2) {
            return dd.getDate() + "nd"
        }
        else if ($last_digit == 3) {
            return dd.getDate() + "rd"
        }
        else {
            return dd.getDate() + "th"
        }
    },
    month : () => {
        return monthAvatar[dd.getMonth()]
    },
    year : () => {
        return dd.getFullYear()
    },
    fullDate : () => {
        return d.day() + ", " + d.date() + " " + d.month() + ", " + d.year()
    }
};
// End storage for date...

// Builder/Constructor
var widget;

const layout = {
    create : () => {
        document.querySelector('layout').innerHTML = "<header></header> <nav></nav> <main></main> <aside></aside> <footer></footer>";
        console.log('Your layout has been created & specified successfully');
    },

    destroy : () => {
        document.querySelector('layout').innerHTML = null;
        console.log('The layout (contents) for this app has been destroyed/removed.');
    }
};

const widgets = {
    construct : (widget) => {
        this.widget = document.createElement(widget);
        this.widget.className = "widget";
        this.widget.draggable = true;
    },
    constructMultiple : (widget, n) => {
        this.widget = new Array();
        for (i = 0; i < n; i++) {
            this.widget[i] = document.createElement(widget);
            this.widget[i].draggable = true;
        }
    }
};

const render = (category, wid) => {
    return category.appendChild(wid);
};

const pushBefore = (target, $content) => {
    target.innerHTML = $content + target.innerHTML;
};

const pushAfter = (target, $content) => {
    target.innerHTML += $content;
};

const removeContent = (target, $content) => {
    target.innerHTML = target.innerHTML.replace($content, '');
};

const replaceContent = (target, $content, $new) => {
    target.innerHTML = target.innerHTML.replace($content, $new);
};

const removeContents = (target, $content) => {
    target.innerHTML = target.innerHTML.replaceAll($content, '');
};

const replaceContents = (target, $content, $new) => {
    target.innerHTML = target.innerHTML.replaceAll($content, $new);
};

const insertBefore = (target, str, content) => {
    target.innerHTML = target.innerHTML.replace(str, content + str);
};

const insertAfter = (target, str, content) => {
    target.innerHTML = target.innerHTML.replace(str, str + content);
};

const insertBeforeAll = (target, str, content) => {
    target.innerHTML = target.innerHTML.replaceAll(str, content + str);
};

const insertAfterAll = (target, str, content) => {
    target.innerHTML = target.innerHTML.replaceAll(str, str + content);
};

const renderAll = (category, widget) => {
    for (i = 0; i < widget.length; i++) {
        category.appendChild(widget[i]);
    };
};

const renderBefore = (target, wid) => {
    return target.insertAdjacentElement('beforeBegin', wid);
};

const renderAfter = (target, wid) => {
    return target.insertAdjacentElement('afterEnd', wid);
};

const renderFirstPlace = (target, wid) => {
    return target.insertAdjacentElement('afterBegin', wid);
};

const renderLastPlace = (target, wid) => {
    return target.insertAdjacentElement('beforeEnd', wid);
};

/* Clone */ 

const clone = (widget, obj) => {
    render(widget, obj.cloneNode(true))
}; 

const cloneRepeat = ($array, obj) => {
    for (i = 0; i < $array.length; i++) {
        render($array[i], obj.cloneNode(true));
    }
};

const clones = (target, obj, n) => {
    for (i = 0; i < n; i++) {
        render(target, obj.cloneNode(true))
    }
};

const swap = (current_widget, new_widget) => {
    $c_w = current_widget.cloneNode(true);
    $n_w = new_widget.cloneNode(true);

    current_widget.replaceWith($n_w);
    new_widget.replaceWith($c_w);
};


// Other Functions
/* Content */ 
const html = (elem, c) => {
    if (c == null) {
        return elem.innerHTML
    } else {
        return elem.innerHTML = c;
    }
};

const text = (elem, text) => {
    if (c == null) {
        return elem.innerText
    } else {
        return elem.innerText = c;
    }
};

const attrib = (target, attribute, $data) => {
    if ($data == null) {
        return target.getAttribute(attribute)
    } else {
        return target.setAttribute(attribute, $data);
    }
};

const $ = (elem) => {
    return document.querySelector(elem);
};

const $$ = (elem) => {
    return document.querySelectorAll(elem);
}; 

/* styling */
const css = (elem, c) => {
    elem.style.cssText = c;
}; 

/* Functionality */
const tplclick = (obj, func) => {
    var x = 0;
    click(obj, () => {
        x++;

        if (x == 3) {
            func()
        }

        setTimeout(function () {
            x=0
        }, 500)
    });
};

const restrict = (obj)=>{
    return obj.setAttribute('disabled', true);
};

const restrictAll = (obj)=>{
    for (i = 0; i < obj.length; i++) {
        obj[i].setAttribute('disabled', true);
    }
};

const unrestrict = (obj)=>{
    return obj.setAttribute('disabled', false);
};

const unrestrictAll = (obj)=>{
    for (i = 0; i < obj.length; i++) {
        obj[i].setAttribute('disabled', false);
    }
};

/* Animate */
const animate = (obj, $time) => {
    $Count = 0; 
    _auto_slide(); 
    
    function _auto_slide() {
        for (i = 0; i < obj.length; i++) {
            return obj[i].setAttribute('hidden', true);
        }

        $Count++; 
        
        if ($Count > obj.length) {
            $Count = 1; 
        }
        
        obj[$Count - 1].setAttribute('hidden', false);
        
        setTimeout(_auto_slide, $time)
    }
};

/* Import_All */
const importAll = ($import) => {
    for ($imp = 0; $imp < $import.length; $imp++) {
        $new_script = document.createElement('script');
        $new_script.setAttribute('src', 'js/' + $import[$imp]);
        
        document.querySelector('engine').appendChild($new_script)
    }
};

/* Visibility State */
const hide = (obj) => {
    return obj.hidden = true;
};

const hideAll = (obj)=>{
    for (i = 0; i < obj.length; i++) {
        obj[i].hidden = true;
    }
};

const unhide = (obj) => {
    return obj.hidden = false;
};

const unhideAll = (obj)=>{
    for (i = 0; i < obj.length; i++) {
        obj[i].hidden = false;
    }
};

const del = (obj) => {
    return obj.remove()
};

/* Import within template */
const imp = (script_src) => {
    $script = document.createElement('script');
    $script.src = `js/${script_src}`;
    document.querySelector('engine').appendChild($script)
};

/* Import outside template */
const impX = (script_src) => {
    $script = document.createElement('script');
    $script.src = script_src;
    document.querySelector('engine').appendChild($script)
};

/* Random */
const randomize = (obj) => {
    return Math.floor(Math.random() * obj.length);
};

/* Random Selection */
const randomSelect = ($group, $target_value, func) => {
    $array = [];
    $new_Array = [];

    for ($a = 0; $a < $group.length; $a++) {
        $array.push($group[$a]);
    }

    for (n = 0; n < $target_value; n++) {
        $MR = Math.floor(Math.random() * $array.length);
        $r = $array[$MR];
        $new_Array.push($r);
        $array.splice($array.indexOf($r), 1);
    }

    for (nA = 0; nA < $new_Array.length; nA++) {
        i = $new_Array[nA]; alert(i); func()
    }
};

/* Loop */
const loop = ($group, $func)=> {
    for (i = 0; i < $group.length; i++) {
        $func();
    }
};

const loopX = ($group, $func)=> {
    for ($g = 0; $g < $group.length; $g++) {
        i = $group[$g];
        $func();
    }
};

/* Special Array Selectors */ 
var start, end;

const rangeSelect = (start, end, $func)=> {
    for (i = start; i < end + 1; i++) {
        $func();
    }
};

const singleSelect = ($array, func) => {
    $arr = new Array();
    for (i = 0; i < $array.length; i++) {
        $arr.push($array[i]);
    }
    
    for (a = 0; a < $arr.length; a++) {
        i = $arr[a]; func();
    }
};

const loopSelect = ($group, int, func) => {
    for (a = 0; a < $group.length / 2; a++) {
        n = (a * int - 1) + int;

        if ($group[n] == undefined) {
            return null
        }

        func()
    }
};

/* Even & Odd */
var $target, $group;

const typeSelect = ($group, $target, func) => {
    if ($target == "even") {
        for (a = 0; a < $group.length / 2; a++) {
            i = (a * 2) - 1 + 2;

            if ($group[i] == undefined) {
                return null
            }

            func()
        }
    }
    
    else if ($target == "odd") {
        for (a = 0; a < $group.length / 2; a++) {
            i = (a * 2) - 1 + 2 - 1;

            if ($group[n] == undefined) {
                return null
            }

            func()
        }
    }
    
    else {
        null
    }
};

/* Integers */
/* Random Of Numbers */
const randomOf = (num, func) => {
    $array = new Array();
    for (i = 1; i <= num; i++) {
        $array.push(i);
    } 
    $random = Math.floor(Math.random() * $array.length);
    n = $array[$random]; 
    func()
};

/* Array of Numbers */
const arrayOf = (num, func) => {
    $arr = new Array();
    for (i = 1; i < num + 1; i++) {
        $arr.push(i);
    }

    for (a = 0; a < $arr.length; a++) {
        n = $arr[a]; func()
    }
};


/* Trace & Untrace Elements */
const trace = ($trace) => {
    $trace.style.border = "4px solid purple";
    for (_tC = 0; _tC < $trace.children.length; _tC++) {
        $trace.children[_tC].style.cssText = "outline: 4px solid red; border: 4px solid green;";
    }
};

const untrace = ($trace) => {
    $trace.style.border = "0";
    for (_tC in $trace.children) {
        $trace.children[_tC].style.outline = "0";
        $trace.children[_tC].style.border = "0";
    }
};

/* Page Switcher */
function switch_content($class, $id) {
    const cc = document.getElementsByClassName($class);
    for (_i = 0; _i < cc.length; _i++) {
        cc[_i].style.display = 'none';
    }
    document.getElementById($id).style.display = 'block'; $GET_PAGE_TITLE = document.querySelector('title'); $GET_PAGE_TITLE.innerHTML = $id + " - " + app.name;}
    
/* Popup */
const popup = (obj)=> {
    widgets.construct('style');
    html(widget, '[role=pop-holder] { position: fixed; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transition: .4s; width: 100%; height: 100%; backdrop-filter: blur(3px); z-index: 79999; background: rgba(0, 0, 0, 0.3);} [role=popup] { position: relative; display: block; width: 70%; padding: 2rem; border-radius: 15px; box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3); animation: pop 1s ease-in-out; } @keyframes pop { from { transform: scale(0); } 50% { transform: scale(1.4); } to { transform: scale(1); }} [role=popdown] { position: absolute; z-index: 80000; right: 4%; top: 7%; cursor: pointer; font-weight: bolder; font-family: verdana; color: #000000; background-color: #ffffff; border: 2px solid #000; padding: 2%; width: 25px; height: 25px; border-radius: 50%; display: flex; justify-content: center; align-items: center; [role=popdown]:hover, [role=popdown:focus { background-color: #000000; color: #ffffff; border: 2px dashed #fff;}');
    
    widget.setAttribute('role', "pop-style");
    renderBefore($('layout'), widget);
    
    widgets.construct('article');
    widget.setAttribute('role', "pop-holder");
    widget.innerHTML = "<span onclick='popdown(this.parentNode)' role='popdown'> X </span>";
    renderAfter($('[role=pop-style]'), widget);
    render(widget, obj.cloneNode(true));

    $("[role=pop-holder]").children[1].setAttribute('role', "popup");
};
    
/* popdown */
const popdown = (objd)=> {
    $("[role=pop-style]").remove(); $("[role=pop-holder]").remove()
};

/* transform */
const rotate = (target, value) => {
    return target.style.transform = `rotate(${value})`
};

const rotateX = (target, value) => {
    return target.style.transform = `rotateX(${value})`
};

const rotateY = (target, value) => {
    return target.style.transform = `rotateY(${value})`
};

const rotateZ = (target, value) => {
    return target.style.transform = `rotateZ(${value})`
};

const translate = (target, value1, value2) => {
    return target.style.transform = `translate(${value1}, ${value2})`
};

const translateX = (target, value) => {
    return target.style.transform = `translateX(${value})`
};

const translateY = (target, value) => {
    return target.style.transform = `translateY(${value})`
};

const scale = (target, value) => {
    return target.style.transform = `scale(${value})`
};

const scaleX = (target, value) => {
    return target.style.transform = `scaleX(${value})`
};

const scaleY = (target, value) => {
    return target.style.transform = `scaleY(${value})`
};

const skew = (target, value) => {
    return target.style.transform = `skew(${value})`
};

const skewX = (target, value) => {
    return target.style.transform = `skewX(${value})`
};

const skewY = (target, value) => {
    return target.style.transform = `skewY(${value})`
};

/* Iframe */
const bindToFrame = ($target, $obj) => {
    $f = ($target.contentDocument || $target.contentWindow.document);
    $f.open();
    $f.write($obj);
    $f.close();
};

/* Classlist */
const removeClass = (target, $data) => {
    target.classList.remove($data);
};

const addClass = (target, $data) => {
    target.classList.add($data);
};

/* Voice Output */
const voice = {
    output : ($data) => {
        $d = new SpeechSynthesisUtterance();
        $d.rate = 0.5;
        $d.pitch = 1;
        $d.volume = 1;
        $d.text = $data;
        window.speechSynthesis.speak($d)
    }
};


// Events
const afterprint = (elem, func) => {
    return elem.addEventListener('afterprint', ()=>{
        key()
    })
};

const animationend = (elem, func) => {
    return elem.addEventListener('animationend', ()=>{
        key()
    })
};

const animationiteration = (elem, func) => {
    return elem.addEventListener('animationiteration', ()=>{
        key()
    })
};

const animationstart = (elem, func) => {
    return elem.addEventListener('animationstart', ()=>{
        key()
    })
};

const beforeprint = (elem, func) => {
    return elem.addEventListener('beforeprint', ()=>{
        func()
    })
};

const beforeunload = (elem, func) => {
    return elem.addEventListener('beforeunload', ()=>{
        func()
    })
};

const error = (elem, func) => {
    return elem.addEventListener('error', ()=>{
        func()
    })
};

const fullscreenchange = (elem, func) => {
    return elem.addEventListener('fullscreenchange', ()=>{
        func()
    })
};

const fullscreenerror = (elem, func) => {
    return elem.addEventListener('fullscreenerror', ()=>{
        func()
    })
};

const hashchange = (elem, func) => {
    return elem.addEventListener('hashchange', ()=>{
        func()
    })
};

const load = (elem, func) => {
    return elem.addEventListener('load', func())
};

const message = (elem, func) => {
    return elem.addEventListener('message', ()=>{
        func()
    })
};

const offline = (elem, func) => {
    return elem.addEventListener('offline', ()=>{
        func()
    })
};

const online = (elem, func) => {
    return elem.addEventListener('online', ()=>{
        func()
    })
};

const open = (elem, func) => {
    return elem.addEventListener('open', ()=>{
        func()
    })
};

const pagehide = (elem, func) => {
    return elem.addEventListener('pagehide', ()=>{
        func()
    })
};

const pageshow = (elem, func) => {
    return elem.addEventListener('pageshow', ()=>{
        func()
    })
};

const popstate = (elem, func) => {
    return elem.addEventListener('popstate', ()=>{
        func()
    })
};

const resize = (elem, func) => {
    return elem.addEventListener('resize', ()=>{
        func()
    })
};

const show = (elem, func) => {
    return elem.addEventListener('show', ()=>{
        func()
    })
};

const storage = (elem, func) => {
    return elem.addEventListener('storage', ()=>{
        func()
    })
};

const transitionend = (elem, func) => {
    return elem.addEventListener('transitionend', ()=>{
        func()
    })
};

const unload = (elem, func) => {
    return elem.addEventListener('unload', ()=>{
        func()
    })
};

// Form Events
const blur = (elem, func) => {
    return elem.addEventListener('blur', ()=>{
        func()
    })
};

const change = (elem, func) => {
    return elem.addEventListener('change', ()=>{
        func()
    })
};

const contextmenu = (elem, func) => {
    return elem.addEventListener('contextmenu', ()=>{
        func()
    })
};

const focus = (elem, func) => {
    return elem.addEventListener('focus', ()=>{
        func()
    })
};

const focusin = (elem, func) => {
    return elem.addEventListener('focusin', ()=>{
        func()
    })
};

const focusout = (elem, func) => {
    return elem.addEventListener('focusout', ()=>{
        func()
    })
};

const input = (elem, func) => {
    return elem.addEventListener('input', ()=>{
        func()
    })
};

const invalid = (elem, func) => {
    return elem.addEventListener('invalid', ()=>{
        func()
    })
};

const reset = (elem, func) => {
    return elem.addEventListener('reset', ()=>{
        func()
    })
};

const search = (elem, func) => {
    return elem.addEventListener('search', ()=>{
        func()
    })
};

const select = (elem, func) => {
    return elem.addEventListener('select', ()=>{
        func()
    })
};

const submit = (elem, func) => {
    return elem.addEventListener('submit', ()=>{
        func()
    })
};

// Keyboard Events
const keydown = (elem, func) => {
    return elem.addEventListener('keydown', ()=>{
        func()
    })
};

const keypress = (elem, func) => {
    return elem.addEventListener('keypress', ()=>{
        func()
    })
};

const keyup = (elem, func) => {
    return elem.addEventListener('keyup', ()=>{
        func()
    })
};

// Mouse Events
const click = (elem, func) => {
    return elem.addEventListener('click', ()=>{
        func()
    })
};

const dblclick = (elem, func) => {
    return elem.addEventListener('dblclick', ()=>{
        func()
    })
};

const mousedown = (elem, func) => {
    return elem.addEventListener('mousedown', ()=>{
        func()
    })
};

const mouseenter = (elem, func) => {
    return elem.addEventListener('mouseenter', ()=>{
        func()
    })
};

const mouseleave = (elem, func) => {
    return elem.addEventListener('mouseleave', ()=>{
        func()
    })
};

const mousemove = (elem, func) => {
    return elem.addEventListener('mousemove', ()=>{
        func()
    })
};

const mouseout = (elem, func) => {
    return elem.addEventListener('mouseout', ()=>{
        func()
    })
};

const mouseover = (elem, func) => {
    return elem.addEventListener('mouseover', ()=>{
        func()
    })
};

const mouseup = (elem, func) => {
    return elem.addEventListener('mouseup', ()=>{
        func()
    })
};

const mousewheel = (elem, func) => {
    return elem.addEventListener('mousewheel', ()=>{
        func()
    })
};

const wheel = (elem, func) => {
    return elem.addEventListener('wheel', ()=>{
        func()
    })
};

// Drag Events
const drag = (elem, func) => { 
    return elem.addEventListener('drag', ()=>{
        func()
    })
};

const dragend = (elem, func) => {
    return elem.addEventListener('dragend', ()=>{
        func()
    })
};

const dragenter = (elem, func) => {
    return elem.addEventListener('dragenter', ()=>{
        func()
    })
};

const dragleave = (elem, func) => {
    return elem.addEventListener('dragleave', ()=>{
        func()
    })
};

const dragover = (elem, func) => {
    return elem.addEventListener('dragover', ()=>{
        func()
    })
};

const dragstart = (elem, func) => {
    return elem.addEventListener('dragstart', ()=>{
        func()
    })
};

const drop = (elem, func) => {
    return elem.addEventListener('drop', ()=>{
        func()
    })
};

const scroll = (elem, func) => {
    return elem.addEventListener('scroll', ()=>{
        func()
    })
};

// Clipboard Events
const copy = (elem, func) => {
    return elem.addEventListener('copy', ()=>{
        func()
    })
};

const cut = (elem, func) => {
    return elem.addEventListener('cut', ()=>{
        func()
    })
};

const paste = (elem, func) => {
    return elem.addEventListener('paste', ()=>{
        func()
    })
};

// Media Events
const abort = (elem, func) => {
    return elem.addEventListener('abort', ()=>{
        func()
    })
};

const canplay = (elem, func) => {
    return elem.addEventListener('canplay', ()=>{
        func()
    })
};

const canplaythrough = (elem, func) => {
    return elem.addEventListener('canplaythrough', ()=>{
        func()
    })
};

const cuechange = (elem, func) => {
    return elem.addEventListener('cuechange', ()=>{
        func()
    })
};

const durationchange = (elem, func) => {
    return elem.addEventListener('durationchange', ()=>{
        func()
    })
};

const emptied = (elem, func) => {
    return elem.addEventListener('emptied', ()=>{
        func()
    })
};

const ended = (elem, func) => {
    return elem.addEventListener('ended', ()=>{
        func()
    })
};

const loadeddata = (elem, func) => {
    return elem.addEventListener('loadeddata', ()=>{
        func()
    })
};

const loadedmetadata = (elem, func) => {
    return elem.addEventListener('loadedmetadata', ()=>{
        func()
    })
};

const loadstart = (elem, func) => {
    return elem.addEventListener('loadstart', ()=>{
        func()
    })
};

const pause = (elem, func) => {
    return elem.addEventListener('pause', ()=>{
        func()
    })
};

const play = (elem, func) => {
    return elem.addEventListener('play', ()=>{
        func()
    })
};

const playing = (elem, func) => {
    return elem.addEventListener('playing', ()=>{
        func()
    })
};

const progress = (elem, func) => {
    return elem.addEventListener('progress', ()=>{
        func()
    })
};

const ratechange = (elem, func) => {
    return elem.addEventListener('ratechange', ()=>{
        func()
    })
};

const seeked = (elem, func) => {
    return elem.addEventListener('seeked', ()=>{
        func()
    })
};

const seeking = (elem, func) => {
    return elem.addEventListener('seeking', ()=>{
        func()
    })
};

const stalled = (elem, func) => {
    return elem.addEventListener('stalled', ()=>{
        func()
    })
};

const suspend = (elem, func) => {
    return elem.addEventListener('suspend', ()=>{
        func()
    })
};

const timeupdate = (elem, func) => {
    return elem.addEventListener('timeupdate', ()=>{
        func()
    })
};

const volumechange = (elem, func) => {
    return elem.addEventListener('volumechange', ()=>{
        func()
    })
};

const waiting = (elem, func) => {
    return elem.addEventListener('waiting', ()=>{
        func()
    })
};

// Misc Events
const toggle = (elem, func) => {
    return elem.addEventListener('toggle', ()=>{
        func()
    })
};

const touchcancel = (elem, func) => {
    return elem.addEventListener('touchcancel', ()=>{
        func()
    })
};

const touchend = (elem, func) => {
    return elem.addEventListener('touchend', ()=>{
        func()
    })
};

const touchmove = (elem, func) => {
    return elem.addEventListener('touchmove', ()=>{
        func()
    })
};

const touchstart = (elem, func) => {
    return elem.addEventListener('touchstart', ()=>{
        func()
    })
};

// ==========================_________________________________------------------------------------------



// App root
const application = document.querySelector('application');
const appDefaultAttrib = ['name', 'author', 'logo', 'theme', 'mode'];

loop(appDefaultAttrib, ()=> {
    if (!attrib(application, appDefaultAttrib[i])) {
        attrib(application, appDefaultAttrib[i], "");
    }
});

// Messages - Output
widgets.construct('div');
widget.setAttribute('class', 'CodeJS-Console');
html(widget, `<h2 style='padding: 1%; line-height: 2;'> Messages: <button onclick="hide($('.CodeJS-Console'))">Close</button> </h2> <hr />`);

$bg = "";
$fg = "";

if (application.getAttribute('mode') == "dark") {
    $bg = 'rgb(0, 0, 0)'; $fg = 'white';
 } else {
     $bg = 'rgb(255, 255, 255)'; $fg = 'black';
 }

css(widget, `position: fixed; top: 0; z-index: 99998; left: 0; font-weight: bold; background: ${$bg}; color: ${$fg}; bold; display: none; width: 100%; overflow-x: hidden; overflow-y: scroll;`);
renderBefore($('layout'), widget);

const app = {
    name : application.getAttribute('name'),
    author : application.getAttribute('author'),
    logo : "<img id='sitelogo' src='" + application.getAttribute('logo') + "' />",
    theme : application.getAttribute('theme'),
    mode : application.getAttribute('mode'),
    copyright : d.year(),
    backgroundData : () => {
        // Conection Test
        $msg = 'Code JS connected successfully!'
        pushAfter($('.CodeJS-Console h2'), `<br><span style="background:green; color: white;">${$msg}</span>`);

        // App Time
        pushAfter($('.CodeJS-Console'), '<section class="code_js_app_timer" style="padding: 1%; display: block; width: 100%;"></section>');
        $secs = -1;
        $mins = 0;
        $hrs = 0;
        $days = 0;
        $weeks = 0;
        $arr = [$secs, $mins, $hrs, $days, $weeks];
        $arr = $arr.reverse();

        setInterval(()=>{
            $secs++;
            html($('.code_js_app_timer'), `<h2>App Time:</h2> <h3>You have spent the following time on this app. <br> <br> Weeks - ${$weeks}</h3> <h3>Days - ${$days}</h3> <h3>Hours - ${$hrs}</h3> <h3>Minutes - ${$mins}</h3> <h3>Seconds - ${$secs}</h3> <hr />`);
            if ($secs == 59) {
                $secs = -1;
                $mins++;
            } if ($mins == 59) {
                $mins = 0;
                $hrs++;
            } if ($hrs == 23) {
                $hrs = 0;
                $days++;
            } if ($days == 6) {
                $days = 0;
                $weeks++;
            }
        }, 1000);
    },
    messages : () => {
        $('.CodeJS-Console').style.display = "block";
    }
};

// HTML5, CSS3 & CSS Variables Suppport
// Do not add, remove, modify or change anything in this codes, except you have a full understanding of how it works.

// Start engine...
_start();

// Engine Build --
function _start() {
    // Control page data & functionality...
    function LOADFULLPACKAGE() {
        $layCh = $('layout').children;

        if (app.mode == "dark") {
            $('application').style.backgroundColor = "black";
            $('application').style.color = "white";
            loop($layCh, ()=> {
                $layCh[i].style.backgroundColor = "black";
                $layCh[i].style.color = "white";
            });
        }

        else if (app.mode == "light") {
            $('application').style.backgroundColor = "white";
            $('application').style.color = "black";
            loop($layCh, ()=> {
                $layCh[i].style.backgroundColor = "white";
                $layCh[i].style.color = "black";
            });
        }

        const app_Head = document.querySelector('head');
        const app_Footnote = app.author + "<br> Code JS Developer <br> &copy; Copyright " + app.copyright + ".";

        if (document.querySelector('footnote')) {
            document.querySelector('footnote').innerHTML = app_Footnote;
        }

        if (!$('application data')) {
            widgets.construct('data');
            html(widget, "<meta charset='UTF-8' /><meta-name viewport='width=device-width, initial-scale=1' /><meta-http-equiv />");
            renderFirstPlace(application, widget);
        }
        
        const app_Attrib = [document.querySelector('data meta').getAttribute('charset'), document.querySelector('data meta-name').attributes, document.querySelector('data meta-http-equiv').attributes];
        
        document.querySelector('html').lang = "en";
        
        for ($i = 0; $i < app_Attrib[1].length; $i++) {
            const METADATA = "<meta name='" + app_Attrib[1][$i].name + "' content='" + document.querySelector('meta-name').getAttribute(app_Attrib[1][$i].name) + "' />";
            app_Head.innerHTML += METADATA;
        }
        
        for ($i = 0; $i < app_Attrib[2].length; $i++) {
            const METADATA = "<meta http-equiv='" + app_Attrib[2][$i].name + "' content='" + document.querySelector('meta-http-equiv').getAttribute(app_Attrib[2][$i].name) + "' />";
            app_Head.innerHTML += METADATA;
        }
            
        const comp = document.querySelectorAll('[js]');
        for (i = 0; i < comp.length; i++) {
            comp[i].innerHTML = eval(comp[i].innerHTML);
        }
        
        const $app_extras = () => {
            app_Head.innerHTML = "<title></title> <meta name='application-name' content='" + app.name + "' />" + app_Head.innerHTML; app_Head.innerHTML += `<meta name="author" content=${app.author} /> <meta name="copyright" content="` + app.copyright + '" />  <link rel="icon" type="image/x-icon" href="' + application.getAttribute('logo') + '" /> <style id="style-root"> @import url("css/root.css"); </style>';
            document.querySelector('title').textContent = app.name;
            app_Head.innerHTML = "<meta charset='" + app_Attrib[0] + "' />" + app_Head.innerHTML;
            
            const insert = document.querySelectorAll('js');
            for (i = 0; i < insert.length; i++) {
                insert[i].innerHTML = eval(insert[i].innerHTML);
            }
            
            application.removeChild(application.querySelector('data'));
            application.removeChild(application.querySelector('engine'));
        };
        
        setTimeout($app_extras);
    }
    
    LOADFULLPACKAGE();
}
//_________________________________________________________________________________________________ 
/*...................................................................................................
                      Break
                      ____   ____   _____
                      |   |  |   |  |         /\    | /
                      |___|  |___|  |____    /__\   |/
                      |   |  | \    |       /    \  |\
                      |___|  |  \   |____  /      \ | \
...................................................................................................*/


// === Code JS Objects ===

// Loaders
// App Loader
function loadApp() {
    $host = application;
    widgets.construct('div');
    widget.setAttribute("role", "app_loader");

    html(widget, `<div style="line-height: 2; position:fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);" /><center>${app.logo}</center><br><meter min="0" value="0" max="100" />`);

    $bg = '';
    (app.mode == "dark") ? $bg = 'rgb(0, 0, 0)' : $bg = 'rgb(255, 255, 255)';

    css(widget, `background: ${$bg}; position: fixed; display: block; top: 0; left: 0; width: 100%; height: 100%; Z-INDEX: 999998; line-height: 0;`);
    
    renderFirstPlace($host, widget);

    css($('[role=app_loader] img'), 'width: 100px; height: 100px;');
    css($('[role=app_loader] meter'), 'width: 150px; height: 17px; border: 0;');

    widgets.construct('style');
    attrib(widget, "role", "apploadermeterbarstyle");
    html(widget, `[role=app_loader] meter::-webkit-meter-bar {background: none; background-image: linear-gradient(45deg, whitesmoke 2%, lightgrey 4%, whitesmoke 6%, lightgrey 8%, whitesmoke 10%, lightgrey 12%, whitesmoke 14%, lightgrey 16%, whitesmoke 18%, lightgrey 20%, whitesmoke 40%, lightgrey 42%, whitesmoke 44%, lightgrey 46%, whitesmoke 48%, lightgrey 50%, whitesmoke 52%, lightgrey 54%, whitesmoke 56%, lightgrey 58%, whitesmoke 60%, lightgrey 62%, whitesmoke 80%, lightgrey 82%, whitesmoke 84%, lightgrey 86%, whitesmoke 88%, lightgrey 90%, whitesmoke 92%, lightgrey 94%, whitesmoke 96%, lightgrey 98%, whitesmoke 100%); box-shadow: 0 5px 5px -5px #333 inset;} @media screen and (max-width: 800px) {[role=app_loader] img {width: 250px; height: 250px;} } [role=app_loader] meter::-webkit-meter-optimum-value {background-image: linear-gradient(${app.theme}, ${app.theme});}");`);

    renderBefore($('[role=app_loader]'), widget);
//
     //border: 3px solid greenyellow; background-image: linear-gradient(45deg, red 20%, orange 40%, yellow 60%, green 80%, blue 100%); background-size: 100% 100%; box-shadow: 0 5px 5px -5px #999 inset;

    const loader = {
        con: $("[role=app_loader]"),
        bar: $("[role=app_loader] meter"),
        style: $("[role=apploadermeterbarstyle]")
    };

    $load = setInterval(()=>{
        loader.bar.value++;
        if (loader.bar.value == 100) {
            clearInterval($load); del(loader.con), del(loader.style);
        }
    }, 80);
}

// Content Loader
const loadContent = (func) => {
    widgets.construct('article');
    $bg = '';
    (app.mode == "dark") ? $bg = 'rgba(0, 0, 0, 0.6)' : $bg = 'rgba(255, 255, 255, 0.6)';
    widget.setAttribute("role", "content_loader-container");
    css(widget, `display: grid; align-items: center; justify-items: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: ${$bg}; backdrop-filter: blur(3px); z-index: 5;`); renderBefore($('layout'), widget);

    widgets.construct('meter');
    widget.setAttribute("role", "content_loader"), widget.min = 0, widget.value = 0, widget.max = 100, widget.draggable = "false";
    css(widget, "width:100%; top: 0; position: absolute;");
    render($('[role=content_loader-container]'), widget);

    widgets.construct('div'); widget.setAttribute("role", "content_loader-rotator");
    css(widget, `border-radius: 50%; width: 45px; height: 45px; padding: 1%; position: relative; border: 7px solid ${app.theme}; border-top: 7px solid white; border-bottom: 7px solid white; animation: content_loader-rotate 1.5s linear infinite`);
    render($('[role=content_loader-container]'), widget);

    widgets.construct('style');
    widget.setAttribute("role", "contentloaderstyle");
    html(widget, `[role=content_loader-container] meter::-webkit-meter-optimum-value {background-image: linear-gradient(${app.theme}, ${app.theme});} @keyframes content_loader-rotate {0% {transform: rotate(0deg)} 100% {transform: rotate(300deg)}}`);
    renderBefore($("[role=content_loader]"), widget);

    const load_Content = setInterval(()=>{
        $('[role=content_loader]').value++;

        if ($('[role=content_loader]').value == (85/100) * $('[role=content_loader]').max) {
            func();
        }

        else if ($('[role=content_loader]').value == $('[role=content_loader]').max) {
            clearInterval(load_Content), del($("[role=content_loader-container]"));
        }
    }, 50);
};

console.timeEnd("Load Time");
console.log("Code JS connected successfully!");
// End

imp('app.js');