// Vanilla JS slideshow for Ejercicio 6-5
document.addEventListener('DOMContentLoaded', function(){
    const slideshow = document.getElementById('slideshow');
    const slides = Array.from(slideshow.querySelectorAll('img'));
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const pager = document.getElementById('pager');
    let current = 0;
    let timer = null;
    const timeout = 3000;

    function show(index){
        index = (index + slides.length) % slides.length;
        slides.forEach((s,i)=>{
            s.style.display = (i === index) ? 'block' : 'none';
        });
        // update pager
        Array.from(pager.children).forEach((p,i)=>{
            p.classList.toggle('active', i === index);
        });
        current = index;
    }

    function next(){ show(current + 1); }
    function prev(){ show(current - 1); }

    function start(){ stop(); timer = setInterval(next, timeout); }
    function stop(){ if(timer){ clearInterval(timer); timer = null; } }
    function reset(){ stop(); start(); }

    // build pager
    slides.forEach((s,i)=>{
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'dot';
        a.addEventListener('click', function(e){ e.preventDefault(); show(i); reset(); });
        pager.appendChild(a);
    });

    // attach events
    if(prevBtn) prevBtn.addEventListener('click', function(e){ e.preventDefault(); prev(); reset(); });
    if(nextBtn) nextBtn.addEventListener('click', function(e){ e.preventDefault(); next(); reset(); });
    slideshow.addEventListener('mouseenter', stop);
    slideshow.addEventListener('mouseleave', start);
    document.addEventListener('keydown', function(e){ if(e.key === 'ArrowLeft') prev(); else if(e.key === 'ArrowRight') next(); });

    // initial state
    show(0);
    start();
});
