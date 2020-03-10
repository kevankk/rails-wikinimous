// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

document.addEventListener('click', () => {
  const title = document.querySelector('#article_title');
  const content = document.querySelector('#article_content');
  const titleHidden = document.querySelector('.title-hidden');
  const contentHidden = document.querySelector('.content-hidden');
  const submit = document.querySelector('.btn')


  if (title.value === '') {
    titleHidden.style.display = 'unset';
  } else {
    titleHidden.style.display = 'none';
  }

  if (content.value === '') {
    contentHidden.style.display = 'unset';
  } else {
    contentHidden.style.display = 'none';
  }

  if (title.value !== '' && content.value !== '') {
    submit.disabled = false;
  }

})

