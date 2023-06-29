// Check your console, if you see errors after connection successful, know they come from whatever code you write here.

// Test Connection JavaScript Compatibility [Remove if you no longer need]...

//Try running these
alert($('layout').parentElement.nodeName);
alert(`Welcome To ${app.name}. Created by ${app.author}. Copyright ${app.copyright}.`);
alert(d.fullDate());

// Create layout
layout.create();

// Add header content
html($('header'), `<span onclick="$('nav').style.width='50%'">&equiv;</span> ${app.name}`);


// Create links
$links = ['&times;', 'Home', 'Services', 'Contacts', 'About'];
widgets.constructMultiple('a', $links.length);
renderAll($('nav'), widget);
loop($links, ()=>{
    html($$('nav a')[i], $links[i]);
});


// Get links
var link = $$('nav a');

// Create pages & assign functions to links
click(link[0], () => {
    addClass(widget, 'closenav');
    $('nav').style.width='0';
});

function switchPages(e) {
    switch_content('.pages', '#' + html(e.target));
    removeContent($('title'), '#');
}

rangeSelect(1, $links.length - 1, ()=>{
    widgets.construct('section');
    attrib(widget, 'id', $links[i]);
    addClass(widget, 'pages');
    html(widget, `<object data="pages/${$links[i].toLowerCase()}.html"></object>`);
    render($('main'), widget);
    click(link[i], () => {
        $('nav').style.width='0';
        switchPages(event);
    });
});



/*
$mA = $$('#main article');
arrayOf(4, ()=> {
    pushAfter($('section'), `<img src="files/images/app${i}.jpg"/>`);
});
function page_preview(j) {
    $('#main').style.transform = 'scale(1)';
    loop($mA, () => $mA[i].style.display = 'none');
    j.style.display = 'grid';
}

dblclick($('#Home'), () => {
    page_preview($mA[0]);
});

click($('.b1'), () => {
    page_preview($mA[0]);
});

click($('.b2'), () => {
    page_preview($mA[1]);
});

click($('.b3'), () => {
    page_preview($mA[2]);
});

click($('.b4'), () => {
    page_preview($mA[3]);
});

click($('.b5'), () => {
    page_preview($mA[4]);
});

click($('.b6'), () => {
    page_preview($mA[5]);
});*/