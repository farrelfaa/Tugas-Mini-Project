$(document).ready(function(){
    $.ajax({
        url: 'buku.json',
        type: 'GET',
        dataType: 'json',
        success: function(tokoBuku) {
            $("#info-toko").html(
                "Nama Toko: " + tokoBuku.namaToko + "<br>" +
                "Pengarang: " + tokoBuku.pengarang + "<br>" +
                "Alamat: " + tokoBuku.alamat
            );

            $.each(tokoBuku.buku, function(i, buku) {
                var row = $("<tr>");
                row.append($("<th>").text(buku.judul));
                row.append($("<th>").text(buku.tahunTerbit));
                $("#tabel-buku").append(row);
            });
        },
        error: function(error) {
            console.log("Error: ", error);
        }
    });
});