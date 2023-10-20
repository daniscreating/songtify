$('#add_song').submit(function(event){
	alert("La cancion fue agregada con exito!");
})

$('#update_song').submit(function(event){
	event.preventDefault();

	var unindexed_array = $(this).serializeArray();
    var data = {}

	$.map(unindexed_array, function(n,i){
		data[n['name']] =n['value']
	})

	var request = {
		'url': `http://localhost:3000/api/songs/${data.id}`,
		"method" : "PUT",
        "data" : data
	}

	$.ajax(request).done(function(response){
        alert("Informacion actualizada exitosamente!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/songs/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Deseas eliminar esta cancion del registro?")){
            $.ajax(request).done(function(response){
                alert("Informacion eliminada exitosamente!!");
                location.reload();
            })
        }

    })
}