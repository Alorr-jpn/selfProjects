var trial = document.querySelector('.trial');
var menu = document.querySelector('#menu');
var file = document.querySelector('#file');
var cross = document.querySelector('#cross');
var profile = document.querySelector('.prof1');
var files = document.querySelector('#files')
var profiles = document.querySelector('.prof2')

    menu.addEventListener('click', (e) => {
        trial.style.display = 'inline-block';
            
    })
    cross.addEventListener('click', (e) => {
        trial.style.display = 'none';
            
    })
    file.addEventListener('click', (e) =>{
        // file.style.display = 'inline-block'
        if (profile.style.display == 'inline'){
            profile.style.display = "none"
        }else {
            profile.style.display = "inline"
        }
    } )

 files.addEventListener('click', (e) => {
    if (profiles.style.display == 'block'){
        profiles.style.display = "none"
} else {
    profiles.style.display = "block"
    
}
})

