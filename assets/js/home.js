export const header=`<header>
               

  <header id="header"></header> 
 <nav class="navbar navbar-expand-lg py-2">
  <div class="container-fluid">
  <a class="navbar-brand" href="#" id="nombre-user">      
  <img id="img-user" src="" alt="img" width="30" height="24" class="d-inline-block align-text-top">
  </a>
  <main id="main"><div class="center">
  <div id="main" class="main logged-out">
  <nav class="navbar navbar-expand-lg navbar-dark" id="encabezado">
    <div class="container">
      <a class="navbar-brand text-white display-1"> Tell me your secret
      </a>
      <!--Le dan diseño al título o lo agregan como imagen-->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
          <span> <a class="nav-link logged-in text-white" href="#" data-bs-toggle="modal" data-bs-target="#tarjetaModal"
              id="tarjeta"><i class='far fa-paper-plane'></i> Tu secreto </a></span>
          <a class="nav-link logged-in text-white" href="#" id="logout"><i class='fas fa-door-open'></i> Cerrar
            Sesión</a>
        </div>
      </div>
    </div>
  </nav>
                </nav>
            </header>`;

export const main=`
<div class="container-main">
  <div class="general-information">

  <div class="container-post">
    <div class="charging">
      <img src="assets/img/cat-charging.gif" />
    </div
    <div class="new-post">
    <form id="task-form">
    <textarea rows="4" cols="50" placeholder="¿Qué quieres compartir?" id="task-description"></textarea>
    <div class="containerProgress">
      <div class="progress"></div>
    </div>
    <div class="hide divImg">
      <span class="deleteImg">❌</span>
      <img class="picPost"/>
    </div>
    <div class="container-functions">
      <div class="camera-privacity">
      <input type="file" id="photoPost" class="hide" accept="image/*">
      <label for="photoPost"><img src="assets/img/camera.png" class="camera"></label>        
        <div class="privacidad">
          <select id="privacyPostArea">
            <option value="1">🌎 Público</option>
          </select>
        </div>
      </div>
      <button id="btn-task-form"> Compartir</button>
    </div>
  </div>
  <div class="container-post">
<div class="container p-4">
  <div class="row">
    <div >
      <ul class="list-group" id="posts">
      </ul>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
</div>`;