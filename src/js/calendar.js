document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        header: {
            left: 'prevYear,prev,next,nextYear today',
            right: 'title'
        },
        events: [
            {
                title: 'BCG: Unica dosis (A)',
                start: '2020-07-01'
            },
            {
                title: 'Hepatitis B HB: dosis neonatal',
                start: '2020-07-01'
            },
            {
                title: 'Neumococo Conjugada: 1ª dosis',
                start: '2020-09-01'
            },
            {
                title: 'Quintuple Pentavalente (DTP-HB-Hib): 1ª dosis',
                start: '2020-09-01'
            },
            {
                title: 'Polio IPV: 1ª dosis',
                start: '2020-09-01'
            },
            {
                title: 'Rotavirus: 1ª dosis',
                start: '2020-09-01'
            },
            {
                title: 'Meningococo: 1ª dosis',
                start: '2020-10-01'
            },
            {
                title: 'Neumococo Conjugada: 2ª dosis',
                start: '2020-11-01'
            },
            {
                title: 'Quintuple Pentavalente (DTP-HB-Hib): 2ª dosis',
                start: '2020-11-01'
            },
            {
                title: 'Polio IPV: 2ª dosis',
                start: '2020-11-01'
            },
            {
                title: 'Rotavirus: 2ª dosis',
                start: '2020-11-01'
            },
            {
                title: 'Meningococo: 2ª dosis',
                start: '2020-12-01'
            },
            {
                title: 'Quintuple Pentavalente (DTP-HB-Hib): 3ª dosis',
                start: '2021-01-01'
            },
            {
                title: 'Polio IPV: 3ª dosis',
                start: '2021-01-01'
            }


          ]

    });

    calendar.render();
});
