import { AuthHttp } from "../src/core/http/AuthHttp";
import { AuthModel } from "../src/model/AuthModel";

describe('authHttp', () => {

	it('login', async () => {
		const api = new AuthHttp('http://192.168.1.7:10001');
		const auth: AuthModel = await api.Login("demo","123456").toPromise();
		console.info(auth)
	});
})
