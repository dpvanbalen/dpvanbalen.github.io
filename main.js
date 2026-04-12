(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		? _Json_wrap(
			/**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $ianmackenzie$elm_units$Quantity$Quantity = function (a) {
	return {$: 'Quantity', a: a};
};
var $ianmackenzie$elm_units$Quantity$zero = $ianmackenzie$elm_units$Quantity$Quantity(0);
var $MartinSStewart$elm_audio$Audio$audioDefaultConfig = {loop: $elm$core$Maybe$Nothing, playbackRate: 1, startAt: $ianmackenzie$elm_units$Quantity$zero};
var $MartinSStewart$elm_audio$Audio$BasicAudio = function (a) {
	return {$: 'BasicAudio', a: a};
};
var $MartinSStewart$elm_audio$Audio$audioWithConfig = F3(
	function (audioSettings, source, startTime) {
		return $MartinSStewart$elm_audio$Audio$BasicAudio(
			{settings: audioSettings, source: source, startTime: startTime});
	});
var $MartinSStewart$elm_audio$Audio$audio = F2(
	function (source, startTime) {
		return A3($MartinSStewart$elm_audio$Audio$audioWithConfig, $MartinSStewart$elm_audio$Audio$audioDefaultConfig, source, startTime);
	});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $MartinSStewart$elm_audio$Audio$Group = function (a) {
	return {$: 'Group', a: a};
};
var $MartinSStewart$elm_audio$Audio$group = function (audios) {
	return $MartinSStewart$elm_audio$Audio$Group(audios);
};
var $MartinSStewart$elm_audio$Audio$silence = $MartinSStewart$elm_audio$Audio$group(_List_Nil);
var $author$project$Main$audio = F2(
	function (_v0, model) {
		var maybeplay = function (x) {
			if ((x.a.$ === 'Just') && (x.b.$ === 'Just')) {
				var muziek = x.a.a;
				var tijd = x.b.a;
				return A2($MartinSStewart$elm_audio$Audio$audio, muziek, tijd);
			} else {
				return $MartinSStewart$elm_audio$Audio$silence;
			}
		};
		if (model.$ === 'NotLoggedIn') {
			var m = model.a;
			return maybeplay(m.poirot);
		} else {
			var m = model.a;
			return maybeplay(m.poirot);
		}
	});
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Main$audioPortFromJS = _Platform_incomingPort('audioPortFromJS', $elm$json$Json$Decode$value);
var $author$project$Main$audioPortToJS = _Platform_outgoingPort('audioPortToJS', $elm$core$Basics$identity);
var $MartinSStewart$elm_audio$Audio$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioData = function (a) {
	return {$: 'AudioData', a: a};
};
var $MartinSStewart$elm_audio$Audio$audioData = function (_v0) {
	var model = _v0.a;
	return $MartinSStewart$elm_audio$Audio$AudioData(
		{sourceData: model.sourceData});
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $MartinSStewart$elm_audio$Audio$getUserModel = function (_v0) {
	var model = _v0.a;
	return model.userModel;
};
var $MartinSStewart$elm_audio$Audio$Model = function (a) {
	return {$: 'Model', a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $MartinSStewart$elm_audio$Audio$audioSourceBufferId = function (_v0) {
	var audioSource = _v0.a;
	return audioSource.bufferId;
};
var $ianmackenzie$elm_units$Duration$inSeconds = function (_v0) {
	var numSeconds = _v0.a;
	return numSeconds;
};
var $ianmackenzie$elm_units$Duration$inMilliseconds = function (duration) {
	return $ianmackenzie$elm_units$Duration$inSeconds(duration) * 1000;
};
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$core$Basics$round = _Basics_round;
var $ianmackenzie$elm_units$Duration$addTo = F2(
	function (time, duration) {
		return $elm$time$Time$millisToPosix(
			$elm$time$Time$posixToMillis(time) + $elm$core$Basics$round(
				$ianmackenzie$elm_units$Duration$inMilliseconds(duration)));
	});
var $MartinSStewart$elm_audio$Audio$audioStartTime = function (audio_) {
	return A2($ianmackenzie$elm_units$Duration$addTo, audio_.startTime, audio_.offset);
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $MartinSStewart$elm_audio$Audio$encodeBufferId = function (_v0) {
	var bufferId = _v0.a;
	return $elm$json$Json$Encode$int(bufferId);
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $MartinSStewart$elm_audio$Audio$encodeDuration = A2($elm$core$Basics$composeR, $ianmackenzie$elm_units$Duration$inMilliseconds, $elm$json$Json$Encode$float);
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $MartinSStewart$elm_audio$Audio$encodeLoopConfig = function (maybeLoop) {
	if (maybeLoop.$ === 'Just') {
		var loop = maybeLoop.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'loopStart',
					$MartinSStewart$elm_audio$Audio$encodeDuration(loop.loopStart)),
					_Utils_Tuple2(
					'loopEnd',
					$MartinSStewart$elm_audio$Audio$encodeDuration(loop.loopEnd))
				]));
	} else {
		return $elm$json$Json$Encode$null;
	}
};
var $MartinSStewart$elm_audio$Audio$encodeTime = A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$json$Json$Encode$int);
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $mgold$elm_nonempty_list$List$Nonempty$toList = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return A2($elm$core$List$cons, x, xs);
};
var $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline = function (volumeTimeline) {
	return A2(
		$elm$json$Json$Encode$list,
		function (_v0) {
			var time = _v0.a;
			var volume = _v0.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'time',
						$MartinSStewart$elm_audio$Audio$encodeTime(time)),
						_Utils_Tuple2(
						'volume',
						$elm$json$Json$Encode$float(volume))
					]));
		},
		$mgold$elm_nonempty_list$List$Nonempty$toList(volumeTimeline));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $mgold$elm_nonempty_list$List$Nonempty$Nonempty = F2(
	function (a, b) {
		return {$: 'Nonempty', a: a, b: b};
	});
var $mgold$elm_nonempty_list$List$Nonempty$map = F2(
	function (f, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
			f(x),
			A2($elm$core$List$map, f, xs));
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $MartinSStewart$elm_audio$Audio$volumeTimelines = function (audio_) {
	return A2(
		$elm$core$List$map,
		$mgold$elm_nonempty_list$List$Nonempty$map(
			$elm$core$Tuple$mapFirst(
				function (a) {
					return A2($ianmackenzie$elm_units$Duration$addTo, a, audio_.offset);
				})),
		audio_.volumeTimelines);
};
var $MartinSStewart$elm_audio$Audio$encodeStartSound = F2(
	function (nodeGroupId, audio_) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('startSound')),
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'bufferId',
					$MartinSStewart$elm_audio$Audio$encodeBufferId(
						$MartinSStewart$elm_audio$Audio$audioSourceBufferId(audio_.source))),
					_Utils_Tuple2(
					'startTime',
					$MartinSStewart$elm_audio$Audio$encodeTime(
						$MartinSStewart$elm_audio$Audio$audioStartTime(audio_))),
					_Utils_Tuple2(
					'startAt',
					$MartinSStewart$elm_audio$Audio$encodeDuration(audio_.startAt)),
					_Utils_Tuple2(
					'volume',
					$elm$json$Json$Encode$float(audio_.volume)),
					_Utils_Tuple2(
					'volumeTimelines',
					A2(
						$elm$json$Json$Encode$list,
						$MartinSStewart$elm_audio$Audio$encodeVolumeTimeline,
						$MartinSStewart$elm_audio$Audio$volumeTimelines(audio_))),
					_Utils_Tuple2(
					'loop',
					$MartinSStewart$elm_audio$Audio$encodeLoopConfig(audio_.loop)),
					_Utils_Tuple2(
					'playbackRate',
					$elm$json$Json$Encode$float(audio_.playbackRate))
				]));
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $ianmackenzie$elm_units$Quantity$plus = F2(
	function (_v0, _v1) {
		var y = _v0.a;
		var x = _v1.a;
		return $ianmackenzie$elm_units$Quantity$Quantity(x + y);
	});
var $MartinSStewart$elm_audio$Audio$flattenAudio = function (audio_) {
	switch (audio_.$) {
		case 'Group':
			var group_ = audio_.a;
			return $elm$core$List$concat(
				A2($elm$core$List$map, $MartinSStewart$elm_audio$Audio$flattenAudio, group_));
		case 'BasicAudio':
			var source = audio_.a.source;
			var startTime = audio_.a.startTime;
			var settings = audio_.a.settings;
			return _List_fromArray(
				[
					{loop: settings.loop, offset: $ianmackenzie$elm_units$Quantity$zero, playbackRate: settings.playbackRate, source: source, startAt: settings.startAt, startTime: startTime, volume: 1, volumeTimelines: _List_Nil}
				]);
		default:
			var effect = audio_.a;
			var _v1 = effect.effectType;
			switch (_v1.$) {
				case 'ScaleVolume':
					var scaleVolume_ = _v1.a;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{volume: scaleVolume_.scaleBy * a.volume});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
				case 'ScaleVolumeAt':
					var volumeAt = _v1.a.volumeAt;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{
									volumeTimelines: A2($elm$core$List$cons, volumeAt, a.volumeTimelines)
								});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
				default:
					var duration = _v1.a;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{
									offset: A2($ianmackenzie$elm_units$Quantity$plus, duration, a.offset)
								});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
			}
	}
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $MartinSStewart$elm_audio$Audio$encodeSetLoopConfig = F2(
	function (nodeGroupId, loop) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setLoopConfig')),
					_Utils_Tuple2(
					'loop',
					$MartinSStewart$elm_audio$Audio$encodeLoopConfig(loop))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate = F2(
	function (nodeGroupId, playbackRate) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setPlaybackRate')),
					_Utils_Tuple2(
					'playbackRate',
					$elm$json$Json$Encode$float(playbackRate))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetVolume = F2(
	function (nodeGroupId, volume) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setVolume')),
					_Utils_Tuple2(
					'volume',
					$elm$json$Json$Encode$float(volume))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt = F2(
	function (nodeGroupId, volumeTimelines_) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setVolumeAt')),
					_Utils_Tuple2(
					'volumeAt',
					A2($elm$json$Json$Encode$list, $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline, volumeTimelines_))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeStopSound = function (nodeGroupId) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'action',
				$elm$json$Json$Encode$string('stopSound')),
				_Utils_Tuple2(
				'nodeGroupId',
				$elm$json$Json$Encode$int(nodeGroupId))
			]));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $MartinSStewart$elm_audio$Audio$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $MartinSStewart$elm_audio$Audio$removeAt = F2(
	function (index, l) {
		if (index < 0) {
			return l;
		} else {
			var tail = $elm$core$List$tail(
				A2($elm$core$List$drop, index, l));
			var head = A2($elm$core$List$take, index, l);
			if (tail.$ === 'Nothing') {
				return l;
			} else {
				var t = tail.a;
				return A2($elm$core$List$append, head, t);
			}
		}
	});
var $MartinSStewart$elm_audio$Audio$updateAudioState = F2(
	function (_v0, _v1) {
		var nodeGroupId = _v0.a;
		var audioGroup = _v0.b;
		var flattenedAudio = _v1.a;
		var audioState = _v1.b;
		var json = _v1.c;
		var validAudio = A2(
			$elm$core$List$filter,
			function (_v7) {
				var a = _v7.b;
				return _Utils_eq(a.source, audioGroup.source) && (_Utils_eq(
					$MartinSStewart$elm_audio$Audio$audioStartTime(a),
					$MartinSStewart$elm_audio$Audio$audioStartTime(audioGroup)) && _Utils_eq(a.startAt, audioGroup.startAt));
			},
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, flattenedAudio));
		var _v2 = A2(
			$MartinSStewart$elm_audio$Audio$find,
			function (_v3) {
				var a = _v3.b;
				return _Utils_eq(a, audioGroup);
			},
			validAudio);
		if (_v2.$ === 'Just') {
			var _v4 = _v2.a;
			var index = _v4.a;
			return _Utils_Tuple3(
				A2($MartinSStewart$elm_audio$Audio$removeAt, index, flattenedAudio),
				audioState,
				json);
		} else {
			if (validAudio.b) {
				var _v6 = validAudio.a;
				var index = _v6.a;
				var a = _v6.b;
				var encodeValue = F2(
					function (getter, encoder) {
						return _Utils_eq(
							getter(audioGroup),
							getter(a)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
							A2(
								encoder,
								nodeGroupId,
								getter(a)));
					});
				var effects = A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[
							A2(
							encodeValue,
							function ($) {
								return $.volume;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetVolume),
							A2(
							encodeValue,
							function ($) {
								return $.loop;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetLoopConfig),
							A2(
							encodeValue,
							function ($) {
								return $.playbackRate;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate),
							A2(encodeValue, $MartinSStewart$elm_audio$Audio$volumeTimelines, $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt)
						]));
				return _Utils_Tuple3(
					A2($MartinSStewart$elm_audio$Audio$removeAt, index, flattenedAudio),
					A3($elm$core$Dict$insert, nodeGroupId, a, audioState),
					_Utils_ap(effects, json));
			} else {
				return _Utils_Tuple3(
					flattenedAudio,
					A2($elm$core$Dict$remove, nodeGroupId, audioState),
					A2(
						$elm$core$List$cons,
						$MartinSStewart$elm_audio$Audio$encodeStopSound(nodeGroupId),
						json));
			}
		}
	});
var $MartinSStewart$elm_audio$Audio$diffAudioState = F3(
	function (nodeGroupIdCounter, audioState, newAudio) {
		var _v0 = A3(
			$elm$core$List$foldl,
			$MartinSStewart$elm_audio$Audio$updateAudioState,
			_Utils_Tuple3(
				$MartinSStewart$elm_audio$Audio$flattenAudio(newAudio),
				audioState,
				_List_Nil),
			$elm$core$Dict$toList(audioState));
		var newAudioLeft = _v0.a;
		var newAudioState = _v0.b;
		var json2 = _v0.c;
		var _v1 = A3(
			$elm$core$List$foldl,
			F2(
				function (audioLeft, _v2) {
					var counter = _v2.a;
					var audioState_ = _v2.b;
					var json_ = _v2.c;
					return _Utils_Tuple3(
						counter + 1,
						A3($elm$core$Dict$insert, counter, audioLeft, audioState_),
						A2(
							$elm$core$List$cons,
							A2($MartinSStewart$elm_audio$Audio$encodeStartSound, counter, audioLeft),
							json_));
				}),
			_Utils_Tuple3(nodeGroupIdCounter, newAudioState, json2),
			newAudioLeft);
		var newNodeGroupIdCounter = _v1.a;
		var newAudioState2 = _v1.b;
		var json3 = _v1.c;
		return _Utils_Tuple3(newAudioState2, newNodeGroupIdCounter, json3);
	});
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest = F2(
	function (index, audioLoad) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audioUrl',
					$elm$json$Json$Encode$string(audioLoad.audioUrl)),
					_Utils_Tuple2(
					'requestId',
					$elm$json$Json$Encode$int(index))
				]));
	});
var $MartinSStewart$elm_audio$Audio$flattenAudioCmd = function (audioCmd) {
	if (audioCmd.$ === 'AudioLoadRequest') {
		var data = audioCmd.a;
		return _List_fromArray(
			[data]);
	} else {
		var list = audioCmd.a;
		return $elm$core$List$concat(
			A2($elm$core$List$map, $MartinSStewart$elm_audio$Audio$flattenAudioCmd, list));
	}
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $MartinSStewart$elm_audio$Audio$encodeAudioCmd = F2(
	function (_v0, audioCmd) {
		var model = _v0.a;
		var flattenedAudioCmd = $MartinSStewart$elm_audio$Audio$flattenAudioCmd(audioCmd);
		var newPendingRequests = A2(
			$elm$core$List$indexedMap,
			F2(
				function (index, request) {
					return _Utils_Tuple2(model.requestCount + index, request);
				}),
			flattenedAudioCmd);
		return _Utils_Tuple2(
			$MartinSStewart$elm_audio$Audio$Model(
				_Utils_update(
					model,
					{
						pendingRequests: A2(
							$elm$core$Dict$union,
							model.pendingRequests,
							$elm$core$Dict$fromList(newPendingRequests)),
						requestCount: model.requestCount + $elm$core$List$length(flattenedAudioCmd)
					})),
			A2(
				$elm$json$Json$Encode$list,
				$elm$core$Basics$identity,
				A2(
					$elm$core$List$map,
					function (_v1) {
						var index = _v1.a;
						var value = _v1.b;
						return A2($MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest, index, value);
					},
					newPendingRequests)));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $MartinSStewart$elm_audio$Audio$initHelper = F3(
	function (audioPort, audioFunc, _v0) {
		var model = _v0.a;
		var cmds = _v0.b;
		var audioCmds = _v0.c;
		var _v1 = A3(
			$MartinSStewart$elm_audio$Audio$diffAudioState,
			0,
			$elm$core$Dict$empty,
			A2(
				audioFunc,
				$MartinSStewart$elm_audio$Audio$AudioData(
					{sourceData: $elm$core$Dict$empty}),
				model));
		var audioState = _v1.a;
		var newNodeGroupIdCounter = _v1.b;
		var json = _v1.c;
		var initialModel = $MartinSStewart$elm_audio$Audio$Model(
			{audioState: audioState, nodeGroupIdCounter: newNodeGroupIdCounter, pendingRequests: $elm$core$Dict$empty, requestCount: 0, samplesPerSecond: $elm$core$Maybe$Nothing, sourceData: $elm$core$Dict$empty, userModel: model});
		var _v2 = A2($MartinSStewart$elm_audio$Audio$encodeAudioCmd, initialModel, audioCmds);
		var initialModel2 = _v2.a;
		var audioRequests = _v2.b;
		var portMessage = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audio',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, json)),
					_Utils_Tuple2('audioCmds', audioRequests)
				]));
		return _Utils_Tuple2(
			initialModel2,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						A2($elm$core$Platform$Cmd$map, $MartinSStewart$elm_audio$Audio$UserMsg, cmds),
						audioPort(portMessage)
					])));
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $MartinSStewart$elm_audio$Audio$FromJSMsg = function (a) {
	return {$: 'FromJSMsg', a: a};
};
var $MartinSStewart$elm_audio$Audio$JsonParseError = function (a) {
	return {$: 'JsonParseError', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioLoadFailed = function (a) {
	return {$: 'AudioLoadFailed', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioLoadSuccess = function (a) {
	return {$: 'AudioLoadSuccess', a: a};
};
var $MartinSStewart$elm_audio$Audio$InitAudioContext = function (a) {
	return {$: 'InitAudioContext', a: a};
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $MartinSStewart$elm_audio$Audio$BufferId = function (a) {
	return {$: 'BufferId', a: a};
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $MartinSStewart$elm_audio$Audio$decodeBufferId = A2($elm$json$Json$Decode$map, $MartinSStewart$elm_audio$Audio$BufferId, $elm$json$Json$Decode$int);
var $MartinSStewart$elm_audio$Audio$FailedToDecode = {$: 'FailedToDecode'};
var $MartinSStewart$elm_audio$Audio$NetworkError = {$: 'NetworkError'};
var $MartinSStewart$elm_audio$Audio$UnknownError = {$: 'UnknownError'};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $MartinSStewart$elm_audio$Audio$decodeLoadError = A2(
	$elm$json$Json$Decode$andThen,
	function (value) {
		switch (value) {
			case 'NetworkError':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$NetworkError);
			case 'MediaDecodeAudioDataUnknownContentType':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$FailedToDecode);
			case 'DOMException: The buffer passed to decodeAudioData contains an unknown content type.':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$FailedToDecode);
			default:
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$UnknownError);
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $ianmackenzie$elm_units$Duration$seconds = function (numSeconds) {
	return $ianmackenzie$elm_units$Quantity$Quantity(numSeconds);
};
var $MartinSStewart$elm_audio$Audio$decodeFromJSMsg = A2(
	$elm$json$Json$Decode$andThen,
	function (value) {
		switch (value) {
			case 0:
				return A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (requestId, error) {
							return $MartinSStewart$elm_audio$Audio$AudioLoadFailed(
								{error: error, requestId: requestId});
						}),
					A2($elm$json$Json$Decode$field, 'requestId', $elm$json$Json$Decode$int),
					A2($elm$json$Json$Decode$field, 'error', $MartinSStewart$elm_audio$Audio$decodeLoadError));
			case 1:
				return A4(
					$elm$json$Json$Decode$map3,
					F3(
						function (requestId, bufferId, duration) {
							return $MartinSStewart$elm_audio$Audio$AudioLoadSuccess(
								{
									bufferId: bufferId,
									duration: $ianmackenzie$elm_units$Duration$seconds(duration),
									requestId: requestId
								});
						}),
					A2($elm$json$Json$Decode$field, 'requestId', $elm$json$Json$Decode$int),
					A2($elm$json$Json$Decode$field, 'bufferId', $MartinSStewart$elm_audio$Audio$decodeBufferId),
					A2($elm$json$Json$Decode$field, 'durationInSeconds', $elm$json$Json$Decode$float));
			case 2:
				return A2(
					$elm$json$Json$Decode$map,
					function (samplesPerSecond) {
						return $MartinSStewart$elm_audio$Audio$InitAudioContext(
							{samplesPerSecond: samplesPerSecond});
					},
					A2($elm$json$Json$Decode$field, 'samplesPerSecond', $elm$json$Json$Decode$int));
			default:
				return $elm$json$Json$Decode$succeed(
					$MartinSStewart$elm_audio$Audio$JsonParseError(
						{
							error: 'Type ' + ($elm$core$String$fromInt(value) + ' not handled.')
						}));
		}
	},
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$int));
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $MartinSStewart$elm_audio$Audio$fromJSPortSub = function (json) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $MartinSStewart$elm_audio$Audio$decodeFromJSMsg, json);
	if (_v0.$ === 'Ok') {
		var value = _v0.a;
		return $MartinSStewart$elm_audio$Audio$FromJSMsg(value);
	} else {
		var error = _v0.a;
		return $MartinSStewart$elm_audio$Audio$FromJSMsg(
			$MartinSStewart$elm_audio$Audio$JsonParseError(
				{
					error: $elm$json$Json$Decode$errorToString(error)
				}));
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $MartinSStewart$elm_audio$Audio$subscriptions = F2(
	function (app, _v0) {
		var model = _v0.a;
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					A2(
					$elm$core$Platform$Sub$map,
					$MartinSStewart$elm_audio$Audio$UserMsg,
					A2(
						app.subscriptions,
						$MartinSStewart$elm_audio$Audio$audioData(
							$MartinSStewart$elm_audio$Audio$Model(model)),
						model.userModel)),
					app.audioPort.fromJS($MartinSStewart$elm_audio$Audio$fromJSPortSub)
				]));
	});
var $MartinSStewart$elm_audio$Audio$File = function (a) {
	return {$: 'File', a: a};
};
var $MartinSStewart$elm_audio$Audio$flip = F3(
	function (func, a, b) {
		return A2(func, b, a);
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $mgold$elm_nonempty_list$List$Nonempty$head = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return x;
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $MartinSStewart$elm_audio$Audio$rawBufferId = function (_v0) {
	var bufferId = _v0.a;
	return bufferId;
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $MartinSStewart$elm_audio$Audio$updateHelper = F4(
	function (audioPort, audioFunc, userUpdate, _v0) {
		var model = _v0.a;
		var audioData_ = $MartinSStewart$elm_audio$Audio$audioData(
			$MartinSStewart$elm_audio$Audio$Model(model));
		var _v1 = A2(userUpdate, audioData_, model.userModel);
		var newUserModel = _v1.a;
		var userCmd = _v1.b;
		var audioCmds = _v1.c;
		var _v2 = A3(
			$MartinSStewart$elm_audio$Audio$diffAudioState,
			model.nodeGroupIdCounter,
			model.audioState,
			A2(audioFunc, audioData_, newUserModel));
		var audioState = _v2.a;
		var newNodeGroupIdCounter = _v2.b;
		var json = _v2.c;
		var newModel = $MartinSStewart$elm_audio$Audio$Model(
			_Utils_update(
				model,
				{audioState: audioState, nodeGroupIdCounter: newNodeGroupIdCounter, userModel: newUserModel}));
		var _v3 = A2($MartinSStewart$elm_audio$Audio$encodeAudioCmd, newModel, audioCmds);
		var newModel2 = _v3.a;
		var audioRequests = _v3.b;
		var portMessage = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audio',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, json)),
					_Utils_Tuple2('audioCmds', audioRequests)
				]));
		return _Utils_Tuple2(
			newModel2,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						A2($elm$core$Platform$Cmd$map, $MartinSStewart$elm_audio$Audio$UserMsg, userCmd),
						audioPort(portMessage)
					])));
	});
var $MartinSStewart$elm_audio$Audio$update = F3(
	function (app, msg, _v0) {
		var model = _v0.a;
		if (msg.$ === 'UserMsg') {
			var userMsg = msg.a;
			return A4(
				$MartinSStewart$elm_audio$Audio$updateHelper,
				app.audioPort.toJS,
				app.audio,
				A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
				$MartinSStewart$elm_audio$Audio$Model(model));
		} else {
			var response = msg.a;
			switch (response.$) {
				case 'AudioLoadSuccess':
					var requestId = response.a.requestId;
					var bufferId = response.a.bufferId;
					var duration = response.a.duration;
					var _v3 = A2($elm$core$Dict$get, requestId, model.pendingRequests);
					if (_v3.$ === 'Just') {
						var pendingRequest = _v3.a;
						var sourceData = A3(
							$elm$core$Dict$insert,
							$MartinSStewart$elm_audio$Audio$rawBufferId(bufferId),
							{duration: duration},
							model.sourceData);
						var source = $elm$core$Result$Ok(
							$MartinSStewart$elm_audio$Audio$File(
								{bufferId: bufferId}));
						var maybeUserMsg = A2(
							$MartinSStewart$elm_audio$Audio$find,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Tuple$first,
								$elm$core$Basics$eq(source)),
							$mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.userMsg));
						if (maybeUserMsg.$ === 'Just') {
							var _v5 = maybeUserMsg.a;
							var userMsg = _v5.b;
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
											sourceData: sourceData
										})));
						} else {
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2(
									$MartinSStewart$elm_audio$Audio$flip,
									app.update,
									$mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.userMsg).b),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
											sourceData: sourceData
										})));
						}
					} else {
						return _Utils_Tuple2(
							$MartinSStewart$elm_audio$Audio$Model(model),
							$elm$core$Platform$Cmd$none);
					}
				case 'AudioLoadFailed':
					var requestId = response.a.requestId;
					var error = response.a.error;
					var _v6 = A2($elm$core$Dict$get, requestId, model.pendingRequests);
					if (_v6.$ === 'Just') {
						var pendingRequest = _v6.a;
						var a = $elm$core$Result$Err(error);
						var b = A2(
							$MartinSStewart$elm_audio$Audio$find,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Tuple$first,
								$elm$core$Basics$eq(a)),
							$mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.userMsg));
						if (b.$ === 'Just') {
							var _v8 = b.a;
							var userMsg = _v8.b;
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests)
										})));
						} else {
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2(
									$MartinSStewart$elm_audio$Audio$flip,
									app.update,
									$mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.userMsg).b),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests)
										})));
						}
					} else {
						return _Utils_Tuple2(
							$MartinSStewart$elm_audio$Audio$Model(model),
							$elm$core$Platform$Cmd$none);
					}
				case 'InitAudioContext':
					var samplesPerSecond = response.a.samplesPerSecond;
					return _Utils_Tuple2(
						$MartinSStewart$elm_audio$Audio$Model(
							_Utils_update(
								model,
								{
									samplesPerSecond: $elm$core$Maybe$Just(samplesPerSecond)
								})),
						$elm$core$Platform$Cmd$none);
				default:
					var error = response.a.error;
					return _Utils_Tuple2(
						$MartinSStewart$elm_audio$Audio$Model(model),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $ianmackenzie$elm_units$Duration$milliseconds = function (numMilliseconds) {
	return $ianmackenzie$elm_units$Duration$seconds(0.001 * numMilliseconds);
};
var $MartinSStewart$elm_audio$Audio$Effect = function (a) {
	return {$: 'Effect', a: a};
};
var $MartinSStewart$elm_audio$Audio$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $MartinSStewart$elm_audio$Audio$offsetBy = F2(
	function (offset_, audio_) {
		return $MartinSStewart$elm_audio$Audio$Effect(
			{
				audio: audio_,
				effectType: $MartinSStewart$elm_audio$Audio$Offset(offset_)
			});
	});
var $MartinSStewart$elm_audio$Audio$withAudioOffset = function (app) {
	return _Utils_update(
		app,
		{
			audio: F2(
				function (audioData_, model) {
					return A2(
						$MartinSStewart$elm_audio$Audio$offsetBy,
						$ianmackenzie$elm_units$Duration$milliseconds(50),
						A2(app.audio, audioData_, model));
				})
		});
};
var $MartinSStewart$elm_audio$Audio$elementWithAudio = A2(
	$elm$core$Basics$composeR,
	$MartinSStewart$elm_audio$Audio$withAudioOffset,
	function (app) {
		return $elm$browser$Browser$element(
			{
				init: A2(
					$elm$core$Basics$composeR,
					app.init,
					A2($MartinSStewart$elm_audio$Audio$initHelper, app.audioPort.toJS, app.audio)),
				subscriptions: $MartinSStewart$elm_audio$Audio$subscriptions(app),
				update: $MartinSStewart$elm_audio$Audio$update(app),
				view: function (model) {
					return A2(
						$elm$html$Html$map,
						$MartinSStewart$elm_audio$Audio$UserMsg,
						A2(
							app.view,
							$MartinSStewart$elm_audio$Audio$audioData(model),
							$MartinSStewart$elm_audio$Audio$getUserModel(model)));
				}
			});
	});
var $author$project$Types$NotLoggedIn = function (a) {
	return {$: 'NotLoggedIn', a: a};
};
var $author$project$Types$PoirotReady = function (a) {
	return {$: 'PoirotReady', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioLoadRequest = function (a) {
	return {$: 'AudioLoadRequest', a: a};
};
var $MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage = {$: 'ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage'};
var $MartinSStewart$elm_audio$Audio$enumeratedResults = A2(
	$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
	$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage),
	_Utils_ap(
		_List_fromArray(
			[
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$FailedToDecode),
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$NetworkError),
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$UnknownError)
			]),
		A2(
			$elm$core$List$map,
			function (bufferId) {
				return $elm$core$Result$Ok(
					$MartinSStewart$elm_audio$Audio$File(
						{
							bufferId: $MartinSStewart$elm_audio$Audio$BufferId(bufferId)
						}));
			},
			A2($elm$core$List$range, 0, 1000))));
var $MartinSStewart$elm_audio$Audio$loadAudio = F2(
	function (userMsg, url) {
		return $MartinSStewart$elm_audio$Audio$AudioLoadRequest(
			{
				audioUrl: url,
				userMsg: A2(
					$mgold$elm_nonempty_list$List$Nonempty$map,
					function (results) {
						return _Utils_Tuple2(
							results,
							userMsg(results));
					},
					$MartinSStewart$elm_audio$Audio$enumeratedResults)
			});
	});
var $author$project$Types$CharReceived = function (a) {
	return {$: 'CharReceived', a: a};
};
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $elm$http$Http$Header = F2(
	function (a, b) {
		return {$: 'Header', a: a, b: b};
	});
var $elm$http$Http$header = $elm$http$Http$Header;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$Database$parseChar = A2(
	$elm$json$Json$Decode$field,
	'values',
	A2(
		$elm$json$Json$Decode$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$indexedMap(
				F2(
					function (i, x) {
						if ((x.b && x.b.b) && x.b.b.b) {
							var name = x.a;
							var _v1 = x.b;
							var _char = _v1.a;
							var _v2 = _v1.b;
							var secret = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									_char,
									_Utils_Tuple3(
										(name === '') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(name),
										secret,
										i + 2)));
						} else {
							return $elm$core$Maybe$Nothing;
						}
					})),
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$filterMap(
					function (x) {
						return x;
					}),
				$elm$core$Dict$fromList)),
		$elm$json$Json$Decode$list(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $author$project$Database$url = function (sheet) {
	return 'https://sheets.googleapis.com/v4/spreadsheets/1_R5_jdrepOfS9xX9Yqq5i2I8q_isOJAgI7kmY7qacK0/values/' + sheet;
};
var $author$project$Database$readChar = function (oauth) {
	return $elm$http$Http$request(
		{
			body: $elm$http$Http$emptyBody,
			expect: A2($elm$http$Http$expectJson, $author$project$Types$CharReceived, $author$project$Database$parseChar),
			headers: _List_fromArray(
				[
					A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
				]),
			method: 'GET',
			timeout: $elm$core$Maybe$Nothing,
			tracker: $elm$core$Maybe$Nothing,
			url: $author$project$Database$url('chars!A2:C50')
		});
};
var $author$project$Types$RSVPReceived = function (a) {
	return {$: 'RSVPReceived', a: a};
};
var $author$project$Types$Maybe = {$: 'Maybe'};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Types$No = {$: 'No'};
var $author$project$Types$Yes = {$: 'Yes'};
var $author$project$Database$pRSVP = function (str) {
	switch (str) {
		case 'Ja':
			return $elm$core$Maybe$Just($author$project$Types$Yes);
		case 'Nee':
			return $elm$core$Maybe$Just($author$project$Types$No);
		case 'Misschien':
			return $elm$core$Maybe$Just($author$project$Types$Maybe);
		case '':
			return $elm$core$Maybe$Just($author$project$Types$Maybe);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Database$parseRSVP = A2(
	$elm$json$Json$Decode$field,
	'values',
	A2(
		$elm$json$Json$Decode$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$indexedMap(
				F2(
					function (i, x) {
						if (x.b) {
							if (x.b.b) {
								var name = x.a;
								var _v1 = x.b;
								var rsvp = _v1.a;
								return _Utils_Tuple2(
									name,
									A2(
										$elm$core$Maybe$map,
										function (y) {
											return _Utils_Tuple2(y, i + 1);
										},
										$author$project$Database$pRSVP(rsvp)));
							} else {
								var name = x.a;
								return _Utils_Tuple2(
									name,
									$elm$core$Maybe$Just(
										_Utils_Tuple2($author$project$Types$Maybe, i + 1)));
							}
						} else {
							return _Utils_Tuple2('', $elm$core$Maybe$Nothing);
						}
					})),
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$filterMap(
					function (_v2) {
						var n = _v2.a;
						var r = _v2.b;
						return A2(
							$elm$core$Maybe$andThen,
							function (r2) {
								return (n === '') ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
									_Utils_Tuple2(n, r2));
							},
							r);
					}),
				$elm$core$Dict$fromList)),
		$elm$json$Json$Decode$list(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $author$project$Database$readRSVP = function (oauth) {
	return $elm$http$Http$request(
		{
			body: $elm$http$Http$emptyBody,
			expect: A2($elm$http$Http$expectJson, $author$project$Types$RSVPReceived, $author$project$Database$parseRSVP),
			headers: _List_fromArray(
				[
					A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
				]),
			method: 'GET',
			timeout: $elm$core$Maybe$Nothing,
			tracker: $elm$core$Maybe$Nothing,
			url: $author$project$Database$url('RSVP!A1:B50')
		});
};
var $author$project$Main$init = function (oauthtoken) {
	return _Utils_Tuple3(
		$author$project$Types$NotLoggedIn(
			{
				chars: $elm$core$Dict$empty,
				fromcharsheet: $elm$core$Maybe$Nothing,
				fromrsvpsheet: $elm$core$Maybe$Nothing,
				hover: $elm$core$Maybe$Nothing,
				oauth: oauthtoken,
				password: '',
				poirot: _Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing)
			}),
		$elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					$author$project$Database$readRSVP(oauthtoken),
					$author$project$Database$readChar(oauthtoken)
				])),
		A2($MartinSStewart$elm_audio$Audio$loadAudio, $author$project$Types$PoirotReady, 'https:dpvanbalen.github.io/images/poirot.mp3'));
};
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Main$subscriptions = F2(
	function (_v0, _v1) {
		return $elm$core$Platform$Sub$none;
	});
var $author$project$Types$Confirming = function (a) {
	return {$: 'Confirming', a: a};
};
var $author$project$Types$LoggedIn = function (a) {
	return {$: 'LoggedIn', a: a};
};
var $author$project$Types$NotSelected = {$: 'NotSelected'};
var $author$project$Types$PoirotGoing = function (a) {
	return {$: 'PoirotGoing', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioCmdGroup = function (a) {
	return {$: 'AudioCmdGroup', a: a};
};
var $MartinSStewart$elm_audio$Audio$cmdNone = $MartinSStewart$elm_audio$Audio$AudioCmdGroup(_List_Nil);
var $author$project$Secrets$accounts = _List_fromArray(
	['eCeM75xMenG/KHjgfv/MQJGRmqapJVvLfbmRLV8p3G8=', 'LUYEOHmRZ4iocP3J67VJ5IpKBJgIFbDak/K/qewCZh8=', 'LUYEOHmRZ4iocP3J67VJ5Mp+ofOHWGzd7MeBZhKRBpI=', 'LUYEOHmRZ4iocP3J67VJ5JFHDeUMApZPkeE1XcO2aA0=', 'LUYEOHmRZ4iocP3J67VJ5OMgmjfG5l65M4JYwseblN4=', 'LUYEOHmRZ4iocP3J67VJ5P9QUDv9l/F5Geic7d228rg=', 'LUYEOHmRZ4iocP3J67VJ5JGkYbLrIxUZCkHhMVbp7aM=', 'LUYEOHmRZ4iocP3J67VJ5LU6CjcAgv84s4xhIUTjDfg=', 'LUYEOHmRZ4iocP3J67VJ5B48bTy4OInPBPLfPDWDdMk=', 'LUYEOHmRZ4iocP3J67VJ5NHj4a5J1HMtRhTGlnASBVs=', 'LUYEOHmRZ4iocP3J67VJ5M6xyJ/c2BrCHCcNB6ng7Us=', 'LUYEOHmRZ4iocP3J67VJ5KN/a8w07fa37MwcXjRS9uM=', 'LUYEOHmRZ4iocP3J67VJ5OoDjKt0DIcRqJb0o16q12I=', 'LUYEOHmRZ4iocP3J67VJ5KH0MDFP9mNiCqYFzH84+1M=', 'LUYEOHmRZ4iocP3J67VJ5I4abDYRpl17Z91ios+hPck=', 'LUYEOHmRZ4iocP3J67VJ5Gxev5W/tPnVzUYsq+UF1Gk=', 'LUYEOHmRZ4iocP3J67VJ5Cm15kYPyCZypflC+5DoTQE=', 'LUYEOHmRZ4iocP3J67VJ5LBUwdXniqD96rnmy7BVb5A=', 'LUYEOHmRZ4iocP3J67VJ5MjLVH9M0hqjjDm1UdxqlTw=', 'LUYEOHmRZ4iocP3J67VJ5IyPe69gU04IZleqah9R2Dc=']);
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $elm_community$result_extra$Result$Extra$combine = A2(
	$elm$core$List$foldr,
	$elm$core$Result$map2($elm$core$List$cons),
	$elm$core$Result$Ok(_List_Nil));
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm_community$list_extra$List$Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _v0) {
				var i = _v0.a;
				var thisAcc = _v0.b;
				return _Utils_Tuple2(
					i + 1,
					A3(func, i, x, thisAcc));
			});
		return A3(
			$elm$core$List$foldl,
			step,
			_Utils_Tuple2(0, acc),
			list).b;
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $waratuman$elm_coder$Coder$decodeChunk = F2(
	function (scheme, chunk) {
		var octets = scheme.octets;
		var chars = scheme.chars;
		var padChar = scheme.padChar;
		var intToChar = scheme.intToChar;
		var charToInt = scheme.charToInt;
		var bitsPerChar = $elm$core$Basics$floor((octets * 8) / chars);
		return A2(
			$elm$core$Result$andThen,
			function (x) {
				return $elm$core$Result$Ok(
					A3(
						$elm_community$list_extra$List$Extra$indexedFoldl,
						F3(
							function (charIndex, _char, _v0) {
								var currentByte = _v0.a;
								var bytes = _v0.b;
								var octetIndex = $elm$core$Basics$floor(charIndex * (bitsPerChar / 8));
								var octetStart = octetIndex * 8;
								var octetEnd = octetStart + 8;
								var charStart = charIndex * bitsPerChar;
								var charEnd = charStart + bitsPerChar;
								var shift = octetEnd - charEnd;
								var nextByte = _Utils_eq(charEnd, octetEnd) ? $elm$core$Maybe$Just(0) : ((_Utils_cmp(charEnd, octetEnd) > 0) ? $elm$core$Maybe$Just(
									255 & ((shift < 0) ? (_char << (8 + shift)) : (_char >>> (8 - shift)))) : $elm$core$Maybe$Nothing);
								var _byte = currentByte | ((shift < 0) ? (_char >>> (-shift)) : (_char << shift));
								if (nextByte.$ === 'Just') {
									var b = nextByte.a;
									return _Utils_Tuple2(
										b,
										_Utils_ap(
											bytes,
											_List_fromArray(
												[_byte])));
								} else {
									return _Utils_Tuple2(_byte, bytes);
								}
							}),
						_Utils_Tuple2(0, _List_Nil),
						x).b);
			},
			$elm_community$result_extra$Result$Extra$combine(
				A2($elm$core$List$map, charToInt, chunk)));
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm_community$list_extra$List$Extra$groupsOfWithStep = F3(
	function (size, step, list) {
		if ((size <= 0) || (step <= 0)) {
			return _List_Nil;
		} else {
			var go = F2(
				function (xs, acc) {
					go:
					while (true) {
						if ($elm$core$List$isEmpty(xs)) {
							return $elm$core$List$reverse(acc);
						} else {
							var thisGroup = A2($elm$core$List$take, size, xs);
							if (_Utils_eq(
								size,
								$elm$core$List$length(thisGroup))) {
								var rest = A2($elm$core$List$drop, step, xs);
								var $temp$xs = rest,
									$temp$acc = A2($elm$core$List$cons, thisGroup, acc);
								xs = $temp$xs;
								acc = $temp$acc;
								continue go;
							} else {
								return $elm$core$List$reverse(acc);
							}
						}
					}
				});
			return A2(go, list, _List_Nil);
		}
	});
var $elm_community$list_extra$List$Extra$groupsOf = F2(
	function (size, xs) {
		return A3($elm_community$list_extra$List$Extra$groupsOfWithStep, size, size, xs);
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $waratuman$elm_coder$Coder$decode = F2(
	function (scheme, string) {
		var octets = scheme.octets;
		var chars = scheme.chars;
		var padChar = scheme.padChar;
		var intToChar = scheme.intToChar;
		var charToInt = scheme.charToInt;
		return A2(
			$elm$core$Result$andThen,
			function (x) {
				var p = $elm$core$Basics$ceiling(
					($elm$core$List$length(
						A2($elm$core$String$indexes, padChar, string)) * octets) / chars);
				var output = $elm$core$List$concat(x);
				var s = $elm$core$List$length(output) - p;
				return $elm$core$Result$Ok(
					A2($elm$core$List$take, s, output));
			},
			$elm_community$result_extra$Result$Extra$combine(
				A2(
					$elm$core$List$map,
					$waratuman$elm_coder$Coder$decodeChunk(scheme),
					A2(
						$elm_community$list_extra$List$Extra$groupsOf,
						chars,
						$elm$core$String$toList(string)))));
	});
var $waratuman$elm_coder$Base64$charToInt = function (_char) {
	switch (_char.valueOf()) {
		case 'A':
			return $elm$core$Result$Ok(0);
		case 'B':
			return $elm$core$Result$Ok(1);
		case 'C':
			return $elm$core$Result$Ok(2);
		case 'D':
			return $elm$core$Result$Ok(3);
		case 'E':
			return $elm$core$Result$Ok(4);
		case 'F':
			return $elm$core$Result$Ok(5);
		case 'G':
			return $elm$core$Result$Ok(6);
		case 'H':
			return $elm$core$Result$Ok(7);
		case 'I':
			return $elm$core$Result$Ok(8);
		case 'J':
			return $elm$core$Result$Ok(9);
		case 'K':
			return $elm$core$Result$Ok(10);
		case 'L':
			return $elm$core$Result$Ok(11);
		case 'M':
			return $elm$core$Result$Ok(12);
		case 'N':
			return $elm$core$Result$Ok(13);
		case 'O':
			return $elm$core$Result$Ok(14);
		case 'P':
			return $elm$core$Result$Ok(15);
		case 'Q':
			return $elm$core$Result$Ok(16);
		case 'R':
			return $elm$core$Result$Ok(17);
		case 'S':
			return $elm$core$Result$Ok(18);
		case 'T':
			return $elm$core$Result$Ok(19);
		case 'U':
			return $elm$core$Result$Ok(20);
		case 'V':
			return $elm$core$Result$Ok(21);
		case 'W':
			return $elm$core$Result$Ok(22);
		case 'X':
			return $elm$core$Result$Ok(23);
		case 'Y':
			return $elm$core$Result$Ok(24);
		case 'Z':
			return $elm$core$Result$Ok(25);
		case 'a':
			return $elm$core$Result$Ok(26);
		case 'b':
			return $elm$core$Result$Ok(27);
		case 'c':
			return $elm$core$Result$Ok(28);
		case 'd':
			return $elm$core$Result$Ok(29);
		case 'e':
			return $elm$core$Result$Ok(30);
		case 'f':
			return $elm$core$Result$Ok(31);
		case 'g':
			return $elm$core$Result$Ok(32);
		case 'h':
			return $elm$core$Result$Ok(33);
		case 'i':
			return $elm$core$Result$Ok(34);
		case 'j':
			return $elm$core$Result$Ok(35);
		case 'k':
			return $elm$core$Result$Ok(36);
		case 'l':
			return $elm$core$Result$Ok(37);
		case 'm':
			return $elm$core$Result$Ok(38);
		case 'n':
			return $elm$core$Result$Ok(39);
		case 'o':
			return $elm$core$Result$Ok(40);
		case 'p':
			return $elm$core$Result$Ok(41);
		case 'q':
			return $elm$core$Result$Ok(42);
		case 'r':
			return $elm$core$Result$Ok(43);
		case 's':
			return $elm$core$Result$Ok(44);
		case 't':
			return $elm$core$Result$Ok(45);
		case 'u':
			return $elm$core$Result$Ok(46);
		case 'v':
			return $elm$core$Result$Ok(47);
		case 'w':
			return $elm$core$Result$Ok(48);
		case 'x':
			return $elm$core$Result$Ok(49);
		case 'y':
			return $elm$core$Result$Ok(50);
		case 'z':
			return $elm$core$Result$Ok(51);
		case '0':
			return $elm$core$Result$Ok(52);
		case '1':
			return $elm$core$Result$Ok(53);
		case '2':
			return $elm$core$Result$Ok(54);
		case '3':
			return $elm$core$Result$Ok(55);
		case '4':
			return $elm$core$Result$Ok(56);
		case '5':
			return $elm$core$Result$Ok(57);
		case '6':
			return $elm$core$Result$Ok(58);
		case '7':
			return $elm$core$Result$Ok(59);
		case '8':
			return $elm$core$Result$Ok(60);
		case '9':
			return $elm$core$Result$Ok(61);
		case '+':
			return $elm$core$Result$Ok(62);
		case '/':
			return $elm$core$Result$Ok(63);
		case '=':
			return $elm$core$Result$Ok(0);
		default:
			return $elm$core$Result$Err('Invalid character');
	}
};
var $waratuman$elm_coder$Base64$intToChar = function (_int) {
	switch (_int) {
		case 0:
			return $elm$core$Result$Ok(
				_Utils_chr('A'));
		case 1:
			return $elm$core$Result$Ok(
				_Utils_chr('B'));
		case 2:
			return $elm$core$Result$Ok(
				_Utils_chr('C'));
		case 3:
			return $elm$core$Result$Ok(
				_Utils_chr('D'));
		case 4:
			return $elm$core$Result$Ok(
				_Utils_chr('E'));
		case 5:
			return $elm$core$Result$Ok(
				_Utils_chr('F'));
		case 6:
			return $elm$core$Result$Ok(
				_Utils_chr('G'));
		case 7:
			return $elm$core$Result$Ok(
				_Utils_chr('H'));
		case 8:
			return $elm$core$Result$Ok(
				_Utils_chr('I'));
		case 9:
			return $elm$core$Result$Ok(
				_Utils_chr('J'));
		case 10:
			return $elm$core$Result$Ok(
				_Utils_chr('K'));
		case 11:
			return $elm$core$Result$Ok(
				_Utils_chr('L'));
		case 12:
			return $elm$core$Result$Ok(
				_Utils_chr('M'));
		case 13:
			return $elm$core$Result$Ok(
				_Utils_chr('N'));
		case 14:
			return $elm$core$Result$Ok(
				_Utils_chr('O'));
		case 15:
			return $elm$core$Result$Ok(
				_Utils_chr('P'));
		case 16:
			return $elm$core$Result$Ok(
				_Utils_chr('Q'));
		case 17:
			return $elm$core$Result$Ok(
				_Utils_chr('R'));
		case 18:
			return $elm$core$Result$Ok(
				_Utils_chr('S'));
		case 19:
			return $elm$core$Result$Ok(
				_Utils_chr('T'));
		case 20:
			return $elm$core$Result$Ok(
				_Utils_chr('U'));
		case 21:
			return $elm$core$Result$Ok(
				_Utils_chr('V'));
		case 22:
			return $elm$core$Result$Ok(
				_Utils_chr('W'));
		case 23:
			return $elm$core$Result$Ok(
				_Utils_chr('X'));
		case 24:
			return $elm$core$Result$Ok(
				_Utils_chr('Y'));
		case 25:
			return $elm$core$Result$Ok(
				_Utils_chr('Z'));
		case 26:
			return $elm$core$Result$Ok(
				_Utils_chr('a'));
		case 27:
			return $elm$core$Result$Ok(
				_Utils_chr('b'));
		case 28:
			return $elm$core$Result$Ok(
				_Utils_chr('c'));
		case 29:
			return $elm$core$Result$Ok(
				_Utils_chr('d'));
		case 30:
			return $elm$core$Result$Ok(
				_Utils_chr('e'));
		case 31:
			return $elm$core$Result$Ok(
				_Utils_chr('f'));
		case 32:
			return $elm$core$Result$Ok(
				_Utils_chr('g'));
		case 33:
			return $elm$core$Result$Ok(
				_Utils_chr('h'));
		case 34:
			return $elm$core$Result$Ok(
				_Utils_chr('i'));
		case 35:
			return $elm$core$Result$Ok(
				_Utils_chr('j'));
		case 36:
			return $elm$core$Result$Ok(
				_Utils_chr('k'));
		case 37:
			return $elm$core$Result$Ok(
				_Utils_chr('l'));
		case 38:
			return $elm$core$Result$Ok(
				_Utils_chr('m'));
		case 39:
			return $elm$core$Result$Ok(
				_Utils_chr('n'));
		case 40:
			return $elm$core$Result$Ok(
				_Utils_chr('o'));
		case 41:
			return $elm$core$Result$Ok(
				_Utils_chr('p'));
		case 42:
			return $elm$core$Result$Ok(
				_Utils_chr('q'));
		case 43:
			return $elm$core$Result$Ok(
				_Utils_chr('r'));
		case 44:
			return $elm$core$Result$Ok(
				_Utils_chr('s'));
		case 45:
			return $elm$core$Result$Ok(
				_Utils_chr('t'));
		case 46:
			return $elm$core$Result$Ok(
				_Utils_chr('u'));
		case 47:
			return $elm$core$Result$Ok(
				_Utils_chr('v'));
		case 48:
			return $elm$core$Result$Ok(
				_Utils_chr('w'));
		case 49:
			return $elm$core$Result$Ok(
				_Utils_chr('x'));
		case 50:
			return $elm$core$Result$Ok(
				_Utils_chr('y'));
		case 51:
			return $elm$core$Result$Ok(
				_Utils_chr('z'));
		case 52:
			return $elm$core$Result$Ok(
				_Utils_chr('0'));
		case 53:
			return $elm$core$Result$Ok(
				_Utils_chr('1'));
		case 54:
			return $elm$core$Result$Ok(
				_Utils_chr('2'));
		case 55:
			return $elm$core$Result$Ok(
				_Utils_chr('3'));
		case 56:
			return $elm$core$Result$Ok(
				_Utils_chr('4'));
		case 57:
			return $elm$core$Result$Ok(
				_Utils_chr('5'));
		case 58:
			return $elm$core$Result$Ok(
				_Utils_chr('6'));
		case 59:
			return $elm$core$Result$Ok(
				_Utils_chr('7'));
		case 60:
			return $elm$core$Result$Ok(
				_Utils_chr('8'));
		case 61:
			return $elm$core$Result$Ok(
				_Utils_chr('9'));
		case 62:
			return $elm$core$Result$Ok(
				_Utils_chr('+'));
		case 63:
			return $elm$core$Result$Ok(
				_Utils_chr('/'));
		default:
			var x = _int;
			return $elm$core$Result$Err(
				'Invalid byte value \"' + ($elm$core$String$fromInt(x) + '\" for base64'));
	}
};
var $waratuman$elm_coder$Base64$scheme = {charToInt: $waratuman$elm_coder$Base64$charToInt, chars: 4, intToChar: $waratuman$elm_coder$Base64$intToChar, octets: 3, padChar: '='};
var $waratuman$elm_coder$Base64$decode = $waratuman$elm_coder$Coder$decode($waratuman$elm_coder$Base64$scheme);
var $elm$core$String$words = _String_words;
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$base64Decoder = function (string) {
	return $waratuman$elm_coder$Base64$decode(
		$elm$core$String$concat(
			$elm$core$String$words(string)));
};
var $elm$core$String$append = _String_append;
var $elm$core$String$fromList = _String_fromList;
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $elm$core$Basics$pow = _Basics_pow;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $waratuman$elm_coder$Coder$encodeChunk = F2(
	function (scheme, chunk) {
		var octets = scheme.octets;
		var chars = scheme.chars;
		var padChar = scheme.padChar;
		var intToChar = scheme.intToChar;
		var charToInt = scheme.charToInt;
		var bits = $elm$core$Basics$floor((octets * 8) / chars);
		return A2(
			$elm$core$Result$map,
			$elm$core$String$fromList,
			$elm_community$result_extra$Result$Extra$combine(
				A2(
					$elm$core$List$map,
					function (i) {
						var start = i * bits;
						var end = start + bits;
						var b = $elm$core$Basics$floor((end - 1) / 8);
						var aShift = (_Utils_cmp(
							A2($elm$core$Basics$modBy, 8, start),
							8 - bits) < 0) ? (8 - A2($elm$core$Basics$modBy, 8, end)) : ((8 - bits) - A2($elm$core$Basics$modBy, 8, start));
						var a = $elm$core$Basics$floor(start / 8);
						var bShift = _Utils_eq(a, b) ? aShift : (8 - A2($elm$core$Basics$modBy, 8, end));
						var _byte = A2(
							$elm$core$Maybe$withDefault,
							0,
							A3(
								$elm$core$Maybe$map2,
								F2(
									function (x, y) {
										return (A2($elm$core$Basics$pow, 2, bits) - 1) & (((aShift < 0) ? (x << (-aShift)) : (x >>> aShift)) | (y >>> bShift));
									}),
								A2($elm_community$list_extra$List$Extra$getAt, a, chunk),
								A2($elm_community$list_extra$List$Extra$getAt, b, chunk)));
						return intToChar(_byte);
					},
					A2($elm$core$List$range, 0, chars - 1))));
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $waratuman$elm_coder$Coder$encode = F2(
	function (scheme, bytes) {
		var octets = scheme.octets;
		var chars = scheme.chars;
		var padChar = scheme.padChar;
		var intToChar = scheme.intToChar;
		var charToInt = scheme.charToInt;
		var n = $elm$core$Basics$ceiling(
			($elm$core$List$length(bytes) * chars) / octets);
		var p = (A2($elm$core$Basics$modBy, chars, n) > 0) ? (chars - A2($elm$core$Basics$modBy, chars, n)) : 0;
		var data = _Utils_ap(
			bytes,
			A2(
				$elm$core$List$repeat,
				(A2(
					$elm$core$Basics$modBy,
					octets,
					$elm$core$List$length(bytes)) > 0) ? (octets - A2(
					$elm$core$Basics$modBy,
					octets,
					$elm$core$List$length(bytes))) : 0,
				0));
		return A2(
			$elm$core$Result$map,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$String$join(''),
				A2(
					$elm$core$Basics$composeR,
					A2($elm$core$String$slice, 0, n),
					function (x) {
						return A2(
							$elm$core$String$append,
							x,
							A2($elm$core$String$repeat, p, padChar));
					})),
			$elm_community$result_extra$Result$Extra$combine(
				A2(
					$elm$core$List$map,
					$waratuman$elm_coder$Coder$encodeChunk(scheme),
					A2($elm_community$list_extra$List$Extra$groupsOf, octets, data))));
	});
var $waratuman$elm_coder$Base64$encode = $waratuman$elm_coder$Coder$encode($waratuman$elm_coder$Base64$scheme);
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$loop = function (lineLength) {
	return F2(
		function (tail, res) {
			return (_Utils_cmp(
				$elm$core$String$length(tail),
				lineLength) < 1) ? A2(
				$elm$core$String$join,
				'\n',
				$elm$core$List$reverse(
					A2($elm$core$List$cons, tail, res))) : A3(
				$billstclair$elm_crypto_string$Crypto$Strings$Encoding$loop,
				lineLength,
				A2($elm$core$String$dropLeft, lineLength, tail),
				A2(
					$elm$core$List$cons,
					A2($elm$core$String$left, lineLength, tail),
					res));
		});
};
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$splitLines = F2(
	function (lineLength, string) {
		return (lineLength <= 0) ? string : A3($billstclair$elm_crypto_string$Crypto$Strings$Encoding$loop, lineLength, string, _List_Nil);
	});
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$base64Encoder = F2(
	function (lineLength, list) {
		return A2(
			$elm$core$Result$withDefault,
			'',
			A2(
				$elm$core$Result$map,
				$billstclair$elm_crypto_string$Crypto$Strings$Encoding$splitLines(lineLength),
				$waratuman$elm_coder$Base64$encode(list)));
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$base64Encoding = function (lineLength) {
	return {
		decoder: $billstclair$elm_crypto_string$Crypto$Strings$Encoding$base64Decoder,
		encoder: $billstclair$elm_crypto_string$Crypto$Strings$Encoding$base64Encoder(lineLength),
		name: 'Base64 Encoding'
	};
};
var $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrAdjoiner = F2(
	function (state, list) {
		return A2(
			$elm$core$List$append,
			$elm$core$Array$toList(state.nonce),
			list);
	});
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
function $billstclair$elm_crypto_string$Crypto$Strings$Chaining$cyclic$loop() {
	return F2(
		function (idx, block_) {
			var _v0 = A2($elm$core$Array$get, idx, block_);
			if (_v0.$ === 'Nothing') {
				return block_;
			} else {
				var x = _v0.a;
				return (x === 255) ? A2(
					$billstclair$elm_crypto_string$Crypto$Strings$Chaining$cyclic$loop(),
					idx + 1,
					A3($elm$core$Array$set, idx, 0, block_)) : A3($elm$core$Array$set, idx, 1 + x, block_);
			}
		});
}
try {
	var $billstclair$elm_crypto_string$Crypto$Strings$Chaining$loop = $billstclair$elm_crypto_string$Crypto$Strings$Chaining$cyclic$loop();
	$billstclair$elm_crypto_string$Crypto$Strings$Chaining$cyclic$loop = function () {
		return $billstclair$elm_crypto_string$Crypto$Strings$Chaining$loop;
	};
} catch ($) {
	throw 'Some top-level definitions from `Crypto.Strings.Chaining` are causing infinite recursion:\n\n  ┌─────┐\n  │    loop\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $billstclair$elm_crypto_string$Crypto$Strings$Chaining$incrementBlock = function (block) {
	return A2($billstclair$elm_crypto_string$Crypto$Strings$Chaining$loop, 0, block);
};
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm_community$array_extra$Array$Extra$map2 = F3(
	function (combineAb, aArray, bArray) {
		return $elm$core$Array$fromList(
			A3(
				$elm$core$List$map2,
				combineAb,
				$elm$core$Array$toList(aArray),
				$elm$core$Array$toList(bArray)));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrChainer = F4(
	function (state, _v0, key, block) {
		var encryptor = _v0.a;
		var counter = state.counter;
		var input = A3($elm_community$array_extra$Array$Extra$map2, $elm$core$Bitwise$xor, state.nonce, counter);
		var output = A2(encryptor, key, input);
		var ciphertext = A3($elm_community$array_extra$Array$Extra$map2, $elm$core$Bitwise$xor, output, block);
		return _Utils_Tuple2(
			ciphertext,
			_Utils_update(
				state,
				{
					counter: $billstclair$elm_crypto_string$Crypto$Strings$Chaining$incrementBlock(counter)
				}));
	});
var $elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			$elm$core$Array$initialize,
			n,
			function (_v0) {
				return e;
			});
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrInitializer = F2(
	function (generator, blockSize) {
		var _v0 = generator(blockSize);
		var nonce = _v0.a;
		var randomState = _v0.b;
		return _Utils_Tuple2(
			{
				counter: A2($elm$core$Array$repeat, blockSize, 0),
				nonce: nonce
			},
			randomState);
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrSeparator = F2(
	function (blockSize, list) {
		return _Utils_Tuple2(
			A2($elm$core$List$drop, blockSize, list),
			{
				counter: A2($elm$core$Array$repeat, blockSize, 0),
				nonce: $elm$core$Array$fromList(
					A2($elm$core$List$take, blockSize, list))
			});
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrChaining = {adjoiner: $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrAdjoiner, decryptor: $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrChainer, encryptor: $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrChainer, initializer: $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrInitializer, name: 'Counter Chaining', separator: $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrSeparator};
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte = function (x) {
	return (x >> 8) & 255;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte = function (x) {
	return x & 255;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$makeBytesFromWord = F3(
	function (word, offset, array) {
		return A3(
			$elm$core$Array$set,
			offset,
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(word),
			A3(
				$elm$core$Array$set,
				offset + 1,
				$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(word),
				array));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$fillByteArrayFromWords = function (words) {
	var out = A2(
		$elm$core$Array$repeat,
		2 * $elm$core$List$length(words),
		0);
	var f = F2(
		function (word, _v1) {
			var idx = _v1.a;
			var r = _v1.b;
			return _Utils_Tuple2(
				idx + 2,
				A3($billstclair$elm_crypto_aes$Crypto$AES$Utility$makeBytesFromWord, word, idx, r));
		});
	var _v0 = A3(
		$elm$core$List$foldl,
		f,
		_Utils_Tuple2(0, out),
		words);
	var res = _v0.b;
	return res;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Block$fillByteArrayFromFourPairs = function (ws) {
	var _v0 = ws;
	var _v1 = _v0.a;
	var _v2 = _v1.a;
	var w0h = _v2.a;
	var w0l = _v2.b;
	var _v3 = _v1.b;
	var w1h = _v3.a;
	var w1l = _v3.b;
	var _v4 = _v0.b;
	var _v5 = _v4.a;
	var w2h = _v5.a;
	var w2l = _v5.b;
	var _v6 = _v4.b;
	var w3h = _v6.a;
	var w3l = _v6.b;
	return $billstclair$elm_crypto_aes$Crypto$AES$Utility$fillByteArrayFromWords(
		_List_fromArray(
			[w0h, w0l, w1h, w1l, w2h, w2l, w3h, w3l]));
};
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$get = F2(
	function (idx, array) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Array$get, idx, array));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$makeword = F2(
	function (hi, lo) {
		return (hi << 8) + lo;
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$makeWordFromByteArray = F2(
	function (offset, array) {
		return A2(
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$makeword,
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, offset, array),
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, offset + 1, array));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Block$loadKeys = F2(
	function (ina, keys) {
		var getOne = function (idx) {
			return A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$makeWordFromByteArray, 2 * idx, ina) ^ A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, idx, keys);
		};
		var f = F2(
			function (idx, res) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						getOne(idx),
						getOne(idx + 1)),
					res);
			});
		var list = A3(
			$elm$core$List$foldr,
			f,
			_List_Nil,
			_List_fromArray(
				[0, 2, 4, 6]));
		if ((((list.b && list.b.b) && list.b.b.b) && list.b.b.b.b) && (!list.b.b.b.b.b)) {
			var a = list.a;
			var _v1 = list.b;
			var b = _v1.a;
			var _v2 = _v1.b;
			var c = _v2.a;
			var _v3 = _v2.b;
			var d = _v3.a;
			return _Utils_Tuple2(
				_Utils_Tuple2(a, b),
				_Utils_Tuple2(c, d));
		} else {
			return _Utils_Tuple2(
				_Utils_Tuple2(
					_Utils_Tuple2(0, 0),
					_Utils_Tuple2(0, 0)),
				_Utils_Tuple2(
					_Utils_Tuple2(0, 0),
					_Utils_Tuple2(0, 0)));
		}
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Block$cryptor = F5(
	function (keyGetter, round, lastRound, keys, ina) {
		var numRounds = keys.numRounds;
		var keya = keyGetter(keys);
		var loop = F3(
			function (i, rkix, ws) {
				return (_Utils_cmp(i, numRounds) > -1) ? ws : A3(
					loop,
					1 + i,
					8 + rkix,
					A3(round, keya, rkix, ws));
			});
		return $billstclair$elm_crypto_aes$Crypto$AES$Block$fillByteArrayFromFourPairs(
			A3(
				lastRound,
				keya,
				8 * numRounds,
				A3(
					loop,
					1,
					8,
					A2($billstclair$elm_crypto_aes$Crypto$AES$Block$loadKeys, ina, keya))));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep = F3(
	function (sb, _v0, _v1) {
		var rkh = _v0.a;
		var rkl = _v0.b;
		var _v2 = _v1.a;
		var b0 = _v2.a;
		var b1 = _v2.b;
		var _v3 = _v1.b;
		var b2 = _v3.a;
		var b3 = _v3.b;
		return _Utils_Tuple2(
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, b1, sb) ^ ((A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, b0, sb) << 8) ^ rkh),
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, b3, sb) ^ ((A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, b2, sb) << 8) ^ rkl));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$table = function (lists) {
	return $elm$core$Array$fromList(
		$elm$core$List$concat(lists));
};
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$rsb_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$table(
	_List_fromArray(
		[
			_List_fromArray(
			[82, 9, 106, 213, 48, 54, 165, 56]),
			_List_fromArray(
			[191, 64, 163, 158, 129, 243, 215, 251]),
			_List_fromArray(
			[124, 227, 57, 130, 155, 47, 255, 135]),
			_List_fromArray(
			[52, 142, 67, 68, 196, 222, 233, 203]),
			_List_fromArray(
			[84, 123, 148, 50, 166, 194, 35, 61]),
			_List_fromArray(
			[238, 76, 149, 11, 66, 250, 195, 78]),
			_List_fromArray(
			[8, 46, 161, 102, 40, 217, 36, 178]),
			_List_fromArray(
			[118, 91, 162, 73, 109, 139, 209, 37]),
			_List_fromArray(
			[114, 248, 246, 100, 134, 104, 152, 22]),
			_List_fromArray(
			[212, 164, 92, 204, 93, 101, 182, 146]),
			_List_fromArray(
			[108, 112, 72, 80, 253, 237, 185, 218]),
			_List_fromArray(
			[94, 21, 70, 87, 167, 141, 157, 132]),
			_List_fromArray(
			[144, 216, 171, 0, 140, 188, 211, 10]),
			_List_fromArray(
			[247, 228, 88, 5, 184, 179, 69, 6]),
			_List_fromArray(
			[208, 44, 30, 143, 202, 63, 15, 2]),
			_List_fromArray(
			[193, 175, 189, 3, 1, 19, 138, 107]),
			_List_fromArray(
			[58, 145, 17, 65, 79, 103, 220, 234]),
			_List_fromArray(
			[151, 242, 207, 206, 240, 180, 230, 115]),
			_List_fromArray(
			[150, 172, 116, 34, 231, 173, 53, 133]),
			_List_fromArray(
			[226, 249, 55, 232, 28, 117, 223, 110]),
			_List_fromArray(
			[71, 241, 26, 113, 29, 41, 197, 137]),
			_List_fromArray(
			[111, 183, 98, 14, 170, 24, 190, 27]),
			_List_fromArray(
			[252, 86, 62, 75, 198, 210, 121, 32]),
			_List_fromArray(
			[154, 219, 192, 254, 120, 205, 90, 244]),
			_List_fromArray(
			[31, 221, 168, 51, 136, 7, 199, 49]),
			_List_fromArray(
			[177, 18, 16, 89, 39, 128, 236, 95]),
			_List_fromArray(
			[96, 81, 127, 169, 25, 181, 74, 13]),
			_List_fromArray(
			[45, 229, 122, 159, 147, 201, 156, 239]),
			_List_fromArray(
			[160, 224, 59, 77, 174, 42, 245, 176]),
			_List_fromArray(
			[200, 235, 187, 60, 131, 83, 153, 97]),
			_List_fromArray(
			[23, 43, 4, 126, 186, 119, 214, 38]),
			_List_fromArray(
			[225, 105, 20, 99, 85, 33, 12, 125])
		]));
var $billstclair$elm_crypto_aes$Crypto$AES$Block$lastRRound = F3(
	function (keys, rkix, ws) {
		var _v0 = ws;
		var _v1 = _v0.a;
		var _v2 = _v1.a;
		var w0h = _v2.a;
		var w0l = _v2.b;
		var _v3 = _v1.b;
		var w1h = _v3.a;
		var w1l = _v3.b;
		var _v4 = _v0.b;
		var _v5 = _v4.a;
		var w2h = _v5.a;
		var w2l = _v5.b;
		var _v6 = _v4.b;
		var w3h = _v6.a;
		var w3l = _v6.b;
		var x0 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$rsb_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w0h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w3h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w2l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w1l))));
		var x3 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$rsb_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 6 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 7 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w3h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w2h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w1l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w0l))));
		var x1 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$rsb_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 2 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 3 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w1h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w0h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w3l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w2l))));
		var x2 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$rsb_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 4 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 5 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w2h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w1h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w0l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w3l))));
		return _Utils_Tuple2(
			_Utils_Tuple2(x0, x1),
			_Utils_Tuple2(x2, x3));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep = F3(
	function (_v0, _v3, _v4) {
		var _v1 = _v0.a;
		var t0 = _v1.a;
		var t1 = _v1.b;
		var _v2 = _v0.b;
		var t2 = _v2.a;
		var t3 = _v2.b;
		var rkh = _v3.a;
		var rkl = _v3.b;
		var _v5 = _v4.a;
		var b0 = _v5.a;
		var b1 = _v5.b;
		var _v6 = _v4.b;
		var b2 = _v6.a;
		var b3 = _v6.b;
		var g3 = 2 * b3;
		var g2 = 2 * b2;
		var g1 = 2 * b1;
		var g0 = 2 * b0;
		return _Utils_Tuple2(
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, g3, t3) ^ (A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, g2, t2) ^ (A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, g1, t1) ^ (A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, g0, t0) ^ rkh))),
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + g3, t3) ^ (A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + g2, t2) ^ (A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + g1, t1) ^ (A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + g0, t0) ^ rkl))));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$zero00 = 0;
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$rt0_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$table(
	_List_fromArray(
		[
			_List_fromArray(
			[20980, 42832, 32321, 25939, 6679, 42179, 14887, 24214]),
			_List_fromArray(
			[15275, 27595, 8093, 17905, 44282, 22699, 19427, 915]),
			_List_fromArray(
			[8240, 64085, 44406, 28150, 35020, 30353, 62722, 19493]),
			_List_fromArray(
			[20453, 55292, 50474, 52183, 9781, 17536, 46434, 41871]),
			_List_fromArray(
			[57009, 23113, 9658, 7015, 17898, 3736, 24062, 49377]),
			_List_fromArray(
			[49967, 29954, 33100, 61458, 36166, 38819, 27603, 63942]),
			_List_fromArray(
			[911, 24551, 5522, 40085, 49005, 31467, 38226, 23002]),
			_List_fromArray(
			[54462, 33581, 22644, 8659, 18912, 26921, 36553, 51268]),
			_List_fromArray(
			[30146, 35178, 62606, 31096, 39256, 15979, 10169, 29149]),
			_List_fromArray(
			[48865, 20406, 61576, 44311, 51488, 44134, 32206, 15028]),
			_List_fromArray(
			[25567, 18968, 58650, 12674, 38737, 13152, 25171, 32581]),
			_List_fromArray(
			[45412, 30688, 47979, 44676, 65153, 40988, 63752, 11156]),
			_List_fromArray(
			[28744, 26712, 36677, 64793, 38110, 27783, 21115, 63671]),
			_List_fromArray(
			[43891, 54051, 29259, 738, 58143, 36695, 26197, 43818]),
			_List_fromArray(
			[45803, 10247, 12213, 49667, 34501, 31642, 54071, 2213]),
			_List_fromArray(
			[12328, 34802, 9151, 42418, 515, 27322, 60694, 33372]),
			_List_fromArray(
			[35535, 7211, 42873, 46226, 62215, 62192, 20073, 58017]),
			_List_fromArray(
			[26074, 62669, 1541, 48853, 53556, 25119, 50342, 65162]),
			_List_fromArray(
			[13358, 21405, 41715, 21920, 1418, 57650, 42230, 60277]),
			_List_fromArray(
			[2947, 60473, 16480, 61354, 24177, 40710, 48494, 4177]),
			_List_fromArray(
			[15905, 35577, 38621, 1597, 56638, 1454, 19942, 48454]),
			_List_fromArray(
			[37204, 36277, 29124, 23813, 1030, 54383, 24656, 5631]),
			_List_fromArray(
			[6552, 64292, 54973, 59799, 35136, 17356, 26585, 40567]),
			_List_fromArray(
			[45288, 17085, 1929, 35720, 59161, 23352, 31176, 61147]),
			_List_fromArray(
			[41340, 2631, 31810, 4073, 63620, 7881, $billstclair$elm_crypto_aes$Crypto$AES$Tables$zero00, $billstclair$elm_crypto_aes$Crypto$AES$Tables$zero00]),
			_List_fromArray(
			[2432, 34435, 12843, 60744, 7697, 28844, 27738, 29262]),
			_List_fromArray(
			[64782, 65531, 3973, 14422, 15790, 54558, 13869, 14631]),
			_List_fromArray(
			[2575, 55652, 26716, 42529, 39771, 21713, 9270, 11834]),
			_List_fromArray(
			[3082, 26545, 37719, 59151, 46318, 38610, 7067, 37278]),
			_List_fromArray(
			[32960, 50511, 25052, 8354, 23159, 19305, 7186, 6678]),
			_List_fromArray(
			[58003, 47626, 49312, 10981, 15394, 57411, 4635, 5917]),
			_List_fromArray(
			[3593, 3339, 62091, 51117, 11702, 43193, 5150, 43464]),
			_List_fromArray(
			[22513, 6533, 44917, 1868, 61081, 56763, 41855, 24829]),
			_List_fromArray(
			[63233, 9887, 23666, 62908, 17510, 15301, 23547, 32308]),
			_List_fromArray(
			[35651, 10614, 52003, 50908, 46829, 64616, 47332, 61795]),
			_List_fromArray(
			[55089, 56522, 16995, 34064, 5015, 8768, 33990, 4384]),
			_List_fromArray(
			[34122, 9341, 53947, 15864, 44793, 12817, 50985, 41325]),
			_List_fromArray(
			[7582, 12107, 56498, 12531, 3462, 21228, 30657, 58320]),
			_List_fromArray(
			[11187, 5740, 43376, 47513, 4500, 18682, 18409, 25634]),
			_List_fromArray(
			[43260, 36036, 41200, 16154, 22141, 11480, 8755, 37103]),
			_List_fromArray(
			[34633, 20167, 55608, 53697, 36042, 41726, 39124, 2870]),
			_List_fromArray(
			[42741, 33231, 42362, 56872, 55991, 36390, 16301, 49060]),
			_List_fromArray(
			[11322, 40420, 20600, 37389, 27231, 52379, 21630, 18018]),
			_List_fromArray(
			[63117, 5058, 37080, 47336, 11833, 63326, 33475, 45045]),
			_List_fromArray(
			[40797, 32958, 27088, 37756, 28629, 11689, 53029, 4787]),
			_List_fromArray(
			[51372, 39227, 4120, 32167, 59548, 25454, 56123, 47995]),
			_List_fromArray(
			[52518, 30729, 28249, 6388, 60570, 46849, 33615, 39592]),
			_List_fromArray(
			[59029, 28261, 43775, 59006, 8636, 53000, 61205, 59622]),
			_List_fromArray(
			[47847, 39897, 19055, 14030, 60063, 2516, 10672, 31958]),
			_List_fromArray(
			[12708, 45743, 10815, 9009, 50853, 37936, 13730, 26304]),
			_List_fromArray(
			[29774, 48183, 64642, 51878, 57488, 53424, 13223, 55317]),
			_List_fromArray(
			[61700, 38986, 16876, 56055, 32717, 20494, 6033, 63023]),
			_List_fromArray(
			[30285, 54925, 17391, 45133, 52394, 19796, 58518, 1247]),
			_List_fromArray(
			[40657, 46563, 19562, 34843, 49452, 8120, 18021, 20863]),
			_List_fromArray(
			[40286, 59908, 396, 13661, 64135, 29811, 64267, 16686]),
			_List_fromArray(
			[45927, 7514, 37595, 53842, 59664, 22067, 28118, 18195]),
			_List_fromArray(
			[39639, 24972, 14241, 3194, 23032, 5262, 60179, 15497]),
			_List_fromArray(
			[52905, 10222, 46945, 51509, 57628, 58861, 31303, 45372]),
			_List_fromArray(
			[40146, 57177, 22002, 29503, 6164, 52857, 29639, 14271]),
			_List_fromArray(
			[21495, 52714, 24573, 43611, 57149, 28436, 30788, 56198]),
			_List_fromArray(
			[51887, 62337, 47464, 50238, 14372, 13356, 49827, 16479]),
			_List_fromArray(
			[5661, 50034, 48354, 9484, 10300, 18827, 65293, 38209]),
			_List_fromArray(
			[14760, 369, 2060, 46046, 55476, 58524, 25686, 49552]),
			_List_fromArray(
			[31691, 33889, 54578, 46704, 18540, 23668, 53432, 22338])
		]));
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$arrayRotatePairsRight = function (gin) {
	var gnumWords = $elm$core$Array$length(gin);
	var loop = F2(
		function (gi, res) {
			loop:
			while (true) {
				if (_Utils_cmp(gi, gnumWords) > -1) {
					return res;
				} else {
					var gw1 = A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, gi, gin);
					var gw0 = A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, gi + 1, gin);
					var gout = A3(
						$elm$core$Array$set,
						gi,
						A2(
							$billstclair$elm_crypto_aes$Crypto$AES$Utility$makeword,
							$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(gw0),
							$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(gw1)),
						A3(
							$elm$core$Array$set,
							gi + 1,
							A2(
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$makeword,
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(gw1),
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(gw0)),
							res));
					var $temp$gi = gi + 2,
						$temp$res = gout;
					gi = $temp$gi;
					res = $temp$res;
					continue loop;
				}
			}
		});
	return A2(
		loop,
		0,
		A2($elm$core$Array$repeat, gnumWords, 0));
};
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$rt1_ = $billstclair$elm_crypto_aes$Crypto$AES$Utility$arrayRotatePairsRight($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt0_);
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$rt2_ = $billstclair$elm_crypto_aes$Crypto$AES$Utility$arrayRotatePairsRight($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt1_);
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$rt3_ = $billstclair$elm_crypto_aes$Crypto$AES$Utility$arrayRotatePairsRight($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt2_);
var $billstclair$elm_crypto_aes$Crypto$AES$Block$rts_ = _Utils_Tuple2(
	_Utils_Tuple2($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt0_, $billstclair$elm_crypto_aes$Crypto$AES$Tables$rt1_),
	_Utils_Tuple2($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt2_, $billstclair$elm_crypto_aes$Crypto$AES$Tables$rt3_));
var $billstclair$elm_crypto_aes$Crypto$AES$Block$rRound = F3(
	function (keys, rkix, ws) {
		var _v0 = ws;
		var _v1 = _v0.a;
		var _v2 = _v1.a;
		var w0h = _v2.a;
		var w0l = _v2.b;
		var _v3 = _v1.b;
		var w1h = _v3.a;
		var w1l = _v3.b;
		var _v4 = _v0.b;
		var _v5 = _v4.a;
		var w2h = _v5.a;
		var w2l = _v5.b;
		var _v6 = _v4.b;
		var w3h = _v6.a;
		var w3l = _v6.b;
		var x0 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Block$rts_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w0h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w3h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w2l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w1l))));
		var x3 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Block$rts_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 6 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 7 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w3h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w2h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w1l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w0l))));
		var x1 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Block$rts_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 2 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 3 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w1h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w0h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w3l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w2l))));
		var x2 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Block$rts_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 4 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 5 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w2h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w1h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w0l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w3l))));
		return _Utils_Tuple2(
			_Utils_Tuple2(x0, x1),
			_Utils_Tuple2(x2, x3));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Block$decrypt = A3(
	$billstclair$elm_crypto_aes$Crypto$AES$Block$cryptor,
	function ($) {
		return $.reverseKey;
	},
	$billstclair$elm_crypto_aes$Crypto$AES$Block$rRound,
	$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRRound);
var $billstclair$elm_crypto_aes$Crypto$AES$decrypt = F2(
	function (_v0, a) {
		var keys = _v0.a;
		return A2($billstclair$elm_crypto_aes$Crypto$AES$Block$decrypt, keys, a);
	});
var $billstclair$elm_crypto_string$Crypto$Strings$BlockAes$decrypt = F2(
	function (keys, block) {
		return A2($billstclair$elm_crypto_aes$Crypto$AES$decrypt, keys, block);
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$ft0_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$table(
	_List_fromArray(
		[
			_List_fromArray(
			[50787, 25509, 63612, 31876, 61047, 30617, 63099, 31629]),
			_List_fromArray(
			[65522, 61965, 54891, 27581, 56943, 28593, 37317, 50516]),
			_List_fromArray(
			[24624, 12368, 513, 259, 52839, 26537, 22059, 11133]),
			_List_fromArray(
			[59390, 65049, 46551, 55138, 19883, 44006, 60534, 30362]),
			_List_fromArray(
			[36810, 51781, 8066, 33437, 35273, 51520, 64125, 32135]),
			_List_fromArray(
			[61434, 64021, 45657, 23019, 36423, 18377, 64496, 61451]),
			_List_fromArray(
			[16813, 44524, 46036, 54375, 24482, 41725, 17839, 45034]),
			_List_fromArray(
			[9116, 40127, 21412, 42231, 58482, 29334, 39872, 49243]),
			_List_fromArray(
			[30135, 47042, 57853, 64796, 15763, 37806, 19494, 9834]),
			_List_fromArray(
			[27702, 13914, 32319, 16193, 62967, 63234, 33740, 52303]),
			_List_fromArray(
			[26676, 13404, 20901, 42484, 53733, 58676, 63985, 61704]),
			_List_fromArray(
			[57969, 29075, 43992, 55411, 25137, 12627, 10773, 5439]),
			_List_fromArray(
			[2052, 1036, 38343, 51026, 17955, 9061, 40387, 50014]),
			_List_fromArray(
			[12312, 6184, 14230, 38561, 2565, 1295, 12186, 39605]),
			_List_fromArray(
			[3591, 1801, 9234, 4662, 7040, 32923, 57314, 57917]),
			_List_fromArray(
			[52715, 60198, 20007, 10089, 32690, 45773, 60021, 30111]),
			_List_fromArray(
			[4617, 2331, 7555, 33694, 22572, 11380, 13338, 6702]),
			_List_fromArray(
			[13851, 6957, 56430, 28338, 46170, 23278, 23456, 41211]),
			_List_fromArray(
			[42066, 21238, 30267, 15181, 47062, 54881, 32179, 46030]),
			_List_fromArray(
			[21033, 10619, 56803, 58174, 24111, 12145, 4996, 33943]),
			_List_fromArray(
			[42579, 21493, 47569, 53608, $billstclair$elm_crypto_aes$Crypto$AES$Tables$zero00, $billstclair$elm_crypto_aes$Crypto$AES$Tables$zero00, 49645, 60716]),
			_List_fromArray(
			[16416, 8288, 58364, 64543, 31153, 45512, 46683, 23533]),
			_List_fromArray(
			[54378, 27326, 36299, 52038, 26558, 48857, 29241, 14667]),
			_List_fromArray(
			[37962, 19166, 38988, 19668, 45144, 22760, 34255, 53066]),
			_List_fromArray(
			[48080, 53355, 50671, 61226, 20394, 43749, 60923, 64278]),
			_List_fromArray(
			[34371, 17349, 39501, 19927, 26163, 13141, 4485, 34196]),
			_List_fromArray(
			[35397, 17871, 59897, 63760, 1026, 518, 65151, 32641]),
			_List_fromArray(
			[41040, 20720, 30780, 15428, 9631, 40890, 19368, 43235]),
			_List_fromArray(
			[41553, 20979, 23971, 41982, 32832, 16576, 1423, 36746]),
			_List_fromArray(
			[16274, 37549, 8605, 40380, 28728, 14408, 61941, 62724]),
			_List_fromArray(
			[25532, 48351, 30646, 46785, 45018, 55925, 16929, 8547]),
			_List_fromArray(
			[8208, 4144, 58879, 65306, 65011, 62222, 49106, 53869]),
			_List_fromArray(
			[33229, 52556, 6156, 3092, 9747, 4917, 50156, 60463]),
			_List_fromArray(
			[48735, 24545, 13719, 38818, 34884, 17612, 11799, 5945]),
			_List_fromArray(
			[37828, 50263, 21927, 42994, 64638, 32386, 31293, 15687]),
			_List_fromArray(
			[51300, 25772, 47709, 24039, 12825, 6443, 58995, 29589]),
			_List_fromArray(
			[49248, 24736, 6529, 33176, 40527, 20433, 41948, 56447]),
			_List_fromArray(
			[17442, 8806, 21546, 10878, 15248, 37035, 2952, 34947]),
			_List_fromArray(
			[35910, 18122, 51182, 60969, 27576, 47315, 10260, 5180]),
			_List_fromArray(
			[42974, 56953, 48222, 24290, 5643, 2845, 44507, 56182]),
			_List_fromArray(
			[56288, 57403, 25650, 12886, 29754, 14926, 5130, 2590]),
			_List_fromArray(
			[37449, 18907, 3078, 1546, 18468, 9324, 47196, 23780]),
			_List_fromArray(
			[40898, 49757, 48595, 54126, 17324, 44271, 50274, 25254]),
			_List_fromArray(
			[14737, 37288, 12693, 38308, 54244, 58423, 62073, 31115]),
			_List_fromArray(
			[54759, 59186, 35784, 51267, 28215, 14169, 55917, 28087]),
			_List_fromArray(
			[397, 36236, 45525, 54628, 40014, 20178, 18857, 43488]),
			_List_fromArray(
			[55404, 27828, 44118, 22266, 62452, 62471, 53226, 59941]),
			_List_fromArray(
			[51813, 26031, 62586, 31374, 18350, 44777, 4104, 2072]),
			_List_fromArray(
			[28602, 47829, 61560, 30856, 18981, 9583, 23598, 11890]),
			_List_fromArray(
			[14364, 7204, 22438, 42737, 29620, 46279, 38854, 50769]),
			_List_fromArray(
			[52200, 59427, 41437, 56700, 59508, 29852, 15903, 7969]),
			_List_fromArray(
			[38475, 19421, 25021, 48604, 3467, 35718, 3978, 35461]),
			_List_fromArray(
			[57456, 28816, 31806, 15938, 29109, 46532, 52326, 26282]),
			_List_fromArray(
			[36936, 18648, 1539, 773, 63478, 62977, 7182, 3602]),
			_List_fromArray(
			[49761, 24995, 27189, 13663, 44631, 22521, 27065, 47568]),
			_List_fromArray(
			[6022, 34449, 39361, 49496, 14877, 7463, 10142, 40633]),
			_List_fromArray(
			[55777, 57656, 60408, 63507, 11160, 39091, 8721, 4403]),
			_List_fromArray(
			[53865, 27067, 43481, 55664, 1934, 36489, 13204, 38055]),
			_List_fromArray(
			[11675, 39862, 15390, 7714, 5511, 34706, 51689, 59680]),
			_List_fromArray(
			[34766, 52809, 43605, 22015, 20520, 10360, 42463, 57210]),
			_List_fromArray(
			[908, 35983, 22945, 41464, 2441, 35200, 6669, 3351]),
			_List_fromArray(
			[26047, 49114, 55270, 58929, 33858, 17094, 53352, 26808]),
			_List_fromArray(
			[33345, 16835, 10649, 39344, 23085, 11639, 7695, 3857]),
			_List_fromArray(
			[31664, 45259, 43092, 21756, 28091, 48086, 11286, 5690])
		]));
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$ft1_ = $billstclair$elm_crypto_aes$Crypto$AES$Utility$arrayRotatePairsRight($billstclair$elm_crypto_aes$Crypto$AES$Tables$ft0_);
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$ft2_ = $billstclair$elm_crypto_aes$Crypto$AES$Utility$arrayRotatePairsRight($billstclair$elm_crypto_aes$Crypto$AES$Tables$ft1_);
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$ft3_ = $billstclair$elm_crypto_aes$Crypto$AES$Utility$arrayRotatePairsRight($billstclair$elm_crypto_aes$Crypto$AES$Tables$ft2_);
var $billstclair$elm_crypto_aes$Crypto$AES$Block$fts_ = _Utils_Tuple2(
	_Utils_Tuple2($billstclair$elm_crypto_aes$Crypto$AES$Tables$ft0_, $billstclair$elm_crypto_aes$Crypto$AES$Tables$ft1_),
	_Utils_Tuple2($billstclair$elm_crypto_aes$Crypto$AES$Tables$ft2_, $billstclair$elm_crypto_aes$Crypto$AES$Tables$ft3_));
var $billstclair$elm_crypto_aes$Crypto$AES$Block$fRound = F3(
	function (keys, rkix, ws) {
		var _v0 = ws;
		var _v1 = _v0.a;
		var _v2 = _v1.a;
		var w0h = _v2.a;
		var w0l = _v2.b;
		var _v3 = _v1.b;
		var w1h = _v3.a;
		var w1l = _v3.b;
		var _v4 = _v0.b;
		var _v5 = _v4.a;
		var w2h = _v5.a;
		var w2l = _v5.b;
		var _v6 = _v4.b;
		var w3h = _v6.a;
		var w3l = _v6.b;
		var x2 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Block$fts_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 4 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 5 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w2h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w3h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w0l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w1l))));
		var x3 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Block$fts_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 6 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 7 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w3h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w0h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w1l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w2l))));
		var x0 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Block$fts_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w0h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w1h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w2l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w3l))));
		var x1 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$roundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Block$fts_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 2 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 3 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w1h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w2h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w3l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w0l))));
		return _Utils_Tuple2(
			_Utils_Tuple2(x0, x1),
			_Utils_Tuple2(x2, x3));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$table(
	_List_fromArray(
		[
			_List_fromArray(
			[99, 124, 119, 123, 242, 107, 111, 197]),
			_List_fromArray(
			[48, 1, 103, 43, 254, 215, 171, 118]),
			_List_fromArray(
			[202, 130, 201, 125, 250, 89, 71, 240]),
			_List_fromArray(
			[173, 212, 162, 175, 156, 164, 114, 192]),
			_List_fromArray(
			[183, 253, 147, 38, 54, 63, 247, 204]),
			_List_fromArray(
			[52, 165, 229, 241, 113, 216, 49, 21]),
			_List_fromArray(
			[4, 199, 35, 195, 24, 150, 5, 154]),
			_List_fromArray(
			[7, 18, 128, 226, 235, 39, 178, 117]),
			_List_fromArray(
			[9, 131, 44, 26, 27, 110, 90, 160]),
			_List_fromArray(
			[82, 59, 214, 179, 41, 227, 47, 132]),
			_List_fromArray(
			[83, 209, 0, 237, 32, 252, 177, 91]),
			_List_fromArray(
			[106, 203, 190, 57, 74, 76, 88, 207]),
			_List_fromArray(
			[208, 239, 170, 251, 67, 77, 51, 133]),
			_List_fromArray(
			[69, 249, 2, 127, 80, 60, 159, 168]),
			_List_fromArray(
			[81, 163, 64, 143, 146, 157, 56, 245]),
			_List_fromArray(
			[188, 182, 218, 33, 16, 255, 243, 210]),
			_List_fromArray(
			[205, 12, 19, 236, 95, 151, 68, 23]),
			_List_fromArray(
			[196, 167, 126, 61, 100, 93, 25, 115]),
			_List_fromArray(
			[96, 129, 79, 220, 34, 42, 144, 136]),
			_List_fromArray(
			[70, 238, 184, 20, 222, 94, 11, 219]),
			_List_fromArray(
			[224, 50, 58, 10, 73, 6, 36, 92]),
			_List_fromArray(
			[194, 211, 172, 98, 145, 149, 228, 121]),
			_List_fromArray(
			[231, 200, 55, 109, 141, 213, 78, 169]),
			_List_fromArray(
			[108, 86, 244, 234, 101, 122, 174, 8]),
			_List_fromArray(
			[186, 120, 37, 46, 28, 166, 180, 198]),
			_List_fromArray(
			[232, 221, 116, 31, 75, 189, 139, 138]),
			_List_fromArray(
			[112, 62, 181, 102, 72, 3, 246, 14]),
			_List_fromArray(
			[97, 53, 87, 185, 134, 193, 29, 158]),
			_List_fromArray(
			[225, 248, 152, 17, 105, 217, 142, 148]),
			_List_fromArray(
			[155, 30, 135, 233, 206, 85, 40, 223]),
			_List_fromArray(
			[140, 161, 137, 13, 191, 230, 66, 104]),
			_List_fromArray(
			[65, 153, 45, 15, 176, 84, 187, 22])
		]));
var $billstclair$elm_crypto_aes$Crypto$AES$Block$lastFRound = F3(
	function (keys, rkix, ws) {
		var _v0 = ws;
		var _v1 = _v0.a;
		var _v2 = _v1.a;
		var w0h = _v2.a;
		var w0l = _v2.b;
		var _v3 = _v1.b;
		var w1h = _v3.a;
		var w1l = _v3.b;
		var _v4 = _v0.b;
		var _v5 = _v4.a;
		var w2h = _v5.a;
		var w2l = _v5.b;
		var _v6 = _v4.b;
		var w3h = _v6.a;
		var w3l = _v6.b;
		var x2 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 4 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 5 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w2h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w3h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w0l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w1l))));
		var x3 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 6 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 7 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w3h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w0h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w1l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w2l))));
		var x0 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w0h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w1h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w2l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w3l))));
		var x1 = A3(
			$billstclair$elm_crypto_aes$Crypto$AES$Block$lastRoundStep,
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_,
			_Utils_Tuple2(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 2 + rkix, keys),
				A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 3 + rkix, keys)),
			_Utils_Tuple2(
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w1h),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w2h)),
				_Utils_Tuple2(
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte(w3l),
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte(w0l))));
		return _Utils_Tuple2(
			_Utils_Tuple2(x0, x1),
			_Utils_Tuple2(x2, x3));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Block$encrypt = A3(
	$billstclair$elm_crypto_aes$Crypto$AES$Block$cryptor,
	function ($) {
		return $.forwardKey;
	},
	$billstclair$elm_crypto_aes$Crypto$AES$Block$fRound,
	$billstclair$elm_crypto_aes$Crypto$AES$Block$lastFRound);
var $billstclair$elm_crypto_aes$Crypto$AES$encrypt = F2(
	function (_v0, a) {
		var keys = _v0.a;
		return A2($billstclair$elm_crypto_aes$Crypto$AES$Block$encrypt, keys, a);
	});
var $billstclair$elm_crypto_string$Crypto$Strings$BlockAes$encrypt = F2(
	function (keys, block) {
		return A2($billstclair$elm_crypto_aes$Crypto$AES$encrypt, keys, block);
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Keys = function (a) {
	return {$: 'Keys', a: a};
};
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$blockWords_ = 4;
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$makeWord32 = F4(
	function (b3, b2, b1, b0) {
		return (((b3 << 24) + (b2 << 16)) + (b1 << 8)) + b0;
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$makeWord32FromByteArray = F2(
	function (offset, array) {
		return A4(
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$makeWord32,
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, offset, array),
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + offset, array),
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 2 + offset, array),
			A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 3 + offset, array));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$byte0 = $billstclair$elm_crypto_aes$Crypto$AES$Utility$lobyte;
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$byte1 = $billstclair$elm_crypto_aes$Crypto$AES$Utility$hibyte;
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$byte2 = function (x) {
	return (x >> 16) & 255;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$byte3 = function (x) {
	return (x >> 24) & 255;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$genKTable = function (gin) {
	var gsize = ($elm$core$Array$length(gin) / 2) | 0;
	var loop = F2(
		function (i, res) {
			loop:
			while (true) {
				if (_Utils_cmp(i, gsize) > -1) {
					return res;
				} else {
					var idx = 2 * A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, i, $billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_);
					var $temp$i = i + 1,
						$temp$res = A3(
						$elm$core$Array$set,
						i,
						(A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, idx, gin) << 16) | A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, 1 + idx, gin),
						res);
					i = $temp$i;
					res = $temp$res;
					continue loop;
				}
			}
		});
	return A2(
		loop,
		0,
		A2($elm$core$Array$repeat, gsize, 0));
};
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$kt0_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$genKTable($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt0_);
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$kt1_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$genKTable($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt1_);
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$kt2_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$genKTable($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt2_);
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$kt3_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$genKTable($billstclair$elm_crypto_aes$Crypto$AES$Tables$rt3_);
var $billstclair$elm_crypto_aes$Crypto$AES$Block$prepareReverseKey = F2(
	function (fkey, numRounds) {
		var numkeys = $elm$core$Array$length(fkey);
		var rkey = A2($elm$core$Array$repeat, numkeys, 0);
		var loop1 = F2(
			function (i, res) {
				loop1:
				while (true) {
					if (i >= 4) {
						return res;
					} else {
						var $temp$i = 1 + i,
							$temp$res = A3(
							$elm$core$Array$set,
							(i + numkeys) - 4,
							A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, i, fkey),
							A3(
								$elm$core$Array$set,
								i,
								A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, (i + numkeys) - 4, fkey),
								res));
						i = $temp$i;
						res = $temp$res;
						continue loop1;
					}
				}
			});
		var inner = F4(
			function (fix, rix, i, res) {
				inner:
				while (true) {
					if (i >= 4) {
						return res;
					} else {
						var tmp = A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, fix + i, fkey);
						var out = A3(
							$elm$core$Array$set,
							rix + i,
							A2(
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$get,
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$byte0(tmp),
								$billstclair$elm_crypto_aes$Crypto$AES$Tables$kt3_) ^ (A2(
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$get,
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$byte1(tmp),
								$billstclair$elm_crypto_aes$Crypto$AES$Tables$kt2_) ^ (A2(
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$get,
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$byte2(tmp),
								$billstclair$elm_crypto_aes$Crypto$AES$Tables$kt1_) ^ A2(
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$get,
								$billstclair$elm_crypto_aes$Crypto$AES$Utility$byte3(tmp),
								$billstclair$elm_crypto_aes$Crypto$AES$Tables$kt0_))),
							res);
						var $temp$fix = fix,
							$temp$rix = rix,
							$temp$i = i + 1,
							$temp$res = out;
						fix = $temp$fix;
						rix = $temp$rix;
						i = $temp$i;
						res = $temp$res;
						continue inner;
					}
				}
			});
		var loop2 = F2(
			function (r, res) {
				if (_Utils_cmp(r, numRounds - 1) > -1) {
					return res;
				} else {
					var rix = 4 * (1 + r);
					var fix = numkeys - (4 * (2 + r));
					return A2(
						loop2,
						r + 1,
						A4(inner, fix, rix, 0, res));
				}
			});
		return A2(
			loop2,
			0,
			A2(loop1, 0, rkey));
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$rcon_ = $billstclair$elm_crypto_aes$Crypto$AES$Tables$table(
	_List_fromArray(
		[
			_List_fromArray(
			[16777216, 33554432, 67108864, 134217728, 268435456]),
			_List_fromArray(
			[536870912, 1073741824, 2147483648, 452984832, 905969664])
		]));
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$rotWord32L = function (word) {
	return ((word & 16777215) << 8) + ((word >> 24) & 255);
};
var $billstclair$elm_crypto_aes$Crypto$AES$Tables$subWord32 = function (w) {
	return A4(
		$billstclair$elm_crypto_aes$Crypto$AES$Utility$makeWord32,
		A2(
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$get,
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$byte3(w),
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_),
		A2(
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$get,
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$byte2(w),
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_),
		A2(
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$get,
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$byte1(w),
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_),
		A2(
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$get,
			$billstclair$elm_crypto_aes$Crypto$AES$Utility$byte0(w),
			$billstclair$elm_crypto_aes$Crypto$AES$Tables$fsb_));
};
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$word0 = function (x) {
	return x & 65535;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$word1 = function (x) {
	return (x >> 16) & 65535;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Utility$word32ArrayToWordArray = function (a) {
	var out = A2(
		$elm$core$Array$repeat,
		2 * $elm$core$Array$length(a),
		0);
	var f = F2(
		function (ai, _v1) {
			var j = _v1.a;
			var r = _v1.b;
			return _Utils_Tuple2(
				j + 2,
				A3(
					$elm$core$Array$set,
					j + 1,
					$billstclair$elm_crypto_aes$Crypto$AES$Utility$word0(ai),
					A3(
						$elm$core$Array$set,
						j,
						$billstclair$elm_crypto_aes$Crypto$AES$Utility$word1(ai),
						r)));
		});
	var _v0 = A3(
		$elm$core$Array$foldl,
		f,
		_Utils_Tuple2(0, out),
		a);
	var res = _v0.b;
	return res;
};
var $billstclair$elm_crypto_aes$Crypto$AES$Block$expandKeyInternal = F3(
	function (rawkey, numWords, numRounds) {
		var size = $billstclair$elm_crypto_aes$Crypto$AES$Tables$blockWords_ * (numRounds + 1);
		var loop2 = F2(
			function (i, res) {
				return (_Utils_cmp(i, size) > -1) ? res : A2(
					loop2,
					i + 1,
					A3(
						$elm$core$Basics$apL,
						$elm$core$Array$set(i),
						A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, i - numWords, res) ^ ((!A2($elm$core$Basics$modBy, numWords, i)) ? ($billstclair$elm_crypto_aes$Crypto$AES$Tables$subWord32(
							$billstclair$elm_crypto_aes$Crypto$AES$Utility$rotWord32L(
								A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, i - 1, res))) ^ A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, ((i / numWords) | 0) - 1, $billstclair$elm_crypto_aes$Crypto$AES$Tables$rcon_)) : (((numWords > 6) && (4 === A2($elm$core$Basics$modBy, numWords, i))) ? $billstclair$elm_crypto_aes$Crypto$AES$Tables$subWord32(
							A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, i - 1, res)) : A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, i - 1, res))),
						res));
			});
		var loop1 = F2(
			function (i, res) {
				return (_Utils_cmp(i, numWords) > -1) ? res : A2(
					loop1,
					1 + i,
					A3(
						$elm$core$Array$set,
						i,
						A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$makeWord32FromByteArray, i * 4, rawkey),
						res));
			});
		var fkey = A2(
			loop2,
			numWords,
			A2(
				loop1,
				0,
				A2($elm$core$Array$repeat, size, 0)));
		return {
			forwardKey: $billstclair$elm_crypto_aes$Crypto$AES$Utility$word32ArrayToWordArray(fkey),
			numRounds: numRounds,
			reverseKey: $billstclair$elm_crypto_aes$Crypto$AES$Utility$word32ArrayToWordArray(
				A2($billstclair$elm_crypto_aes$Crypto$AES$Block$prepareReverseKey, fkey, numRounds))
		};
	});
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $billstclair$elm_crypto_aes$Crypto$AES$Block$expandKey = function (rawkey) {
	var len = $elm$core$Array$length(rawkey);
	var _v0 = A2(
		$elm_community$list_extra$List$Extra$find,
		function (_v1) {
			var n = _v1.a;
			return _Utils_eq(len, n);
		},
		_List_fromArray(
			[
				_Utils_Tuple3(16, 4, 10),
				_Utils_Tuple3(24, 6, 12),
				_Utils_Tuple3(32, 8, 14)
			]));
	if (_v0.$ === 'Nothing') {
		return $elm$core$Result$Err('Invalid key size. Must be 16, 24, or 32 bytes.');
	} else {
		var _v2 = _v0.a;
		var numWords = _v2.b;
		var numRounds = _v2.c;
		return $elm$core$Result$Ok(
			A3($billstclair$elm_crypto_aes$Crypto$AES$Block$expandKeyInternal, rawkey, numWords, numRounds));
	}
};
var $billstclair$elm_crypto_aes$Crypto$AES$Block$validateKeyElements = function (rawkey) {
	var len = $elm$core$Array$length(rawkey);
	var loop = function (i) {
		loop:
		while (true) {
			if (_Utils_cmp(i, len) > -1) {
				return true;
			} else {
				var val = A2($billstclair$elm_crypto_aes$Crypto$AES$Utility$get, i, rawkey);
				if ((val < 0) || (val >= 256)) {
					return false;
				} else {
					var $temp$i = 1 + i;
					i = $temp$i;
					continue loop;
				}
			}
		}
	};
	return loop(0);
};
var $billstclair$elm_crypto_aes$Crypto$AES$expandKey = function (rawkey) {
	if ($billstclair$elm_crypto_aes$Crypto$AES$Block$validateKeyElements(rawkey)) {
		var _v0 = $billstclair$elm_crypto_aes$Crypto$AES$Block$expandKey(rawkey);
		if (_v0.$ === 'Ok') {
			var keys = _v0.a;
			return $elm$core$Result$Ok(
				$billstclair$elm_crypto_aes$Crypto$AES$Keys(keys));
		} else {
			var msg = _v0.a;
			return $elm$core$Result$Err(msg);
		}
	} else {
		return $elm$core$Result$Err('Key elements must be between 0 and 255 inclusive.');
	}
};
var $billstclair$elm_crypto_string$Crypto$Strings$BlockAes$keyExpander = {expander: $billstclair$elm_crypto_aes$Crypto$AES$expandKey, keySize: 32};
var $billstclair$elm_crypto_string$Crypto$Strings$BlockAes$encryption = {blockSize: 16, decryptor: $billstclair$elm_crypto_string$Crypto$Strings$BlockAes$decrypt, encryptor: $billstclair$elm_crypto_string$Crypto$Strings$BlockAes$encrypt, keyExpander: $billstclair$elm_crypto_string$Crypto$Strings$BlockAes$keyExpander, name: 'AES'};
var $elm$core$Basics$neq = _Utils_notEqual;
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$isOdd = function (x) {
	return !_Utils_eq(x, ((x / 2) | 0) * 2);
};
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$fold = F2(
	function (size, list) {
		var len = $elm$core$List$length(list);
		if (_Utils_eq(len, size)) {
			return list;
		} else {
			if (_Utils_cmp(len, size) < 0) {
				return A2(
					$billstclair$elm_crypto_string$Crypto$Strings$Encoding$fold,
					size,
					A2($elm$core$List$append, list, list));
			} else {
				if (_Utils_cmp(len, size * 2) > 0) {
					var ln = ((len + 1) / 2) | 0;
					var l = $billstclair$elm_crypto_string$Crypto$Strings$Encoding$isOdd(len) ? A2($elm$core$List$cons, 0, list) : list;
					return A2(
						$billstclair$elm_crypto_string$Crypto$Strings$Encoding$fold,
						size,
						A3(
							$elm$core$List$map2,
							$elm$core$Bitwise$xor,
							A2($elm$core$List$take, ln, l),
							A2($elm$core$List$drop, ln, l)));
				} else {
					var r = A2($elm$core$List$drop, size, list);
					var left = A2($elm$core$List$take, size, list);
					var diff = len - size;
					var right = A2(
						$elm$core$List$append,
						r,
						A2($elm$core$List$repeat, diff, 0));
					return A3($elm$core$List$map2, $elm$core$Bitwise$xor, left, right);
				}
			}
		}
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm_community$list_extra$List$Extra$greedyGroupsOfWithStep = F3(
	function (size, step, list) {
		if ((size <= 0) || (step <= 0)) {
			return _List_Nil;
		} else {
			var go = F2(
				function (xs, acc) {
					go:
					while (true) {
						if ($elm$core$List$isEmpty(xs)) {
							return $elm$core$List$reverse(acc);
						} else {
							var $temp$xs = A2($elm$core$List$drop, step, xs),
								$temp$acc = A2(
								$elm$core$List$cons,
								A2($elm$core$List$take, size, xs),
								acc);
							xs = $temp$xs;
							acc = $temp$acc;
							continue go;
						}
					}
				});
			return A2(go, list, _List_Nil);
		}
	});
var $elm_community$list_extra$List$Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3($elm_community$list_extra$List$Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$core$String$toLower = _String_toLower;
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$hexDecoder = F2(
	function (groupSize, string) {
		if (!(!A2(
			$elm$core$Basics$modBy,
			groupSize,
			$elm$core$String$length(string)))) {
			return $elm$core$Result$Err(
				'String length not a multiple of ' + $elm$core$String$fromInt(groupSize));
		} else {
			var res = A2(
				$elm$core$List$map,
				$elm$core$Result$withDefault(-1),
				A2(
					$elm$core$List$map,
					$rtfeldman$elm_hex$Hex$fromString,
					A2(
						$elm$core$List$map,
						$elm$core$String$toLower,
						A2(
							$elm$core$List$map,
							$elm$core$String$fromList,
							A2(
								$elm_community$list_extra$List$Extra$greedyGroupsOf,
								groupSize,
								$elm$core$String$toList(string))))));
			return A2($elm$core$List$member, -1, res) ? $elm$core$Result$Err('Invalid hexadecimal string: ' + string) : $elm$core$Result$Ok(res);
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256 = {$: 'SHA256'};
var $ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars = F8(
	function (a, b, c, d, e, f, g, h) {
		return {a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h};
	});
var $ktonon$elm_word$Word$D = F2(
	function (a, b) {
		return {$: 'D', a: a, b: b};
	});
var $ktonon$elm_word$Word$Mismatch = {$: 'Mismatch'};
var $ktonon$elm_word$Word$W = function (a) {
	return {$: 'W', a: a};
};
var $ktonon$elm_word$Word$low31mask = 2147483647;
var $ktonon$elm_word$Word$carry32 = F2(
	function (x, y) {
		var _v0 = (x >>> 31) + (y >>> 31);
		switch (_v0) {
			case 0:
				return 0;
			case 2:
				return 1;
			default:
				return (1 === ((($ktonon$elm_word$Word$low31mask & x) + ($ktonon$elm_word$Word$low31mask & y)) >>> 31)) ? 1 : 0;
		}
	});
var $ktonon$elm_word$Word$mod32 = function (val) {
	return A2(
		$elm$core$Basics$modBy,
		A2($elm$core$Basics$pow, 2, 32),
		val);
};
var $ktonon$elm_word$Word$add = F2(
	function (wx, wy) {
		var _v0 = _Utils_Tuple2(wx, wy);
		_v0$2:
		while (true) {
			switch (_v0.a.$) {
				case 'W':
					if (_v0.b.$ === 'W') {
						var x = _v0.a.a;
						var y = _v0.b.a;
						return $ktonon$elm_word$Word$W(
							$ktonon$elm_word$Word$mod32(x + y));
					} else {
						break _v0$2;
					}
				case 'D':
					if (_v0.b.$ === 'D') {
						var _v1 = _v0.a;
						var xh = _v1.a;
						var xl = _v1.b;
						var _v2 = _v0.b;
						var yh = _v2.a;
						var yl = _v2.b;
						var zl = xl + yl;
						var zh = (xh + yh) + A2($ktonon$elm_word$Word$carry32, xl, yl);
						return A2(
							$ktonon$elm_word$Word$D,
							$ktonon$elm_word$Word$mod32(zh),
							$ktonon$elm_word$Word$mod32(zl));
					} else {
						break _v0$2;
					}
				default:
					break _v0$2;
			}
		}
		return $ktonon$elm_word$Word$Mismatch;
	});
var $ktonon$elm_crypto$Crypto$SHA$Types$addWorkingVars = F2(
	function (x, y) {
		return A8(
			$ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars,
			A2($ktonon$elm_word$Word$add, x.a, y.a),
			A2($ktonon$elm_word$Word$add, x.b, y.b),
			A2($ktonon$elm_word$Word$add, x.c, y.c),
			A2($ktonon$elm_word$Word$add, x.d, y.d),
			A2($ktonon$elm_word$Word$add, x.e, y.e),
			A2($ktonon$elm_word$Word$add, x.f, y.f),
			A2($ktonon$elm_word$Word$add, x.g, y.g),
			A2($ktonon$elm_word$Word$add, x.h, y.h));
	});
var $ktonon$elm_word$Word$and = F2(
	function (wx, wy) {
		var _v0 = _Utils_Tuple2(wx, wy);
		_v0$2:
		while (true) {
			switch (_v0.a.$) {
				case 'W':
					if (_v0.b.$ === 'W') {
						var x = _v0.a.a;
						var y = _v0.b.a;
						return $ktonon$elm_word$Word$W(x & y);
					} else {
						break _v0$2;
					}
				case 'D':
					if (_v0.b.$ === 'D') {
						var _v1 = _v0.a;
						var xh = _v1.a;
						var xl = _v1.b;
						var _v2 = _v0.b;
						var yh = _v2.a;
						var yl = _v2.b;
						return A2($ktonon$elm_word$Word$D, xh & yh, xl & yl);
					} else {
						break _v0$2;
					}
				default:
					break _v0$2;
			}
		}
		return $ktonon$elm_word$Word$Mismatch;
	});
var $elm$core$Bitwise$complement = _Bitwise_complement;
var $ktonon$elm_word$Word$complement = function (word) {
	switch (word.$) {
		case 'W':
			var x = word.a;
			return $ktonon$elm_word$Word$W(~x);
		case 'D':
			var xh = word.a;
			var xl = word.b;
			return A2($ktonon$elm_word$Word$D, ~xh, ~xl);
		default:
			return $ktonon$elm_word$Word$Mismatch;
	}
};
var $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512 = {$: 'SHA512'};
var $ktonon$elm_word$Word$Helpers$lowMask = function (n) {
	switch (n) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 3;
		case 3:
			return 7;
		case 4:
			return 15;
		case 5:
			return 31;
		case 6:
			return 63;
		case 7:
			return 127;
		case 8:
			return 255;
		case 9:
			return 511;
		case 10:
			return 1023;
		case 11:
			return 2047;
		case 12:
			return 4095;
		case 13:
			return 8191;
		case 14:
			return 16383;
		case 15:
			return 32767;
		case 16:
			return 65535;
		case 17:
			return 131071;
		case 18:
			return 262143;
		case 19:
			return 524287;
		case 20:
			return 1048575;
		case 21:
			return 2097151;
		case 22:
			return 4194303;
		case 23:
			return 8388607;
		case 24:
			return 16777215;
		case 25:
			return 33554431;
		case 26:
			return 67108863;
		case 27:
			return 134217727;
		case 28:
			return 268435455;
		case 29:
			return 536870911;
		case 30:
			return 1073741823;
		case 31:
			return 2147483647;
		default:
			return 4294967295;
	}
};
var $ktonon$elm_word$Word$Helpers$safeShiftRightZfBy = F2(
	function (n, val) {
		return (n >= 32) ? 0 : (val >>> n);
	});
var $ktonon$elm_word$Word$dShiftRightZfBy = F2(
	function (n, _v0) {
		var xh = _v0.a;
		var xl = _v0.b;
		return (n > 32) ? _Utils_Tuple2(
			0,
			A2($ktonon$elm_word$Word$Helpers$safeShiftRightZfBy, n - 32, xh)) : _Utils_Tuple2(
			A2($ktonon$elm_word$Word$Helpers$safeShiftRightZfBy, n, xh),
			A2($ktonon$elm_word$Word$Helpers$safeShiftRightZfBy, n, xl) + (($ktonon$elm_word$Word$Helpers$lowMask(n) & xh) << (32 - n)));
	});
var $ktonon$elm_word$Word$Helpers$rotatedLowBits = F2(
	function (n, val) {
		return $elm$core$Basics$add(
			($ktonon$elm_word$Word$Helpers$lowMask(n) & val) << (32 - n));
	});
var $ktonon$elm_word$Word$rotateRightBy = F2(
	function (unboundN, word) {
		switch (word.$) {
			case 'W':
				var x = word.a;
				var n = A2($elm$core$Basics$modBy, 32, unboundN);
				return $ktonon$elm_word$Word$W(
					A3(
						$ktonon$elm_word$Word$Helpers$rotatedLowBits,
						n,
						x,
						A2($ktonon$elm_word$Word$Helpers$safeShiftRightZfBy, n, x)));
			case 'D':
				var xh = word.a;
				var xl = word.b;
				var n = A2($elm$core$Basics$modBy, 64, unboundN);
				if (n > 32) {
					var n_ = n - 32;
					var _v1 = A2(
						$ktonon$elm_word$Word$dShiftRightZfBy,
						n_,
						_Utils_Tuple2(xl, xh));
					var zh = _v1.a;
					var zl = _v1.b;
					return A2(
						$ktonon$elm_word$Word$D,
						A3($ktonon$elm_word$Word$Helpers$rotatedLowBits, n_, xh, zh),
						zl);
				} else {
					var _v2 = A2(
						$ktonon$elm_word$Word$dShiftRightZfBy,
						n,
						_Utils_Tuple2(xh, xl));
					var zh = _v2.a;
					var zl = _v2.b;
					return A2(
						$ktonon$elm_word$Word$D,
						A3($ktonon$elm_word$Word$Helpers$rotatedLowBits, n, xl, zh),
						zl);
				}
			default:
				return $ktonon$elm_word$Word$Mismatch;
		}
	});
var $ktonon$elm_word$Word$xor = F2(
	function (wx, wy) {
		var _v0 = _Utils_Tuple2(wx, wy);
		_v0$2:
		while (true) {
			switch (_v0.a.$) {
				case 'W':
					if (_v0.b.$ === 'W') {
						var x = _v0.a.a;
						var y = _v0.b.a;
						return $ktonon$elm_word$Word$W(x ^ y);
					} else {
						break _v0$2;
					}
				case 'D':
					if (_v0.b.$ === 'D') {
						var _v1 = _v0.a;
						var xh = _v1.a;
						var xl = _v1.b;
						var _v2 = _v0.b;
						var yh = _v2.a;
						var yl = _v2.b;
						return A2($ktonon$elm_word$Word$D, xh ^ yh, xl ^ yl);
					} else {
						break _v0$2;
					}
				default:
					break _v0$2;
			}
		}
		return $ktonon$elm_word$Word$Mismatch;
	});
var $ktonon$elm_crypto$Crypto$SHA$Process$sum0 = F2(
	function (alg, word) {
		sum0:
		while (true) {
			switch (alg.$) {
				case 'SHA224':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sum0;
				case 'SHA384':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sum0;
				case 'SHA256':
					return A2(
						$ktonon$elm_word$Word$xor,
						A2($ktonon$elm_word$Word$rotateRightBy, 22, word),
						A2(
							$ktonon$elm_word$Word$xor,
							A2($ktonon$elm_word$Word$rotateRightBy, 13, word),
							A2($ktonon$elm_word$Word$rotateRightBy, 2, word)));
				case 'SHA512':
					return A2(
						$ktonon$elm_word$Word$xor,
						A2($ktonon$elm_word$Word$rotateRightBy, 39, word),
						A2(
							$ktonon$elm_word$Word$xor,
							A2($ktonon$elm_word$Word$rotateRightBy, 34, word),
							A2($ktonon$elm_word$Word$rotateRightBy, 28, word)));
				case 'SHA512_224':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sum0;
				default:
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sum0;
			}
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$Process$sum1 = F2(
	function (alg, word) {
		sum1:
		while (true) {
			switch (alg.$) {
				case 'SHA224':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sum1;
				case 'SHA384':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sum1;
				case 'SHA256':
					return A2(
						$ktonon$elm_word$Word$xor,
						A2($ktonon$elm_word$Word$rotateRightBy, 25, word),
						A2(
							$ktonon$elm_word$Word$xor,
							A2($ktonon$elm_word$Word$rotateRightBy, 11, word),
							A2($ktonon$elm_word$Word$rotateRightBy, 6, word)));
				case 'SHA512':
					return A2(
						$ktonon$elm_word$Word$xor,
						A2($ktonon$elm_word$Word$rotateRightBy, 41, word),
						A2(
							$ktonon$elm_word$Word$xor,
							A2($ktonon$elm_word$Word$rotateRightBy, 18, word),
							A2($ktonon$elm_word$Word$rotateRightBy, 14, word)));
				case 'SHA512_224':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sum1;
				default:
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sum1;
			}
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$Process$compress = F3(
	function (alg, _v0, _v1) {
		var k = _v0.a;
		var w = _v0.b;
		var a = _v1.a;
		var b = _v1.b;
		var c = _v1.c;
		var d = _v1.d;
		var e = _v1.e;
		var f = _v1.f;
		var g = _v1.g;
		var h = _v1.h;
		var s1 = A2($ktonon$elm_crypto$Crypto$SHA$Process$sum1, alg, e);
		var s0 = A2($ktonon$elm_crypto$Crypto$SHA$Process$sum0, alg, a);
		var maj = A2(
			$ktonon$elm_word$Word$xor,
			A2($ktonon$elm_word$Word$and, b, c),
			A2(
				$ktonon$elm_word$Word$xor,
				A2($ktonon$elm_word$Word$and, a, c),
				A2($ktonon$elm_word$Word$and, a, b)));
		var temp2 = A2($ktonon$elm_word$Word$add, s0, maj);
		var ch = A2(
			$ktonon$elm_word$Word$xor,
			A2(
				$ktonon$elm_word$Word$and,
				g,
				$ktonon$elm_word$Word$complement(e)),
			A2($ktonon$elm_word$Word$and, e, f));
		var temp1 = A2(
			$ktonon$elm_word$Word$add,
			w,
			A2(
				$ktonon$elm_word$Word$add,
				k,
				A2(
					$ktonon$elm_word$Word$add,
					ch,
					A2($ktonon$elm_word$Word$add, s1, h))));
		return A8(
			$ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars,
			A2($ktonon$elm_word$Word$add, temp1, temp2),
			a,
			b,
			c,
			A2($ktonon$elm_word$Word$add, d, temp1),
			e,
			f,
			g);
	});
var $ktonon$elm_crypto$Crypto$SHA$Constants$roundConstants = function (alg) {
	roundConstants:
	while (true) {
		switch (alg.$) {
			case 'SHA224':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256;
				alg = $temp$alg;
				continue roundConstants;
			case 'SHA256':
				return _List_fromArray(
					[
						$ktonon$elm_word$Word$W(1116352408),
						$ktonon$elm_word$Word$W(1899447441),
						$ktonon$elm_word$Word$W(3049323471),
						$ktonon$elm_word$Word$W(3921009573),
						$ktonon$elm_word$Word$W(961987163),
						$ktonon$elm_word$Word$W(1508970993),
						$ktonon$elm_word$Word$W(2453635748),
						$ktonon$elm_word$Word$W(2870763221),
						$ktonon$elm_word$Word$W(3624381080),
						$ktonon$elm_word$Word$W(310598401),
						$ktonon$elm_word$Word$W(607225278),
						$ktonon$elm_word$Word$W(1426881987),
						$ktonon$elm_word$Word$W(1925078388),
						$ktonon$elm_word$Word$W(2162078206),
						$ktonon$elm_word$Word$W(2614888103),
						$ktonon$elm_word$Word$W(3248222580),
						$ktonon$elm_word$Word$W(3835390401),
						$ktonon$elm_word$Word$W(4022224774),
						$ktonon$elm_word$Word$W(264347078),
						$ktonon$elm_word$Word$W(604807628),
						$ktonon$elm_word$Word$W(770255983),
						$ktonon$elm_word$Word$W(1249150122),
						$ktonon$elm_word$Word$W(1555081692),
						$ktonon$elm_word$Word$W(1996064986),
						$ktonon$elm_word$Word$W(2554220882),
						$ktonon$elm_word$Word$W(2821834349),
						$ktonon$elm_word$Word$W(2952996808),
						$ktonon$elm_word$Word$W(3210313671),
						$ktonon$elm_word$Word$W(3336571891),
						$ktonon$elm_word$Word$W(3584528711),
						$ktonon$elm_word$Word$W(113926993),
						$ktonon$elm_word$Word$W(338241895),
						$ktonon$elm_word$Word$W(666307205),
						$ktonon$elm_word$Word$W(773529912),
						$ktonon$elm_word$Word$W(1294757372),
						$ktonon$elm_word$Word$W(1396182291),
						$ktonon$elm_word$Word$W(1695183700),
						$ktonon$elm_word$Word$W(1986661051),
						$ktonon$elm_word$Word$W(2177026350),
						$ktonon$elm_word$Word$W(2456956037),
						$ktonon$elm_word$Word$W(2730485921),
						$ktonon$elm_word$Word$W(2820302411),
						$ktonon$elm_word$Word$W(3259730800),
						$ktonon$elm_word$Word$W(3345764771),
						$ktonon$elm_word$Word$W(3516065817),
						$ktonon$elm_word$Word$W(3600352804),
						$ktonon$elm_word$Word$W(4094571909),
						$ktonon$elm_word$Word$W(275423344),
						$ktonon$elm_word$Word$W(430227734),
						$ktonon$elm_word$Word$W(506948616),
						$ktonon$elm_word$Word$W(659060556),
						$ktonon$elm_word$Word$W(883997877),
						$ktonon$elm_word$Word$W(958139571),
						$ktonon$elm_word$Word$W(1322822218),
						$ktonon$elm_word$Word$W(1537002063),
						$ktonon$elm_word$Word$W(1747873779),
						$ktonon$elm_word$Word$W(1955562222),
						$ktonon$elm_word$Word$W(2024104815),
						$ktonon$elm_word$Word$W(2227730452),
						$ktonon$elm_word$Word$W(2361852424),
						$ktonon$elm_word$Word$W(2428436474),
						$ktonon$elm_word$Word$W(2756734187),
						$ktonon$elm_word$Word$W(3204031479),
						$ktonon$elm_word$Word$W(3329325298)
					]);
			case 'SHA384':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue roundConstants;
			case 'SHA512':
				return _List_fromArray(
					[
						A2($ktonon$elm_word$Word$D, 1116352408, 3609767458),
						A2($ktonon$elm_word$Word$D, 1899447441, 602891725),
						A2($ktonon$elm_word$Word$D, 3049323471, 3964484399),
						A2($ktonon$elm_word$Word$D, 3921009573, 2173295548),
						A2($ktonon$elm_word$Word$D, 961987163, 4081628472),
						A2($ktonon$elm_word$Word$D, 1508970993, 3053834265),
						A2($ktonon$elm_word$Word$D, 2453635748, 2937671579),
						A2($ktonon$elm_word$Word$D, 2870763221, 3664609560),
						A2($ktonon$elm_word$Word$D, 3624381080, 2734883394),
						A2($ktonon$elm_word$Word$D, 310598401, 1164996542),
						A2($ktonon$elm_word$Word$D, 607225278, 1323610764),
						A2($ktonon$elm_word$Word$D, 1426881987, 3590304994),
						A2($ktonon$elm_word$Word$D, 1925078388, 4068182383),
						A2($ktonon$elm_word$Word$D, 2162078206, 991336113),
						A2($ktonon$elm_word$Word$D, 2614888103, 633803317),
						A2($ktonon$elm_word$Word$D, 3248222580, 3479774868),
						A2($ktonon$elm_word$Word$D, 3835390401, 2666613458),
						A2($ktonon$elm_word$Word$D, 4022224774, 944711139),
						A2($ktonon$elm_word$Word$D, 264347078, 2341262773),
						A2($ktonon$elm_word$Word$D, 604807628, 2007800933),
						A2($ktonon$elm_word$Word$D, 770255983, 1495990901),
						A2($ktonon$elm_word$Word$D, 1249150122, 1856431235),
						A2($ktonon$elm_word$Word$D, 1555081692, 3175218132),
						A2($ktonon$elm_word$Word$D, 1996064986, 2198950837),
						A2($ktonon$elm_word$Word$D, 2554220882, 3999719339),
						A2($ktonon$elm_word$Word$D, 2821834349, 766784016),
						A2($ktonon$elm_word$Word$D, 2952996808, 2566594879),
						A2($ktonon$elm_word$Word$D, 3210313671, 3203337956),
						A2($ktonon$elm_word$Word$D, 3336571891, 1034457026),
						A2($ktonon$elm_word$Word$D, 3584528711, 2466948901),
						A2($ktonon$elm_word$Word$D, 113926993, 3758326383),
						A2($ktonon$elm_word$Word$D, 338241895, 168717936),
						A2($ktonon$elm_word$Word$D, 666307205, 1188179964),
						A2($ktonon$elm_word$Word$D, 773529912, 1546045734),
						A2($ktonon$elm_word$Word$D, 1294757372, 1522805485),
						A2($ktonon$elm_word$Word$D, 1396182291, 2643833823),
						A2($ktonon$elm_word$Word$D, 1695183700, 2343527390),
						A2($ktonon$elm_word$Word$D, 1986661051, 1014477480),
						A2($ktonon$elm_word$Word$D, 2177026350, 1206759142),
						A2($ktonon$elm_word$Word$D, 2456956037, 344077627),
						A2($ktonon$elm_word$Word$D, 2730485921, 1290863460),
						A2($ktonon$elm_word$Word$D, 2820302411, 3158454273),
						A2($ktonon$elm_word$Word$D, 3259730800, 3505952657),
						A2($ktonon$elm_word$Word$D, 3345764771, 106217008),
						A2($ktonon$elm_word$Word$D, 3516065817, 3606008344),
						A2($ktonon$elm_word$Word$D, 3600352804, 1432725776),
						A2($ktonon$elm_word$Word$D, 4094571909, 1467031594),
						A2($ktonon$elm_word$Word$D, 275423344, 851169720),
						A2($ktonon$elm_word$Word$D, 430227734, 3100823752),
						A2($ktonon$elm_word$Word$D, 506948616, 1363258195),
						A2($ktonon$elm_word$Word$D, 659060556, 3750685593),
						A2($ktonon$elm_word$Word$D, 883997877, 3785050280),
						A2($ktonon$elm_word$Word$D, 958139571, 3318307427),
						A2($ktonon$elm_word$Word$D, 1322822218, 3812723403),
						A2($ktonon$elm_word$Word$D, 1537002063, 2003034995),
						A2($ktonon$elm_word$Word$D, 1747873779, 3602036899),
						A2($ktonon$elm_word$Word$D, 1955562222, 1575990012),
						A2($ktonon$elm_word$Word$D, 2024104815, 1125592928),
						A2($ktonon$elm_word$Word$D, 2227730452, 2716904306),
						A2($ktonon$elm_word$Word$D, 2361852424, 442776044),
						A2($ktonon$elm_word$Word$D, 2428436474, 593698344),
						A2($ktonon$elm_word$Word$D, 2756734187, 3733110249),
						A2($ktonon$elm_word$Word$D, 3204031479, 2999351573),
						A2($ktonon$elm_word$Word$D, 3329325298, 3815920427),
						A2($ktonon$elm_word$Word$D, 3391569614, 3928383900),
						A2($ktonon$elm_word$Word$D, 3515267271, 566280711),
						A2($ktonon$elm_word$Word$D, 3940187606, 3454069534),
						A2($ktonon$elm_word$Word$D, 4118630271, 4000239992),
						A2($ktonon$elm_word$Word$D, 116418474, 1914138554),
						A2($ktonon$elm_word$Word$D, 174292421, 2731055270),
						A2($ktonon$elm_word$Word$D, 289380356, 3203993006),
						A2($ktonon$elm_word$Word$D, 460393269, 320620315),
						A2($ktonon$elm_word$Word$D, 685471733, 587496836),
						A2($ktonon$elm_word$Word$D, 852142971, 1086792851),
						A2($ktonon$elm_word$Word$D, 1017036298, 365543100),
						A2($ktonon$elm_word$Word$D, 1126000580, 2618297676),
						A2($ktonon$elm_word$Word$D, 1288033470, 3409855158),
						A2($ktonon$elm_word$Word$D, 1501505948, 4234509866),
						A2($ktonon$elm_word$Word$D, 1607167915, 987167468),
						A2($ktonon$elm_word$Word$D, 1816402316, 1246189591)
					]);
			case 'SHA512_224':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue roundConstants;
			default:
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue roundConstants;
		}
	}
};
var $ktonon$elm_crypto$Crypto$SHA$Process$compressLoop = F3(
	function (alg, workingVars, messageSchedule) {
		return A3(
			$elm$core$List$foldl,
			$ktonon$elm_crypto$Crypto$SHA$Process$compress(alg),
			workingVars,
			A3(
				$elm$core$List$map2,
				F2(
					function (a, b) {
						return _Utils_Tuple2(a, b);
					}),
				$ktonon$elm_crypto$Crypto$SHA$Constants$roundConstants(alg),
				$elm$core$Array$toList(messageSchedule)));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$appendHelpTree = F2(
	function (toAppend, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		var itemsToAppend = $elm$core$Elm$JsArray$length(toAppend);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(tail)) - itemsToAppend;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, tail, toAppend);
		var newArray = A2($elm$core$Array$unsafeReplaceTail, appended, array);
		if (notAppended < 0) {
			var nextTail = A3($elm$core$Elm$JsArray$slice, notAppended, itemsToAppend, toAppend);
			return A2($elm$core$Array$unsafeReplaceTail, nextTail, newArray);
		} else {
			return newArray;
		}
	});
var $elm$core$Array$builderFromArray = function (_v0) {
	var len = _v0.a;
	var tree = _v0.c;
	var tail = _v0.d;
	var helper = F2(
		function (node, acc) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
			} else {
				return A2($elm$core$List$cons, node, acc);
			}
		});
	return {
		nodeList: A3($elm$core$Elm$JsArray$foldl, helper, _List_Nil, tree),
		nodeListSize: (len / $elm$core$Array$branchFactor) | 0,
		tail: tail
	};
};
var $elm$core$Array$append = F2(
	function (a, _v0) {
		var aTail = a.d;
		var bLen = _v0.a;
		var bTree = _v0.c;
		var bTail = _v0.d;
		if (_Utils_cmp(bLen, $elm$core$Array$branchFactor * 4) < 1) {
			var foldHelper = F2(
				function (node, array) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, array, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpTree, leaf, array);
					}
				});
			return A2(
				$elm$core$Array$appendHelpTree,
				bTail,
				A3($elm$core$Elm$JsArray$foldl, foldHelper, a, bTree));
		} else {
			var foldHelper = F2(
				function (node, builder) {
					if (node.$ === 'SubTree') {
						var tree = node.a;
						return A3($elm$core$Elm$JsArray$foldl, foldHelper, builder, tree);
					} else {
						var leaf = node.a;
						return A2($elm$core$Array$appendHelpBuilder, leaf, builder);
					}
				});
			return A2(
				$elm$core$Array$builderToArray,
				true,
				A2(
					$elm$core$Array$appendHelpBuilder,
					bTail,
					A3(
						$elm$core$Elm$JsArray$foldl,
						foldHelper,
						$elm$core$Array$builderFromArray(a),
						bTree)));
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$MessageSchedule$at = function (i) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Array$get(i),
		$elm$core$Maybe$withDefault($ktonon$elm_word$Word$Mismatch));
};
var $ktonon$elm_word$Word$shiftRightZfBy = F2(
	function (n, word) {
		switch (word.$) {
			case 'W':
				var x = word.a;
				return $ktonon$elm_word$Word$W(
					A2($ktonon$elm_word$Word$Helpers$safeShiftRightZfBy, n, x));
			case 'D':
				var xh = word.a;
				var xl = word.b;
				var _v1 = A2(
					$ktonon$elm_word$Word$dShiftRightZfBy,
					n,
					_Utils_Tuple2(xh, xl));
				var zh = _v1.a;
				var zl = _v1.b;
				return A2($ktonon$elm_word$Word$D, zh, zl);
			default:
				return $ktonon$elm_word$Word$Mismatch;
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$MessageSchedule$sigma0 = F2(
	function (alg, word) {
		sigma0:
		while (true) {
			switch (alg.$) {
				case 'SHA224':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sigma0;
				case 'SHA384':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sigma0;
				case 'SHA256':
					return A2(
						$ktonon$elm_word$Word$xor,
						A2($ktonon$elm_word$Word$shiftRightZfBy, 3, word),
						A2(
							$ktonon$elm_word$Word$xor,
							A2($ktonon$elm_word$Word$rotateRightBy, 18, word),
							A2($ktonon$elm_word$Word$rotateRightBy, 7, word)));
				case 'SHA512':
					return A2(
						$ktonon$elm_word$Word$xor,
						A2($ktonon$elm_word$Word$shiftRightZfBy, 7, word),
						A2(
							$ktonon$elm_word$Word$xor,
							A2($ktonon$elm_word$Word$rotateRightBy, 8, word),
							A2($ktonon$elm_word$Word$rotateRightBy, 1, word)));
				case 'SHA512_224':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sigma0;
				default:
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sigma0;
			}
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$MessageSchedule$sigma1 = F2(
	function (alg, word) {
		sigma1:
		while (true) {
			switch (alg.$) {
				case 'SHA224':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sigma1;
				case 'SHA384':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sigma1;
				case 'SHA256':
					return A2(
						$ktonon$elm_word$Word$xor,
						A2($ktonon$elm_word$Word$shiftRightZfBy, 10, word),
						A2(
							$ktonon$elm_word$Word$xor,
							A2($ktonon$elm_word$Word$rotateRightBy, 19, word),
							A2($ktonon$elm_word$Word$rotateRightBy, 17, word)));
				case 'SHA512':
					return A2(
						$ktonon$elm_word$Word$xor,
						A2($ktonon$elm_word$Word$shiftRightZfBy, 6, word),
						A2(
							$ktonon$elm_word$Word$xor,
							A2($ktonon$elm_word$Word$rotateRightBy, 61, word),
							A2($ktonon$elm_word$Word$rotateRightBy, 19, word)));
				case 'SHA512_224':
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sigma1;
				default:
					var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512,
						$temp$word = word;
					alg = $temp$alg;
					word = $temp$word;
					continue sigma1;
			}
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$MessageSchedule$nextPart = F3(
	function (alg, i, w) {
		var i2 = A2($ktonon$elm_crypto$Crypto$SHA$MessageSchedule$at, i - 2, w);
		var s1 = A2($ktonon$elm_crypto$Crypto$SHA$MessageSchedule$sigma1, alg, i2);
		var i15 = A2($ktonon$elm_crypto$Crypto$SHA$MessageSchedule$at, i - 15, w);
		var s0 = A2($ktonon$elm_crypto$Crypto$SHA$MessageSchedule$sigma0, alg, i15);
		return A2(
			$elm$core$Array$append,
			w,
			$elm$core$Array$fromList(
				_List_fromArray(
					[
						A2(
						$ktonon$elm_word$Word$add,
						s1,
						A2(
							$ktonon$elm_word$Word$add,
							A2($ktonon$elm_crypto$Crypto$SHA$MessageSchedule$at, i - 7, w),
							A2(
								$ktonon$elm_word$Word$add,
								s0,
								A2($ktonon$elm_crypto$Crypto$SHA$MessageSchedule$at, i - 16, w))))
					])));
	});
var $ktonon$elm_crypto$Crypto$SHA$MessageSchedule$fromChunk = F2(
	function (alg, chunk) {
		var n = $elm$core$List$length(
			$ktonon$elm_crypto$Crypto$SHA$Constants$roundConstants(alg));
		return A3(
			$elm$core$List$foldl,
			$ktonon$elm_crypto$Crypto$SHA$MessageSchedule$nextPart(alg),
			$elm$core$Array$fromList(chunk),
			A2($elm$core$List$range, 16, n - 1));
	});
var $ktonon$elm_crypto$Crypto$SHA$Chunk$sizeInBytes = function (alg) {
	sizeInBytes:
	while (true) {
		switch (alg.$) {
			case 'SHA224':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256;
				alg = $temp$alg;
				continue sizeInBytes;
			case 'SHA256':
				return 64;
			case 'SHA384':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue sizeInBytes;
			case 'SHA512':
				return 128;
			case 'SHA512_224':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue sizeInBytes;
			default:
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue sizeInBytes;
		}
	}
};
var $ktonon$elm_word$Word$sizeInBytes = function (s) {
	if (s.$ === 'Bit32') {
		return 4;
	} else {
		return 8;
	}
};
var $ktonon$elm_word$Word$Bit32 = {$: 'Bit32'};
var $ktonon$elm_word$Word$Bit64 = {$: 'Bit64'};
var $ktonon$elm_crypto$Crypto$SHA$Alg$wordSize = function (alg) {
	wordSize:
	while (true) {
		switch (alg.$) {
			case 'SHA224':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256;
				alg = $temp$alg;
				continue wordSize;
			case 'SHA256':
				return $ktonon$elm_word$Word$Bit32;
			case 'SHA384':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue wordSize;
			case 'SHA512':
				return $ktonon$elm_word$Word$Bit64;
			case 'SHA512_224':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue wordSize;
			default:
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue wordSize;
		}
	}
};
var $ktonon$elm_crypto$Crypto$SHA$Chunk$sizeInWords = function (alg) {
	return ($ktonon$elm_crypto$Crypto$SHA$Chunk$sizeInBytes(alg) / $ktonon$elm_word$Word$sizeInBytes(
		$ktonon$elm_crypto$Crypto$SHA$Alg$wordSize(alg))) | 0;
};
var $ktonon$elm_crypto$Crypto$SHA$Chunk$next = F2(
	function (alg, words) {
		var n = $ktonon$elm_crypto$Crypto$SHA$Chunk$sizeInWords(alg);
		var chunk = A2($elm$core$List$take, n, words);
		return _Utils_Tuple2(
			$elm$core$List$isEmpty(chunk) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(chunk),
			A2($elm$core$List$drop, n, words));
	});
var $ktonon$elm_crypto$Crypto$SHA$Process$chunks_ = F3(
	function (alg, words, currentHash) {
		chunks_:
		while (true) {
			var _v0 = A2($ktonon$elm_crypto$Crypto$SHA$Chunk$next, alg, words);
			if (_v0.a.$ === 'Nothing') {
				var _v1 = _v0.a;
				return currentHash;
			} else {
				var chunk = _v0.a.a;
				var rest = _v0.b;
				var vars = A2(
					$ktonon$elm_crypto$Crypto$SHA$Types$addWorkingVars,
					currentHash,
					A3(
						$ktonon$elm_crypto$Crypto$SHA$Process$compressLoop,
						alg,
						currentHash,
						A2($ktonon$elm_crypto$Crypto$SHA$MessageSchedule$fromChunk, alg, chunk)));
				var $temp$alg = alg,
					$temp$words = rest,
					$temp$currentHash = vars;
				alg = $temp$alg;
				words = $temp$words;
				currentHash = $temp$currentHash;
				continue chunks_;
			}
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$Constants$initialHashValues = function (alg) {
	switch (alg.$) {
		case 'SHA224':
			return A8(
				$ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars,
				$ktonon$elm_word$Word$W(3238371032),
				$ktonon$elm_word$Word$W(914150663),
				$ktonon$elm_word$Word$W(812702999),
				$ktonon$elm_word$Word$W(4144912697),
				$ktonon$elm_word$Word$W(4290775857),
				$ktonon$elm_word$Word$W(1750603025),
				$ktonon$elm_word$Word$W(1694076839),
				$ktonon$elm_word$Word$W(3204075428));
		case 'SHA256':
			return A8(
				$ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars,
				$ktonon$elm_word$Word$W(1779033703),
				$ktonon$elm_word$Word$W(3144134277),
				$ktonon$elm_word$Word$W(1013904242),
				$ktonon$elm_word$Word$W(2773480762),
				$ktonon$elm_word$Word$W(1359893119),
				$ktonon$elm_word$Word$W(2600822924),
				$ktonon$elm_word$Word$W(528734635),
				$ktonon$elm_word$Word$W(1541459225));
		case 'SHA384':
			return A8(
				$ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars,
				A2($ktonon$elm_word$Word$D, 3418070365, 3238371032),
				A2($ktonon$elm_word$Word$D, 1654270250, 914150663),
				A2($ktonon$elm_word$Word$D, 2438529370, 812702999),
				A2($ktonon$elm_word$Word$D, 355462360, 4144912697),
				A2($ktonon$elm_word$Word$D, 1731405415, 4290775857),
				A2($ktonon$elm_word$Word$D, 2394180231, 1750603025),
				A2($ktonon$elm_word$Word$D, 3675008525, 1694076839),
				A2($ktonon$elm_word$Word$D, 1203062813, 3204075428));
		case 'SHA512':
			return A8(
				$ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars,
				A2($ktonon$elm_word$Word$D, 1779033703, 4089235720),
				A2($ktonon$elm_word$Word$D, 3144134277, 2227873595),
				A2($ktonon$elm_word$Word$D, 1013904242, 4271175723),
				A2($ktonon$elm_word$Word$D, 2773480762, 1595750129),
				A2($ktonon$elm_word$Word$D, 1359893119, 2917565137),
				A2($ktonon$elm_word$Word$D, 2600822924, 725511199),
				A2($ktonon$elm_word$Word$D, 528734635, 4215389547),
				A2($ktonon$elm_word$Word$D, 1541459225, 327033209));
		case 'SHA512_224':
			return A8(
				$ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars,
				A2($ktonon$elm_word$Word$D, 2352822216, 424955298),
				A2($ktonon$elm_word$Word$D, 1944164710, 2312950998),
				A2($ktonon$elm_word$Word$D, 502970286, 855612546),
				A2($ktonon$elm_word$Word$D, 1738396948, 1479516111),
				A2($ktonon$elm_word$Word$D, 258812777, 2077511080),
				A2($ktonon$elm_word$Word$D, 2011393907, 79989058),
				A2($ktonon$elm_word$Word$D, 1067287976, 1780299464),
				A2($ktonon$elm_word$Word$D, 286451373, 2446758561));
		default:
			return A8(
				$ktonon$elm_crypto$Crypto$SHA$Types$WorkingVars,
				A2($ktonon$elm_word$Word$D, 573645204, 4230739756),
				A2($ktonon$elm_word$Word$D, 2673172387, 3360449730),
				A2($ktonon$elm_word$Word$D, 596883563, 1867755857),
				A2($ktonon$elm_word$Word$D, 2520282905, 1497426621),
				A2($ktonon$elm_word$Word$D, 2519219938, 2827943907),
				A2($ktonon$elm_word$Word$D, 3193839141, 1401305490),
				A2($ktonon$elm_word$Word$D, 721525244, 746961066),
				A2($ktonon$elm_word$Word$D, 246885852, 2177182882));
	}
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $ktonon$elm_crypto$Crypto$SHA$Types$toSingleWord = function (word) {
	if (word.$ === 'D') {
		var xh = word.a;
		var xl = word.b;
		return _List_fromArray(
			[
				$ktonon$elm_word$Word$W(xh),
				$ktonon$elm_word$Word$W(xl)
			]);
	} else {
		return _List_fromArray(
			[word]);
	}
};
var $ktonon$elm_crypto$Crypto$SHA$Types$workingVarsToWords = F2(
	function (alg, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		var c = _v0.c;
		var d = _v0.d;
		var e = _v0.e;
		var f = _v0.f;
		var g = _v0.g;
		var h = _v0.h;
		switch (alg.$) {
			case 'SHA224':
				return $elm$core$Array$fromList(
					_List_fromArray(
						[a, b, c, d, e, f, g]));
			case 'SHA256':
				return $elm$core$Array$fromList(
					_List_fromArray(
						[a, b, c, d, e, f, g, h]));
			case 'SHA384':
				return $elm$core$Array$fromList(
					_List_fromArray(
						[a, b, c, d, e, f]));
			case 'SHA512':
				return $elm$core$Array$fromList(
					_List_fromArray(
						[a, b, c, d, e, f, g, h]));
			case 'SHA512_224':
				return $elm$core$Array$fromList(
					A2(
						$elm$core$List$take,
						7,
						A2(
							$elm$core$List$concatMap,
							$ktonon$elm_crypto$Crypto$SHA$Types$toSingleWord,
							_List_fromArray(
								[a, b, c, d]))));
			default:
				return $elm$core$Array$fromList(
					_List_fromArray(
						[a, b, c, d]));
		}
	});
var $ktonon$elm_crypto$Crypto$SHA$Process$chunks = F2(
	function (alg, words) {
		return A2(
			$ktonon$elm_crypto$Crypto$SHA$Types$workingVarsToWords,
			alg,
			A3(
				$ktonon$elm_crypto$Crypto$SHA$Process$chunks_,
				alg,
				$elm$core$Array$toList(words),
				$ktonon$elm_crypto$Crypto$SHA$Constants$initialHashValues(alg)));
	});
var $ktonon$elm_word$Word$FourBytes = F4(
	function (a, b, c, d) {
		return {$: 'FourBytes', a: a, b: b, c: c, d: d};
	});
var $ktonon$elm_word$Word$int32FromBytes = function (_v0) {
	var x3 = _v0.a;
	var x2 = _v0.b;
	var x1 = _v0.c;
	var x0 = _v0.d;
	return ((x0 + (x1 * A2($elm$core$Basics$pow, 2, 8))) + (x2 * A2($elm$core$Basics$pow, 2, 16))) + (x3 * A2($elm$core$Basics$pow, 2, 24));
};
var $ktonon$elm_word$Word$pad4 = function (bytes) {
	_v0$4:
	while (true) {
		if (bytes.b) {
			if (bytes.b.b) {
				if (bytes.b.b.b) {
					if (bytes.b.b.b.b) {
						if (!bytes.b.b.b.b.b) {
							var x3 = bytes.a;
							var _v1 = bytes.b;
							var x2 = _v1.a;
							var _v2 = _v1.b;
							var x1 = _v2.a;
							var _v3 = _v2.b;
							var x0 = _v3.a;
							return A4($ktonon$elm_word$Word$FourBytes, x3, x2, x1, x0);
						} else {
							break _v0$4;
						}
					} else {
						var x3 = bytes.a;
						var _v4 = bytes.b;
						var x2 = _v4.a;
						var _v5 = _v4.b;
						var x1 = _v5.a;
						return A4($ktonon$elm_word$Word$FourBytes, x3, x2, x1, 0);
					}
				} else {
					var x3 = bytes.a;
					var _v6 = bytes.b;
					var x2 = _v6.a;
					return A4($ktonon$elm_word$Word$FourBytes, x3, x2, 0, 0);
				}
			} else {
				var x3 = bytes.a;
				return A4($ktonon$elm_word$Word$FourBytes, x3, 0, 0, 0);
			}
		} else {
			break _v0$4;
		}
	}
	return A4($ktonon$elm_word$Word$FourBytes, 0, 0, 0, 0);
};
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $ktonon$elm_word$Word$accWords = F3(
	function (wordSize, bytes, acc) {
		accWords:
		while (true) {
			var _v0 = _Utils_Tuple2(wordSize, bytes);
			_v0$2:
			while (true) {
				if (_v0.a.$ === 'Bit32') {
					if (_v0.b.b) {
						if ((_v0.b.b.b && _v0.b.b.b.b) && _v0.b.b.b.b.b) {
							var _v1 = _v0.a;
							var _v2 = _v0.b;
							var x3 = _v2.a;
							var _v3 = _v2.b;
							var x2 = _v3.a;
							var _v4 = _v3.b;
							var x1 = _v4.a;
							var _v5 = _v4.b;
							var x0 = _v5.a;
							var rest = _v5.b;
							var acc2 = A2(
								$elm$core$Array$push,
								$ktonon$elm_word$Word$W(
									$ktonon$elm_word$Word$int32FromBytes(
										A4($ktonon$elm_word$Word$FourBytes, x3, x2, x1, x0))),
								acc);
							var $temp$wordSize = wordSize,
								$temp$bytes = rest,
								$temp$acc = acc2;
							wordSize = $temp$wordSize;
							bytes = $temp$bytes;
							acc = $temp$acc;
							continue accWords;
						} else {
							var _v15 = _v0.a;
							var rest = _v0.b;
							return A2(
								$elm$core$Array$push,
								$ktonon$elm_word$Word$W(
									$ktonon$elm_word$Word$int32FromBytes(
										$ktonon$elm_word$Word$pad4(rest))),
								acc);
						}
					} else {
						break _v0$2;
					}
				} else {
					if (_v0.b.b) {
						if ((((((_v0.b.b.b && _v0.b.b.b.b) && _v0.b.b.b.b.b) && _v0.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b) && _v0.b.b.b.b.b.b.b.b.b) {
							var _v6 = _v0.a;
							var _v7 = _v0.b;
							var x7 = _v7.a;
							var _v8 = _v7.b;
							var x6 = _v8.a;
							var _v9 = _v8.b;
							var x5 = _v9.a;
							var _v10 = _v9.b;
							var x4 = _v10.a;
							var _v11 = _v10.b;
							var x3 = _v11.a;
							var _v12 = _v11.b;
							var x2 = _v12.a;
							var _v13 = _v12.b;
							var x1 = _v13.a;
							var _v14 = _v13.b;
							var x0 = _v14.a;
							var rest = _v14.b;
							var acc2 = A2(
								$elm$core$Array$push,
								A2(
									$ktonon$elm_word$Word$D,
									$ktonon$elm_word$Word$int32FromBytes(
										A4($ktonon$elm_word$Word$FourBytes, x7, x6, x5, x4)),
									$ktonon$elm_word$Word$int32FromBytes(
										A4($ktonon$elm_word$Word$FourBytes, x3, x2, x1, x0))),
								acc);
							var $temp$wordSize = wordSize,
								$temp$bytes = rest,
								$temp$acc = acc2;
							wordSize = $temp$wordSize;
							bytes = $temp$bytes;
							acc = $temp$acc;
							continue accWords;
						} else {
							var _v16 = _v0.a;
							var rest = _v0.b;
							return A2(
								$elm$core$Array$push,
								A2(
									$ktonon$elm_word$Word$D,
									$ktonon$elm_word$Word$int32FromBytes(
										$ktonon$elm_word$Word$pad4(
											A2($elm$core$List$take, 4, rest))),
									$ktonon$elm_word$Word$int32FromBytes(
										$ktonon$elm_word$Word$pad4(
											A2($elm$core$List$drop, 4, rest)))),
								acc);
						}
					} else {
						break _v0$2;
					}
				}
			}
			return acc;
		}
	});
var $ktonon$elm_word$Word$fromBytes = F2(
	function (wordSize, bytes) {
		return A3($ktonon$elm_word$Word$accWords, wordSize, bytes, $elm$core$Array$empty);
	});
var $ktonon$elm_crypto$Crypto$SHA$Preprocess$messageSizeBytes = function (alg) {
	messageSizeBytes:
	while (true) {
		switch (alg.$) {
			case 'SHA224':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA256;
				alg = $temp$alg;
				continue messageSizeBytes;
			case 'SHA256':
				return 8;
			case 'SHA384':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue messageSizeBytes;
			case 'SHA512':
				return 16;
			case 'SHA512_224':
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue messageSizeBytes;
			default:
				var $temp$alg = $ktonon$elm_crypto$Crypto$SHA$Alg$SHA512;
				alg = $temp$alg;
				continue messageSizeBytes;
		}
	}
};
var $ktonon$elm_crypto$Crypto$SHA$Chunk$sizeInBits = A2(
	$elm$core$Basics$composeR,
	$ktonon$elm_crypto$Crypto$SHA$Chunk$sizeInBytes,
	$elm$core$Basics$mul(8));
var $ktonon$elm_crypto$Crypto$SHA$Preprocess$calculateK = F2(
	function (alg, l) {
		var c = $ktonon$elm_crypto$Crypto$SHA$Chunk$sizeInBits(alg);
		return A2(
			$elm$core$Basics$modBy,
			c,
			((c - 1) - (8 * $ktonon$elm_crypto$Crypto$SHA$Preprocess$messageSizeBytes(alg))) - A2($elm$core$Basics$modBy, c, l));
	});
var $ktonon$elm_word$Word$Bytes$fromInt = F2(
	function (byteCount, value) {
		return (byteCount > 4) ? A2(
			$elm$core$List$append,
			A2(
				$ktonon$elm_word$Word$Bytes$fromInt,
				byteCount - 4,
				(value / A2($elm$core$Basics$pow, 2, 32)) | 0),
			A2($ktonon$elm_word$Word$Bytes$fromInt, 4, 4294967295 & value)) : A2(
			$elm$core$List$map,
			function (i) {
				return 255 & (value >>> ((byteCount - i) * A2($elm$core$Basics$pow, 2, 3)));
			},
			A2($elm$core$List$range, 1, byteCount));
	});
var $ktonon$elm_crypto$Crypto$SHA$Preprocess$postfix = F2(
	function (alg, messageSize) {
		return $elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[128]),
					A2(
					$elm$core$List$repeat,
					((A2($ktonon$elm_crypto$Crypto$SHA$Preprocess$calculateK, alg, messageSize) - 7) / 8) | 0,
					0),
					A2(
					$ktonon$elm_word$Word$Bytes$fromInt,
					$ktonon$elm_crypto$Crypto$SHA$Preprocess$messageSizeBytes(alg),
					messageSize)
				]));
	});
var $ktonon$elm_crypto$Crypto$SHA$Preprocess$preprocess = F2(
	function (alg, message) {
		return A2(
			$elm$core$List$append,
			message,
			A2(
				$ktonon$elm_crypto$Crypto$SHA$Preprocess$postfix,
				alg,
				8 * $elm$core$List$length(message)));
	});
var $ktonon$elm_crypto$Crypto$SHA$digest = function (alg) {
	return A2(
		$elm$core$Basics$composeR,
		$ktonon$elm_crypto$Crypto$SHA$Preprocess$preprocess(alg),
		A2(
			$elm$core$Basics$composeR,
			$ktonon$elm_word$Word$fromBytes(
				$ktonon$elm_crypto$Crypto$SHA$Alg$wordSize(alg)),
			$ktonon$elm_crypto$Crypto$SHA$Process$chunks(alg)));
};
var $ktonon$elm_word$Word$Bytes$splitUtf8 = function (x) {
	return (x < 128) ? _List_fromArray(
		[x]) : ((x < 2048) ? _List_fromArray(
		[192 | ((1984 & x) >>> 6), 128 | (63 & x)]) : _List_fromArray(
		[224 | ((61440 & x) >>> 12), 128 | ((4032 & x) >>> 6), 128 | (63 & x)]));
};
var $ktonon$elm_word$Word$Bytes$fromUTF8 = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$toList,
	A2(
		$elm$core$List$foldl,
		F2(
			function (_char, acc) {
				return A2(
					$elm$core$List$append,
					acc,
					$ktonon$elm_word$Word$Bytes$splitUtf8(
						$elm$core$Char$toCode(_char)));
			}),
		_List_Nil));
var $ktonon$elm_word$Word$Hex$fromArray = function (toHex) {
	return A2(
		$elm$core$Array$foldl,
		F2(
			function (val, acc) {
				return _Utils_ap(
					acc,
					toHex(val));
			}),
		'');
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $ktonon$elm_word$Word$Hex$fromIntAccumulator = function (x) {
	return $elm$core$String$cons(
		$elm$core$Char$fromCode(
			(x < 10) ? (x + 48) : ((x + 97) - 10)));
};
var $ktonon$elm_word$Word$Hex$fromInt = F2(
	function (charCount, value) {
		return A3(
			$elm$core$List$foldl,
			function (i) {
				return $ktonon$elm_word$Word$Hex$fromIntAccumulator(
					15 & (value >>> (i * A2($elm$core$Basics$pow, 2, 2))));
			},
			'',
			A2($elm$core$List$range, 0, charCount - 1));
	});
var $ktonon$elm_word$Word$Hex$fromWord = function (word) {
	switch (word.$) {
		case 'W':
			var x = word.a;
			return A2($ktonon$elm_word$Word$Hex$fromInt, 8, x);
		case 'D':
			var h = word.a;
			var l = word.b;
			return _Utils_ap(
				A2($ktonon$elm_word$Word$Hex$fromInt, 8, h),
				A2($ktonon$elm_word$Word$Hex$fromInt, 8, l));
		default:
			return 'M';
	}
};
var $ktonon$elm_word$Word$Hex$fromWordArray = $ktonon$elm_word$Word$Hex$fromArray($ktonon$elm_word$Word$Hex$fromWord);
var $ktonon$elm_crypto$Crypto$Hash$sha256 = function (message) {
	return $ktonon$elm_word$Word$Hex$fromWordArray(
		A2(
			$ktonon$elm_crypto$Crypto$SHA$digest,
			$ktonon$elm_crypto$Crypto$SHA$Alg$SHA256,
			$ktonon$elm_word$Word$Bytes$fromUTF8(message)));
};
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$foldedSha256KeyEncoder = F2(
	function (blockSize, string) {
		return $elm$core$Array$fromList(
			A2(
				$billstclair$elm_crypto_string$Crypto$Strings$Encoding$fold,
				blockSize,
				A2(
					$elm$core$Result$withDefault,
					_List_fromArray(
						[102, 117, 99, 107, 32, 109, 101, 32, 104, 97, 114, 100, 101, 114]),
					A2(
						$billstclair$elm_crypto_string$Crypto$Strings$Encoding$hexDecoder,
						2,
						$ktonon$elm_crypto$Crypto$Hash$sha256(string)))));
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$foldedSha256KeyEncoding = {encoder: $billstclair$elm_crypto_string$Crypto$Strings$Encoding$foldedSha256KeyEncoder, name: 'Folded SHA256 Key Encoding'};
var $billstclair$elm_crypto_string$Crypto$Strings$config = {
	chaining: $billstclair$elm_crypto_string$Crypto$Strings$Chaining$ctrChaining,
	encoding: $billstclair$elm_crypto_string$Crypto$Strings$Encoding$base64Encoding(60),
	encryption: $billstclair$elm_crypto_string$Crypto$Strings$BlockAes$encryption,
	keyEncoding: $billstclair$elm_crypto_string$Crypto$Strings$Encoding$foldedSha256KeyEncoding
};
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$marker = 128;
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$stripTrailingZeroesLoop = function (block) {
	return function (idx) {
		if (idx < 0) {
			return block;
		} else {
			var _v0 = A2($elm$core$Array$get, idx, block);
			if (_v0.$ === 'Nothing') {
				return block;
			} else {
				var x = _v0.a;
				return (!(!x)) ? A3($elm$core$Array$slice, 0, 1 + idx, block) : A2($billstclair$elm_crypto_string$Crypto$Strings$Crypt$stripTrailingZeroesLoop, block, idx - 1);
			}
		}
	};
};
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$stripTrailingZeroes = function (block) {
	var len = $elm$core$Array$length(block);
	return A2($billstclair$elm_crypto_string$Crypto$Strings$Crypt$stripTrailingZeroesLoop, block, len - 1);
};
function $billstclair$elm_crypto_string$Crypto$Strings$Crypt$cyclic$unpadLastBlockLoop() {
	return F2(
		function (blocks, res) {
			if (!blocks.b) {
				return _List_Nil;
			} else {
				if (!blocks.b.b) {
					var blk = blocks.a;
					var block = $billstclair$elm_crypto_string$Crypto$Strings$Crypt$stripTrailingZeroes(blk);
					var len = $elm$core$Array$length(block);
					var last = A2(
						$elm$core$Maybe$withDefault,
						1,
						A2($elm$core$Array$get, len - 1, block));
					var b = _Utils_eq(last, $billstclair$elm_crypto_string$Crypto$Strings$Crypt$marker) ? A3($elm$core$Array$slice, 0, -1, block) : block;
					return $elm$core$List$reverse(
						A2($elm$core$List$cons, b, res));
				} else {
					var head = blocks.a;
					var tail = blocks.b;
					return A2(
						$billstclair$elm_crypto_string$Crypto$Strings$Crypt$cyclic$unpadLastBlockLoop(),
						tail,
						A2($elm$core$List$cons, head, res));
				}
			}
		});
}
try {
	var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$unpadLastBlockLoop = $billstclair$elm_crypto_string$Crypto$Strings$Crypt$cyclic$unpadLastBlockLoop();
	$billstclair$elm_crypto_string$Crypto$Strings$Crypt$cyclic$unpadLastBlockLoop = function () {
		return $billstclair$elm_crypto_string$Crypto$Strings$Crypt$unpadLastBlockLoop;
	};
} catch ($) {
	throw 'Some top-level definitions from `Crypto.Strings.Crypt` are causing infinite recursion:\n\n  ┌─────┐\n  │    unpadLastBlockLoop\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$unpadLastBlock = function (blocks) {
	return A2($billstclair$elm_crypto_string$Crypto$Strings$Crypt$unpadLastBlockLoop, blocks, _List_Nil);
};
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$blocksToList = function (blocks) {
	return $elm$core$List$concat(
		A2(
			$elm$core$List$map,
			$elm$core$Array$toList,
			$billstclair$elm_crypto_string$Crypto$Strings$Crypt$unpadLastBlock(blocks)));
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$extendArray = F3(
	function (size, fill, array) {
		var count = size - $elm$core$Array$length(array);
		return (count <= 0) ? array : A2(
			$elm$core$Array$append,
			array,
			A2($elm$core$Array$repeat, count, fill));
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$padLastBlockLoop = function (blockSize) {
	return F2(
		function (blocks, res) {
			if (!blocks.b) {
				return _List_Nil;
			} else {
				if (!blocks.b.b) {
					var blk = blocks.a;
					var block = $billstclair$elm_crypto_string$Crypto$Strings$Crypt$stripTrailingZeroes(blk);
					var len = $elm$core$Array$length(block);
					var last = A2(
						$elm$core$Maybe$withDefault,
						0,
						A2($elm$core$Array$get, len - 1, block));
					var _v1 = (_Utils_eq(len, blockSize) && ((!last) || _Utils_eq(last, $billstclair$elm_crypto_string$Crypto$Strings$Crypt$marker))) ? _Utils_Tuple3(
						$elm$core$Array$fromList(
							_List_fromArray(
								[$billstclair$elm_crypto_string$Crypto$Strings$Crypt$marker])),
						_List_fromArray(
							[block]),
						1) : ((_Utils_cmp(len, blockSize) < 0) ? _Utils_Tuple3(
						A2($elm$core$Array$push, $billstclair$elm_crypto_string$Crypto$Strings$Crypt$marker, block),
						_List_Nil,
						len + 1) : _Utils_Tuple3(block, _List_Nil, len));
					var b = _v1.a;
					var bs = _v1.b;
					var ln = _v1.c;
					var b2 = (_Utils_cmp(ln, blockSize) < 0) ? A2(
						$elm$core$Array$append,
						b,
						A2($elm$core$Array$repeat, blockSize - ln, 0)) : b;
					return $elm$core$List$reverse(
						A2(
							$elm$core$List$cons,
							b2,
							A2($elm$core$List$append, bs, res)));
				} else {
					var head = blocks.a;
					var tail = blocks.b;
					return A3(
						$billstclair$elm_crypto_string$Crypto$Strings$Crypt$padLastBlockLoop,
						blockSize,
						tail,
						A2($elm$core$List$cons, head, res));
				}
			}
		});
};
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$padLastBlock = F2(
	function (blockSize, blocks) {
		return A3($billstclair$elm_crypto_string$Crypto$Strings$Crypt$padLastBlockLoop, blockSize, blocks, _List_Nil);
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$listToBlocks = F2(
	function (blockSize, list) {
		return A2(
			$billstclair$elm_crypto_string$Crypto$Strings$Crypt$padLastBlock,
			blockSize,
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeL,
					A2($billstclair$elm_crypto_string$Crypto$Strings$Crypt$extendArray, blockSize, 0),
					$elm$core$Array$fromList),
				A2($elm_community$list_extra$List$Extra$greedyGroupsOf, blockSize, list)));
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$decryptList = F3(
	function (config, _v0, list) {
		var key = _v0.a;
		var encryption = config.encryption;
		var pair = _Utils_Tuple2(encryption.encryptor, encryption.decryptor);
		var chaining = config.chaining;
		var chainer = chaining.decryptor;
		var step = F2(
			function (block, _v3) {
				var blocks = _v3.a;
				var state_ = _v3.b;
				var _v4 = A4(chainer, state_, pair, key, block);
				var outBlock = _v4.a;
				var state2 = _v4.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, outBlock, blocks),
					state2);
			});
		var _v1 = A2(chaining.separator, encryption.blockSize, list);
		var cipherList = _v1.a;
		var state = _v1.b;
		var cipherBlocks = A2($billstclair$elm_crypto_string$Crypto$Strings$Crypt$listToBlocks, encryption.blockSize, cipherList);
		var _v2 = A3(
			$elm$core$List$foldl,
			step,
			_Utils_Tuple2(_List_Nil, state),
			cipherBlocks);
		var plainBlocks = _v2.a;
		return $billstclair$elm_crypto_string$Crypto$Strings$Crypt$blocksToList(
			$elm$core$List$reverse(plainBlocks));
	});
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $billstclair$elm_crypto_string$Recovered$UTF8$escape = F3(
	function (pattern, replacement, str) {
		return A3(
			$elm$regex$Regex$replace,
			A2(
				$elm$core$Maybe$withDefault,
				$elm$regex$Regex$never,
				$elm$regex$Regex$fromString(pattern)),
			function (_v0) {
				var match = _v0.match;
				return replacement(match);
			},
			str);
	});
var $billstclair$elm_crypto_string$Recovered$UTF8$toCode = $elm$core$Char$toCode;
var $billstclair$elm_crypto_string$Recovered$UTF8$getKeyCode = F2(
	function (i, xs) {
		var _v0 = A2($elm$core$Array$get, i, xs);
		if (_v0.$ === 'Just') {
			var c = _v0.a;
			return $billstclair$elm_crypto_string$Recovered$UTF8$toCode(c);
		} else {
			return 0;
		}
	});
var $billstclair$elm_crypto_string$Recovered$UTF8$strToCharArray = A2($elm$core$Basics$composeR, $elm$core$String$toList, $elm$core$Array$fromList);
var $billstclair$elm_crypto_string$Recovered$UTF8$fromCode = $elm$core$Char$fromCode;
var $billstclair$elm_crypto_string$Recovered$UTF8$stringify = A2($elm$core$Basics$composeR, $billstclair$elm_crypto_string$Recovered$UTF8$fromCode, $elm$core$String$fromChar);
var $billstclair$elm_crypto_string$Recovered$UTF8$threeSingleToMulti = function (three) {
	var xs = $billstclair$elm_crypto_string$Recovered$UTF8$strToCharArray(three);
	var t3 = 63 & A2($billstclair$elm_crypto_string$Recovered$UTF8$getKeyCode, 2, xs);
	var t2 = (63 & A2($billstclair$elm_crypto_string$Recovered$UTF8$getKeyCode, 1, xs)) << 6;
	var t1 = (15 & A2($billstclair$elm_crypto_string$Recovered$UTF8$getKeyCode, 0, xs)) << 12;
	return $billstclair$elm_crypto_string$Recovered$UTF8$stringify(t3 | (t2 | t1));
};
var $billstclair$elm_crypto_string$Recovered$UTF8$twoSingleToMulti = function (two) {
	var xs = $billstclair$elm_crypto_string$Recovered$UTF8$strToCharArray(two);
	var t2 = 63 & A2($billstclair$elm_crypto_string$Recovered$UTF8$getKeyCode, 1, xs);
	var t1 = (31 & A2($billstclair$elm_crypto_string$Recovered$UTF8$getKeyCode, 0, xs)) << 6;
	return $billstclair$elm_crypto_string$Recovered$UTF8$stringify(t2 | t1);
};
var $billstclair$elm_crypto_string$Recovered$UTF8$toMultiByte = function (str) {
	var two = '[\\u00c0-\\u00df][\\u0080-\\u00bf]';
	var three = '[\\u00e0-\\u00ef][\\u0080-\\u00bf][\\u0080-\\u00bf]';
	return A3(
		$billstclair$elm_crypto_string$Recovered$UTF8$escape,
		two,
		$billstclair$elm_crypto_string$Recovered$UTF8$twoSingleToMulti,
		A3($billstclair$elm_crypto_string$Recovered$UTF8$escape, three, $billstclair$elm_crypto_string$Recovered$UTF8$threeSingleToMulti, str));
};
var $billstclair$elm_crypto_string$Crypto$Strings$Encoding$plainTextDecoder = function (list) {
	return $billstclair$elm_crypto_string$Recovered$UTF8$toMultiByte(
		$elm$core$String$fromList(
			A2($elm$core$List$map, $elm$core$Char$fromCode, list)));
};
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$decrypt = F3(
	function (config, key, string) {
		var _v0 = config.encoding.decoder(string);
		if (_v0.$ === 'Err') {
			var msg = _v0.a;
			return $elm$core$Result$Err(msg);
		} else {
			var list = _v0.a;
			return $elm$core$Result$Ok(
				$billstclair$elm_crypto_string$Crypto$Strings$Encoding$plainTextDecoder(
					A3($billstclair$elm_crypto_string$Crypto$Strings$Crypt$decryptList, config, key, list)));
		}
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Types$Key = function (a) {
	return {$: 'Key', a: a};
};
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$processKey = F2(
	function (config, string) {
		var keyEncoder = config.keyEncoding.encoder;
		var expander = config.encryption.keyExpander;
		return expander.expander(
			A2(keyEncoder, expander.keySize, string));
	});
var $billstclair$elm_crypto_string$Crypto$Strings$Crypt$expandKeyString = F2(
	function (config, passphrase) {
		var _v0 = A2($billstclair$elm_crypto_string$Crypto$Strings$Crypt$processKey, config, passphrase);
		if (_v0.$ === 'Err') {
			var msg = _v0.a;
			return $elm$core$Result$Err(msg);
		} else {
			var key = _v0.a;
			return $elm$core$Result$Ok(
				$billstclair$elm_crypto_string$Crypto$Strings$Types$Key(key));
		}
	});
var $billstclair$elm_crypto_string$Crypto$Strings$decrypt = F2(
	function (passphrase, ciphertext) {
		var _v0 = A2($billstclair$elm_crypto_string$Crypto$Strings$Crypt$expandKeyString, $billstclair$elm_crypto_string$Crypto$Strings$config, passphrase);
		if (_v0.$ === 'Err') {
			var msg = _v0.a;
			return $elm$core$Result$Err(msg);
		} else {
			var key = _v0.a;
			return A3($billstclair$elm_crypto_string$Crypto$Strings$Crypt$decrypt, $billstclair$elm_crypto_string$Crypto$Strings$config, key, ciphertext);
		}
	});
var $author$project$Secrets$doDecrypt = F2(
	function (password, cypher) {
		var _v0 = A2($billstclair$elm_crypto_string$Crypto$Strings$decrypt, password, cypher);
		if (_v0.$ === 'Ok') {
			var secret = _v0.a;
			return secret;
		} else {
			return '';
		}
	});
var $author$project$Secrets$findAccount = function (password) {
	var _v0 = A2(
		$elm$core$List$filter,
		A2(
			$elm$core$Basics$composeR,
			$author$project$Secrets$doDecrypt(password),
			$elm$core$String$startsWith('name: ')),
		$author$project$Secrets$accounts);
	if (_v0.b) {
		if (!_v0.b.b) {
			var x = _v0.a;
			return $elm$core$Maybe$Just(
				A2(
					$elm$core$String$dropLeft,
					6,
					A2($author$project$Secrets$doDecrypt, password, x)));
		} else {
			return $elm$core$Maybe$Just('ERROR');
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$maybe_extra$Maybe$Extra$orList = function (maybes) {
	orList:
	while (true) {
		if (!maybes.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (maybes.a.$ === 'Nothing') {
				var _v1 = maybes.a;
				var rest = maybes.b;
				var $temp$maybes = rest;
				maybes = $temp$maybes;
				continue orList;
			} else {
				var answer = maybes.a.a;
				return $elm$core$Maybe$Just(answer);
			}
		}
	}
};
var $author$project$Karakters$getcharstory = function (name) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Dict$toList,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$List$filter(
				function (_v0) {
					var _char = _v0.a;
					var _v1 = _v0.b;
					var nm = _v1.a;
					var secret = _v1.b;
					if (nm.$ === 'Nothing') {
						return false;
					} else {
						var nm2 = nm.a;
						return _Utils_eq(nm2, name);
					}
				}),
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$map(
					function (_v3) {
						var _char = _v3.a;
						var _v4 = _v3.b;
						var secret = _v4.b;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(_char, secret));
					}),
				$elm_community$maybe_extra$Maybe$Extra$orList)));
};
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $author$project$Types$CharWritten = function (a) {
	return {$: 'CharWritten', a: a};
};
var $elm$http$Http$expectBytesResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'arraybuffer',
			_Http_toDataView,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$http$Http$expectWhatever = function (toMsg) {
	return A2(
		$elm$http$Http$expectBytesResponse,
		toMsg,
		$elm$http$Http$resolve(
			function (_v0) {
				return $elm$core$Result$Ok(_Utils_Tuple0);
			}));
};
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $author$project$Database$schrijfcharjson = F2(
	function (name, ix) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'range',
					$elm$json$Json$Encode$string(
						'chars!A' + $elm$core$String$fromInt(ix))),
					_Utils_Tuple2(
					'majorDimension',
					$elm$json$Json$Encode$string('ROWS')),
					_Utils_Tuple2(
					'values',
					A2(
						$elm$json$Json$Encode$list,
						$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
						_List_fromArray(
							[
								_List_fromArray(
								[name])
							])))
				]));
	});
var $author$project$Database$schrijfchar = F3(
	function (name, ix, oauth) {
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$jsonBody(
					A2($author$project$Database$schrijfcharjson, name, ix)),
				expect: $elm$http$Http$expectWhatever($author$project$Types$CharWritten),
				headers: _List_fromArray(
					[
						A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
					]),
				method: 'PUT',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: $author$project$Database$url(
					'chars!A' + ($elm$core$String$fromInt(ix) + '?valueInputOption=USER_ENTERED'))
			});
	});
var $author$project$Types$RSVPWritten = function (a) {
	return {$: 'RSVPWritten', a: a};
};
var $author$project$Database$showrsvp = function (r) {
	switch (r.$) {
		case 'Yes':
			return 'Ja';
		case 'No':
			return 'Nee';
		default:
			return 'Misschien';
	}
};
var $author$project$Database$schrijfrsvpjson = F2(
	function (rsvp, ix) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'range',
					$elm$json$Json$Encode$string(
						'RSVP!B' + $elm$core$String$fromInt(ix))),
					_Utils_Tuple2(
					'majorDimension',
					$elm$json$Json$Encode$string('ROWS')),
					_Utils_Tuple2(
					'values',
					A2(
						$elm$json$Json$Encode$list,
						$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
						_List_fromArray(
							[
								_List_fromArray(
								[
									$author$project$Database$showrsvp(rsvp)
								])
							])))
				]));
	});
var $author$project$Database$schrijfrsvp = F3(
	function (rsvp, ix, oauth) {
		return $elm$http$Http$request(
			{
				body: $elm$http$Http$jsonBody(
					A2($author$project$Database$schrijfrsvpjson, rsvp, ix)),
				expect: $elm$http$Http$expectWhatever($author$project$Types$RSVPWritten),
				headers: _List_fromArray(
					[
						A2($elm$http$Http$header, 'Authorization', 'Bearer ' + oauth)
					]),
				method: 'PUT',
				timeout: $elm$core$Maybe$Nothing,
				tracker: $elm$core$Maybe$Nothing,
				url: $author$project$Database$url(
					'RSVP!B' + ($elm$core$String$fromInt(ix) + '?valueInputOption=USER_ENTERED'))
			});
	});
var $author$project$Main$update = F3(
	function (_v0, msg, model) {
		var todo = _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
		if (model.$ === 'NotLoggedIn') {
			var m = model.a;
			switch (msg.$) {
				case 'PassChange':
					var newpass = msg.a;
					return _Utils_Tuple3(
						$author$project$Types$NotLoggedIn(
							_Utils_update(
								m,
								{password: newpass})),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				case 'RSVPReceived':
					var result = msg.a;
					if (result.$ === 'Ok') {
						var data = result.a;
						return _Utils_Tuple3(
							$author$project$Types$NotLoggedIn(
								_Utils_update(
									m,
									{
										fromrsvpsheet: $elm$core$Maybe$Just(data)
									})),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					} else {
						return todo;
					}
				case 'CharReceived':
					var result = msg.a;
					if (result.$ === 'Ok') {
						var data = result.a;
						return _Utils_Tuple3(
							$author$project$Types$NotLoggedIn(
								_Utils_update(
									m,
									{
										fromcharsheet: $elm$core$Maybe$Just(data)
									})),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					} else {
						return todo;
					}
				case 'PoirotReady':
					var p = msg.a;
					if (p.$ === 'Ok') {
						var p2 = p.a;
						return _Utils_Tuple3(
							$author$project$Types$NotLoggedIn(
								_Utils_update(
									m,
									{
										poirot: _Utils_Tuple2(
											$elm$core$Maybe$Just(p2),
											$elm$core$Maybe$Nothing)
									})),
							A2($elm$core$Task$perform, $author$project$Types$PoirotGoing, $elm$time$Time$now),
							$MartinSStewart$elm_audio$Audio$cmdNone);
					} else {
						return todo;
					}
				case 'Login':
					var _v6 = $author$project$Secrets$findAccount(m.password);
					if (_v6.$ === 'Nothing') {
						return todo;
					} else {
						var name = _v6.a;
						return _Utils_Tuple3(
							$author$project$Types$LoggedIn(
								{
									charStatus: $author$project$Types$NotSelected,
									charstory: A2(
										$elm$core$Maybe$andThen,
										function (x) {
											return A2($author$project$Karakters$getcharstory, name, x);
										},
										m.fromcharsheet),
									fromcharsheet: m.fromcharsheet,
									hover: m.hover,
									name: name,
									oauth: m.oauth,
									poirot: m.poirot,
									rsvp: A2(
										$elm$core$Maybe$map,
										$elm$core$Tuple$first,
										A2(
											$elm$core$Maybe$andThen,
											function (x) {
												return A2($elm$core$Dict$get, name, x);
											},
											m.fromrsvpsheet)),
									rsvpix: A2(
										$elm$core$Maybe$map,
										$elm$core$Tuple$second,
										A2(
											$elm$core$Maybe$andThen,
											function (x) {
												return A2($elm$core$Dict$get, name, x);
											},
											m.fromrsvpsheet))
								}),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					}
				case 'HoverStart':
					var n = msg.a;
					return _Utils_Tuple3(
						$author$project$Types$NotLoggedIn(
							_Utils_update(
								m,
								{
									hover: $elm$core$Maybe$Just(n)
								})),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				case 'HoverEnd':
					var n = msg.a;
					return _Utils_Tuple3(
						$author$project$Types$NotLoggedIn(
							_Utils_update(
								m,
								{
									hover: function () {
										var _v7 = m.hover;
										if (_v7.$ === 'Nothing') {
											return $elm$core$Maybe$Nothing;
										} else {
											var n2 = _v7.a;
											return _Utils_eq(n, n2) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(n2);
										}
									}()
								})),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				case 'RSVPWritten':
					return _Utils_Tuple3(
						model,
						$author$project$Database$readRSVP(m.oauth),
						$MartinSStewart$elm_audio$Audio$cmdNone);
				case 'CharWritten':
					return _Utils_Tuple3(
						model,
						$author$project$Database$readChar(m.oauth),
						$MartinSStewart$elm_audio$Audio$cmdNone);
				default:
					return todo;
			}
		} else {
			var m = model.a;
			switch (msg.$) {
				case 'HoverStart':
					var n = msg.a;
					return _Utils_Tuple3(
						$author$project$Types$LoggedIn(
							_Utils_update(
								m,
								{
									hover: $elm$core$Maybe$Just(n)
								})),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				case 'HoverEnd':
					var n = msg.a;
					return _Utils_Tuple3(
						$author$project$Types$LoggedIn(
							_Utils_update(
								m,
								{
									hover: function () {
										var _v9 = m.hover;
										if (_v9.$ === 'Nothing') {
											return $elm$core$Maybe$Nothing;
										} else {
											var n2 = _v9.a;
											return _Utils_eq(n, n2) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(n2);
										}
									}()
								})),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				case 'ChooseChar':
					var i = msg.a;
					var newstatus = function () {
						var _v10 = m.charStatus;
						if (_v10.$ === 'NotSelected') {
							return (i === '') ? $author$project$Types$NotSelected : $author$project$Types$Confirming(i);
						} else {
							return (i === '') ? $author$project$Types$NotSelected : m.charStatus;
						}
					}();
					return _Utils_Tuple3(
						$author$project$Types$LoggedIn(
							_Utils_update(
								m,
								{charStatus: newstatus})),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				case 'BevestigChar':
					var _v11 = m.charStatus;
					if (_v11.$ === 'NotSelected') {
						return todo;
					} else {
						var _char = _v11.a;
						var _v12 = A2(
							$elm$core$Maybe$andThen,
							function (d) {
								return A2($elm$core$Dict$get, _char, d);
							},
							m.fromcharsheet);
						if ((_v12.$ === 'Just') && (_v12.a.a.$ === 'Nothing')) {
							var _v13 = _v12.a;
							var _v14 = _v13.a;
							var ix = _v13.c;
							return _Utils_Tuple3(
								$author$project$Types$LoggedIn(
									_Utils_update(
										m,
										{charStatus: $author$project$Types$NotSelected})),
								A3($author$project$Database$schrijfchar, m.name, ix, m.oauth),
								$MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							return todo;
						}
					}
				case 'RSVPReceived':
					var result = msg.a;
					if (result.$ === 'Ok') {
						var data = result.a;
						return _Utils_Tuple3(
							$author$project$Types$LoggedIn(
								_Utils_update(
									m,
									{
										rsvp: A2(
											$elm$core$Maybe$map,
											$elm$core$Tuple$first,
											A2($elm$core$Dict$get, m.name, data)),
										rsvpix: A2(
											$elm$core$Maybe$map,
											$elm$core$Tuple$second,
											A2($elm$core$Dict$get, m.name, data))
									})),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					} else {
						return todo;
					}
				case 'CharReceived':
					var result = msg.a;
					if (result.$ === 'Ok') {
						var data = result.a;
						return _Utils_Tuple3(
							$author$project$Types$LoggedIn(
								_Utils_update(
									m,
									{
										charstory: A2($author$project$Karakters$getcharstory, m.name, data),
										fromcharsheet: $elm$core$Maybe$Just(data)
									})),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone);
					} else {
						return todo;
					}
				case 'RSVPButton':
					var rsvp = msg.a;
					var _v17 = m.rsvpix;
					if (_v17.$ === 'Nothing') {
						return todo;
					} else {
						var idx = _v17.a;
						return _Utils_Tuple3(
							$author$project$Types$LoggedIn(m),
							A3($author$project$Database$schrijfrsvp, rsvp, idx, m.oauth),
							$MartinSStewart$elm_audio$Audio$cmdNone);
					}
				case 'RSVPWritten':
					return _Utils_Tuple3(
						model,
						$author$project$Database$readRSVP(m.oauth),
						$MartinSStewart$elm_audio$Audio$cmdNone);
				case 'CharWritten':
					return _Utils_Tuple3(
						model,
						$author$project$Database$readChar(m.oauth),
						$MartinSStewart$elm_audio$Audio$cmdNone);
				default:
					return todo;
			}
		}
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $author$project$Utils$relwidth = function (i) {
	return A2(
		$elm$html$Html$Attributes$attribute,
		'width',
		$elm$core$String$fromInt(i) + '%');
};
var $elm$html$Html$section = _VirtualDom_node('section');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Types$Login = {$: 'Login'};
var $author$project$Types$PassChange = function (a) {
	return {$: 'PassChange', a: a};
};
var $author$project$Types$RSVPButton = function (a) {
	return {$: 'RSVPButton', a: a};
};
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$Karakters$allekarakters = _List_fromArray(
	[
		_Utils_Tuple3('mr. Justus ten Have', 'ten have', 'De discrete advocaat'),
		_Utils_Tuple3('Theodoor (Theo) van Aerden', 'theodoor', 'De afgunstige broer'),
		_Utils_Tuple3('Marta van Aerden', 'marta', 'De toegewijde echtgenote'),
		_Utils_Tuple3('Susanna van Beek', 'susanna', 'De kordate onderneemster'),
		_Utils_Tuple3('Gijsbert van Beek', 'gijsbert', 'De wankele apotheker'),
		_Utils_Tuple3('Gerrit van Kessel', 'gerrit', 'De kwistige advocaat'),
		_Utils_Tuple3('Rosalie Smeets', 'rosalie', 'De ongrijpbare actrice'),
		_Utils_Tuple3('Michiel Smeets', 'michael', 'De rokkenjagende acteur'),
		_Utils_Tuple3('Margareta (Margje) Geerlings', 'geerlings', 'De bescheiden gouvernante'),
		_Utils_Tuple3('Willem Brouwer', 'brouwer', 'De plichtsgetrouwe butler'),
		_Utils_Tuple3('Janne de Vries', 'janne', 'De oplettende keukenmeid'),
		_Utils_Tuple3('Alexander Goedhart', 'alexander', 'De begerige verzamelaar'),
		_Utils_Tuple3('dr. Lodewijk van Lier', 'dr lodewijk', 'De achteloze dokter'),
		_Utils_Tuple3('Zuster Elisabeth Koster', 'elisabeth', 'De ijverige zuster'),
		_Utils_Tuple3('Bernard van Houten', 'bernard', 'De malafide compagnon'),
		_Utils_Tuple3('Eduard (Eddie) van Loon', 'eduard', 'De vasthoudende journalist'),
		_Utils_Tuple3('Pastoor Johannes (Jan) Hendriks', 'hendriks', 'De beschonken priester'),
		_Utils_Tuple3('Julian van Mersbergen', 'julian', 'De baatzuchtige protegé')
	]);
var $author$project$Karakters$id2namedis = function (id) {
	var _v0 = A2(
		$elm$core$List$filter,
		function (_v1) {
			var id2 = _v1.b;
			return _Utils_eq(id, id2);
		},
		$author$project$Karakters$allekarakters);
	if (_v0.b && (!_v0.b.b)) {
		var _v2 = _v0.a;
		var name = _v2.a;
		var dis = _v2.c;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, dis));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm_community$maybe_extra$Maybe$Extra$unwrap = F3(
	function (_default, f, m) {
		if (m.$ === 'Nothing') {
			return _default;
		} else {
			var a = m.a;
			return f(a);
		}
	});
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$Main$viewFirstPage = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('about-cols')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('about-col'),
						$elm$html$Html$Attributes$class('helveticalarge')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('\r\n          Je hebt een persoonlijk wachtwoord gekregen: hiermee kun je je personage kiezen. Je krijgt alle informatie die je nodig hebt om jezelf vrij te pleiten (of verdacht te maken).\r\n          Voel je vrij om je zo veel of weinig in te leven in je karaker als je wilt en leuk vindt. Ga all out met een kostuum of kom alleen met de intentie om te winnen — alles is goed!\r\n        ')
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('about-col'),
						$elm$html$Html$Attributes$class('helveticalarge')
					]),
				function () {
					if (model.$ === 'NotLoggedIn') {
						var m = model.a;
						return _List_fromArray(
							[
								$elm$html$Html$text('Vul hieronder je wachtwoord in:'),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								A2(
								$elm$html$Html$input,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$placeholder('password'),
										$elm$html$Html$Attributes$value(m.password),
										$elm$html$Html$Events$onInput($author$project$Types$PassChange)
									]),
								_List_Nil),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick($author$project$Types$Login)
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Log in')
									]))
							]);
					} else {
						var m = model.a;
						return _List_fromArray(
							[
								$elm$html$Html$text('Ingelogd als ' + m.name),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								$elm$html$Html$text(
								'RSVP-status: ' + (A3($elm_community$maybe_extra$Maybe$Extra$unwrap, '{backend is nog niet geladen}', $author$project$Database$showrsvp, m.rsvp) + ' ')),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										$author$project$Types$RSVPButton($author$project$Types$Yes))
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Ik kom!')
									])),
								$elm$html$Html$text(' '),
								A2(
								$elm$html$Html$button,
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(
										$author$project$Types$RSVPButton($author$project$Types$No))
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Ik kom niet')
									])),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								function () {
								var _v1 = m.charstory;
								if (_v1.$ === 'Nothing') {
									return $elm$html$Html$text('Je hebt nog geen personage gekozen. Kies er een op de vorige pagina!');
								} else {
									var _v2 = _v1.a;
									var id = _v2.a;
									var _v3 = $author$project$Karakters$id2namedis(id);
									if (_v3.$ === 'Just') {
										var _v4 = _v3.a;
										var name = _v4.a;
										return $elm$html$Html$text(
											A2(
												$elm$core$String$join,
												'',
												_List_fromArray(
													['Je bent ', name, '! Klik op je polaroid voor jouw geheime informatie. Zorg dat je dit tijdens het feestje paraat hebt!'])));
									} else {
										return $elm$html$Html$text('er gaat iets fout');
									}
								}
							}()
							]);
					}
				}())
			]));
};
var $author$project$Types$BevestigChar = {$: 'BevestigChar'};
var $author$project$Types$ChooseChar = function (a) {
	return {$: 'ChooseChar', a: a};
};
var $author$project$Types$HoverEnd = function (a) {
	return {$: 'HoverEnd', a: a};
};
var $author$project$Types$HoverStart = function (a) {
	return {$: 'HoverStart', a: a};
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$core$String$lines = _String_lines;
var $author$project$Main$breaktext = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$lines,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$map($elm$html$Html$text),
		$elm$core$List$intersperse(
			A2($elm$html$Html$br, _List_Nil, _List_Nil))));
var $author$project$Utils$cqhheight = function (i) {
	return A2(
		$elm$html$Html$Attributes$attribute,
		'height',
		$elm$core$String$fromInt(i) + 'cqh');
};
var $author$project$Main$dialogButton = F2(
	function (caption, msg) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					$elm$html$Html$Events$onClick(msg),
					$elm$html$Html$Attributes$class('mdl-button mdl-button--raised mdl-button--accent')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text(caption)
				]));
	});
var $author$project$Secrets$secrets = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('ten have', 'L5m/CHlqfBvcAEiyjjQw9VL3JOSIji8KzzR43mNHKeUwKaWCJj4ebnIu9wUD\neRQoT5CR/sx8AQH6PFAQQZkxRoDLLcamAjdztXYYFwUIiYOUJe/GB82aobbi\nGW5VH7vdyVEqAUCuBK9/wK9aVCpYRW/ZhYqCQvaDxpMY7+um1BCz3JR8WMdn\nqrOLlxEQd7e0AAXQaGplwl99ftvke4jxweofWP5Ow7WGOHMKQFIStoYiIM9A\noKEZOHUP1y9sfRPPlQweGiOM5Y0kLcmBH1Kzvz6Y2wnE8ZsZ5YBRWQnr9eAn\nzpgKbONLbTZP/XsPqVmf/yQVeajjbKHXI+K2Nb2DpDuVvpawW0jsT9404P81\nSbaepaeqYLqL2Z13vT8NrM8hyiPvFobnNVQVqWpDaDqAUT44ZUs9EOlywFXq\ny5JbOUZHycIJEZyLNwbgJIYyHo43IXaeVZoscUBKqMsMcy5L+GY6s2IRRpjk\nD0vS0IHNzj0='),
			_Utils_Tuple2('theodoor', 'L5m/CHlqfBvcAEiyjjQw9WqwZ46K6lptZ3zAdmkaDWhhmNWiXlfOxKvhtqHP\nYkGj0pPNRZeB4qAHjn6oKMowJcBo7aiFRcnFoPIlhZMEKQLl8mpGEzEmuV0H\noXcnrDhp5nbJSN4Rzr/Lrf1iEfEo1ZZ8hSSjrx6bBmZ87QX5e4TxrfCspkwF\nqCpuR6z2aAOEFB0PXeHVbfl1ETpHZlJ6DCz7CrY2mq+SOVdi5pRnMxzEx6PW\nDg9iQlFbeui0BDOdjvc3VNi5GrJSmYGXGFek5pFjw/FHBSreAOGTwxzUlCQC\ne6dRoTrlo0WAAYildB1rYzkLS99Ia55+Ow49v9VQsz7218bYyDApyLDc4edw\n4s2fGJWE1mdbf+92ICZuiFTn/0Xv3mEQahEL/Or2OPR2aBO08h4ITCPxUhIZ\ngXGnKMaSJK4Ra6zfXIJyL5IPexzWTTvbwhpR+eOTs73TOKEAgDzxxANd5ZxL\n+sq1BEzbwMaU3rI7rE8821l4vOHw2Iq7QGJSuL2VidtV+UCMcppoXWOIgaQ/\nM0ZRMTiVffsdMoU21R2ls1hbCzLFkDGbvJsN8AgQJdhPnSWNxFqJRmHb7YpM\nDw6ixNoZ6Kqqbvt7Mz9slGt9bHH217/AdOGVto6R2yEB9MIHU53sFA4sXffM\ns5PpcxIiFbGFPgwKp3bJv0XxX6lBIcYl6MJNgF5UpQExHVT0g+ER55FK++O1\n6b/Bulb6SEIEgVXNIbH6O8oBNNqrldYK5noyiEkoAidH+z+GI2sZZeLeyB+/\n2cCrs5kN4bGBXMM8+pbrWN+rj5gVxj0='),
			_Utils_Tuple2('marta', 'L5m/CHlqfBvcAEiyjjQw9cMXKSosE8CHWY71bX70k3Bf7YGtMGxBMMRxeI5L\nwbOlaLzc3jR0rOK9/RGBtEKJM2ZrJtY3o7+NTDQLbyenDiRnawOTxJJX6u0p\nTIIcfCpET3COiPT7p+dNGAGq0xdPf/Z/L5d1SszCXWyTw0wBPXjjMChKo95O\nHQEKhXyp30OqQuTn2V9XGja8edH97iWbP8I4SmPkLUjNUMSwf5aQTGvmGXLv\nnVsdk9E0c1O4/fLot5YA9GGbFjFMzviKr9rPq/I6GwN6+DBjCxGQLIdn7W7s\nlU4A/ImLrZFqF1r6of6Y7lH0ClmniXtzsJDAPwxXWfF0ymzoDRYbEoj5LRhO\nIGfvmmgeK13Y2thJBzshUiMQetKwk+GnnFHTyG/Na4+jX5zC09kz1ntxmUvO\nzyOuCP5cRmVZRdWv+DguSstY6KCYnr/tpXPAbvdHQKLGXsTqQA=='),
			_Utils_Tuple2('susanna', 'L5m/CHlqfBvcAEiyjjQw9QaIReWTSwRIWN0t2tjnvTYTVvmlK8e0k0kKVC7g\nbm/vrcryX2fx4iGbkLzDJJonQoRuiTYNr6xGEoedjjMqgO2yw8a9wYusxEes\nNHFunTLBQpRytpgGtfovGCUoD1Q69UbQhd6lTp/zYyAYNV9JlE32+ouUnbOG\n0c6wKOT4burwM0V50oUjQRM7gLAs3U4S7UNzGWGpMEauZM5BgWJtuS1Ers7C\nP9hqCHraooJ8LCMjYVATzTkNNxj979K+wsiBvnY+NrYUcxKOUdPyVHvGodrQ\no/UAT5P6CunvJgZeHBPE3+visJ1DSH3tfneRP3Ob4gy0S9UAXtPTX5DeigZN\ngnjeE/Ut/Uq8BWR/BMrHs3gEHxDWccCq/kdDxJrog4Zfdv13S5tuezfXn1nH\nEiWnX14S79rfLc+Zj9Sv9zUzDppvV0ZpjbEk7f+6I7KO/lHglZM0l8XjPoPh\n+lvBxwMCzcKm7g6TdlNkSRNi/hnMrixElMZLa1It97sLfoLxK0qWJgypG2lg\nZXxg2Ro2LUvHSSobZZmejc2xe1bvEDR7T0DZJ/sW/yUxanulJxo7XaHfhvkF\ncnvWoH2Jah3WIFriCMeNMsLWkgZdC5YQZ9oh0L/1Q/9HwqayfKM2fNe29gA8\nVUp3yIqfp/QVbpfMJ0LqSmlKgGWWrClsHYyypUH6ZSaMEthH9DXIfcbYFiFc\n4gh5jsi3cvVhhMLJF+YZfLzjoumJRFrwUSEUYczkBdZ/WK5A'),
			_Utils_Tuple2('gijsbert', 'L5m/CHlqfBvcAEiyjjQw9XRS0TFOe7eN5kmz3CBZteYoFZBTSJhhkhBDRAMP\n5b/u8inzyvhltfNKMUCYI8KOE1m4qfe5VHvJG5jsdtNCoW6Ai/vNjo2xUrz3\njDZYBFJJQ6BjUWKaaDolDg4oq+2W+c5HhnwbE9DbglC/y10j8F6fBiFRgjcZ\ntuSPqyX4h+844PMbMqcolq+SOMagz4oBnDcdiurLptUXzJ/96a8+r5ywEkEb\n1lilVGsx1NNUH4mBOmweYivkBpqK0pqEqSxlUrhqaCWvSeZL3UVzcZMgDRQ+\nRhEL67VSA82KpOQ0FeO6i6TBD5n3o53z86Uubr1E6h+Y1BbJGR/nYxMw8vNi\nrx5HaTynyRv1TVdR2ygKFxi94829F8drMtxb6gTfjOypU5FNDxCwL+MyMYbj\nC7lEw5ybzih6dreenoBQc1CkB2ID3lRFmv8g5fie9R0cj6QOC3Z2K9GITcdE\nOYpinKWsGYX7z+5rDWDK10bkVTvLuPs9m0cGGiM306o2gArlUM7GcnZO9QKJ\nXBqnrFiMPZSCq1jthM38R1FP6QIP4tmiV3hGywoKS8gpqs5lsNjzhA1WrdPR\nlftsup+aWP131GcChrOkRUux21dbwjJf8r7fsZJLNQYs5HRBT24hJjNe/NjD\nDA='),
			_Utils_Tuple2('gerrit', 'L5m/CHlqfBvcAEiyjjQw9WwJN5LZJFpZfMLbQNoI8IbEFu9TX/bFAgAniNns\nOaYRtSfRHyJfB1GE9hQubf5GXuqMXC5fxqihN8kAGcdPLOaNPg9FUEQCZL1A\nbYfhSsJSkmyPtw3Y/JfNz90jY33idG75XwSBgQVW7mz35LrBmD/7by9gWzqK\nLN7JIkei/zSpvPjklU3PtiGrCfCs9ky838Yp9d4fIvR2F3Fp8hQbcnF/NbBr\nHNLw41tTVYtw0aDilMzm9nA6D5Pb1sizfanizD1AebH7UBvclGn1R75h0V1/\nUaXuR+YvoIaHvocNb1zByodZAxEjCmccZ/hsTRWgqH4Kx/bZL2K0VBhgqgn5\nU9FRXO3wnxQl+lhXVqC+UsF1z1SjmmhiSpeIwkVQkwdag2PHhvYAnH575pRH\nmnrLS54Ot74YPn1XhCA4rPVXjBNleEiZ8odxKqIF8RvHuAX6X7OtVBkeuyJh\nwKo7/hKTEdRDJBP4tpVoPFP0BpDpBl65ryELQlGEksc6P4dchegKVYPWdLOh\nT651whdaNV7RvZfs5Oumjj6zadzST/eKF9iZeIx4aCWvtXdfTka08L5IDICa\nWcDKL6WOfQuwVWZqWO5mwn4NIGImlptIa1Z528H4i0FybKKgDjt2Ys4PpS6X\n7P0guBgGX6vKjr0zxFyGYabjq3CBtqmb9Fs/KsZ+kNwu'),
			_Utils_Tuple2('rosalie', 'L5m/CHlqfBvcAEiyjjQw9dNUJTu2mFj8UD8jUc4qvPnijnmCpZYgCjY5E9KS\nsanNuDVs6/CKqqT/Wq+OE7LIw3DC4rdF/O7xIrhzkLNIl7w+9LIemYCngIsH\nX4I0VgxrGNY7qBLwrFpEbohHFhG3Cojtad9UvjVQlHea1WHcRzlYq3/Pt8vI\nBveoPKTC6fx3iLyrlMa8JY9v5/W478cGiC0QX6S4BF6q+ZCC7KIc6aphPdQr\nXbXB14flnwFm1rJ1Ivo/I91ZSyeqICr1IKNp83kWpwcoVYYEeoEou8zSz0K4\npXGIjOKX+mIJ/Bk0MA+eXCNgCTQeHR4NOfhlPorsp2qTajgQvBLdtO4qfW01\neKVxrFH5t5dliqYc8zKYZb2/YqEy1y87EKxzUo7TNH1C48bXkdbCu+S3ocgM\nOBQ5E9SNdLHCaa6A/Kxr47zFU23zch3ClopA7C2kZQFHGTnDM2RyJ8xejuZw\nYyp/UJBFXOr5DlJXTlNueR7Kk7pTkyNAka6gznDyqwumSUPkumhegMYjkp6Q\nDuJjVr6WOc3uJ9mxcftwapuYuA/NeFiGB+Mqwsy3vA+88XgedmtxwuGAA3+U\nqdtLMy2VAbVVD0jgMQYyg955TlIqbmAC5UZ7wZi4HMzBswrZZwO3u3q1x5AT\nUWiwOuOIVUq2uY2EfPvARGDbkEENHdbuCoDBaG9PAFtE1Dg5RKCzOdP1AWEU\n3SxLmJLLcRJhOKYRVm2yVdedFdS+O66c7xW6u/Dxl+H/J9I5OXsfLtXTLqe8\n0OVpszbhI3yjnTmBhlIXzDpqynm0HeSblKnPXdYpVw/CKHQxSoOo4L7lCe9h\n+gFpFNF2VjxO5gj/r2HMDrxrGHXF+H6+5CGKj004Qc0/y+9mYBXuVIxzTj7g\nqFMGDflMEEHoD8vQldYSK8ADuq/aP3iPrW9xFwE0pRv1Cbk/sFlIHGq7PWhy\nXdxFhjI7c9JindNCCNCJMW4W7eu1IpB1143o4RhDnFI='),
			_Utils_Tuple2('michael', 'L5m/CHlqfBvcAEiyjjQw9ZiIqwRZmVR+0VG1QlAYoI+zQC26iHNxKtPJyDAb\nLUKmvZOe8VZ53Jx+l8289LODmEBC/mkVYN73zBL6j9i59BdO9an//ctyKZkh\nevBwVWTk3IMkZ+cEZDrbPABAFh+pYopSv41m6yXXfAl6mZy2yf6uzBoa3erS\nVHmctOKFah6A6jaF3NFRwDCwgZ7jUTMuoLJjQr8sDdIdaqF6HNuG172/Z8n8\nhLWdnrPC1SEMvHovxanslzBtRNgEiqpyfPA9CzJt430iT/9+4d2Sxv+/GnSm\nvKlHvzPCFCQGt5IY557gvYh6WmBFjKiii8ejn9OOKSB9bS7Mwyik2iUXINgb\n+ZMtXLvwgQk8Ecivp9kqUA59remERZ+6jB7cJ3hjoThJc4R+rSKjSrnbwNAA\nqXcD1d0Uq1WO/G6KrBJM0jmJJdJQfNN5QUh+T+cXAme2TSu01saZRWsygYhS\nmO4wTDbIRo2L7WcnkyPMDb2AhpGELNKimyyyDKlGmN0AE29e0Rt01QxQdhZx\nwbcqoW3EtJXNYUlOISHU8tIhjVK6Cv8c8gDBlET9Fy37RvmER6YiiLo0s7aj\noltScxN88mSrWXNEHvIaUI4TTi9oldwjByhXPV/0t70cI2j7gYIxqrTDDeA0\nYQBJtQbcYt7zc02thuFZSZrAmP2s09j5JbdfX+iiYUr9ZhamyyeZGk2aiHT0\nChkYGTmDgC6jA6qi2naW1g3oTUXmNUj67W9fjli/lFpRaF/lTJSMTQpD1cUt\n8efbG0xZW9mutXX05/1u5dpSJK7VTdMmUKAsXOMJmc/t3OfxhGXoUvS+IPvW\nDWt2z9KvG9ut3g=='),
			_Utils_Tuple2('geerlings', 'L5m/CHlqfBvcAEiyjjQw9dY/r58hqPSMO/ntdiERi5YunA2nJ/Rjiy7zC8ZE\n0TtbSOgkPZwcluM0E8LqzUkWb/ePiid78UazahKSl+HR7TKG8dDAy8cg4vOT\nQSSOs0q9XMDJHXCjfVwVe8k/eDhZQUZ8CG1vx7F2e6Wfhv4HTeRr/1Wb0IsA\n1LttFZrEW46OKQifFrN2zBMfu1XXI0ybYJyAdJXLAumz7vcA7ip7wtnqdLmt\niopRAhmJnQi1E1D2GH+ph+MPt8kTKbyry4VGn1FUQuA8KxjNE7ACXWdEM5Vv\nBZ9xGjluBdRyJd69iPDbhH5HOY1vcTQFCivql+Umh4Ui0y8OxzBmnps8Dzb6\ni+H29JvJDXrUsqBPb8fCpQ1nH6UUHh8vMvHzKYev3/t54ZqKka3hDYiHyTsR\nAcRRoAkZXKFyFaHeb9kJhmVkXpkexdh4Wn9ic6a5MI1f+Sdb2beQzgbVBV41\nrV703Eg8RfT7p/sCmKvNXUnnCmAjJX2a1Q1Dw8yuyxHgpeKwU2FwhFXy+mqj\nwWGfab8CJcZcvPmXc3jpZXIB3pbmTk8hMUKSdAbSEvD00E6hQd1N1/FkYtzo\nfv2ex19qI83ds120NxisFnkG3JVuJLw8y+terkNYK0m0lsbDLRPd8esqJdLr\nQU0ZsxLrovjHbp+fvtTOLnvta+y036X2bOEeF8jBQpekA+NCxwB10iwEUQeT\nWXEZCbuABvYIR2z9QsgIK1lcaXvr2kEhsCpKvkNDz6QxYithNMDWcGEu3bV4\ntXQR5TqBSG5ANcbvZNt8FY6+Vmke5GRzRWrmj4fJNN5F4M5oAxWXTxEgEnLd\ncKGVboWAL0sX9DYLemxqKm823tf6oVfCS2+5JO840soeaGyHrPtuxoRvr8h+\naRQxG1LsImi8tLws31JHzb6bBapq1FbisJ/qZCZsf0g+Cu15ygSxVo5c0aHS\n0uVb7mS8RsrZMaGc0MRLs5JUYaoTAoEozOVqIyGtzXuvg36CNhjm8WsOhhRq\n2M/CKGXLc/hDsHH8WCUt0q0af7PNeVB6PPWUJFmcbqZSU5LdxjX0nOOUuZtn\nbVwGl7WwpEaKld8TJfSYCdFw5WtfSvI4jFiP7a2+SsNLCBotHpqwikuTmJZN\nCz2QfS4iXi5IMqV7J/WcUyLStV4bYj5ZPclWpURmnNSzRpyYbSuwUndxruvp\nBYRr4mgyPIVaaM3WEX6Ik1kFYsrgNrnq9Xrm94Sck6wwldFCpTSGihR/jKkN\nPIeqCPGhNDc2FIIOie0iRoEGsOJdfijXTHhiKGIN+IRib+I2EAvf6dWKw4bM\nzn4BAt9PB5+u29zb7PENyxucnDRuS6eYOpxemr5fsCMN4V2wFmmMn0GFmi7/\nPXcJYoDD5BPW5DrhE24T0IxQtSAdFlVI78GjFkEyPypTrm3goLRVitqGMcle\nF925KFljjuTYPwFvKnFnCEbE9e+WYb7WGps0Y7V3CVarRg7qyg7Hg0Nm3INy\nXM6/m/Iv7mFLyWcj4JgaCGw0dcZTwZemiwOuPD+0/mVAhQrEBTLGD+ZnoJ/T\no/qSD0dtFveVQzJSALuNhNNs4hRa+5FGWJg1rfzT22wJugHU6t/Qk2dM/Yn8\naZIQg2r362HYIBtmrgUfiZIXZK5dy9CcxuxzQkw+9f0dq/I8qZhUFYsj/mtM\nSd9toDc6vAXSLAr4dz6kDZOJXA+UfIozWtTBmNq8rXHhFurQ0OvVq6HQgWgs\nOvaXYIS+sPl+SYous/ECal+trGZR1/eEg+qT8psI4dtl5FBxDwGU5NScruYl\nwIv7uxomOGF+u6C+0Q0j5CM4IeYZYI31RXZIJ81nQ8+xtI0EFU52kMqPSlFW\nqjSZJ2jM+UOy4MgQ5+sETzPz3pi6JEuXufz7KpBNiubX1q62Pc477PHi92QU\nXG6Pl+d0G4akUz0OKParFdfedOW4wJn3kDjjz64JFr/2HiiRpdR+4w5Ael0K\nLqBBc64t4TWkeW5wu/xIHShvQr0BB3vRbxOncjkCrAY0c6W65tJ403X/SJs9\n5wnrJMd6JQW92GNqTSZDauHZWqidYdMbz/PM9CwafivmSTMaZqosxlQRASbt\n4kvwFD69W04dHotLfTbH3DrkjNjSqU2F8TuYQk+pMuAkSdcIRhxA1N+Tvun9\nmu5Fb26+pXse0GgaJ5bbPxpb6yY2UcWamtoo9l+9aJ9+JAUWT+OAG9fcC+v7\nARjvH9GOkXlGNv7kdaJsw/67ko33HJLXK2pUFnX4th/pJ1NqhSQdMrRX6HXa\nCfgJg54K0jYSuwQY3olGMWXW'),
			_Utils_Tuple2('brouwer', 'L5m/CHlqfBvcAEiyjjQw9aRKZx6Dw/laBC+S/dTZxrnT/AvVAlMppd1spUBU\nM0CFI2k9b8+diE8w6jobuhKsz5mWQptpJH9kghxRSUQdH4NRsvPluuXHk3l5\nasZbjQEdiaZ9BDrUHyz+a2blZ+cuJ+aLUA9gJERmGk6SNtHNxgSvX/KiPSet\nMEKjOToX9TtDFcLx9PmNlckMZU8FyWL3eTNu+qWa4K6gwShvnqEr8SG1iEfS\naM+x4xISdMQiKiUcx66hnByK2+e9/V+k5G/3Qmot9/Iybb8cRhQ0X1Q/q2Hg\nhcB/bP5PBtEa2Vb8IwKO8kVld0GRt1yRQmKmRxsHEcrnP8fu4jgk2DYYcigR\nclnZ3q+nQ4ZTXz4xaAHH/z8FKT4d3n1jI66ujWQQuzDYXkCfKDfAX6XHXAsa\nKxm4EkSHMLzMUGlfthlWJxapeOsLN2Or7K0ANHceGkb21ah4USCwU1KZgMbQ\n2dCfbSI5+7CPJpXdtkHsM9L1FDIXNZsTkV0z6nQgluLyvATXx/fZZFpbW3mK\nGnnepno8EJYdQTiGdU0VcNrIgIsTSFHR4kVFDiNmTW2OIDEzclm5/HKbF5e0\nk76pi9pDvvkC2z24eBH+ew8OgNSeRii8qui4NnAjLaOeWPjbg3vhJzThxxFh\n319UYS70wzRU9KogHA8pUbewK1y6JxlJ8HyzlZZKKroq8PITVlC0Q5YwTBH/\nEmf52esXaK2UFmqQVI8xrkFlHyoaDoVyP2neCR0UsqCM1AF/9gtvQAwOiMaU\nXxNQu/XDdki/5geJeXKosOStejv9ZjjSa06r0LYb8glcVLZj/DaswigoLfQO\nPMkQ/dhhpXXsKZA9d9NNe45jAkNIsgUTbIFtk7K5oNdO+r6NtKk5oQWDJl7p\nyEC/pIlk8No/+R/mmBld61kVDu9FyuL6bghtbesLa+qf4PXMrQ9/A94mwcGi\nY19iDaTrUmGyfSB6OARtx2i1knGZ/iJV5AgUXeArpeyyjsPbkrEX4NZofvTm\nZL2fUS8jCQrSuHKbGjkQMpmo0ZO4xKt0la4ZUcjUd23r64ttaeWONB0Xkyla\nOMCfg6X+EEtH+FfWa3sZSUUIjq3kH5MJjVCSQc49/z7X9m3YX/JiY6IEgr5N\nLVEu2zDfgmFe'),
			_Utils_Tuple2('janne', 'L5m/CHlqfBvcAEiyjjQw9bh0ODIU78wKaL8co3/ZDDckQGD4s+Z3Nx12xbK8\nyT5ckPhJ3X2fk2kBKJ/jTeVpW5C6zqffHjxAPUiURsIv1737G0vrOVdV9kPK\nllU6vou2SlqIfawYagh5oBUt3Qri0bzwsmJiW3b+lVzV+DdRHeR5XSccVFNG\nZNQt0FnC/VmVzwbZeMIZ8lqK+StdGpIgZO+yeG1ABRGGYYvD1U/uSwQI3N/p\nLHTYYO3/fNijzoNpA8/FQeMtLu2OQibs/lG8Bcz8f+JxHYgWKaUTw56DWroN\nWfG89cVH/665l8Wv/2DXWHp3u4gbaZIJTamA7XIToBnLac6Yk8uBgo091shE\n7X6GShQZ8tloceS76kIcQAruByW4ryBsw31zClGjocptlA78SYG8RyyH9Sg8\nM1VxXcgO3YIBKyEqd+ckIq2i71VCzyAcchJwZHs7oHX2kbtNV+flyEPyG6Rq\n6X2TdjA6wrWJoVsUxWFAoLC66c7IfhDTfYE6UdRBMtTrABaXzsZ8hU9GBIXJ\nganTX4F0g/xPXYuCz5Adt/WnUCWXk7pYc1e7DL+zEZEJ8llRYZwNbC1DKBaj\njNGyKKMk2iXEGaWZq5L4f+AE9dYc67NFGBncVOWpDp0R0Uuw5tDizMSOkqP2\nJwxtchl1Q1acRizHR7AHh+jkwroZe53OtAJmwG1yAQVgMa9wXDirtUIdAdch\n3sdLS5EbbCfqNW/ubwO2XTw7rSnrbN+6jOiLodUFiv2F5Pov4CzPyF+B2sy6\n57YGiayePgNe00+HiwsK+emI7lgA+5jpC37c4a9e9EJnt8kOuo2O3Qe5XzV6\nuIvJSAIGJ6EK8hfyv77rucez+1hRTGxgEpgjdKr+QIOPGxAkuLQBKv3dxRKl\nK4LLF/i2Pf+xmOqLyWF0UXGUi0aFFJ18thoCyzcQ1lMGfIsiEx2wt1aFYm8L\nDkWSbXbAw3ZvirSpUG/V+SyrG0p/N4b5Fr1vKu6wuoo1ba9kWjJes9HrhsDi\nj0+3++H5O7xNOMcPW3dufkCYbsQ9kLa71r5bmn3dTWDOxup5NIMUfaMq/rbt\n/h/BYVOLUdJPPlaEb4KYrv5dg2G5ty5EpT9gEBQX9rr6H+VnuY+JVORhnT6t\n5j2p+8b4TDC50Hy4WVhIHFjhnPjhxpPt8F2/peOQCUYcYpJs8ZA5QrZDYh1n\nDZlEnaAitRoqhsS1mx/5cjH+zKbP7v2OIsi/x2EIQt9ZRFvOBG+mXGQYEQK+\nJM1MX6WRHczeSdReKyKHUtVO5GMUNhZJYUttANYNMs0RzeM8wkT2/BmCoW5W\nDN+VgkIArT2SjiUA0vsyG9IrJSIfdKAj+ksW1t/+FKIvvkUJxzjyhqdBLw1s\neJW3dTdt+lR1eVoIgDBBGIg680Cc9x7V1WFY34vL1QX1HyFovRMsZEEUaTPU\nY1PVn14flPexL+VT8/hGAJi01KCbevk7'),
			_Utils_Tuple2('alexander', 'L5m/CHlqfBvcAEiyjjQw9eULjc8vipwoAmFeX+wFigZDNqtWuM0DGzg/5X7V\nzBdQ99Ig1rGuMo2ZdoDc70HDxxgSKpENitk+2EmyrDa1QHvo+8AsjvHkUZUn\n4tAOwZ5/AFowGxH2p4plRLRmlA3sULcsrD3TjZxuKp9EzpssEKN+YeZSHL/S\neiFbsTFPKfj1sgysJDo1vQ3meyXtwpTYclF0ULoJflB3L31FqTUKgl1dKSpS\nNTMOWFNB9jNhHHLdRnc1RuSMjePMEBdC301LYkRJI0K5L/CdOTY30xVZURkJ\nkkSNhaKupI5mXviov3LJWB/HHqQoAYbNfJwTDdAHcZfuQZYF8ctH+yHC2chW\nAr57e3ZGF2BlXDRD19Hlzod2PhH4QkDXJ0dvU2SvhVR4O4Q9/CuJ0fiGxnMZ\n2ww3OxAgev1LKzvwThJgYyQ4KYkDf8vAR+P/gKkf6PyZPxkY81rEl52fcLyr\n+i1F31FDxNY9BOCWLZTwbIvZ0RvGvanONkndff6cxqjjITUBrEgmurApLp6a\nJQHNG6+kQCs88R6K6i9pmzSX3uMmo1JRp3Mdher++USR+G2f+7qQYHNB4kf9\nonJ2HOFAgjNMNL9sjvioLpg+LUMxPprZKTfnBOvC61gW4cqom/x6HK3QkHYn\nYQjKIK5J4nt2Dg/LKz8hnnAyirWic98QT+suBL0rb7v0wNMKKW13Vo2F1Mv+\neBBQi0L/q8rHCi40+0z3hMe9EY1AzbBAgzkmnedjo78U7P4WurASc0ql3teP\nCw8CYImFuOGeEo2mdgr+VDP70K8ldqodTNxkb809g1cq6aqJrGdtLRX4UT1M\nX7UItkmfX4HzwjHsiW8CyIQrnYCUoSLQYLN7IWXk2viQZHdEGLH30/1ZTUNj\nFNbUmeK14UI6muLFmQ=='),
			_Utils_Tuple2('dr lodewijk', 'L5m/CHlqfBvcAEiyjjQw9W33njH7MOJpt36eaZucyZWHZXnEvpXQrPOsiWf3\nCmLqME1uAIQOAjIQVU6yGk+WpDyCWz2HqzG+JN2xzXvI/pQFclguVzrlRype\nlcNOneZO/v7mdlc70ZNFu+P9uqxzaJe+PPQ8qd0eXxRKDejya/HUC0WkFYQ/\n3Z+nRontvpUuw/dG3TjeSV7slaceyUp3MAWOjVtp1VWLCmDnJjmUn1ow3G8y\nsxpHkmu0dLdDN1Grd9cqLXXleIik9XgL4YSQmJpE5ws5RW9jdkNWhI6EEsXk\nhfIGMNFTEm0iMDNaYQG9Ps44/S0wjws3jhN0Dv6CUWpGPCip6cOSx642NTsz\nuIp4ARS+yFxOxIG/eg/cAhYZt0fqR03lOP0PcVdG+5hSt32gbf5PiLRnYUYJ\nrA7bqFnGs5Ii79hw7cIH28rFHs0Gh1pjVgrj/ZB+2xTf0uOqgYFkFOLM64ED\nOIUJb5KHJDGcNskVZFPsG8xXR5Ft0g8iZIs5QspYSqsbErxesPUo6Z8SIpCa\nd2hD5qstj4DEUgh4p4uCg3KKqkT/CqtpHBYc6XR3tQikGF2y3IFwJGH+wVBp\nOIj+IcgxcXf12FhC3U/zAlKwXCEybAEaNwBvZjIn5hKqzWpS525Q6u/+iwMB\nRi9EyKXcvqWu1LsN56TbRh/nNsxYVwvO0Empo/WltwIyH2VKWHUASLCPTJaA\niGhS+w=='),
			_Utils_Tuple2('elisabeth', 'L5m/CHlqfBvcAEiyjjQw9fE0JYQyGo1eZi2uP/pD77Ewb5hqRuijke2DimQk\nhrMPrSQiBzwC8zboK+3+fNHNa5RsBPq1fciObAqxHdsp2VM9QGUS3Ld0+MHf\noWYwZaYSmVPg8/S2/uJaM0vUMAsu+26bsZcsDhxU4p/baoJfi+3XDaY/OeHe\nPbBhlhqMOex8Hqj1On+ktvCmgAy/jorH2rSjQIg9uaopl4H5+26MUBgFljCE\n8C8rHp95CwLVn9Ug8oyAj9APHo7hyMNw6wYV9Gs43CBtUQiSI7xoWMbMeKpc\nm+9V6Sw8/bX3LHnzhzRfOINLkiSOEZo6pRSe2TBstyrJTOwY9UityIKO/o8J\nytiIWM5vUa3lnb6ldOgVIBxkFv/IbVJbjGoXDAXtgPOxzJUyS5WO2qCzrSzb\n4q15DuzFyXPHhF59q+W3/qANs0rj+I28Iv2ZhxQPZrNCesl9kME69ox04Bmv\npzZHj7rn12a0wlGsrmt5jJAStJQyrQ3MmRXXFf0sK7/ui3Alg18RwO1GnP4e\nvspJWW1fVSrWQCCeiKSPtcFQWvqdmUt19YoG2vfy4P7tpiBEOc/kZGPz8S9D\n8BP6ToTiO/yTeq1K04pr+sYOsmE9pNkW9F5GosJaCUwmq3uJfNP6ZKWS8XBs\n6MTad9cCLD3yEKNnjyfPyiBs5knFbFlnqAaHS6oTNdPLldtcvguri06T78pe\nZ0Hl6SiLnpNasWvBh3qcqD5ZDcD0JZ7SMHYTyRcuhtbbHtHxgGCutthICNSd\nLYw17lc0Gw=='),
			_Utils_Tuple2('bernard', 'L5m/CHlqfBvcAEiyjjQw9ReRAtY1P2WnxssDIWSQCF2ygTAnj56JqKufAr/V\nF6j8wkYgz3HWoacDfsiiiT/SOOJzg8ezevwrCCoV77/xBgrzvWtygU4dWKmh\nMP2BLXAfIoKvybmKkkDsQa4WEzV+hkWj8Ih6HKiSFuhIxAO9fOjWNpOeQy1K\nysej0WZNcLnk9xzfp9R9B11hQEdJsWNd0lz5zDuJqwu8n2fW0bW9ZV2tx0JI\ne1yG0t+MIN2gRJmjONtAb7vM7pnDEz0hDOq7Cm7XUtMR0m0VrPP46MdwtKyI\nSKJoukejmn5HGhKDNBQGdH3WI4fv07oK2tfmMJSSQmw1PHqgG6BRHNPokVqs\n6ngxYn4gkqGuwN4QFmtRp4E13FcC/cue7SiIOSHyhJsxjbodmXBohAlRsuEV\nSmk6LoFraMPxRuYLSWywHHWN4Cd39VBdPpgKtzdkJMrPnr+lh6NDZvBqJzyx\nrmLuiAyiqOKLNz1NwUU5LL7LmShPFsdcPfYas47mC2YyvWpogN7JgxnIsT7K\nVwc7gyJ1W6PxKbEzajRCCHpI2tRmoS1DjU9w51Sd0PS46anLV19LcYJRvvms\n4y/3s6ESLEjiuQCzaKPYvM3T/6zbYGSCBnEyOeEAxBKlttzHdqjaAIRj21wx\nzdTetdwZxkOcg7uV4SkMQb1WHgXaznpSqeVRdDZUIh3VJhLUvlg8Nbntw+LD\nb/bSKNA8SfIKSVDoIUJAj7lX8VKyM4HQK4FtSwXxPT3WCdIyniJJMi0Zqa43\n7WArJG6unqmDKC0IKQb2Aj2OTj+0PIcUvFSlG0s4hZo05DdhZ4AbC1FVrRiM\nsp+nWnJuVXSlqy9Rte+53Dw66ghmey+MzOUr9e9Dm+Kx629NcnHDqpzIVZ+F\n19anav/1+jahLqoOgLFcqlaskYBxbCRnwJImskc7uutMD4l+WVILTXJuwF4a\nQsaPxtOn+NUljxq7xY1tCgsA7ee/L+w1OKKrUVbdWf4='),
			_Utils_Tuple2('eduard', 'L5m/CHlqfBvcAEiyjjQw9VRvIgs1ZWjwvoQwcSqNrhXIvfTYv6qnp5uqiZk/\nOqket6rthcCK+oT+VOo/0CVVh5fsIMYq0se6sgmE+/OpCQy0ph63VBAt99cP\n+q/2AvrOBggtsRVRRKZlUBikIiKQC3zEB/x+eOgsk379fkiB++bi9JATUNW4\n5FTO5R2fzlGtMjN1bNP3vitH/fshUnIl6S2yZ9niEWxxGGCiAJpWONaW+W6N\nZsewPJOVjddaoogbAWjcD1uOSJnFrytagVVUFNO3Mf1AZ5kWVisb9b+vr+8M\nM/3KVbnClSHIjhvp0VukOE0YovRYKlabWFxE0axNP8dfo3qPZmmQljwOU0hw\nhzK4/LuXfYZk5fuEFpEesXxAAfmGP3h0ZrYzMxGW3HEKM1tgAlkda8Ul0rKd\nJ/y5VzGd9t3ZXa4jFhi/iAl9Lc1HpQQyIXxdtUWztT9MlODOfR6fXVu0a3oV\nS60WERDMSOtN0t7QLTYFox4vTi4u54ar7KPxWTpelVVNfvipSivcm9f4uTVU\nGS8HuK50QSN4tV4P6LMyevEml6wZ5Mb40QV0YsaL/uWpnGp7idnX8alk1ONh\nDZOjfa+PQnBZUPqj7MtZyf0nur2oThmTni7nO3dvYkWWGUoe6Br+ePafgFRk\n7akvjexZ1IpFBKVFGGNpDrzBzpERivgtaXKillgnrhPen16O6/uUimnfMpdw\ntNWolMQVWYHscRABKBU5F7+5c274/xMB4MavlhW9KkN2FaA3rDMTNHaO7J4R\nkQ52G6CbOwrbM48fHX2+5REb37Teogchsx75XBDYqF8ggqc1R/CnOFhTQh8l\ne4wScWAPt0eTsU35L01LejQvrOP8l+seTY3aO4FOWRawTgial9DaEBuuGuS0\npuRPOkM8LzWtQmp8oibewCqq5vSE7w5xyuaEzGeuZxaG3l4HsmHPeG+V54WX\n4DocCcUKuL58ltw4WS91DLkkf8fH1hEMwlJMzQFVjxWi5eFjTHlWhEQvIEUF\nwCH1zjkE5srz/AbX8MM9KHrbZfGzoYQndcIoHMTp4eTxBwqP2PEuMttC6m5z\nJWclnQJFC3x5LKssMBBTnpZgp+zw4+Beh9mcgV0vmBEJJjPFIy8='),
			_Utils_Tuple2('hendriks', 'L5m/CHlqfBvcAEiyjjQw9S2tyXlKROzhb8cKCrWpX/fDN7f3ep9LLa3Edmbq\n+ArgjBeljkkigJ1gAPnAlY6F78pPVOiR1rZLzfaTNCjXQkMJr7/VtOOkbSeQ\nmN6BWEBOLYCirH6msIRwbyJCZHxhvhrG9x4jQT9Sir+Y0mZQNuVilmf+hefx\n8Fjo6XkaoLbyGbV4UQ5R9ZsLidd/2bohkk7jEoglbAfbRgKg3yVHWy26tIec\nzdarviRZ+PulRUOmvVJ/vYXy2QAW7N/ncEPg+Aw6Sfr5T1L3LsalknSJP9TE\nOCh6Gqz/BzPQuyl8MGz3yzyJ2QELOa1R7FTfpBZkkxPaGGvwq4gOg0H3x65H\nPU1kYPAeFTFIaysVHE7PRo76YkmoXdxwwANj26Kz5aQE3NnTes0B1lq9o5p4\nXS/FNZwm31T9E+H16COQjOZK6L8nOqdW5kVN161OwHl1Ut287/RNaXQLH2xq\nZDMytbvT3yXjfPhKB/YAH4JOYeMp70BCpJSGQvYNArHBgzrDKf1MdfDEnT+l\nw2Gi3wOyiKfZX5FGd0tOW0Wefi0A1Sn8QCCw8SxAfQnPKXGIPni3CUCmdrmg\n1qH0EMIqheK7pg1CxfccknlFzjIS4KrEcLRvNs64KCici1bW8wR8W4kp5RmV\nlxOe3dPaje1QMzkoXjr++Sk='),
			_Utils_Tuple2('julian', 'L5m/CHlqfBvcAEiyjjQw9Xf9jYgPRggpw68mxTBCjj+1M09rZhqvn1+uxavA\npVsbyoT6xAGcDPezQopwZ+kSHFpkFeMB2My9RGWjXih5xPX/KqtYeAbi4ht9\nMvWAwI387ElVpaHtCPLLlrzBaEqY2tXBLKu27F7mNu146hHWf5c+U1psqtrD\nTlK87a5k8oLi/BtDCeFmg8DAw7WJepwzaAC0hc6XfPa/G2fSmDTEKqvaapro\nIZkPBB7CPC1QhzwSMy0tbEBvBFVmnUncURRueXiNuEjGbeXW7T6ms4ZckPKf\nXxEqX+CEJlcCGnA9laeg6ZNiPAjK5Y95D0JKYN8vDVYVpzKGMlw+tqYIyfsa\nfkNXX9A6kUIuloe/NgG2mGliQCHyjsLvpVyMNp9lVV8GJ4A6i1H5s2N2Mxp2\nV5hSRnDuKcSOzE0hbrFgHJBxJ0NjHnZjJoW1utUb6EQtMf6Nv71Ykcq+2obZ\n9INZCQ5TJ0mY5SDyJfyNk7KSSLa5QbX1QadoZ/X1G62nKbma4b9sKGxzn8Ml\nbt4EyNf11pm9zH4xpPMYSfy/gKuDrS+vxWqmdEG+bgB6E0603vk1dxql9AmR\nQpFuZJ6EV/n/r7RJ/2S3j+oZG7avAmbPGwxbchiMJmwMQH/3y0ESOy3aSdOH\n+VgbF8IZH9OrS2H0g3WmihtCbjQB7BjbMsJOTWzmh2hBeG1YcNL0HTvWOThx\nhNOrTJe3J0Tt8Qo5bsSfnCuhP3u7evwvS+DQx2MNhOhowUWDBQsg019MHOSU\nDVRPb42o0FIZy8K3H6y5LurVFokMFSdOh9TBkVcgPaMgeaw4Q4aP/2IvilGh\najsoGhefU8ynMDUrGs3WXyUL/A0tvVekbm4=')
		]));
var $author$project$Secrets$getSecret = F2(
	function (key, password) {
		return A2(
			$elm$core$Maybe$map,
			$author$project$Secrets$doDecrypt(password),
			A2($elm$core$Dict$get, key, $author$project$Secrets$secrets));
	});
var $author$project$Types$gethover = function (model) {
	if (model.$ === 'LoggedIn') {
		var m = model.a;
		return m.hover;
	} else {
		var m = model.a;
		return m.hover;
	}
};
var $billstclair$elm_dialog$Dialog$hidden = false;
var $elm_community$maybe_extra$Maybe$Extra$isJust = function (m) {
	if (m.$ === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var $elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $billstclair$elm_dialog$Dialog$dialogBaseStyle = _List_fromArray(
	[
		_Utils_Tuple2('min-width', '300px'),
		_Utils_Tuple2('background-color', 'white'),
		_Utils_Tuple2('padding', '8px 16px 8px 16px'),
		_Utils_Tuple2('border-radius', '4px'),
		_Utils_Tuple2('border', '1px solid rgba(0,0,0,0.5)'),
		_Utils_Tuple2('box-shadow', '4px 4px 5px 0px rgba(97,97,97,1)')
	]);
var $billstclair$elm_dialog$Dialog$mapStyles = function (styles) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var name = _v0.a;
			var value = _v0.b;
			return A2($elm$html$Html$Attributes$style, name, value);
		},
		styles);
};
var $billstclair$elm_dialog$Dialog$overlayStyle = _List_fromArray(
	[
		_Utils_Tuple2('position', 'fixed'),
		_Utils_Tuple2('overflow-x', 'hidden'),
		_Utils_Tuple2('top', '0'),
		_Utils_Tuple2('left', '0'),
		_Utils_Tuple2('bottom', '0'),
		_Utils_Tuple2('right', '0'),
		_Utils_Tuple2('z-index', '10'),
		_Utils_Tuple2('background-color', 'rgba(0,0,0,0.5)'),
		_Utils_Tuple2('justify-content', 'center'),
		_Utils_Tuple2('align-items', 'center')
	]);
var $billstclair$elm_dialog$Dialog$render = F2(
	function (config, isVisible) {
		var visibility = isVisible ? _Utils_Tuple2('display', 'flex') : _Utils_Tuple2('display', 'none');
		var dialogStyle = _Utils_ap($billstclair$elm_dialog$Dialog$dialogBaseStyle, config.styles);
		return A2(
			$elm$html$Html$div,
			$billstclair$elm_dialog$Dialog$mapStyles(
				_Utils_ap(
					$billstclair$elm_dialog$Dialog$overlayStyle,
					_List_fromArray(
						[visibility]))),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					$billstclair$elm_dialog$Dialog$mapStyles(dialogStyle),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mdl-dialog__title')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(config.title)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mdl-dialog__content')
								]),
							config.content),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('mdl-dialog__actions')
								]),
							config.actionBar)
						]))
				]));
	});
var $author$project$Types$showselectedchar = function (cvs) {
	if (cvs.$ === 'NotSelected') {
		return '';
	} else {
		var c = cvs.a;
		return c;
	}
};
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $billstclair$elm_dialog$Dialog$visible = true;
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $author$project$Main$viewSecondPage = function (model) {
	var youarealreadychar = function () {
		if (model.$ === 'NotLoggedIn') {
			return $elm$core$Maybe$Nothing;
		} else {
			var m = model.a;
			return A2($elm$core$Maybe$map, $elm$core$Tuple$first, m.charstory);
		}
	}();
	var checked = function (id) {
		return A2(
			$elm$core$Maybe$withDefault,
			'main',
			A2(
				$elm$core$Maybe$map,
				function (id2) {
					return _Utils_eq(id, id2) ? 'checked' : 'main';
				},
				youarealreadychar));
	};
	var charsheet = function () {
		if (model.$ === 'NotLoggedIn') {
			var m = model.a;
			return m.fromcharsheet;
		} else {
			var m = model.a;
			return m.fromcharsheet;
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$width(2000)
			]),
		_Utils_ap(
			A2(
				$elm$core$List$map,
				function (id) {
					return A2(
						$elm$html$Html$input,
						_Utils_ap(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$type_('image'),
									$elm$html$Html$Attributes$src(
									'images/chars/' + (id + (' ' + (checked(id) + '.png')))),
									$author$project$Utils$cqhheight(250),
									$elm$html$Html$Events$onMouseEnter(
									$author$project$Types$HoverStart(id)),
									$elm$html$Html$Events$onMouseLeave(
									$author$project$Types$HoverEnd(id))
								]),
							function () {
								var _v0 = A2(
									$elm$core$Maybe$andThen,
									function (_v1) {
										var x = _v1.a;
										return x;
									},
									A2(
										$elm$core$Maybe$andThen,
										function (x) {
											return A2($elm$core$Dict$get, id, x);
										},
										charsheet));
								if (_v0.$ === 'Nothing') {
									if (model.$ === 'LoggedIn') {
										return $elm_community$maybe_extra$Maybe$Extra$isJust(youarealreadychar) ? _List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'cursor', 'default')
											]) : _List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
												$elm$html$Html$Events$onClick(
												$author$project$Types$ChooseChar(id))
											]);
									} else {
										return _List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'cursor', 'default')
											]);
									}
								} else {
									return _Utils_eq(
										youarealreadychar,
										$elm$core$Maybe$Just(id)) ? _List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
											$elm$html$Html$Events$onClick(
											$author$project$Types$ChooseChar(id))
										]) : _List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'cursor', 'not-allowed'),
											A2($elm$html$Html$Attributes$style, 'opacity', '50%')
										]);
								}
							}()),
						_List_Nil);
				},
				_List_fromArray(
					['theodoor', 'marta', 'susanna', 'gijsbert', 'rosalie', 'michael', 'gerrit', 'alexander', 'brouwer', 'janne', 'dr lodewijk', 'elisabeth', 'bernard', 'eduard', 'geerlings', 'hendriks', 'julian', 'ten have'])),
			_Utils_ap(
				function () {
					var _v3 = A2(
						$elm$core$Maybe$andThen,
						$author$project$Karakters$id2namedis,
						$elm_community$maybe_extra$Maybe$Extra$orList(
							_List_fromArray(
								[
									$author$project$Types$gethover(model),
									youarealreadychar
								])));
					if (_v3.$ === 'Nothing') {
						return _List_fromArray(
							[
								A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'font-size', 'xx-large')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Kies een personage')
									])),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'font-size', 'xx-large'),
										A2($elm$html$Html$Attributes$style, 'font-family', 'hattinand'),
										A2($elm$html$Html$Attributes$style, 'color', 'rgba(0,0,0,0)')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('I\'m invisible!')
									]))
							]);
					} else {
						var _v4 = _v3.a;
						var name = _v4.a;
						var dis = _v4.b;
						return _List_fromArray(
							[
								A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'font-size', 'xx-large')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(name)
									])),
								A2($elm$html$Html$br, _List_Nil, _List_Nil),
								A2(
								$elm$html$Html$p,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'font-size', 'xx-large'),
										A2($elm$html$Html$Attributes$style, 'font-family', 'hattinand')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(dis)
									]))
							]);
					}
				}(),
				function () {
					if (model.$ === 'NotLoggedIn') {
						return _List_Nil;
					} else {
						var m = model.a;
						var name = function () {
							var _v12 = $author$project$Karakters$id2namedis(
								$author$project$Types$showselectedchar(m.charStatus));
							if (_v12.$ === 'Nothing') {
								return '';
							} else {
								var _v13 = _v12.a;
								var nm = _v13.a;
								return nm;
							}
						}();
						return _List_fromArray(
							[
								A2(
								$billstclair$elm_dialog$Dialog$render,
								{
									actionBar: function () {
										var _v6 = m.charstory;
										if (_v6.$ === 'Nothing') {
											return _List_fromArray(
												[
													A2(
													$author$project$Main$dialogButton,
													'Nee denk het niet',
													$author$project$Types$ChooseChar('')),
													$elm$html$Html$text('   '),
													A2(
													$author$project$Main$dialogButton,
													A2(
														$elm$core$String$join,
														' ',
														_List_fromArray(
															['Kies', name])),
													$author$project$Types$BevestigChar)
												]);
										} else {
											return _List_fromArray(
												[
													A2(
													$author$project$Main$dialogButton,
													'Ik houd dit voor me',
													$author$project$Types$ChooseChar(''))
												]);
										}
									}(),
									content: _List_fromArray(
										[
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'font-family', 'Arial')
												]),
											$author$project$Main$breaktext(
												function () {
													var _v7 = m.charstory;
													if (_v7.$ === 'Nothing') {
														return A2(
															$elm$core$String$join,
															' ',
															_List_fromArray(
																['Weet je zeker dat je', name, 'wil kiezen?']));
													} else {
														var _v8 = _v7.a;
														var _char = _v8.a;
														var story = _v8.b;
														return A2(
															$elm$core$Maybe$withDefault,
															'',
															A2($author$project$Secrets$getSecret, _char, story));
													}
												}()))
										]),
									styles: _List_fromArray(
										[
											_Utils_Tuple2('width', '40%'),
											_Utils_Tuple2('color', 'black'),
											_Utils_Tuple2('class', 'helveticalarge')
										]),
									title: function () {
										var _v9 = m.charstory;
										if (_v9.$ === 'Nothing') {
											return 'Bevestig je keuze';
										} else {
											var _v10 = _v9.a;
											var _char = _v10.a;
											return name;
										}
									}()
								},
								function () {
									var _v11 = m.charStatus;
									if (_v11.$ === 'NotSelected') {
										return $billstclair$elm_dialog$Dialog$hidden;
									} else {
										return $billstclair$elm_dialog$Dialog$visible;
									}
								}())
							]);
					}
				}())));
};
var $author$project$Main$view = F2(
	function (_v0, model) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$section,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('personage'),
							$elm$html$Html$Attributes$class('bar-section')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('bar-bg'),
									A2($elm$html$Html$Attributes$attribute, 'data-speed', '0.45'),
									A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/vijver.jpeg\')')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('bar-overlay')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('section-content-wide'),
									$author$project$Utils$relwidth(80)
								]),
							_List_fromArray(
								[
									$author$project$Main$viewSecondPage(model)
								]))
						])),
					A2(
					$elm$html$Html$section,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('personal'),
							$elm$html$Html$Attributes$class('bar-section')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('bar-bg'),
									A2($elm$html$Html$Attributes$attribute, 'data-speed', '0.45'),
									A2($elm$html$Html$Attributes$style, 'background-image', 'url(\'images/gang.jpeg\')')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('bar-overlay')
								]),
							_List_Nil),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('section-content')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h2,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('section-title')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Persoonlijke informatie')
										])),
									$author$project$Main$viewFirstPage(model)
								]))
						]))
				]));
	});
var $author$project$Main$main = $MartinSStewart$elm_audio$Audio$elementWithAudio(
	{
		audio: $author$project$Main$audio,
		audioPort: {fromJS: $author$project$Main$audioPortFromJS, toJS: $author$project$Main$audioPortToJS},
		init: $author$project$Main$init,
		subscriptions: $author$project$Main$subscriptions,
		update: $author$project$Main$update,
		view: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main($elm$json$Json$Decode$string)(0)}});}(this));