$(document).ready(function () {

    $.fn.datepicker.dates['cs'] = {
        days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"],
        daysShort: ["Ned", "Pon", "Úte", "Stř", "Čtv", "Pát", "Sob", "Ned"],
        daysMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So", "Ne"],
        months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        monthsShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čnc", "Srp", "Zář", "Říj", "Lis", "Pro"],
        today: "Dnes"
    };
    $('.searchbox .datepicker').click(function () {

        var ind = $(this).index();

        console.log(ind);
        if ( ind == 1 ){
        }
        if ( ind == 3 ){
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

    $('.searchbox .searchbox--btn').click(function (e) {
        e.preventDefault();
        var date1 = $(this).parent().find('input[name="arrival"]').val();
        var date2 = $(this).parent().find('input[name="departure"]').val();
        var url = 'https://booking.previo.cz/?hotId=731512&arrival='+date1+'&departure='+date2;
        window.open(url,'_blank');
    });

    function hideHotels() {
        $('#hotel1,#hotel2,#hotel3').hide().addClass('animated pulse');
    }
    function hideHotelsitem () {
        $('.hotels--items > div').hide();
    }
    $('.hotels--items').find("[data-hotel='1']").click(function () {
        hideHotels();
        $('#hotel1').fadeIn();
    });
    $('.hotels--items').find("[data-hotel='2']").click(function () {
        hideHotels();
        hideHotelsitem();
        $('.hotels--items').find("[data-hotel='2']").show().addClass('animated fadeIn');
        $('.hotels--items').find("[data-hotel='3']").show().addClass('animated fadeIn');
        $('#hotel2').fadeIn();
    });
    $('.hotels--items').find("[data-hotel='3']").click(function () {
        hideHotels();
        hideHotelsitem();
        $('.hotels--items').find("[data-hotel='1']").show().addClass('animated fadeIn');
        $('.hotels--items').find("[data-hotel='2']").show().addClass('animated fadeIn');
        $('#hotel3').fadeIn();
    });
});