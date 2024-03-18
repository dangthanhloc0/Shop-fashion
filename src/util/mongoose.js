module.exports={
    listObject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject());
    },
   Object:function(mongoose){
    return mongoose?mongoose.toObject():mongoose;
}
};
