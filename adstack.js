// 주소본가 목업 v2 — 클릭전송/광고 스택 (실측 패턴: yugiyu7 외부링크 298개 전부 _blank, 배너 73매, 플로팅 1)
function gotoSite(url){
  var o = document.getElementById('ovl');
  if (!o) { window.open(url, '_blank'); return false; }
  var n = 3, cd = document.getElementById('ovl-cd');
  cd.textContent = n + '초 후 이동';
  o.style.display = 'flex';
  var t = setInterval(function(){
    n--; cd.textContent = n > 0 ? n + '초 후 이동' : '이동 중…';
    if (n <= 0) { clearInterval(t); closeOvl(true, url); }
  }, 1000);
  o.onclick = function(e){ if (e.target === o || e.target.id === 'ovl-skip') closeOvl(true, url); };
  return false;
}
function closeOvl(go, url){
  var o = document.getElementById('ovl');
  o.style.display = 'none';
  if (go && url) window.open(url, '_blank');
  return false;
}
window.addEventListener('DOMContentLoaded', function(){
  var e = document.getElementById('epop');
  if (e && (location.search.indexOf('shot=popup') !== -1 || !sessionStorage.getItem('bonga-entry'))) {
    sessionStorage.setItem('bonga-entry', '1');
    e.style.display = 'flex';
  }
  if (location.search.indexOf('shot=ad') !== -1) {
    var o = document.getElementById('ovl');
    if (o) { o.style.display = 'flex'; document.getElementById('ovl-cd').textContent = '3초 후 이동'; }
  }
});
function closeEntry(){ var e = document.getElementById('epop'); if (e) e.style.display = 'none'; return false; }
