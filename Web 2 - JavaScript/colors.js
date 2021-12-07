

    var Links= {
      setColor : function (color) {
          var alist = document.querySelectorAll('a');
          var i = 0;
          while( i < alist.length ){
            alist[i].style.color = color;
            i = i + 1;
          }
      }
    }

    var body = {
      setColor : function (color){
        document.querySelector('body').style.color = color;
        /*  객체의 프로퍼티와 프로퍼티를 구분 할 때는 , 를 찍음 */
      },

      setBackgroundColor : function (color){
        document.querySelector('body').style.backgroundColor = color;
      }

    }


    function nightDayHandler(itself){
      var changeTarget = document.querySelector('body');
      /* 이게 무슨 일을 하는지 잘 생각해보자*/

      if(itself.value === 'night'){
        body.setBackgroundColor('black');
        body.setColor('white');
        itself.value = 'day';

      Links.setColor('powderblue');

      } else {
        body.setBackgroundColor('white');
        body.setColor('black');
        itself.value = 'night';

      Links.setColor('blue');

      }
    }
