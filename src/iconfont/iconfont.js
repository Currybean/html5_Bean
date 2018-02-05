(function(window){var svgSprite='<svg><symbol id="icon-gouwuche" viewBox="0 0 1024 1024"><path d="M317.125 688.504l539.969 0c25.713 0 51.426-17.142 59.996-42.854l102.852-445.688c8.572-17.142 0-34.284-8.57-51.426-8.57-17.142-34.285-25.712-51.426-25.712L222.844 122.824 197.132 11.4 34.284 11.4C17.142 11.4 0 19.971 0 37.113c0 17.142 17.142 34.284 34.284 34.284l111.421 0 51.426 222.844 0 0c0 8.571 0 8.571 0 17.142l77.138 317.125c-34.283 17.142-68.567 59.996-68.567 111.423 0 34.283 17.142 59.996 34.284 77.138-17.143 17.142-34.284 51.426-34.284 77.138 0 59.998 51.426 111.423 111.422 111.423 59.997 0 111.422-42.854 111.422-102.852 0-17.142-8.571-34.283-8.571-51.426l368.55 0c-8.568 17.143-8.568 34.284-8.568 51.426 0 59.997 51.424 111.423 111.42 111.423 59.998 0 111.424-51.426 111.424-111.423 0-59.996-42.855-102.851-102.852-111.422l-8.572 0L317.125 791.356l0 0c-25.713 0-51.425-25.713-51.425-51.425C274.27 714.218 291.412 688.504 317.125 688.504zM882.807 851.352c25.713 0 51.426 25.713 51.426 51.426 0 25.714-17.143 42.855-51.426 42.855-25.713 0-51.426-25.714-51.426-51.427C831.381 868.494 857.094 851.352 882.807 851.352zM317.125 945.633c-25.713 0-51.425-25.714-51.425-51.427 0-25.712 25.712-51.425 51.425-51.425l0 0 0 0c25.713 0 51.426 25.713 51.426 51.425C368.551 928.491 342.838 945.633 317.125 945.633zM857.094 628.508 342.838 628.508 274.27 328.525l651.392 0L857.094 628.508zM959.945 182.819l-17.143 85.709L257.128 268.528l-17.142-77.139L959.945 182.819z"  ></path></symbol><symbol id="icon-dianhua" viewBox="0 0 1024 1024"><path d="M809.370223 409.879158c-93.231381-30.68179-55.840796-89.130993-111.830995-111.832018-95.059006-38.546921-186.391131-37.281091-186.391131-37.281091s-91.031273-0.968048-186.387038 37.281091c-56.103786 22.512736-18.60473 81.149205-111.836111 111.832018-98.559736 32.432667-150.004409-15.096836-148.959613-73.812099 0.740874-39.36352 24.972764-83.760682 74.405617-112.578008 126.557394-73.808006 372.776122-74.55502 372.776122-74.55502s246.223844 0.748037 372.780215 74.55502c49.055253 28.630061 73.325006 72.579015 74.365708 111.721501C959.860702 394.334113 908.4191 442.459181 809.370223 409.879158L809.370223 409.879158zM383.915321 383.40418l63.444984 0 0 63.956637 127.913275 0 0-63.956637 63.956637 0 0 63.956637 256.167311 223.464491 0 149.109016c0 41.154305-44.871977 74.557066-86.027305 74.557066L212.923926 894.491391c-41.153282 0-85.005023-33.403784-85.005023-74.557066L127.918903 670.825308l255.997442-223.464491L383.916345 383.40418 383.915321 383.40418zM511.898181 799.85808c70.621431-0.001023 127.877459-57.256028 127.877459-127.872343 0-70.623477-57.256028-127.878482-127.877459-127.878482-70.616314 0-127.873366 57.255005-127.873366 127.878482C384.024815 742.602052 441.281867 799.85808 511.898181 799.85808L511.898181 799.85808z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)