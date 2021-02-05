jQuery("#simulation")
  .on("click", ".s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8147a5c6-9c9a-46fe-9f4e-14f55da37800"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f4aaf4fb-e6d0-403b-ba09-a1cd616eaf13"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/715a85d5-52e9-4f80-a462-f87abf616598"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/30f0f438-2468-4a4d-ba1b-e41cf4b39032"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_4": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 1.5px #666666)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#000000",
                        "border-right-color": "#000000",
                        "border-bottom-color": "#000000",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_5": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 1.5px #666666)",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_5 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#000000",
                        "border-right-color": "#000000",
                        "border-bottom-color": "#000000",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_6": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px -0.0px 1.5px #666666)"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_6 textarea": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_6 > .borderLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#000000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#000000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_4": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_4 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_4 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#999999",
                        "border-right-color": "#999999",
                        "border-bottom-color": "#999999",
                        "border-left-color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_5": {
                      "attributes": {
                        "filter": "none",
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_5 input": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_5 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#999999",
                        "border-right-color": "#999999",
                        "border-bottom-color": "#999999",
                        "border-left-color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_6": {
                      "attributes": {
                        "filter": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_6 textarea": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Input_6 > .borderLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_8 span": {
                      "attributes": {
                        "color": "#333333"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_18" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_18" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "67"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_30" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_9 span": {
                      "attributes": {
                        "color": "#333333"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_19" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_19" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "35"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_31" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_10 span": {
                      "attributes": {
                        "color": "#333333"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_20" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_20" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "62"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_32" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_19 span": {
                      "attributes": {
                        "color": "#333333"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_22" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_22" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "67"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_42" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_cell_8") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_8").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_8") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_30" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "68"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_18" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_8 span": {
                      "attributes": {
                        "color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_18" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_9") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_9").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_9") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_31" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "36"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_19" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_9 span": {
                      "attributes": {
                        "color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_19" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_10") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_10").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_10") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_32" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "63"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_20" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_10 span": {
                      "attributes": {
                        "color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_20" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_19") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_19").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#s-Text_cell_19") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_42" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "68"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_22" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "1"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_19": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Text_cell_19 span": {
                      "attributes": {
                        "color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_22" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Rectangle_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 #s-Rectangle_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#1468A0"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-30f0f438-2468-4a4d-ba1b-e41cf4b39032 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    }
  });