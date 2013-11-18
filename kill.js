function blockAndDisplay() {
    var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
    var message = $('#distracted');

    if (feed.length == 0) {
        message.remove();
    } else if (message.length == 0) {
        message = $('<h1>')
            .attr('id', 'distracted')
            .text("Don't get distracted by Facebook!")
            .css('font-size', '30px')
            .css('font-family', "'Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
            .css('position', 'relative')
            .css('top', '75px');
        $('<h2>')
        	.attr('id', 'distracted')
        	.text("The following may be more productive...")
        	.css('font-size', '20px')
            .css('font-weight', '300')
            .css('font-family', "'Open Sans', Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
            .css('position', 'relative')
            .css('top', '125px');
        $('<button>')
        	.attr('id', 'distracted')
        	.attr('href', 'http://fb.com/messages')
        	.text("Messages")
        	.css('font-size', '20px')
            .css('font-weight', '300')
            .css('font-family', "'Open Sans', Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
            .css('position', 'relative')
            .css('top', '150px');
        $('[data-location=maincolumn]').append(message);
     }

    feed.children().remove();
    $('.ticker_stream').remove();
    $('.ego_column').remove();
}

function repeatFunction(func, delay) {
    func();
    setTimeout(function() {
        repeatFunction(func, delay);
    }, delay);
}

repeatFunction(blockAndDisplay, 100);
