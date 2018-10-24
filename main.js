google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

var mas = [['g','Хищник','Жертва']];
var predatorCount = 0;
var victimCount = 0;
var rV = 100/1000;  //рождаемость жертвы
var dV = 300/100000; //Смертность жертвы
var dP = 70/1000; // смертность хищника
var kP = 80/1000000; //коэф.хищника
var g = 500; //поколение
var victimStart = 1000; // нач. кол-во жертв
var predatorStart = 100; // нач. кол-во хищников

mas.push([0,predatorStart,victimStart]);
	function calcCount(){
//mas.push([0,predatorStart,victimStart]);
		for(let i = 1; i <= g; i++){

			predatorCount = Math.round(predatorStart + kP * predatorStart * victimStart - dP * predatorStart);
        	victimCount = Math.round(victimStart + rV * victimStart - dV * victimStart * predatorStart);
        	predatorStart = predatorCount;
        	victimStart = victimCount;
        	mas.push([i,predatorStart,victimStart]);
        	
		}

		
	}
	console.log(mas);
	calcCount();

      function drawChart() {
        var data = google.visualization.arrayToDataTable(mas);

        var options = {
          title: 'Модель Хищник-Жертва',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

         chart.draw(data, options);
      }