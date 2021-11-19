(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-abc09f12"], {
        "033a": function(t, e, s) {
            var a = {
                "./boss0.png": "4f94",
                "./boss1.png": "afa2",
                "./boss2.png": "b4de"
            };

            function i(t) {
                var e = n(t);
                return s(e)
            }

            function n(t) {
                if (!s.o(a, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return a[t]
            }
            i.keys = function() {
                return Object.keys(a)
            }, i.resolve = n, t.exports = i, i.id = "033a"
        },
        "075d": function(t, e, s) {},
        "13b0": function(t, e, s) {
            "use strict";
            s("075d")
        },
        "3d75": function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                },
                i = [function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [a("img", {
                        staticClass: "gif-load mb-3",
                        attrs: {
                            src: s("2743")
                        }
                    })])
                }],
                n = (s("544f"), s("2877")),
                o = {},
                r = Object(n["a"])(o, a, i, !1, null, null, null);
            e["a"] = r.exports
        },
        "4e2f": function(t, e, s) {},
        "4e54": function(t, e, s) {
            t.exports = s.p + "media/bell.8743f640.mp3"
        },
        "4f94": function(t, e, s) {
            t.exports = s.p + "img/boss0.7c4af618.png"
        },
        "53bb": function(t, e, s) {
            t.exports = s.p + "media/win.f827d54e.mp3"
        },
        "544f": function(t, e, s) {
            "use strict";
            s("a6ad")
        },
        "6b4f": function(t, e, s) {
            t.exports = s.p + "img/fight.0f3e099f.gif"
        },
        "7a01": function(t, e, s) {
            "use strict";
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("b-button", {
                        staticClass: "py-3 px-5 d-flex justify-content-center mint-btn",
                        class: {
                            disabled: t.$store.state.balance <= 0
                        },
                        attrs: {
                            variant: "primary text-dark shadow rounded-lg position-relative"
                        },
                        on: {
                            click: t.preMint
                        }
                    }, [a("img", {
                        staticClass: "randomArmz",
                        attrs: {
                            src: s("bbd9")
                        }
                    }), a("div", {
                        staticClass: "m-3 pt-2"
                    }, [a("div", {
                        staticClass: "bold",
                        staticStyle: {
                            "font-size": "1.12em"
                        }
                    }, [t._v("MINT NEW ARMZ")]), a("div", {
                        staticClass: "text-sm",
                        staticStyle: {
                            "margin-top": "-5px"
                        }
                    }, [t._v(t._s(t.$store.state.mintPrice.prot) + " PROT + " + t._s(t.$store.state.mintPrice.bnb) + " BNB ")])])])
                },
                i = [],
                n = s("5530"),
                o = {
                    methods: {
                        mint: function() {
                            var t = this;
                            this.$store.state.loadingMode = "wait", this.$store.state.factoryContract.methods.buyArmz().send({
                                from: this.$store.state.address,
                                gas: 5e5,
                                value: this.$store.state.web3.utils.toWei("".concat(this.$store.state.mintPrice.bnb), "ether")
                            }).on("transactionHash", (function() {
                                t.$store.state.loadingMode = "mint"
                            })).then((function(e) {
                                var s = e.events.NewArmz.returnValues.id;
                                t.$store.state.armzContract.methods.getArmz(s).call({
                                    from: t.$store.state.address
                                }).then((function(e) {
                                    t.$store.state.newItem = Object(n["a"])({}, e), t.$store.commit("GET_COLLECTION"), t.$store.commit("GET_BALANCE"), t.$store.commit("GET_INFOS")
                                })).catch((function() {
                                    t.$store.state.loadingMode = void 0, t.$store.state.failedTransaction = !0
                                }))
                            })).catch((function() {
                                t.$store.state.loadingMode = void 0
                            }))
                        },
                        preMint: function() {
                            var t = this;
                            this.$store.state.tokenContract.methods.allowance(this.$store.state.address, this.$store.state.factoryContract._address).call({
                                from: this.$store.state.address
                            }).then((function(e) {
                                t.$store.state.loadingMode = "approve", e < t.$store.state.web3.utils.toWei("10000", "ether") ? t.$store.state.tokenContract.methods.approve(t.$store.state.factoryContract._address, t.$store.state.web3.utils.toWei("1000000", "ether")).send({
                                    from: t.$store.state.address
                                }).on("transactionHash", (function() {})).then((function() {
                                    t.mint()
                                })).catch((function() {
                                    return t.$store.state.loadingMode = void 0
                                })) : t.mint()
                            }))
                        }
                    }
                },
                r = o,
                c = (s("ddd9"), s("2877")),
                l = Object(c["a"])(r, a, i, !1, null, null, null);
            e["a"] = l.exports
        },
        "7a8a": function(t, e, s) {
            t.exports = s.p + "media/lose.6fa2cded.mp3"
        },
        8338: function(t, e, s) {
            t.exports = s.p + "img/table4.ae6bb0ee.png"
        },
        "8f4a": function(t, e, s) {
            t.exports = s.p + "img/swet.381ca7ae.gif"
        },
        a1cc: function(t, e, s) {
            t.exports = s.p + "img/win.0277b7ca.png"
        },
        a6ad: function(t, e, s) {},
        afa2: function(t, e, s) {
            t.exports = s.p + "img/boss1.669b57de.png"
        },
        b4cf: function(t, e, s) {
            "use strict";
            s.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [t.$store.state.subLoading.collection ? a("SubLoading", {
                        staticClass: "mt-5 pt-5"
                    }) : t.$store.state.isConnected && t.$store.state.collection.length ? a("div", [a("div", {
                        staticClass: "col-md-10 offset-md-1 p-4 pt-5"
                    }, [t.battleStep && t.battleStep < 2 ? a("b-button", {
                        attrs: {
                            variant: "dark shadow border-0"
                        },
                        on: {
                            click: function(e) {
                                t.battleStep -= 1
                            }
                        }
                    }, [a("b-icon", {
                        attrs: {
                            scale: "0.8",
                            icon: "chevron-left"
                        }
                    }), t._v("Back ")], 1) : t._e()], 1), 0 == t.battleStep ? a("div", {
                        staticClass: "text-center pb-5 mt-0 mt-md-5 text-center"
                    }, [a("div", {
                        staticClass: "row m-0 p-0"
                    }, [a("div", {
                        staticClass: "d-flex flex-wrap justify-content-center"
                    }, [a("MintButton", {
                        staticClass: "mx-3 my-5"
                    })], 1)]), a("div", {
                        staticClass: "d-flex flex-wrap justify-content-center"
                    }, t._l(t.sortedArmz, (function(e, i) {
                        return a("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.$store.state.hideLowEnergy || parseInt(t.trueMana(e)) > 0,
                                expression: "!$store.state.hideLowEnergy || parseInt(trueMana(arm)) > 0"
                            }],
                            key: i,
                            staticClass: "armz-box"
                        }, [a("div", {
                            staticClass: "m-4 border-0 rounded-lg text-light",
                            class: t.rarityLabels[e.rarity],
                            staticStyle: {
                                width: "310px"
                            }
                        }, [a("div", {
                            staticClass: "position-relative d-flex justify-content-center"
                        }, [a("img", {
                            staticClass: "arm-img",
                            attrs: {
                                src: s("e078")("./" + e.image + ".png")
                            }
                        })]), a("div", {
                            staticClass: "p-4 pb-3"
                        }, [a("div", {
                            staticClass: "d-flex justify-content-between"
                        }, [a("div", [t._v("#" + t._s(e.id))]), a("div", {
                            staticClass: "price text-end"
                        }, [a("div", {
                            staticClass: "text-capitalize"
                        }, [t._v(" " + t._s(t.rarityLabels[e.rarity]) + " ")])])]), a("div", {
                            staticClass: "d-flex justify-content-between mt-4 px-2"
                        }, [a("div", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            attrs: {
                                title: t.remaining(e)
                            }
                        }, [t._l(parseInt(t.trueMana(e)), (function(t, e) {
                            return a("b-icon", {
                                key: e + "--c",
                                staticClass: "icon-shadows",
                                attrs: {
                                    variant: "warning",
                                    icon: "lightning-fill",
                                    scale: "1.2"
                                }
                            })
                        })), t._l(parseInt(e.maxMana) - t.trueMana(e), (function(t, e) {
                            return a("b-icon", {
                                key: e + "ok",
                                staticClass: "icon-shadows",
                                attrs: {
                                    variant: "warning",
                                    icon: "lightning",
                                    scale: "1.2"
                                }
                            })
                        }))], 2), a("div", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            attrs: {
                                title: "Win rate boost : +" + e.boostWinrate + "%"
                            }
                        }, [4 != parseInt(e.rarity) ? a("div", [t._l(parseInt(e.nbBoost), (function(t, e) {
                            return a("img", {
                                key: e + "icon",
                                staticClass: "fire-icon icon-shadows position-relative",
                                attrs: {
                                    src: s("bac1")
                                }
                            })
                        })), a("span", t._l(3 - parseInt(e.nbBoost), (function(t, e) {
                            return a("img", {
                                key: e + "-icon",
                                staticClass: "fire-icon icon-shadows position-relative",
                                attrs: {
                                    src: s("3de4"),
                                    icon: "lightning"
                                }
                            })
                        })), 0)], 2) : a("div", t._l(5, (function(t, e) {
                            return a("img", {
                                key: e + "icon",
                                staticClass: "fire-icon icon-shadows position-relative",
                                attrs: {
                                    src: s("bac1")
                                }
                            })
                        })), 0)])]), a("div", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            attrs: {
                                title: "Win rate boost : +" + 5 * parseInt(e.boostWinrate) + "%"
                            }
                        }), t.trueMana(e) > 0 ? a("b-button", {
                            staticClass: "btn-arm rounded-lg mt-2 py-2 px-5 mx-4",
                            attrs: {
                                href: "#",
                                variant: "light"
                            },
                            on: {
                                click: function(s) {
                                    return t.armzChoice(e)
                                }
                            }
                        }, [t._v(" Select ")]) : a("b-button", {
                            staticClass: "disabled btn-arm rounded-lg mt-2 py-2 px-5 mx-4",
                            attrs: {
                                href: "#",
                                variant: "light"
                            }
                        }, [t._v(" No energy ")])], 1)])])
                    })), 0)]) : t._e(), 1 == t.battleStep ? a("div", {
                        staticClass: "pb-5 mt-5"
                    }, [a("div", {
                        staticClass: "row m-0 p-0"
                    }, [a("h4", {
                        staticClass: "text-center col-12 offset-md-4 col-md-4 p-4"
                    }, [t._v("Fight an opponent")])]), a("div", {
                        staticClass: "d-flex flex-wrap justify-content-center"
                    }, [a("div", {
                        staticClass: "armz-box"
                    }, [a("div", {
                        staticClass: "m-4 border-0 rounded-lg text-light boss1",
                        staticStyle: {
                            width: "310px"
                        }
                    }, [a("div", {
                        staticClass: "position-relative d-flex justify-content-center"
                    }, [a("img", {
                        staticClass: "arm-img",
                        attrs: {
                            src: s("4f94")
                        }
                    })]), a("div", {
                        staticClass: "p-4 pb-3"
                    }, [a("div", {
                        staticClass: "d-flex justify-content-between"
                    }, [a("div", [t._v("Boss #1")]), a("div", {
                        staticClass: "price text-end"
                    }, [a("div", [t._v("Easy ")])])]), a("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [a("div", {
                        staticClass: "mt-4"
                    }, [t._v("Earn: 1x 💰")])]), a("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [a("b-button", {
                        staticClass: "btn-arm rounded-lg mt-2 py-2 px-5 mx-4",
                        attrs: {
                            href: "#",
                            variant: "light"
                        },
                        on: {
                            click: function(e) {
                                return t.bossChoice(0)
                            }
                        }
                    }, [t._v(" Fight ")])], 1)])])]), a("div", {
                        staticClass: "armz-box"
                    }, [a("div", {
                        staticClass: "m-4 border-0 rounded-lg text-light boss2",
                        staticStyle: {
                            width: "310px"
                        }
                    }, [a("div", {
                        staticClass: "position-relative d-flex justify-content-center"
                    }, [a("img", {
                        staticClass: "arm-img",
                        attrs: {
                            src: s("afa2")
                        }
                    })]), a("div", {
                        staticClass: "p-4 pb-3"
                    }, [a("div", {
                        staticClass: "d-flex justify-content-between"
                    }, [a("div", [t._v("Boss #2")]), a("div", {
                        staticClass: "price text-end"
                    }, [a("div", [t._v("Normal ")])])]), a("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [a("div", {
                        staticClass: "mt-4"
                    }, [t._v("Earn: 1.5x 💰")])]), a("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [a("b-button", {
                        staticClass: "btn-arm rounded-lg mt-2 py-2 px-5 mx-4",
                        attrs: {
                            href: "#",
                            variant: "light"
                        },
                        on: {
                            click: function(e) {
                                return t.bossChoice(1)
                            }
                        }
                    }, [t._v(" Fight ")])], 1)])])]), a("div", {
                        staticClass: "armz-box"
                    }, [a("div", {
                        staticClass: "m-4 border-0 rounded-lg text-light boss3",
                        staticStyle: {
                            width: "310px"
                        }
                    }, [a("div", {
                        staticClass: "position-relative d-flex justify-content-center"
                    }, [a("img", {
                        staticClass: "arm-img",
                        attrs: {
                            src: s("b4de")
                        }
                    })]), a("div", {
                        staticClass: "p-4 pb-3"
                    }, [a("div", {
                        staticClass: "d-flex justify-content-between"
                    }, [a("div", [t._v("Boss #3")]), a("div", {
                        staticClass: "price text-end"
                    }, [a("div", [t._v("Hard ")])])]), a("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [a("div", {
                        staticClass: "mt-4"
                    }, [t._v("Earn: 2x 💰")])]), a("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [a("b-button", {
                        staticClass: "btn-arm rounded-lg mt-2 py-2 px-5 mx-4",
                        attrs: {
                            href: "#",
                            variant: "light"
                        },
                        on: {
                            click: function(e) {
                                return t.bossChoice(2)
                            }
                        }
                    }, [t._v(" Fight ")])], 1)])])])])]) : 2 == t.battleStep ? a("div", {
                        staticClass: "battle-scene theme-primary center-items"
                    }, [a("div", {
                        staticClass: "battle col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-10 offset-1 p-1 mt-5 pt-5"
                    }, [a("div", {
                        staticClass: "position-relative"
                    }, [t.showFightText ? a("img", {
                        staticClass: "fight-text col-10 offset-1 p-5",
                        attrs: {
                            src: s("6b4f")
                        }
                    }) : t._e()]), a("div", {
                        staticClass: "d-flex justify-content-between"
                    }, [a("div", {
                        staticClass: "col-5"
                    }, [a("div", [t._v("Player")]), a("b-progress", {
                        staticClass: "bg-danger",
                        attrs: {
                            variant: "warning",
                            value: t.p1Life,
                            max: 100
                        }
                    })], 1), a("div", {
                        staticClass: "col-5 text-end"
                    }, [a("div", [t._v("Boss #" + t._s(t.selectedBoss + 1))]), a("b-progress", {
                        staticClass: "bg-danger",
                        staticStyle: {
                            transform: "rotate(180deg)"
                        },
                        attrs: {
                            variant: "warning",
                            value: t.p2Life,
                            max: 100
                        }
                    })], 1)]), a("div", {
                        staticClass: "fight"
                    }, [a("img", {
                        staticClass: "opponent rotate-in-2-br-ccw mt-5",
                        class: {
                            lowHp: t.p2Life < 25
                        },
                        attrs: {
                            src: s("033a")("./boss" + t.selectedBoss + ".png")
                        }
                    }), t.p2Life < 40 ? a("img", {
                        staticClass: "wetP2",
                        attrs: {
                            src: s("8f4a")
                        }
                    }) : t._e()]), a("div", {
                        staticClass: "fight"
                    }, [a("img", {
                        staticClass: "player rotate-in-2-bl-cw mt-5",
                        class: {
                            lowHp: t.p1Life < 25
                        },
                        attrs: {
                            src: s("e078")("./" + t.selectedArmz.image + ".png")
                        }
                    }), t.p1Life < 40 ? a("img", {
                        staticClass: "wetP1",
                        attrs: {
                            src: s("8f4a")
                        }
                    }) : t._e()]), a("img", {
                        staticClass: "rounded background pb-5",
                        attrs: {
                            src: s("8338")
                        }
                    })])]) : 3 == t.battleStep ? a("div", {
                        staticClass: "loading"
                    }, [a("div", {
                        staticClass: "col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-10 offset-1 text-center theme-secondary rounded-xl p-5"
                    }, [a("img", {
                        staticClass: "col-6 col-lg-5 col-xl-4 jello-horizontal",
                        attrs: {
                            src: s("a1cc")
                        }
                    }), a("h1", {
                        staticClass: "tracking-in-expand text-success"
                    }, [a("b", [t._v("WIN")])]), a("div", {
                        staticClass: "mt-3"
                    }, [t._v("+" + t._s((t.rewards / 1e18).toFixed(4)) + " $PROT")]), a("b-button", {
                        attrs: {
                            variant: "warning px-5 mt-5 shadow"
                        },
                        on: {
                            click: function(e) {
                                return t.collect()
                            }
                        }
                    }, [t._v("COLLECT $PROT ")])], 1)]) : 4 == t.battleStep ? a("div", {
                        staticClass: "loading"
                    }, [a("div", {
                        staticClass: "col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-10 offset-1 text-center theme-secondary rounded-xl p-5"
                    }, [a("img", {
                        staticClass: "col-6 col-lg-5 col-xl-4 jello-horizontal",
                        attrs: {
                            src: s("cbc4")
                        }
                    }), a("h1", {
                        staticClass: "tracking-in-expand text-danger"
                    }, [a("b", [t._v("DEFEAT")])]), a("div", {
                        staticClass: "mt-3"
                    }, [t._v("+0 $PROT")]), a("b-button", {
                        attrs: {
                            variant: "warning px-5 mt-5 shadow"
                        },
                        on: {
                            click: function(e) {
                                t.battleStep = 0, t.$store.commit("GET_COLLECTION")
                            }
                        }
                    }, [t._v("OK ")])], 1)]) : t._e()]) : a("div", {
                        staticClass: "p-5"
                    }, [a("h4", {
                        staticClass: "bold text-center m-4"
                    }, [t._v("You need at least one Armz to play")]), a("div", {
                        staticClass: "row m-0 p-0"
                    }, [a("div", {
                        staticClass: "d-flex flex-wrap justify-content-center"
                    }, [a("MintButton", {
                        staticClass: "mx-3 my-5"
                    })], 1)]), a("p", {
                        staticClass: "text-center mt-4 pt-4"
                    }, [t._v(" To mint an Armz, you need PROT and BNB. "), a("br"), t._v(" If you want to know more: "), a("a", {
                        staticClass: "text-decoration-none text-primary",
                        attrs: {
                            href: "https://armzlegends.gitbook.io/a/",
                            target: "_blank"
                        }
                    }, [t._v("DOCS")])]), a("div", {
                        staticClass: "d-flex flex-wrap justify-content-center m-4"
                    }, [a("div", {
                        staticClass: "mt-2"
                    }, [a("b-button", {
                        staticClass: "btn-light buy-btn py-3 px-5 rounded-lg",
                        attrs: {
                            href: t.$store.state.protUrl,
                            target: "_blank"
                        }
                    }, [a("img", {
                        staticClass: "bnb",
                        attrs: {
                            src: s("343d")
                        }
                    }), t._v(" Buy PROT ")])], 1), a("div", {
                        staticClass: "px-3 mt-2"
                    }, [a("b-button", {
                        staticClass: "btn-light buy-btn py-3 px-5 rounded-lg",
                        attrs: {
                            href: t.$store.state.bnbUrl,
                            target: "_blank"
                        }
                    }, [a("img", {
                        staticClass: "bnb",
                        attrs: {
                            src: s("cbc6")
                        }
                    }), t._v(" Buy BNB "), a("span", {
                        staticClass: "mx-1"
                    })])], 1)])])], 1)
                },
                i = [],
                n = s("2909"),
                o = (s("99af"), s("4de4"), s("d3b7"), s("7a01")),
                r = s("3d75"),
                c = function(t) {
                    return t > 9 ? t : "0" + t
                },
                l = {
                    name: "Battle",
                    components: {
                        MintButton: o["a"],
                        SubLoading: r["a"]
                    },
                    data: function() {
                        return {
                            selectedBoss: void 0,
                            selectedArmz: void 0,
                            battleStep: 0,
                            rewards: 0,
                            showFightText: !1,
                            rarityLabels: ["common", "rare", "epic", "legendary", "genesis"],
                            armz: [],
                            p1Life: 100,
                            p2Life: 100
                        }
                    },
                    methods: {
                        bossChoice: function(t) {
                            var e = this;
                            this.selectedBoss = t, this.p1Life = 100, this.p2Life = 100, this.$store.state.loadingMode = void 0, this.$store.state.fightContract.methods.fight(this.selectedArmz.id, this.selectedBoss).send({
                                from: this.$store.state.address,
                                gas: 5e5
                            }).on("transactionHash", (function() {
                                e.battleStep = 2;
                                var t = new Audio(s("e063"));
                                t.volume = .3, setTimeout((function() {
                                    t.play(), setTimeout((function() {
                                        t.play()
                                    }), 1e3)
                                }), 2e3), setTimeout((function() {
                                    e.showFightText = !0;
                                    var t = new Audio(s("4e54"));
                                    t.volume = .04, t.play(), setTimeout((function() {
                                        e.showFightText = !1;
                                        var t = setInterval((function() {
                                            e.p1Life > 30 ? e.p1Life -= Math.floor(Math.random() * (parseInt(e.selectedBoss) + 3)) : e.p1Life--, e.p2Life > 30 ? e.p2Life -= Math.floor(Math.random() * (parseInt(e.selectedArmz.rarity) + 2)) : e.p2Life--, (e.p1Life < 10 || e.p2Life < 10) && clearInterval(t)
                                        }), 300)
                                    }), 1e3)
                                }), 3e3)
                            })).then((function(t) {
                                if (e.rewards = t.events.FightResults.returnValues.rewards, console.log(t), t.events.FightResults.returnValues.win) var a = setInterval((function() {
                                    if (e.p2Life < 30 ? e.p2Life -= Math.floor(3 * Math.random()) : e.p2Life--, e.p2Life <= 0) {
                                        e.battleStep = 3, clearInterval(a);
                                        var t = new Audio(s("53bb"));
                                        t.volume = .1, t.play()
                                    }
                                }), 200);
                                else var i = setInterval((function() {
                                    if (e.p1Life < 30 ? e.p1Life -= Math.floor(3 * Math.random()) : e.p1Life--, e.p1Life <= 0) {
                                        e.battleStep = 4, clearInterval(i);
                                        var t = new Audio(s("7a8a"));
                                        t.volume = .1, t.play()
                                    }
                                }), 200)
                            })).catch((function() {
                                e.$store.state.failedTransaction = !0
                            }))
                        },
                        armzChoice: function(t) {
                            this.selectedArmz = t, this.battleStep = 1
                        },
                        trueMana: function(t) {
                            for (var e = parseInt(t.maxMana), s = 0; s < t.fights.length; s++) 0 !== t.fights[s] && Math.floor(Date.now() / 1e3) - t.fights[s] < 86400 && (e -= 1);
                            return e
                        },
                        remaining: function(t) {
                            for (var e, s = 0; s < t.fights.length; s++)
                                if (t.fights[s] > 0 && (!e || e > t.fights[s])) {
                                    var a = 86400 - (Math.floor(Date.now() / 1e3) - t.fights[s]);
                                    a > 0 && (e = t.fights[s])
                                }
                            var i = 86400 - (Math.floor(Date.now() / 1e3) - e),
                                n = Math.floor(i / 3600),
                                o = Math.floor(i / 60 % 60),
                                r = Math.floor(i % 60);
                            return e && 0 != e ? "\n        Next fight: ".concat(c(n) + "h " + c(o) + "m " + c(r) + "s", "\n      ") : ""
                        },
                        collect: function() {
                            var t = new Audio(s("bc0a"));
                            t.volume = .5, t.play(), this.battleStep = 0, this.$store.commit("GET_INFOS"), this.$store.commit("GET_COLLECTION")
                        }
                    },
                    computed: {
                        sortedArmz: function() {
                            for (var t = this, e = Object(n["a"])(this.$store.state.collection), s = [], a = [], i = 0; i < e.length; i++) 0 == this.trueMana(e[i]) ? a.push(e[i]) : s.push(e[i]);
                            return e = [].concat(s, a), this.$store.state.hideLowEnergy && (e = e.filter((function(e) {
                                return t.trueMana(e) > 0
                            }))), e
                        }
                    }
                },
                q = l,
                d = (s("13b0"), s("2877")),
                A = Object(d["a"])(q, a, i, !1, null, "43d796e8", null);
            e["default"] = A.exports
        },
        b4de: function(t, e, s) {
            t.exports = s.p + "img/boss2.e0fdfc0d.png"
        },
        bbd9: function(t, e, s) {
            t.exports = s.p + "img/random.4d220e6e.gif"
        },
        bc0a: function(t, e, s) {
            t.exports = s.p + "media/collect.5b4940dc.mp3"
        },
        cbc4: function(t, e, s) {
            t.exports = s.p + "img/lose.60a7cdb8.png"
        },
        cbc6: function(t, e, s) {
            t.exports = s.p + "img/bnb.b34abee5.svg"
        },
        ddd9: function(t, e, s) {
            "use strict";
            s("4e2f")
        },
        e063: function(t, e) {
            t.exports = "data:audio/mpeg;base64,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"
        }
    }
]);