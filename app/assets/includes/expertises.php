	<section class="expertises" id="expertises">
		<div class="ctnt">
			<h2 class="title title--2"><?php echo $expertises__title; ?></h2>
			<ul class="expertises__list">
<?php
foreach ($expertises__text as $key => $value) {
?>
				<li class="expertises__range expertises__range--<?php echo $key; ?>">
					<p class="expertises__title"><?php echo $value['title']; ?></p>
					<ul class="expertises__details">
<?php
	foreach ($value['elts'] as $sKey => $sValue) {
?>
						<li class="expertises__item"><span class="text"><?php echo $sValue; ?></span></li>
<?php
	}
?>
					</ul>
				</li>
<?php
}
?>
			</ul>
		</div>
	</section>