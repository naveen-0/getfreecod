const signup = document.getElementById('signup');
const signin = document.getElementById('signin');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const mtScreen = document.getElementById('mt-screen');
const h = window.innerHeight; 
const eh = form1.offsetHeight;
const ey = form2.offsetHeight;
const mt = (h - eh)/2;
mtScreen.style.marginTop = `${mt-80}px`;
signin.addEventListener('click', ()=> {
form2.style.display = 'none';
form1.style.display = 'block';
});
signup.addEventListener('click', ()=> {
 form1.style.display = 'none';
form2.style.display = 'block';
});
