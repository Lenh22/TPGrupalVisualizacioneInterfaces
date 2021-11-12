$().ready(function () {
    $(".hospitalLink").click(
        function (e) {
            switch (this.id) {
                case "hospitalItaliano":
                    $("#content").html("Hospital Italiano de Buenos Aires, Pres. Tte. Gral. Juan Domingo Perón 4190, C1199 ABH, Buenos Aires")
                    break;
                case "hospitalPosadas":
                    $("#content").html("Avenida Presidente Arturo U. Illia s/n y Marconi Morón 386, B1684 El Palomar, Provincia de Buenos Aires")
                    break;
                case "hospitalEvaPeron":
                    $("#content").html("Colón 502, Merlo, Provincia de Buenos Aires")
                    break;
                default:
                    break;
            }
            $("#toastMessage").show();
        }
    );

    $("#closePopUp").click(function () {
        $("#toastMessage").hide();
    });
});
