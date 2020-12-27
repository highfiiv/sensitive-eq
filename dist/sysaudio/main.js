(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bracicot/dev/inteface/sysaudio/src/main.ts */"zUnb");


/***/ }),

/***/ "8dfa":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/input-range/input-range.component.ts ***!
  \************************************************************************/
/*! exports provided: InputRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRangeComponent", function() { return InputRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_utilities_BaseControlValueAccessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utilities/BaseControlValueAccessor */ "OmGR");





class InputRangeComponent extends _shared_utilities_BaseControlValueAccessor__WEBPACK_IMPORTED_MODULE_2__["BaseControlValueAccessor"] {
    constructor() {
        super();
        this.value = '2.5';
        this.name = '';
        this.max = 255;
        this.step = 1;
        this.disabled = false;
    }
    ngOnInit() { }
    writeValue(val) {
        this.value = val;
        this.onChange(+this.value); // set the control/form value
    }
    onInput(val) {
        this.value = val;
        this.onChange(+this.value); // set the control/form value
    }
}
InputRangeComponent.ɵfac = function InputRangeComponent_Factory(t) { return new (t || InputRangeComponent)(); };
InputRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputRangeComponent, selectors: [["input-range"]], inputs: { value: "value", name: "name", forID: "forID", max: "max", step: "step", disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputRangeComponent),
                multi: true
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 6, consts: [[1, "range__label"], ["type", "range", "tabindex", "0", "orient", "vertical", 1, "range__input", 3, "id", "max", "step", "ngModel", "name", "disabled", "touch", "ngModelChange"]], template: function InputRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touch", function InputRangeComponent_Template_input_touch_1_listener() { return ctx.onTouched(); })("ngModelChange", function InputRangeComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.forID)("max", ctx.max)("step", ctx.step)("ngModel", ctx.value)("name", ctx.name)("disabled", ctx.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["p[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.range__label-text[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.range__value[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.range__input[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\ninput-range[_ngcontent-%COMP%] {\n  flex: 100%;\n}\n\n[type=range][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  background: transparent;\n  margin: 0;\n  width: 100%;\n}\n\n[type=range][orient=vertical][_ngcontent-%COMP%] {\n  writing-mode: bt-lr;\n  \n  -webkit-appearance: slider-vertical;\n  \n}\n\n[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  cursor: default;\n  height: 255px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 100%;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n  background: #eceff1;\n  border: 1px solid #cfd8dc;\n  border-radius: 0;\n}\n\n[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb {\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);\n  background: #607d8b;\n  border: 1px solid #eceff1;\n  border-radius: 0;\n  box-sizing: border-box;\n  cursor: default;\n  height: 6px;\n  max-height: 6px;\n  width: 15px;\n  -webkit-appearance: none;\n}\n\n[type=range][_ngcontent-%COMP%]::-moz-range-track {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n  cursor: default;\n  height: 255px;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 100%;\n  background: #eceff1;\n  border: 1px solid #cfd8dc;\n  border-radius: 0;\n  height: 127.5px;\n}\n\n[type=range][_ngcontent-%COMP%]::-moz-range-thumb {\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);\n  background: #607d8b;\n  border: 1px solid #eceff1;\n  border-radius: 0;\n  box-sizing: border-box;\n  cursor: default;\n  height: 6px;\n  max-height: 6px;\n  width: 15px;\n}\n\n[type=range][_ngcontent-%COMP%]::-ms-track {\n  cursor: default;\n  height: 255px;\n  -ms-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 100%;\n  background: transparent;\n  border-color: transparent;\n  border-width: 3px 0;\n  color: transparent;\n}\n\n[type=range][_ngcontent-%COMP%]::-ms-fill-lower {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n  background: #dde3e6;\n  border: 1px solid #cfd8dc;\n  border-radius: 0;\n}\n\n[type=range][_ngcontent-%COMP%]::-ms-fill-upper {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n  background: #eceff1;\n  border: 1px solid #cfd8dc;\n  border-radius: 0;\n}\n\n[type=range][_ngcontent-%COMP%]::-ms-thumb {\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2), 0 0 4px rgba(13, 13, 13, 0.2);\n  background: #607d8b;\n  border: 1px solid #eceff1;\n  border-radius: 0;\n  box-sizing: border-box;\n  cursor: default;\n  height: 6px;\n  max-height: 6px;\n  width: 15px;\n  margin-top: 63.75px;\n}\n\n[type=range][_ngcontent-%COMP%]::-moz-focus-outer {\n  border: 0;\n}\n\n[type=range][_ngcontent-%COMP%]:focus {\n  outline: 0;\n  cursor: hand;\n}\n\n[type=range][_ngcontent-%COMP%]:focus::-webkit-slider-runnable-track {\n  background: #fbfbfc;\n}\n\n[type=range][_ngcontent-%COMP%]:focus::-ms-fill-lower {\n  background: #eceff1;\n}\n\n[type=range][_ngcontent-%COMP%]:focus::-ms-fill-upper {\n  background: #fbfbfc;\n}\n\n[type=range][_ngcontent-%COMP%]:disabled::-webkit-slider-thumb, [type=range][_ngcontent-%COMP%]:disabled::-moz-range-thumb, [type=range][_ngcontent-%COMP%]:disabled::-ms-thumb, [type=range][_ngcontent-%COMP%]:disabled::-webkit-slider-runnable-track, [type=range][_ngcontent-%COMP%]:disabled::-ms-fill-lower, [type=range][_ngcontent-%COMP%]:disabled::-ms-fill-upper {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2lucHV0LXJhbmdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBR0E7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFBSjs7QUFFQTtFQUNJLE9BQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQXdEQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0F4Q1U7QUFiZDs7QUF3REk7RUFDSSxtQkFBQTtFQUFxQixPQUFBO0VBQ3JCLG1DQUFBO0VBQXFDLFdBQUE7QUFwRDdDOztBQXVESTtFQTlCQSxlQUFBO0VBQ0EsYUFsQlc7RUFtQlgsaUNBQUE7RUFBQSx5QkFBQTtFQUNBLFdBckJVO0VBY1YseUVBQUE7RUFxQ0ksbUJBcERNO0VBcUROLHlCQUFBO0VBQ0EsZ0JBN0NPO0FBTGY7O0FBb0RJO0VBekNBLHlFQUFBO0VBWUEsbUJBdENVO0VBdUNWLHlCQUFBO0VBQ0EsZ0JBdkNXO0VBd0NYLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBekNXO0VBMENYLGVBMUNXO0VBMkNYLFdBMUNVO0VBa0VOLHdCQUFBO0FBMUNSOztBQTZDSTtFQTlDQSx5RUFBQTtFQUlBLGVBQUE7RUFDQSxhQWxCVztFQW1CWCw4QkFBQTtFQUFBLHlCQUFBO0VBQ0EsV0FyQlU7RUErRE4sbUJBaEVNO0VBaUVOLHlCQUFBO0VBQ0EsZ0JBekRPO0VBMERQLGVBQUE7QUF4Q1I7O0FBMENJO0VBdERBLHlFQUFBO0VBWUEsbUJBdENVO0VBdUNWLHlCQUFBO0VBQ0EsZ0JBdkNXO0VBd0NYLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBekNXO0VBMENYLGVBMUNXO0VBMkNYLFdBMUNVO0FBOENkOztBQW1DSTtFQXREQSxlQUFBO0VBQ0EsYUFsQlc7RUFtQlgsNkJBQUE7RUFBQSx5QkFBQTtFQUNBLFdBckJVO0VBMEVOLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBOUJSOztBQWdDSTtFQWpFQSx5RUFBQTtFQW1FSSxtQkF0RWdCO0VBdUVoQix5QkFBQTtFQUNBLGdCQUFBO0FBOUJSOztBQWdDSTtFQXZFQSx5RUFBQTtFQXlFSSxtQkF4Rk07RUF5Rk4seUJBQUE7RUFDQSxnQkFBQTtBQTlCUjs7QUFnQ0k7RUE3RUEseUVBQUE7RUFZQSxtQkF0Q1U7RUF1Q1YseUJBQUE7RUFDQSxnQkF2Q1c7RUF3Q1gsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0F6Q1c7RUEwQ1gsZUExQ1c7RUEyQ1gsV0ExQ1U7RUFzR04sbUJBQUE7QUF0QlI7O0FBeUJJO0VBQ0ksU0FBQTtBQXZCUjs7QUF5Qkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQXZCUjs7QUF3QlE7RUFDSSxtQkFBQTtBQXRCWjs7QUF3QlE7RUFDSSxtQkEzR0U7QUFxRmQ7O0FBd0JRO0VBQ0ksbUJBQUE7QUF0Qlo7O0FBMEJRO0VBTUksbUJBQUE7QUE3QloiLCJmaWxlIjoiaW5wdXQtcmFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cbnNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucmFuZ2VfX2xhYmVsIHtcbn1cbi5yYW5nZV9fbGFiZWwtdGV4dCB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnJhbmdlX192YWx1ZSB7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnJhbmdlX19pbnB1dCB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW5wdXQtcmFuZ2Uge1xuICAgIGZsZXg6IDEwMCU7XG59XG5cbi8vIFN0eWxpbmcgQ3Jvc3MtQnJvd3NlciBDb21wYXRpYmxlIFJhbmdlIElucHV0cyB3aXRoIFNhc3Ncbi8vIEdpdGh1YjogaHR0cHM6Ly9naXRodWIuY29tL2RhcmxhbnJvZC9pbnB1dC1yYW5nZS1zYXNzXG4vLyBBdXRob3I6IERhcmxhbiBSb2QgaHR0cHM6Ly9naXRodWIuY29tL2RhcmxhbnJvZFxuLy8gVmVyc2lvbiAxLjUuMlxuLy8gTUlUIExpY2Vuc2VcblxuLy8gVEhVTUJcbiR0aHVtYi1jb2xvcjogIzYwN2Q4YiAhZGVmYXVsdDtcbiR0aHVtYi1yYWRpdXM6IDAgIWRlZmF1bHQ7XG4kdGh1bWItaGVpZ2h0OiA2cHggIWRlZmF1bHQ7XG4kdGh1bWItd2lkdGg6IDE1cHggIWRlZmF1bHQ7XG4kdGh1bWItc2hhZG93LXNpemU6IDRweCAhZGVmYXVsdDtcbiR0aHVtYi1zaGFkb3ctYmx1cjogNHB4ICFkZWZhdWx0O1xuJHRodW1iLXNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpICFkZWZhdWx0O1xuJHRodW1iLWJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJHRodW1iLWJvcmRlci1jb2xvcjogI2VjZWZmMSAhZGVmYXVsdDtcblxuLy8gVFJBQ0tcbiR0cmFjay1jb2xvcjogI2VjZWZmMSAhZGVmYXVsdDtcbiR0cmFjay13aWR0aDogMTAwJSAhZGVmYXVsdDtcbiR0cmFjay1oZWlnaHQ6IDI1NXB4ICFkZWZhdWx0O1xuJHRyYWNrLXNoYWRvdy1zaXplOiAxcHggIWRlZmF1bHQ7XG4kdHJhY2stc2hhZG93LWJsdXI6IDFweCAhZGVmYXVsdDtcbiR0cmFjay1zaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKSAhZGVmYXVsdDtcbiR0cmFjay1ib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiR0cmFjay1ib3JkZXItY29sb3I6ICNjZmQ4ZGMgIWRlZmF1bHQ7XG5cbiR0cmFjay1yYWRpdXM6IDAgIWRlZmF1bHQ7XG4kY29udHJhc3Q6IDUlICFkZWZhdWx0O1xuXG4kaWUtYm90dG9tLXRyYWNrLWNvbG9yOiBkYXJrZW4oJHRyYWNrLWNvbG9yLCAkY29udHJhc3QpICFkZWZhdWx0O1xuXG5AbWl4aW4gc2hhZG93KCRzaGFkb3ctc2l6ZSwgJHNoYWRvdy1ibHVyLCAkc2hhZG93LWNvbG9yKSB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1zaXplICRzaGFkb3ctc2l6ZSAkc2hhZG93LWJsdXIgJHNoYWRvdy1jb2xvciwgMCAwICRzaGFkb3ctc2l6ZSBsaWdodGVuKCRzaGFkb3ctY29sb3IsIDUlKTtcbn1cblxuQG1peGluIHRyYWNrIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgaGVpZ2h0OiAkdHJhY2staGVpZ2h0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgd2lkdGg6ICR0cmFjay13aWR0aDtcbn1cblxuQG1peGluIHRodW1iIHtcbiAgICBAaW5jbHVkZSBzaGFkb3coJHRodW1iLXNoYWRvdy1zaXplLCAkdGh1bWItc2hhZG93LWJsdXIsICR0aHVtYi1zaGFkb3ctY29sb3IpO1xuICAgIGJhY2tncm91bmQ6ICR0aHVtYi1jb2xvcjtcbiAgICBib3JkZXI6ICR0aHVtYi1ib3JkZXItd2lkdGggc29saWQgJHRodW1iLWJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAkdGh1bWItcmFkaXVzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGhlaWdodDogJHRodW1iLWhlaWdodDtcbiAgICBtYXgtaGVpZ2h0OiAkdGh1bWItaGVpZ2h0O1xuICAgIHdpZHRoOiAkdGh1bWItd2lkdGg7XG59XG5cblt0eXBlPSdyYW5nZSddIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAkdHJhY2std2lkdGg7XG5cbiAgICAvLyBGT1IgVkVSVElDQUxcbiAgICAmW29yaWVudD1cInZlcnRpY2FsXCJde1xuICAgICAgICB3cml0aW5nLW1vZGU6IGJ0LWxyOyAvKiBJRSAqL1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHNsaWRlci12ZXJ0aWNhbDsgLyogV2ViS2l0ICovXG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICBAaW5jbHVkZSB0cmFjaztcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93KCR0cmFjay1zaGFkb3ctc2l6ZSwgJHRyYWNrLXNoYWRvdy1ibHVyLCAkdHJhY2stc2hhZG93LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogJHRyYWNrLWNvbG9yO1xuICAgICAgICBib3JkZXI6ICR0cmFjay1ib3JkZXItd2lkdGggc29saWQgJHRyYWNrLWJvcmRlci1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHRyYWNrLXJhZGl1cztcbiAgICB9XG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBAaW5jbHVkZSB0aHVtYjtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIH1cblxuICAgICY6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3coJHRyYWNrLXNoYWRvdy1zaXplLCAkdHJhY2stc2hhZG93LWJsdXIsICR0cmFjay1zaGFkb3ctY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSB0cmFjaztcbiAgICAgICAgYmFja2dyb3VuZDogJHRyYWNrLWNvbG9yO1xuICAgICAgICBib3JkZXI6ICR0cmFjay1ib3JkZXItd2lkdGggc29saWQgJHRyYWNrLWJvcmRlci1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHRyYWNrLXJhZGl1cztcbiAgICAgICAgaGVpZ2h0OiAkdHJhY2staGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgJjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICAgIEBpbmNsdWRlIHRodW1iO1xuICAgIH1cblxuICAgICY6Oi1tcy10cmFjayB7XG4gICAgICAgIEBpbmNsdWRlIHRyYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAoJHRodW1iLWhlaWdodCAvIDIpIDA7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgJjo6LW1zLWZpbGwtbG93ZXIge1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3coJHRyYWNrLXNoYWRvdy1zaXplLCAkdHJhY2stc2hhZG93LWJsdXIsICR0cmFjay1zaGFkb3ctY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkaWUtYm90dG9tLXRyYWNrLWNvbG9yO1xuICAgICAgICBib3JkZXI6ICR0cmFjay1ib3JkZXItd2lkdGggc29saWQgJHRyYWNrLWJvcmRlci1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogKCR0cmFjay1yYWRpdXMgKiAyKTtcbiAgICB9XG4gICAgJjo6LW1zLWZpbGwtdXBwZXIge1xuICAgICAgICBAaW5jbHVkZSBzaGFkb3coJHRyYWNrLXNoYWRvdy1zaXplLCAkdHJhY2stc2hhZG93LWJsdXIsICR0cmFjay1zaGFkb3ctY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdHJhY2stY29sb3I7XG4gICAgICAgIGJvcmRlcjogJHRyYWNrLWJvcmRlci13aWR0aCBzb2xpZCAkdHJhY2stYm9yZGVyLWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAoJHRyYWNrLXJhZGl1cyAqIDIpO1xuICAgIH1cbiAgICAmOjotbXMtdGh1bWIge1xuICAgICAgICBAaW5jbHVkZSB0aHVtYjtcbiAgICAgICAgbWFyZ2luLXRvcDogJHRyYWNrLWhlaWdodCAvIDQ7XG4gICAgfVxuXG4gICAgJjo6LW1vei1mb2N1cy1vdXRlciB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGN1cnNvcjogaGFuZDtcbiAgICAgICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkdHJhY2stY29sb3IsICRjb250cmFzdCk7XG4gICAgICAgIH1cbiAgICAgICAgJjo6LW1zLWZpbGwtbG93ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRyYWNrLWNvbG9yO1xuICAgICAgICB9XG4gICAgICAgICY6Oi1tcy1maWxsLXVwcGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHRyYWNrLWNvbG9yLCAkY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYixcbiAgICAgICAgJjo6LW1vei1yYW5nZS10aHVtYixcbiAgICAgICAgJjo6LW1zLXRodW1iLFxuICAgICAgICAmOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayxcbiAgICAgICAgJjo6LW1zLWZpbGwtbG93ZXIsXG4gICAgICAgICY6Oi1tcy1maWxsLXVwcGVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input-range',
                templateUrl: './input-range.component.html',
                styleUrls: ['./input-range.component.scss'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputRangeComponent),
                        multi: true
                    }]
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], forID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JFID":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/band/band.component.ts ***!
  \**********************************************************/
/*! exports provided: BandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandComponent", function() { return BandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_utilities_BaseControlValueAccessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/utilities/BaseControlValueAccessor */ "OmGR");
/* harmony import */ var _shared_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/input-range/input-range.component */ "8dfa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function (a0) { return { "padding-top": a0 }; };
class BandComponent extends _shared_utilities_BaseControlValueAccessor__WEBPACK_IMPORTED_MODULE_4__["BaseControlValueAccessor"] {
    constructor(fb, renderer, elementRef) {
        super();
        this.fb = fb;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.id = 0;
        this.senseVal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.peak = 0; // public dB level
        this.percent = 50; // range value is what percentage of 0 - 255
        this.score = 0; // dB peaks into the range value this much
        this.form = this.fb.group({
            range: this.fb.control(null)
        });
    } // required methods are within BaseControlValueAccessor
    set dB(value) {
        this.peak = value;
        this.score = this.form.controls.range.value < value ? value - this.form.controls.range.value : 0;
    }
    ngOnInit() {
        this.form.patchValue({
            range: 50
        }, {
            emitEvent: false,
            onlySelf: true
        });
        this.form.controls['range'].valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._ngUnsubscribe)).subscribe((val) => {
            this.percent = parseInt(((val / 255) * 100).toFixed());
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', `linear-gradient(rgba(253,92,99,1), rgba(144,255,0,1) ${this.percent}%)`);
            this.senseVal.emit(val);
        });
    }
    // init value
    writeValue(val) {
        this.value = val;
        this.onChange(+this.value); // set the control/form value
    }
    onInput(val) {
        this.value = val;
        this.onChange(+this.value); // set the control/form value
    }
    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
