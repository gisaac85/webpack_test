
module.exports = function(env) {

    if (env === null)
        env = 'dev';

    return require(`./webpack.config.${env}.js`);
};
