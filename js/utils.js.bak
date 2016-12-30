YUI().use(
  'aui-carousel',
  function(Y) {
    if(Y.one('#Carousel_home_desktop')){
      new Y.Carousel(
      {
        contentBox: '#Carousel_home_desktop',
        height: 250,
        intervalTime: 6
      }
      ).render();
    }

    if(Y.one('#Carousel_home_movil')){
      new Y.Carousel(
      {
        contentBox: '#Carousel_home_movil',
        height: 250,
        intervalTime: 6
      }
      ).render();
    }
  }
);

YUI().use(
  'aui-toggler',
  function(Y) {
    if(Y.one('#login')){
      new Y.Toggler(
      {
        container: '#login',
        content: '.caja_formulario',
        expanded: false,
        header: '.header_1'
      }
      );
    }
  }
  ); 

YUI().use(
  'aui-form-validator',
  function(Y) {
    Y.config.FormValidator.RULES.RUT = function(val, fieldNode, ruleValue) {
      var rut = val
      if (rut.length<9)
        return(false)
      i1=rut.indexOf("-");
      dv=rut.substr(i1+1);
      dv=dv.toUpperCase();
      nu=rut.substr(0,i1);
      cnt=0;
      suma=0;
      for (i=nu.length-1; i>=0; i--)
      {
      dig=nu.substr(i,1);
      fc=cnt+2;
      suma += parseInt(dig)*fc;
      cnt=(cnt+1) % 6;
      }
      dvok=11-(suma%11);
      if (dvok==11) dvokstr="0";
      if (dvok==10) dvokstr="K";
      if ((dvok!=11) && (dvok!=10)) dvokstr=""+dvok;
      if (dvokstr==dv)
      return(true);
      else
      return(false);
    };
    if(Y.one('#myForm')){
      new Y.FormValidator(
      {
        boundingBox: '#myForm',
        fieldStrings: {
          fmlogin_name: {
            required: 'Ingresa RUT',
            RUT: 'Rut incorrecto'
          },
          fmlogin_password: {
            required: 'Ingresa contraseña'
          }
        },
        rules: {
          fmlogin_name: {
            required: true,
            RUT: true
          },
          fmlogin_password: {
            required: true
          }
        }
      }
      );
    }
    if(Y.one('#myForm2')){
      new Y.FormValidator(
      {
        boundingBox: '#myForm2',
        fieldStrings: {
          fmlogin_name: {
            required: 'Ingresa RUT',
            RUT: 'Rut incorrecto'
          },
          fmlogin_password: {
            required: 'Ingresa contraseña'
          }
        },
        rules: {
          fmlogin_name: {
            required: true,
            RUT: true
          },
          fmlogin_password: {
            required: true
          }
        }
      }
      );
    }

    if(Y.one('#myForm3')){
      new Y.FormValidator(
      {
        boundingBox: '#myForm3',
        fieldStrings: {
          fmsolicita_nombre: {
            required: 'Ingresa nombre'
          },
          fmsolicita_apellidos: {
            required: 'Ingresa apellidos'
          },
          fmsolicita_rut: {
            required: 'Ingresa RUT',
            RUT: 'RUT incorrecto'
          },
          fmsolicita_email: {
            required: 'Ingresa e-mail',
            email: 'E-mail inválido'
          },
          fmsolicita_telefono: {
            required: 'Ingresa teléfono',
            digits: 'Ingresa solo números'
          },
          fmsolicita_celular: {
            required: 'Ingresa celular',
            digits: 'Ingresa solo números'
          },
        },
        rules: {
          fmsolicita_nombre: {
            required: true
          },
          fmsolicita_apellidos: {
            required: true
          },
          fmsolicita_rut: {
            required: true,
            RUT: true
          },
          fmsolicita_email: {
            required: true,
            email: true
          },
          fmsolicita_telefono: {
            required: true,
            digits: true
          },
          fmsolicita_celular: {
            required: true,
            digits: true
          },
        }
      }
      );
    }

    if(Y.one('#myForm4')){
      new Y.FormValidator(
      {
        boundingBox: '#myForm4',
        fieldStrings: {
          fmolvidaste_rut: {
            required: 'Ingresa RUT',
            RUT: 'RUT incorrecto'
          },
          fmolvidaste_tarjeta: {
            required: 'Ingresa teléfono',
            digits: 'Ingresa solo números'
          },
          fmolvidaste_version: {
            required: 'Ingresa celular',
          },
          fmolvidaste_documento: {
            required: 'Ingresa celular',
            digits: 'Ingresa solo números'
          },
          fmolvidaste_email: {
            required: 'Ingresa e-mail',
            email: 'E-mail inválido'
          },
        },
        rules: {
          fmolvidaste_rut: {
            required: true,
            RUT: true
          },
          fmolvidaste_tarjeta: {
            required: true,
            digits: true
          },
          fmolvidaste_version: {
            required: true,
          },
          fmolvidaste_documento: {
            required: true,
            digits: true
          },
          fmolvidaste_email: {
            required: true,
            email: true
          },
        }
      }
      );
    }
  }
);

YUI().use(
  'event',
  function(Y){
    if(Y.one("#open-bloque1")){
      Y.one("#open-bloque1").on('click', function(){
        document.getElementById('bloque_2').style.display='none';
        document.getElementById('bloque_1').style.display='block';
      });
    }
    if(Y.one("#open-bloque2")){
      Y.one("#open-bloque2").on('click', function(){
        document.getElementById('bloque_2').style.display='block';
        document.getElementById('bloque_1').style.display='none';
      });
    }
    if(Y.one("#close-bloque1")){
      Y.one("#close-bloque1").on('click', function(){
        document.getElementById('bloque_1').style.display='none';
      });
    }
    if(Y.one("#close-bloque2")){
      Y.one("#close-bloque2").on('click', function(){
        document.getElementById('bloque_2').style.display='none';
      });
    }
  }
);

YUI().use(
    'aui-node',
    function (Y) {
        var navbarButton = Y.one(".btn-navbar");
        var navbarCollapse = Y.one(".nav-collapse");

        navbarButton.on('click', function (e) {
            if (navbarCollapse.hasClass("in")) {
                navbarCollapse.removeClass("in");
                navbarCollapse.setStyle("height", "0px");
            } else {
                navbarCollapse.addClass("in");
                navbarCollapse.setStyle("height", "auto");
            }
        });
    }
);