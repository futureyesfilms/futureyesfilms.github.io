/* THE EDIT · Shifin Shajahan · vanilla JS, no trackers */
(function(){
  'use strict';
  var d=document,w=window,root=d.documentElement;
  root.classList.add('js');
  var reduce=w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('no-intro'); /* v8: no countdown intro, the page opens straight to the hero */

  /* Films: exactly these, in this order. ext:true = embedding off, opens on YouTube. */
  var FILMS=[{"id": "5qsmpCZJ7zg", "t": "FADE", "k": "Short horror film", "d": "1:08", "ext": false},
    {"id": "3T-e9hRN0iY", "t": "Canadian Couple’s Engagement", "k": "Engagement film", "d": "3:28", "ext": true},
    {"id": "3aRzQR3Negw", "t": "Futureyes Presents", "k": "Cinematic short", "d": "0:35", "ext": false},
    {"id": "28nfyVCx37c", "t": "Groom’s Night Rave", "k": "Wedding party film", "d": "4:50", "ext": false}];

  /* ---------- VERTICAL CUTS (Instagram reels): add a reel by adding one line here ----------
     id = the code in instagram.com/reel/<id>/ ; k = small label ; t = title ; m = views/month line ; must = featured "MUST WATCH" card.
     Images needed per reel: assets/img/ig/<id>-270.webp, assets/img/ig/<id>-480.webp (9:16 cover) and assets/img/tl/<id>.webp (timeline thumb). */
  var VLOGS=[ {"id": "DaPD8NMu_0B", "k": "Music reel", "t": "Humsafar", "m": "Jul 2026", "must": true},
    {"id": "DHWV_SHREZ_", "k": "Portrait film", "t": "Portrait", "m": "Mar 2025"},
    {"id": "C_eZfzbvOUJ", "k": "Saree portrait", "t": "Draped in Fuchsia", "m": "Sep 2024"},
    {"id": "C-B4Ch_ucDH", "k": "Behind the scenes", "t": "Engagement Shoot, BTS", "m": "Jul 2024"},
    {"id": "Den5ikvOW4o", "k": "Mood reel", "t": "When Afghan Jalebi Hits", "m": "2.8K views · Oct 2026"},
    {"id": "DeGIZh3xeGp", "k": "Nature", "t": "Autumn by the River", "m": "Oct 2026"},
    {"id": "DSuBgRkjlVf", "k": "Toronto vlog", "t": "Toronto’s Most Peaceful Spot", "m": "1.2K views · Dec 2025"},
    {"id": "DWhATGLCKqP", "k": "Life", "t": "Not Perfect, Just Real", "m": "102K views · Mar 2026"},
    {"id": "DeEDAoURSqt", "k": "Travel vlog", "t": "Collecting Moments, Not Miles", "m": "1.9K views · Oct 2026"},
    {"id": "DcV4ehVvnJj", "k": "Travel vlog", "t": "Where History Meets Nature", "m": "2.7K views · Aug 2026"},
    {"id": "DGcCQe8uR9P", "k": "Toronto vlog", "t": "The Heart of the 6ix", "m": "1.3K views · Feb 2025"},
    {"id": "DA-RRJgOmaP", "k": "Music · Canada", "t": "Pasoori Under the Northern Lights", "m": "784 views · Oct 2024"},
    {"id": "DW1LFHVkUFy", "k": "Life", "t": "One Year Later", "m": "4.1K views · Apr 2026"},
    {"id": "DOYCJnVDpq1", "k": "Celebration", "t": "Onam, Canada to Kerala", "m": "2.6K views · Sep 2025"},
    {"id": "DWJqAdjvgpW", "k": "Travel vlog", "t": "Salt Air", "m": "5.5K views · Mar 2026"} ];

  /* ---------- VLOGS (YouTube, long form): add a vlog by adding one line here ----------
     id = YouTube video id ; t = title ; d = duration ; ext = true when YouTube has embedding off (opens on YouTube).
     Images needed: assets/img/yt/<id>-640.webp, assets/img/yt/<id>-1280.webp (16:9) and assets/img/tl/<id>.webp. */
  var JOURNEY=[ {"id": "58WNaBy1ygc", "t": "How I Found the Perfect Student Housing in Canada", "d": "14:13", "ext": true},
    {"id": "0aJhOM5MjKI", "t": "Canada Life Unplugged: Friends, Fun, and My Journey", "d": "12:16", "ext": true},
    {"id": "O_aDQmgqUPk", "t": "Oru Adipoli Onam · Onam Celebration in Canada", "d": "2:14", "ext": true},
    {"id": "yqrM-XD2OLU", "t": "Onam 2026", "d": "2:52", "ext": false},
    {"id": "igCj8ABi5uc", "t": "Don’t Buy a Phone in Canada Without Watching This · Part 2", "d": "24:51", "ext": true} ];
  var PLAY_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>';
  function ytFrame(id,title){
    var m=d.createElement('iframe');
    m.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&rel=0&playsinline=1&modestbranding=1';
    m.title=title+' (YouTube player)';m.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';m.allowFullscreen=true;
    m.referrerPolicy='strict-origin-when-cross-origin';return m;
  }
  (function renderJourney(){
    var box=d.getElementById('journeyList');if(!box)return;
    var e=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')};
    box.innerHTML=JOURNEY.map(function(v,j){
      var im='assets/img/yt/'+v.id,n=j+1<10?'0'+(j+1):''+(j+1);
      return '<a class="jc" href="https://www.youtube.com/watch?v='+e(v.id)+'" target="_blank" rel="noopener" data-j="'+j+'" aria-label="'+(v.ext?'Watch on YouTube: ':'Play: ')+e(v.t)+'">'+
        '<span class="jc__img"><img src="'+im+'-640.webp" srcset="'+im+'-640.webp 640w, '+im+'-1280.webp 1280w" sizes="(max-width: 820px) 84vw, 400px" alt="" width="1280" height="720" loading="lazy" decoding="async">'+
        '<span class="jc__dur">'+e(v.d)+'</span><span class="jc__play">'+PLAY_SVG+'</span></span>'+
        '<span class="jc__info"><span class="jc__n">'+n+'</span><span class="jc__t">'+e(v.t)+'</span><span class="jc__go">'+(v.ext?'Watch on YouTube ↗':'Play here ▸')+'</span></span></a>';
    }).join('');
    Array.prototype.forEach.call(box.querySelectorAll('.jc'),function(a){
      var v=JOURNEY[+a.getAttribute('data-j')];if(v.ext)return;
      a.addEventListener('click',function(ev){ev.preventDefault();var s=a.querySelector('.jc__img');if(s.classList.contains('on'))return;s.classList.add('on');s.appendChild(ytFrame(v.id,v.t))});
    });
  })();
  /* ---------- SELECTS: his best work, to be filled in later ----------
     Add a photo: {"src": "assets/img/selects/<file>.webp", "w": 1200, "h": 1500, "t": "Title", "alt": "What is in the photo"}
     Add a video: {"yt": "<YouTube id>", "t": "Title", "d": "1:23"}  (thumbnail: assets/img/yt/<id>-640.webp)
     While both lists are empty, the section shows a "coming soon" slate with empty frames. */
  var SELECTS_PHOTOS=[];
  var SELECTS_VIDEOS=[];
  (function renderSelects(){
    var box=d.getElementById('selectsBin');if(!box)return;
    var e=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')};
    var items=SELECTS_VIDEOS.map(function(v){return '<a class="sel__it sel__it--v" href="https://www.youtube.com/watch?v='+e(v.yt)+'" target="_blank" rel="noopener"><img src="assets/img/yt/'+e(v.yt)+'-640.webp" alt="" width="640" height="360" loading="lazy" decoding="async"><span class="sel__t">'+e(v.t)+(v.d?' · '+e(v.d):'')+'</span></a>'})
      .concat(SELECTS_PHOTOS.map(function(p){return '<figure class="sel__it"><img src="'+e(p.src)+'" alt="'+e(p.alt||p.t)+'" width="'+(p.w||1200)+'" height="'+(p.h||1500)+'" loading="lazy" decoding="async"><figcaption class="sel__t">'+e(p.t)+'</figcaption></figure>'}));
    if(items.length){box.innerHTML=items.join('');return}
    var f='';for(var i=1;i<=4;i++)f+='<span class="sel__ph" aria-hidden="true"><b>'+(i<10?'0'+i:i)+'S</b></span>';
    box.classList.add('sel--soon');
    box.innerHTML='<div class="sel__slate"><span class="sel__rec"><i></i>COMING SOON</span><p>Selects being graded</p></div><div class="sel__frames">'+f+'</div>';
  })();
  (function score(){
    var a=d.getElementById('scorePlay');if(!a)return;
    a.addEventListener('click',function(ev){ev.preventDefault();if(a.classList.contains('on'))return;a.classList.add('on');a.appendChild(ytFrame(a.getAttribute('data-yt'),'Until I Found You, violin cover'))});
  })();
  (function renderVlogs(){
    var rail=d.getElementById('rail');if(!rail)return;
    var IG='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
        PLAY='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>';
    var e=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;')};
    rail.innerHTML=VLOGS.map(function(v,j){
      var n=j+1<10?'0'+(j+1):''+(j+1),im='assets/img/ig/'+v.id,iv=(v.id==='DaPD8NMu_0B'?'?v=6':'');
      return '<a class="reel'+(v.must?' reel--must':'')+'" href="https://www.instagram.com/reel/'+e(v.id)+'/" target="_blank" rel="noopener" data-reel="'+j+'" aria-label="Watch on Instagram: '+e(v.t)+'">'+
        '<img src="'+im+'-270.webp'+iv+'" srcset="'+im+'-270.webp'+iv+' 270w, '+im+'-480.webp'+iv+' 480w" sizes="(max-width: 820px) 62vw, 300px" alt="" width="480" height="853" loading="lazy" decoding="async">'+
        (v.must?'<span class="reel__badge">Must watch</span>':'')+'<span class="reel__ig">'+IG+'</span><span class="reel__play">'+PLAY+'</span>'+
        '<span class="reel__info"><span class="reel__k">'+e(v.k)+'</span><span class="reel__t">'+e(v.t)+'</span><span class="reel__m">'+e(v.m)+'</span></span><span class="reel__fn">'+n+'</span></a>';
    }).join('');
  })();
  var FPS=24,TOTAL=5*60*FPS;
  var $=function(s,c){return (c||d).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))};
  var scenes=$$('.scene'),tl=$('#timeline'),view=$('#tlView'),track=$('#tlTrack'),ph=$('#playhead'),ruler=$('#tlRuler'),
      tcEl=$('#tc'),nowEl=$('#tlNow'),hudScene=$('#hudScene'),whip=$('#whip'),cursorTc=null;
  var lanes={};$$('.tl__lane').forEach(function(l){lanes[l.getAttribute('data-lane')]=l});
  var films=$('#films'),filmsPin=$('.pin',films),vlogs=$('#vlogs'),vlogsPin=$('.pin',vlogs),strip=$('#strip'),rail=$('#rail'),reels=$$('.reel',rail);
  var poster=$('.open__poster'),copy=$('.open__copy');
  var books=$('#books'),bookEls=$$('.book',books);
  var L={vh:0,max:1,starts:[],ends:[],tops:[],films:{top:0,R:1},vlogs:{top:0,R:1,c0:0,c1:0,sw:0},trackW:0,viewW:0,center:false};
  var clips=[];
  function fmt(fr){fr=Math.max(0,Math.min(TOTAL-1,Math.round(fr)));var f=fr%FPS,s=Math.floor(fr/FPS),m=Math.floor(s/60),h=Math.floor(m/60);s%=60;m%=60;
    return [h,m,s,f].map(function(n){return n<10?'0'+n:''+n}).join(':')}
  function absTop(el){var t=0;while(el){t+=el.offsetTop;el=el.offsetParent}return t}
  function clamp(x,a,b){return x<a?a:x>b?b:x}

  /* ---------- clip model ---------- */
  function addClip(lane,cls,label,thumb,span,jump,extra){
    var b=d.createElement('button');b.type='button';b.className='clip '+cls;
    b.setAttribute('aria-label','Jump to '+label);
    if(thumb){if(/5qsmpCZJ7zg|DaPD8NMu_0B/.test(thumb))thumb+='?v=6';b.style.backgroundImage='url('+thumb+')'}
    var s=d.createElement('span');s.className='clip__lab';s.textContent=label;b.appendChild(s);
    lanes[lane].appendChild(b);
    var c={el:b,span:span,jump:jump,extra:extra};clips.push(c);b._clip=c;return c;
  }
  function sceneIdx(id){for(var i=0;i<scenes.length;i++)if(scenes[i].id===id)return i;return 0}
  function S(i){return [L.starts[i],L.ends[i]]}
  function build(){
        scenes.forEach(function(sc,i){
      addClip('T1','clip--t',sc.getAttribute('data-tl')||sc.getAttribute('data-label'),null,function(){var a=S(i);return (i===0||i===scenes.length-1)?a:[a[0],a[0]+(a[1]-a[0])*.3]},function(){return L.starts[i]+(i?2:0)});
    });
    var o=sceneIdx('open');
    addClip('V1','clip--v','OPEN','assets/img/tl/poster.webp',function(){return S(o)},function(){return 0});
    FILMS.forEach(function(f,k){
      addClip('V1','clip--v',(k+1)+' · '+f.t,'assets/img/tl/'+f.id+'.webp',function(){var F=L.films,a=F.top+k/FILMS.length*F.R,b=F.top+(k+1)/FILMS.length*F.R;if(k===0)a=L.starts[1];if(k===FILMS.length-1)b=L.ends[1];return [a,b]},function(){var F=L.films;return F.top+(k+.5)/FILMS.length*F.R},{film:k});
    });
    var vi=sceneIdx('vlogs');
    reels.forEach(function(r,j){
      var id=(r.querySelector('img').getAttribute('src').match(/ig\/([^-]+(?:-[^-]+)*)-270/)||[])[1];
      addClip('V2','clip--v clip--v2',$('.reel__t',r).textContent,'assets/img/tl/'+id+'.webp',function(){var V=L.vlogs,n=reels.length-1,a=V.top+(j-.5)/n*V.R,b=V.top+(j+.5)/n*V.R;if(j===0)a=L.starts[vi];if(j===n)b=L.ends[vi];return [a,b]},function(){var V=L.vlogs;return V.top+j/(reels.length-1)*V.R},{reel:j});
    });
    var ji=sceneIdx('journey'),jcs=$$('.jc');
    jcs.forEach(function(c,k){var v=JOURNEY[k];
      addClip('V1','clip--v',v.t,'assets/img/tl/'+v.id+'.webp',function(){var a=S(ji),n=jcs.length;return [a[0]+(a[1]-a[0])*k/n,a[0]+(a[1]-a[0])*(k+1)/n]},function(){return L.starts[ji]+L.vh*.4});
    });
    var mi=sceneIdx('strings');
    addClip('V1','clip--v','UNTIL I FOUND YOU · VIOLIN','assets/img/tl/hQ0sMsuce8I.webp',function(){return S(mi)},function(){return L.starts[mi]+L.vh*.4});
    var xi=sceneIdx('selects');
    addClip('V1','clip--g','SELECTS · COMING SOON',null,function(){return S(xi)},function(){return L.starts[xi]+L.vh*.4});
    var bi=sceneIdx('books');
    bookEls.forEach(function(b,k){
      var id=b.getAttribute('href').split('/dp/')[1];
      addClip('V1','clip--v',$('.book__t',b).textContent,'assets/img/tl/'+id+'.webp',function(){var a=S(bi),n=bookEls.length;return [a[0]+(a[1]-a[0])*k/n,a[0]+(a[1]-a[0])*(k+1)/n]},function(){return L.starts[bi]+L.vh*.42},{book:k});
    });
    var abi=sceneIdx('about'),two=$('.two');
    addClip('V1','clip--v','THE STORY','assets/img/tl/p25.webp',function(){var a=S(abi);return [a[0],absTop(two)-L.vh*.4]},function(){return L.starts[abi]+L.vh*.4});
    addClip('V2','clip--v clip--v2','TWO WORLDS · DRILLING & CV','assets/img/tl/p12.webp',function(){return [absTop(two)-L.vh*.4,L.ends[abi]]},function(){return absTop(two)-L.vh*.2});
    var si=sceneIdx('services');
    addClip('V1','clip--v','SERVICES','assets/img/tl/p01.webp',function(){return S(si)},function(){return L.starts[si]+L.vh*.4});
    var gi=sceneIdx('notes');
    if(scenes[gi]&&scenes[gi].id==='notes')addClip('V1','clip--g','GUESTBOOK · NOTES',null,function(){return S(gi)},function(){return L.starts[gi]+L.vh*.4});
    var ci=sceneIdx('credits');
    addClip('V1','clip--g','CREDITS · CONTACT',null,function(){return S(ci)},function(){return L.starts[ci]+L.vh*.4});
  }

  /* ---------- layout ---------- */
  function measure(){
    L.vh=w.innerHeight;
    // vlogs travel
    if(reels.length){
      var first=reels[0],last=reels[reels.length-1];
      L.vlogs.c0=first.offsetLeft+first.offsetWidth/2;L.vlogs.c1=last.offsetLeft+last.offsetWidth/2;
      var travel=Math.max(400,L.vlogs.c1-L.vlogs.c0);
      if(Math.abs(travel-(L._travel||0))>2){L._travel=travel;vlogs.style.setProperty('--travel',Math.round(travel)+'px')}
      L.vlogs.sw=strip.clientWidth;
    }
    var docH=d.documentElement.scrollHeight;L.max=Math.max(1,docH-L.vh);
    L.tops=scenes.map(absTop);
    L.starts=L.tops.map(function(t,i){return i===0?0:clamp(t-L.vh*.4,0,L.max)});
    L.ends=L.starts.map(function(s,i){return i<scenes.length-1?L.starts[i+1]:L.max});
    L.films.top=absTop(filmsPin);L.films.R=Math.max(1,filmsPin.offsetHeight-L.vh);
    L.vlogs.top=absTop(vlogsPin);L.vlogs.R=Math.max(1,vlogsPin.offsetHeight-L.vh);
    var dr=d.getElementById('drilling');L.drillTop=dr?absTop(dr)-L.vh*.45:1e9;
    L.viewW=view.clientWidth;
    var phone=w.innerWidth<=820;
    L.center=phone;
    L.trackW=phone?Math.round(docH/L.vh*120):L.viewW;
    track.style.width=L.trackW+'px';
    clips.forEach(function(c){var s=c.span(),a=clamp(s[0]/L.max,0,1),b=clamp(s[1]/L.max,0,1);
      c.a=a;c.b=b;c.el.style.left=(a*100)+'%';c.el.style.width=Math.max(.2,(b-a)*100)+'%';
      c.el.hidden=b-a<=0.0005});
    // ruler: label every 30s; markers at scene starts
    ruler.textContent='';
    var step=phone?15:30;
    for(var t=0;t<=300;t+=step){var sp=d.createElement('span');sp.style.left=(t/300*100)+'%';sp.textContent=fmt(t*FPS).slice(3,8);ruler.appendChild(sp)}
    L.starts.forEach(function(s,i){if(!i)return;var m=d.createElement('i');m.className='tl__mk';m.style.left=(s/L.max*100)+'%';ruler.appendChild(m)});
    L.last=-1;render(true);
  }

  /* ---------- per-frame render ---------- */
  var cur={scene:-1,film:-1,reel:-1,tc:''},ticking=false,lastWhip=0;
  function render(force){
    ticking=false;
    var y=w.scrollY||w.pageYOffset,p=clamp(y/L.max,0,1);
    if(!force&&p===L.last)return;L.last=p;
    // timeline
    if(L.center){track.style.transform='translate3d('+(L.viewW/2-p*L.trackW)+'px,0,0)';ph.style.transform='translate3d('+(L.viewW/2)+'px,0,0)'}
    else{track.style.transform='none';ph.style.transform='translate3d('+(p*L.trackW)+'px,0,0)'}
    var tc=fmt(p*(TOTAL-1));if(tc!==cur.tc){cur.tc=tc;tcEl.textContent=tc;if(cursorTc)cursorTc.textContent=tc}
    // hero parallax (only while the opening is on screen)
    var hoff=y>L.vh*1.05;if(hoff!==L.hoff){L.hoff=hoff;root.classList.toggle('hero-off',hoff)}
    if(y<L.vh*1.1&&!reduce){var hq=y/L.vh;poster.style.transform='translate3d(0,'+(y*.1).toFixed(1)+'px,0)';copy.style.transform='translate3d(0,'+(y*-.06).toFixed(1)+'px,0)';copy.style.opacity=String(Math.max(0,1-hq*1.1).toFixed(3));L.heroReset=false}
    else if(!L.heroReset){L.heroReset=true;copy.style.opacity='0'}
    // scene
    var si=0;for(var i=0;i<L.starts.length;i++){if(y>=L.starts[i]-1)si=i}
    if(si!==cur.scene){setScene(si,cur.scene!==-1)}
    var ck=scenes[si].id;if(ck==='about'&&y>=L.drillTop)ck='drilling';else if(ck==='services'||ck==='credits')ck='';setChip(ck);
    // films
    var F=L.films,fq=clamp((y-F.top)/F.R,0,.9999),fk=Math.floor(fq*FILMS.length);
    if(fk!==cur.film)setFilm(fk);
    // vlogs
    var V=L.vlogs,vq=clamp((y-V.top)/V.R,0,1),cx=V.c0+vq*(V.c1-V.c0);
    rail.style.transform='translate3d('+(V.sw/2-cx)+'px,0,0)';
    var rk=Math.round(vq*(reels.length-1));if(rk!==cur.reel)setReel(rk);
    // clips under playhead
    for(var c=0;c<clips.length;c++){var cl=clips[c],on=p>=cl.a&&p<cl.b;if(on!==cl.on){cl.on=on;cl.el.classList.toggle('is-on',on)}}
  }
  var scrT=0,scrOn=false;function scrEnd(){scrOn=false;root.classList.remove('is-scrolling')}
  function onScroll(){if(!ticking){ticking=true;w.requestAnimationFrame(function(){render(false)})}
    if(!scrOn){scrOn=true;root.classList.add('is-scrolling')}clearTimeout(scrT);scrT=setTimeout(scrEnd,180)}

  function setScene(i,animate){
    var prev=cur.scene;cur.scene=i;var sc=scenes[i],lab=sc.getAttribute('data-label');
    hudScene.textContent=lab;nowEl.textContent=lab;if(animate&&prev!==i){try{d.dispatchEvent(new CustomEvent('edit:scene'))}catch(e){}}
    sc.classList.remove('is-live');w.requestAnimationFrame(function(){w.requestAnimationFrame(function(){sc.classList.add('is-live')})});
    if(animate&&!reduce&&!dragging){
      var now=Date.now();
      if(now-lastWhip>380){lastWhip=now;whip.classList.remove('go');w.requestAnimationFrame(function(){whip.classList.add('go')})}
    }
  }

  /* ---------- films monitor ---------- */
  var layers=$$('.mon__layer'),binClips=$$('.bin__clip'),stage=$('#stage'),monTitle=$('#monTitle'),monKind=$('#monKind'),monYt=$('#monYt'),
      monBtn=$('#monBtn'),monPlay=$('#monPlay'),filmTake=$('#filmTake'),rec=$('.mon__rec'),amb=$('#monAmb');
  function stopFilm(){if(stage.classList.contains('on')){stage.textContent='';stage.classList.remove('on')}}
  function setFilm(k){
    var first=cur.film===-1;cur.film=k;var f=FILMS[k];stopFilm();
    layers.forEach(function(l,i){var on=i===k;l.classList.toggle('is-on',on);if(on&&!first&&!reduce){l.classList.remove('cut-in');void l.offsetWidth;l.classList.add('cut-in')}});
    binClips.forEach(function(b,i){b.classList.toggle('is-on',i===k);if(i===k)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')});
    monTitle.textContent=f.t;monKind.textContent=f.k+' · '+f.d;filmTake.textContent=k+1;
    rec.lastChild.textContent=f.d;
    if(amb)amb.style.backgroundImage='url(assets/img/work/'+f.id+'-640.webp'+(f.id==='5qsmpCZJ7zg'?'?v=6':'')+')';
    monYt.href='https://www.youtube.com/watch?v='+f.id;
    monBtn.lastChild.textContent=f.ext?'Watch on YouTube ↗':'Play film';
    monPlay.setAttribute('aria-label',(f.ext?'Watch on YouTube: ':'Play ')+f.t);
  }
  function playFilm(){
    var f=FILMS[cur.film<0?0:cur.film];
    if(f.ext){w.open('https://www.youtube.com/watch?v='+f.id,'_blank','noopener');return}
    var m=d.createElement('iframe');
    m.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(f.id)+'?autoplay=1&rel=0&playsinline=1&modestbranding=1';
    m.title=f.t+' (YouTube player)';m.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';m.allowFullscreen=true;
    m.referrerPolicy='strict-origin-when-cross-origin';
    stage.textContent='';stage.appendChild(m);stage.classList.add('on');
  }
  monBtn.addEventListener('click',playFilm);monPlay.addEventListener('click',playFilm);
  binClips.forEach(function(b,k){b.addEventListener('click',function(e){
    e.preventDefault();
    if(cur.film===k&&nearFilms()){playFilm();return}
    go(L.films.top+(k+.5)/FILMS.length*L.films.R);
  })});
  function nearFilms(){var y=w.scrollY;return y>=L.films.top-10&&y<=L.films.top+L.films.R+10}

  /* ---------- vlogs ---------- */
  function setReel(k){cur.reel=k;reels.forEach(function(r,i){r.classList.toggle('is-on',i===k)});var t=$('#reelTake');if(t)t.textContent=k+1}

  /* ---------- navigation ---------- */
  function go(y,instant){w.scrollTo({top:Math.round(clamp(y,0,L.max)),behavior:(instant||reduce)?'auto':'smooth'})}
  $$('[data-jump]').forEach(function(a){a.addEventListener('click',function(e){
    var id=a.getAttribute('data-jump');e.preventDefault();
    var t=d.getElementById(id);if(!t)return;
    if(id==='open')go(0);else go(absTop(t)+(id==='films'?2:0)-(t.classList.contains('scene')?0:hudH()+14));
  })});
  function hudH(){var hd=$('.hud');return hd?hd.offsetHeight:0}
  /* ---------- shortcut chips: highlight the section on screen ---------- */
  var chipRow=$('.chips__row'),chipEls=$$('[data-chip]'),curChip='';
  function setChip(key){
    if(key===curChip)return;curChip=key;var on=null;
    chipEls.forEach(function(c){var a=c.getAttribute('data-chip')===key;c.classList.toggle('is-on',a);if(a){on=c;c.setAttribute('aria-current','true')}else c.removeAttribute('aria-current')});
    if(on&&chipRow){var l=on.offsetLeft,r=l+on.offsetWidth,vl=chipRow.scrollLeft,vw=chipRow.clientWidth;
      if(l<vl+8||r>vl+vw-8)chipRow.scrollTo({left:Math.max(0,l-vw/2+on.offsetWidth/2),behavior:reduce?'auto':'smooth'})}
  }
  function jumpClip(c){
    go(c.jump());
    if(c.extra&&c.extra.book!=null&&w.innerWidth<=820){var b=bookEls[c.extra.book],box=$('.books');box.scrollTo({left:b.offsetLeft-box.offsetLeft-18,behavior:reduce?'auto':'smooth'})}
  }

  /* ---------- timeline scrub ---------- */
  var dragging=false,ds=null,scrubQ=false,scrubY=0;
  var tlHint=d.getElementById('tlHint');function hideTlHint(){if(tlHint&&!tlHint.classList.contains('is-gone')){tlHint.classList.add('is-gone')}}
  if(tlHint){setTimeout(hideTlHint,6500);tlHint.addEventListener('click',hideTlHint)}
  view.addEventListener('pointerdown',function(e){
    if(e.button>0)return;
    ds={x:e.clientX,y:e.clientY,p:clamp((w.scrollY)/L.max,0,1),moved:false,id:e.pointerId,target:e.target};
  });
  view.addEventListener('pointermove',function(e){
    if(!ds||e.pointerId!==ds.id)return;
    var dx=e.clientX-ds.x;
    if(!ds.moved){if(Math.abs(dx)<6)return;if(Math.abs(e.clientY-ds.y)>Math.abs(dx)&&e.pointerType!=='mouse'){ds=null;return}
      ds.moved=true;dragging=true;tl.classList.add('is-drag');try{view.setPointerCapture(e.pointerId)}catch(_){}}
    var np=L.center?ds.p-dx/L.trackW:ds.p+dx/L.trackW;scrubY=Math.round(clamp(np,0,1)*L.max);
    if(!scrubQ){scrubQ=true;w.requestAnimationFrame(function(){scrubQ=false;w.scrollTo(0,scrubY)})}
    hideTlHint();
  });
  function end(e){
    if(!ds)return;var s=ds;ds=null;
    if(dragging){dragging=false;tl.classList.remove('is-drag');return}
    var btn=s.target.closest&&s.target.closest('.clip');
    if(btn&&btn._clip){jumpClip(btn._clip);return}
    if(!L.center){var r=view.getBoundingClientRect();go(clamp((e.clientX-r.left)/L.trackW,0,1)*L.max)}
  }
  view.addEventListener('pointerup',end);
  view.addEventListener('pointercancel',function(){ds=null;dragging=false;tl.classList.remove('is-drag')});
  // keyboard: clips are buttons
  view.addEventListener('click',function(e){if(e.detail===0){var b=e.target.closest('.clip');if(b&&b._clip)jumpClip(b._clip)}});
  // desktop wheel over timeline scrubs horizontally
  view.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)>Math.abs(e.deltaY)){e.preventDefault();w.scrollBy(0,e.deltaX*3)}},{passive:false});

  /* ---------- cursor ---------- */
  var cursor=$('#cursor');
  if(cursor&&w.__editCursor&&w.matchMedia('(hover: hover) and (pointer: fine)').matches){
    var mx=0,my=0,cq=false;
    w.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;
      if(!root.classList.contains('has-cursor'))root.classList.add('has-cursor');
      if(!cq){cq=true;w.requestAnimationFrame(function(){cq=false;cursor.style.transform='translate3d('+mx+'px,'+my+'px,0)'})}
    },{passive:true});
    d.addEventListener('mouseover',function(e){cursor.classList.toggle('is-link',!!(e.target.closest&&e.target.closest('a,button,.tl__view')))});
    d.addEventListener('mouseleave',function(){cursor.classList.add('is-off')});
    d.addEventListener('mouseenter',function(){cursor.classList.remove('is-off')});
    // iframes swallow the mouse: hide crosshair over the playing film
    stage.addEventListener('mouseenter',function(){cursor.classList.add('is-off')});
    stage.addEventListener('mouseleave',function(){cursor.classList.remove('is-off')});
  }

  /* ---------- boot ---------- */
  build();measure();
  w.addEventListener('scroll',onScroll,{passive:true});
  var rt;w.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(measure,120)});
  w.addEventListener('load',measure);
  if(d.fonts&&d.fonts.ready)d.fonts.ready.then(measure);
  if('ResizeObserver' in w){var ro=new ResizeObserver(function(){clearTimeout(rt);rt=setTimeout(measure,120)});ro.observe($('#main'))}
})();

