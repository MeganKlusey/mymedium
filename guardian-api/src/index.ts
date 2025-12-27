export default {
	async fetch(request: Request, env: { API_KEY: string }) {
		const url = new URL(request.url);

		// CORS preflight
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET',
				},
			});
		}

		let target: string | null = null;

		if (url.pathname === '/data') {
			target = 'https://content.guardianapis.com/search?show-fields=thumbnail,body&show-tags=contributor';
		} else if (url.pathname === '/creators') {
			target = 'https://content.guardianapis.com/search?show-tags=contributor';
		} else if (url.pathname === '/topics') {
			target = 'https://content.guardianapis.com/sections';
		} else if (url.pathname.startsWith('/article/')) {
			const raw = request.url;
			const marker = '/article/';
			const after = raw.slice(raw.indexOf(marker) + marker.length);
			const firstSlash = after.indexOf('/');

			const id = after.slice(0, firstSlash);
			const wildcard = decodeURIComponent(after.slice(firstSlash + 1));

			target =
				`https://content.guardianapis.com/${id}/${wildcard}` + `?show-fields=thumbnail,body&show-tags=contributor&show-elements=image`;
		}

		if (!target) {
			return new Response('Not found', { status: 404 });
		}

		const upstream = new URL(target);
		upstream.searchParams.set('api-key', env.API_KEY);
		const response = await fetch(upstream.toString());

		const headers = new Headers(response.headers);
		headers.set('Access-Control-Allow-Origin', '*');

		return new Response(response.body, {
			status: response.status,
			headers,
		});
	},
};
