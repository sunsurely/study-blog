$('#comeback').on('click', () => {
  window.location.href = '/'
})


let selecteds = $('.category:not(hr)');
let selindex = 0;
$(selecteds).each(function (i, item) {
  $(item).on('click', () => {
    let btn = $('#catebtn');
    $(btn).text($(item).text())
    selindex = $(item).is('hr') ? -1 : $(item).index();

  })
})


$('#enter').on('click', function () {
  let password = $('#password').val();
  if (password === null || password !== '0316') {
    alert('잘못된 패스워드입니다!')
    return;
  }

  let title = $('.title').val();
  let textbody = $('#textcontent').val().replace(/(?:\r\n|\r|\n)/g, '<br>').replace(/\s/g, '&nbsp;');
  ;
  let date = new Date().toLocaleDateString();
  let id = `sec${selindex}`;

  let formData = new FormData();
  formData.append("title_give", title);
  formData.append("textbody_give", textbody);
  formData.append("selindex_give", selindex);
  formData.append("date_give", date);
  formData.append("id_give", id);

  fetch('/mypost', { method: "POST", body: formData, }).then((res) => res.json()).then((data) => {

    alert(data["msg"]);
    window.location.reload();
    window.location.href = '/'
  });

})




