console.log('loadcharts.js');

var bgPrimary = '#4a89dc',
    bgPrimaryL = '#5d9cec',
    bgPrimaryLr = '#83aee7',
    bgPrimaryD = '#2e76d6',
    bgPrimaryDr = '#2567bd',
    bgSuccess = '#70ca63',
    bgSuccessL = '#87d37c',
    bgSuccessLr = '#9edc95',
    bgSuccessD = '#58c249',
    bgSuccessDr = '#49ae3b',
    bgInfo = '#3bafda',
    bgInfoL = '#4fc1e9',
    bgInfoLr = '#74c6e5',
    bgInfoD = '#27a0cc',
    bgInfoDr = '#2189b0',
    bgWarning = '#f6bb42',
    bgWarningL = '#ffce54',
    bgWarningLr = '#f9d283',
    bgWarningD = '#f4af22',
    bgWarningDr = '#d9950a',
    bgDanger = '#e9573f',
    bgDangerL = '#fc6e51',
    bgDangerLr = '#f08c7c',
    bgDangerD = '#e63c21',
    bgDangerDr = '#cd3117',
    bgAlert = '#967adc',
    bgAlertL = '#ac92ec',
    bgAlertLr = '#c0b0ea',
    bgAlertD = '#815fd5',
    bgAlertDr = '#6c44ce',
    bgSystem = '#37bc9b',
    bgSystemL = '#48cfad',
    bgSystemLr = '#65d2b7',
    bgSystemD = '#2fa285',
    bgSystemDr = '#288770',
    bgLight = '#f3f6f7',
    bgLightL = '#fdfefe',
    bgLightLr = '#ffffff',
    bgLightD = '#e9eef0',
    bgLightDr = '#dfe6e9',
    bgDark = '#3b3f4f',
    bgDarkL = '#424759',
    bgDarkLr = '#51566c',
    bgDarkD = '#2c2f3c',
    bgDarkDr = '#1e2028',
    bgBlack = '#283946',
    bgBlackL = '#2e4251',
    bgBlackLr = '#354a5b',
    bgBlackD = '#1c2730',
    bgBlackDr = '#0f161b';


var highColors = [bgWarning, bgPrimary, bgInfo, bgAlert,
    bgDanger, bgSuccess, bgSystem, bgDark];

$('#high-column2').highcharts({

    // backgroundColor: "#e56045",
    title: {
        text: null,
    },
    colors: [bgPrimary, bgPrimary, bgWarning,
        bgWarning, bgInfo, bgInfo
    ],
    chart: {
        type: 'column'
    },
    xAxis: {
        lineWidth: 0,
        tickLength: 6,
        title: {
            text: null
        },
        labels: {
            enabled: true
        },
    },
    legend: {
        enabled: false
    },
    yAxis: {
        title: {
            text: null
        },
    },
    plotOptions: {
        column: {
            colorByPoint: true,
        }
    },
    series: [{
        name: 'Tokyo',
        data: [12, 14, 20, 19, 8, 12,
            14, 20, 5, 16, 8, 12,
            14, 20, 19, 5, 16, 8,
            12, 14, 20, 19, 5, 16,
            8
        ]
    }]
});



$('#high-column3').highcharts({

    // backgroundColor: "#e56045",
    title: {
        text: null,
    },
    colors: [bgPrimary, bgPrimary, bgWarning,
        bgWarning, bgInfo, bgInfo
    ],
    chart: {
        type: 'column'
    },
    xAxis: {
        lineWidth: 0,
        tickLength: 6,
        title: {
            text: null
        },
        labels: {
            enabled: true
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr',
            'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },
    legend: {
        enabled: false
    },
    yAxis: {
        title: {
            text: null
        },
    },
    plotOptions: {
        column: {
            colorByPoint: true,
        }
    },
    series: [{
        name: 'Yahoo',
        data: [7.0, 6, 9, 14, 18, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'CNN',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }, {
        visible: false,
        name: 'Yahoo',
        data: [1, 5, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        visible: false,
        name: 'Facebook',
        data: [3, 1, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        visible: false,
        name: 'Facebook',
        data: [7.0, 6, 9, 14, 18, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        visible: false,
        name: 'CNN',
        data: [1, 5, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }]
});


$('#high-column4').highcharts({
    // backgroundColor: "#e56045",
    title: {
        text: null,
    },
    colors: [bgPrimary, bgPrimary, bgWarning,
        bgWarning, bgInfo, bgInfo
    ],
    chart: {
        type: 'spline'
    },
    xAxis: {
        lineWidth: 0,
        tickLength: 6,
        title: {
            text: null
        },
        labels: {
            enabled: true
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr',
            'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },
    legend: {
        enabled: false
    },
    yAxis: {
        title: {
            text: null
        },
    },
    plotOptions: {
        column: {
            colorByPoint: true,
        }
    },
    series: [{
        name: 'Yahoo',
        data: [7.0, 6, 9, 14, 18, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'CNN',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }, {
        visible: false,
        name: 'Yahoo',
        data: [1, 5, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        visible: false,
        name: 'Facebook',
        data: [3, 1, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        visible: false,
        name: 'Facebook',
        data: [7.0, 6, 9, 14, 18, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        visible: false,
        name: 'CNN',
        data: [1, 5, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }]
});





$('#high-column5').highcharts({

    // backgroundColor: "#e56045",
    title: {
        text: null,
    },
    colors: [bgPrimary, bgPrimary, bgWarning,
        bgWarning, bgInfo, bgInfo
    ],
    chart: {
        type: 'pie'
    },
    xAxis: {
        lineWidth: 0,
        tickLength: 6,
        title: {
            text: null
        },
        labels: {
            enabled: true
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr',
            'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ]
    },
    legend: {
        enabled: false
    },
    yAxis: {
        title: {
            text: null
        },
    },
    plotOptions: {
        column: {
            colorByPoint: true,
        }
    },
    series: [{
        name: 'Yahoo',
        data: [7.0, 6, 9, 14, 18, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'CNN',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }, {
        visible: false,
        name: 'Yahoo',
        data: [1, 5, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        visible: false,
        name: 'Facebook',
        data: [3, 1, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        visible: false,
        name: 'Facebook',
        data: [7.0, 6, 9, 14, 18, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        visible: false,
        name: 'CNN',
        data: [1, 5, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }]
});



var circle = Circles.create({
    id: $('.info-circle').attr('id'),
    value: $('.info-circle').attr('value'),
    radius: $('.info-circle').width() / 2,
    width: 14,
    colors: ["#DDD", "#4a89dc"],
    text: function (value) {

        var title = $('.info-circle').attr('title');
        if (title) {
            return '<h2 class="circle-text-value">' + value + '</h2><p>' + title + '</p>'
        }
        else {
            return '<h2 class="circle-text-value mb5">' + value + '</h2>'
        }
    }
});



setTimeout(function () {
    var getWidth = $('.info-circle').width() / 2;
    circle.updateRadius(getWidth);

    setTimeout(function () {
        // Add responsive font sizing functionality
        $('.info-circle').find('.circle-text-value').fitText(0.4);
    }, 50);
}, 300)

