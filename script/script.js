const dark_mode=document.querySelector('.dark_mode')
dark_mode.addEventListener('click',()=>{

        const changeBodyColor=document.body

        changeBodyColor.classList.toggle('trocarParaSol')
        changeBodyColor.classList.toggle('change_body_color')
})
