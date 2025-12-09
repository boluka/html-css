function loadPageVideo(){
    const title = document.title = sessionStorage.getItem('title');
    document.getElementsByTagName('body')[0].getElementsByTagName('h1')[0].innerText = title;
}
