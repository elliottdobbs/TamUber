{"changed":true,"filter":false,"title":"checklist.js","tooltip":"/app/assets/javascripts/checklist.js","value":"var elements = 4;\n\n$(\"span\").click(function(event){\n\t$(this).parent().fadeOut(500, function(){\n\t\t$(this).remove();\n\t});\n\telements = elements-1;\n\tif(elements === 0)\n\tdocument.getElementById(\"b\").disabled = false;\n\tevent.stopPropagation();\n});\n\nif(elements > 0)\ndocument.getElementsByClassName(\"dis\").disabled = true;\n\n// $(\".al\").click(function(){\n// \tif($(this).css(\"color\") === \"rgb(128, 128, 128)\"){\n// \t\tconsole.log(\"It is GRAY!\");\n// \t}\n// });\n\n\n","undoManager":{"mark":-2,"position":100,"stack":[[{"start":{"row":23,"column":40},"end":{"row":23,"column":41},"action":"insert","lines":["s"],"id":376},{"start":{"row":23,"column":41},"end":{"row":23,"column":42},"action":"insert","lines":["p"]},{"start":{"row":23,"column":42},"end":{"row":23,"column":43},"action":"insert","lines":["a"]}],[{"start":{"row":23,"column":40},"end":{"row":23,"column":43},"action":"remove","lines":["spa"],"id":377},{"start":{"row":23,"column":40},"end":{"row":23,"column":44},"action":"insert","lines":["span"]}],[{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":[";"],"id":378}],[{"start":{"row":22,"column":0},"end":{"row":24,"column":23},"action":"remove","lines":["","var it = document.getElementsByTagName(\"span\");","console.log(it.length);"],"id":379}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":380},{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["d"],"id":381},{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["o"]}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"remove","lines":["o"],"id":382}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["o"],"id":383},{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"insert","lines":["c"]}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":3},"action":"remove","lines":["doc"],"id":384},{"start":{"row":17,"column":0},"end":{"row":17,"column":8},"action":"insert","lines":["document"]}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["."],"id":385}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["d"],"id":386},{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["i"]},{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["s"]}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"remove","lines":["s"],"id":387}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["a"],"id":388}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"remove","lines":["a"],"id":389},{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"remove","lines":["i"]},{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"remove","lines":["d"]}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["g"],"id":390},{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["e"]},{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":12},"action":"remove","lines":["get"],"id":391},{"start":{"row":17,"column":9},"end":{"row":17,"column":33},"action":"insert","lines":["getElementsByClassName()"]}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":34},"action":"insert","lines":["\"\""],"id":392}],[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["d"],"id":393},{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["i"]},{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["s"]}],[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["."],"id":394},{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["d"]}],[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"remove","lines":["d"],"id":395},{"start":{"row":17,"column":39},"end":{"row":17,"column":47},"action":"insert","lines":["disabled"]}],[{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":[" "],"id":396},{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["="]}],[{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":[" "],"id":397},{"start":{"row":17,"column":50},"end":{"row":17,"column":51},"action":"insert","lines":["t"]},{"start":{"row":17,"column":51},"end":{"row":17,"column":52},"action":"insert","lines":["r"]},{"start":{"row":17,"column":52},"end":{"row":17,"column":53},"action":"insert","lines":["u"]},{"start":{"row":17,"column":53},"end":{"row":17,"column":54},"action":"insert","lines":["e"]},{"start":{"row":17,"column":54},"end":{"row":17,"column":55},"action":"insert","lines":[";"]}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":398},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["i"]},{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["f"]}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":4},"action":"insert","lines":["()"],"id":399}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"insert","lines":["l"],"id":400},{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["e"]},{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["l"]}],[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"remove","lines":["l"],"id":401},{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"remove","lines":["e"]},{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"remove","lines":["l"]}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"insert","lines":["e"],"id":402},{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["l"]}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":5},"action":"remove","lines":["el"],"id":403},{"start":{"row":17,"column":3},"end":{"row":17,"column":11},"action":"insert","lines":["elements"]}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":[" "],"id":404}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["+"],"id":405},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["!"]}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"remove","lines":["!"],"id":406},{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"remove","lines":["+"]}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":[">"],"id":407}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":[" "],"id":408},{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["0"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":409},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"insert","lines":["// "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["// "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"remove","lines":["// "],"id":410},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"remove","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"remove","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"remove","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"remove","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"remove","lines":["// "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"remove","lines":["// "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"remove","lines":["// "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":3},"action":"remove","lines":["// "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"remove","lines":["// "],"id":411},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"remove","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"remove","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"remove","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"remove","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"remove","lines":["// "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"remove","lines":["// "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":2,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["$(\"ul\").on(\"click\", \"li\", function(){","\t$(this).toggleClass(\"completed\");","});","",""],"id":412},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":5},"action":"remove","lines":["ul"],"id":413},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["s"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":5},"action":"remove","lines":["sp"],"id":414},{"start":{"row":2,"column":3},"end":{"row":2,"column":7},"action":"insert","lines":["span"]}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":45},"action":"remove","lines":["on(\"click\", \"span\", function(event)"],"id":415},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["c"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["l"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["i"]}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":13},"action":"remove","lines":["cli"],"id":416},{"start":{"row":2,"column":10},"end":{"row":2,"column":17},"action":"insert","lines":["click()"]}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["f"],"id":417},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["u"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["n"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["c"]}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":20},"action":"remove","lines":["func"],"id":418},{"start":{"row":2,"column":16},"end":{"row":2,"column":24},"action":"insert","lines":["function"]}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":26},"action":"insert","lines":["()"],"id":419}],[{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["e"],"id":420},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["v"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":25},"end":{"row":2,"column":28},"action":"remove","lines":["eve"],"id":421},{"start":{"row":2,"column":25},"end":{"row":2,"column":30},"action":"insert","lines":["event"]}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"remove","lines":[")"],"id":422},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"remove","lines":[")"]}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":[")"],"id":423}],[{"start":{"row":0,"column":17},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":424},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["v"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["a"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":[" "],"id":425},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["e"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["l"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":7},"action":"remove","lines":["ele"],"id":426},{"start":{"row":1,"column":4},"end":{"row":1,"column":12},"action":"insert","lines":["elements"]}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":[" "],"id":427},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":[" "],"id":428}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["$"],"id":429}],[{"start":{"row":1,"column":16},"end":{"row":1,"column":18},"action":"insert","lines":["()"],"id":430}],[{"start":{"row":1,"column":17},"end":{"row":1,"column":19},"action":"insert","lines":["\"\""],"id":431}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["s"],"id":432},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["["]}],[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"remove","lines":["["],"id":433}],[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["p"],"id":434}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":20},"action":"remove","lines":["sp"],"id":435},{"start":{"row":1,"column":18},"end":{"row":1,"column":22},"action":"insert","lines":["span"]}],[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":[";"],"id":436}],[{"start":{"row":1,"column":25},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":437},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":12},"action":"remove","lines":["elements"],"id":438},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["i"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["t"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["e"]},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["m"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["c"],"id":439},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["o"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["n"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["cons"],"id":440},{"start":{"row":3,"column":0},"end":{"row":3,"column":7},"action":"insert","lines":["console"]}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["."],"id":441},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["l"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["l"],"id":442},{"start":{"row":3,"column":8},"end":{"row":3,"column":13},"action":"insert","lines":["log()"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["i"],"id":443},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":14},"action":"remove","lines":["it"],"id":444},{"start":{"row":3,"column":12},"end":{"row":3,"column":16},"action":"insert","lines":["item"]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["."],"id":445},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["l"]}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"remove","lines":["l"],"id":446},{"start":{"row":3,"column":17},"end":{"row":3,"column":23},"action":"insert","lines":["last()"]}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":23},"action":"remove","lines":["()"],"id":447},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"remove","lines":["t"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"remove","lines":["s"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"remove","lines":["a"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"remove","lines":["l"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["."]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["."],"id":448},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["l"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":19},"action":"remove","lines":["le"],"id":449},{"start":{"row":3,"column":17},"end":{"row":3,"column":23},"action":"insert","lines":["length"]}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":[";"],"id":450}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":18},"action":"remove","lines":["span"],"id":451},{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["."]},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["a"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["l"]}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":17},"action":"remove","lines":["al"],"id":452},{"start":{"row":1,"column":15},"end":{"row":1,"column":17},"action":"insert","lines":["al"]}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":20},"action":"remove","lines":["$(\".al\");"],"id":453},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["g"]},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["e"]},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["E"],"id":454}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":15},"action":"remove","lines":["getE"],"id":455},{"start":{"row":1,"column":11},"end":{"row":1,"column":25},"action":"insert","lines":["getElementById"]}],[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"remove","lines":["d"],"id":456},{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"remove","lines":["I"]}],[{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["T"],"id":457},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["a"]}],[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["g"],"id":458},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["M"]}],[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"remove","lines":["M"],"id":459},{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"remove","lines":["g"]},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"remove","lines":["a"]},{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"remove","lines":["T"]},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"remove","lines":["y"]},{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"remove","lines":["B"]},{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"remove","lines":["t"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"remove","lines":["n"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"remove","lines":["e"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"remove","lines":["m"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"remove","lines":["e"]},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":["l"]},{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"remove","lines":["E"]},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"remove","lines":["t"]},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["e"]}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"remove","lines":["g"],"id":460}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["d"],"id":461},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["o"]},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["c"]}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":14},"action":"remove","lines":["doc"],"id":462},{"start":{"row":1,"column":11},"end":{"row":1,"column":19},"action":"insert","lines":["document"]}],[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["."],"id":463},{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["g"]},{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":["e"]},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":23},"action":"remove","lines":["get"],"id":464},{"start":{"row":1,"column":20},"end":{"row":1,"column":42},"action":"insert","lines":["getElementsByTagName()"]}],[{"start":{"row":1,"column":41},"end":{"row":1,"column":43},"action":"insert","lines":["\"\""],"id":465}],[{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"insert","lines":["s"],"id":466},{"start":{"row":1,"column":43},"end":{"row":1,"column":44},"action":"insert","lines":["p"]}],[{"start":{"row":1,"column":42},"end":{"row":1,"column":44},"action":"remove","lines":["sp"],"id":467},{"start":{"row":1,"column":42},"end":{"row":1,"column":46},"action":"insert","lines":["span"]}],[{"start":{"row":1,"column":48},"end":{"row":1,"column":49},"action":"insert","lines":[";"],"id":468}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":469},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["a"],"id":470},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["l"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["e"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["aler"],"id":471},{"start":{"row":3,"column":0},"end":{"row":3,"column":7},"action":"insert","lines":["alert()"]}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":8},"action":"insert","lines":["\"\""],"id":472}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["s"],"id":473},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["r"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["f"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["g"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["j"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["s"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["j"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["f"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["h"]}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":[";"],"id":474}],[{"start":{"row":1,"column":0},"end":{"row":5,"column":25},"action":"remove","lines":["var item = document.getElementsByTagName(\"span\");","","alert(\"srfgjsjfh\");","","console.log(item.length);"],"id":475},{"start":{"row":0,"column":17},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":16},"action":"remove","lines":["if(elements > 0)"],"id":476},{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":4.5,"scrollleft":0,"selection":{"start":{"row":8,"column":29},"end":{"row":8,"column":29},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":57,"mode":"ace/mode/javascript"}},"timestamp":1542762115926}