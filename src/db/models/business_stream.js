module.exports = (sequelize, DataTypes) => {
    var businessStream = sequelize.define('businessStream', {
        businessStreamName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                businessStream.belongsTo(models.industry, {
                    allowNull: false
                })
            }
        }
    });

    return businessStream;

};
