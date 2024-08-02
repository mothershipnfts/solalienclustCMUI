(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ AppBar)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3299);
/* harmony import */ var _nav_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6320);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__]);
_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const WalletMultiButtonDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(async () => (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8847))).WalletMultiButton, {
  ssr: false,
  loadableGenerated: {
    modules: ["..\\components\\AppBar.tsx -> " + '@solana/wallet-adapter-react-ui']
  }
});
const AppBar = () => {
  const {
    autoConnect,
    setAutoConnect
  } = (0,_contexts_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAutoConnect */ .vl)();
  const {
    0: isNavOpen,
    1: setIsNavOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "navbar-start align-items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "hidden sm:inline w-22 h-22 md:p-2 ml-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "https://mothershipnfts.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            passHref: true,
            className: "text-secondary hover:text-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
              src: "/solanalogo.png",
              alt: "Solana Logo",
              className: "w-full h-auto"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("svg", {
              width: "100%",
              height: "0",
              viewBox: "0 0 656 96",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("defs", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("linearGradient", {
                  id: "paint0_linear_1064_606",
                  x1: "10.81",
                  y1: "98.29",
                  x2: "98.89",
                  y2: "-1.01005",
                  gradientUnits: "userSpaceOnUse",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("stop", {
                    offset: "0.08",
                    stopColor: "#006400"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("stop", {
                    offset: "0.3",
                    stopColor: "#228B22"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("stop", {
                    offset: "0.5",
                    stopColor: "#32CD32"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("stop", {
                    offset: "0.6",
                    stopColor: "#7CFC00"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("stop", {
                    offset: "0.72",
                    stopColor: "#ADFF2F"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("stop", {
                    offset: "0.97",
                    stopColor: "#00FF00"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("clipPath", {
                  id: "clip0_1064_606",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("rect", {
                    width: "646",
                    height: "96",
                    fill: "white"
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(WalletMultiButtonDynamic, {
          className: "btn-ghost btn-sm relative flex md:hidden text-lg "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "navbar-end",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "hidden md:inline-flex align-items-center justify-items gap-6",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_nav_element__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            label: "Mint",
            href: "/",
            navigationStarts: () => setIsNavOpen(false)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_nav_element__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            label: "Collection",
            href: "https://magiceden.io/marketplace/msac",
            navigationStarts: () => setIsNavOpen(false)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(WalletMultiButtonDynamic, {
            className: "btn-ghost btn-sm rounded-btn text-lg mr-6 "
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
          htmlFor: "my-drawer",
          className: "btn-gh items-center justify-between md:hidden mr-6",
          onClick: () => setIsNavOpen(!isNavOpen),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "HAMBURGER-ICON space-y-2.5 ml-5",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: `h-0.5 w-8 bg-purple-600 ${isNavOpen ? 'hidden' : ''}`
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: `absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${isNavOpen ? "" : "hidden"}`,
            style: {
              transform: "rotate(45deg)"
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: `absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${isNavOpen ? "" : "hidden"}`,
            style: {
              transform: "rotate(135deg)"
            }
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "dropdown dropdown-end",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            tabIndex: 0,
            className: "btn btn-square btn-ghost text-right mr-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
              className: "w-7 h-7",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("ul", {
            tabIndex: 0,
            className: "p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: "form-control bg-opacity-100",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                  className: "cursor-pointer label",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                    children: "Autoconnect"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
                    type: "checkbox",
                    checked: autoConnect,
                    onChange: e => setAutoConnect(e.target.checked),
                    className: "toggle"
                  })]
                })
              })
            })
          })]
        })]
      })]
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ContentContainer)
/* harmony export */ });
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9311);
/* harmony import */ var _nav_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6320);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ContentContainer = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex-1 drawer h-52 flex-col justify-between",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      id: "my-drawer",
      type: "checkbox",
      className: "grow drawer-toggle"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "items-center drawer-content flex flex-col justify-between",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "drawer-side",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("label", {
        htmlFor: "my-drawer",
        className: "drawer-overlay gap-6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
        className: "p-4 overflow-y-auto menu w-80 bg-base-100 gap-10 sm:flex items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Text__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
            variant: "heading",
            className: "font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600 mt-10",
            children: "Menu"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_nav_element__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            label: "Mint",
            href: "/"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_nav_element__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            label: "Collection",
            href: "https://magiceden.io/marketplace/msac"
          })
        })]
      })]
    })]
  });
};

