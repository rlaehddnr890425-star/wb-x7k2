// 주소본가 목업 v3 — 중계기 스택: 클릭 = 광고 경유지(go.html) 2단 점프 (실측: wdwd15 외부 새창 113개·팝업 상시 운영)
function gotoSite(url){
  if (!url || url === '#') { return false; }
  location.href = 'go.html?to=' + encodeURIComponent(url);
  return false;
}
function goNow(){ // go.html — 두 번째 클릭: 목적지 새 창 + 뒤로가기
  var u = new URLSearchParams(location.search).get('to') || '#';
  window.open(u, '_blank');
  setTimeout(function(){ history.back(); }, 350);
  return false;
}
window.addEventListener('DOMContentLoaded', function(){
  var e = document.getElementById('epop');
  if (e && (location.search.indexOf('shot=popup') !== -1 || !sessionStorage.getItem('bonga-entry'))) {
    sessionStorage.setItem('bonga-entry', '1');
    e.style.display = 'flex';
  }
  var c = document.getElementById('clock');
  if (c) {
    var tick = function(){ var d = new Date();
      c.textContent = d.getFullYear()+'년 '+(d.getMonth()+1)+'월 '+d.getDate()+'일 '+['일','월','화','수','목','금','토'][d.getDay()]+' '+d.toTimeString().slice(0,8);
    };
    tick(); setInterval(tick, 1000);
  }
  var f = document.getElementById('feed');
  if (!f || f.dataset.done) return; f.dataset.done = '1';
  var pool = [
    ['여기여 또 막히네요 LTE에서만','윤**'],['티비몬5 직관 성공 3연속','김**'],['빠른링크 40분째 사망 목격','anonymous'],
    ['av19 새주소 제보 ㄱ','ㅇㅅㅇ'],['호빵넷 배너 실화냐 광고 8개','현**'],['오유 오늘 글 폭증 지수 80','랭**'],
    ['누누비디오 짭 3개 또 생김 신고','p**'],['스트고 후반전 버퍼링 0','축**'],['뽐뿌 원조 확정 배지 좋네요','초**'],
    ['주소야 접속 4초 걸림 주의보','ㅈㅎ'],['여기여 사칭 yugi-y0 제보','익**'],['본가 랭킹 중계판만 씁니다 ㅎ','ㅁㅊ']
  ];
  var i = 0;
  var add = function(){
    var p = pool[i % pool.length]; i++;
    var li = document.createElement('div'); li.className = 'fi new';
    li.innerHTML = '<b>' + p[1] + '</b> ' + p[0] + ' <span style="float:right;color:#bbb;font-size:9.5px">방금</span>';
    f.insertBefore(li, f.firstChild);
    while (f.children.length > 6) f.removeChild(f.lastChild);
    setTimeout(add, 4000 + Math.random() * 5000);
  };
  setTimeout(add, 2500);
});
function closeEntry(){ var e = document.getElementById('epop'); if (e) e.style.display = 'none'; return false; }