/* ---------- SFX v8: calm, quiet WebAudio sounds (no files). ON by default after the first tap, mute with the header button ----------
   Soft sine/triangle voices, smooth attack, natural decay, gentle low-pass and a short generated reverb tail.
   Taps: a soft glassy pluck on a pentatonic note. Section enter: a faint airy breath. First tap: one warm chime.
   At most one sound every 400 ms. */
(function(){
  'use strict';
  var d=document,w=window,KEY='edit-sfx',btn=d.getElementById('sfxBtn'),st=d.getElementById('sfxState');
  var AC=w.AudioContext||w.webkitAudioContext;
  var PENTA=[523.25,587.33,659.25,783.99,880.00,1046.50]; /* C major pentatonic */

  /* the sound engine: builds a quiet chain on any (Offline)AudioContext */
  function Engine(c,volume){
    var sr=c.sampleRate;
    var master=c.createGain();master.gain.value=volume==null?0.075:volume;
    var lp=c.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3600;lp.Q.value=0.5;
    var dry=c.createGain();dry.gain.value=1;
    var wet=c.createGain();wet.gain.value=0.22;
    var verb=c.createConvolver();
    /* short generated impulse: 1.1 s of soft decaying stereo noise, darkened over time */
    var il=Math.floor(sr*1.1),ir=c.createBuffer(2,il,sr);
    for(var ch=0;ch<2;ch++){var x=ir.getChannelData(ch),prev=0;for(var i=0;i<il;i++){var k=i/il,a=0.25+0.7*k;prev=prev*a+(Math.random()*2-1)*(1-a);x[i]=prev*Math.pow(1-k,2.6)}}
    verb.buffer=ir;
    var lim=c.createDynamicsCompressor();lim.threshold.value=-18;lim.knee.value=12;lim.ratio.value=4;lim.attack.value=0.005;lim.release.value=0.25;
    master.connect(lp);lp.connect(dry);lp.connect(verb);verb.connect(wet);dry.connect(lim);wet.connect(lim);lim.connect(c.destination);
    var nl=Math.floor(sr*1.2),nb=c.createBuffer(1,nl,sr),nd=nb.getChannelData(0);for(var j=0;j<nl;j++)nd[j]=Math.random()*2-1;
    function env(g,t,peak,att,dec){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(peak,t+att);g.gain.setTargetAtTime(0,t+att,dec/4.5)}
    function voice(t,f,type,peak,att,dec,det){
      var o=c.createOscillator();o.type=type;o.frequency.setValueAtTime(f,t);if(det)o.detune.value=det;
      var g=c.createGain();env(g,t,peak,att,dec);o.connect(g);g.connect(master);o.start(t);o.stop(t+att+dec+0.1);
    }
    return {
      /* soft glassy pluck: sine + quiet octave + faint triangle body, 12 ms attack, ~450 ms decay */
      pluck:function(t,f){
        voice(t,f,'sine',0.5,0.012,0.45);
        voice(t,f*2,'sine',0.09,0.010,0.22);
        voice(t,f/2,'triangle',0.06,0.018,0.3);
      },
      /* one warm chime: low fundamental, soft fifth and octave, slightly detuned for warmth */
      chime:function(t){
        var f=392.00;
        voice(t,f,'sine',0.34,0.018,1.1,-3);
        voice(t,f,'sine',0.16,0.018,1.0,4);
        voice(t,f*1.5,'sine',0.10,0.020,0.7);
        voice(t,f*2,'sine',0.055,0.015,0.5);
        voice(t,f*3.01,'sine',0.02,0.012,0.3);
      },
      /* faint airy breath: low-passed noise, slow swell in and out */
      breath:function(t){
        var s=c.createBufferSource();s.buffer=nb;
        var bp=c.createBiquadFilter();bp.type='bandpass';bp.Q.value=0.7;bp.frequency.setValueAtTime(700,t);bp.frequency.linearRampToValueAtTime(1100,t+0.5);bp.frequency.linearRampToValueAtTime(800,t+0.95);
        var lp2=c.createBiquadFilter();lp2.type='lowpass';lp2.frequency.value=1600;
        var g=c.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(0.3,t+0.38);g.gain.linearRampToValueAtTime(0,t+0.95);
        s.connect(bp);bp.connect(lp2);lp2.connect(g);g.connect(master);s.start(t);s.stop(t+1.0);
      }
    };
  }
  w.__editSfxEngine=Engine; /* used for offline previews */

  if(!btn)return;
  if(!AC){btn.hidden=true;return}
  var on=true;try{on=localStorage.getItem(KEY)!=='0'}catch(e){}
  var ctx=null,eng=null,unlocked=false,introPlayed=false,last=0,lastBreath=0,lastNote=-1;
  var icon=btn.querySelector('.hud__sfxi');
  function build(){
    if(ctx)return ctx;
    try{ctx=new AC();eng=Engine(ctx,0.075)}catch(e){ctx=null;eng=null;return null}
    return ctx;
  }
  /* must run inside a user gesture: resume + play a silent buffer (iOS / Android Chrome unlock) */
  function unlockNow(){
    var c=build();if(!c)return null;
    try{if(c.state!=='running'&&c.resume){var p=c.resume();if(p&&p.catch)p.catch(function(){})}}catch(e){}
    if(!unlocked){
      try{var b=c.createBuffer(1,1,22050),s=c.createBufferSource();s.buffer=b;s.connect(c.destination);s.start(0);unlocked=true}catch(e){}
    }
    return c;
  }
  function ready(){return on&&ctx&&eng&&ctx.state==='running'}
  /* one sound per 400 ms */
  function gate(){var n=Date.now();if(n-last<400)return false;last=n;return true}
  function play(fn){if(!ready()||!gate())return;try{fn(ctx.currentTime+0.01)}catch(e){}}
  function tap(){
    play(function(t){var i;do{i=Math.floor(Math.random()*PENTA.length)}while(i===lastNote&&PENTA.length>1);lastNote=i;eng.pluck(t,PENTA[i])});
  }
  function chime(){play(function(t){eng.chime(t)})}
  function breath(){var n=Date.now();if(n-lastBreath<2500)return;if(!ready())return;lastBreath=n;play(function(t){eng.breath(t)})}
  function after(c,fn){if(c.state==='running')fn();else if(c.resume){try{c.resume().then(fn,function(){})}catch(e){}}}
  function paint(){
    btn.setAttribute('aria-pressed',on?'true':'false');
    if(icon)icon.textContent=on?'\uD83D\uDD0A':'\uD83D\uDD07';
    if(st)st.textContent=on?' on':' off';
    btn.setAttribute('aria-label','Sound effects '+(on?'on':'off'));
    btn.title=on?'Sound on (tap to mute)':'Sound off (tap to turn on)';
  }
  paint();
  btn.addEventListener('click',function(e){
    e.stopPropagation();
    on=!on;try{localStorage.setItem(KEY,on?'1':'0')}catch(err){}
    paint();
    if(on){var c=unlockNow();if(c)after(c,function(){introPlayed=true;last=0;chime()})}
  });
  /* the first tap anywhere arms audio and plays one soft warm chime */
  function gesture(e){
    if(!on)return;
    var c=unlockNow();if(!c)return;
    if(!introPlayed&&!(e&&e.target&&e.target.closest&&e.target.closest('#sfxBtn'))){
      after(c,function(){if(introPlayed||!ready())return;introPlayed=true;last=0;chime()});
    }
  }
  ['pointerdown','pointerup','touchend','mousedown','click','keydown'].forEach(function(ev){
    d.addEventListener(ev,gesture,{passive:true,capture:true});
  });
  /* taps on chips, film clips, cards and buttons */
  var TAPS='.chip,.bin__clip,.mon__actions .btn,.reel,.jc,.call,.book,.neg,.still,.score a,.score button,.sel a,.sel button,.btn,.clip,.contact__btns a,.hud__wa,.brand,[data-jump]';
  d.addEventListener('click',function(e){
    var el=e.target&&e.target.closest?e.target.closest(TAPS):null;
    if(el&&el!==btn)tap();
  },true);
  /* section enters: a faint breath */
  /* section-change sound removed per SHIFIN */
  w.__editSfx={state:function(){return {on:on,ctx:ctx?ctx.state:'none',intro:introPlayed}},tap:function(){if(!on)return;var c=unlockNow();if(!c)return;after(c,function(){last=0;tap()})}};
})();

