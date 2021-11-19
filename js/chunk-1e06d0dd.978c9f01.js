(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-1e06d0dd"], {
        "0ca0": function(t, s, e) {},
        "2cc7": function(t, s, e) {
            "use strict";
            e("0ca0")
        },
        "68c8": function(t, s, e) {
            "use strict";
            e.r(s);
            var o = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "d-flex justify-content-center p-3 p-md-5"
                    }, [e("div", {
                        staticClass: "theme-secondary rounded-lg p-4 p-md-5 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5"
                    }, [e("div", {
                        staticClass: "my-3 bold"
                    }, [t._v("MY DETAILS")]), e("div", {
                        staticClass: "my-3 d-flex justify-content-between"
                    }, [t._v(" Staked PROT:"), e("b", {
                        staticClass: "text-end"
                    }, [t._v(t._s((t.$store.state.stakingInfos.staked / 1e18).toFixed(4)) + " $PROT")])]), e("div", {
                        staticClass: "my-3 d-flex justify-content-between"
                    }, [t._v("Earning bonus: "), e("b", [t._v("+" + t._s(0 == t.$store.state.stakingInfos.bonus ? 0 : (t.$store.state.stakingInfos.bonus / 20 / 1e18).toFixed(2)) + "%")])]), e("div", {
                        staticClass: "border-bottom my-3"
                    }), e("div", {
                        staticClass: "my-3 text-center"
                    }, [t._v("Staking paused")]), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.$store.state.stakingInfos.staked > 0,
                            expression: "$store.state.stakingInfos.staked > 0"
                        }]
                    }, [e("div", {
                        staticClass: "bold mt-5 "
                    }, [t._v("WITHDRAW")]), e("div", {
                        staticClass: "my-3 d-flex justify-content-between"
                    }, [t._v(" Unlocked on:"), e("b", {
                        staticClass: "text-end"
                    }, [t._v(t._s(t.withdrawDate))])]), e("b-button", {
                        staticClass: "col-12",
                        class: {
                            "btn-dark": 1 == t.enableWithdraw, "btn-danger": 0 == t.enableWithdraw
                        },
                        attrs: {
                            variant: "py-2"
                        },
                        on: {
                            click: function(s) {
                                t.showWithdraw = !0
                            }
                        }
                    }, [t.enableWithdraw ? e("div", {
                        staticClass: "m-1"
                    }, [e("b", [t._v("Confirm withdraw")])]) : e("div", {
                        staticClass: "m-1"
                    }, [e("b", [t._v("Early withdraw")])])]), t.enableWithdraw ? t._e() : e("div", {
                        staticClass: "mt-3"
                    }, [e("p", {
                        staticClass: "text-sm text-center"
                    }, [t._v("In case of early withdrawal, 50% of the staked tokens go into the reward pool, and 50% is returned to you.")])])], 1), t.showWithdraw ? e("div", {
                        staticClass: "modal-sell center-items"
                    }, [e("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [e("div", {
                        staticClass: "p-5 theme-secondary rounded-lg col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4"
                    }, [e("div", {
                        staticClass: "h6"
                    }, [t._v("Are you sure you want to withdrawn your stacked PROT?")]), e("div", {
                        staticClass: "text-danger text-sm"
                    }, [e("b-icon", {
                        attrs: {
                            icon: "exclamation-circle"
                        }
                    }), e("span", {
                        staticClass: "mx-1"
                    }, [t._v("50% of the staked tokens go into the reward pool, and 50% is returned to you")])], 1), e("div", {
                        staticClass: "d-flex justify-content-between mt-4"
                    }, [e("b-button", {
                        attrs: {
                            variant: "light col-4"
                        },
                        on: {
                            click: function(s) {
                                t.showWithdraw = !1
                            }
                        }
                    }, [t._v("Back")]), e("b-button", {
                        attrs: {
                            variant: "success col-4"
                        },
                        on: {
                            click: function(s) {
                                t.enableWithdraw ? t.withdraw() : t.earlyWithdraw()
                            }
                        }
                    }, [t._v("Confirm ")])], 1)])])]) : t._e()])])
                },
                a = [],
                n = (e("99af"), {
                    data: function() {
                        return {
                            amount: 0,
                            lockPeriod: 2,
                            showWithdraw: !1
                        }
                    },
                    methods: {
                        maxAmount: function() {
                            this.$store.state.balance > 500 - this.$store.state.stakingInfos.staked / 1e18 ? this.amount = 500 - this.$store.state.stakingInfos.staked / 1e18 : this.amount = this.$store.state.balance
                        },
                        preDeposit: function() {
                            var t, s = this,
                                e = this.$store.state.web3.utils.toWei("".concat(this.amount), "ether");
                            t = 0 == this.lockPeriod ? 2 : 1 == this.lockPeriod ? 4 : 12, 0 != this.$store.state.stakingInfos.lock && this.$store.state.stakingInfos.lock > Date.now() / 1e3 + 604800 * t ? alert("The new lock period cannot be shorter than the current one") : this.$store.state.tokenContract.methods.allowance(this.$store.state.address, this.$store.state.stakingContract._address).call({
                                from: this.$store.state.address
                            }).then((function(o) {
                                s.$store.state.loadingMode = "approve", o < e ? s.$store.state.tokenContract.methods.approve(s.$store.state.stakingContract._address, s.$store.state.web3.utils.toWei("1000000", "ether")).send({
                                    from: s.$store.state.address
                                }).then((function() {
                                    s.$store.state.loadingMode = "wait", s.deposit(e, t)
                                })).catch((function() {
                                    return s.$store.state.loadingMode = void 0
                                })) : (s.$store.state.loadingMode = "wait", s.deposit(e, t))
                            }))
                        },
                        deposit: function(t, s) {
                            var e = this;
                            0 == this.$store.state.stakingInfos.staked ? this.$store.state.stakingContract.methods.stake(t, s).send({
                                from: this.$store.state.address
                            }).on("transactionHash", (function() {
                                e.$store.state.loadingMode = "stacking"
                            })).then((function() {
                                e.$store.commit("GET_ALL_INFOS"), e.$store.commit("GET_BALANCE"), e.amount = 0, e.$store.state.loadingMode = void 0
                            })).catch((function() {
                                e.$store.state.loadingMode = void 0
                            })) : this.$store.state.stakingContract.methods.addStake(t, s).send({
                                from: this.$store.state.address
                            }).on("transactionHash", (function() {
                                e.$store.state.loadingMode = "stacking"
                            })).then((function() {
                                e.$store.commit("GET_ALL_INFOS"), e.$store.commit("GET_BALANCE"), e.amount = 0, e.$store.state.loadingMode = void 0
                            })).catch((function() {
                                e.$store.state.loadingMode = void 0
                            }))
                        },
                        withdraw: function() {
                            var t = this;
                            this.$store.state.loadingMode = "wait", this.$store.state.stakingInfos.lock <= Date.now() / 1e3 && (this.$store.state.loadingMode = "wait", this.$store.state.stakingContract.methods.withdraw().send({
                                from: this.$store.state.address
                            }).on("transactionHash", (function() {
                                t.$store.state.loadingMode = "buy"
                            })).then((function() {
                                t.$store.commit("GET_ALL_INFOS"), t.$store.commit("GET_BALANCE"), t.$store.state.loadingMode = void 0, t.showWithdraw = !1
                            })).catch((function() {
                                t.$store.state.loadingMode = void 0
                            })))
                        },
                        earlyWithdraw: function() {
                            var t = this;
                            this.$store.state.loadingMode = "wait", this.$store.state.stakingContract.methods.earlyWithdraw().send({
                                from: this.$store.state.address
                            }).on("transactionHash", (function() {
                                t.$store.state.loadingMode = "buy"
                            })).then((function() {
                                t.$store.state.loadingMode = void 0, t.$store.commit("GET_ALL_INFOS"), t.$store.commit("GET_BALANCE"), t.$store.state.loadingMode = void 0, t.showWithdraw = !1
                            })).catch((function() {
                                t.$store.state.loadingMode = void 0
                            }))
                        }
                    },
                    computed: {
                        enableWithdraw: function() {
                            return this.$store.state.stakingInfos.lock <= Date.now() / 1e3
                        },
                        withdrawDate: function() {
                            if (this.$store.state.stakingInfos.lock <= 0) return "-";
                            var t = Math.abs(1e3 * this.$store.state.stakingInfos.lock - Date.now()) / 1e3,
                                s = Math.floor(t / 86400);
                            t -= 86400 * s;
                            var e = Math.floor(t / 3600) % 24;
                            t -= 3600 * e;
                            var o = Math.floor(t / 60) % 60;
                            return t -= 60 * o, "".concat(s, "d ").concat(e, "h ").concat(o, "m")
                        },
                        calcBonus: function() {
                            if (this.amount < 10) return 0;
                            var t = parseInt(this.amount) + this.$store.state.stakingInfos.staked / 1e18,
                                s = 100 * t / 2e3;
                            return 0 == this.lockPeriod && (s *= 1), 1 == this.lockPeriod && (s *= 2), 2 == this.lockPeriod && (s *= 4), s
                        }
                    }
                }),
                i = n,
                r = (e("2cc7"), e("2877")),
                d = Object(r["a"])(i, o, a, !1, null, null, null);
            s["default"] = d.exports
        }
    }
]);