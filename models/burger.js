module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        // Giving the Author model a name of type STRING
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.STRING,
            defaultValue: false
        }
    });

    return Burger;
};
