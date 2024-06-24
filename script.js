document.addEventListener('DOMContentLoaded', () => {
  // Form validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted!');
      form.reset();
  });

  // GSAP Animations
  gsap.from('#hero .hero-content', { duration: 1, opacity: 0, y: -50 });
  
 
  gsap.from('#education .timeline', { scrollTrigger: '#education', duration: 1, opacity: 0, y: 50 });
 
  gsap.from('#contact form', { scrollTrigger: '#contact', duration: 1, opacity: 0, y: 50 });

  // Skill bars animation
  const skillBars = document.querySelectorAll('.progress-bar');
  skillBars.forEach(bar => {
      const skillLevel = bar.getAttribute('data-skill');
      gsap.to(bar, { width: skillLevel + '%', duration: 1, scrollTrigger: bar });
  });

  // Horizontal scrolling project cards
  const projectsContainer = document.querySelector('.projects-content');
  gsap.to(projectsContainer, {
      scrollTrigger: {
          trigger: projectsContainer,
          start: "top center",
          end: "bottom top",
          scrub: true,
      },
      x: -projectsContainer.scrollWidth + window.innerWidth,
      ease: "none"
  });

  // Social links hover animation
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
          gsap.to(link, { scale: 1.2, duration: 0.56 });
      });
      link.addEventListener('mouseout', () => {
          gsap.to(link, { scale: 1, duration: 0.56 });
      });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  // Typewriter effect
  class TypeWriter {
      constructor(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
      }

      tick() {
          let i = this.loopNum % this.toRotate.length;
          let fullTxt = this.toRotate[i];

          if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

          let that = this;
          let delta = 200 - Math.random() * 100;

          if (this.isDeleting) {
              delta /= 2;
          }

          if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500;
          }

          setTimeout(function () {
              that.tick();
          }, delta);
      }
  }

  const elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-text');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
          new TypeWriter(elements[i], JSON.parse(toRotate), period);
      }
  }

  // Inject CSS for typewriter effect
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
});






document.addEventListener('DOMContentLoaded', () => {
    const projectsContent = document.querySelector('.projects-content');
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const clone = card.cloneNode(true);
        projectsContent.appendChild(clone);
    });
});

