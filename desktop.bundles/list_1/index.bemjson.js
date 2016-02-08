({
    block: 'page',
    title: 'testtask',
    head : [
      { elem: 'meta', attrs: { name: 'My testtask', content: 'testtask'}},
      { elem: 'css', url: 'index.css'}   
    ],
    content: [
      {
        elem: 'header-bg'
      },
      {
        elem: 'header',
        content: [
          {
            block: 'logo'
          },
          {
            block: 'icons',
            content: [
              {
                tag: 'ul',
                content: [
                  {
                    elem: 'el',
                    tag: 'li',
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Найти'},
                        content: [
                          {
                            tag: 'img',
                            attrs: {src: '../../common.blocks/img/search.png'}
                          }
                        ]
                      }
                    ]
                  },
                  {
                    elem: 'el',
                    tag: 'li',
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Схема'},
                        content: [
                          {
                            tag: 'img',
                            attrs: {src: '../../common.blocks/img/schema.png'}
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }, 
          {
            elem: 'nav',
            content: [
              {
                block: 'main-nav',
                content: [
                  {
                    elem: 'el',
                    elemMods: {check: 'true'},
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#'},
                        content: 'АВТОМОБИЛЬ'
                      }
                    ] 
                  },
                  {
                    elem: 'el',
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#'},
                        content: 'МОТОЦИКЛЫ'
                      }
                    ] 
                  },
                  {
                    elem: 'el',
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#'},
                        content: 'СИЛОВАЯ ТЕХНИКА'
                      }
                    ] 
                  }
                ]
              },
              {
                block: 'sub-nav',
                content: [
                  {
                    elem: 'el',
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#'},
                        content: 'Компания'
                      }
                    ]
                  },
                  {
                    elem: 'el',
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#'},
                        content: 'Сервис'
                      }
                    ]
                  },
                  {
                    elem: 'el',
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#'},
                        content: 'Акции'
                      }
                    ]
                  },
                  {
                    elem: 'el',
                    content: [
                      {
                        tag: 'a',
                        attrs: {href: '#'},
                        content: 'Дилеры'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            block: 'info',
            content: [
              {
                elem: 'name',
                content: [
                  {
                    tag: 'h1',
                    content: 'НА НОВОСИБИРСКОЙ'
                  },
                  {
                    tag: 'a',
                    attrs: {href: '#', alt: 'Схема проезда'},
                    content: 'Схема проезда'
                  }
                ]
              },
              {
                elem: 'call',
                content: [
                  {
                    tag: 'div',
                    content: [
                      {
                        tag: 'h2',
                        content: '8 (800) 555-77-11'
                      },
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Написать письмо'},
                        content: 'Написать письмо'
                      }
                    ]
                  },
                  {
                    tag: 'div',
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/call.png'}
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        block: 'minicars',
        content: [
          {
            elem: 'el',
            content: [
              {
                elem: 'name',
                elemMods: {share: 'true'},
                tag: 'h2',
                content: 'Civic 4D'
              },
              {
                tag: 'img',
                attrs: {src: '../../common.blocks/img/min_car_1.png', alt: 'Civic 4D'},
              },
              {
                tag: 'p',
                content: 'От 700 000 руб'
              }
            ]
          },
          {
            elem: 'el',
            content: [
              {
                elem: 'name',
                elemMods: {share: 'true'},
                tag: 'h2',
                content: 'Civic 5D'
              },
              {
                tag: 'img',
                attrs: {src: '../../common.blocks/img/min_car_2.png', alt: 'Civic 5D'},
              },
              {
                tag: 'p',
                content: 'От 599 000 руб'
              }
            ]
          },
          {
            elem: 'el',
            content: [
              {
                elem: 'name',
                elemMods: {share: 'true'},
                tag: 'h2',
                content: 'CR-V 2.0'
              },
              {
                tag: 'img',
                attrs: {src: '../../common.blocks/img/min_car_3.png', alt: 'CR-V 2.0'},
              },
              {
                tag: 'p',
                content: 'От 1 179 000 руб'
              }
            ]
          },
          {
            elem: 'el',
            content: [
              {
                elem: 'name',
                elemMods: {share: 'true'},
                tag: 'h2',
                content: 'CR-V 2.4'
              },
              {
                tag: 'img',
                attrs: {src: '../../common.blocks/img/min_car_4.png', alt: 'CR-V 2.4'},
              },
              {
                tag: 'p',
                content: 'От 1 250 000 руб'
              }
            ]
          },
          {
            elem: 'el',
            content: [
              {
                elem: 'name',
                elemMods: {share: 'true'},
                tag: 'h2',
                content: 'Pilot'
              },
              {
                tag: 'img',
                attrs: {src: '../../common.blocks/img/min_car_5.png', alt: 'Pilot'},
              },
              {
                tag: 'p',
                content: 'От 2 115 000 руб'
              }
            ]
          },
          {
            elem: 'el',
            content: [
              {
                elem: 'name',
                tag: 'h2',
                content: 'Accord'
              },
              {
                tag: 'img',
                attrs: {src: '../../common.blocks/img/min_car_6.png', alt: 'Accord'},
              },
              {
                tag: 'p',
                content: 'От 800 000 руб'
              }
            ]
          },
          {
            elem: 'el',
            content: [
              {
                elem: 'name',
                tag: 'h2',
                content: 'Crosstour'
              },
              {
                tag: 'img',
                attrs: {src: '../../common.blocks/img/min_car_7.png', alt: 'Crosstour'},
              },
              {
                tag: 'p',
                content: 'От 1 650 000 руб'
              }
            ]
          }
        ]
      },
      {
        elem: 'content',
        content: [
          {
            block: 'content',
            content: [
              {
                elem: 'el',
                content: [
                  {
                    elem: 'description',
                    content: [
                      {
                        tag: 'h2',
                        content: 'Civic 4D'
                      },
                      {
                        tag: 'p',
                        content: 'от 590 600 руб.'
                      },
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Посмотреть автомобиль в наличии'},
                        content: 'Посмотреть автомобиль в наличии'
                      }
                    ]
                  },
                  {
                    elem: 'pict',
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/car_1.jpg', alt: 'Civic 4D'}
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'el',
                content: [
                  {
                    elem: 'description',
                    content: [
                      {
                        tag: 'h2',
                        content: 'Civic 5D'
                      },
                      {
                        tag: 'p',
                        content: 'от 680 600 руб.'
                      },
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Посмотреть автомобиль в наличии'},
                        content: 'Посмотреть автомобиль в наличии'
                      }
                    ]
                  },
                  {
                    elem: 'pict',
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/car_2.jpg', alt: 'Civic 5D'}
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'el',
                content: [
                  {
                    elem: 'description',
                    content: [
                      {
                        tag: 'h2',
                        content: 'CR-V 2.0'
                      },
                      {
                        tag: 'p',
                        content: 'от 853 600 руб.'
                      },
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Посмотреть автомобиль в наличии'},
                        content: 'Посмотреть автомобиль в наличии'
                      }
                    ]
                  },
                  {
                    elem: 'pict',
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/car_3.jpg', alt: 'CR-V 2.0'}
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'el',
                content: [
                  {
                    elem: 'description',
                    content: [
                      {
                        tag: 'h2',
                        content: 'CR-V 2.4'
                      },
                      {
                        tag: 'p',
                        content: 'от 1 179 600 руб.'
                      },
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Посмотреть автомобиль в наличии'},
                        content: 'Посмотреть автомобиль в наличии'
                      }
                    ]
                  },
                  {
                    elem: 'pict',
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/car_4.jpg', alt: 'CR-V 2.4'}
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'el',
                content: [
                  {
                    elem: 'description',
                    content: [
                      {
                        tag: 'h2',
                        content: 'PILOT'
                      },
                      {
                        tag: 'p',
                        content: 'от 1 755 600 руб.'
                      },
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Посмотреть автомобиль в наличии'},
                        content: 'Посмотреть автомобиль в наличии'
                      }
                    ]
                  },
                  {
                    elem: 'pict',
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/car_5.jpg', alt: 'PILOT'}
                      }
                    ]
                  }
                ]  
              },
              {
                elem: 'el',
                content: [
                  {
                    elem: 'description',
                    content: [
                      {
                        tag: 'h2',
                        content: 'ACCORD'
                      },
                      {
                        tag: 'p',
                        content: 'от 1 082 600 руб.'
                      },
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Посмотреть автомобиль в наличии'},
                        content: 'Посмотреть автомобиль в наличии'
                      }
                    ]
                  },
                  {
                    elem: 'pict',
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/car_6.jpg', alt: 'ACCORD'}
                      }
                    ]
                  }
                ] 
              },
              {
                elem: 'el',
                content: [
                  {
                    elem: 'description',
                    content: [
                      {
                        tag: 'h2',
                        content: 'Crosstour'
                      },
                      {
                        tag: 'p',
                        content: 'от 1 082 600 руб.'
                      },
                      {
                        tag: 'a',
                        attrs: {href: '#', alt: 'Посмотреть автомобиль в наличии'},
                        content: 'Посмотреть автомобиль в наличии'
                      }
                    ]
                  },
                  {
                    elem: 'pict',
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/car_7.jpg', alt: 'Crosstour'}
                      }
                    ]
                  }
                ] 
              }
            ]
          },
          {
            block: 'sidebar',
            content: [
              {
                elem: 'sidehead',
                content: [
                  {
                    elem: 'el',
                    tag: 'div',
                    content: [
                      {
                        tag: 'p',
                        content: 'ЗАЯВКА НА ПОДБОР АВТОМОБИЛЯ'
                      },
                    ]
                  },
                  {
                    elem: 'el',
                    tag: 'div',
                    content: [
                      {
                        tag: 'p',
                        content: 'ЗАЯВКА НА ТЕСТ-ДРАЙВ'
                      },
                    ]
                  },
                  {
                    elem: 'el',
                    tag: 'div',
                    content: [
                      {
                        tag: 'p',
                        content: 'ЗАЯВКА НА КРУДИТ'
                      },
                    ]
                  }
                ]
              },
              {
                elem: 'sidecontent',
                content: [
                  {
                    tag: 'p',
                    content: 'Оставить Ваши контакты <br/> и мы перезваним в течении <br/> 30 минут'
                  },
                  { 
                    elem: 'form',
                    tag: 'form',
                    content: [
                      { 
                        elem: 'name',
                        tag: 'input',
                        attrs: {type: 'text', name: 'name', placeholder: 'Имя' }
                      },
                      {
                        elem: 'phone',
                        tag: 'input',
                        attrs: {type: 'text', name: 'phone', placeholder: 'Телефон' }
                      },
                      {
                        elem: 'coments',
                        tag: 'input',
                        attrs: {type: 'text', name: 'coments', placeholder: 'Коментарий' }
                      },
                      {
                        elem: 'submit',
                        tag: 'input',
                        attrs: {type: 'submit', value: 'ОТПРАВИТЬ' }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        elem: 'footer-bg',
        content: [
          {
            block: 'footer',
            content: [
              {
                elem: 'menu',
                content: [
                  {
                    tag: 'h3',
                    content: 'АВТОМОБИЛИ'
                  },
                  {
                    elem: 'auto',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                                tag: 'a',
                            attrs: {href: '#', alt: 'Civic 4D'},
                            content: 'Civic 4D'
                          }
                        ]
                      },
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'Civic 5D'},
                            content: 'Civic 5D'
                          }
                        ]
                      },
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'CR-V 2.0'},
                            content: 'CR-V 2.0'
                          }
                        ]
                      },
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'CR-V 2.4'},
                            content: 'CR-V 2.4'
                          }
                        ]
                      },
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'Pilot'},
                            content: 'Pilot'
                          }
                        ]
                      },
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'Acoord'},
                            content: 'Acoord'
                          }
                        ]
                      },
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'Crosstour'},
                            content: 'Crosstour'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'menu',
                content: [
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'АКСЕССУАРЫ'},
                            content: 'АКСЕССУАРЫ'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'НОВОСТИ'},
                            content: 'НОВОСТИ'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'КОМПАНИЯ'},
                            content: 'КОМПАНИЯ'
                          }
                        ]
                      }
                    ]  
                  },
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'СЕРВИС'},
                            content: 'СЕРВИС'
                          }
                        ]
                      }
                    ]  
                  },
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'АКЦИИ'},
                            content: 'АКЦИИ'
                          }
                        ]
                      }
                    ]  
                  },
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'ПРОГРАММЫ'},
                            content: 'ПРОГРАММЫ'
                          }
                        ]
                      }
                    ] 
                  }
                ]
              },
              {
                elem: 'menu',
                content: [
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'ДИЛЕРЫ'},
                            content: 'ДИЛЕРЫ'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'КАК СТАТЬ ДИЛЕРОМ'},
                            content: 'КАК СТАТЬ ДИЛЕРОМ'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'КОНТАКТЫ'},
                            content: 'КОНТАКТЫ'
                          }
                        ]
                      }
                    ]  
                  },
                  {
                    elem: 'el',
                    tag: 'ul',
                    content: [
                      {
                        tag: 'li',
                        content: [
                          {
                            tag: 'a',
                            attrs: {href: '#', alt: 'КАРТА САЙТА'},
                            content: 'КАРТА САЙТА'
                          }
                        ]
                      }
                    ]  
                  },
                ]
              },
              {
                elem: 'media',
                content: [
                  {
                    tag: 'a',
                    attrs: {href: '#'},
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/youtube.png'},
                      }
                    ]
                  },
                  {
                    tag: 'a',
                    attrs: {href: '#'},
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/facebook.png'},
                      }
                    ]
                  },
                  {
                    tag: 'a',
                    attrs: {href: '#'},
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/twitter.png'},
                      }
                    ]
                  },
                  {
                    tag: 'a',
                    attrs: {href: '#'},
                    content: [
                      {
                        tag: 'img',
                        attrs: {src: '../../common.blocks/img/vk.png'},
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'copyrating',
                content: [
                  {
                    elem: 'cpr',
                    content: [
                      {
                        tag: 'p',
                        content: 'Copyright'
                      }
                    ]
                  },
                  {
                    elem: 'project',
                    content: [
                      {
                        tag: 'p',
                        content: '&copy Прект Tradeins.ru'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
});
