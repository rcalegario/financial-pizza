const porcents = [
    {part: 'invest', porcent: 0.3},
    {part: 'spend', porcent: 0.7},
    {part: 'individual', porcent: 0.4},
    {part: 'couple', porcent: 0.2},
    {part: 'education', porcent: 0.05},
    {part: 'want', porcent: 0.05},
];

$('#calculate').click(function() {
    const value = Number($('#value').val().replace(',','.'));
    if($('#value')[0].validity.valid){
        $('#value-invest').val(value * 0.3);
        $('#value-spend').val(value * 0.7);
        $('#value-individual').val(value * 0.4);
        $('#value-couple').val(value * 0.2);
        $('#value-education').val(value * 0.05);
        $('#value-want').val(value * 0.05);
        $('#error-value').hide();
    } else {
        $('#error-value').show();
        $('#error-value').text($('#value')[0].validationMessage);
    }
});