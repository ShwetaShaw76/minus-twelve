let imagesEl = document.querySelectorAll(".i");
let input = document.querySelector("#in");
let submit = document.querySelector("#send");

const getImages = async () => {
   
   imagesEl.forEach(el=>{
        el.src = "./loading.svg";
        el.style.display = "flex";
    });

    const response = await fetch('/generate', {
        headers: {
            'Content-Type': "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            prompt: input.value
        })
    },
    );
    const json = await response.json();

    if (!json.success) {
        // error
        return alert("an error occured while generating image");
    }
    const images = json.data.images.slice(0, 3);

    images.forEach((imageUrl, i) => {
        imagesEl[i].src = imageUrl;
        imagesEl[i].style.display = "flex";
    });
}
submit.addEventListener("click", getImages)
