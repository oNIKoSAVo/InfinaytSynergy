const fs = require('fs');

// Количество записей
const numEntries = 1000000;

let data = [];

for (let i = 1; i <= numEntries; i++) {
  let entry = {
    id: i,
    name: `User${i}`,
    position: `Position${i}`,
    department: `Department${i}`,
    company: `Company${i}`,
    img: "1.jpeg"
  };

  data.push(entry);
}

// Записываем данные в файл data.json
fs.writeFileSync('./src/data.json', JSON.stringify(data));

console.log('Data generation complete.');