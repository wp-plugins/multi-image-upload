jQuery(document).ready(function(){
    
    jQuery('.miu-remove').live( "click", function(e) {
        e.preventDefault();
        var id = jQuery(this).attr("id")
        var btn = id.split("-");
        var img_id = btn[1];
        jQuery("#row-"+img_id ).remove();
    });
    
    
    var formfield;
    var img_id;
    jQuery('.Image_button').live( "click", function(e) {
        e.preventDefault();
        var id = jQuery(this).attr("id")
        var btn = id.split("-");
        img_id = btn[1];
        
        jQuery('html').addClass('Image');
        formfield = jQuery('#img-'+img_id).attr('name');
        tb_show('', 'media-upload.php?type=image&TB_iframe=true');
        return false;
    });
	
    window.original_send_to_editor = window.send_to_editor;
    window.send_to_editor = function(html){
        if (formfield) {
            fileurl = jQuery('img',html).attr('src');

            jQuery('#img-'+img_id).val(fileurl);

            tb_remove();

            jQuery('html').removeClass('Image');

        } else {
            window.original_send_to_editor(html);
        }
    };
});

function addRow(image_url){
    if(typeof(image_url)==='undefined') image_url = "";
    itemsCount+=1;
    var emptyRowTemplate = '<div id=row-'+itemsCount+'> <input style=\'width:70%\' id=img-'+itemsCount+' type=\'text\' name=\'miu_images['+itemsCount+']\' value=\''+image_url+'\' />'
    +'<input type=\'button\' href=\'#\' class=\'Image_button button\' id=\'Image_button-'+itemsCount+'\' value=\'Upload\'>'
    +'<input class="miu-remove button" type=\'button\' value=\'Remove\' id=\'remove-'+itemsCount+'\' /></div>';
    jQuery('#miu_images').append(emptyRowTemplate);
}