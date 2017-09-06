exports.show = function(req, res) {
    res.render('index', {
        title: 'Multimedia Application',
        callToAction: 'An easy way to upload and manipulate files with Node.js'
    });
};
