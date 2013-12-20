;(function ( $, window, document, undefined ) {

    var pluginName = "colorbox",
        defaults = {
            
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            this.$element.addClass('cbox-lightbox')
        }
    };

    var privateMethods = {
        showLightbox: function(){
            var $this = $(this),
                $instance = $this.data("plugin_" + pluginName),
                href = $this.attr('href'),
                settings = {'href': href},
                currentStates = ssm.getCurrentStates(),
                noCurrentStates = currentStates.length,
                showColorbox = true;

            for (var i = 0; i < noCurrentStates; i++) {
                if(currentStates[i].colorbox === false){
                    showColorbox = false;
                    break;
                }
            };

            if(showColorbox){
                settings = $.extend({}, settings, $instance.options);

                if(typeof settings.href === "function"){
                    settings.href = $.proxy(settings.href, $instance.element);
                }

                $.colorbox(settings);

                return false;
            }

            return true;
        }
    }

    //Store original colorbox reference
    $.fn['colorboxReference'] = $.fn['colorbox'];

    //Attach event to body
    $('body').on('click','.cbox-lightbox', privateMethods.showLightbox);

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