/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Footer = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "flex",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("footer", {
      className: "border-t-2 border-[#141414] bg-black hover:text-white w-screen",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "ml-12 py-12 mr-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex flex-col col-span-2 mx-4 items-center md:items-start",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "flex flex-row ml-1",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: "https://mothershipnfts.com/",
                target: "_blank",
                rel: "noopener noreferrer",
                passHref: true,
                className: "text-secondary hover:text-white",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "flex flex-row ml-1",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/solanaLogo.png",
                    alt: "solana icon",
                    width: 300,
                    height: 200
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex md:ml-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "https://x.com/mothership_nfts",
                type: "button",
                className: "text-secondary hover:text-white leading-normal transition duration-150 ease-in-out w-9 h-9 m-1 flex items-center justify-center",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
                  "aria-hidden": "true",
                  focusable: "false",
                  className: "w-32 h-32 mx-auto",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
                    d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                href: "https://discord.com/invite/CSH5bGcVP9",
                type: "button",
                className: "border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
                  "aria-hidden": "true",
                  focusable: "false",
                  className: "w-16 h-8 mx-auto",
                  role: "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 3 12 20",
                  fill: "currentColor",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
                    d: "M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.209.365-.444.844-.608 1.217-1.844-.276-3.68-.276-5.486 0-.164-.384-.418-.883-.633-1.248a.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.165-.319 13.773.099 18.335a.082.082 0 0 0 .031.056 19.888 19.888 0 0 0 5.995 3.033.078.078 0 0 0 .084-.028 14.822 14.822 0 0 0 1.257-2.05.076.076 0 0 0-.041-.109 13.22 13.22 0 0 1-1.91-.917.077.077 0 0 1-.007-.127c.127-.094.254-.192.375-.291a.073.073 0 0 1 .076-.01c4.014 1.837 8.346 1.837 12.286 0a.073.073 0 0 1 .078.009c.12.099.248.198.375.291a.077.077 0 0 1-.006.127c-.61.354-1.238.671-1.91.917a.076.076 0 0 0-.04.11 14.8 14.8 0 0 0 1.257 2.05.077.077 0 0 0 .084.028 19.876 19.876 0 0 0 6.001-3.033.078.078 0 0 0 .031-.055c.5-5.177-.838-9.738-3.63-13.939a.061.061 0 0 0-.032-.028zm-11.28 9.735c-1.137 0-2.074-1.045-2.074-2.327 0-1.282.918-2.327 2.074-2.327 1.143 0 2.074 1.045 2.074 2.327.002 1.282-.931 2.327-2.074 2.327zm6.683 0c-1.137 0-2.074-1.045-2.074-2.327 0-1.282.918-2.327 2.074-2.327 1.143 0 2.074 1.045 2.074 2.327 0 1.282-.931 2.327-2.074 2.327z"
                  })
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "mb-6 m-1 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary",
              children: "\xA9 2024 Mothership NFTs"
            })]
          })
        })
      })
    })
  });
};

/***/ }),

/***/ 3578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9473);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__]);
([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const NotificationList = () => {
  const {
    notifications,
    set: setNotificationStore
  } = (0,_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(s => s);
  const reversedNotifications = [...notifications].reverse();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: `z-20 fixed inset-20 flex items-end px-4 py-6 pointer-events-none sm:p-6`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: `flex flex-col w-full`,
      children: reversedNotifications.map((n, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Notification, {
        type: n.type,
        message: n.message,
        description: n.description,
        txid: n.txid,
        onHide: () => {
          setNotificationStore(state => {
            const reversedIndex = reversedNotifications.length - 1 - idx;
            state.notifications = [...notifications.slice(0, reversedIndex), ...notifications.slice(reversedIndex + 1)];
          });
        }
      }, `${n.message}${idx}`))
    })
  });
};

