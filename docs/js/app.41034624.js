(function () {
  "use strict";
  var t = {
      4572: function (t, e, a) {
        var l = {};
        a.r(l),
          a.d(l, {
            gS: function () {
              return p.gS;
            },
            rJ: function () {
              return p.rJ;
            },
            db: function () {
              return x;
            },
            kd: function () {
              return p.kd;
            },
            H9: function () {
              return p.H9;
            },
            GG: function () {
              return p.GG;
            },
            My: function () {
              return p.My;
            },
            P: function () {
              return p.P;
            },
            mZ: function () {
              return p.mZ;
            },
            _M: function () {
              return p._M;
            },
          });
        var i = a(6848),
          r = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { attrs: { id: "app" } },
              [
                e("h1", [t._v("TARA-CAM")]),
                e("h2", [
                  t._v(
                    "Threat Analysis and Risk Assessment for automotive CAMeras"
                  ),
                ]),
                e("Tast"),
              ],
              1
            );
          },
          s = [],
          n = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "app-container" },
              [
                e(
                  "el-row",
                  [
                    e(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: {
                          click: function (e) {
                            return t.one();
                          },
                        },
                      },
                      [t._v("Primary")]
                    ),
                    e(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: {
                          click: function (e) {
                            return t.tassst();
                          },
                        },
                      },
                      [t._v("tassst")]
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col",
                        attrs: { xs: 12, sm: 12, lg: 24 },
                      },
                      [
                        e(
                          "el-table",
                          {
                            staticClass:
                              "table table-striped scrollbar-demo-item",
                            attrs: {
                              data: t.all,
                              border: "",
                              fits: "",
                              stripe: "",
                              "highlight-current-row": "",
                            },
                          },
                          [
                            e("el-table-column", {
                              attrs: { label: "Raif", width: "57px" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      t._v(" " + t._s(e.$index + 1) + " "),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                align: "center",
                                height: "100",
                                label: "AssetIdentification_layer",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (a) {
                                    return [
                                      e("el-input", {
                                        staticClass: "text-start",
                                        attrs: {
                                          size: "mini",
                                          placeholder: "write",
                                        },
                                        model: {
                                          value: t.yes,
                                          callback: function (e) {
                                            t.yes = e;
                                          },
                                          expression: "yes",
                                        },
                                      }),
                                      e("span", [
                                        t._v(t._s(a.personsFirstName) + " "),
                                      ]),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                label: "AssetIdentification_layer",
                                prop: "personsNationalIdPk",
                                align: "center",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e(
                                        "el-select",
                                        {
                                          ref: "headerSearchSelect",
                                          staticClass: "filter-item",
                                          attrs: {
                                            filterable: "",
                                            clearable: "",
                                            remote: "",
                                            placeholder: "Select",
                                            id: "dropnational",
                                          },
                                          model: {
                                            value: t.list.Layer,
                                            callback: function (e) {
                                              t.$set(t.list, "Layer", e);
                                            },
                                            expression: "list.Layer",
                                          },
                                        },
                                        t._l(t.layer, function (t) {
                                          return e("el-option", {
                                            key: t.val,
                                            attrs: {
                                              value: t.val,
                                              label: t.lbl,
                                            },
                                          });
                                        }),
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                align: "center",
                                height: "100",
                                label: "Attack Entry Point",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (a) {
                                    return [
                                      e("el-input", {
                                        staticClass: "text-start",
                                        attrs: {
                                          size: "mini",
                                          placeholder: "write",
                                        },
                                        model: {
                                          value: t.list.AttackEntryPoint,
                                          callback: function (e) {
                                            t.$set(
                                              t.list,
                                              "AttackEntryPoint",
                                              e
                                            );
                                          },
                                          expression: "list.AttackEntryPoint",
                                        },
                                      }),
                                      e("span", [
                                        t._v(t._s(a.personsFirstName) + " "),
                                      ]),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                label: "Impact S",
                                prop: "personsNationalIdPk",
                                align: "center",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e(
                                        "el-select",
                                        {
                                          ref: "headerSearchSelect",
                                          staticClass: "filter-item",
                                          attrs: {
                                            filterable: "",
                                            clearable: "",
                                            remote: "",
                                            placeholder: "Select",
                                            id: "dropnational",
                                          },
                                          on: { change: t.change },
                                          model: {
                                            value: t.list.Impact_S,
                                            callback: function (e) {
                                              t.$set(t.list, "Impact_S", e);
                                            },
                                            expression: "list.Impact_S",
                                          },
                                        },
                                        t._l(t.ImpactS, function (t) {
                                          return e("el-option", {
                                            key: t.val,
                                            attrs: {
                                              value: t.val,
                                              label: t.lbl,
                                            },
                                          });
                                        }),
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                label: "Impact O",
                                prop: "personsNationalIdPk",
                                align: "center",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e(
                                        "el-select",
                                        {
                                          ref: "headerSearchSelect",
                                          staticClass: "filter-item",
                                          attrs: {
                                            filterable: "",
                                            clearable: "",
                                            remote: "",
                                            placeholder: "Select",
                                            id: "dropnationalo",
                                          },
                                          on: { change: t.change },
                                          model: {
                                            value: t.list.Impact_O,
                                            callback: function (e) {
                                              t.$set(t.list, "Impact_O", e);
                                            },
                                            expression: "list.Impact_O",
                                          },
                                        },
                                        t._l(t.ImpactO, function (t) {
                                          return e("el-option", {
                                            key: t.val,
                                            attrs: {
                                              value: t.val,
                                              label: t.lbl,
                                            },
                                          });
                                        }),
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                label: "Targeted Accuracy",
                                prop: "personsNationalIdPk",
                                align: "center",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e(
                                        "el-select",
                                        {
                                          ref: "headerSearchSelect",
                                          staticClass: "filter-item",
                                          attrs: {
                                            filterable: "",
                                            clearable: "",
                                            remote: "",
                                            placeholder: "Select",
                                            id: "dropnational",
                                          },
                                          on: { change: t.change },
                                          model: {
                                            value: t.list.TargetedAccuracy,
                                            callback: function (e) {
                                              t.$set(
                                                t.list,
                                                "TargetedAccuracy",
                                                e
                                              );
                                            },
                                            expression: "list.TargetedAccuracy",
                                          },
                                        },
                                        t._l(t.TargetedAccuracy, function (t) {
                                          return e("el-option", {
                                            key: t.val,
                                            attrs: {
                                              value: t.val,
                                              label: t.lbl,
                                            },
                                          });
                                        }),
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                align: "center",
                                height: "100",
                                label: "Result",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (a) {
                                    return [
                                      e("el-input", {
                                        staticClass: "text-start",
                                        attrs: { size: "mini" },
                                        model: {
                                          value: t.list.Impact_rating_Result,
                                          callback: function (e) {
                                            t.$set(
                                              t.list,
                                              "Impact_rating_Result",
                                              e
                                            );
                                          },
                                          expression:
                                            "list.Impact_rating_Result",
                                        },
                                      }),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                label: "Knowledge",
                                prop: "personsNationalIdPk",
                                align: "center",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e(
                                        "el-select",
                                        {
                                          ref: "headerSearchSelect",
                                          staticClass: "filter-item",
                                          attrs: {
                                            filterable: "",
                                            clearable: "",
                                            remote: "",
                                            placeholder: "Select",
                                            id: "dropnational",
                                          },
                                          on: {
                                            change: t.change_attack_feasibility,
                                          },
                                          model: {
                                            value: t.list.Knowledge,
                                            callback: function (e) {
                                              t.$set(t.list, "Knowledge", e);
                                            },
                                            expression: "list.Knowledge",
                                          },
                                        },
                                        t._l(t.Knowledge, function (t) {
                                          return e("el-option", {
                                            key: t.val,
                                            attrs: {
                                              value: t.val,
                                              label: t.lbl,
                                            },
                                          });
                                        }),
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                label: "Equipment",
                                prop: "personsNationalIdPk",
                                align: "center",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e(
                                        "el-select",
                                        {
                                          ref: "headerSearchSelect",
                                          staticClass: "filter-item",
                                          attrs: {
                                            filterable: "",
                                            clearable: "",
                                            remote: "",
                                            placeholder: "Select",
                                            id: "dropnational",
                                          },
                                          on: {
                                            change: t.change_attack_feasibility,
                                          },
                                          model: {
                                            value: t.list.Equipment,
                                            callback: function (e) {
                                              t.$set(t.list, "Equipment", e);
                                            },
                                            expression: "list.Equipment",
                                          },
                                        },
                                        t._l(t.Equipment, function (t) {
                                          return e("el-option", {
                                            key: t.val,
                                            attrs: {
                                              value: t.val,
                                              label: t.lbl,
                                            },
                                          });
                                        }),
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                label: "Window of Opportunity",
                                prop: "personsNationalIdPk",
                                align: "center",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e(
                                        "el-select",
                                        {
                                          ref: "headerSearchSelect",
                                          staticClass: "filter-item",
                                          attrs: {
                                            filterable: "",
                                            clearable: "",
                                            remote: "",
                                            placeholder: "Select",
                                            id: "dropnational",
                                          },
                                          on: {
                                            change: t.change_attack_feasibility,
                                          },
                                          model: {
                                            value: t.list.Window_of_Opportunity,
                                            callback: function (e) {
                                              t.$set(
                                                t.list,
                                                "Window_of_Opportunity",
                                                e
                                              );
                                            },
                                            expression:
                                              "list.Window_of_Opportunity",
                                          },
                                        },
                                        t._l(
                                          t.WindowofOpportunity,
                                          function (t) {
                                            return e("el-option", {
                                              key: t.val,
                                              attrs: {
                                                value: t.val,
                                                label: t.lbl,
                                              },
                                            });
                                          }
                                        ),
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                label: "Specialist Expertise",
                                prop: "personsNationalIdPk",
                                align: "center",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e(
                                        "el-select",
                                        {
                                          ref: "headerSearchSelect",
                                          staticClass: "filter-item",
                                          attrs: {
                                            filterable: "",
                                            clearable: "",
                                            remote: "",
                                            placeholder: "Select",
                                            id: "dropnational",
                                          },
                                          on: {
                                            change: t.change_attack_feasibility,
                                          },
                                          model: {
                                            value: t.list.SpecialistExpertise,
                                            callback: function (e) {
                                              t.$set(
                                                t.list,
                                                "SpecialistExpertise",
                                                e
                                              );
                                            },
                                            expression:
                                              "list.SpecialistExpertise",
                                          },
                                        },
                                        t._l(
                                          t.SpecialistExpertise,
                                          function (t) {
                                            return e("el-option", {
                                              key: t.val,
                                              attrs: {
                                                value: t.val,
                                                label: t.lbl,
                                              },
                                            });
                                          }
                                        ),
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: { label: "Result", align: "center" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function ({ row: a }) {
                                    return [
                                      e("el-input", {
                                        staticClass: "text-start",
                                        attrs: { size: "mini" },
                                        model: {
                                          value:
                                            t.list.Attack_feasibility_Result,
                                          callback: function (e) {
                                            t.$set(
                                              t.list,
                                              "Attack_feasibility_Result",
                                              e
                                            );
                                          },
                                          expression:
                                            "list.Attack_feasibility_Result",
                                        },
                                      }),
                                    ];
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          o = [],
          c = a(6400),
          p = a(7617);
        const u = {
            apiKey: "AIzaSyC3C3YUvs0N_1s0RQC6UlhUbvzUnW6GGDU",
            authDomain: "project-c9f7a.firebaseapp.com",
            projectId: "project-c9f7a",
            storageBucket: "project-c9f7a.appspot.com",
            messagingSenderId: "192626908580",
            appId: "1:192626908580:web:c3847cf5f5ef9f900a3531",
            measurementId: "G-NL5N9BRJ2L",
          },
          d = (0, c.Wp)(u),
          m = (0, p.aU)(d);
        var _ = {
            name: "grid",
            data() {
              return {
                work: [],
                layer: [
                  { lbl: "1 Physical World", val: "1" },
                  { lbl: "2 Sensor Layer", val: "2" },
                  { lbl: "3 Data Preparation Layer", val: "3" },
                  { lbl: "4 Application Layer", val: "4" },
                ],
                ImpactS: [
                  { lbl: "Severe", val: "3" },
                  { lbl: "Major", val: "2" },
                  { lbl: "Moderate", val: "1" },
                  { lbl: "Negligible", val: "0" },
                ],
                ImpactO: [
                  { lbl: "Severe", val: "3" },
                  { lbl: "Major", val: "2" },
                  { lbl: "Moderate", val: "1" },
                  { lbl: "Negligible", val: "0" },
                ],
                TargetedAccuracy: [
                  { lbl: "Targeted", val: "3" },
                  { lbl: "Untargeted", val: "1" },
                ],
                Knowledge: [
                  { lbl: "White-Box", val: "11" },
                  { lbl: "Gray-Box", val: "5" },
                  { lbl: "Black-Box", val: "0" },
                ],
                Equipment: [
                  { lbl: "Standard", val: "0" },
                  { lbl: "Specialized", val: "4" },
                  { lbl: "Bespoke", val: "7" },
                  { lbl: "Multiple Bespoke", val: "9" },
                ],
                WindowofOpportunity: [
                  { lbl: "remote", val: "w1_10" },
                  { lbl: "< 0.1m", val: "w2_10" },
                  { lbl: "< 0.5m", val: "w1_4" },
                  { lbl: "<1m", val: "w2_4" },
                  { lbl: "< 10m", val: "w_1" },
                  { lbl: "< 100m", val: "w_0" },
                ],
                SpecialistExpertise: [
                  { lbl: "Layman", val: "0" },
                  { lbl: "Proficient", val: "3" },
                  { lbl: "Expert", val: "6" },
                  { lbl: "Multiple Experts", val: "8" },
                ],
                all: [{ personsFirstName: "azac" }],
                yes: "",
                list: {
                  Work: "",
                  Layer: "",
                  AttackEntryPoint: "",
                  Impact_S: "",
                  Impact_O: "",
                  TargetedAccuracy: "",
                  Impact_rating_Result: "",
                  Knowledge: "",
                  Equipment: "",
                  Window_of_Opportunity: "",
                  SpecialistExpertise: "",
                  Attack_feasibility_Result: "",
                  Overall_Risk_determination: "",
                },
                result: "",
                result_attack_feasibility: "",
              };
            },
            methods: {
              change() {
                this.list.Impact_S.length > 0 &&
                  this.list.Impact_O.length > 0 &&
                  this.list.TargetedAccuracy.length > 0 &&
                  ((this.result =
                    parseInt(this.list.Impact_S) +
                    parseInt(this.list.Impact_O) +
                    parseInt(this.list.TargetedAccuracy)),
                  console.log(typeof this.result, this.result),
                  6 < this.result < 10 &&
                    (this.list.Impact_rating_Result = "Severe"),
                  (1 !== this.result && 2 !== this.result) ||
                    (this.list.Impact_rating_Result = "Negligible"),
                  (3 !== this.result && 4 !== this.result) ||
                    (this.list.Impact_rating_Result = "Moderate"),
                  (5 !== this.result && 6 !== this.result) ||
                    (this.list.Impact_rating_Result = "Major"));
              },
              change_attack_feasibility() {
                if (
                  this.list.Knowledge.length > 0 &&
                  this.list.Equipment.length > 0 &&
                  this.list.Window_of_Opportunity.length > 0 &&
                  this.list.SpecialistExpertise.length > 0
                ) {
                  const t = this.list.Window_of_Opportunity.split("_");
                  (this.result_attack_feasibility =
                    parseInt(this.list.Knowledge) +
                    parseInt(this.list.Equipment) +
                    parseInt(t[1]) +
                    parseInt(this.list.SpecialistExpertise)),
                    console.log(this.result_attack_feasibility, "xvd"),
                    this.result_attack_feasibility >= 0 &&
                      this.result_attack_feasibility <= 13 &&
                      (this.list.Attack_feasibility_Result = "High"),
                    this.result_attack_feasibility >= 14 &&
                      this.result_attack_feasibility <= 19 &&
                      (this.list.Attack_feasibility_Result = "Medium"),
                    this.result_attack_feasibility >= 20 &&
                      this.result_attack_feasibility <= 24 &&
                      (this.list.Attack_feasibility_Result = "Low"),
                    this.result_attack_feasibility >= 25 &&
                      this.result_attack_feasibility <= 38 &&
                      (this.list.Attack_feasibility_Result = "Very Low");
                }
              },
              async tassst() {
                const t = await (0, p.GG)((0, p.rJ)(m, "ThreatModeling"));
                t.forEach((t) => {
                  console.log(`${t.allresult} => ${t.data()}`, "kklkl");
                });
              },
              one() {
                const t = (0, p.rJ)(m, "ThreatModeling").get(),
                  e = (0, p.GG)(t);
                console.log(e, "jjljl"),
                  (0, p.rJ)(m, "ThreatModeling")
                    .get()
                    .then((t) => {
                      console.log(t, "hjhh");
                    });
              },
            },
          },
          h = _,
          f = a(1656),
          g = (0, f.A)(h, n, o, !1, null, null, null),
          b = g.exports,
          y = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "app-container" },
              [
                e(
                  "el-row",
                  { attrs: { gutter: 5 } },
                  [
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col",
                        attrs: { xs: 24, sm: 24, lg: 4 },
                      },
                      [
                        e(
                          "el-button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.logout,
                                expression: "logout",
                              },
                            ],
                            staticClass: "btn_sub",
                            style: {
                              backgroundColor: "#ffffff",
                              color: "#ffffff",
                              border: "none",
                            },
                            attrs: { type: "primary" },
                            on: {
                              click: function (e) {
                                return t.login_page();
                              },
                            },
                          },
                          [t._v("login")]
                        ),
                        e(
                          "el-button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !t.logout,
                                expression: "!logout",
                              },
                            ],
                            staticClass: "btn_sub",
                            attrs: { type: "primary" },
                            on: {
                              click: function (e) {
                                return t.signOut();
                              },
                            },
                          },
                          [t._v("Log out")]
                        ),
                      ],
                      1
                    ),
                    e(
                      "el-col",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.login_show,
                            expression: "login_show",
                          },
                        ],
                        staticClass: "card-panel-col",
                        staticStyle: { "margin-block": "40px" },
                        attrs: { xs: 24, sm: 24, lg: 24 },
                      },
                      [
                        e(
                          "el-dialog",
                          {
                            attrs: {
                              title: "Login",
                              visible: t.login_show,
                              width: "30%",
                              "before-close": t.handleClose,
                            },
                            on: {
                              "update:visible": function (e) {
                                t.login_show = e;
                              },
                            },
                          },
                          [
                            e(
                              "el-row",
                              { attrs: { gutter: 5 } },
                              [
                                e(
                                  "el-col",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.login_show,
                                        expression: "login_show",
                                      },
                                    ],
                                    staticClass: "card-panel-col",
                                    staticStyle: { "margin-block": "5px" },
                                    attrs: { xs: 24, sm: 24, lg: 24 },
                                  },
                                  [
                                    e("el-input", {
                                      staticClass: "text-start",
                                      attrs: {
                                        size: "mini",
                                        placeholder: "User",
                                      },
                                      model: {
                                        value: t.email,
                                        callback: function (e) {
                                          t.email = e;
                                        },
                                        expression: "email",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e(
                                  "el-col",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.login_show,
                                        expression: "login_show",
                                      },
                                    ],
                                    staticClass: "card-panel-col",
                                    staticStyle: { "margin-block": "5px" },
                                    attrs: { xs: 24, sm: 24, lg: 24 },
                                  },
                                  [
                                    e("el-input", {
                                      staticClass: "text-start",
                                      attrs: {
                                        size: "mini",
                                        placeholder: "Password",
                                      },
                                      model: {
                                        value: t.password,
                                        callback: function (e) {
                                          t.password = e;
                                        },
                                        expression: "password",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e(
                                  "el-col",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: t.login_show,
                                        expression: "login_show",
                                      },
                                    ],
                                    staticClass: "card-panel-col",
                                    staticStyle: { "margin-block": "10px" },
                                    attrs: { xs: 24, sm: 24, lg: 24 },
                                  },
                                  [
                                    e(
                                      "el-button",
                                      {
                                        staticClass: "btn_sub",
                                        attrs: {
                                          type: "primary",
                                          loading: t.login_btn,
                                        },
                                        on: {
                                          click: function (e) {
                                            return t.login();
                                          },
                                        },
                                      },
                                      [t._v("login")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e(
                              "span",
                              {
                                staticClass: "dialog-footer",
                                attrs: { slot: "footer" },
                                slot: "footer",
                              },
                              [
                                e(
                                  "el-button",
                                  {
                                    on: {
                                      click: function (e) {
                                        t.login_show = !1;
                                      },
                                    },
                                  },
                                  [t._v("Cancel")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col box2 box1",
                        attrs: { xs: 24, sm: 24, lg: 24 },
                      },
                      [
                        e("p", [
                          t._v(
                            " This tool supports the threat analysis and risk assessment according to ISO 21434, an automotive cyber-security standard. For each attack on cameras, it is possible to provide the asset identification and the attack path analysis as supplementary information. To evaluate the risk of an attack, please provide information on the attack's impact and the attack's feasibility. Please refer to the explanations below for more details on the individual metrics. "
                          ),
                        ]),
                      ]
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col",
                        staticStyle: { "margin-block": "40px" },
                        attrs: { xs: 24, sm: 24, lg: 24 },
                      },
                      [
                        e(
                          "el-table",
                          {
                            staticClass:
                              "table table-striped scrollbar-demo-item",
                            attrs: {
                              data: t.allw,
                              border: "",
                              fits: "",
                              stripe: "",
                              "highlight-current-row": "",
                              "cell-class-name": t.determination_color,
                            },
                            on: { "sort-change": t.handleSortChange },
                          },
                          [
                            e("el-table-column", {
                              attrs: {
                                align: "center",
                                height: "100",
                                label: "Work",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (a) {
                                    return [
                                      0 === a.$index
                                        ? e(
                                            "div",
                                            [
                                              e("el-input", {
                                                staticClass: "text-start",
                                                attrs: { size: "mini" },
                                                model: {
                                                  value: t.list.Work,
                                                  callback: function (e) {
                                                    t.$set(t.list, "Work", e);
                                                  },
                                                  expression: "list.Work",
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : e("span", [
                                            e("span", [
                                              t._v(t._s(a.row.Work) + " "),
                                            ]),
                                          ]),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e(
                              "el-table-column",
                              {
                                attrs: {
                                  label: "Asset  Identification",
                                  width: "150",
                                },
                              },
                              [
                                e("el-table-column", {
                                  attrs: {
                                    label: "Layer",
                                    align: "center",
                                    width: "100",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnational",
                                                      },
                                                      model: {
                                                        value: t.list.Layer,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "Layer",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.Layer",
                                                      },
                                                    },
                                                    t._l(t.layer, function (t) {
                                                      return e("el-option", {
                                                        key: t.val,
                                                        attrs: {
                                                          value: t.val,
                                                          label: t.lbl,
                                                        },
                                                      });
                                                    }),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "1" === a.row.Layer
                                                  ? e("span", [
                                                      t._v(" 1 Physical World"),
                                                    ])
                                                  : "2" === a.row.Layer
                                                  ? e("span", [
                                                      t._v(" 2 Sensor Layer"),
                                                    ])
                                                  : "3" === a.row.Layer
                                                  ? e("span", [
                                                      t._v(
                                                        " 3 Data Preparation Layer"
                                                      ),
                                                    ])
                                                  : "4" === a.row.Layer
                                                  ? e("span", [
                                                      t._v(
                                                        " 4 Application Layer"
                                                      ),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                            e(
                              "el-table-column",
                              {
                                attrs: {
                                  label: "Attack Path Analysis",
                                  align: "center",
                                },
                              },
                              [
                                e("el-table-column", {
                                  attrs: {
                                    align: "center",
                                    height: "100",
                                    width: "110",
                                    label: "Attack Entry Point",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnational",
                                                      },
                                                      model: {
                                                        value:
                                                          t.list
                                                            .AttackEntryPoint,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "AttackEntryPoint",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.AttackEntryPoint",
                                                      },
                                                    },
                                                    t._l(
                                                      t.AttackEntryPoint,
                                                      function (t) {
                                                        return e("el-option", {
                                                          key: t.val,
                                                          attrs: {
                                                            value: t.val,
                                                            label: t.lbl,
                                                          },
                                                        });
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "3" === a.row.AttackEntryPoint
                                                  ? e("span", [
                                                      t._v(
                                                        " Sensor Layer Interconnection"
                                                      ),
                                                    ])
                                                  : "2" ===
                                                    a.row.AttackEntryPoint
                                                  ? e("span", [
                                                      t._v(" Physical World"),
                                                    ])
                                                  : "1" ===
                                                    a.row.AttackEntryPoint
                                                  ? e("span", [
                                                      t._v(
                                                        " Application Layer"
                                                      ),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                            e(
                              "el-table-column",
                              {
                                attrs: {
                                  label: "Impact rating",
                                  align: "center",
                                },
                              },
                              [
                                e("el-table-column", {
                                  attrs: { label: "Impact S", align: "center" },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnational",
                                                      },
                                                      on: { change: t.change },
                                                      model: {
                                                        value: t.list.Impact_S,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "Impact_S",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.Impact_S",
                                                      },
                                                    },
                                                    t._l(
                                                      t.ImpactS,
                                                      function (t) {
                                                        return e("el-option", {
                                                          key: t.val,
                                                          attrs: {
                                                            value: t.val,
                                                            label: t.lbl,
                                                          },
                                                        });
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "3" === a.row.Impact_S
                                                  ? e("span", [t._v(" Severe")])
                                                  : "2" === a.row.Impact_S
                                                  ? e("span", [t._v(" Major")])
                                                  : "1" === a.row.Impact_S
                                                  ? e("span", [
                                                      t._v(" Moderate"),
                                                    ])
                                                  : "0" === a.row.Impact_S
                                                  ? e("span", [
                                                      t._v(" Negligible"),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: { label: "Impact O", align: "center" },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnationalo",
                                                      },
                                                      on: { change: t.change },
                                                      model: {
                                                        value: t.list.Impact_O,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "Impact_O",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.Impact_O",
                                                      },
                                                    },
                                                    t._l(
                                                      t.ImpactO,
                                                      function (t) {
                                                        return e("el-option", {
                                                          key: t.val,
                                                          attrs: {
                                                            value: t.val,
                                                            label: t.lbl,
                                                          },
                                                        });
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "3" === a.row.Impact_O
                                                  ? e("span", [t._v(" Severe")])
                                                  : "2" === a.row.Impact_O
                                                  ? e("span", [t._v(" Major")])
                                                  : "1" === a.row.Impact_O
                                                  ? e("span", [
                                                      t._v(" Moderate"),
                                                    ])
                                                  : "0" === a.row.Impact_O
                                                  ? e("span", [
                                                      t._v(" Negligible"),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    label: "Targeted Accuracy",
                                    align: "center",
                                    width: "100",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnational",
                                                      },
                                                      on: { change: t.change },
                                                      model: {
                                                        value:
                                                          t.list
                                                            .TargetedAccuracy,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "TargetedAccuracy",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.TargetedAccuracy",
                                                      },
                                                    },
                                                    t._l(
                                                      t.TargetedAccuracy,
                                                      function (t) {
                                                        return e("el-option", {
                                                          key: t.val,
                                                          attrs: {
                                                            value: t.val,
                                                            label: t.lbl,
                                                          },
                                                        });
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "3" === a.row.TargetedAccuracy
                                                  ? e("span", [
                                                      t._v(" Targeted"),
                                                    ])
                                                  : "1" ===
                                                    a.row.TargetedAccuracy
                                                  ? e("span", [
                                                      t._v(" Untargeted"),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    align: "center",
                                    height: "100",
                                    label: "Result",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e("el-input", {
                                                    staticClass: "text-start",
                                                    attrs: { size: "mini" },
                                                    model: {
                                                      value:
                                                        t.list
                                                          .Impact_rating_Result,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.list,
                                                          "Impact_rating_Result",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "list.Impact_rating_Result",
                                                    },
                                                  }),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                e("span", [
                                                  t._v(
                                                    t._s(
                                                      a.row.Impact_rating_Result
                                                    ) + " "
                                                  ),
                                                ]),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                            e(
                              "el-table-column",
                              {
                                attrs: {
                                  label: "Attack feasibility",
                                  align: "center",
                                },
                              },
                              [
                                e("el-table-column", {
                                  attrs: {
                                    label: "Knowledge",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnational",
                                                      },
                                                      on: {
                                                        change:
                                                          t.change_attack_feasibility,
                                                      },
                                                      model: {
                                                        value: t.list.Knowledge,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "Knowledge",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.Knowledge",
                                                      },
                                                    },
                                                    t._l(
                                                      t.Knowledge,
                                                      function (t) {
                                                        return e("el-option", {
                                                          key: t.val,
                                                          attrs: {
                                                            value: t.val,
                                                            label: t.lbl,
                                                          },
                                                        });
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "11" === a.row.Knowledge
                                                  ? e("span", [
                                                      t._v(" White-Box"),
                                                    ])
                                                  : "5" === a.row.Knowledge
                                                  ? e("span", [
                                                      t._v(" Gray-Box"),
                                                    ])
                                                  : "0" === a.row.Knowledge
                                                  ? e("span", [
                                                      t._v(" Black-Box"),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    label: "Equipment",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnational",
                                                      },
                                                      on: {
                                                        change:
                                                          t.change_attack_feasibility,
                                                      },
                                                      model: {
                                                        value: t.list.Equipment,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "Equipment",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.Equipment",
                                                      },
                                                    },
                                                    t._l(
                                                      t.Equipment,
                                                      function (t) {
                                                        return e("el-option", {
                                                          key: t.val,
                                                          attrs: {
                                                            value: t.val,
                                                            label: t.lbl,
                                                          },
                                                        });
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "9" === a.row.Equipment
                                                  ? e("span", [
                                                      t._v(" Multiple Bespoke"),
                                                    ])
                                                  : "7" === a.row.Equipment
                                                  ? e("span", [
                                                      t._v(" Bespoke"),
                                                    ])
                                                  : "4" === a.row.Equipment
                                                  ? e("span", [
                                                      t._v(" Specialized"),
                                                    ])
                                                  : "0" === a.row.Equipment
                                                  ? e("span", [
                                                      t._v(" Standard"),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    label: "Window of Opportunity",
                                    width: "120",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnational",
                                                      },
                                                      on: {
                                                        change:
                                                          t.change_attack_feasibility,
                                                      },
                                                      model: {
                                                        value:
                                                          t.list
                                                            .Window_of_Opportunity,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "Window_of_Opportunity",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.Window_of_Opportunity",
                                                      },
                                                    },
                                                    t._l(
                                                      t.WindowofOpportunity,
                                                      function (t) {
                                                        return e("el-option", {
                                                          key: t.val,
                                                          attrs: {
                                                            value: t.val,
                                                            label: t.lbl,
                                                          },
                                                        });
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "w1_10" ===
                                                a.row.Window_of_Opportunity
                                                  ? e("span", [t._v(" remote")])
                                                  : "w2_10" ===
                                                    a.row.Window_of_Opportunity
                                                  ? e("span", [
                                                      t._v(" < 0.1m "),
                                                    ])
                                                  : "w1_4" ===
                                                    a.row.Window_of_Opportunity
                                                  ? e("span", [t._v(" < 0.5m")])
                                                  : "w2_4" ===
                                                    a.row.Window_of_Opportunity
                                                  ? e("span", [t._v(" <1m ")])
                                                  : "w_1" ===
                                                    a.row.Window_of_Opportunity
                                                  ? e("span", [t._v(" < 10m ")])
                                                  : "w_0" ===
                                                    a.row.Window_of_Opportunity
                                                  ? e("span", [
                                                      t._v(" < 100m "),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    label: "Specialist Expertise",
                                    width: "110",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "el-select",
                                                    {
                                                      ref: "headerSearchSelect",
                                                      staticClass:
                                                        "filter-item",
                                                      attrs: {
                                                        filterable: "",
                                                        clearable: "",
                                                        remote: "",
                                                        placeholder: " ",
                                                        id: "dropnational",
                                                      },
                                                      on: {
                                                        change:
                                                          t.change_attack_feasibility,
                                                      },
                                                      model: {
                                                        value:
                                                          t.list
                                                            .SpecialistExpertise,
                                                        callback: function (e) {
                                                          t.$set(
                                                            t.list,
                                                            "SpecialistExpertise",
                                                            e
                                                          );
                                                        },
                                                        expression:
                                                          "list.SpecialistExpertise",
                                                      },
                                                    },
                                                    t._l(
                                                      t.SpecialistExpertise,
                                                      function (t) {
                                                        return e("el-option", {
                                                          key: t.val,
                                                          attrs: {
                                                            value: t.val,
                                                            label: t.lbl,
                                                          },
                                                        });
                                                      }
                                                    ),
                                                    1
                                                  ),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                "0" ===
                                                a.row.SpecialistExpertise
                                                  ? e("span", [
                                                      t._v(" Layman "),
                                                    ])
                                                  : "3" ===
                                                    a.row.SpecialistExpertise
                                                  ? e("span", [
                                                      t._v(" Proficient "),
                                                    ])
                                                  : "6" ===
                                                    a.row.SpecialistExpertise
                                                  ? e("span", [
                                                      t._v(" Expert "),
                                                    ])
                                                  : "8" ===
                                                    a.row.SpecialistExpertise
                                                  ? e("span", [
                                                      t._v(
                                                        " Multiple Experts "
                                                      ),
                                                    ])
                                                  : t._e(),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: { label: "Result", align: "center" },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          0 === a.$index
                                            ? e(
                                                "div",
                                                [
                                                  e("el-input", {
                                                    staticClass: "text-start",
                                                    attrs: { size: "mini" },
                                                    model: {
                                                      value:
                                                        t.list
                                                          .Attack_feasibility_Result,
                                                      callback: function (e) {
                                                        t.$set(
                                                          t.list,
                                                          "Attack_feasibility_Result",
                                                          e
                                                        );
                                                      },
                                                      expression:
                                                        "list.Attack_feasibility_Result",
                                                    },
                                                  }),
                                                ],
                                                1
                                              )
                                            : e("span", [
                                                e("span", [
                                                  t._v(
                                                    t._s(
                                                      a.row
                                                        .Attack_feasibility_Result
                                                    ) + " "
                                                  ),
                                                ]),
                                              ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                            e("el-table-column", {
                              attrs: {
                                label: "Risk value determination",
                                align: "center",
                                width: "130",
                                prop: "Overall_Risk_determination",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (a) {
                                    return [
                                      0 === a.$index
                                        ? e(
                                            "div",
                                            {
                                              staticStyle: {
                                                display: "flex",
                                                "justify-content": "center",
                                              },
                                            },
                                            [
                                              e(
                                                "span",
                                                {
                                                  staticClass: "color_w",
                                                  style: {
                                                    background: t.lineColor,
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.list
                                                          .Overall_Risk_determination
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          )
                                        : e("span", [
                                            e("span", [
                                              t._v(
                                                t._s(
                                                  a.row
                                                    .Overall_Risk_determination
                                                ) + " "
                                              ),
                                            ]),
                                          ]),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: { label: "Submit", align: "center" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (a) {
                                    return [
                                      0 === a.$index
                                        ? e(
                                            "div",
                                            [
                                              e(
                                                "el-button",
                                                {
                                                  staticClass: "btn_sub",
                                                  attrs: {
                                                    type: "primary",
                                                    icon: "el-icon-circle-plus-outline",
                                                    loading: t.loading_rge,
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.reg();
                                                    },
                                                  },
                                                },
                                                [t._v("Submit")]
                                              ),
                                            ],
                                            1
                                          )
                                        : e(
                                            "div",
                                            { staticClass: "btn_height" },
                                            [
                                              e(
                                                "el-button",
                                                {
                                                  staticClass: "btn_sub",
                                                  attrs: {
                                                    type: "success",
                                                    icon: "el-icon-check",
                                                    loading: t.loading_Verify,
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.Verify(a.row);
                                                    },
                                                  },
                                                },
                                                [t._v("Verify")]
                                              ),
                                              e("span", {
                                                staticStyle: { height: "5px" },
                                              }),
                                              e(
                                                "el-button",
                                                {
                                                  staticClass: "btn_sub",
                                                  attrs: {
                                                    type: "danger",
                                                    icon: "el-icon-delete",
                                                    loading: t.loading_Verify,
                                                  },
                                                  on: {
                                                    click: function (e) {
                                                      return t.deleteDocument(
                                                        a.row
                                                      );
                                                    },
                                                  },
                                                },
                                                [t._v("Delete")]
                                              ),
                                            ],
                                            1
                                          ),
                                    ];
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col",
                        attrs: { xs: 24, sm: 24, lg: 24 },
                      },
                      [
                        e(
                          "el-table",
                          {
                            staticClass:
                              "table table-striped scrollbar-demo-item",
                            attrs: {
                              data: t.all,
                              border: "",
                              fits: "",
                              stripe: "",
                              "highlight-current-row": "",
                              "cell-class-name": t.determination_color,
                              "default-sort": {
                                prop: "Layer",
                                order: "ascending",
                              },
                            },
                            on: { "sort-change": t.handleSortChange },
                          },
                          [
                            e("el-table-column", {
                              attrs: { label: "#", width: "57px" },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      t._v(" " + t._s(e.$index + 1) + " "),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e("el-table-column", {
                              attrs: {
                                align: "center",
                                height: "100",
                                label: "Work",
                              },
                              scopedSlots: t._u([
                                {
                                  key: "default",
                                  fn: function (a) {
                                    return [
                                      e("span", {
                                        domProps: {
                                          innerHTML: a.row.Work,
                                        },
                                      }),
                                    ];
                                  },
                                },
                              ]),
                            }),
                            e(
                              "el-table-column",
                              {
                                attrs: {
                                  label: "Asset Identification",
                                  align: "center",
                                },
                              },
                              [
                                e("el-table-column", {
                                  attrs: {
                                    label: "Layer",
                                    prop: "Layer",
                                    width: "100",
                                    align: "center",
                                    sortable: "custom",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "1" === a.row.Layer
                                            ? e("span", [
                                                t._v(" 1 Physical World"),
                                              ])
                                            : "2" === a.row.Layer
                                            ? e("span", [
                                                t._v(" 2 Sensor Layer"),
                                              ])
                                            : "3" === a.row.Layer
                                            ? e("span", [
                                                t._v(
                                                  " 3 Data Preparation Layer"
                                                ),
                                              ])
                                            : "4" === a.row.Layer
                                            ? e("span", [
                                                t._v(" 4 Application Layer"),
                                              ])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                            e(
                              "el-table-column",
                              {
                                attrs: {
                                  label: "Attack Path Analysis",
                                  align: "center",
                                },
                              },
                              [
                                e("el-table-column", {
                                  attrs: {
                                    align: "center",
                                    height: "100",
                                    width: "110",
                                    label: "Attack Entry Point",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "3" === a.row.AttackEntryPoint
                                            ? e("span", [
                                                t._v(" Sensor / Data"),
                                              ])
                                            : "2" === a.row.AttackEntryPoint
                                            ? e("span", [
                                                t._v(" Physical World"),
                                              ])
                                            : "1" === a.row.AttackEntryPoint
                                            ? e("span", [
                                                t._v(" Application Layer"),
                                              ])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                            e(
                              "el-table-column",
                              {
                                attrs: {
                                  label: "Impact rating",
                                  align: "center",
                                },
                              },
                              [
                                e("el-table-column", {
                                  attrs: { label: "Impact S", align: "center" },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "3" === a.row.Impact_S
                                            ? e("span", [t._v(" Severe")])
                                            : "2" === a.row.Impact_S
                                            ? e("span", [t._v(" Major")])
                                            : "1" === a.row.Impact_S
                                            ? e("span", [t._v(" Moderate")])
                                            : "0" === a.row.Impact_S
                                            ? e("span", [t._v(" Negligible")])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: { label: "Impact O", align: "center" },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "3" === a.row.Impact_O
                                            ? e("span", [t._v(" Severe")])
                                            : "2" === a.row.Impact_O
                                            ? e("span", [t._v(" Major")])
                                            : "1" === a.row.Impact_O
                                            ? e("span", [t._v(" Moderate")])
                                            : "0" === a.row.Impact_O
                                            ? e("span", [t._v(" Negligible")])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    label: "Targeted Accuracy",
                                    width: "110",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "3" === a.row.TargetedAccuracy
                                            ? e("span", [t._v(" Targeted")])
                                            : "1" === a.row.TargetedAccuracy
                                            ? e("span", [t._v(" Untargeted")])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    align: "center",
                                    height: "100",
                                    label: "Result",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          e("span", [
                                            t._v(
                                              t._s(a.row.Impact_rating_Result) +
                                                " "
                                            ),
                                          ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                            e(
                              "el-table-column",
                              {
                                attrs: {
                                  label: "Attack Feasibility",
                                  align: "center",
                                },
                              },
                              [
                                e("el-table-column", {
                                  attrs: {
                                    label: "Knowledge",
                                    width: "110",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "11" === a.row.Knowledge
                                            ? e("span", [t._v(" White-Box")])
                                            : "5" === a.row.Knowledge
                                            ? e("span", [t._v(" Gray-Box")])
                                            : "0" === a.row.Knowledge
                                            ? e("span", [t._v(" Black-Box")])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    label: "Equipment",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "9" === a.row.Equipment
                                            ? e("span", [
                                                t._v(" Multiple Bespoke"),
                                              ])
                                            : "7" === a.row.Equipment
                                            ? e("span", [t._v(" Bespoke")])
                                            : "4" === a.row.Equipment
                                            ? e("span", [t._v(" Specialized")])
                                            : "0" === a.row.Equipment
                                            ? e("span", [t._v(" Standard")])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    label: "Window of Opportunity",
                                    width: "120",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "w1_10" ===
                                          a.row.Window_of_Opportunity
                                            ? e("span", [t._v(" remote")])
                                            : "w2_10" ===
                                              a.row.Window_of_Opportunity
                                            ? e("span", [t._v(" < 0.1m ")])
                                            : "w1_4" ===
                                              a.row.Window_of_Opportunity
                                            ? e("span", [t._v(" < 0.5m")])
                                            : "w2_4" ===
                                              a.row.Window_of_Opportunity
                                            ? e("span", [t._v(" <1m ")])
                                            : "w_1" ===
                                              a.row.Window_of_Opportunity
                                            ? e("span", [t._v(" < 10m ")])
                                            : "w_0" ===
                                              a.row.Window_of_Opportunity
                                            ? e("span", [t._v(" < 100m ")])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: {
                                    label: "Specialist Expertise",
                                    width: "120",
                                    align: "center",
                                  },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          "0" === a.row.SpecialistExpertise
                                            ? e("span", [t._v(" Layman ")])
                                            : "3" === a.row.SpecialistExpertise
                                            ? e("span", [t._v(" Proficient ")])
                                            : "6" === a.row.SpecialistExpertise
                                            ? e("span", [t._v(" Expert ")])
                                            : "8" === a.row.SpecialistExpertise
                                            ? e("span", [
                                                t._v(" Multiple Experts "),
                                              ])
                                            : t._e(),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                                e("el-table-column", {
                                  attrs: { label: "Result", align: "center" },
                                  scopedSlots: t._u([
                                    {
                                      key: "default",
                                      fn: function (a) {
                                        return [
                                          e("span", [
                                            t._v(
                                              t._s(
                                                a.row.Attack_feasibility_Result
                                              ) + " "
                                            ),
                                          ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                            e("el-table-column", {
                              attrs: {
                                label: "Risk value determination",
                                align: "center",
                                width: "130",
                                prop: "Overall_Risk_determination",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col box2",
                        attrs: { xs: 24, sm: 24, lg: 24 },
                      },
                      [
                        e("p", [
                          t._v(
                            " These tables provide guidelines for the impact and attack feasibility ratings. This corresponds to Annex F and G of the ISO standard. For the impact rating, we focus on the safety and operational damage. Additionally, we include the targeted accuracy, representing whether the attack is targeted or untargeted.Three different methods are proposed to rate the feasibility of which we selected the attack potential-based approach. We include the following core parameters: Required specialist expertise, required knowledge, window of opportunity, and required equipment. Finally, the overall risk is the result of multiplying the impact with the feasibility, normalizing it to a value range from one to five. "
                          ),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                e(
                  "el-row",
                  { staticClass: "row-bg", attrs: { gutter: 5, type: "flex" } },
                  [
                    e(
                      "div",
                      { staticClass: "box3" },
                      [
                        e(
                          "el-col",
                          {
                            staticStyle: { "text-align": "center" },
                            attrs: { xs: 24, sm: 24, lg: 24 },
                          },
                          [
                            e("div", { staticClass: "hader_box" }, [
                              e("span", [t._v("Impact ")]),
                              e(
                                "span",
                                { staticStyle: { "margin-left": "30px" } },
                                [
                                  t._v(
                                    "see: ISO/SAE 21434:2021(E), Chapter 15.5"
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 12 },
                          },
                          [e("Safety")],
                          1
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 12 },
                          },
                          [e("OperationalDamageRating")],
                          1
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 24 },
                          },
                          [e("p")]
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 12 },
                          },
                          [e("OverallImpactRating")],
                          1
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 12 },
                          },
                          [e("Targeted")],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                e(
                  "el-row",
                  { staticClass: "row-bg", attrs: { gutter: 5, type: "flex" } },
                  [
                    e(
                      "div",
                      { staticClass: "box3" },
                      [
                        e(
                          "el-col",
                          {
                            staticStyle: { "text-align": "center" },
                            attrs: { xs: 24, sm: 24, lg: 24 },
                          },
                          [
                            e("div", { staticClass: "hader_box" }, [
                              e("span", [t._v("Attack Feasibility ")]),
                              e(
                                "span",
                                { staticStyle: { "margin-left": "30px" } },
                                [
                                  t._v(
                                    "see: ISO/SAE 21434:2021(E), Chapter 15.7"
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 12 },
                          },
                          [e("SpecialistExpertise")],
                          1
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 12 },
                          },
                          [e("Equipment")],
                          1
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 24 },
                          },
                          [e("p")]
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 12 },
                          },
                          [e("WindowOpportunity")],
                          1
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 12 },
                          },
                          [e("Knowledge")],
                          1
                        ),
                        e(
                          "el-col",
                          {
                            staticClass: "card-panel-col",
                            attrs: { xs: 24, sm: 24, lg: 24 },
                          },
                          [e("p")]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                e(
                  "el-row",
                  { staticClass: "row-bg", attrs: { gutter: 5, type: "flex" } },
                  [
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col box3",
                        attrs: { xs: 24, sm: 24, lg: 7 },
                      },
                      [e("OverallFeasibilityRating")],
                      1
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col",
                        attrs: { xs: 24, sm: 24, lg: 1 },
                      },
                      [e("p")]
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col box3",
                        attrs: { xs: 24, sm: 24, lg: 4 },
                      },
                      [e("Layer")],
                      1
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col",
                        attrs: { xs: 24, sm: 24, lg: 1 },
                      },
                      [e("p")]
                    ),
                    e(
                      "el-col",
                      {
                        staticClass: "card-panel-col box3",
                        attrs: { xs: 24, sm: 24, lg: 11 },
                      },
                      [e("colors")],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          v = [],
          w = (a(4114), a(2669));
        const k = {
            apiKey: "AIzaSyC3C3YUvs0N_1s0RQC6UlhUbvzUnW6GGDU",
            authDomain: "project-c9f7a.firebaseapp.com",
            projectId: "project-c9f7a",
            storageBucket: "project-c9f7a.appspot.com",
            messagingSenderId: "192626908580",
            appId: "1:192626908580:web:c3847cf5f5ef9f900a3531",
            measurementId: "G-NL5N9BRJ2L",
          },
          S = (0, c.Wp)(k),
          x = (0, p.aU)(S);
        var I = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  { attrs: { label: "Safety Impact Rating" } },
                  [
                    e("el-table-column", {
                      attrs: {
                        prop: "ImpactRating",
                        label: "Impact Rating",
                        width: "100",
                      },
                    }),
                    e("el-table-column", {
                      attrs: { prop: "Criteria", label: "Criteria" },
                    }),
                    e("el-table-column", {
                      attrs: {
                        width: "100",
                        prop: "Numericalrepresentation",
                        label: "Numerical Format",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          R = [],
          A = {
            data() {
              return {
                list: [
                  {
                    ImpactRating: "Severe",
                    Criteria:
                      "S3: Life-threatening injuries (survival uncertain), fatal injuries",
                    Numericalrepresentation: "3",
                  },
                  {
                    ImpactRating: "Major",
                    Criteria:
                      "S2: Severe and life-threatening injuries (survival probable)",
                    Numericalrepresentation: "2",
                  },
                  {
                    ImpactRating: "Moderate",
                    Criteria: "S1: Light and moderate injuries",
                    Numericalrepresentation: "1",
                  },
                  {
                    ImpactRating: "Negligible",
                    Criteria: "S0: No injuries",
                    Numericalrepresentation: "0",
                  },
                ],
              };
            },
          },
          E = A,
          O = (0, f.A)(E, I, R, !1, null, null, null),
          L = O.exports,
          C = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  { attrs: { label: "Operational Damage Rating" } },
                  [
                    e("el-table-column", {
                      attrs: {
                        prop: "ImpactRating",
                        label: "Impact Rating",
                        width: "100",
                      },
                    }),
                    e("el-table-column", {
                      attrs: { prop: "Criteria", label: "Criteria" },
                    }),
                    e("el-table-column", {
                      attrs: {
                        prop: "Numericalrepresentation",
                        width: "100",
                        label: "Numerical Format",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          M = [],
          N = {
            data() {
              return {
                list: [
                  {
                    ImpactRating: "Severe",
                    Criteria:
                      "S3:The operational damage leads to the loss or impairment of a core vehicle function.",
                    Numericalrepresentation: "3",
                  },
                  {
                    ImpactRating: "Major",
                    Criteria:
                      "The operational damage leads to the loss or impairment of an important vehicle function.",
                    Numericalrepresentation: "2",
                  },
                  {
                    ImpactRating: "Moderate",
                    Criteria:
                      "The operational damage leads to partial degradation of a vehicle function.",
                    Numericalrepresentation: "1",
                  },
                  {
                    ImpactRating: "Negligible",
                    Criteria:
                      "The operational damage leads to no impairment or non-perceivable impairment of a vehicle function.",
                    Numericalrepresentation: "0",
                  },
                ],
              };
            },
          },
          T = N,
          W = (0, f.A)(T, C, M, !1, null, null, null),
          P = W.exports,
          q = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  { attrs: { label: "Overall Impact Rating" } },
                  [
                    e("el-table-column", {
                      attrs: { prop: "ImpactRating", label: "Impact Rating" },
                    }),
                    e("el-table-column", {
                      attrs: {
                        prop: "Sumfrom",
                        label: "Sum from",
                        width: "135",
                      },
                    }),
                    e("el-table-column", {
                      attrs: { width: "135", prop: "Sumto", label: "Sum to" },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          D = [],
          j = {
            data() {
              return {
                list: [
                  { ImpactRating: "Severe", Sumfrom: "7", Sumto: "9" },
                  { ImpactRating: "Major", Sumfrom: "5", Sumto: "6" },
                  { ImpactRating: "Moderate", Sumfrom: "3", Sumto: "4" },
                  { ImpactRating: "Negligible", Sumfrom: "1", Sumto: "2" },
                ],
              };
            },
          },
          K = j,
          B = (0, f.A)(K, q, D, !1, null, null, null),
          $ = B.exports,
          F = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  {
                    attrs: {
                      label: "Additional Impact Category: Targeted Accuracy",
                      width: "100",
                    },
                  },
                  [
                    e("el-table-column", {
                      attrs: { prop: "Targeted", label: "Impact Rating" },
                    }),
                    e("el-table-column", {
                      attrs: { prop: "Criteria", label: "Criteria" },
                    }),
                    e("el-table-column", {
                      attrs: {
                        width: "100",
                        prop: "Numericalrepresentation",
                        label: "Numerical Format",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          V = [],
          z = {
            data() {
              return {
                list: [
                  {
                    Targeted: "Targeted",
                    Criteria: "The result of the attack can be controlled",
                    Numericalrepresentation: "3",
                  },
                  {
                    Targeted: "Untargeted",
                    Criteria: "The attack cannot control the result",
                    Numericalrepresentation: "1",
                  },
                ],
              };
            },
          },
          U = z,
          G = (0, f.A)(U, F, V, !1, null, null, null),
          H = G.exports,
          J = function () {
            var t = this,
              e = t._self._c;
            return e(
              "form",
              {
                on: {
                  submit: function (e) {
                    return (
                      e.preventDefault(), t.sendEmail.apply(null, arguments)
                    );
                  },
                },
              },
              [
                e("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.name,
                      expression: "name",
                    },
                  ],
                  attrs: {
                    type: "text",
                    placeholder: "Your Name",
                    required: "",
                  },
                  domProps: { value: t.name },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.name = e.target.value);
                    },
                  },
                }),
                e("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.email,
                      expression: "email",
                    },
                  ],
                  attrs: {
                    type: "email",
                    placeholder: "Your Email",
                    required: "",
                  },
                  domProps: { value: t.email },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.email = e.target.value);
                    },
                  },
                }),
                e("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.message,
                      expression: "message",
                    },
                  ],
                  attrs: { placeholder: "Your Message", required: "" },
                  domProps: { value: t.message },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.message = e.target.value);
                    },
                  },
                }),
                e("button", { attrs: { type: "submit" } }, [t._v("Send")]),
              ]
            );
          },
          Y = [],
          Q = {
            data() {
              return { name: "", email: "", message: "" };
            },
            methods: {
              sendEmail() {
                const t = {
                  form_name: this.name,
                  email_id: this.email,
                  message: this.message,
                };
                w.Ay.send(
                  "service_qtjgetl",
                  "template_alg19tn",
                  t,
                  "hMEg-WaYbu_h5UT57"
                ).then(
                  (t) => {
                    console.log("SUCCESS!", t.status, t.text),
                      this.updateDatabase();
                  },
                  (t) => {
                    console.log("FAILED...", t);
                  }
                );
              },
              updateDatabase() {},
            },
          },
          Z = Q,
          X = (0, f.A)(Z, J, Y, !1, null, null, null),
          tt = X.exports,
          et = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              [
                e(
                  "el-dialog",
                  {
                    attrs: {
                      title: "Tips",
                      visible: t.dialogVisible,
                      width: "30%",
                      "before-close": t.handleClose,
                    },
                    on: {
                      "update:visible": function (e) {
                        t.dialogVisible = e;
                      },
                    },
                  },
                  [
                    e("span", [t._v("This is a message")]),
                    e(
                      "span",
                      {
                        staticClass: "dialog-footer",
                        attrs: { slot: "footer" },
                        slot: "footer",
                      },
                      [
                        e(
                          "el-button",
                          {
                            on: {
                              click: function (e) {
                                t.dialogVisible = !1;
                              },
                            },
                          },
                          [t._v("Cancel")]
                        ),
                        e(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: {
                              click: function (e) {
                                t.dialogVisible = !1;
                              },
                            },
                          },
                          [t._v("Confirm")]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                e("h2", [t._v("Login")]),
              ],
              1
            );
          },
          at = [],
          lt = a(7845);
        const it = {
            apiKey: "AIzaSyC3C3YUvs0N_1s0RQC6UlhUbvzUnW6GGDU",
            authDomain: "project-c9f7a.firebaseapp.com",
            projectId: "project-c9f7a",
            storageBucket: "project-c9f7a.appspot.com",
            messagingSenderId: "192626908580",
            appId: "1:192626908580:web:c3847cf5f5ef9f900a3531",
            measurementId: "G-NL5N9BRJ2L",
          },
          rt = (0, c.Wp)(it),
          st = (0, lt.xI)(rt);
        var nt = {
            props: {},
            data() {
              return { dialogVisible: !0 };
            },
            setup() {
              const t = (0, i.ref)(""),
                e = (0, i.ref)(""),
                a = async () => {
                  try {
                    await (0, lt.x9)(st, t.value, e.value),
                      alert("Logged in successfully!");
                  } catch (a) {
                    alert(a.message);
                  }
                };
              return { email: t, password: e, login: a };
            },
          },
          ot = nt,
          ct = (0, f.A)(ot, et, at, !1, null, null, null),
          pt = ct.exports,
          ut = function () {
            var t = this,
              e = t._self._c;
            return e("div", [
              e("h2", [t._v("Register")]),
              e(
                "form",
                {
                  on: {
                    submit: function (e) {
                      return (
                        e.preventDefault(), t.register.apply(null, arguments)
                      );
                    },
                  },
                },
                [
                  e("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.email,
                        expression: "email",
                      },
                    ],
                    attrs: { type: "email", placeholder: "Email" },
                    domProps: { value: t.email },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.email = e.target.value);
                      },
                    },
                  }),
                  e("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.password,
                        expression: "password",
                      },
                    ],
                    attrs: { type: "password", placeholder: "Password" },
                    domProps: { value: t.password },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.password = e.target.value);
                      },
                    },
                  }),
                  e("button", { attrs: { type: "submit" } }, [
                    t._v("Register"),
                  ]),
                ]
              ),
            ]);
          },
          dt = [],
          mt = {
            setup() {
              const t = (0, i.ref)(""),
                e = (0, i.ref)(""),
                a = async () => {
                  try {
                    await (0, l.createUserWithEmailAndPassword)(
                      l.auth,
                      t.value,
                      e.value
                    ),
                      alert("Registered successfully!");
                  } catch (a) {
                    alert(a.message);
                  }
                };
              return { email: t, password: e, register: a };
            },
          },
          _t = mt,
          ht = (0, f.A)(_t, ut, dt, !1, null, null, null),
          ft = ht.exports,
          gt = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  { attrs: { label: "Knowledge" } },
                  [
                    e("el-table-column", {
                      attrs: {
                        prop: "ThreatModel",
                        label: "Threat Model",
                        width: "180",
                      },
                    }),
                    e("el-table-column", {
                      attrs: { prop: "Description", label: "Description" },
                    }),
                    e("el-table-column", {
                      attrs: {
                        width: "100",
                        prop: "Numericalrepresentation",
                        label: "Numerical Format",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          bt = [],
          yt = {
            data() {
              return {
                list: [
                  {
                    ThreatModel: "Black-Box",
                    Description:
                      "Attacker has only limited access to the target system for attack development",
                    Numericalrepresentation: "0",
                  },
                  {
                    ThreatModel: "Gray-Box",
                    Description:
                      "The operational damage leads to the loss or impairment of an important vehicle function.",
                    Numericalrepresentation: "2",
                  },
                  {
                    ThreatModel: "White-Box",
                    Description:
                      "The operational damage leads to partial degradation of a vehicle function.",
                    Numericalrepresentation: "1",
                  },
                ],
              };
            },
          },
          vt = yt,
          wt = (0, f.A)(vt, gt, bt, !1, null, null, null),
          kt = wt.exports,
          St = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  { attrs: { label: "Equipment" } },
                  [
                    e("el-table-column", {
                      attrs: {
                        prop: "EquipmentLevel",
                        label: "Equipment Level",
                        width: "130",
                      },
                    }),
                    e("el-table-column", {
                      attrs: { prop: "Description", label: "Description" },
                    }),
                    e("el-table-column", {
                      attrs: {
                        prop: "Numericalrepresentation",
                        label: "Numerical Format",
                        width: "100",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          xt = [],
          It = {
            data() {
              return {
                list: [
                  {
                    EquipmentLevel: "Standard",
                    Description:
                      "Equipment is readily available to the attacker.",
                    Numericalrepresentation: "0",
                  },
                  {
                    EquipmentLevel: "Specialized",
                    Description:
                      "Equipment is not readily available to the attacker but can be acquired without undue effort.",
                    Numericalrepresentation: "4",
                  },
                  {
                    EquipmentLevel: "Bespoke",
                    Description:
                      "Equipment is specially produced and not readily available to the public, or the equipment is so specialized that its distribution is controlled, possibly even restricted.",
                    Numericalrepresentation: "7",
                  },
                  {
                    EquipmentLevel: "Multiple Bespoke",
                    Description:
                      "Is introduced to allow for a situation, where different types of bespoke equipment are required for distinct steps of an attack.",
                    Numericalrepresentation: "9",
                  },
                ],
              };
            },
          },
          Rt = It,
          At = (0, f.A)(Rt, St, xt, !1, null, null, null),
          Et = At.exports,
          Ot = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  { attrs: { label: "Window of Opportunity" } },
                  [
                    e("el-table-column", {
                      attrs: {
                        prop: "ThreatRange",
                        label: "Threat Range",
                        width: "100",
                      },
                    }),
                    e("el-table-column", {
                      attrs: {
                        prop: "Description",
                        label: "Description",
                        width: "180",
                      },
                    }),
                    e("el-table-column", {
                      attrs: {
                        prop: "Numericalrepresentation",
                        label: "Numerical Format",
                      },
                    }),
                    e("el-table-column", {
                      attrs: {
                        prop: "Numericalrepresentation",
                        label: "Numerical Format",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          Lt = [],
          Ct = {
            data() {
              return {
                list: [
                  {
                    ThreatRange: "remote",
                    Description: "Difficult / None",
                    Numericalrepresentation: "10",
                  },
                  {
                    ThreatRange: "< 0.1m",
                    Description: "Difficult / None",
                    Numericalrepresentation: "10",
                  },
                  {
                    ThreatRange: "< 0.5m",
                    Description: "Moderate",
                    Numericalrepresentation: "4",
                  },
                  {
                    ThreatRange: "< 1m",
                    Description: "Moderate",
                    Numericalrepresentation: "4",
                  },
                  {
                    ThreatRange: "< 10m",
                    Description: "Easy",
                    Numericalrepresentation: "1",
                  },
                  {
                    ThreatRange: "< 100m",
                    Description: "Unlimited",
                    Numericalrepresentation: "0",
                  },
                ],
              };
            },
          },
          Mt = Ct,
          Nt = (0, f.A)(Mt, Ot, Lt, !1, null, null, null),
          Tt = Nt.exports,
          Wt = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  { attrs: { label: "Specialist Expertise" } },
                  [
                    e("el-table-column", {
                      attrs: {
                        prop: "ThreatRange",
                        label: "Expertise Level",
                        width: "130",
                      },
                    }),
                    e("el-table-column", {
                      attrs: { prop: "Description", label: "Description" },
                    }),
                    e("el-table-column", {
                      attrs: {
                        prop: "Numericalrepresentation",
                        label: "Numerical Format",
                        width: "80",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          Pt = [],
          qt = {
            data() {
              return {
                list: [
                  {
                    ThreatRange: "Layman",
                    Description:
                      "Unknowledgeable compared to experts or proficient persons, with no particular expertise.",
                    Numericalrepresentation: "0",
                  },
                  {
                    ThreatRange: "Proficient",
                    Description:
                      "Knowledgeable in that they are familiar with the security behaviour of the product or system type.",
                    Numericalrepresentation: "3",
                  },
                  {
                    ThreatRange: "Expert",
                    Description:
                      "Familiar with the underlying algorithms, protocols, hardware, structures, security behaviour, principles and concepts of security employed, techniques and tools for the definition of new attacks, cryptography, classical attacks for the product type, attack methods, etc. implemented in the product or system type.",
                    Numericalrepresentation: "6",
                  },
                  {
                    ThreatRange: "Multiple Experts",
                    Description:
                      "Different fields of expertise are required at an expert level for distinct steps of an attack.",
                    Numericalrepresentation: "8",
                  },
                ],
              };
            },
          },
          Dt = qt,
          jt = (0, f.A)(Dt, Wt, Pt, !1, null, null, null),
          Kt = jt.exports,
          Bt = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e(
                  "el-table-column",
                  {
                    attrs: { label: "Overall Feasibility Rating", width: "80" },
                  },
                  [
                    e("el-table-column", {
                      attrs: {
                        prop: "FeasibilityRating",
                        label: "Feasibility Rating ",
                      },
                    }),
                    e("el-table-column", {
                      attrs: {
                        prop: "Sumfrom",
                        label: "Sum from",
                        width: "80",
                      },
                    }),
                    e("el-table-column", {
                      attrs: { width: "80", prop: "Sumto", label: "Sum to" },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          $t = [],
          Ft = {
            data() {
              return {
                list: [
                  { FeasibilityRating: "High", Sumfrom: "0", Sumto: "13" },
                  { FeasibilityRating: "Medium", Sumfrom: "14", Sumto: "19" },
                  { FeasibilityRating: "Low", Sumfrom: "20", Sumto: "24" },
                  { FeasibilityRating: "Very Low", Sumfrom: "25", Sumto: "38" },
                ],
              };
            },
          },
          Vt = Ft,
          zt = (0, f.A)(Vt, Bt, $t, !1, null, null, null),
          Ut = zt.exports,
          Gt = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              { staticStyle: { width: "100%" }, attrs: { data: t.list } },
              [
                e("el-table-column", {
                  attrs: { prop: "Layer", label: "Layer" },
                }),
              ],
              1
            );
          },
          Ht = [],
          Jt = {
            data() {
              return {
                list: [
                  { Layer: " 1 Physical World" },
                  { Layer: " 2 Sensor Layer" },
                  { Layer: "3 Data Preparation Layer" },
                  { Layer: "4 Application Layer" },
                ],
              };
            },
          },
          Yt = Jt,
          Qt = (0, f.A)(Yt, Gt, Ht, !1, null, null, null),
          Zt = Qt.exports,
          Xt = function () {
            var t = this,
              e = t._self._c;
            return e(
              "el-table",
              {
                staticStyle: { width: "100%" },
                attrs: {
                  data: t.list,
                  "cell-class-name": t.determination_color,
                },
              },
              [
                e(
                  "el-table-column",
                  { attrs: { label: "  " } },
                  [
                    e("el-table-column", {
                      attrs: { prop: "Impact", label: "Impact" },
                    }),
                    e("el-table-column", {
                      attrs: { prop: "Impact_n", label: "Impact_n" },
                    }),
                  ],
                  1
                ),
                e(
                  "el-table-column",
                  { attrs: { label: "Feasibility" } },
                  [
                    e("el-table-column", {
                      attrs: {
                        width: "80",
                        prop: "VeryLow",
                        label: "Very Low",
                      },
                    }),
                    e("el-table-column", {
                      attrs: { width: "80", prop: "Low", label: "Low" },
                    }),
                    e("el-table-column", {
                      attrs: { width: "80", prop: "Medium", label: "Medium" },
                    }),
                    e("el-table-column", {
                      attrs: { width: "80", prop: "High", label: "High" },
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          te = [],
          ee = {
            data() {
              return {
                list: [
                  {
                    Impact: "  ",
                    Impact_n: "  ",
                    VeryLow: "1",
                    Low: "2",
                    Medium: "3",
                    High: "4",
                    color: "",
                  },
                  {
                    Impact: "Severe",
                    Impact_n: "4",
                    VeryLow: "1",
                    Low: "3",
                    Medium: "4",
                    High: "5",
                    color: "",
                  },
                  {
                    Impact: "Major",
                    Impact_n: "3",
                    VeryLow: "1",
                    Low: "2",
                    Medium: "3",
                    High: "4",
                    color: "",
                  },
                  {
                    Impact: "Moderate",
                    Impact_n: "2",
                    VeryLow: "1",
                    Low: "1",
                    Medium: "2",
                    High: "3",
                    color: "",
                  },
                  {
                    Impact: "Negligible",
                    Impact_n: "1",
                    VeryLow: "1",
                    Low: "1",
                    Medium: "1",
                    High: "1",
                    color: "",
                  },
                ],
              };
            },
            methods: {
              determination_color({
                row: t,
                column: e,
                rowIndex: a,
                columnIndex: l,
              }) {
                return ("VeryLow" === e.property && 1 == a) ||
                  ("VeryLow" === e.property && 2 == a) ||
                  ("VeryLow" === e.property && 3 == a) ||
                  ("VeryLow" === e.property && 4 == a)
                  ? "color1"
                  : "Low" === e.property && 1 == a
                  ? "color3"
                  : "Low" === e.property && 2 == a
                  ? "color2"
                  : ("Low" === e.property && 3 == a) ||
                    ("Low" === e.property && 4 == a)
                  ? "color1"
                  : "Medium" === e.property && 1 == a
                  ? "color4"
                  : "Medium" === e.property && 2 == a
                  ? "color3"
                  : "Medium" === e.property && 3 == a
                  ? "color2"
                  : "Medium" === e.property && 4 == a
                  ? "color1"
                  : "High" === e.property && 1 == a
                  ? "color5"
                  : "High" === e.property && 2 == a
                  ? "color4"
                  : "High" === e.property && 3 == a
                  ? "color3"
                  : "High" === e.property && 4 == a
                  ? "color1"
                  : void 0;
              },
            },
          },
          ae = ee,
          le = (0, f.A)(ae, Xt, te, !1, null, null, null),
          ie = le.exports,
          re = {
            name: "tast",
            components: {
              Safety: L,
              OperationalDamageRating: P,
              OverallImpactRating: $,
              Targeted: H,
              Knowledge: kt,
              Equipment: Et,
              WindowOpportunity: Tt,
              SpecialistExpertise: Kt,
              OverallFeasibilityRating: Ut,
              Layer: Zt,
              colors: ie,
              emailtast: tt,
              Register: ft,
              login: pt,
            },
            data() {
              return {
                loading_rge: !1,
                work: [],
                layer: [
                  { lbl: "1 Physical World", val: "1" },
                  { lbl: "2 Sensor Layer", val: "2" },
                  { lbl: "3 Data Preparation Layer", val: "3" },
                  { lbl: "4 Application Layer", val: "4" },
                ],
                ImpactS: [
                  { lbl: "Severe", val: "3" },
                  { lbl: "Major", val: "2" },
                  { lbl: "Moderate", val: "1" },
                  { lbl: "Negligible", val: "0" },
                ],
                ImpactO: [
                  { lbl: "Severe", val: "3" },
                  { lbl: "Major", val: "2" },
                  { lbl: "Moderate", val: "1" },
                  { lbl: "Negligible", val: "0" },
                ],
                TargetedAccuracy: [
                  { lbl: "Targeted", val: "3" },
                  { lbl: "Untargeted", val: "1" },
                ],
                Knowledge: [
                  { lbl: "White-Box", val: "11" },
                  { lbl: "Gray-Box", val: "5" },
                  { lbl: "Black-Box", val: "0" },
                ],
                Equipment: [
                  { lbl: "Standard", val: "0" },
                  { lbl: "Specialized", val: "4" },
                  { lbl: "Bespoke", val: "7" },
                  { lbl: "Multiple Bespoke", val: "9" },
                ],
                WindowofOpportunity: [
                  { lbl: "remote", val: "w1_10" },
                  { lbl: "< 0.1m", val: "w2_10" },
                  { lbl: "< 0.5m", val: "w1_4" },
                  { lbl: "<1m", val: "w2_4" },
                  { lbl: "< 10m", val: "w_1" },
                  { lbl: "< 100m", val: "w_0" },
                ],
                SpecialistExpertise: [
                  { lbl: "Layman", val: "0" },
                  { lbl: "Proficient", val: "3" },
                  { lbl: "Expert", val: "6" },
                  { lbl: "Multiple Experts", val: "8" },
                ],
                all: [{ personsFirstName: "azac" }],
                allw: [
                  { personsFirstName: "azac", Overall_Risk_determination: 10 },
                ],
                yes: "",
                list: {
                  Work: "",
                  Layer: "",
                  AttackEntryPoint: "",
                  Impact_S: "",
                  Impact_O: "",
                  TargetedAccuracy: "",
                  Impact_rating_Result: "",
                  Knowledge: "",
                  Equipment: "",
                  Window_of_Opportunity: "",
                  SpecialistExpertise: "",
                  Attack_feasibility_Result: "",
                  Overall_Risk_determination: "",
                },
                AttackEntryPoint: [
                  { lbl: "Application Layer", val: "1" },
                  { lbl: "Physical World", val: "2" },
                  { lbl: "Sensor Layer Interconnection", val: "3" },
                ],
                result: "",
                result_attack_feasibility: "",
                edit: "",
                and_result: "",
                login_show: !1,
                login_btn: !1,
                password: "",
                email: "",
                loading_Verify: !1,
                dialogVisible: !0,
                logout: !0,
                lineColor: "",
              };
            },
            async created() {
              await this.aza();
              this.sortListAscending();
            },
            watch() {},
            methods: {
              handleSortChange({ column, prop, order }) {
                if (order) {
                  if (column.label === "Layer") {
                    if (order === "ascending") {
                      this.all.sort(
                        (a, b) =>
                          a.Layer - b.Layer ||
                          a.Overall_Risk_determination -
                            b.Overall_Risk_determination
                      );
                    } else if (order === "descending") {
                      this.all.sort(
                        (a, b) =>
                          b.Layer - a.Layer ||
                          b.Overall_Risk_determination -
                            a.Overall_Risk_determination
                      );
                    }
                  }
                }
              },
              sortListAscending() {
                this.all.sort(
                  (a, b) =>
                    a.Layer - b.Layer ||
                    a.Overall_Risk_determination - b.Overall_Risk_determination
                );
              },
              set_number_ORD() {
                (this.lineColor = ""),
                  ("Negligible" !== this.list.Impact_rating_Result &&
                    "Very Low" !== this.list.Attack_feasibility_Result) ||
                    ((this.lineColor = "#008000"),
                    (this.list.Overall_Risk_determination = 1)),
                  "Major" === this.list.Impact_rating_Result &&
                    "Low" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#80ff80"),
                    (this.list.Overall_Risk_determination = 2)),
                  "Severe" === this.list.Impact_rating_Result &&
                    "Low" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#ffff80"),
                    (this.list.Overall_Risk_determination = 3)),
                  "Moderate" === this.list.Impact_rating_Result &&
                    "Medium" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#80ff80"),
                    (this.list.Overall_Risk_determination = 2)),
                  "Moderate" === this.list.Impact_rating_Result &&
                    "Low" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#008000"),
                    (this.list.Overall_Risk_determination = 1)),
                  "Major" === this.list.Impact_rating_Result &&
                    "Medium" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#ffff80"),
                    (this.list.Overall_Risk_determination = 3)),
                  "Severe" === this.list.Impact_rating_Result &&
                    "Medium" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#ff8000"),
                    (this.list.Overall_Risk_determination = 4)),
                  "Moderate" === this.list.Impact_rating_Result &&
                    "High" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#ffff80"),
                    (this.list.Overall_Risk_determination = 3)),
                  "Major" === this.list.Impact_rating_Result &&
                    "High" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#ff8000"),
                    (this.list.Overall_Risk_determination = 4)),
                  "Severe" === this.list.Impact_rating_Result &&
                    "High" === this.list.Attack_feasibility_Result &&
                    ((this.lineColor = "#ff0000"),
                    (this.list.Overall_Risk_determination = 5));
              },
              determination_color({
                row: t,
                column: e,
                rowIndex: a,
                columnIndex: l,
              }) {
                if ("Overall_Risk_determination" === e.property) {
                  if (
                    "Negligible" === t.Impact_rating_Result ||
                    "Very Low" === t.Attack_feasibility_Result
                  )
                    return "color1";
                  if (
                    "Major" === t.Impact_rating_Result &&
                    "Low" === t.Attack_feasibility_Result
                  )
                    return "color2";
                  if (
                    "Severe" === t.Impact_rating_Result &&
                    "Low" === t.Attack_feasibility_Result
                  )
                    return "color3";
                  if (
                    "Moderate" === t.Impact_rating_Result &&
                    "Medium" === t.Attack_feasibility_Result
                  )
                    return "color2";
                  if (
                    "Moderate" === t.Impact_rating_Result &&
                    "Low" === t.Attack_feasibility_Result
                  )
                    return "color1";
                  if (
                    "Major" === t.Impact_rating_Result &&
                    "Medium" === t.Attack_feasibility_Result
                  )
                    return "color3";
                  if (
                    "Severe" === t.Impact_rating_Result &&
                    "Medium" === t.Attack_feasibility_Result
                  )
                    return "color4";
                  if (
                    "Moderate" === t.Impact_rating_Result &&
                    "High" === t.Attack_feasibility_Result
                  )
                    return "color3";
                  if (
                    "Major" === t.Impact_rating_Result &&
                    "High" === t.Attack_feasibility_Result
                  )
                    return "color4";
                  if (
                    "Severe" === t.Impact_rating_Result &&
                    "High" === t.Attack_feasibility_Result
                  )
                    return "color5";
                }
              },
              async reg() {
                (this.loading_rge = !0), this.set_number_ORD();
                var t = new Date();
                t.getHours(), t.getMinutes(), t.getSeconds();
                var e =
                  t.getFullYear() +
                  "-" +
                  (t.getMonth() + 1) +
                  "-" +
                  t.getDate() +
                  "-" +
                  t.getHours() +
                  "-" +
                  t.getMinutes() +
                  "-" +
                  t.getSeconds();
                await (0, p.gS)((0, p.rJ)(x, "ThreatModeling"), {
                  Work: this.list.Work,
                  Layer: this.list.Layer,
                  AttackEntryPoint: this.list.AttackEntryPoint,
                  Impact_S: this.list.Impact_S,
                  Impact_O: this.list.Impact_O,
                  TargetedAccuracy: this.list.TargetedAccuracy,
                  Impact_rating_Result: this.list.Impact_rating_Result,
                  Knowledge: this.list.Knowledge,
                  Equipment: this.list.Equipment,
                  Window_of_Opportunity: this.list.Window_of_Opportunity,
                  SpecialistExpertise: this.list.SpecialistExpertise,
                  Attack_feasibility_Result:
                    this.list.Attack_feasibility_Result,
                  Overall_Risk_determination:
                    this.list.Overall_Risk_determination,
                  data: e,
                  status: "two",
                });
                this.aza(),
                  this.sendEmail(),
                  (this.list = {
                    Work: "",
                    Layer: "",
                    AttackEntryPoint: "",
                    Impact_S: "",
                    Impact_O: "",
                    TargetedAccuracy: "",
                    Impact_rating_Result: "",
                    Knowledge: "",
                    Equipment: "",
                    Window_of_Opportunity: "",
                    SpecialistExpertise: "",
                    Attack_feasibility_Result: "",
                    Overall_Risk_determination: "",
                    data: "",
                  }),
                  (this.lineColor = ""),
                  (this.loading_rge = !1);
              },
              async aza() {
                const t = (0, p.P)(
                  (0, p.rJ)(x, "ThreatModeling"),
                  (0, p._M)("status", "==", "one"),
                  (0, p.My)("data")
                );
                this.all = [];
                var e = 1;
                const a = await (0, p.GG)(t);
                a.forEach((t) => {
                  this.all.push({ id: e, ...t.data() }), e++;
                });
                this.all.reverse((t, e) => t.data - e.data);
              },
              async after_login() {
                const t = (0, p.P)(
                  (0, p.rJ)(x, "ThreatModeling"),
                  (0, p._M)("status", "==", "two"),
                  (0, p.My)("data")
                );
                this.allw = [];
                var e = 1;
                const a = await (0, p.GG)(t);
                a.forEach((t) => {
                  this.allw.push({ id: e, docid: t.id, ...t.data() }), e++;
                }),
                  this.allw.push({
                    personsFirstName: "azac",
                    Overall_Risk_determination: 10,
                  }),
                  this.allw.reverse((t, e) => t.data - e.data);
              },
              async deleteDocument(t) {
                try {
                  (this.loading_Verify = !0),
                    await (0, p.kd)((0, p.H9)(x, "ThreatModeling", t.docid)),
                    this.after_login(),
                    console.log("Document successfully deleted!"),
                    (this.loading_Verify = !1);
                } catch (e) {
                  (this.loading_Verify = !1),
                    console.error("Error removing document: ", e);
                }
              },
              btn_reg(t) {
                this.edit = t.groupsIdPk;
              },
              change() {
                this.list.Impact_S.length > 0 &&
                  this.list.Impact_O.length > 0 &&
                  this.list.TargetedAccuracy.length > 0 &&
                  ((this.result =
                    parseInt(this.list.Impact_S) +
                    parseInt(this.list.Impact_O) +
                    parseInt(this.list.TargetedAccuracy)),
                  6 < this.result < 10 &&
                    (this.list.Impact_rating_Result = "Severe"),
                  (1 !== this.result && 2 !== this.result) ||
                    (this.list.Impact_rating_Result = "Negligible"),
                  (3 !== this.result && 4 !== this.result) ||
                    (this.list.Impact_rating_Result = "Moderate"),
                  (5 !== this.result && 6 !== this.result) ||
                    (this.list.Impact_rating_Result = "Major"));
              },
              change_attack_feasibility() {
                if (
                  this.list.Knowledge.length > 0 &&
                  this.list.Equipment.length > 0 &&
                  this.list.Window_of_Opportunity.length > 0 &&
                  this.list.SpecialistExpertise.length > 0
                ) {
                  const t = this.list.Window_of_Opportunity.split("_");
                  (this.result_attack_feasibility =
                    parseInt(this.list.Knowledge) +
                    parseInt(this.list.Equipment) +
                    parseInt(t[1]) +
                    parseInt(this.list.SpecialistExpertise)),
                    this.result_attack_feasibility >= 0 &&
                      this.result_attack_feasibility <= 13 &&
                      (this.list.Attack_feasibility_Result = "High"),
                    this.result_attack_feasibility >= 14 &&
                      this.result_attack_feasibility <= 19 &&
                      (this.list.Attack_feasibility_Result = "Medium"),
                    this.result_attack_feasibility >= 20 &&
                      this.result_attack_feasibility <= 24 &&
                      (this.list.Attack_feasibility_Result = "Low"),
                    this.result_attack_feasibility >= 25 &&
                      this.result_attack_feasibility <= 38 &&
                      (this.list.Attack_feasibility_Result = "Very Low");
                }
                this.set_number_ORD();
              },
              sendEmail(t) {
                const e = {
                  form_name: this.list.Work,
                  Work: this.list.Work,
                  Layer: this.list.Layer,
                  AttackEntryPoint: this.list.AttackEntryPoint,
                  Impact_S: this.list.Impact_S,
                  Impact_O: this.list.Impact_O,
                  TargetedAccuracy: this.list.TargetedAccuracy,
                  Impact_rating_Result: this.list.Impact_rating_Result,
                  Knowledge: this.list.Knowledge,
                  Equipment: this.list.Equipment,
                  Window_of_Opportunity: this.list.Window_of_Opportunity,
                  SpecialistExpertise: this.list.SpecialistExpertise,
                  Attack_feasibility_Result:
                    this.list.Attack_feasibility_Result,
                  Overall_Risk_determination:
                    this.list.Overall_Risk_determination,
                };
                "1" === this.list.Layer
                  ? (e.Layer = "1 Physical World")
                  : "2" === this.list.Layer
                  ? (e.Layer = " 2 Sensor Layer")
                  : "3" === this.list.Layer
                  ? (e.Layer = "  3 Data Preparation Layer")
                  : "4" === this.list.Layer &&
                    (e.Layer = "   4 Application Layer"),
                  "1" === this.list.AttackEntryPoint
                    ? (e.AttackEntryPoint = "Application Layer")
                    : "2" === this.list.AttackEntryPoint
                    ? (e.AttackEntryPoint = "Physical World")
                    : "3" === this.list.AttackEntryPoint &&
                      (e.AttackEntryPoint = "Sensor Layer Interconnection"),
                  "1" === this.list.Impact_S
                    ? (e.Impact_S = "Moderate")
                    : "2" === this.list.Impact_S
                    ? (e.Impact_S = "Major")
                    : "3" === this.list.Impact_S
                    ? (e.Impact_S = "Severe")
                    : "0" === this.list.Impact_S && (e.Impact_S = "Negligible"),
                  "1" === this.list.Impact_O
                    ? (e.Impact_O = "Moderate")
                    : "2" === this.list.Impact_O
                    ? (e.Impact_O = "Major")
                    : "3" === this.list.Impact_O
                    ? (e.Impact_O = "Severe")
                    : "0" === this.list.Impact_O && (e.Impact_O = "Negligible"),
                  "3" === this.list.TargetedAccuracy
                    ? (e.TargetedAccuracy = "Targeted")
                    : "1" === this.list.TargetedAccuracy &&
                      (e.TargetedAccuracy = "Untargeted"),
                  "11" === this.list.Knowledge
                    ? (e.Knowledge = "White-Box")
                    : "5" === this.list.Knowledge
                    ? (e.Knowledge = "Gray-Box")
                    : "0" === this.list.Knowledge &&
                      (e.Knowledge = "Black-Box"),
                  "9" === this.list.Equipment
                    ? (e.Equipment = "  Multiple Bespoke")
                    : "7" === this.list.Equipment
                    ? (e.Equipment = "Bespoke")
                    : "4" === this.list.Equipment
                    ? (e.Equipment = "Specialized")
                    : "0" === this.list.Equipment && (e.Equipment = "Standard"),
                  "w1_10" === this.list.Window_of_Opportunity
                    ? (e.Window_of_Opportunity = "remote")
                    : "w2_10" === this.list.Window_of_Opportunity
                    ? (e.Window_of_Opportunity = " < 0.1m")
                    : "w1_4" === this.list.Window_of_Opportunity
                    ? (e.Window_of_Opportunity = "< 0.5m")
                    : "w2_4" === this.list.Window_of_Opportunity
                    ? (e.Window_of_Opportunity = "<1m")
                    : "w_1" === this.list.Window_of_Opportunity
                    ? (e.Window_of_Opportunity = "< 10m")
                    : "w_0" === this.list.Window_of_Opportunity &&
                      (e.Window_of_Opportunity = "< 100m"),
                  "0" === this.list.SpecialistExpertise
                    ? (e.SpecialistExpertise = "Layman")
                    : "3" === this.list.SpecialistExpertise
                    ? (e.SpecialistExpertise = "Proficient")
                    : "6" === this.list.SpecialistExpertise
                    ? (e.SpecialistExpertise = "Expert")
                    : "8" === this.list.SpecialistExpertise &&
                      (e.SpecialistExpertise = " Multiple Experts"),
                  w.Ay.send(
                    "service_meu95tb",
                    "template_f6edqw2",
                    e,
                    "pb6FeGdOHCcD1XQiW"
                  ),
                  w.Ay.send(
                    "service_064ybg8",
                    "template_187yj49",
                    e,
                    "UYJkHttH6pXFA0tRD"
                  ).then(
                    (t) => {
                      console.log("SUCCESS!", t.status, t.text);
                    },
                    (t) => {
                      console.log("FAILED...", t);
                    }
                  );
              },
              title_email() {},
              login_page() {
                this.login_show = !0;
              },
              async login() {
                try {
                  (this.login_btn = !0),
                    await (0, lt.x9)(st, this.email, this.password),
                    this.after_login(),
                    (this.login_btn = !1),
                    alert("Logged in successfully!"),
                    (this.login_show = !1),
                    (this.email = ""),
                    (this.password = ""),
                    (this.logout = !1);
                } catch (t) {
                  alert(t.message), (this.login_btn = !1);
                }
              },
              signOut() {
                (0, lt.CI)(st)
                  .then(() => {
                    (this.allw = [{ personsFirstName: "azac" }]),
                      (this.logout = !0),
                      console.log("User signed out!");
                  })
                  .catch((t) => {
                    console.error("Error signing out: ", t);
                  });
              },
              async Verify(t) {
                this.loading_Verify = !0;
                const e = (0, p.H9)(x, "ThreatModeling", t.docid);
                await (0, p.mZ)(e, { status: "one" }),
                  this.aza(),
                  this.after_login(),
                  (this.loading_Verify = !1);
              },
            },
          },
          se = re,
          ne = (0, f.A)(se, y, v, !1, null, null, null),
          oe = ne.exports,
          ce = {
            name: "App",
            components: { Grid: b, Tast: oe },
            data() {
              return { radio: "1" };
            },
          },
          pe = ce,
          ue = (0, f.A)(pe, r, s, !1, null, null, null),
          de = ue.exports,
          me = a(9143),
          _e = a.n(me);
        (i["default"].config.productionTip = !1),
          i["default"].use(_e()),
          new i["default"]({ render: (t) => t(de) }).$mount("#app");
      },
    },
    e = {};
  function a(l) {
    var i = e[l];
    if (void 0 !== i) return i.exports;
    var r = (e[l] = { id: l, loaded: !1, exports: {} });
    return t[l].call(r.exports, r, r.exports, a), (r.loaded = !0), r.exports;
  }
  (a.m = t),
    (function () {
      a.amdO = {};
    })(),
    (function () {
      var t = [];
      a.O = function (e, l, i, r) {
        if (!l) {
          var s = 1 / 0;
          for (p = 0; p < t.length; p++) {
            (l = t[p][0]), (i = t[p][1]), (r = t[p][2]);
            for (var n = !0, o = 0; o < l.length; o++)
              (!1 & r || s >= r) &&
              Object.keys(a.O).every(function (t) {
                return a.O[t](l[o]);
              })
                ? l.splice(o--, 1)
                : ((n = !1), r < s && (s = r));
            if (n) {
              t.splice(p--, 1);
              var c = i();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        r = r || 0;
        for (var p = t.length; p > 0 && t[p - 1][2] > r; p--) t[p] = t[p - 1];
        t[p] = [l, i, r];
      };
    })(),
    (function () {
      a.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return a.d(e, { a: e }), e;
      };
    })(),
    (function () {
      a.d = function (t, e) {
        for (var l in e)
          a.o(e, l) &&
            !a.o(t, l) &&
            Object.defineProperty(t, l, { enumerable: !0, get: e[l] });
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      a.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      a.nmd = function (t) {
        return (t.paths = []), t.children || (t.children = []), t;
      };
    })(),
    (function () {
      var t = { 524: 0 };
      a.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, l) {
          var i,
            r,
            s = l[0],
            n = l[1],
            o = l[2],
            c = 0;
          if (
            s.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (i in n) a.o(n, i) && (a.m[i] = n[i]);
            if (o) var p = o(a);
          }
          for (e && e(l); c < s.length; c++)
            (r = s[c]), a.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return a.O(p);
        },
        l = (self["webpackChunksok_attack"] =
          self["webpackChunksok_attack"] || []);
      l.forEach(e.bind(null, 0)), (l.push = e.bind(null, l.push.bind(l)));
    })();
  var l = a.O(void 0, [504], function () {
    return a(4572);
  });
  l = a.O(l);
})();
//# sourceMappingURL=app.41034624.js.map
