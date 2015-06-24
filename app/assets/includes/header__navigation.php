		<nav class="navigation">
			<ul class="nav nav--stacked navigation__list" id="menu">
<?php
$counter = 0;
foreach ($navigation__urls as $key => $value) {
	$counter++;
	$first = $counter == 1 ? ' navigation__item--first' : null;
	$last = $counter == count($navigation__urls) ? ' navigation__item--last' : null;
?>
				<li class="navigation__item<?php echo $first.$last; ?>"><a href="<?php echo $value; ?>" class="jsHook scrollToElt"><?php echo $navigation__texts[$key]; ?></a></li>
<?php
}
?>
			</ul>
		</nav>