BandComponent.ɵfac = function BandComponent_Factory(t) { return new (t || BandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandComponent, selectors: [["band"]], inputs: { dB: "dB", id: "id" }, outputs: { senseVal: "senseVal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => BandComponent),
                multi: true
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 6, consts: [[1, "score"], ["title", "sensitivity"], ["title", "peaking"], [1, "range-form", 3, "formGroup", "keydown.enter"], ["formControlName", "range"], [1, "eqband", 3, "ngStyle"]], template: function BandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function BandComponent_Template_form_keydown_enter_6_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input-range", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.score);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.peak + "px"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_5__["InputRangeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  min-width: 25px;\n  height: 255px;\n  align-items: flex-end;\n  background-color: #868686;\n  background: linear-gradient(#fd5c63, #90ff00 50%);\n}\n\n.eqband[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(1vw);\n  height: 0px;\n  background: white;\n}\n\n.range-form[_ngcontent-%COMP%] {\n  position: relative;\n  width: 10px;\n  height: 255px;\n}\n\ninput-range[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 255px;\n}\n\n.score[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -34px;\n  width: 100%;\n  justify-content: center;\n  margin: 0;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2JhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUdBLGlEQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiYmFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNTVweDsgLy8gZnJlcXVlbmN5QmluQ291bnQgaXMgMCAtIDI1NVxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY4Njg2O1xuXG4gICAgLy8gcmFuZ2UgZGVmaW5lZCBncmFkaWVudCB0byBkZWZpbmUgc2Vuc2l0aXZpdHkgem9uZVxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1Myw5Miw5OSwxKSwgcmdiYSgxNDQsMjU1LDAsMSkgNTAlKTtcbn1cblxuLmVxYmFuZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6Y2FsYygxdncpO1xuICAgIGhlaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLnJhbmdlLWZvcm17XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgd2lkdGg6MTBweDtcbiAgICBoZWlnaHQ6IDI1NXB4O1xufVxuaW5wdXQtcmFuZ2V7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyNTVweDtcbn1cbi5zY29yZXtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IC0zNHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOjA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'band',
                templateUrl: './band.component.html',
                styleUrls: ['./band.component.scss'],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => BandComponent),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { dB: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], senseVal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "OmGR":
/*!**************************************************************!*\
  !*** ./src/app/shared/utilities/BaseControlValueAccessor.ts ***!
  \**************************************************************/
/*! exports provided: BaseControlValueAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseControlValueAccessor", function() { return BaseControlValueAccessor; });
class BaseControlValueAccessor {
    constructor() {
        this.disabled = false;
    }
    /**
     * Call when value has changed programmatically
     */
    onChange(newVal) { }
    onTouched(_) { }
    /**
     * Model -> View changes
     */
    writeValue(obj) { this.value = obj; }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
    setDisabledState(isDisabled) { this.disabled = isDisabled; }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_wasm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/wasm.service */ "iDzw");
/* harmony import */ var _sys_sound_sys_sound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sys-sound/sys-sound.component */ "sw1O");




