$('#calculate').click(function() {
    const value = Number($('#value').val().replace(',','.'));
    if($('#value')[0].validity.valid){
        $('#value-invest').val(value * 0.3);
        $('#value-spend').val(value * 0.7);
        $('#value-individual').val(value * 0.35);
        $('#value-couple').val(value * 0.2);
        $('#value-education').val(value * 0.05);
        $('#value-want').val(value * 0.05);
        $('#error-value').hide();
    } else {
        $('#error-value').show();
        $('#error-value').text($('#value')[0].validationMessage);
    }
});