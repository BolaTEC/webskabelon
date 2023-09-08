<script type="text/javascript">
<!-- Start
var now = new Date();
var event = new Date("Sep 20 2021 15:30:00");
var seconds = (now - event) / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var days = hours / 24;

ID=window.setTimeout("update();", 1000);

function update()
{
now = new Date();
seconds = (event - now) / 1000;
seconds = Math.round(seconds);
minutes = seconds / 60;
minutes = Math.round(minutes);
hours = minutes / 60;
hours = Math.round(hours);
days = hours / 24;
days = Math.round(days);
document.getElementById('days').value = days;
document.getElementById('hours').value = hours;
document.getElementById('minutes').value = minutes;
document.getElementById('seconds').value = seconds;
ID=window.setTimeout("update();",1000);
}

</script>