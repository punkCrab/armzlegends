(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7dcc97a0"], {
        3580: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", [s("div", {
                        staticClass: "mx-2 mx-md-5"
                    }, [s("div", {
                        staticClass: "p-3 col-md-10 offset-md-1 col-xl-8 offset-xl-2"
                    }, [s("div", {
                        staticClass: "theme-secondary rounded-xl text-center text-sm shadow-sm"
                    }, [t.showFilters ? s("div", {
                        staticClass: "p-4"
                    }, [s("div", {
                        staticClass: "bold"
                    }, [t._v("Sort by")]), s("div", {
                        staticClass: "row p-2 justify-content-center"
                    }, [s("div", {
                        staticClass: "col-md-3 p-1 mx-0 mx-md-2"
                    }, [s("b-button", {
                        class: {
                            "bg-warning": "Date" == t.selectedSort || void 0 == t.selectedSort
                        },
                        attrs: {
                            variant: "light col-12 text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.selectedSort = "Date"
                            }
                        }
                    }, [t._v(" Recently Listed ")])], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 mx-0 mx-md-2"
                    }, [s("b-button", {
                        class: {
                            "bg-warning": "Ascend" == t.selectedSort
                        },
                        attrs: {
                            variant: "light col-12 text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.selectedSort = "Ascend"
                            }
                        }
                    }, [t._v(" Price: Low to High ")])], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 mx-0 mx-md-2"
                    }, [s("b-button", {
                        class: {
                            "bg-warning": "Descend" == t.selectedSort
                        },
                        attrs: {
                            variant: "light col-12 text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.selectedSort = "Descend"
                            }
                        }
                    }, [t._v(" Price: High to Low ")])], 1)]), s("div", {
                        staticClass: "bold mt-3"
                    }, [t._v("Price")]), s("div", {
                        staticClass: "row p-2 justify-content-center "
                    }, [s("div", {
                        staticClass: "col-6 col-md-3 p-1 mx-0 mx-md-2"
                    }, [s("b-form-input", {
                        staticClass: "bg-light border-0 text-sm text-center",
                        attrs: {
                            type: "number",
                            placeholder: "Min"
                        },
                        model: {
                            value: t.filters.min,
                            callback: function(e) {
                                t.$set(t.filters, "min", e)
                            },
                            expression: "filters.min"
                        }
                    })], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 mx-0 mx-md-2"
                    }, [s("b-form-input", {
                        staticClass: "bg-light border-0 text-sm text-center",
                        attrs: {
                            type: "number",
                            placeholder: "Max"
                        },
                        model: {
                            value: t.filters.max,
                            callback: function(e) {
                                t.$set(t.filters, "max", e)
                            },
                            expression: "filters.max"
                        }
                    })], 1)]), s("div", {
                        staticClass: "bold mt-3"
                    }, [t._v("Win Rate")]), s("div", {
                        staticClass: "row p-2 justify-content-center "
                    }, [s("div", {
                        staticClass: "col-6 col-md-3 p-1 mx-0 mx-md-2"
                    }, [s("b-form-input", {
                        staticClass: "bg-light border-0 text-sm text-center",
                        attrs: {
                            type: "number",
                            placeholder: "Min"
                        },
                        model: {
                            value: t.filters.minwinrate,
                            callback: function(e) {
                                t.$set(t.filters, "minwinrate", e)
                            },
                            expression: "filters.minwinrate"
                        }
                    })], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 mx-0 mx-md-2"
                    }, [s("b-form-input", {
                        staticClass: "bg-light border-0 text-sm text-center",
                        attrs: {
                            type: "number",
                            placeholder: "Max"
                        },
                        model: {
                            value: t.filters.maxwinrate,
                            callback: function(e) {
                                t.$set(t.filters, "maxwinrate", e)
                            },
                            expression: "filters.maxwinrate"
                        }
                    })], 1)]), s("div", {
                        staticClass: "bold mt-3"
                    }, [t._v(" Rarity ")]), s("div", {
                        staticClass: "row p-2 justify-content-center"
                    }, [s("div", {
                        staticClass: "col-6 col-md-3 p-1 px-2"
                    }, [s("b-button", {
                        staticClass: "col-12",
                        class: {
                            common: t.filters.common
                        },
                        attrs: {
                            variant: "light text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.filters.common = !t.filters.common
                            }
                        }
                    }, [t._v(" Common ")])], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 px-2"
                    }, [s("b-button", {
                        staticClass: "col-12",
                        class: {
                            rare: t.filters.rare
                        },
                        attrs: {
                            variant: "light text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.filters.rare = !t.filters.rare
                            }
                        }
                    }, [t._v("Rare ")])], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 px-2"
                    }, [s("b-button", {
                        staticClass: "col-12",
                        class: {
                            epic: t.filters.epic
                        },
                        attrs: {
                            variant: "light text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.filters.epic = !t.filters.epic
                            }
                        }
                    }, [t._v("Epic ")])], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 px-2"
                    }, [s("b-button", {
                        staticClass: "col-12",
                        class: {
                            legendary: t.filters.legendary
                        },
                        attrs: {
                            variant: "light text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.filters.legendary = !t.filters.legendary
                            }
                        }
                    }, [t._v("Legendary ")])], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 px-2"
                    }, [s("b-button", {
                        staticClass: "col-12",
                        class: {
                            genesis: t.filters.genesis
                        },
                        attrs: {
                            variant: "light text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.filters.genesis = !t.filters.genesis
                            }
                        }
                    }, [t._v("Genesis ")])], 1), s("div", {
                        staticClass: "col-6 col-md-3 p-1 px-2"
                    }, [s("b-button", {
                        staticClass: "col-12",
                        class: {
                            unique: t.filters.unique
                        },
                        attrs: {
                            variant: "light text-sm border-0"
                        },
                        on: {
                            click: function(e) {
                                t.filters.unique = !t.filters.unique
                            }
                        }
                    }, [t._v("Unique ")])], 1)]), s("div", {
                        staticClass: "pointer mt-2",
                        on: {
                            click: function(e) {
                                return t.toogleFilters()
                            }
                        }
                    }, [s("b-icon", {
                        attrs: {
                            icon: "chevron-compact-up",
                            scale: "2"
                        }
                    })], 1)]) : s("div", {
                        staticClass: "pointer p-3",
                        on: {
                            click: function(e) {
                                return t.toogleFilters()
                            }
                        }
                    }, [s("b-icon", {
                        attrs: {
                            icon: "chevron-compact-down",
                            scale: "2"
                        }
                    })], 1)])]), s("div", {
                        staticClass: "d-flex justify-content-center mt-5"
                    }, [s("div", {
                        staticClass: "rounded-pill bg-white p-1 shadow-sm"
                    }, [s("button", {
                        staticClass: "rounded-pill border-0 p-2 px-4",
                        class: {
                            "bg-dark text-light": 0 == t.salesView, "bg-white": 0 != t.salesView
                        },
                        on: {
                            click: function(e) {
                                t.salesView = 0, t.$store.commit("GET_ALL_SALES", 1)
                            }
                        }
                    }, [t._v("On Sale")]), s("span", {
                        staticClass: "mx-1"
                    }), s("button", {
                        staticClass: "rounded-pill border-0 p-2 px-4",
                        class: {
                            "bg-dark text-light": 1 == t.salesView, "bg-white": 1 != t.salesView
                        },
                        on: {
                            click: function(e) {
                                t.salesView = 1, t.$store.commit("GET_ALL_SALES", 2)
                            }
                        }
                    }, [t._v("Closed")])])]), t.$store.state.subLoading.marketplace && t.$store.state.isConnected ? s("SubLoading") : t.sortedArticles.length ? s("div", [s("div", {
                        staticClass: "d-flex justify-content-center py-4 text-responsive"
                    }, [0 == t.salesView ? s("div", {
                        staticClass: "mx-4"
                    }, [t._v("FLOOR PRICE: "), s("b", {
                        staticClass: "text-nowrap"
                    }, [t._v(t._s((t.floorPrice / 1e18).toFixed(2)) + " PROT")])]) : s("div", {
                        staticClass: "mx-4"
                    }, [t._v("CEILING PRICE: "), s("b", {
                        staticClass: "text-nowrap"
                    }, [t._v(t._s((t.ceilPrice / 1e18).toFixed(2)) + " PROT")])]), s("div", {
                        staticClass: "mx-4"
                    }, [t._v("ARMZ LISTED: "), s("b", {
                        staticClass: "text-nowrap"
                    }, [t._v(t._s(t.sortedArticles.length))])])]), s("div", {
                        staticClass: "col h-100 text-center"
                    }, [s("div", {
                        staticClass: "d-flex justify-content-center flex-wrap"
                    }, t._l(t.sortedArticles.slice(t.perPage * t.currentPage - t.perPage, t.perPage * t.currentPage), (function(t, e) {
                        return s("div", {
                            key: e
                        }, [s("ArmzOfShop", {
                            staticClass: "armz-box",
                            attrs: {
                                trade: t
                            }
                        })], 1)
                    })), 0), s("div", {
                        staticClass: "d-flex justify-content-center mt-5"
                    }, [s("b-pagination", {
                        staticStyle: {
                            filter: "grayscale(30%)"
                        },
                        attrs: {
                            pills: "",
                            size: "md",
                            "per-page": t.perPage,
                            "total-rows": t.sortedArticles.length,
                            "aria-controls": "my-table"
                        },
                        model: {
                            value: t.currentPage,
                            callback: function(e) {
                                t.currentPage = e
                            },
                            expression: "currentPage"
                        }
                    })], 1)])]) : s("div", [t.$store.state.isConnected ? s("div", {
                        staticClass: "mt-5 text-secondary text-center"
                    }, [t._v("No Armz for sale")]) : s("div", {
                        staticClass: "mt-5 text-secondary text-center"
                    }, [s("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return t.$store.commit("CONNECT")
                            }
                        }
                    }, [t._v("Connect")]), t._v(" your wallet to see the market")])])], 1)])
                },
                a = [],
                r = s("2909"),
                n = (s("4de4"), s("d3b7"), s("4e82"), s("d4f0")),
                o = s("3d75"),
                c = {
                    components: {
                        ArmzOfShop: n["a"],
                        SubLoading: o["a"]
                    },
                    data: function() {
                        return {
                            rarityLabels: ["common", "rare", "epic", "legendary", "genesis"],
                            selectedSort: void 0,
                            floorPrice: void 0,
                            ceilPrice: void 0,
                            salesView: 0,
                            showFilters: !1,
                            currentPage: 0,
                            perPage: 30,
                            filters: {
                                common: !1,
                                rare: !1,
                                epic: !1,
                                legendary: !1,
                                genesis: !1,
                                min: "",
                                max: "",
                                minwinrate: "",
                                maxwinrate: ""
                            }
                        }
                    },
                    methods: {
                        getSales: function() {
                            this.$store.commit("GET_ALL_SALES", 1)
                        },
                        toogleFilters: function() {
                            this.showFilters = !this.showFilters, localStorage.showFilters = this.showFilters
                        },
                        resetPrice: function() {
                            this.floorPrice = void 0, this.ceilPrice = void 0
                        }
                    },
                    computed: {
                        sortedArticles: function() {
                            var t = this;
                            if (this.$store.state.articles.length != this.$store.state.marketlength) return this.$store.state.articles;
                            var e = Object(r["a"])(this.$store.state.articles);
                            return this.resetPrice(), e = e.filter((function(e) {
                                if (35576 == e.armz.id || 109783 == e.armz.id) return !1;
                                var s = !0;
                                (t.filters.common || t.filters.rare || t.filters.epic || t.filters.legendary || t.filters.genesis) && (s = !1, (t.filters.common && "0" == e.rarity || t.filters.rare && "1" == e.rarity || t.filters.epic && "2" == e.rarity || t.filters.legendary && "3" == e.rarity || t.filters.genesis && "4" == e.rarity || t.filters.unique && "5" == e.rarity) && (s = !0));
                                var i = "" == t.filters.min,
                                    a = "" == t.filters.max;
                                t.filters.min && parseInt(e.price / 1e18) >= parseInt(t.filters.min) && (i = !0), t.filters.max && parseInt(e.price / 1e18) <= parseInt(t.filters.max) && (a = !0);
                                var r = "" == t.filters.minwinrate,
                                    n = "" == t.filters.maxwinrate;
                                return t.filters.minwinrate && parseInt(e.boostWinrate) >= parseInt(t.filters.minwinrate) && (r = !0), t.filters.maxwinrate && parseInt(e.boostWinrate) <= parseInt(t.filters.maxwinrate) && (n = !0), s && i && a && r && n && ((parseInt(t.floorPrice) > parseInt(e.price) || !t.floorPrice) && (t.floorPrice = e.price), (parseInt(t.ceilPrice) < parseInt(e.price) || !t.ceilPrice) && (t.ceilPrice = e.price)), s && i && a && r && n
                            })), e = e.sort((function(e, s) {
                                return "Ascend" == t.selectedSort ? parseInt(e.price) > parseInt(s.price) ? 1 : -1 : "Descend" == t.selectedSort ? parseInt(e.price) < parseInt(s.price) ? 1 : -1 : parseInt(e.date) < parseInt(s.date) ? 1 : -1
                            })), e
                        }
                    },
                    mounted: function() {
                        var t = this;
                        "true" == localStorage.showFilters && localStorage.showFilters && (this.showFilters = !0), setTimeout((function() {
                            t.getSales()
                        }), 500)
                    }
                },
                l = c,
                d = s("2877"),
                m = Object(d["a"])(l, i, a, !1, null, null, null);
            e["default"] = m.exports
        },
        "3d75": function(t, e, s) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                },
                a = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [i("img", {
                        staticClass: "gif-load mb-3",
                        attrs: {
                            src: s("2743")
                        }
                    })])
                }],
                r = (s("544f"), s("2877")),
                n = {},
                o = Object(r["a"])(n, i, a, !1, null, null, null);
            e["a"] = o.exports
        },
        "544f": function(t, e, s) {
            "use strict";
            s("a6ad")
        },
        "7fac": function(t, e, s) {
            "use strict";
            s("b511")
        },
        a6ad: function(t, e, s) {},
        b511: function(t, e, s) {},
        d4f0: function(t, e, s) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "armz-box"
                    }, [i("div", {
                        staticClass: "m-4 border-0 rounded-lg text-light",
                        class: t.rarityLabels[t.trade.armz.rarity]
                    }, [i("div", {
                        staticClass: "position-relative d-flex justify-content-center"
                    }, [i("img", {
                        staticClass: "arm-img",
                        attrs: {
                            src: s("e078")("./" + t.trade.armz.image + ".png")
                        }
                    })]), i("div", {
                        staticClass: "p-4 pb-3"
                    }, [i("div", {
                        staticClass: "d-flex justify-content-between"
                    }, [i("div", [t._v("#" + t._s(t.trade.armzId))]), i("div", {
                        staticClass: "price text-end"
                    }, [i("div", {
                        staticClass: "text-capitalize"
                    }, [t._v(" " + t._s(t.rarityLabels[t.trade.armz.rarity]) + " ")])])]), i("div", {
                        staticClass: "d-flex justify-content-between mt-4 px-2"
                    }, [i("div", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        attrs: {
                            title: t.remaining(t.trade.armz)
                        }
                    }, [t._l(parseInt(t.trueMana(t.trade.armz)), (function(t, e) {
                        return i("b-icon", {
                            key: e + "--c",
                            staticClass: "icon-shadows",
                            attrs: {
                                variant: "warning",
                                icon: "lightning-fill",
                                scale: "1.2"
                            }
                        })
                    })), t._l(parseInt(t.trade.armz.maxMana) - t.trueMana(t.trade.armz), (function(t, e) {
                        return i("b-icon", {
                            key: e + "ok",
                            staticClass: "icon-shadows",
                            attrs: {
                                variant: "warning",
                                icon: "lightning",
                                scale: "1.2"
                            }
                        })
                    }))], 2), i("div", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        attrs: {
                            title: "Win rate boost : +" + t.trade.armz.boostWinrate + "%"
                        }
                    }, [4 != parseInt(t.trade.armz.rarity) ? i("div", [t._l(parseInt(t.trade.armz.nbBoost), (function(t, e) {
                        return i("img", {
                            key: e + "icon",
                            staticClass: "fire-icon icon-shadows position-relative",
                            attrs: {
                                src: s("bac1")
                            }
                        })
                    })), i("span", t._l(3 - parseInt(t.trade.armz.nbBoost), (function(t, e) {
                        return i("img", {
                            key: e + "-icon",
                            staticClass: "fire-icon icon-shadows position-relative",
                            attrs: {
                                src: s("3de4"),
                                icon: "lightning"
                            }
                        })
                    })), 0)], 2) : i("div", t._l(5, (function(t, e) {
                        return i("img", {
                            key: e + "icon",
                            staticClass: "fire-icon icon-shadows position-relative",
                            attrs: {
                                src: s("bac1")
                            }
                        })
                    })), 0)])]), t.trade.seller != t.$store.state.address && 1 == t.trade.status ? i("b-button", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        staticClass: "btn-arm rounded-lg mt-2 py-2 px-3 mx-4 text-truncate",
                        class: {
                            disabled: t.$store.state.balance < t.trade.price / 1e18
                        },
                        attrs: {
                            href: "#",
                            variant: "light",
                            title: (t.trade.price / 1e18).toFixed(2) + " PROT"
                        },
                        on: {
                            click: function(e) {
                                return t.preBuy(t.trade)
                            }
                        }
                    }, [t._v(" " + t._s((t.trade.price / 1e18).toFixed(2)) + " PROT ")]) : 2 == t.trade.status ? i("div", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        staticClass: "btn-arm bg-secondary rounded-lg mt-2 py-2 px-2 mx-4 text-truncate",
                        attrs: {
                            href: "#",
                            title: (t.trade.price / 1e18).toFixed(2) + " PROT"
                        }
                    }, [t._v(" Sold - " + t._s((t.trade.price / 1e18).toFixed(2)) + " PROT ")]) : i("div", {
                        staticClass: "row d-flex justify-content-center"
                    }, [i("b-button", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        staticClass: "rounded-lg mt-2 py-2 col-5",
                        attrs: {
                            href: "#",
                            variant: "danger",
                            title: (t.trade.price / 1e18).toFixed(2) + " PROT"
                        },
                        on: {
                            click: function(e) {
                                return t.cancelSale(t.trade)
                            }
                        }
                    }, [t._v(" Cancel ")]), i("b-button", {
                        staticClass: "rounded-lg mt-2 py-2 col-5 offset-1",
                        attrs: {
                            href: "#",
                            variant: "light"
                        },
                        on: {
                            click: function(e) {
                                t.editPrice = !0
                            }
                        }
                    }, [t._v(" Edit ")])], 1)], 1)]), t.removeFromMarket ? i("div", {
                        staticClass: "modal-sell center-items"
                    }, [i("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [i("div", {
                        staticClass: "col-10 col-md-6 col-xl-4 p-4 theme-secondary rounded-lg"
                    }, [i("div", {
                        staticClass: "my-5"
                    }, [i("b-icon", {
                        attrs: {
                            icon: "check2-circle",
                            variant: "success",
                            scale: "5"
                        }
                    })], 1), i("div", [t._v("Your NFT has been successfully removed from the marketplace")]), i("b-button", {
                        attrs: {
                            variant: "warning mt-4 px-5"
                        },
                        on: {
                            click: function(e) {
                                return t.reload()
                            }
                        }
                    }, [t._v("OK")])], 1)])]) : t._e(), t.updatedOnMarket ? i("div", {
                        staticClass: "modal-sell center-items"
                    }, [i("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [i("div", {
                        staticClass: "col-10 col-md-6 col-xl-4 p-4 theme-secondary rounded-lg"
                    }, [i("div", {
                        staticClass: "my-5"
                    }, [i("b-icon", {
                        attrs: {
                            icon: "check2-circle",
                            variant: "success",
                            scale: "5"
                        }
                    })], 1), i("div", [t._v("Your sale has been successfully updated on the marketplace")]), i("b-button", {
                        attrs: {
                            variant: "warning mt-4 px-5"
                        },
                        on: {
                            click: function(e) {
                                return t.reload()
                            }
                        }
                    }, [t._v("OK")])], 1)])]) : t._e(), t.editPrice ? i("div", {
                        staticClass: "modal-sell center-items p-5"
                    }, [i("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [i("div", {
                        staticClass: "col-12 col-md-7 col-lg-6 col-xl-5 row theme-secondary rounded-lg"
                    }, [i("div", {
                        staticClass: "col-12 col-md-6 p-3"
                    }, [i("div", {
                        staticClass: "border-0 shadow minia-contain h-100 center-items",
                        class: t.rarityLabels[t.trade.armz.rarity]
                    }, [i("img", {
                        staticClass: "card-img p-1 mt-4",
                        attrs: {
                            src: s("e078")("./" + t.trade.armz.image + ".png")
                        }
                    })])]), i("div", {
                        staticClass: "col-12 col-md-6 p-4 text-start"
                    }, [i("p", {
                        staticClass: "h5 my-2"
                    }, [t._v("#" + t._s(t.trade.armz.id) + " ")]), i("p", {
                        staticClass: "my-0"
                    }, [i("span", {
                        staticClass: "text-capitalize"
                    }, [t._v(" " + t._s(t.rarityLabels[t.trade.armz.rarity]))])]), i("div", {
                        staticClass: "mt-5 mb-2 text-secondary small"
                    }, [t._v("Enter a new price in $PROT ")]), i("b-input", {
                        staticClass: "mb-5 bg-light border-0",
                        attrs: {
                            type: "number",
                            placeholder: "Price"
                        },
                        model: {
                            value: t.price,
                            callback: function(e) {
                                t.price = e
                            },
                            expression: "price"
                        }
                    }), i("div", {
                        staticClass: "d-flex justify-content-between text-center mt-4"
                    }, [i("b-button", {
                        attrs: {
                            variant: "light border px-0 w-50"
                        },
                        on: {
                            click: function(e) {
                                t.editPrice = !1, t.price = t.trade.price / 1e18
                            }
                        }
                    }, [t._v(" Cancel ")]), i("div", {
                        staticClass: "mx-2"
                    }), i("b-button", {
                        attrs: {
                            variant: "success px-0 w-50"
                        },
                        on: {
                            click: function(e) {
                                return t.newPrice()
                            }
                        }
                    }, [t._v("Confirm ")])], 1)], 1)])])]) : t._e()])
                },
                a = [],
                r = function(t) {
                    return t > 9 ? t : "0" + t
                },
                n = {
                    props: {
                        trade: Object
                    },
                    data: function() {
                        return {
                            rarityLabels: ["common", "rare", "epic", "legendary", "genesis", "unique"],
                            removeFromMarket: !1,
                            updatedOnMarket: !1,
                            editPrice: !1,
                            price: this.trade.price / 1e18
                        }
                    },
                    methods: {
                        reload: function() {
                            var t = this;
                            this.$store.state.render = !1, setTimeout((function() {
                                t.$store.state.render = !0
                            }), 0)
                        },
                        buy: function(t) {
                            var e = this;
                            this.$store.state.loadingMode = "wait", this.$store.state.marketplaceContract.methods.buyTrade(t.id).send({
                                from: this.$store.state.address
                            }).on("transactionHash", (function() {
                                e.$store.state.loadingMode = "buy"
                            })).then((function() {
                                e.$store.commit("GET_ALL_SALES", 1), e.$store.commit("GET_BALANCE"), e.$store.state.newItem = t.armz, e.$store.state.loadingMode = void 0
                            })).catch((function() {
                                e.$store.state.loadingMode = void 0
                            }))
                        },
                        preBuy: function(t) {
                            var e = this;
                            this.$store.state.tokenContract.methods.allowance(this.$store.state.address, this.$store.state.marketplaceContract._address).call({
                                from: this.$store.state.address
                            }).then((function(s) {
                                e.$store.state.loadingMode = "approve", s < t.price ? e.$store.state.tokenContract.methods.approve(e.$store.state.marketplaceContract._address, e.$store.state.web3.utils.toWei("1000000", "ether")).send({
                                    from: e.$store.state.address
                                }).then((function() {
                                    e.buy(t)
                                })).catch((function() {
                                    return e.$store.state.loadingMode = void 0
                                })) : e.buy(t)
                            }))
                        },
                        cancelSale: function(t) {
                            var e = this;
                            this.$store.state.loadingMode = "wait", this.$store.state.marketplaceContract.methods.cancelTrade(t.id).send({
                                from: this.$store.state.address
                            }).on("transactionHash", (function() {
                                e.$store.state.loadingMode = "cancelSale"
                            })).then((function() {
                                e.$store.state.loadingMode = void 0, e.removeFromMarket = !0
                            })).catch((function() {
                                e.$store.state.loadingMode = void 0
                            }))
                        },
                        newPrice: function() {
                            var t = this;
                            this.$store.state.loadingMode = "wait", this.$store.state.marketplaceContract.methods.modifyTrade(this.trade.id, this.$store.state.web3.utils.toWei(this.price, "ether")).send({
                                from: this.$store.state.address
                            }).on("transactionHash", (function() {
                                t.$store.state.loadingMode = "sell"
                            })).then((function() {
                                t.editPrice = !1, t.$store.state.loadingMode = void 0, t.updatedOnMarket = !0
                            })).catch((function() {
                                t.$store.state.loadingMode = void 0
                            }))
                        },
                        trueMana: function(t) {
                            for (var e = parseInt(t.maxMana), s = 0; s < t.fights.length; s++) 0 !== t.fights[s] && Math.floor(Date.now() / 1e3) - t.fights[s] < 86400 && (e -= 1);
                            return e
                        },
                        remaining: function(t) {
                            for (var e, s = 0; s < t.fights.length; s++)
                                if (t.fights[s] > 0 && (!e || e > t.fights[s])) {
                                    var i = 86400 - (Math.floor(Date.now() / 1e3) - t.fights[s]);
                                    i > 0 && (e = t.fights[s])
                                }
                            var a = 86400 - (Math.floor(Date.now() / 1e3) - e),
                                n = Math.floor(a / 3600),
                                o = Math.floor(a / 60 % 60),
                                c = Math.floor(a % 60);
                            return e && 0 != e ? "\n            Next fight: ".concat(r(n) + "h " + r(o) + "m " + r(c) + "s", "\n            ") : ""
                        }
                    }
                },
                o = n,
                c = (s("7fac"), s("2877")),
                l = Object(c["a"])(o, i, a, !1, null, null, null);
            e["a"] = l.exports
        }
    }
]);