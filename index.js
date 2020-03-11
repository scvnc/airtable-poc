const API_KEY='changeme';
const baseId='appJFiIhwceQkdGg3';

var Airtable = require('airtable');


var base = new Airtable({apiKey: API_KEY})
    .base(baseId);

var orderTable = base('Orders');

// orderTable
//     .select({
//         maxRecords: 3,
//         view: "Simple"
//     })
//     .eachPage((records, fetchNextPage) => {

//         for (var record of records) {
//             console.log(record.get('ID'));
//         }

//     });

function makeNewOrder(id, serviceLevel) {

    orderTable.create([{
        "fields": {
            "ID": id,
            "Service Level": serviceLevel,
            "Confirmed By Runner": false,
            "Attempt Number": 1,
            "SOS Status": "New"
        }
    }], function(err, records) {
        if (err != null) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    })

}


makeNewOrder(
    Math.floor((Math.random() * 1000)).toString(), "Expedite");



