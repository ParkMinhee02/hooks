import React, { useEffect, useState } from 'react';

export function useFetch(baseUrl, initialType) {
	const [data, setData] = useState(null);
	const fetchUrl = (type) => {
		fetch(baseUrl + '/' + type)
      		.then((response) => response.json())
      		.then((response) => setData(response))
	};
	useEffect(()=> {
		fetchUrl(initialType)
	},[]);
	return {
		data, fetchUrl
	}
	/* console.log(data); */
}