/* ---------- v5 premium layer: reveals, film-gate wipe, card press ---------- */
(function(){
  'use strict';
  var d=document,w=window;
  var reduce=w.matchMedia&&w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* touch: enable :active on iOS and add a short press state for the glow */
  var CARDS='.neg,.jc,.reel';
  d.addEventListener('touchstart',function(){},{passive:true});
  d.addEventListener('pointerdown',function(e){
    var el=e.target&&e.target.closest?e.target.closest(CARDS):null;if(!el)return;
    el.classList.add('is-press');setTimeout(function(){el.classList.remove('is-press')},320);
  },{passive:true});
  if(reduce)return;
  /* section reveals */
  var SINGLE='.scene:not(.scene--open) :is(.slate,.h2,.h3,.tagline,.follow,.jr,.score,.sel,.books,.story,.two__txt,.svc,.contact,.gb__form,.gb__wall)';
  var STAG='.scene:not(.scene--open) :is(.sheet>.neg,.subs>li)';
  var els=[];
  try{els=[].slice.call(d.querySelectorAll(SINGLE+','+STAG))}catch(e){els=[]}
  if(els.length&&'IntersectionObserver' in w){
    var vh=w.innerHeight||800;
    els.forEach(function(el){
      var r=el.getBoundingClientRect();
      if(r.top<vh*.92&&r.bottom>0)return; /* already on screen: leave it be */
      var p=el.parentElement,i=0;
      if(el.matches(STAG)){i=[].indexOf.call(p.children,el)}
      el.style.setProperty('--rd',Math.min(i*0.07,0.42)+'s');
      el.classList.add('rv');
    });
    var io=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(!en.isIntersecting)return;var el=en.target;io.unobserve(el);
        el.classList.add('is-in');
        setTimeout(function(){el.classList.add('rv-done')},1700);
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:0.06});
    els.forEach(function(el){if(el.classList.contains('rv'))io.observe(el)});
    /* horizontal strips: reveal items that arrive by swiping too */
  }
  /* film-gate / letterbox wipe on each scene change */
  var gate=d.createElement('div');gate.className='gate';gate.setAttribute('aria-hidden','true');
  gate.innerHTML='<i class="gate__t"></i><i class="gate__b"></i>';
  d.body.appendChild(gate);
  var last=0;
  d.addEventListener('edit:scene',function(){
    var n=Date.now();if(n-last<700)return;last=n;
    gate.classList.remove('go');void gate.offsetWidth;gate.classList.add('go');
  });
})();


