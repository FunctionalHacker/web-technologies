<html>
<body>
<script>
var toggle = 0;
function test(){
	if (toggle == 0) {
		document.getElementById("test").style.color = 'red';
		toggle = 1;
	}
	else {
		document.getElementById("test").style.color = 'blue';
		toggle = 0;
	}
}
</script>
<p>hehe</p>
</html>
</body>

<?php
$string = "I'll \"walk\" the <b>dog</b> now";  // notice \-sign before double quotes!

$a = htmlentities($string);
$b = html_entity_decode($string);
$c = htmlspecialchars($string);
$d = strip_tags($string);

echo $a.", ".$b.", ".$c.", ".$d;

$string = "<p onmouseover='test()' id='test'>Testing <br> strip_tags</p>";
$a = strip_tags($string, '<p>');
echo $a;
?>
