var hostname = window.location.hostname;
var pathname = window.location.pathname;
if(hostname.endsWith('.pages.dev')) {
    window.location.href = 'https://easypoll.bot/wiki' + pathname.replace('/wiki', '');
}