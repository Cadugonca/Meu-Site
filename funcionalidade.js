var senai = window.document.getElementById("senai")
var dnc = window.document.getElementById("dnc")
var busuu = window.document.getElementById("busuu")
var com = window.document.getElementById("com")
var resp = window.document.getElementById("resp")
var evo = window.document.getElementById("evo")
var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")

function IrDireita() {
    busuu.style = "display: none"
    dnc.style = "display: none"
    senai.style = "display: none"
    evo.style = "display: flex"
    resp.style = "display: flex"
    com.style = "display: flex"
}

function IrEsquerda() {
    busuu.style = "display: flex"
    dnc.style = "display: flex"
    senai.style = "display: flex"
    evo.style = "display: none"
    resp.style = "display: none"
    com.style = "display: none"
}

