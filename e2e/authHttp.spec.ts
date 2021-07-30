import { AuthHttp } from "../src/core/http/AuthHttp";
import { AuthModel } from "../src/model/AuthModel";
import {UserModel} from "../src/model";

describe('authHttp', () => {
	it('login', async () => {
		const api = new AuthHttp('http://192.168.1.7:10001');
		const auth: AuthModel = await api.Login("demo","123456").toPromise();
		console.info(auth)
	});
	it('gitCode', async () => {
		const api = new AuthHttp('http://192.168.1.7:10001');
		const auth: AuthModel = await api.githubCode("demo23").toPromise();
		console.info(auth)
	});
	it('register', async () => {
		const api = new AuthHttp('http://192.168.1.7:10001');
		const auth: AuthModel = await api.register("demo23","123456").toPromise();
		console.info(auth)
	});
	it('userInfo', async () => {
		const api = new AuthHttp('http://192.168.1.7:10001');
		const user: UserModel = await api.getUserInfo( 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiOGFiMzI0MTMtNTE0Mi00YzllLWE0MWUtNTBjZGRlNWE2ODk4IiwiSUQiOjMsIlVzZXJuYW1lIjoiZGVtbyIsIk5pY2tOYW1lIjoiZGVtb3MiLCJBdXRob3JpdHlJZCI6Ijg4OCIsIkJ1ZmZlclRpbWUiOjg2NDAwLCJleHAiOjE2MjgyMzgyNTQsImlzcyI6ImJpdCIsIm5iZiI6MTYyNzYzMjQ1NH0.I9hqnWwX0UKgx5OdI0_FX6lVF7_FBxf7-D1l3Cf7eKU',
	).toPromise();
		console.info(user)
	});
})