/* ---------- v10 THE GUESTBOOK: notes on the reel ----------
   Calls the API by absolute URL so the same front-end works on any host the API allows (CORS). Everything is rendered with textContent. */
(function(){
  'use strict';
  var d=document,w=window,API='https://shifin-edit.sites.tab.bot/api/notes';
  var form=d.getElementById('gbForm');if(!form)return;
  var list=d.getElementById('gbList'),empty=d.getElementById('gbEmpty'),more=d.getElementById('gbMore'),count=d.getElementById('gbCount'),
      nameEl=d.getElementById('gbName'),msgEl=d.getElementById('gbMsg'),roleEl=d.getElementById('gbRole'),hp=d.getElementById('gbHp'),
      send=d.getElementById('gbSend'),status=d.getElementById('gbStatus'),cnt=d.getElementById('gbCnt');
  var token=null,tokenAt=0,notes=[],shown=6,busy=false,loaded=false;
  var HINT=status.textContent;
  function say(t,k){status.textContent=t;status.className='gb__status'+(k?' is-'+k:'')}
  function rel(ms){
    var s=Math.max(0,(Date.now()-ms)/1000);
    if(s<60)return 'just now';
    var m=Math.floor(s/60);if(m<60)return m+' min ago';
    var h=Math.floor(m/60);if(h<24)return h+' h ago';
    var dd=Math.floor(h/24);if(dd===1)return 'yesterday';if(dd<7)return dd+' days ago';
    try{return new Date(ms).toLocaleDateString(undefined,{month:'short',day:'numeric',year:dd>300?'numeric':undefined})}catch(e){return ''}
  }
  function el(tag,cls,txt){var e=d.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
  function card(n,i,total,isNew){
    var li=el('li','gb__note'+(isNew?' is-new':''));
    li.appendChild(el('span','gb__no',String(total-i).padStart(3,'0')));
    if(n.role)li.appendChild(el('span','gb__role',n.role));
    li.appendChild(el('p','gb__who',n.name));
    li.appendChild(el('p','gb__msg','\u201C'+n.message+'\u201D'));
    var t=el('time','gb__when',rel(n.at));try{t.dateTime=new Date(n.at).toISOString()}catch(e){}
    li.appendChild(t);return li;
  }
  function paint(newId){
    list.textContent='';
    var n=notes.length;
    empty.hidden=n>0;
    count.textContent=n?(n===1?'1 note on the reel':n+' notes on the reel'):'Notes from viewers';
    notes.slice(0,shown).forEach(function(x,i){list.appendChild(card(x,i,n,x.id===newId))});
    more.hidden=n<=shown;
  }
  function load(){
    return fetch(API,{method:'GET',mode:'cors',credentials:'omit',cache:'no-store'}).then(function(r){return r.json()}).then(function(j){
      if(!j||!j.ok)throw new Error('bad');
      token=j.token;tokenAt=Date.now();notes=j.notes||[];loaded=true;paint();
    }).catch(function(){if(!loaded){empty.textContent='Notes are taking a moment to load. You can still leave yours.'}});
  }
  more.addEventListener('click',function(){shown+=10;paint()});
  function upd(){var l=[].slice.call(msgEl.value).length;cnt.textContent=l+' / 280';cnt.classList.toggle('is-near',l>250)}
  msgEl.addEventListener('input',upd);upd();
  var URLISH=/(https?:\/\/|www\.|\b[a-z0-9-]{2,}\.(com|net|org|io|ly|me|co|in|ru|xyz|info|biz|top|site|online|link|app|ca|uk|us|gg|tv|shop|store|live|dev)\b|[\w.+-]+@[\w-]+\.[a-z]{2,})/i;
  function post(body,retried){
    return fetch(API,{method:'POST',mode:'cors',credentials:'omit',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
      .then(function(r){return r.json().then(function(j){return {s:r.status,j:j}},function(){return {s:r.status,j:null}})})
      .then(function(x){
        if(x.j&&x.j.error==='token_expired'&&!retried){return load().then(function(){body.token=token;return post(body,true)})}
        return x;
      });
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();if(busy)return;
    var name=nameEl.value.trim(),msg=msgEl.value.trim();
    if(!name){say('Please add your name.','err');nameEl.focus();return}
    if(msg.length<2){say('Please write a short note.','err');msgEl.focus();return}
    if(URLISH.test(name+' '+msg)){say('Links can\u2019t be added to notes. Please remove the link.','err');return}
    try{if(w.__editSfx&&w.__editSfx.tap)w.__editSfx.tap()}catch(err){}
    busy=true;send.disabled=true;say('Sending\u2026');
    var go=function(){
      var wait=Math.max(0,3200-(Date.now()-tokenAt));
      setTimeout(function(){
        post({name:name,message:msg,role:roleEl.value,website:hp.value,token:token},false).then(function(x){
          var j=x.j||{};
          if(j.ok&&j.note){notes.unshift(j.note);shown=Math.max(shown,6);paint(j.note.id);msgEl.value='';upd();say('Your note is on the reel \uD83C\uDFAC','ok')}
          else if(j.ok){msgEl.value='';upd();say('Your note is on the reel \uD83C\uDFAC','ok')}
          else say(j.words||'Couldn\u2019t send right now. Please try again.','err');
        }).catch(function(){say('Couldn\u2019t send right now. Please check your connection and try again.','err')})
          .then(function(){busy=false;send.disabled=false});
      },wait);
    };
    if(token)go();else load().then(function(){if(token)go();else{busy=false;send.disabled=false;say('Couldn\u2019t reach the guestbook right now. Please try again.','err')}});
  });
  [nameEl,msgEl].forEach(function(x){x.addEventListener('input',function(){if(status.classList.contains('is-err')||status.classList.contains('is-ok'))say(HINT)})});
  load();
  setInterval(function(){if(notes.length)paint()},60000);
})();
