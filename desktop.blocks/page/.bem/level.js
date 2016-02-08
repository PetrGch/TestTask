exports.baseLevelPath = require.resolve('../../../.bem/level.js');
exports.getTechs = function() {
    var techs;
    techs = {
        'css': 'bem/lib/techs/v2/css.js'
    };
    return techs;
};
