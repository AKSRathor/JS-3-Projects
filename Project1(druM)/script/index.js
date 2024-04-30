const sound_a = new Audio('../music/soundA.wav')
const sound_s = new Audio('../music/soundS.wav')
const sound_d = new Audio('../music/soundD.wav')
const sound_f = new Audio('../music/soundF.wav')
const sound_g = new Audio('../music/soundG.wav')
const sound_h = new Audio('../music/soundH.wav')
const sound_j = new Audio('../music/soundJ.wav')
const sound_k = new Audio('../music/soundK.wav')
const sound_l = new Audio('../music/soundL.wav')




document.querySelector('#btn_a').addEventListener("click", ()=>{
    document.querySelector('#btn_a').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_a').style.transform = 'scale(1)'
    }, 70);
    sound_a.play()
})

document.addEventListener("keyup", (event)=>{
    if(event.key === 'a'){
        document.querySelector('#btn_a').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_a').style.transform = 'scale(1)'
        }, 70);
        sound_a.play()


    }
})

document.querySelector('#btn_s').addEventListener("click", ()=>{
    document.querySelector('#btn_s').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_s').style.transform = 'scale(1)'
    }, 70);
    sound_s.play()

})

document.addEventListener("keyup", (event)=>{
    if(event.key === 's'){
        document.querySelector('#btn_s').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_s').style.transform = 'scale(1)'
        }, 70);
        sound_s.play()


    }
})



document.querySelector('#btn_d').addEventListener("click", ()=>{
    document.querySelector('#btn_d').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_d').style.transform = 'scale(1)'
    }, 70);
    sound_d.play()

})

document.addEventListener("keyup", (event)=>{
    if(event.key === 'd'){
        document.querySelector('#btn_d').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_d').style.transform = 'scale(1)'
        }, 70);
        sound_d.play()


    }
})

document.querySelector('#btn_f').addEventListener("click", ()=>{
    document.querySelector('#btn_f').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_f').style.transform = 'scale(1)'
    }, 70);
    sound_f.play()

})

document.addEventListener("keyup", (event)=>{
    if(event.key === 'f'){
        document.querySelector('#btn_f').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_f').style.transform = 'scale(1)'
        }, 70);
        sound_f.play()


    }
})

document.querySelector('#btn_g').addEventListener("click", ()=>{
    document.querySelector('#btn_g').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_g').style.transform = 'scale(1)'
    }, 70);
    sound_g.play()

})

document.addEventListener("keyup", (event)=>{
    if(event.key === 'g'){
        document.querySelector('#btn_g').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_g').style.transform = 'scale(1)'
        }, 70);
        sound_g.play()


    }
})

document.querySelector('#btn_h').addEventListener("click", ()=>{
    document.querySelector('#btn_h').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_h').style.transform = 'scale(1)'
    }, 70);
    sound_h.play()

})

document.addEventListener("keyup", (event)=>{
    if(event.key === 'h'){
        document.querySelector('#btn_h').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_h').style.transform = 'scale(1)'
        }, 70);
        sound_h.play()


    }
})

document.querySelector('#btn_j').addEventListener("click", ()=>{
    document.querySelector('#btn_j').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_j').style.transform = 'scale(1)'
    }, 70);
    sound_j.play()

})

document.addEventListener("keyup", (event)=>{
    if(event.key === 'j'){
        document.querySelector('#btn_j').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_j').style.transform = 'scale(1)'
        }, 70);
        sound_j.play()


    }
})

document.querySelector('#btn_k').addEventListener("click", ()=>{
    document.querySelector('#btn_k').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_k').style.transform = 'scale(1)'
    }, 70);
    sound_k.play()
    
})

document.addEventListener("keyup", (event)=>{
    if(event.key === 'k'){
        document.querySelector('#btn_k').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_k').style.transform = 'scale(1)'
        }, 70);
        sound_k.play()


    }
})

document.querySelector('#btn_l').addEventListener("click", ()=>{
    document.querySelector('#btn_l').style.transform = 'scale(1.1)'
    setTimeout(() => {
        document.querySelector('#btn_l').style.transform = 'scale(1)'
    }, 70);
    sound_l.play()

})

document.addEventListener("keyup", (event)=>{
    if(event.key === 'l'){
        document.querySelector('#btn_l').style.transform = 'scale(1.1)'
        setTimeout(() => {
            document.querySelector('#btn_l').style.transform = 'scale(1)'
        }, 70);
    sound_l.play()


    }
})