const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost/family-budget', { useUnifiedTopology: true, useNewUrlParser:true})
}

main()

















































