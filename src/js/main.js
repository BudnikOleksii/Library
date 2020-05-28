import './lib/lib';
import $ from './lib/lib';

$('button').on('click', function() {
    $(this).hide().show().toggleClass('active');
});

$('div').toggleAttribute('value', '100').removeAttribute('value').addAttribute('data', 'sags');