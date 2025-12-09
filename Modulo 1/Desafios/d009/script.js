
let title = null;


function loadPage(){
    let HTML = document.getElementsByClassName('thumbs');
    for(element of HTML){   
        console.log(element.getElementsByTagName('p')[0].textContent);
        const text = element.getElementsByTagName('p')[0].textContent
        element.getElementsByTagName('a')[0].setAttribute('onclick', `loadVideo('${text}')`)
    }


}

function loadVideo(title){
    sessionStorage.setItem('title',title); 
}

