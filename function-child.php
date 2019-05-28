<?php
if ( !function_exists( 'chld_thm_cfg_parent_css_linh' ) ):
    function chld_thm_cfg_parent_css_linh() {
        wp_enqueue_script( 'ajax-scripts', get_theme_file_uri('/assets/js/ajax-scripts.js'),array(), 'v2.0');
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css_linh', 10 );


//ajax
 add_action('wp_ajax_featured_meta_ajax', 'featured_meta_ajax_function');
function featured_meta_ajax_function()
{
	$post_data = $post_id = $_POST['id'];
	echo $post_id;

	die();
}