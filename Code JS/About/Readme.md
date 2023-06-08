# Code JS
# Table Of Contents
    1.  Introducing Code JS
    2.  Working With Code JS Template
    3.  Understanding Data Binding & Storage In Code JS Frame
    4.  Building With Code JS Functions
    5.  Manipulating With Code JS Functions
    6.  Code JS Objects
    7.  Summary & Sample Website With Code JS

# Topic 1
# Introduction
# What is Code JS?
    Code JS is a Javascript Frontend Development Framework & Library of libraries that supports web design structure and programming in HTML5, CSS3 & Javascript. It enables one to;

    *   Build & manipulate web contents.

    *   Bind and manipulate composed data in HTML5.
    
    *   Wrap new styles for objects in a single JS (css()) function.

    *   Directly insert variables in markup file(index.html) that was created in an external JS file.

    *   Connect Your external scripts and stylesheets while keeping you from adding them directly on your index file.

    *   Create single page applications.

    *   Manipulate contents faster with its functions.

    *   Build your web apps & contents with JS easier, if you do not wish to write HTML directly in your markups.

        & Lots more...

# Requirements
    To use Code JS, you must have a basic knowledge and understanding in;
    *   HTML5 (Standard Markup Language for structuring, programming and defining the layout of a webpage/app).
    *   CSS 3 (For Programming the style of a webpage/app).
    *   JavaScript (A multi-purpose programming language, basically for programming the behaviour of a webpage/app).

# More info on Code JS
    Code JS is a framework that tests & proves how smart & capable people are in solving certain web frontend problems, while providing them with functions and code wrap functionalities to help them code faster.

