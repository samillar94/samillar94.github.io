<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Web Page Sandbox</title>
    <link rel="stylesheet" type="text/css" href="sandstyle.css">
    <style>
    h6 {color: #ff6a00} /*Overwrites stylesheet*/  
    </style>
</head>
  
<body>
    <h1>My Web Page Sandbox</h1>
    <br><br>
    <p class="diva">I define the content with HTML and the layout with CSS.</p>
    <br>
    <p><a href="mothindex.html">Go to moth index</a><a href="index.html">Go home</a></p>
    <div class="fea">
    <p class="smcaps">Beautiful butterflies<br>marvellous moths<br>precious pollinators</p><br><em>BCNI</em>
    </div>
    <br><br>
     I've set the body style to produce grey text if no selector is applied.
    <p>ASP can output plain text:</p>
    <p><%response.write("Hello World!")%></p>
    <p class="one">Hello World!</p> 
    <div class="mid">
    <h2>You can use HTML tags</h2><h3> to</h3><h4> format</h4><h5> the</h5><h6> text</h6>
    <p>within scripts. Those were h2-h6 - there's no h7 unless you define it.</p>

    <p style='color:#0070C0'>Use < br > to take a new line (you can't take a new line in the middle of a "", and consecutive scripts run contents together so you can start an HTML tag in one script and finish it in the next.) Incidentally, I've set the colour here to blue using an inline thingy.</p>
    </div>
    <br><br>

    
    <p class="one">Now testing ASP arrays and For loops</p>

    <%response.write("<ul.a>")
    
    Dim famname(5),i
    famname(0) = "flerovium"
    famname(1) = "copernicium"
    famname(2) = "darmstadtium"
    famname(3) = "hassium"
    famname(4) = "seaborgium"
    famname(5) = "rutherfordium"

    For i = 0 to 5
         response.write("<li>"& famname(i) & "</li>")
    Next

    response.write("</ul>")%>

    <br>
    <p class="one">Default em and defined italic and oblique selectors</p>
    <br>
    
    <em style="font-variant: smcaps">Geronimo! (em) </em>
    <it>Geronimo! (it) </it><ob>Geronimo! (ob) </ob><i>Geronimo! (i) </i><br>
    <br>
    <i style="font-variant: smcaps"></it><a  href="default.asp" target="_blank">Phyllocnistis unipunctella</a></i>
    <br><br>
</body>
</html>
