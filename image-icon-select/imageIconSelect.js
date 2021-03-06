/**
 * Image Iocn Select
 *
 * It provides image and icon or ( both at one time ) support for Single
 * and Multi select HTML tags select options much more user-friendly.
 * Image Icon Select is an extension of Chosen.
 *
 *
 *
 * @author      Abu Sufiyan <abusufiyan@programmer.net>
 * @copyright   2019 Abu Sufiyan http://www.abusufiyan.com
 * @license     MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 * @Fullsource  https://github.com/yourabusufiyan/image-icon-select
 * @package     yourabusufiyan/image-icon-select
 */

;(function(iis,w,d){
  "use strict";
  iis.fn.ImageIconSelect = function(options) {
        return this.each(function() {
            var g = $(this), abuC,
               abuIsM = g.attr('multiple'),
               abuImg  = {},
               abuIcon = {};

            // create a chosen first
            g.chosen(options);
            abuC = g.next('.chosen-container').addClass('abu-images image-icon-select');

            // Retrieve img-src from data attribute.
            g.find('option').filter(function(){
                return $(this).text();
            }).each(function(i) {
                abuImg[i] = $(this).data('img')  || '';
                abuIcon[i] = $(this).data('icon') || '';
            });


            // Creating a function to output css
            function abuImage(s) {
                return { 'background-image' : ( s ? 'url(' + s + ')' : 'none' ) };
            }
            function abubgImg(s){
              return '';
            }

            // putting img-src on target
            abuC.on('click.chosen, keyup.chosen, mousedown.chosen, change.chosen, selected.chosen', function(){
                var lis = function(v, c) {
                  return '<span class="'+c+'">'+v+'</span>';
                };
                $('.chosen-results li', abuC ).each(function() {
                    var l = $(this),
                    lt = l.text(),
                    limg = abubgImg(abuImg[l.attr('data-option-array-index')]),
                    li = function(){
                      if(abuIcon[l.attr('data-option-array-index')] != undefined ){
                        return abuIcon[l.attr('data-option-array-index')] ;//'<i class="abu-chosen-icon '++'"></i>';
                      } else {
                        return '';
                      }
                    };
                    l.text('');

                    // setting up backgroudn image
                    $(this).css(abuImage( abuImg[$(this).attr('data-option-array-index')] ) );

                    // Putting Div Element to list
                    if ( ! l.find('div').length ) {
                       var issResults = function(){
                         if( !l.parents('.image-icon-select').hasClass('chosen-rtl') ) {
                           return lis(li(), 'iis-icon')+lis(lt, 'iis-value');
                         } else {
                           return lis(lt, 'iis-value')+lis(li(), 'iis-icon');
                         }
                       }
                       $('<span/>', {
                            class: 'chosen-content ',
                            html: issResults()
                       }).appendTo(this);
                    }

                    if( l.css('background-image') == 'none' ) {
                      $(this).css('padding', '0','padding-left', '5px');
                    }

                 });

                // this for multiple selects
                if( abuIsM ) {
                  $('.chosen-choices li', abuC).each(function(index) {
                    var abuMe = $(this),
                        abuI = abuMe.children('a').attr('data-option-array-index');

                      // image display
                      abuMe.children('span').css(abuImage(abuImg[abuI]));
                      if( abuMe.children('span').css('background-image') == 'none' ) {
                        abuMe.children('span').css('padding', '0px');
                      }

                      // icon display
                      if ( ! abuMe.find('.iis-icon').length ) {
                        if( abuIcon[abuI] != '' )
                        if( ! abuMe.parents('.image-icon-select').hasClass('chosen-rtl') ) {
                          abuMe.children('span').prepend( lis(abuIcon[abuI], 'iis-icon') );
                        } else {
                          abuMe.children('span').append( lis(abuIcon[abuI], 'iis-icon') );
                        }
                      }

                  });
                }
            }).trigger('click');

            // Put on Selected options for single select
            g.on('change', function() {
              var lim = $('option:selected', g).data('img') || '',
                  lt = $('.chosen-single span', abuC),
                  li = function(){
                    var lic = $('option:selected', g).data('icon') || '';
                    if( lic ){
                      return '<span class="iis-icon">'+lic+'</span>';
                    } else {
                      return '';
                    }
                  };

              lt.css(abuImage(lim));
              if( lt.css('background-image') == 'none' ) {
                lt.css('padding', '0px');
              }
              // for Single select
              if( li() != '' && ! lt.find('.iis-icon').length ) {
                if( g.next('.image-icon-select').hasClass('chosen-rtl') ) {
                  return lt.prepend( li() ) ;
                } else {
                  return lt.prepend( li() );
                }
              }
            }).trigger('change');

        });
  };
}(jQuery, window, document));
