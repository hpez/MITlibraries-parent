<?php
/**
 * The template used for displaying forms
 *
 * @package MIT_Libraries_Parent
 * @since 1.2.1
 */

global $isRoot;



?>

	<?php if ( in_category( 'has-menu' ) ) { ?>
		<?php get_template_part( 'inc/content', 'secmenu' ); ?>
			<?php } ?>

			<div class="main-content content-main">
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
		</div>

