const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
    });
  };
  
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elements = document.querySelectorAll('.side-block-1');
  const elements2 = document.querySelectorAll('.side-block-2');

  elements.forEach(el => {
    observer.observe(el, options);
  });

  elements2.forEach(el => {
    observer.observe(el, options);
  });



  const startAnimation1 = (entries1, observer1) => {
    entries1.forEach(entry1 => {
      entry1.target.classList.toggle("slide-in-from-left", entry1.isIntersecting);
    });
  };
  
  const observer1 = new IntersectionObserver(startAnimation1);
  const options1 = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elements11 = document.querySelectorAll('.side-block-11');
  const elements12 = document.querySelectorAll('.side-block-12');
  
  elements11.forEach(el1 => {
    observer1.observe(el1, options1);
  });
  
  elements12.forEach(el1 => {
    observer1.observe(el1, options1);
  });
  






  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight; // Total document height
    const verticalLine = document.getElementById('line-fillerr');

    const linePosition = Math.min(documentHeight , scrollTop / 2);
    verticalLine.style.height = `${linePosition}px`;
  });
