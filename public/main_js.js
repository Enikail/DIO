// search stat
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
  
    const expand = () => {
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
    };
  
    searchBtn.addEventListener("click", expand);
  });

 // search dyn
  
  $(document).ready(function() {
    $('#search-input').select2({
        theme: 'bootstrap',
        minimumInputLength: 2,
        ajax: {
            url: '/autocomplete',
            dataType: 'json',
            delay: 250,
            processResults: function(data) {
                return {
                    results: $.map(data, function(movie) {
                        return {
                            id: movie.id,
                            text: movie.text,
                            image: movie.image,
                        };
                    }),
                };
            },
        },
        templateResult: function(movie) {
            if (!movie.id) {
                return movie.text;
            }
            return $('<span><img src="' + movie.image + '" class="img-flag" /> ' + movie.text + '</span>');
        },
        templateSelection: function(movie) {
            return movie.text;
        },
    }).on('select2:select', function(e) {
        var movieId = "e.params.data.id";
        window.location.href = '/detail/' + movieId;
    });
});

  