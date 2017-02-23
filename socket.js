var dgram = require('dgram');

var host = 'xx.xx.xx.xx'; // Socket ip address
var port = 8530;
var macAddress = 'xxxxxxxxx'; // Socket mac address

var on =  '104CF75F5A28A181574AC1B563CD51A78D' //source https://forum.fhem.de/index.php?topic=38112.60
var off = '10F7B4E74B970D96F3CA2BB5D3CD1C19D0' 

var packet = '0142' + macAddress + eval(process.argv[2]);
var buffer = new Buffer(packet, 'hex');

var client = dgram.createSocket('udp4');
client.send(buffer, 0, buffer.length, port, host, function(err, bytes) {
    if (err) throw err;
    console.log('Turned ' + host + ' ' + process.argv[2]);
    client.close();
});
