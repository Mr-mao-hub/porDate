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

var Colors = [bgPrimary, bgInfo, bgWarning, bgAlert, bgDanger, bgSystem, bgSuccess];

c3.generate({
            bindto: '#bar-chart',
            color: {
              pattern: Colors,
            },
            padding: {
				left: 30,
              right: 15,
              top: 0,
              bottom: 0,
           },
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                type: 'bar'
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            }
        });
		
		
		
		
		// c3.generate({
		//             bindto: '#line-chart',
		//             color: {
		//               pattern: Colors,
		//             },
		//             padding: {
		// 				left: 30,
		//               right: 15,
		//               top: 0,
		//               bottom: 0,
		//            },
		//             data: {
		//                 columns: [
		//                     ['data1', 30, 200, 100, 400, 150, 250],
		//                     ['data2', 130, 100, 140, 200, 150, 50]
		//                 ],
		//                 type: 'spline'
		//             },
		//             bar: {
		//                 width: {
		//                     ratio: 0.5 // this makes bar width 50% of length between ticks
		//                 }
		//                 // or
		//                 //width: 100 // this makes bar width 100px
		//             }
		//         });
		
		
		
		c3.generate({
		            bindto: '#line-chart',
		            color: {
		              pattern: [bgSuccess],
		              // threshold: {
		              //    // unit: 'value', // percentage is default
		              //    // max: 200, // 100 is default
		              //    values: [30, 60, 90, 100]
		              // }
		            },
		            data: {
		                columns: [
		                    ['data', 91.4]
		                ],
		                type: 'gauge',
		                onclick: function (d, i) { console.log("onclick", d, i); },
		                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
		            },
		            gauge: {
		             // label: {
		             //     format: function(value, ratio) {
		             //         return value;
		             //     },
		             //     show: false // to turn off the min/max labels.
		             // },
		             // min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
		             // max: 100, // 100 is default
		             // units: ' %',
		             // width: 39 // for adjusting arc thickness
		            },
		            size: {
		                height: 180
		            }
		        });
		