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
			const parts = url.pathname.split('/');
			target = `https://content.guardianapis.com/${parts[2]}/${parts[3]}?show-fields=thumbnail,body&show-tags=contributor&show-elements=image`;
		}

		if (!target) {
			return new Response('Not found', { status: 404 });
		}

		const response = await fetch(`${target}&api-key=${env.API_KEY}`);

		return new Response(response.body, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		});
	},
};
