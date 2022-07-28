function chart1(){
 



  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    
  ];

  const data = {
    labels: labels,
    datasets: [{
        barPercentage: 1,
        barThickness: 
        29,
        maxBarThickness: 30,
        minBarLength: 2,
      
      data: [50, 100, 150, 200, 250],
      backgroundColor: [
        'rgba(50, 90, 228, 0.6)',
        'rgba(50, 90, 228, 0.6)',
        'rgba(50, 90, 228, 0.6)',
        'rgba(50, 90, 228, 0.6)',
        'rgba(50, 90, 228, 0.6)',
        
      ],
      
      
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      plugins:{legend:{
        display: false

      },
     
    },
    
      scales: {
        x: {
          ticks:{
            font:{
              size:8,
            }
          },
          grid: {
            display: false
         }},
        y: {
          beginAtZero: true,
          grid: {
            display: false
         }
        }
      }
    },
  };
  
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

function chart2(){
 
const data = {
  labels: [
    'Communication',
    'Fibercut',
    'Environment',
    'Equipment',
    'Pop issue',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [5,25,20,10,10],
    backgroundColor: [
      'orangered',
      'purple',           
          'indigo',          
          '#6CCAB8',
          '#ffc922',
    ],
    hoverOffset: 4
  }]
};
const config = {
  type: 'doughnut',
  data: data,
  options: {
    aspectRatio: 1,
    maintainAspectRatio:false,
   
            elements: {
            arc: {
                borderWidth: 0
            }
        },
          
          
        
      plugins:{    legend: {
      position: "right",
      align: "middle",
      labels:{
        boxWidth:12
    
      }
    }}}
};
const myChart = new Chart(
  document.getElementById('myChart1'),
  config
);
}

function chart3(){
  const labels =  ['< 3h', '3h - 1day', '3h - 1day', '1day - 7days', '> 7days'];
 
   const data = {
     labels: labels,
     datasets: [{
         barPercentage: 1,
         barThickness: 46,
         maxBarThickness: 46,
         minBarLength: 2,
       
       data: [60, 70, 90, 80, 95],
       backgroundColor: [
         'rgba(88, 208, 255, 1)',
         'rgba(191, 91, 255, 1)',
         'rgba(255, 97, 97, 1)',
         'rgba(255, 201, 53, 1)',
         'rgba(132, 121, 255, 1)',
         
       ]
     }]
   };
 
   const config = {
     type: 'bar',
     data: data,
     options: {
       plugins:{legend:{
         display: false
 
       }},
       scales: {
         x: {
           ticks:{
             font:{
               size:12,
             }
           }
           ,
           grid: {
             display: false
          }},
         y: {
           beginAtZero: true,
           grid: {
             display: false
          }
         }
       }
     },
   };
   
   const myChart = new Chart(
     document.getElementsByClassName("myChart3"),
     config
   );
 }
