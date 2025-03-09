// Dark MODE

const dark_mode=document.querySelector('.dark_mode')
dark_mode.addEventListener('click',()=>{

        const changeBodyColor=document.body
        
        // QUANDO CLICAR MUDA PARA O TEMA BLACK
        changeBodyColor.classList.toggle('trocarParaSol')
        changeBodyColor.classList.toggle('change_body_color')
})

//Animação de Scroll 
window.sr=ScrollReveal({reset:true})
sr.reveal('.about',{duration:2000})
sr.reveal('.MySoftskills',{duration:2000})
sr.reveal('.MyHardSkills',{duration:2000})
sr.reveal('.My-Projects',{duration:2000})