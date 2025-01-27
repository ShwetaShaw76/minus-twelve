let i1=document.querySelector(".i1");
let i2=document.querySelector(".i2");
let i3=document.querySelector(".i3");
let i4=document.querySelector(".i4");
let input=document.querySelector("#in");
const API_key=""
let submit=document.querySelector("#send");

const getImages = async() => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_key}`,
            'Content-Type': "application/json" 
        },
        body: JSON.stringify({
            "prompt": input.value,
            "n": "4",
            "size": "1024x1024"
        })
    }
    try{
       const response = await fetch('', options)
       const data = await response.json()
       console.log(data)

       data?.data.forEach(imageObj => {
        i1=
       }) 

    }catch (error) {
        console.error(error)
    }
}

submit.addEventListener("click", getImages)
