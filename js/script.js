const tl = gsap.timeline();

function animContent(container, fromSpecificPage) {
    let $asd = container.querySelector('.asd_1');
    
    if (fromSpecificPage) {
        return tl
            .fromTo($asd, {
                pointerEvents: 'none',
                duration: 0.3,
                translateY: 150,
                opacity: 0
            }, {
                duration: 0.3,
                translateY: 0,
                opacity: 1,
                pointerEvents: 'all'
            });
    } else {
        gsap.set($asd, { opacity: 1 });
        return tl;
    }
}


barba.init({
    views: [{
        namespace: 'home',
        afterEnter(data) {
            homeSect();
            const fromSpecificPage = data.current.namespace === 'home' || data.current.namespace === 'home1';
            animContent(data.next.container, fromSpecificPage);
        }
    },
    {
        namespace: 'home1',
        afterEnter(data) {
            homeSect1();
            const fromSpecificPage = data.current.namespace === 'home' || data.current.namespace === 'home1';
            animContent(data.next.container, fromSpecificPage);
        }
    }],
    transitions: [{
        name: 'opacity-transition',
        sync: true,
        leave(data) {
            return gsap.to(data.current.container, {
                duration: 0.1,
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
                duration: 0.1,
            });
        },
    }]
});
function homeSect(){
    console.log('homeSect вызвана');
    const arrowMainPhoto= document.getElementById('arrowMainPhoto'),
        blockMainPhoto= document.getElementById('blockMainPhoto'),
        blockName= document.getElementById('blockName'),
        mainText= document.getElementById('mainText'),
        arrowFooter= document.getElementById('arrowFooter'),
        sectionMainInfo=document.getElementById('sectionMainInfo');
    arrowMainPhoto.addEventListener('click', () =>{
        const checkEvent = blockMainPhoto.style.width==='550px' || blockMainPhoto.style.width==='';
        if (checkEvent){
            blockMainPhoto.style.width= '1100px';
            blockName.style.opacity='0';
            blockName.style.visibility='hidden';
            setTimeout(() => {
                arrowMainPhoto.classList.remove('arrow-1');
                arrowMainPhoto.classList.add('arrow-2');
            },390)
            setTimeout(() =>{
                blockName.style.display='none';
            },101)
            setTimeout(() =>{
                mainText.style.display='flex';
            },301)
            setTimeout(() =>{
                mainText.style.opacity='1';
                mainText.style.visibility='visible';
            },401)
        } else{
            blockMainPhoto.style.width='550px';
            mainText.style.opacity='0';
            mainText.style.visibility='hidden';
            mainText.style.transition='all 0.1s ease-in-out';
            setTimeout(() => {
                arrowMainPhoto.classList.remove('arrow-2');
                arrowMainPhoto.classList.add('arrow-1');
            },200)
            setTimeout(() =>{
                mainText.style.display='none';
            },150)
            setTimeout(() =>{
                blockName.style.display='flex';
            },300)
            setTimeout(() =>{
                blockName.style.opacity='1';
                blockName.style.visibility='visible';
            },400)
        }
    })
    arrowFooter.addEventListener('click', () => {
        let topPos = sectionMainInfo.offsetTop -150;
        window.scroll({top: topPos, left: 0, behavior: 'smooth'});
    })
}
function homeSect1(){
        console.log('homeSect вызвана');
    const arrowMainPhoto_1 = document.getElementById('arrowMainPhoto_1'),
        blockMainPhoto_1 = document.getElementById('blockMainPhoto_1'),
        blockName_1 = document.getElementById('blockName_1'),
        mainText_1 = document.getElementById('mainText_1'),
        arrowFooter_1 = document.getElementById('arrowFooter_1'),
        sectionMainInfo_1 = document.getElementById('sectionMainInfo_1');
    const gmailContact= document.getElementById('gmailContact');
    const gmailInvisible = document.querySelector('.gmailInvisible');
    gmailContact.addEventListener('click', () =>{
        const Invisible = gmailInvisible.style.opacity==='0' ||  gmailInvisible.style.opacity==='';
        if (Invisible){
            setTimeout(() => {
                gmailInvisible.style.opacity='1';
            },10)
            gmailInvisible.style.display='flex';
        } else {
            setTimeout(() => {
                gmailInvisible.style.display='none';
            },300)
            gmailInvisible.style.opacity='0';
        }
    });
    arrowMainPhoto_1.addEventListener('click', () => {
        const checkEvent = blockMainPhoto_1.style.width === '550px' || blockMainPhoto_1.style.width === '';
        if (checkEvent) {
            blockMainPhoto_1.style.width = '1100px';
            blockName_1.style.opacity = '0';
            blockName_1.style.visibility = 'hidden';
            setTimeout(() => {
                arrowMainPhoto_1.classList.remove('arrow-1');
                arrowMainPhoto_1.classList.add('arrow-2');
            }, 390);
            setTimeout(() => {
                blockName_1.style.display = 'none';
            }, 101);
            setTimeout(() => {
                mainText_1.style.display = 'flex';
            }, 301);
            setTimeout(() => {
                mainText_1.style.opacity = '1';
                mainText_1.style.visibility = 'visible';
            }, 401);
        } else {
            blockMainPhoto_1.style.width = '550px';
            mainText_1.style.opacity = '0';
            mainText_1.style.visibility = 'hidden';
            mainText_1.style.transition = 'all 0.1s ease-in-out';
            setTimeout(() => {
                arrowMainPhoto_1.classList.remove('arrow-2');
                arrowMainPhoto_1.classList.add('arrow-1');
            }, 200);
            setTimeout(() => {
                mainText_1.style.display = 'none';
            }, 150);
            setTimeout(() => {
                blockName_1.style.display = 'flex';
            }, 300);
            setTimeout(() => {
                blockName_1.style.opacity = '1';
                blockName_1.style.visibility = 'visible';
            }, 400);
        }
    });

    arrowFooter_1.addEventListener('click', () => {
        let topPos = sectionMainInfo_1.offsetTop - 150;
        window.scroll({ top: topPos, left: 0, behavior: 'smooth' });
    });
};