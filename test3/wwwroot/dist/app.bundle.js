/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/v2/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/sass-loader/lib/loader.js?!./node_modules/olbico-corporate-identity/src/sass/screen.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader?sourceMap!./node_modules/sass-loader/lib/loader.js??ref--11-3!./node_modules/olbico-corporate-identity/src/sass/screen.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/olbico-corporate-identity/src/icons/build-templates/olbico-icons.font.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/olbico-corporate-identity/src/icons/build-templates/olbico-icons.font.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/olbico-corporate-identity/src/js/olbico.js":
/*!*****************************************************************!*\
  !*** ./node_modules/olbico-corporate-identity/src/js/olbico.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//require("jquery");
__webpack_require__(/*! bootstrap */ "./node_modules/olbico-corporate-identity/node_modules/bootstrap/dist/js/bootstrap.js");
__webpack_require__(/*! jscrollpane */ "./node_modules/jscrollpane/script/jquery.jscrollpane.min.js");

$(document).ready(function() {

    $(document).on('click', '.slide-left', function () {
        var el = $(this).parent().parent().find('.nav');
        slideNav(el, "left");
    });

    $(document).on('click', '.slide-right', function () {
        var el = $(this).parent().parent().find('.nav');
        slideNav(el, "right");
    });

    $(document).on('click', '.content-slide-left', function() {
        var el = $(this).parent().parent().find('.block-part-container');
        slideNav(el, "left", 1000);
    });

    $(document).on('click', '.content-slide-right', function() {
        var el = $(this).parent().parent().find('.block-part-container');
        slideNav(el, "right", 1000);
    });
    
    // Delete contents input
    //$(document).on('click', '.form-input-delete', function() {
    //    $(this).siblings('input').val('');
    //});

    //$(document).on('click', ".select-all-date", function(e) {
    //    var target = $(this).parent().attr('id');
    //    $('#rangeDatepicker').modal({show:true})
    //    $('#rangeDatepicker').attr('data-target', target);
    //});
    
    //$(document).on('click', ".employee-modal", function(e) {
    //    var target = $(this).parent().attr('id');
    //    $('#amountEmployees').modal({show:true})
    //    $('#amountEmployees').attr('data-target', target);

    //    // find data if already set
    //    var employee_min = $(this).parent().find('input[name*=employee_min]').val();
    //    var employee_max = $(this).parent().find('input[name*=employee_max]').val();

    //    if(typeof employee_min != "undefined" && employee_min != '') {
    //        $("#employee_min").val(employee_min);
    //    } else {
    //        $("#employee_min").val('');
    //    };
    //    if(typeof employee_max != "undefined" && employee_max != '') {
    //        $("#employee_max").val(employee_max);
    //    } else {
    //        $("#employee_max").val(employee_max);
    //    };
    //});

    //$(document).on('click', "#employee-reset", function() {
    //    $('#employee_min').val('');
    //    $('#employee_max').val('');
    //});

    //$(document).on('click', ".employee-save", function () {
    //    var target = $('#amountEmployees').attr('data-target');

    //    // set vars
    //    $('#'+target).find('input[name*=employee_min]').val($("#employee_min").val());
    //    $('#'+target).find('input[name*=employee_max]').val($("#employee_max").val());
    //});

    //$(document).on('click', ".search-modal", function(e) {
    //    var target = $(this).parent().attr('id');
    //    $('#search').modal({show:true})
    //    $('#search').attr('data-target', target);

    //    // find data if already set
    //    var searchterm = $(this).parent().find('input[name*=searchterm]').val();

    //    if(typeof searchterm != "undefined" && searchterm != '') {
    //        $("#searchterm").val(searchterm);
    //    } else {
    //        $("#searchterm").val('');
    //    };
    //});

    //$(document).on('click', ".search-save", function() {
    //    var target = $('#search').attr('data-target');

    //    // set vars
    //    $('#'+target).find('input[name*=searchterm]').val($("#searchterm").val());
    //});

    //$(document).on('click', ".buffer-modal", function(e) {
    //    var target = $(this).parent().attr('id');
    //    $('#bufferKm').modal({show:true})
    //    $('#bufferKm').attr('data-target', target);

    //    // find data if already set
    //    var bufferSize = $(this).parent().find('input[name=bufferSize]').val();

    //});

    //$(document).on('click', ".btn-confirm", function(e) {
    //    e.preventDefault();
    //});
    
    //$(document).on('click', '.modal-test-selection', function(e) {
    //    e.preventDefault();
    //    e.stopPropagation();
    //    $('#testSelection').modal({show:true});
    //});

    $('#testSelection').on('show.bs.modal', function (e) {
        setTimeout(function(){
            var element = $('.scroll-pane').jScrollPane();
            var api = element.data('jsp');
            api.reinitialise();
        }, 500);
    });

    $('.scrollpane').jScrollPane();

    // Replace by http://l-lin.github.io/angular-datatables
    //var resultTable = $('#resultTable').DataTable( {
    //    "scrollY":        "400px",
    //    "scrollCollapse": true,
    //    "paging":         true,
    //    "pageLength":     50,
    //    "pagingType":     "full_numbers ",
    //    "sDom":           "rtp",
    //    "bScrollCollapse": false,
    //    "fnInitComplete": function() {
    //        var element = $('.dataTables_scrollBody').jScrollPane();
    //        this.jScrollpaneApi = element.data('jsp');
    //        $('#resultTable').not('.initialized').addClass('initialized').dataTable()
    //    },
    //    "fnDrawCallback": function(){
    //        if($('#resultTable').hasClass('initialized')) {
    //            this.jScrollpaneApi.reinitialise();
    //        }
    //    },
    //    'columnDefs': [{
    //        'targets': 0,
    //        'searchable': false,
    //        'orderable': false,
    //        'className': 'dt-body-center',
    //        'render': function (data, type, full, meta){
    //            return '<div class="form-group"><div class="form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input" name="id[]" value="' + $('<div/>').text(data).html() + '> <span></span> </label></div></div>';
    //        }
    //    }],
    //    "oLanguage": {
    //        "oPaginate": {
    //            "sFirst": "<i class='icon icon-double-arrow-left'></i>",
    //            "sLast": "<i class='icon icon-double-arrow-right'></i>",
    //            "sPrevious": "<i class='icon icon-arrow-left-big'></i>",
    //            "sNext": "<i class='icon icon-arrow-right-big'></i>"
    //        } // the other pagination strings ('page'/'of') are hardcoded in plugin
    //    },
    //    "order": [[ 0, "asc" ]]
    //} );
    //// update column widths, the scrollbar changed tbody only
    //resultTable.columns.adjust().draw();

    // Replace by http://l-lin.github.io/angular-datatables
    //var usersTable = $('#usersTable').DataTable( {
    //    "scrollY":        "500px",
    //    "scrollCollapse": true,
    //    "paging":         true,
    //    "pageLength":     20,
    //    "pagingType":     "full_numbers",
    //    "sDom":           "rtp",
    //    "bScrollCollapse": false,
    //    "fnInitComplete": function() {
    //        var element = $('.dataTables_scrollBody').jScrollPane();
    //        this.jScrollpaneApi = element.data('jsp');
    //        $('#usersTable').not('.initialized').addClass('initialized').dataTable()
    //    },
    //    "fnDrawCallback": function(){
    //        if($('#usersTable').hasClass('initialized')) {
    //            this.jScrollpaneApi.reinitialise();
    //        }
    //    },
    //    "oLanguage": {
    //        "oPaginate": {
    //            "sFirst": "<i class='icon icon-double-arrow-left'></i>",
    //            "sLast": "<i class='icon icon-double-arrow-right'></i>",
    //            "sPrevious": "<i class='icon icon-arrow-left-big'></i>",
    //            "sNext": "<i class='icon icon-arrow-right-big'></i>"
    //        } // the other pagination strings ('page'/'of') are hardcoded in plugin
    //    },
    //    "order": [[ 0, "asc" ]]
    //} );
    //// update column widths, the scrollbar changed tbody only
    //usersTable.columns.adjust().draw();

    //var listsTable = $('#listsTable').DataTable( {
    //    "scrollY":        "250px",
    //    "scrollCollapse": true,
    //    "paging":         true,
    //    "pageLength":     10,
    //    "pagingType":     "full_numbers",
    //    "sDom":           "rtp",
    //    "bScrollCollapse": false,
    //    "fnInitComplete": function() {
    //        var element = $('.dataTables_scrollBody').jScrollPane();
    //        this.jScrollpaneApi = element.data('jsp');
    //        $('#listsTable').not('.initialized').addClass('initialized').dataTable()
    //    },
    //    "fnDrawCallback": function(){
    //        if($('#listsTable').hasClass('initialized')) {
    //            this.jScrollpaneApi.reinitialise();
    //        }
    //    },
    //    'columnDefs': [{
    //        'targets': 0,
    //        'searchable': false,
    //        'orderable': false,
    //        'className': 'dt-body-center',
    //        'render': function (data, type, full, meta){
    //            return '<div class="form-group"><div class="form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input" name="id[]" value="' + $('<div/>').text(data).html() + '> <span></span> </label></div></div>';
    //        }
    //    }],
    //    "oLanguage": {
    //        "oPaginate": {
    //            "sFirst": "<i class='icon icon-double-arrow-left'></i>",
    //            "sLast": "<i class='icon icon-double-arrow-right'></i>",
    //            "sPrevious": "<i class='icon icon-arrow-left-big'></i>",
    //            "sNext": "<i class='icon icon-arrow-right-big'></i>"
    //        } // the other pagination strings ('page'/'of') are hardcoded in plugin
    //    },
    //    "order": [[ 0, "asc" ]]
    //} );
    //// update column widths, the scrollbar changed tbody only
    //listsTable.columns.adjust().draw();

    // prevent user from scrolling with their mouse in scrollable blocks
    $('.has-scroll, .nav-wrap').on('scroll mousewheel touchmove', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    
    // remove filter group in search
    // todo: Replace animations with angular animations
    //$(document).on('click', '.filter-group .btn-close', function() {
    //    $(this).parent().fadeOut();
    //    $(this).parent().next().fadeOut();
    //});
});

function slideNav(el, direction, speed) {
    var width = el.width();
    var animSpeed = (speed > 0) ? speed : 300; //  = slide px per second
    var operator = (direction=="left") ? "-" : "+";

    // Make sure last visible item is completely visible
    var scrollLeft = el[0].scrollLeft + el.width() + el.width();
    if (direction == 'left') {
        scrollLeft = el[0].scrollLeft - el.width();
    }
    var extra = 0;

    el.find('li').each(function(index) {
        var itemOffsetLeft = this.offsetLeft;

        if (direction == 'left' && itemOffsetLeft < scrollLeft && itemOffsetLeft + this.clientWidth > scrollLeft) {
            extra = scrollLeft - itemOffsetLeft;
        }
        if (direction == 'right' && itemOffsetLeft < scrollLeft && itemOffsetLeft + this.clientWidth > scrollLeft) {
            extra = (itemOffsetLeft + this.clientWidth)-scrollLeft;
        }
    });

    el.stop();
    el.animate({
        scrollLeft: operator+"="+(width+extra)+"px"
    }, (width / animSpeed) *1000);


}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/olbico-corporate-identity/node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/olbico-corporate-identity/src/sass/screen.scss":
/*!*********************************************************************!*\
  !*** ./node_modules/olbico-corporate-identity/src/sass/screen.scss ***!
  \*********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../mini-css-extract-plugin/dist/loader.js!../../../css-loader?sourceMap!../../../sass-loader/lib/loader.js??ref--11-3!./screen.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/sass-loader/lib/loader.js?!./node_modules/olbico-corporate-identity/src/sass/screen.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/olbico-corporate-identity/src/js/olbico.js ./node_modules/olbico-corporate-identity/src/sass/screen.scss ./node_modules/olbico-corporate-identity/src/icons/build-templates/olbico-icons.font.js ./node_modules/nouislider/distribute/nouislider.css ./node_modules/olb-drag-to-select/scss/ngx-drag-to-select.scss ./node_modules/datatables.net-select-bs/css/select.bootstrap.css ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./node_modules/olbico-corporate-identity/src/js/olbico.js */"./node_modules/olbico-corporate-identity/src/js/olbico.js");
__webpack_require__(/*! ./node_modules/olbico-corporate-identity/src/sass/screen.scss */"./node_modules/olbico-corporate-identity/src/sass/screen.scss");
__webpack_require__(/*! ./node_modules/olbico-corporate-identity/src/icons/build-templates/olbico-icons.font.js */"./node_modules/olbico-corporate-identity/src/icons/build-templates/olbico-icons.font.js");
__webpack_require__(/*! ./node_modules/nouislider/distribute/nouislider.css */"./node_modules/nouislider/distribute/nouislider.css");
__webpack_require__(/*! ./node_modules/olb-drag-to-select/scss/ngx-drag-to-select.scss */"./node_modules/olb-drag-to-select/scss/ngx-drag-to-select.scss");
__webpack_require__(/*! ./node_modules/datatables.net-select-bs/css/select.bootstrap.css */"./node_modules/datatables.net-select-bs/css/select.bootstrap.css");
module.exports = __webpack_require__(/*! ./node_modules/@fortawesome/fontawesome-free/css/all.css */"./node_modules/@fortawesome/fontawesome-free/css/all.css");


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map