function chart4(){
 const labels =  ['<10%', '10%-20%','20%-30%', '40%-50%', '60%-70%', '80%-90%','80%-90%','> 90%'];

  const data = {
    labels: labels,
    datasets: [{
        barPercentage: 1,
        barThickness: 29,
        maxBarThickness: 29,
        minBarLength: 2,
      
      data: [60,70, 70, 90, 80, 95,95, 10],
      backgroundColor: [
        'rgba(88, 208, 255, 1)',
        'rgba(191, 91, 255, 1)',
        'rgba(255, 97, 97, 1)',
        'rgba(255, 201, 53, 1)',
        'rgba(132, 121, 255, 1)',
        'rgba(16, 193, 114, 1)',
        'rgba(205, 123, 204, 1)',
        'rgba(0, 212, 253, 1)'
        
      ],
      
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      plugins:{legend:{
        display: false

      }},
      scales: {
        x: {
          ticks:{
            font:{
              size:10,
            }
          },
          grid: {
            display: false
         }},
        y: {
          beginAtZero: true,
          grid: {
            display: false
         }
        }
      }
    },
  };
  
  const myChart = new Chart(
    document.getElementsByClassName("myChart4"),
    config
  );
}

function chart5(){
  const labels =  ['Critical', 'Major', 'Minor', 'Warning'];
 
  const data = {
    labels: labels,
    datasets: [{
        
        data: [325,125,125,125],
        backgroundColor: [
          'rgb(54, 162, 235)',
            'rgb(0, 255, 0)',
            '#ffc922',
            'rgb(255, 0, 0)'
            
        ],
       
        
        borderRadius: Number.MAX_VALUE,
        borderSkipped:false,
        barPercentage:0.4,
        categoryPercentage:1

    }]
};
 
   const config = {
    
     type: 'bar',
     data: data,
     
     options: {
      indexAxis: 'y',
       plugins:{legend:{
         display: false
 
       },
       datalabels:{
        anchor: 'end',
        align:'end',
        offset: 10

      },},
      scales: {
        x: {
  
          display:false,
      grid:{
        drawBorder:false,
        display:false
      }
    },
        
          y: {
           
            grid:{
              
        drawBorder:false,
        
      },

           grace:'5%',
              beginAtZero: true
          }
      },
     },
   };
   
   const myChart = new Chart(
     document.getElementById("myChart5"),
     config
   );
 }




 function chart6(){
  ctx = document.getElementById('myChart6');
                  
                  
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(0,0,255,0.2)');
  gradient.addColorStop(1, 'rgba(0,0,255,0)');
  const gradient1 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, 'rgba(112, 41, 99,0.2)');
  gradient1.addColorStop(1, 'rgba(112, 41, 99,0)');
                    myChart = new Chart(ctx, {
                       
                        data: {
                         
                            datasets: [{
                               type:'line',
                               label:'Incident',
                                data:[280,320,300,410,590,550,420,380,420,480,600,500,320,300,420,590,550,520] ,
                               backgroundColor:gradient,
                             borderColor:'blue',
                             pointBackgroundColor:'white',
                             pointBorderColor:'blue',
                             pointBorderWidth:4,
                             fill:[+1]
                               
                            
          
                            },
                            {
              type: 'line',
              label: 'Problem',
              data: [100,90,190,210,360,390,300,230,290,299,250,299,210,200,295,293,300,390],
              backgroundColor:gradient1,
              borderColor:'purple',
              pointBackgroundColor:'white',
                             pointBorderColor:'purple',
                             pointBorderWidth:4,
                             fill:true
          }],
          labels: ['', '0', 'Jan 8', 'Jan 15','Jan 22','Feb 1','Feb 8','Feb 15','Feb 22','Mar 1','Mar 8','Mar 15','Mar 22','Apr 1','Apr 8','Apr 15','24']
                        },
                        options: {
                          
                          maintainAspectRatio:false,
                          plugins:{legend:{
                            display: true,
                            position:'top',
                            align:'end',
                            labels:{
                              usePointStyle:true,
                              boxWidth:2,
                              boxHeight:2,
                              font:{
                                size:15
                              }
                            },
                          
                            
  
            
                          },
                        },
                            scales: {
                              x: {
                                ticks:{
  
                                  font:{
                                    size:10,
                                  }
                                },
                          
                       
                      },
                                y: {
                                  suggestedMin: 0,
                          suggestedMax: 500,
                                    beginAtZero: true
                                }
                            }
                        }
                    });
 }

 function chart7(){
  const labels = [
    ' ',
    '500',
    '1000',
    '1500',
    '2000',
    '2500',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [500, 1000, 1500, 2000, 2500, 3000, 3500,4000,4500,5000,5500,6000],
      
    }]
  };

  const config = {
    type: 'bubble',
    data: data,
    options: {
      
    maintainAspectRatio:false,
      plugins:{legend:{
        display: false

      }},
      scales: {
        x: {
          ticks:{
            callback: function(value, index, values) {
            if(index>0)  return  labels[index];
            },
            font:{
              size:12,
            }
          }
          ,
          },
        y: {
          beginAtZero: true,
          grid: {
            display: false
         }
        }
      }
    },
  };
  const myChart = new Chart(
    document.getElementById('myChart7'),
    config
  );
    
   }
 



chart2();
chart1(); 
chart3();
chart4();
chart5();
chart6();
chart7();