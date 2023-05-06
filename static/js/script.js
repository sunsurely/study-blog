$(document).ready(function () {
  mypost()
});

$(document).on('click', (e) => {
  if ($(e.target).closest('#search > input').length) {
    $('#search').addClass('active');
  } else {
    $('#search').removeClass('active');
  }
})
$(document).on('click', (e) => {
  if ($(e.target).closest('#bell').length) {
    $('#news').addClass('active');
  } else {
    $('#news').removeClass('active');
  }
})




$('#sidebar').on('mouseover', () => {
  $('.scroll').addClass('on');
}).on('mouseout', () => {
  $('.scroll').removeClass('on');
})

const s1_Url = [
  'web', 'sql', 'solution', 'react', 'node'
];
const s2_Url = [
  'python', 'csharp', 'mongo', 'aws', 'linux'
];
const s3_Url = [
  'tail', 'bootstrap', 'ps', 'ai'
];
const s4_Url = [
  'AI', 'meta', 'vr', 'bigdata', 'cloud'
];




$('#side_section_1 li').each(function (i) {
  $(this).on('click', function () {
    window.location.href = s1_Url[i];
  })
})


$('#side_section_2 li').each(function (i) {
  $(this).on('click', function () {
    window.location.href = s2_Url[i];
  })
})
$('#side_section_3 li').each(function (i) {
  $(this).on('click', () => {
    window.location.href = s3_Url[i];
  })
})
$('#side_section_4 li').each(function (i) {
  $(this).on('click', () => {
    window.location.href = s4_Url[i];
  })
})
$('#guestwrite').each(function (i) {
  $(this).on('click', () => {
    window.location.href = 'guest';
  })
})


$('#writepen').on('click', () => {
  window.location.href = 'write'
})



function save_comment() {

  let formData = new FormData();
  formData.append("name_give",);
  formData.append("comment_give",);

  fetch('/guestbook', { method: "POST", body: formData, }).then((res) => res.json()).then((data) => {

    window.location.reload();
  });
}

const s5_click_Url = [...s1_Url, ...s2_Url, ...s3_Url, s4_Url];

function mypost() {
  fetch('/mypost').then((res) => res.json()).then((data) => {

    let rows = data['result'];
    $.each(rows, function (i, item) {
      let temp_html = `
          <div class="concard" onClick='window.location.href="${s5_click_Url[item['category']]}"' style="width: 20rem; 
           height:350px; overflow:hidden">
            <img src="../static/images/${item['category']}.jpeg" style='height:200px;' class="card-img-top" alt="...">
            <div class="card-body" style=" padding:10px; " >
              <h3 class="card-text" style="width:310px" >${item['title'].length > 8 ? item['title'].slice(0, 8) + '...' : item['title']}
              <span style="font-size:14px; float:right; margin-top:20px; margin-right:10px;">${item['date']}</span></h3>
              <p class="card-text" style="margin-bottom:0px; float:left; height:75px; width:298px;  
                 overflow: hidden;text-overflow: ellipsis; display: -webkit-box;
                 -webkit-line-clamp: 3;  -webkit-box-orient: vertical; ">${item['textbody']}</p>
            </div>
          </div>
        `
      $('#maincontents').append(temp_html);

    })


  })

}



