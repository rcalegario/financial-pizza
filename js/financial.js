const percents = [
    {part: 'invest', percent: 0.3},
    {part: 'individual', percent: 0.4},
    {part: 'couple', percent: 0.2},
    {part: 'education', percent: 0.05},
    {part: 'want', percent: 0.05} // need to be the last
];

function calculate(value) {
    let amount = 0;
    let spend = 0;
    percents.forEach(element => {
        percentage = value * element.percent;
        if(percentage % 1 != 0){
            let aux;
            if(element.part == 'invest'){
                aux = Math.ceil(percentage);
            } else {
                aux = Math.floor(percentage);
            }
            amount += percentage - aux;
            percentage = aux;
        }

        if(element.part == 'want') {
            percentage = Math.round(percentage + amount);
        }

        if(element.part != 'invest') {
            spend += percentage;
        }

        $('#value-'+element.part).val(percentage);
    });
    $('#value-spend').val(spend);
}

$('#calculate').click(function() {
    const value = Number($('#value').val().replace(',','.'));
    if($('#value')[0].validity.valid){
        calculate(value);
        $('#error-value').hide();
    } else {
        $('#error-value').show();
        $('#error-value').text($('#value')[0].validationMessage);
    }
});