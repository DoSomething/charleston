var $ = jQuery;

/**
 * Response quotes.
 */
var $responses = $('#responses');
if($responses.length) {

    var $quotes = $responses.find('li');

    // Shuffle the array of quotes
    $quotes.sort( function(){ return ( Math.round( Math.random() ) - 0.5 ) } )

    var quote;
    var i = 0;

    $responses.show();

    function showQuote() {
        quote = $quotes[i];
        $(quote).fadeIn(800);

        if(i < ($quotes.length - 1)) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(hideQuote, 5000);
    }

    function hideQuote() {
        if(quote) {
            $(quote).fadeOut(800);
        }

        setTimeout(showQuote, 1000);
    }


    showQuote();
}