class AppComponent {
    constructor(wasmService) {
        this.wasmService = wasmService;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.wasmService.runEmbeddedConnectionExample();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_wasm_service__WEBPACK_IMPORTED_MODULE_1__["WasmService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sys-sound");
    } }, directives: [_sys_sound_sys_sound_component__WEBPACK_IMPORTED_MODULE_2__["SysSoundComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_services_wasm_service__WEBPACK_IMPORTED_MODULE_1__["WasmService"] }]; }, null); })();


/***/ }),

/***/ "WpLk":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import * as Timeline from 'src/assets/libs/timeliner.min.js';
class TimelineComponent {
    constructor() { }
    ngOnInit() {
        // console.log(Timeline);
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 2, vars: 0, template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "timeline works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lbGluZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sys_sound_sys_sound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sys-sound/sys-sound.component */ "sw1O");
/* harmony import */ var _shared_services_window_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/window.service */ "iQ22");
/* harmony import */ var _shared_components_band_band_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/band/band.component */ "JFID");
/* harmony import */ var _shared_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/input-range/input-range.component */ "8dfa");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeline/timeline.component */ "WpLk");












// import * as Timeline from 'src/assets/libs/timeliner.min.js';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ..._shared_services_window_service__WEBPACK_IMPORTED_MODULE_7__["WINDOW_PROVIDERS"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _sys_sound_sys_sound_component__WEBPACK_IMPORTED_MODULE_6__["SysSoundComponent"],
        _shared_components_band_band_component__WEBPACK_IMPORTED_MODULE_8__["BandComponent"],
        _shared_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_9__["InputRangeComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _sys_sound_sys_sound_component__WEBPACK_IMPORTED_MODULE_6__["SysSoundComponent"],
                    _shared_components_band_band_component__WEBPACK_IMPORTED_MODULE_8__["BandComponent"],
                    _shared_components_input_range_input_range_component__WEBPACK_IMPORTED_MODULE_9__["InputRangeComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ],
                providers: [
                    ..._shared_services_window_service__WEBPACK_IMPORTED_MODULE_7__["WINDOW_PROVIDERS"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iDzw":
/*!*************************************************!*\
  !*** ./src/app/shared/services/wasm.service.ts ***!
  \*************************************************/
/*! exports provided: WasmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasmService", function() { return WasmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var node_modules_buttplug_wasm_dist_web_buttplug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node_modules/buttplug-wasm/dist/web/buttplug.js */ "kSaH");
/* harmony import */ var node_modules_buttplug_wasm_dist_web_buttplug_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_modules_buttplug_wasm_dist_web_buttplug_js__WEBPACK_IMPORTED_MODULE_1__);

// https://buttplug-developer-guide.docs.buttplug.io/writing-buttplug-applications/connecting.html


// import * as bp from 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm.js';
// import 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm_bg.wasm';
class WasmService {
    // private _wasmReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // public module: any;
    constructor() {
        console.log('wasmservice', node_modules_buttplug_wasm_dist_web_buttplug_js__WEBPACK_IMPORTED_MODULE_1__);
        // this.instantiateWasm('buttplug-wasm/buttplug-wasm.web/buttplug_wasm_bg.wasm');
    }
    // https://malcoded.com/posts/web-assembly-angular/
    async instantiateWasm(url) {
        // fetch the wasm file
        // const wasmFile = await fetch(url);
        // // convert it into a binary array
        // const buffer = await wasmFile.arrayBuffer();
        // const binary = new Uint8Array(buffer);
        // // create module arguments
        // // including the wasm-file
        // const moduleArgs = {
        //     wasmBinary: binary,
        //     onRuntimeInitialized: () => {
        //         // TODO
        //     }
        // };
        // // instantiate the module
        // this.module = Module(moduleArgs);
    }
    // public wasm(input: number): Observable<number> {
    //     return this._wasmReady$.pipe(filter(value => value === true)).pipe(
    //         take(1)
    //     ).subscribe((res:any) => {
    //         console.log(res);
    //     });
    // }
    async runEmbeddedConnectionExample() {
        // Instantiate our wasm module. This only needs to be done once. If you did it
        // elsewhere, ignore this.
        await node_modules_buttplug_wasm_dist_web_buttplug_js__WEBPACK_IMPORTED_MODULE_1__["buttplugInit"]();
        // After you've created a connector, the connection looks the same no
        // matter what, though the errors thrown may be different.
        let connector = new node_modules_buttplug_wasm_dist_web_buttplug_js__WEBPACK_IMPORTED_MODULE_1__["ButtplugEmbeddedConnectorOptions"]();
        let client = new node_modules_buttplug_wasm_dist_web_buttplug_js__WEBPACK_IMPORTED_MODULE_1__["ButtplugClient"]("Developer Guide Example");
        // Now we connect. If anything goes wrong here, we'll throw, but outside of an
        // issue with arguments, embedded connections should never fail.
        try {
            await client.connect(connector);
        }
        catch (ex) {
            // If we ever get there, it probably has something to do with our arguments
            // being wrong.
            console.log(ex);
        }
        // We're connected, yay!
        console.log("Connected!");
        // And now we disconnect as usual
        await client.disconnect();
    }
    ;
}
WasmService.ɵfac = function WasmService_Factory(t) { return new (t || WasmService)(); };
WasmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WasmService, factory: WasmService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WasmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iQ22":
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/*! exports provided: WINDOW, WindowRef, BrowserWindowRef, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


// https://brianflove.com/2018-01-11/angular-window-provider/
/* Create a new injection token for injecting the window into a component. */
const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/* Define class that implements the abstract class and returns the native window object. */
class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    get nativeWindow() {
        return window;
    }
}
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
};
/* Create an array of providers. */
const WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "sw1O":
/*!**************************************************!*\
  !*** ./src/app/sys-sound/sys-sound.component.ts ***!
  \**************************************************/
