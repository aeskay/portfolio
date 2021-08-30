setTimeout(() => {
    let dark = false;

    const toggleImg = document.querySelector(".darkMode");
    toggleImg.addEventListener("click", () => {
        dark = !dark;
        console.log(dark);
        if(dark == true){
            const blackBg = document.querySelectorAll("div");
            blackBg.forEach(element => {
                element.classList.add("blackBg")
            });

            
            const whiteText = document.querySelectorAll("p, .alalade");
            whiteText.forEach(element => {
                element.classList.add("whiteText")
            });


            const blueText = document.querySelectorAll("h1,h2,h3,h4,h5,h6,i");
            blueText.forEach(element => {
                element.classList.add("blueText")
            });

            
            document.querySelector(".samuel").classList.add("greyText")

        } else {
            const divs = document.querySelectorAll("div");
            divs.forEach(element => {
                element.classList.remove("blackBg")
            });


            const whiteText = document.querySelectorAll("p, .alalade");
            whiteText.forEach(element => {
                element.classList.remove("whiteText")
            });


            const blueText = document.querySelectorAll("h1,h2,h3,h4,h5,h6,i");
            blueText.forEach(element => {
                element.classList.remove("blueText")
            });


            document.querySelector(".samuel").classList.remove("greyText")

        } 
    })
    
}, 1000);