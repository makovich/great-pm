jQuery(function($) {
  'use strict';

  // Dependencies as globals
  //
  // WebFont: https://github.com/typekit/webfontloader

  var PAGE_FONTS = ['Dosis:200', 'Smythe', 'Ubuntu'],

    page = {
      init: function() {
        this.cacheDom();
        this.bindDom();
        this.resizeHeader();
        //this.resizeKnight();
        this.positionateFooter();
        this.addHeaderTooltip();
        this.addLinksToQuotes();
        this.shuffleQuotes();
        this.displayQuoteByHash();
        this.makePageVisible();
      },
      cacheDom: function() {
        this.$body = $(document.body);
        this.$loading = $('div.loading');

        this.$header = $('body > header');
        this.$headerText = $('h1');
        this.$headerPmAbbrev = this.$headerText.find('abbr');
        this.$headerRibbon = $('.ribbon');
        this.$hrefArea = $('map area');
        this.$hrefArea.attr('data-default-coords', this.$hrefArea.attr('coords'));

        this.$footer = $('body > footer');
        this.$knight = $('.knight');

        this.$article = $('body > div.article');
        this.$quotes = $('ul.quotes > li > blockquote');
        this.$quotesContainers = $('ul.quotes > li');
        this.$quotesRoots = $('ul.quotes');

        this.$showAllButton = $('header a.show-all');
      },
      bindDom: function() {
        $(window).on("resize", this.resizeHeader.bind(this));
        //$(window).on("resize", this.resizeKnight.bind(this));
        $(window).on("hashchange", this.displayQuoteByHash.bind(this));
        $(window).on("resize", this.positionateFooter.bind(this));
      },
      positionateFooter: function() {
        var allSectionsHeight = this.$header.outerHeight(true) +  /*  XX px HEADER  */
          this.$article.outerHeight(true) + /*  YY px QUOTES  */
          80 +                              /*  80 px MARGIN  */
          this.$footer.outerHeight(true);   /*  ZZ px FOOTER  */

        if (allSectionsHeight < $(window).height()) {
          this.$footer.css({
            position: 'fixed',
          });
        } else {
          this.$footer.css({
            position: '',
          });
        }
      },
      addHeaderTooltip: function() {
        var showTooltip = function(el) {
          var title = el.attr('title');

          el.data('isDisplaying', true);
          el.data('tipText', title).removeAttr('title');
          $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
        },
          hideTooltip = function(el) {
            el.attr('title', el.data('tipText'));
            $('.tooltip').remove();
            el.data('isDisplaying', false);
          };

        this.$headerPmAbbrev
          .on('click tap', function() {
            var el = $(this);

            if (el.data('isDisplaying')) return;

            showTooltip(el);
            setTimeout(function() {
              hideTooltip(el);
            }, 3000);
          })
          .hover(
            function() { showTooltip($(this)); },
            function() { hideTooltip($(this)); }
          )
          .mousemove(function(e) {
            var mouseX = e.pageX + 20;
            var mouseY = e.pageY + 10;
            $('.tooltip').css({ top: mouseY, left: mouseX }
            );
          });
      },
      resizeHeader: function() {
        // This is an illustration of Magic numbers bad practice
        // I've forgot where these numbers came from :-(
        this.$headerText.css('font-size', Math.max(Math.min(this.$headerText.width() / (0.9 * 10), parseFloat(80)), parseFloat(34)));

        var oldHeight = this.$headerRibbon.height(),
          newHeight = Math.round(parseFloat(this.$headerText.css('font-size')) * 0.90 / 10 * 20),
          newWidth = Math.round(this.$headerRibbon.width() * newHeight / oldHeight),
          ratio = newHeight / 150 /* default image height */;

        if (oldHeight === newHeight)
          return;

        this.$headerRibbon.height(newHeight + 'px');
        this.$headerRibbon.width(newWidth + 'px');

        var newHrefCoords = this.$hrefArea.attr('data-default-coords').split(',').map(function(val) {
          return Math.round(val * ratio);
        });

        this.$hrefArea.attr('coords', newHrefCoords.toString());
      },
      resizeKnight: function() {
        var newSideSize = Math.round(parseFloat(this.$headerText.css('font-size')) * 1 / 10) * 20;
        this.$knight
          .height(newSideSize + 'px')
          .width(newSideSize + 'px');
      },
      displayQuoteByHash: function() {
        var foundQuotes = $(location.hash);
        if (foundQuotes.length == 1) {
          this.$quotesContainers.hide();
          foundQuotes.parent().show().addClass('anchored');
          this.$showAllButton.show();
        }
        else {
          location.hash = '';
          this.$quotesContainers.removeClass('anchored').show();
          this.$showAllButton.hide();
        }
        this.resizeHeader();
        this.positionateFooter();
      },
      shuffleQuotes: function() {
        var ul = this.$quotesRoots[0];

        for (var i = ul.children.length; i >= 0; i--) {
          ul.appendChild(ul.children[Math.random() * i | 0]);
        }
      },
      addLinksToQuotes: function() {
        this.$quotes.each(function() {
          $(this).prepend('<a class="lnk" href="#' + $(this).attr('id') + '">#</a>');
        });
      },
      makePageVisible: function() {
        this.$loading.remove();
        this.$body.css('overflow', '');
        this.resizeHeader();
      },
      fail: function() {
        alert('Can\'t load fonts. Try to update your browser.');
      },
      runApp: function(allFontsLoaded) {
        if (allFontsLoaded) {
          this.init();
        } else {
          this.fail();
        }
      }
    },

    webFontConfig = {
      timeout: 3000,
      isAllFontsLoaded: true,
      active: function() {
        var that = this;
        $.runApp(that.isAllFontsLoaded);
      },
      fontinactive: function(ff) {
        var that = this;
        that.isAllFontsLoaded = false;
        console.log("Can't load font: " + ff);
      }
    },

    customFontProvider = {
      custom: { families: PAGE_FONTS }
    },

    googleFontProvider = {
      google: { families: PAGE_FONTS }
    };

  $.extend({ runApp: page.runApp.bind(page) });
  $.extend(webFontConfig, window.debug ? customFontProvider : googleFontProvider);

  WebFont.load(webFontConfig); // global
});
