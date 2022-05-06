const faker = require("faker")
const { getRandomInt } = require("./getRandom")

const theme = ["blue sky","red","yellow","green","orange","blue","purple"]
const category = ["Work","Play","Study","Exercise","Social","Self Care"]
 
const exaList = []

for (let gui = 0; gui < 20; gui++){
    const newTable = {
        id : faker.datatype.uuid(),
        name: faker.commerce.product(),
        time: faker.time.time(),
        weigth: faker.datatype.number(100),
        image: faker.internet.url(),
        category: category[getRandomInt(0,theme,length -1)],
        theme: theme[getRandomInt(0,theme.length -1)]

    }
    exaList.push(newTable)
}
module.exports = exaList


