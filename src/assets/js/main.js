$(function(){
    $('#upload').on('click', function(){
        let buyer = document.getElementById("buer");
        let amount = document.getElementById("duedate");
        let duedate = document.getElementById("duedate");
        let form = new FormData();
        form.append("buyer", buyer);
        form.append("amount", amount);
        form.append("duedate", duedate);
    
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://facts-africa.herokuapp.com/api/invoices",
          "method": "POST",
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
        };
    
        $.ajax(settings).done(function (response) {
          console.log(response);
        });
      });
    });