const Notification = ({
  type,
  message,
  description,
  txid,
  onHide
}) => {
  const {
    connection
  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useConnection)();
  const {
    networkConfiguration
  } = (0,contexts_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkConfiguration */ .lt)(); // TODO: we dont have access to the network or endpoint here.. 
  // getExplorerUrl(connection., txid, 'tx')
  // Either a provider, context, and or wallet adapter related pro/contx need updated

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const id = setTimeout(() => {
      onHide();
    }, 8000);
    return () => {
      clearInterval(id);
    };
  }, [onHide]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: `max-w-sm w-full bg-bkg-1 shadow-lg rounded-md mt-2 pointer-events-auto ring-1 ring-black ring-opacity-5 p-2 mx-4 mb-12 overflow-hidden`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: `p-4 rounded-md bg-gradient-to-r from-purple-900 from-10% via-purple-600 via-30% to-emerald-500 to-90%`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: `flex items-center`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: `flex-shrink-0`,
          children: [type === 'success' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.CheckCircleIcon, {
            className: `h-8 w-8 mr-1 text-green`
          }) : null, type === 'info' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.InformationCircleIcon, {
            className: `h-8 w-8 mr-1 text-red`
          }), type === 'error' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.XCircleIcon, {
            className: `h-8 w-8 mr-1`
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: `ml-2 w-0 flex-1`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: `font-bold text-fgd-1`,
            children: message
          }), description ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: `mt-0.5 text-sm text-fgd-2`,
            children: description
          }) : null, txid ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "flex flex-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
              href: 'https://explorer.solana.com/tx/' + txid + `?cluster=${networkConfiguration}`,
              target: "_blank",
              rel: "noreferrer",
              className: "flex flex-row link link-accent text-emerald-200",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("svg", {
                className: "flex-shrink-0 h-4 ml-2 mt-0.5 text-primary-light w-4",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "flex mx-4",
                children: [txid.slice(0, 8), "...", txid.slice(txid.length - 8)]
              })]
            })
          }) : null]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: `ml-4 flex-shrink-0 self-start flex`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => onHide(),
            className: `bg-bkg-2 default-transition rounded-md inline-flex text-fgd-3 hover:text-fgd-4 focus:outline-none`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: `sr-only`,
              children: "Close"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.XIcon, {
              className: "h-5 w-5"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9251);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



/**
 * Properties for a card component.
 */



/**
 * Pre-defined styling, according to agreed-upon design-system.
 */
const variants = {
  heading: 'text-3xl font-medium',
  'sub-heading': 'text-2xl font-medium',
  'nav-heading': 'text-lg font-medium sm:text-xl',
  nav: 'font-medium',
  paragraph: 'text-lg',
  'sub-paragraph': 'text-base font-medium text-inherit',
  input: 'text-sm uppercase tracking-wide',
  label: 'text-xs uppercase tracking-wide'
};
/**
 * Definition of a card component,the main purpose of
 * which is to neatly display information. Can be both
 * interactive and static.
 *
 * @param variant Variations relating to pre-defined styling of the element.
 * @param className Custom classes to be applied to the element.
 * @param children Child elements to be rendered within the component.
 */

const Text = ({
  variant,
  className,
  href,
  children
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
  className: (0,utils__WEBPACK_IMPORTED_MODULE_2__.cn)(className, variants[variant]),
  children: href ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: href,
    className: "min-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
    children: children
  }) : children
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ 6320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ nav_element)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Text/index.tsx
var Text = __webpack_require__(9311);
// EXTERNAL MODULE: ./src/utils/index.tsx + 1 modules
var utils = __webpack_require__(9251);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/nav-element/index.tsx
/* tslint:disable:no-empty */








const NavElement = ({
  label,
  href,
  as,
  scroll,
  disabled,
  navigationStarts = () => {}
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  const isActive = href === router.asPath || as && as === router.asPath;
  const divRef = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (divRef.current) {
      divRef.current.className = (0,utils.cn)('h-0.5 w-1/4 transition-all duration-300 ease-out', isActive ? '!w-full bg-gradient-to-l from-green-400 to-green-600 ' : 'group-hover:w-1/2 group-hover:bg-green-600');
    }
  }, [isActive]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((link_default()), {
    href: href,
    as: as,
    scroll: scroll,
    passHref: true,
    className: (0,utils.cn)('group flex h-full flex-col items-center justify-between', disabled && 'pointer-events-none cursor-not-allowed opacity-50'),
    onClick: () => navigationStarts(),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-row items-center gap-3",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Text/* default */.Z, {
        variant: "nav-heading",
        children: [" ", label, " "]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      ref: divRef
    })]
  });
};

/* harmony default export */ const nav_element = (NavElement);

/***/ }),

