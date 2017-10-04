const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: 'Eloay0L09HL7njIjgbo5./QlJLSxUHRAYEgZeUGWGLq.tu7wI4usbPxXtSpWfPQiIZUZiW63y2By2qKnN+UnFEw=',
	certificate: '6d248800ebf3292ae47a7e7d659da97b69affc0530d542b73d2299c1046f9aa2',
}
// let client =  new LineConnect(auth);
let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
