var obj = {
	a: 1,
	b: "2",
	c: [3],
	d: { val: 4 },
	e: function() { return "5"; },
	f: false
};

if (obj.c) {
	obj.f = !!(obj.d.val / +obj.b);
}

obj.a = (+obj.b * obj.c[0]) + +obj.e();

console.log(JSON.stringify(obj));
// {"a":11,"b":"2","c":[3],"d":{"val":4},"f":true}
