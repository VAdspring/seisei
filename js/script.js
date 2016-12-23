$(document).ready(function(){

    $('#dropzone').on('dragover',function(e){

        e.preventDefault(); // Annule l'interdiction de drop
    });

    $('#dropzone').on('drop',function(e){

        e.preventDefault(); // Annule l'interdiction de drop

        preview(e.originalEvent.dataTransfer.files);

    });

    $('#dropzone').on('dragleave',function(){

        $('#dropzone').css('border-style','dashed');

    });

    $('#dropzone').on('dragenter',function(){

        $('#dropzone').css('border-style','solid');

    });

    $('#dropzone').click(function(){

        $('#files').click();
    });

    $('#files').change(function(e){

        preview(this.files);
    });

    function preview(files){

        $.each(files, function(index, file){

            var reader = new FileReader();

            reader.onload = function (event) {

                var html = '';

                html += '<div class="imagePreview">';
                    html += '<div class="size">'+Math.round(file.size/1000)+' ko</div>';
                    html += '<img src="'+event.target.result+'"/>';
                html += '</div>';

                $('#listImages').prepend(html);

            }

            reader.readAsDataURL(file);

        });
    }




});
