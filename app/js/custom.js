$(document).ready(function () {

    $.fn.datepicker.dates['cs'] = {
        days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"],
        daysShort: ["Ned", "Pon", "Úte", "Stř", "Čtv", "Pát", "Sob", "Ned"],
        daysMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So", "Ne"],
        months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        monthsShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čnc", "Srp", "Zář", "Říj", "Lis", "Pro"],
        today: "Dnes"
    };
    $('.datepicker').click(function () {

        var ind = $(this).index();

        console.log(ind);
        if ( ind == 0){
            $('.datepicker').eq(1).datepicker('hide');
        }else {
            $('.datepicker').eq(0).datepicker('hide');
        }


    });
    $('.datepicker').datepicker({
        format: "dd.mm.yyyy",
        language: 'cs'
    });

    $('#aniimated-thumbnials').lightGallery({
        thumbnail:true,
        animateThumb: true,
        showThumbByDefault: false
    });

});
$(document).ready(function () {
    $('.searchbox--btn').click(function (e) {
        e.preventDefault();
        var date1 = $(this).parent().find('input[name="arrival"]').val();
        var date2 = $(this).parent().find('input[name="departure"]').val();
        var url = 'https://booking.previo.cz/?hotId=731512&arrival='+date1+'&departure='+date2;
        $('iframe').attr('src', url);
    });
});