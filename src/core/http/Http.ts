import fetch from 'node-fetch';
import { from as observableFrom, Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { RepositoryCallError } from '../RepositoryCallError';
import { Configuration, querystring } from '../util/runtime';

/**
 * Http extended by all http services
 */
export abstract class Http {
	/**
 * Constructor
 * @param url Base 
 * @param fetchApi fetch function to be used when performing rest requests.
 */
	protected constructor(protected readonly url: string, protected readonly fetchApi?: any) { }

	public static errorHandling(error: any): Observable<never> {
		if (error instanceof Error) {
			return throwError(error);
		}
		const statusCode: number = parseInt(error.status || error.statusCode || error.response.statusCode || 0);
		const statusMessage: string = (
			error.statusText ||
			error.statusMessage ||
			error.response.statusMessage ||
			'Unknown Error'
		).toString();

		const toString = (body: any): string => {
			if (!body) {
				return '';
			}
			if (typeof body === 'string' || body instanceof String) {
				return body.toString();
			}
			return JSON.stringify(body);
		};

		const getBody = (error: any): Observable<string> => {
			const body = error.response.body;
			if (body) {
				return of(toString(body));
			}
			if (error.text) {
				return observableFrom(error.text()).pipe(
					map(toString),
					catchError(() => of('')),
				);
			}
			return of('');
		};
		return getBody(error).pipe(
			flatMap((body: string) => {
				const formattedError: RepositoryCallError = {
					statusCode,
					statusMessage,
					body,
				};
				return throwError(new Error(JSON.stringify(formattedError)));
			}),
		);
	}

	public config(): Configuration {
		const fetchApi = this.fetchApi || (typeof window !== 'undefined' && window.fetch.bind(window)) || fetch;
		return new Configuration({ basePath: this.url, fetchApi: fetchApi, queryParamsStringify: querystring });
	}
	/**
 * This method knows how to call, convert and handle exception when doing remote http operations.
 * @param remoteCall the remote call
 * @param mapper the mapper from dto to the model object.
 */
	protected call<D, M>(remoteCall: Promise<D>, mapper: (value: D) => M): Observable<M> {
		return observableFrom(
			remoteCall.catch((e) => {
				if (e instanceof Error) {
					return Promise.resolve(e);
				}
				return Promise.reject(e);
			}),
		).pipe(
			map((body) => {
				if (body instanceof Error) {
					throw body;
				}
				return mapper(body);
			}),
			catchError(Http.errorHandling),
		);
	}

}