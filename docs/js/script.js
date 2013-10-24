(function(){
    // This is simply an example of SSM, you wouldn't use it for changing a background color
    // but instead would use Media Queries for this. SSM is meant for javascript states where
    // your doing something you couldn't otherwise do with Media Queries.

    ssm.addState({
        id: 'mobile',
        maxWidth: 767,
        colorbox: false
    });

    ssm.addState({
        id: 'tablet',
        minWidth: 768,
        maxWidth: 1023,
        colorbox: true
    });

    ssm.addState({
        id: 'desktop',
        minWidth: 1024,
        colorbox: true
    });

    ssm.ready();

    $('.the_lightbox').colorbox();
}());