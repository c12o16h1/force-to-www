if(Meteor.isServer){
    WebApp.connectHandlers.use(function(req, res, next) {

        // Check if request is for non-www address
        if (req.headers && req.headers.host.slice(0, 4) !== 'www.') {

            // Add www. from host
            var newHost = 'www.' + req.headers.host

            // Redirect to www. version URL
            res.writeHead(301, {
                // Hard-coded protocol because req.protocol not available
                Location: 'http://' + newHost + req.originalUrl
            });
            res.end();

        } else {
            // Continue with the application stack
            next();
        }
    });
}