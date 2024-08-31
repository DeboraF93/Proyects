$(document).ready(function () {
    cargarwebInicio();

    function cargarwebInicio() {
        // Coloca el contenido del menú en el div 'optionsMenu'
        $("#optionsMenu").html(`
            <div id='divMenu'>
                <div id='menu'>
                    <a class='btnInicio'>Inicio</a>
                    <a class='btnSobreMi'>Sobre mi</a>
                    <a class='btnArticulos'>Artículos legales</a>
                </div>
            </div>
        `);

        // Mostrar contenido inicial y ocultar "Sobre Mi"
        $(".textSobreMi").hide();
        $(".textInicial").show();
        $(".container").hide();
        $(".imgFoto").show(); 
    }

    // Delegación de eventos para btnSobreMi
    $(document).on('click', '.btnSobreMi', function () {
        cargarSobreMi();
        $(".btnSobreMi").css("color", "white");
        $(".btnInicio").css("color", "");
        $(".btnArticulos").css("color", "");
        $(".btnContacto").css("color", "");
    });

    // Delegación de eventos para btnInicio
    $(document).on('click', '.btnInicio', function () {
        cargarwebInicio();
        $(".btnInicio").css("color", "white");
        $(".btnSobreMi").css("color", "");
        $(".btnArticulos").css("color", "");
        $(".btnContacto").css("color", "");
    });

    // Delegación de eventos para btnArticulos
    $(document).on('click', '.btnArticulos', function () {
        cargarArticulos();
        $(".btnArticulos").css("color", "white");
        $(".btnInicio").css("color", "");
        $(".btnSobreMi").css("color", "");
        $(".btnContacto").css("color", "");
    });

    function cargarSobreMi() {
        $(".textInicial").hide();
        $(".imgFoto").hide();
        $(".textSobreMi").show();
        $(".container").show();
        $(".imgFotoS").show(); 
    }

    function cargarArticulos() {
        $(".textInicial").html("<a class='link1'>Caso de éxito: Inmueble ocupado, delito de usurpación.</a><img src='img/imgLink1.jpg' class='img.Link1'><br></br><a class='link2'>Sentencia absolutoria: Salud pública ( Tráfico de drogas).</a><img src='img/imgLink2.jpg' class='img.Link2'><br></br><a class='link3'>NO CULPABLE , acusado de violencia de género.</a><img src='img/imgLink3.jpg' class='img.Link3'><br></br><a class='link4'>5 key facts about redundancy in Spain ON</a><img src='img/imgLink4.jpg' class='img.Link4'><br></br><a class='link5'>Hago funciones superiores pero cobro menos ¿ Puedo reclamar?</a><img src='img/imgLink5.jpg' class='img.Link5'><br></br><a class='link6'>¿Pueden condenarme en segunda instancia tras la absolución?</a><img src='img/imgLink6.jpg' class='img.Link6'><br></br><a class='link7'>The authorities are informing about a huge wave of Phishing attempts regarding Coronavirus.</a><img src='img/imgLink7.jpg' class='img.Link7'><br></br><a class='link8'>¿Pueden multarme con el patinete en Málaga?¿ Cual será la nueva regulación?</a><img src='img/imgLink8.jpg' class='img.Link8'><br></br><a class='link9'>¿Son arras penitenciales cuando se menciona el art. 1454 del Código Civil?</a><img src='img/imgLink9.jpg' class='img.Link9'><br></br><a class='link10'>MEDIATION IS THE MOST APPROPRIATE WAY TO SETTLE BUSINESS DISPUTES WHERE THE PARTIES NEED TO MAINTAIN AN EXISTING RELATIONSHIP.</a><img src='img/imgLink10.jpg' class='img.Link10'><br></br><a class='link11'>El delito de Maltrato habitual ( 173, 2 Código Penal)</a><img src='img/imgLink11.jpg' class='img.Link11'><br></br><a class='link12'>La relación Abogado Cliente… y viceversa.( Vol 1)</a><img src='img/imgLink12.jpg' class='img.Link12'><br></br><a class='link13'></a><br></br><a class='link14'></a><br></br><a class='link15'></a>");
        $(".textSobreMi").hide();
        $(".container").hide();
        $(".imgFoto").hide(); 
    }

    // Mstrar/ocultar .informacion en móvil
    const informacion = document.querySelector('.informacion');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        // Mostrar .informacion al hacer scroll hacia arriba o en el final de la página
        if (scrollPosition > windowHeight / 2 && scrollPosition < documentHeight - windowHeight * 1.5) {
            informacion.classList.add('show');
        } else {
            informacion.classList.remove('show');
        }
    });
});