/*! exports provided: SysSoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysSoundComponent", function() { return SysSoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_band_band_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/band/band.component */ "JFID");






function SysSoundComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", device_r3.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r3.label);
} }
function SysSoundComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "band", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("senseVal", function SysSoundComponent_ng_container_7_Template_band_senseVal_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateBandSense({ sensitivity: $event, id: i_r5 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const band_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dB", band_r4.dB);
} }
function SysSoundComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const freq_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", freq_r8, "+");
} }
class SysSoundComponent {
    constructor() {
        this._ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._audioContext = new AudioContext();
        this._analyser = this._audioContext.createAnalyser();
        this.bands = []; // eq band objects for element height etc
    }
    ngOnInit() { }
    ngAfterViewInit() {
        // get and list the devices for selection
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            this.devices = devices.filter(device => device.kind == "audiooutput");
        })
            .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
    }
    /* ------------------------------------------------------------------------ *
        When sensitivity scores exist this method:
        - Makes a request of some kind
        - Probably want to debounce this
    * ------------------------------------------------------------------------ */
    sensitivityRequest(amount) {
        // console.log(amount);
    }
    // Control the view
    frameLooper() {
        // this._intervalID = requestAnimationFrame(() => this.frameLooper()); // doesnt run in background tabs, dont use it
        // how many values from analyser (the "buffer" size)
        this._fbc = this._analyser.frequencyBinCount;
        const time = 1000 / 12; // 30 or 60 times per second
        this._intervalID = setInterval(() => {
            // frequency data comes as integers on a scale from 0 to 255
            this._data = new Uint8Array(this._analyser.frequencyBinCount);
            this._analyser.getByteFrequencyData(this._data);
            // DEBUGGING WEBAUDIO
            // console.log({ analyser: this._analyser });
            // console.log({ frequencyBinCount: this._analyser.frequencyBinCount });
            // console.log({ fbc: this.fbc });
            // console.log({ _data: this._data });
            // console.log({ sampleRate: this.audioContext.sampleRate });
            this._fbc = this._analyser.frequencyBinCount;
            // calculate the height of each band element using frequency data
            for (var i = 0; i < this._fbc; i++) {
                this.bands[i].dB = this._data[i];
                // this.bands[i].dB >= this.bands[i].
                // SENSITIVITY SCORE 0 - 255
                // current dB is within how much of the sensitivity range
                const ratio = this.bands[i].dB - this.bands[i].sensitivity;
                // console.log(ratio);
                if (ratio >= 0) {
                    this.sensitivityRequest(ratio);
                }
            }
        }, time);
    }
    connectStream(stream) {
        this._analyser.minDecibels = -90;
        this._analyser.maxDecibels = -10;
        this._analyser.fftSize = 32;
        // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource
        this._source = this._audioContext.createMediaStreamSource(stream);
        // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
        // MDN An AnalyserNode has exactly one input and one output. The node works even if the output is not connected.
        this._source.connect(this._analyser);
        // setup the frequency labels for the bands
        this.freqs = this.calcFreqs(this._analyser.context.sampleRate, this._analyser.fftSize);
        // set context.status: running
        this._audioContext.resume();
    }
    // calculate the frequency resolutions being displayed - sampleRate / eq band count
    calcFreqs(sampleRate, fftSize) {
        const bands = fftSize / 2; // bands are half the fftSize
        let fqRange = sampleRate / 2;
        const fqBand = sampleRate / fftSize;
        let allocated = [];
        // setup eqbands and labels
        for (let i = 0, j = bands; i < j; i++) {
            this.bands[i] = {
                'dB': undefined,
                'sensitivity': 50
            };
            // frequency labels
            // sampleRate = Math.round(sampleRate - fqRange);
            fqRange = Math.round(fqRange - fqBand);
            allocated.push(fqRange);
        }
        return allocated.slice().reverse();
    }
    // Add range values to their band data
    updateBandSense(band) {
        this.bands[band.id].sensitivity = band.sensitivity;
    }
    // PRESS play button (or select an audio device)
    play() {
        navigator.mediaDevices.getUserMedia({
            audio: { deviceId: this._audioDeviceId ? { exact: this._audioDeviceId } : undefined }
        }).then((stream) => {
            this.connectStream(stream);
            this.frameLooper();
        });
    }
    stop() {
        clearInterval(this._intervalID);
    }
    onSelect(target) {
        const elm = target;
        this._audioDeviceId = elm.value;
        if (this._audioDeviceId) {
            this.play();
        }
        // console.log(this._audioDeviceId);
    }
    // optimize ngFor
    trackByFn(index, item) {
        return index; // or item.id
    }
    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
        this.stop();
        this._intervalID = null;
    }
}
SysSoundComponent.ɵfac = function SysSoundComponent_Factory(t) { return new (t || SysSoundComponent)(); };
SysSoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SysSoundComponent, selectors: [["sys-sound"]], decls: 10, vars: 4, consts: [["src", "./assets/stop.svg", "alt", "stop audio feed", 3, "click"], ["src", "./assets/play.svg", "alt", "play audio feed", 3, "click"], ["name", "devices", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "eq-wrapper"], [1, "eqbands"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "freqs"], ["class", "freq", 4, "ngFor", "ngForOf"], [3, "value"], [3, "dB", "senseVal"], [1, "freq"]], template: function SysSoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SysSoundComponent_Template_img_click_1_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SysSoundComponent_Template_img_click_2_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SysSoundComponent_Template_select_change_3_listener($event) { return ctx.onSelect($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SysSoundComponent_option_4_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SysSoundComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SysSoundComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bands)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.freqs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _shared_components_band_band_component__WEBPACK_IMPORTED_MODULE_4__["BandComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\nnav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.eq-wrapper[_ngcontent-%COMP%] {\n  flex-flow: column;\n  width: 100%;\n  height: 30vw;\n  align-items: center;\n}\n\n.eqbands[_ngcontent-%COMP%] {\n  position: relative;\n  align-items: flex-end;\n  width: 100%;\n  height: 50vh;\n  justify-content: space-around;\n}\n\n.freqs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.freq[_ngcontent-%COMP%] {\n  flex: 1;\n  justify-content: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N5cy1zb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUVJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLE9BQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFHSiIsImZpbGUiOiJzeXMtc291bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgICB3aWR0aDoxMDAlO1xufVxubmF2e1xuICAgIHdpZHRoOjEwMCU7XG59XG4uZXEtd3JhcHBlcntcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAzMHZ3O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZXFiYW5kc3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mcmVxc3tcbiAgICB3aWR0aDoxMDAlO1xufVxuLmZyZXF7XG4gICAgZmxleDoxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SysSoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sys-sound',
                templateUrl: './sys-sound.component.html',
                styleUrls: ['./sys-sound.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map