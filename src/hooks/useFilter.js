import React, {useMemo} from 'react';

function useFilter({products = [], priceLimit = 0, category = ""}) {

	return useMemo(() => {
		if (priceLimit <= 0 && category !== "") {
			return products.filter(el => el.category === category)
		} else if (priceLimit > 0 && category === "") {
			return products.filter(el => el.price <= priceLimit)
		} else if (priceLimit <= 0 && category === "") {
			return products
		} else {
			return products.filter(el => el.price <= priceLimit && el.category === category)
		}
	}, [products, priceLimit, category]);

}

export default useFilter;
