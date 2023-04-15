// JavaScript con jQuery
$(document).ready(function() {
    // Obtener el valor del selector de países y actualizar la imagen de la bandera
    $('#countrySelect').on('change', function() {
      var selectedCountry = $(this).val();
      var selectedImage = $('option:selected', this).data('image');
      $('#flag-icon').attr('src', selectedImage);
    });
  });