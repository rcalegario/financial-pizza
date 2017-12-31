$('#calculate').click(function() {
    const value = Number($('#value').val());
    $('#value-invest').val(value * 0.3);
    $('#value-individual').val(value * 0.35);
    $('#value-couple').val(value * 0.2);
    $('#value-education').val(value * 0.05);
    $('#value-want').val(value * 0.05);
});