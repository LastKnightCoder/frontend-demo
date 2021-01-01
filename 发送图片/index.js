let upload = document.getElementById("upload");

upload.addEventListener("change", event => {
    let file = event.target.files[0];

    reader = new FileReader();

    reader.addEventListener("load", event => {
        let upload = document.createElement("img");
        upload.src = event.target.result;
        document.body.append(upload);
        uploadImage(file);
    })

    reader.readAsDataURL(file);
})

function uploadImage(file) {
    let xhr= new XMLHttpRequest();
    xhr.open("post", "http://127.0.0.1:4000/uploadImage");

    xhr.onreadystatechange = function(event) {
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }

    let formData = new FormData();
    formData.append("file", file, file.name);
    xhr.send(formData);
}