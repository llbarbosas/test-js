module.exports = {
	Safe
}

function Safe(object){
	return {
		...getValuesOf(object, _is),
		...getValuesOf(object, _as)
	}
}

const _as = {
	asString: (object) => {
		if(_is.isString(object))
			return object

		if(_is.isUndefined(object) || _is.isNull(object))
			return ""

		if(typeof object.toString === 'function')
			return object.toString()

		return ""
	}
}

const _is = {
	isNull: (object) => object === null,
	isUndefined: (object) => object === undefined,
	isSafe: (object) =>  !_is.isNull(object) && !_is.isUndefined(object),
	isString: (object) => typeof object === 'string',
	isEmpty: (object) => (_is.isSafe(object) && !_is.isUndefined(object.length)) ? object.length === 0 : true
}

function getValuesOf(object, test){
	const entries = Object.entries(test);
	const values = {};

	for([key, value] of entries)
		values[key] = value(object)

	return values
}
