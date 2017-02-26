$(document).ready(function () {

    $.fn.datepicker.dates['cs'] = {
        days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"],
        daysShort: ["Ned", "Pon", "Úte", "Stř", "Čtv", "Pát", "Sob", "Ned"],
        daysMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So", "Ne"],
        months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        monthsShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čnc", "Srp", "Zář", "Říj", "Lis", "Pro"],
        today: "Dnes"
    };
    $('.datepicker').focusout(function () {
        // $(this).datepicker('hide');
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
    });
});