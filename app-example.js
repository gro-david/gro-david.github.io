const btn = document.querySelector(".btn");
btn.addEventListener("click", createElement);

function createElement(item){
    var div = document.createElement("div");
    div.classList.add("card-container");
    var img=document.createElement("img");
    img.src=item;

    document.body.appendChild(div);
    document.querySelector(".card-container").appendChild(img);
}

const idlength = 20;
const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    //checks if there are any files in the list
    if (fileList.length > 0) {
        console.log(fileList);
        folderName = makeid(idlength);
        console.log(folderName);
        fs.mkdir("./folderName")
    }
});

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
   }
   return result;
}

//create request
var xhr = new XMLHttpRequest();

xhr.open('get', 'https://api.github.com/users/funchal');

xhr.send();