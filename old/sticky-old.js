            if (matchMedia('only screen and (max-width: 500px)').matches || Modernizr.touch) {

                

                /*var cssId = 'touchstyle';  // you could encode the css path itself to generate id..
                if (!document.getElementById(cssId)) {
                    var head = document.getElementsByTagName('head')[0];
                    var link = document.createElement('link');
                    link.id = cssId;
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = 'touchstyle.css';
                    link.media = 'all';
                    head.appendChild(link);
                }*/

                var button = document.getElementById('button'); // Assumes element with id='button'

                button.onclick = function () {
                    var div = document.getElementById('shy');
                    if (div.style.display !== 'block') {
                        div.style.display = 'block';
                    }
                    else {
                        div.style.display = 'none';
                    }
                }

                var button2 = document.getElementById('button2'); // Assumes element with id='button'

                button2.onclick = function () {
                    var div2 = document.getElementById('shy2');
                    if (div2.style.display !== 'block') {
                        div2.style.display = 'block';
                        li2.style.background = '#f00';
                    }
                    else {
                        div2.style.display = 'none';
                        li2.style.background = 'rgba(256,0,0,0.5)';
                    }
                }

                var button3 = document.getElementById('button3'); // Assumes element with id='button'

                button3.onclick = function () {
                    var div3 = document.getElementById('shy3');
                    if (div3.style.display !== 'block') {
                        div3.style.display = 'block';
                        li3.style.background = '#f00';
                    }
                    else {
                        div3.style.display = 'none';
                        li3.style.background = '#800';
                    }
                }
            }
            else {

                //refresh css!

                /*function removecssfile(filename, filetype){
                var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
                var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
                var allsuspects=document.getElementsByTagName(targetelement)
                for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
                if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
                allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
                }
                }

                removecssfile("touchsyle.css", "css")*/

            };
