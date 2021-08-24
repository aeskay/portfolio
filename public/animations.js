


setTimeout(() => {
  const topFader = document.querySelectorAll('.topFader');

for (let index = 0; index < topFader.length; index++) {
    const element = topFader[index];

    const observer = new IntersectionObserver(elements => {
    
        elements.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
              // Add the animation class
              entry.target.classList.add('fade-in-top');
            }
          });
    })
    
    observer.observe(element);
}

//Fade Bottom

const bottomFader = document.querySelectorAll('.bottomFader');

for (let index = 0; index < bottomFader.length; index++) {
    const element = bottomFader[index];

    const observer = new IntersectionObserver(elements => {
    
        elements.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
              // Add the animation class
              entry.target.classList.add('fade-in-bottom');
            }
          });
    })
    
    observer.observe(element);
}

//Fade Left

const leftFader = document.querySelectorAll('.leftFader');

for (let index = 0; index < leftFader.length; index++) {
    const element = leftFader[index];

    const observer = new IntersectionObserver(elements => {
    
        elements.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
              // Add the animation class
              entry.target.classList.add('fade-in-left');
            }
          });
    })
    
    observer.observe(element);
}

//Fade Left

const rightFader = document.querySelectorAll('.rightFader');

for (let index = 0; index < rightFader.length; index++) {
    const element = rightFader[index];

    const observer = new IntersectionObserver(elements => {
    
        elements.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
              // Add the animation class
              entry.target.classList.add('fade-in-right');
            }
          });
    })
    
    observer.observe(element);
}

//Fade In

const fader = document.querySelectorAll('.fader');

for (let index = 0; index < fader.length; index++) {
    const element = fader[index];

    const observer = new IntersectionObserver(elements => {
    
        elements.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
              // Add the animation class
              entry.target.classList.add('fade-in');
            }
          });
    })
    
    observer.observe(element);
}
}, 1);