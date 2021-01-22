
<!doctype html>
<html>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>

<div class="top5bySchool">
    <canvas id="proportions_chart"> </canvas>
</div>

<div class="top5bySchool" id="dropdown-wrapper">
    <div class="dropdown-child">
    <select class="top5bySchool" id="school" name= "school" onchange="YEAR_VAL=this.value; update_chart(YEAR_VAL, ETHNICITY_VAL);">
    <option value='1'>Percent</option>
    <option value='2'>Amount</option>
    </select>
    </div>
</div>

</html>


/*fetch ("./Users/mariabecerra/Desktop/db_thestack/the-stack/datasets/professor-donations/top5data.jscsrc")
    .then(fucntion(resp)){
        return resp;
    })
    .then(function(data)){
        console.log(data);
    });

*/



/*<!doctype html>
<html>

<head>
	<title>Bar Chart</title>
	<script src="../../../dist/chart.min.js"></script>
	<script src="../../utils.js"></script>
	<style>
	canvas {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	</style>
</head>

<body>
	<div id="container" style="width: 75%;">
		<canvas id="canvas"></canvas>
	</div>
	<button id="randomizeData">Randomize Data</button>
	<button id="addDataset">Add Dataset</button>
	<button id="removeDataset">Remove Dataset</button>
	<button id="addData">Add Data</button>
	<button id="removeData">Remove Data</button>
	<script>


</body>
*/