/***/ 3299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tu": () => (/* binding */ AutoConnectProvider),
/* harmony export */   "vl": () => (/* binding */ useAutoConnect)
/* harmony export */ });
/* unused harmony export AutoConnectContext */
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AutoConnectContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function useAutoConnect() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AutoConnectContext);
}
const AutoConnectProvider = ({
  children
}) => {
  // TODO: fix auto connect to actual reconnect on refresh/other.
  // TODO: make switch/slider settings
  // const [autoConnect, setAutoConnect] = useLocalStorage('autoConnect', false);
  const [autoConnect, setAutoConnect] = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useLocalStorage)('autoConnect', true);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(AutoConnectContext.Provider, {
    value: {
      autoConnect,
      setAutoConnect
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6434:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ ContextProvider)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7280);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3299);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1118);
/* harmony import */ var _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5535);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__, _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__, _utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__, _AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__, _utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const ReactUIWalletModalProviderDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(async () => (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8847))).WalletModalProvider, {
  ssr: false,
  loadableGenerated: {
    modules: ["..\\contexts\\ContextProvider.tsx -> " + "@solana/wallet-adapter-react-ui"]
  }
});

const WalletContextProvider = ({
  children
}) => {
  const {
    autoConnect
  } = (0,_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__/* .useAutoConnect */ .vl)();
  const {
    networkConfiguration
  } = (0,_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__/* .useNetworkConfiguration */ .lt)();
  const network = networkConfiguration;
  const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.clusterApiUrl)(network), [network]);
  console.log(network);
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => [new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.PhantomWalletAdapter(), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.SolflareWalletAdapter(), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_1__.TorusWalletAdapter()], [network]);
  const onError = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(error => {
    (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h)({
      type: 'error',
      message: error.message ? `${error.name}: ${error.message}` : error.name
    });
    console.error(error);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.ConnectionProvider, {
    endpoint: endpoint,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.WalletProvider, {
      wallets: wallets,
      onError: onError,
      autoConnect: autoConnect,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ReactUIWalletModalProviderDynamic, {
        children: children
      })
    })
  });
};

const ContextProvider = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_NetworkConfigurationProvider__WEBPACK_IMPORTED_MODULE_6__/* .NetworkConfigurationProvider */ .bm, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_AutoConnectProvider__WEBPACK_IMPORTED_MODULE_4__/* .AutoConnectProvider */ .Tu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(WalletContextProvider, {
          children: children
        })
      })
    })
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bm": () => (/* binding */ NetworkConfigurationProvider),
/* harmony export */   "lt": () => (/* binding */ useNetworkConfiguration)
/* harmony export */ });
/* unused harmony export NetworkConfigurationContext */
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const NetworkConfigurationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function useNetworkConfiguration() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NetworkConfigurationContext);
}
const NetworkConfigurationProvider = ({
  children
}) => {
  const [networkConfiguration, setNetworkConfiguration] = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_0__.useLocalStorage)("network", "devnet");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(NetworkConfigurationContext.Provider, {
    value: {
      networkConfiguration,
      setNetworkConfiguration
    },
    children: children
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6434);
/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(973);
/* harmony import */ var _components_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5446);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9458);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3578);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__, _components_AppBar__WEBPACK_IMPORTED_MODULE_2__, _components_Notification__WEBPACK_IMPORTED_MODULE_5__]);
([_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__, _components_AppBar__WEBPACK_IMPORTED_MODULE_2__, _components_Notification__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











__webpack_require__(2121);

__webpack_require__(108);

const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("title", {
        children: "Solana Scaffold Lite"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_contexts_ContextProvider__WEBPACK_IMPORTED_MODULE_1__/* .ContextProvider */ .H, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col h-screen",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Notification__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_AppBar__WEBPACK_IMPORTED_MODULE_2__/* .AppBar */ .x, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_ContentContainer__WEBPACK_IMPORTED_MODULE_3__/* .ContentContainer */ .O, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$, {})]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cn": () => (/* binding */ cn)
});

// UNUSED EXPORTS: clamp, formatDate, numberToCurrencyString

;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: ./src/utils/index.tsx
 // Concatenates classes into a single className string

const cn = (...args) => args.join(' ');

const formatDate = date => format(new Date(date), 'MM/dd/yyyy h:mm:ss');
/**
 * Formats number as currency string.
 *
 * @param number Number to format.
 */


const numberToCurrencyString = number => number.toLocaleString('en-US');
/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */


const clamp = (current, min, max) => Math.min(Math.max(current, min), max);



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 8768:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 7831:
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1247:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7280:
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ 9810:
/***/ ((module) => {

"use strict";
module.exports = import("immer");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,676,627,118], () => (__webpack_exec__(1336)));
module.exports = __webpack_exports__;

})();