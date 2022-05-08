(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{440:function(t,s,e){"use strict";e.r(s);var a=e(35),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"gateway-pattern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gateway-pattern"}},[t._v("#")]),t._v(" Gateway Pattern")]),t._v(" "),e("p",[t._v("During development of large projects with multiple frameworks and dependencies, it's very important to distinguish domain code from code that depends on external code.")]),t._v(" "),e("p",[t._v("My personal recommendation would be to encapsulate almost every external library that can be potentially replaced (eg. with "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Strategy_pattern",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("Strategy pattern")]),t._v(". wikipedia"),e("OutboundLink")],1),t._v("), its interface isn't well designed or simply we would like to mock. I would like to show how "),e("code",[t._v("Gateway Pattern")]),t._v(" ("),e("a",{attrs:{href:"https://martinfowler.com/eaaCatalog/gateway.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Martin Fowler. "),e("em",[t._v("Gateway")]),e("OutboundLink")],1),t._v(") can be used for encapsulating on the example of "),e("code",[t._v("requests")]),t._v(" library.")]),t._v(" "),e("h2",{attrs:{id:"describing-the-problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#describing-the-problem"}},[t._v("#")]),t._v(" Describing the problem")]),t._v(" "),e("p",[t._v("Let's consider following service class consuming external REST API.")]),t._v(" "),e("div",{staticClass:"language-Python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dataclasses "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dataclass\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Dict\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@dataclass")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KVService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    hostname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endpoint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        response "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-interpolation"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"https://')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("endpoint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metadata"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_kv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-interpolation"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"kv/')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("What if we would like to test our two public methods "),e("code",[t._v("get_metadata(...)")]),t._v(" and "),e("code",[t._v("get_kv(...)")]),t._v(" as they provide some minimal business logic? We would need to set up our KVService first at "),e("code",[t._v("https://{hostname}")]),t._v(" address and mock "),e("code",[t._v("requests.get(...)")]),t._v(" method. What if there are more classes like that in our codebase and were using "),e("code",[t._v("requests")]),t._v(" library in multiple places?")]),t._v(" "),e("p",[t._v("There's a great way to mock http servers in Python described in "),e("a",{attrs:{href:"https://realpython.com/testing-third-party-apis-with-mock-servers/#testing-the-mock-api",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("Testing External APIs With Mock Servers")]),t._v(". Real Python"),e("OutboundLink")],1),t._v(", but do we want to repeat that code for every client-side stub we create? What if we would like to switch to other requests library in the future if there we'll be a better one?")]),t._v(" "),e("p",[t._v("In real world it may also happen that you'll be out of your ideas how to mock external library for now and you would rather take a loan on technical debt account and test only the code that is in your control.")]),t._v(" "),e("h2",{attrs:{id:"encapsulating-external-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encapsulating-external-dependencies"}},[t._v("#")]),t._v(" Encapsulating external dependencies")]),t._v(" "),e("p",[t._v("The simple solution that suits very well in OOP and DDD world is to create a "),e("code",[t._v("gateway")]),t._v(" class that embedds usage of the external library. In my case, it would simply be a class that have a very simple interface, ie. "),e("code",[t._v("get(endpoint: str)")]),t._v(" method.")]),t._v(" "),e("div",{staticClass:"language-Python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dataclasses "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dataclass\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Dict\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@dataclass")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    hostname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endpoint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        response "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-interpolation"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"https://')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("endpoint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Now, our "),e("code",[t._v("KVService")]),t._v(" class in a separate file will look like this.")]),t._v(" "),e("div",{staticClass:"language-Python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" dataclasses "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" dataclass\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Dict\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" my_package "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Server\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@dataclass")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KVService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Server\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metadata"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_kv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Dict"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string-interpolation"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"kv/')]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Our class "),e("code",[t._v("KVService")]),t._v(" doesn't have a dependency on "),e("code",[t._v("requests")]),t._v(" nor a presence of "),e("code",[t._v("https://{hostname}")]),t._v(" REST service anymore.")]),t._v(" "),e("h2",{attrs:{id:"testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),e("p",[t._v("Let's see how easily we can test the logic of "),e("code",[t._v("KVService")]),t._v(" class now.")]),t._v(" "),e("div",{staticClass:"language-Python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pytest "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fixture\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" my_package "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Server\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@fixture")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    server "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hostname"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" key\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" server\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_kv_service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    kv_service "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" KVService"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" kv_service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_kv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kv/aaa"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" kv_service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_metadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metadata"')]),t._v("\n")])])]),e("p",[t._v("There are at least few definitions of unit and integrations tests, eg. "),e("a",{attrs:{href:"https://martinfowler.com/articles/practical-test-pyramid.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ham Vocke. "),e("em",[t._v("The Practical Test Pyramid")]),t._v(". 2018"),e("OutboundLink")],1),t._v(". I'm not a huge fan of unit tests in classic definition where we mock all dependencies of a given class. In reality it creates a lot of boilerplate code that bind us to a given implementation ("),e("a",{attrs:{href:"https://blog.arkency.com/2014/09/unit-tests-vs-class-tests/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Andrzej Krzywda. "),e("em",[t._v("Unit tests vs class tests")]),t._v(". 2014."),e("OutboundLink")],1),t._v("). Instead, I rather try to design and test my code by domain units usually composed of multiple classes with well designed public interfaces. In that case, if we use gateway pattern to keep external dependencies out of our domain code, it will be much easier to create unit or integration tests for testing our domain code.")]),t._v(" "),e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),e("p",[t._v("I hope that above example shows that encapsulating external dependencies using additional class makes our codebase less dependent on external code and makes it easier to test. If we design interface of our gateway classes properly, we'll be able to replace external libraries very easily and keep our domain codebase with its unit/integration tests untouched.")]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Strategy_pattern",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("Strategy pattern")]),t._v(". wikipedia"),e("OutboundLink")],1),t._v(",")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://martinfowler.com/eaaCatalog/gateway.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Martin Fowler. "),e("em",[t._v("Gateway")]),e("OutboundLink")],1),t._v(",")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://realpython.com/testing-third-party-apis-with-mock-servers/#testing-the-mock-api",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("Testing External APIs With Mock Servers")]),t._v(". Real Python"),e("OutboundLink")],1),t._v(",")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://martinfowler.com/articles/practical-test-pyramid.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ham Vocke. "),e("em",[t._v("The Practical Test Pyramid")]),t._v(". 2018"),e("OutboundLink")],1),t._v(",")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.arkency.com/2014/09/unit-tests-vs-class-tests/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Andrzej Krzywda. "),e("em",[t._v("Unit tests vs class tests")]),t._v(". 2014"),e("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=n.exports}}]);