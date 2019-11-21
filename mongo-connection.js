const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:32768/family-budget', { useUnifiedTopology: true, useNewUrlParser:true})
}

main()

















