# Topic 2
# Understanding Data Interchange & Binding With Code JS Frame
    By default, we know that an HTML file can be written as the following;

        <!DOCTYPE html>
        <html lang="en-US">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="application-name" content="My App Name" />
                <meta name="description" content="This is the description of my app" />
                <meta name="keywords" content="My, My App, App, Name" />
                <meta http-equiv="refresh" content="5000" />
                <meta http-equiv="IE-compatible" content="5000" />
                <title> My App Name </title>
            </head>
            <body>
                <h1> Hello World! </h1>
            </body>
        </html>
    
    But in Code JS, it's different. The framework binds all app data content so that it becomes easier and faster to write and access. For instance, in the template, the index.html file has the following code;

        <!DOCTYPE html>
        <application name="My App" logo="" favcolor="">
        <data>
            <meta charset="UTF-8" />
            <meta-name viewport="width=device-width, initial-scale=1" author="" description="" keywords="">
            <meta-http-equiv>
        </data>

        <layout></layout>

        <engine>
            <script src="js/components/components.js"></script>
            <script src="js/scripts.js"></script>
            <script src="js/components/run.js"></script>
        </engine>
        </application>

    So we can see first that we do not need to make everything too long because Code JS binds them for us.

        <application name="My App" logo="" favcolor="">

    This element binds our application data and contain the three main sections of our application development with/in Code JS. The app name binds our application name to our title element, and also to the "application-name" meta data. It can also be called in JS as "app.name", while the logo attribute stores our application logo as our app icon/favicon, and in the logo section when we wanna add our app loader using "addLoader()" function. It can also be called as "app.logo". Same goes for "favcolor" attribute, which refers to our application favorite color or say theme(/theme-color), which can be called upon as "app.favcolor".

    There are three sections in the application element that contains our entire (visible) content. We have the;
    <data></data> -- section/element (For containing our meta data, and can also contain our external css libraries links if it isn't working with import in css/stylesheets folder/file)
    <layout></layout> -- section/element (For containing our HTML/Markup)
    <engine></engine> -- section/element (For containing the scripts that run and functionalise Code JS)

    As you can see, all meta tags are contained with the <data> element, and are binded in three lines. One for the meta charset, then the meta names (attributes and contents), and the meta http-equiv, as shown below;

        <data>
            <meta charset="charset" />
            <meta-name name="content">
            <meta-http-equiv name="content">
        </data>

    The <layout /> element contains our markup as shown below;

        <layout>
            <header></header>
            <nav></nav>
            <main>
                <section>
                    <article></article>
                </section>
            </main>
            <aside></aside>
            <footer></footer>
        </layout>

    And markup comments are written as;
        
        </_Comments goes here...>

    You can also add <footnote /> inside the <footer></footer> element and see the result.

    Then we have the <engine></engine> element for containing our scripts, including adding from other sources.
    
# Note:
All existing files in the template have been completely linked/wired together, so do not link again to avoid unnecessary errors. Goto css/stylesheets.css to import css stylesheets or libraries, even without adding <link /> to the index.html, but in case, you can use the <link /> in <data> element, after the <meta-http-equiv /> element. And Goto js/scripts.js and add your external scripts sources to the $myScripts array and you're done. Only the functions(use imp() function to import a new script, or importAll to import an array of scripts) maybe with conditionals(if...else statements) or within functions.

    You can insert JavaScript variable/constant data from an internal or external source using "compile" attribute, and <js> element. For example;
    Create a new variable called data or greetings in app.js (or any external script)...

        var data = "Hello World";

        In the html file;

        <button compile> data </button>

        <h1>
            <js> data </js> (My greetings)
        </h1>

    Or.... 

        </_Using "backtick">
        <!-- Using "backtick" -->
        <js>`
            <h2> ${data} </h2>
            (My greetings)
        `</js>

    Then Check the result! You can also check your console to see that new comment tag (</_Comment>).


# Topic 3
# Building With JavaScript In Code JS
    In Code JS, HTML elements are treated as widgets/objects and are given the class "widget" when created using Code JS JavaScript functions.
    To create an element, using the widgets.construct() function.

# Remember:
    All newly created HTML elements for your website or web app must go into the <layout> tag/element.

    Open your app.js file in js folder or create a new one and add to $myScripts array in scripts.js file in the same folder.

# widgets.construct() render()
    After opening your js file, on a new line, add;

    widgets.construct("div");

    // Use HTML function to write HTML into it.

    html(widget, "<h1> Hello World! </h1>");

    // Then place it in the <layout> using render() function, and use the selector function $(element|id|single-class);

    render($('layout'), widget);

    Preview your index.html and you'll see the result.

# widgets.constructMultiple() renderAll
    To create a single element or widget, use widgets.construct(element), and to create multiple elements, use widgets.constructMultiple(elements, number of elements), for instance;

    widgets.constructMultiple("div", 5);

    // You can write same data to all at the same time, they're contained in the same variable "widget".
    html(widget, "<h1> Hello World! </h1>"); // Or widget.innerHTML

    // Using renderAll() function to render all multiple elements
    renderAll($('layout'), widget);

# Moving widgets with render(target_element, widget_to_move)
    You can use render() to move an already existing element in the <layout> from its current parent element into another element. For instance;

    index.html:
    <layout>
        <article id="one">
            <h1 id="head1"> Hello World </h1>
        </article>
        <article id="two"></article>
    </layout>

    app.js:
    render($('#two'), $('#head1'));

# renderBefore(target_element, widget_to_render)
    Use this to render or place a widget before another widget.

    renderBefore($('#two'), $('#head1'));

# renderAfter(target_element, widget_to_render)
    Use this to render or place a widget after another widget.

    renderAfter($('#two'), $('#head1'));

# renderFirstPlace(target_element, widget_to_render)
    Use this to render or place a widget inside another widget/element, as its first child.

    renderFirstPlace($('#two'), $('#head1'));

# renderLastPlace(target_element, widget_to_render)
    Use this to render or place a widget inside another widget/element, as its last child.

    renderLastPlace($('#two'), $('#head1'));

# swap(first_element, second_element)
    Use this to swap or rearrange two already existing elements or widgets.

    swap($('#one'), $('#two'));


# Working With Code JS Functions (DOM Manipulation)