require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"header": "module/header",
		"footop": "module/footop",
		"footer": "module/footer",
		"table": "module/table",
		"news": "module/new",
		"login": "module/login"
	},
	shim: {
		header:{
			deps:["jquery"]
		},
		footop:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		table:{
			deps:["jquery"]
		},
		news:{
			deps:["jquery"]
		},
		login:{
			deps:["jquery"]
		}
	}
})