import { isEmpty } from 'lodash';
import { getSession } from '../sessions/sessions';

export const getApiCartConfig = () => {
	
	const config:any = {
		headers: {
			'X-Headless-CMS': true,
		},
	}
	
	const storedSession = getSession();
	
	if ( !isEmpty( storedSession ) ) {
		config.headers['x-wc-session'] = storedSession;
	}
	
	return config;
}