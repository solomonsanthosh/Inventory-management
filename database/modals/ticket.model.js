

module.exports = (sequelize,DataTypes) =>{
    const Ticket = sequelize.define("ticket",{
        ticket_id: {
            type:DataTypes.STRING,
            primaryKey:true,
            allowNull:false
        },
        product_part_no:{
            type:DataTypes.STRING,
            allowNull:false
        },
        product_quantity:{
            type:DataTypes.N
        }


    })
    return Ticket;
}