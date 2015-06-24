	<section class="agencies" id="agencies">
		<div class="ctnt ctnt--small">
			<h2 class="title title--2 accessibility"><?php echo $agencies__title; ?></h2>
			<ul class="block-list agencies__list">
<?php
foreach ($agencies__text as $key => $value) {
?>
				<li class="agencies__item">
					<?php echo $value['subject']; ?>

					<img src="<?php echo $value['url']; ?>" alt="<?php echo $value['alt']; ?>" class="agencies__img" />
				</li>
<?php
}
?>
			</ul>
		</div>
	</section>