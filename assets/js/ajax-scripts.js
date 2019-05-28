// jQuery(document).ready(function($) {
// 	$('.call-ajax').off('click').on('click',function(){
// 		var data = 'linh123123';

// 		$.ajax({
//             url: "<?php echo admin_url( 'admin-ajax.php')  ?>",
//             type: 'post',
//             data: {
//             	action:'featured_meta_ajax',
//                 id:data
//             },
//             success: function(response) {
//                 //Làm gì đó khi dữ liệu đã được xử lý
//                 //$('.display-post').html(response); // Đổ dữ liệu trả về vào thẻ &lt;div class="display-post"&gt;&lt;/div&gt;
//            		alert(response);
//            },
//            error: function( jqXHR, textStatus, errorThrown ){
//                 //Làm gì đó khi có lỗi xảy ra
//                 console.log( 'The following error occured: ' + textStatus, errorThrown );
//            }
// 	});
// 		}
// });

