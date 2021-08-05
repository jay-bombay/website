//accordion script
          $(document).ready(function(){
            // var acc = document.getElementsByClassName("accordion");
            // var i;
            //
            // for (i = 0; i < acc.length; i++) {
            //   acc[i].addEventListener("click", function() {
            //     $(this).toggleClass("accordion-active");
            //     // this.classList.toggle("accordion-active");
            //     var panel = this.nextElementSibling;
            //     if (panel.style.maxHeight) {
            //       panel.style.maxHeight = null;
            //     } else {
            //       panel.style.maxHeight = panel.scrollHeight + "px";
            //     }
            //   });
            // }

            $(".accordion").click(function() {
              console.log("clicked");
              var acc1 = $(this).hasClass('accordion-active')
              console.log(acc1);
              $(".accordion").each(function() {
                $(this).removeClass("accordion-active");
                var panel1 = $(this).next()[0];
                console.log(panel1);
                panel1.classList.remove("panel-max");
              });
              if(acc1) {
                $(this).removeClass("accordion-active")
                var panel2 = $(this).next()[0];
                console.log(panel2);
                panel2.classList.remove("panel-max");
              }
              else {
                $(this).addClass("accordion-active")
                var panel3 = $(this).next()[0];
                console.log(panel3);
                panel3.classList.add("panel-max");
              }
            });
        });
