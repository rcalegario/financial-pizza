// const percents = [
//     {part: 'invest', percent: 0.3},
//     {part: 'individual', percent: 0.4},
//     {part: 'couple', percent: 0.2},
//     {part: 'education', percent: 0.05},
//     {part: 'want', percent: 0.05} // need to be the last
// ];

function calculate(value, percents) {
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
    const percents = $('.porcent');
    const percentsValues = [];
    let percentsTotal = 0;
    for (let i = 0; i < percents.length; i++) {
        const pValue = Number(percents[i].value);
        percentsTotal += pValue;
        percentValue = { part: percents[i].id.match(/^porcent-(.*)/)[1], percent: (pValue/100)};
        percentsValues.push(percentValue);
    }

    $('#error-value').hide();
    $('#error-percents').hide();
    if (!$('#value')[0].validity.valid) {
        $('#error-value').show();
        $('#error-value').text($('#value')[0].validationMessage);
    } else if (percentsTotal !== 100) {
        $('#error-percents').show();
        $('#error-percents').text(`As porcentagens não estão com valores corretos (${percentsTotal}%)`);
    } else {
        calculate(value, percentsValues);
    }
    
});