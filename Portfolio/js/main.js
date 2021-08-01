const body = document.querySelector('body');
const gnbList = body.querySelectorAll('header > nav > .gnb-menu > li');
const sectionElms = body.querySelectorAll('main > .section-wrap > section');
const sectionWrap = body.querySelector('main > .section-wrap');
const subList = body.querySelector('.sub-list');
const subElm = subList.querySelectorAll('li');
const typing = body.querySelector('section.skills .typing');
const typingIcon = body.querySelector('.sub-title > .typing-icon');
const skillList = body.querySelector('.skills-list');
const contactBtn = body.querySelector('header > nav > .gnb-menu > .contact');
const contactElm = body.querySelector('main > .section-wrap > .contact');
const closeBtn = body.querySelectorAll('main > .section-wrap > .contact > .circles > .circle');
const loadingArea = body.querySelector('.loading-area');
const loadingBar = loadingArea.querySelector('.loading-area .loading-bar');
const loadingMsg = loadingArea.querySelector('.loading-area .loading-msg');
const mobileGnb = body.querySelectorAll('.mobile-header > .m-gnb-menu > ul > li');
const mobileContact = body.querySelector('.mobile-header > .m-gnb-menu > ul > .contact')


let timer; 
let loadingTimer;

let typingTxt = 'text';
typingTxt = typingTxt.split('');

let index = 0;


let fill = 0;

window.onload = function(){
    // loadingArea.classList.add('active');

    loadingMsg.classList.add('txt-ani')
    loadingBarEvent();
    
 
    setTimeout(function(){
        loadingArea.style.display = 'none'
    },4000);

};

function loadingBarEvent() {
    if( fill < 80 ) {
        loadingBar.style.width = (40 + fill) + "%";

        fill += 20;
        loadingTimer = setTimeout(loadingBarEvent,700);
    } else {
        clearTimeout(loadingTimer);
    }
}





function typingEffect(){
    if( index < typingTxt.length ) {
        typing.innerHTML += typingTxt[index];
        index++;

        timer = setTimeout(typingEffect,150); // �쇱젙媛꾧꺽�쇰줈 ���댄븨�④낵 �몄텧
    } else {
        typingIcon.classList.add('on');
        
        clearTimeout(timer); 
        
        setTimeout(function(){
            skillList.classList.add('active')   
        },2000)
    }
   
}


for(let i = 0; i < gnbList.length - 1; i++){
    gnbList[i].addEventListener('click', function(ev){
        ev.preventDefault();

        const liElm = ev.target.parentNode.parentNode;
        let sectionInner = sectionElms[i].children[1];

        if( liElm.tagName !== 'LI' ) return
        

        setionAllRemove()
        gnbAllRemove()
        
        

        if( sectionElms[i].classList.contains('skills') ) {   
            body.classList.add('black'); 
            setTimeout(typingEffect,500); //���댄븨�④낵 �몄텧
        }


        if( gnbList[i].classList.contains('portfolio') ) {
            let targetSection = sectionElms[i];

            subGnbRemove();

            // gnb 
            contactBtn.style.display = 'none';
            subList.style.display = 'block';

            if( liElm.classList.contains('js') ) {
                targetSection = sectionElms[i+1];
                targetSection.classList.add('active');
            
            }else {
                console.log('vue');
                subElm[0].classList.add('on')
                targetSection.classList.add('active');
            }

            liElm.classList.add('on')


        } else {
            // gnb
            contactBtn.style.display = 'block';
            subList.style.display = 'none';
            sectionElms[i].classList.add('active');
        }

        gnbList[i].classList.add('on');
        sectionInner.scrollTop = '0';


    })
}

function setionAllRemove() {
    for(let j = 0; j < sectionElms.length; j++){
        sectionElms[j].classList.remove('active');
    }

    body.classList.remove('black');
}

function gnbAllRemove() {
    for(let k = 0; k < gnbList.length; k++) {
        gnbList[k].classList.remove('on');
    }
}

function subGnbRemove() {
    subElm.forEach(function(elm){
        elm.classList.remove('on')
    })
}

for(let i = 0; i < mobileGnb.length - 1; i++){
    mobileGnb[i].addEventListener('click',function(ev){
        ev.preventDefault();
        const sectionInner = sectionElms[i].children[1];

        setionAllRemove();
        

        sectionElms[i].classList.add('active');
        sectionInner.scrollTop = '0'; 

        if( sectionElms[i].classList.contains('skills') ) {   
            body.classList.add('black'); 
            setTimeout(typingEffect,500); 
          
        }


    })
}

contactBtn.addEventListener('click',function(ev){
    ev.preventDefault();
    contactElm.classList.add('active');
    body.style.overflow = 'hidden'
})

for(let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click',function(ev){
        ev.preventDefault();
        contactElm.classList.remove('active');
    })
}


mobileContact.addEventListener('click', function(ev){
    ev.preventDefault();
    contactElm.classList.add('active');
})

function init() {
    subList.style.display = 'none';
}

init()

