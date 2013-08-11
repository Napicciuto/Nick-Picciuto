/*  
    http://www.dailycoding.com/ 
*/

$(function(){
	$("#resume").imageLens();
});

(function ($) {
    $.fn.imageLens = function (options) {

        var defaults = {
            lensSize: 100,
            borderSize: 2,
            borderColor: "#888"
        };

        var options = $.extend(defaults, options);
        var lensStyle = "top: 10px; left: 3px; background-position: 10px -20px;width: 440px;height: " + String(options.lensSize)
            + "px;float: left;display: none; border-radius: " + String(options.lensSize / 2 + options.borderSize)
            + "px;border: " + String(options.borderSize) + "px solid " + options.borderColor 
            + ";background-repeat: no-repeat;position: absolute;";

        return this.each(function () {


            // Creating lens
            var target = $("<div style='" + lensStyle + "' class='lens shadow'>&nbsp;</div>").appendTo($(this).parent());

            // Calculating actual size of image
            var imageSrc = options.imageSrc ? options.imageSrc : $(this).attr("src");

            
            target.css({ backgroundImage: "url('" + imageSrc + "')" });

        });
    };
})(jQuery);