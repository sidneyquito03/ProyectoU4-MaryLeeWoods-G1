//Este script es para el fondo, para que el usuario decida que fondo ponerle, es decir, que seleccione el fondo que más le guste
let diseño1 = document.querySelector('#diseño1');
let diseño2 = document.querySelector('#diseño2');
let diseño3 = document.querySelector('#diseño3');
let diseño4 = document.querySelector('#diseño4');
let diseño5 = document.querySelector('#diseño5');
let diseño6 = document.querySelector('#diseño6');
let diseño7 = document.querySelector('#diseño7');
diseño1.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1d55f03-64d8-4d5e-9a13-9943ea4e5c91/dckxpmf-146c4467-a658-46ab-a455-fc6729566360.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxZDU1ZjAzLTY0ZDgtNGQ1ZS05YTEzLTk5NDNlYTRlNWM5MVwvZGNreHBtZi0xNDZjNDQ2Ny1hNjU4LTQ2YWItYTQ1NS1mYzY3Mjk1NjYzNjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pfsRzY2FLum74z4q_n8tCXVBkYIeIdFAvDUSMcsscnI')";
});
diseño2.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/8a/c8/95/8ac8955276802db5038173c3e96f17da.png')";
});
diseño3.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('https://fondosmil.com/fondo/2578.jpg')";
});
diseño4.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('https://img.freepik.com/vector-premium/paisaje-montana-al-atardecer-naturaleza_104785-126.jpg')";
});
diseño5.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('https://i.imgur.com/QmHEeCn.png')";
});
diseño6.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('https://pbs.twimg.com/media/DccR02DWkAEPpEb.jpg')";
});
diseño7.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('https://i.pinimg.com/564x/8d/27/39/8d2739910417f990066e1aefeb87a1f7.jpg')";
});

//Ahora voy a hacer que aunque se recargue la página, este dato se almacene y lo lograré con Local Storage



function colorchanger() {
  var selectValue = document.getElementById("myselection").value;
  document.body.style.backgroundColor = selectValue;
}



