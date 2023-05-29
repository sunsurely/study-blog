

$(document).ready(function () {

  show_comment();
  guest_comment()
})

function show_comment() {
  $('.contents').empty();
  fetch('/mypost').then((res) => res.json()).then((data) => {
    let rows = data['result'];

    $.each(rows, function (i, item) {

      temp_html = `
        <div id="posttext">
          <h2 id="title">${item.title}</h2>
          <div>
            <p id="content">${item.textbody}</p>
          </div>
        </div>
         <a href='/'>홈으로</a>
        <hr>
        </p>
        `;

      $(`#sec${item.category}`).append(temp_html)

    })
  })
}



$('#enterguest').on('click', function () {


  let guestText = $('#guestTextArea').val().replace(/(?:\r\n|\r|\n)/g, '<br>').replace(/\s/g, '&nbsp;');
  let date = new Date().toLocaleDateString();

  let formData = new FormData();
  formData.append("guestText_give", guestText);
  formData.append("date_give", date);


  fetch('/myguest', { method: "POST", body: formData, }).then((res) => res.json()).then((data) => {

    alert(data["msg"]);
    window.location.reload();
  });

});


function guest_comment() {
  $('#guestbox').empty();
  fetch('/myguest').then((res) => res.json()).then((data) => {
    let rows = data['result'];

    $.each(rows, function (i, item) {

      temp_html = `
      <div id="entermessege">
      <p id="guesttext">${item['guestText']}</p>
      <p id="messegedate">${item['date']}</p>
        `;


      $(`#guestbox`).append(temp_html)

    })
  })
}