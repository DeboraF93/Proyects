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
        $("#articulos").hide();
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
        $("#articulos").hide();
    }

    function cargarArticulos() {
        $("#articulos").show();
        $(".textInicial").hide();
        $(".imgFoto").hide();
        $(".textSobreMi").hide();
        $(".container").hide();
        $(".imgFotoS").hide()

        
    }

});
