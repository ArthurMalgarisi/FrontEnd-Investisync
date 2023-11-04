(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    })

    /*-------------------------Função para realizar abertura dos modal-------------------------*/

    document.getElementById("openModalBtnAdd").addEventListener("click", function() {
        document.getElementById("modalAdd").style.display = "block";
    });

    document.getElementById("openModalBtnEdit").addEventListener("click", function() {
        document.getElementById("modalEdit").style.display = "block";
    });
    
    document.getElementById("openModalBtnDetails").addEventListener("click", function() {
        document.getElementById("modalDetails").style.display = "block";
    });
    
    document.getElementById("closeModalBtnAdd").addEventListener("click", function() {
        document.getElementById("modalAdd").style.display = "none";
    });

    document.getElementById("closeModalBtnEdit").addEventListener("click", function() {
        document.getElementById("modalEdit").style.display = "none";
    });
    
    document.getElementById("closeModalBtnDetails").addEventListener("click", function() {
        document.getElementById("modalDetails").style.display = "none";
    });
    
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Aqui você pode adicionar código para lidar com o envio do formulário, por exemplo, enviar os dados para o servidor.
        document.getElementById("modalAdd").style.display = "none";
    });

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Aqui você pode adicionar código para lidar com o envio do formulário, por exemplo, enviar os dados para o servidor.
        document.getElementById("modalEdit").style.display = "none";
    });

     var campoCor = document.getElementById('corEscolhida');
     var textoExemplo = document.getElementById('textoExemplo');
 
     campoCor.addEventListener('input', function () {
         var corSelecionada = campoCor.value;
         textoExemplo.style.color = corSelecionada;
     });


     

     var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Salse",
                    data: [15, 30, 55, 45, 70, 65, 85],
                    backgroundColor: "rgba(235, 22, 22, .7)",
                    fill: true
                },
                {
                    label: "Revenue",
                    data: [99, 135, 170, 130, 190, 180, 270],
                    backgroundColor: "rgba(235, 22, 22, .5)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });

})(jQuery);

