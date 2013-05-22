(function($) {
    $.fn.threedPages = function (options) {

    	var defaults = {
    		pageSelector : '.page',
    		pagesPerRow : 3
    	};

    	var that = this,
            options = $.extend(defaults, options),
            $window = $(window),
            prevHash = '',
            $close;

        
    	return this.each(function() {
    		var $this = $(this),
            children;

            that._updatePageTranslations = function() {
                
                $.each(children, function(i,page) {
                    var $page = $(page).removeClass('inactive active'),
                    x = i%options.pagesPerRow,
                    y = Math.floor(i/options.pagesPerRow),
                    offsetLeft = (x-(Math.min(children.length-1,options.pagesPerRow-1)/2))*($page.width()/options.pagesPerRow);
                    offsetTop =  (y-1)*($page.height()/options.pagesPerRow)
                    $page.css({'-webkit-transform':'translate3d('+offsetLeft+'px,'+offsetTop+'px, 0px) scale(0.2)','position':'absolute'});
                });
            };

            that._attachEvents = function() {
                $.each(children, function(i,page) {
                    var $page = $(page);
                    $page.click(function() {
                        if(!$page.hasClass('active')) {
                            children.addClass('inactive');
                            $page.css({'-webkit-transform':'translate3d(0px,0px,1px) scale(1) rotateX(-360deg)'}).removeClass('inactive').addClass('active')
                                .prepend('<button class="close">Back</button>');
                            $close = $page.find('button.close');
                            $close.click(function(){
                                $window[0].history.back();
                            });
                            window.location.hash = prevHash = "#/" + $page.attr('id');
                            that._place(window.location.hash);
                        }
                        
                    });
                });
            };

            that._place = function(_hash) {
                if(_hash) {
                    _hash = _hash.replace(/\//g,'');
                } else if($close) {
                    $close.remove();    
                }

                children = that._getChildrenFromHash(_hash);
                that._updatePageTranslations();
                that._attachEvents();
            };

            that._getChildrenFromHash = function(_hash) {
                if(!_hash) {
                    return $this.children(options.pageSelector);
                }
                return $this.find(_hash).children(options.pageSelector);
            }

            window.addEventListener("hashchange", function () {
                if (window.location.hash !== prevHash) {
                    that._place( window.location.hash === '' ? undefined : window.location.hash );
                }
            }, false);

            that._place();
    		
    	});
    };

 })(jQuery);