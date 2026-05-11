// Aevivo Clinical · access gate (must run before body renders)
(function(){
  var KEY='aevivo-clinical-gate-v1',PW='CLINICS26';
  try{if(localStorage.getItem(KEY)===PW)return}catch(e){}
  document.documentElement.setAttribute('data-aevivo-locked','1');
  var css='html[data-aevivo-locked] body > *:not(#aevivo-gate){display:none !important}'
    +'#aevivo-gate{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#EFE8DA;font-family:Inter,system-ui,sans-serif;color:#2C2D27;padding:24px}'
    +'#aevivo-gate .gate-card{position:relative;max-width:440px;width:100%;text-align:center;padding:48px 36px;background:#F5EFE3;border:1px solid #C9BFA8;border-radius:14px}'
    +'#aevivo-gate .gate-mark{width:54px;height:54px;border:1.2px solid #2C2D27;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-family:"Cormorant Garamond",Georgia,serif;font-size:26px;color:#2C2D27;font-weight:500;margin-bottom:22px}'
    +'#aevivo-gate .gate-brand{font-size:11px;letter-spacing:4px;color:#565A45;font-weight:600;text-transform:uppercase;margin-bottom:14px}'
    +'#aevivo-gate .gate-heading{font-family:"Cormorant Garamond",Georgia,serif;font-size:30px;font-weight:400;line-height:1.15;margin:0 0 12px;color:#2C2D27}'
    +'#aevivo-gate .gate-heading em{color:#565A45;font-style:italic}'
    +'#aevivo-gate .gate-sub{font-size:14px;color:#54564E;font-weight:300;line-height:1.65;margin:0 0 28px}'
    +'#aevivo-gate form{margin:0}'
    +'#aevivo-gate input{width:100%;box-sizing:border-box;padding:14px 18px;background:#EFE8DA;border:1px solid #C9BFA8;border-radius:10px;color:#2C2D27;font-size:14px;font-family:inherit;outline:none;letter-spacing:2px;text-align:center;margin-bottom:14px;transition:border-color .2s}'
    +'#aevivo-gate input::placeholder{color:#8A887D;letter-spacing:1px}'
    +'#aevivo-gate input:focus{border-color:#565A45}'
    +'#aevivo-gate button{width:100%;padding:14px 24px;background:linear-gradient(180deg,#797D62,#5A5E45,#3F4231);color:#F2EEE2;border:none;border-radius:999px;font-family:inherit;font-weight:600;font-size:11px;letter-spacing:2.4px;text-transform:uppercase;cursor:pointer;transition:opacity .2s}'
    +'#aevivo-gate button:hover{opacity:.92}'
    +'#aevivo-gate .gate-error{font-size:12px;color:#B14A3A;margin-top:12px;min-height:16px;letter-spacing:.3px}'
    +'#aevivo-gate .gate-foot{font-size:11px;color:#8A887D;margin-top:28px;letter-spacing:.3px;line-height:1.5}'
    +'@keyframes aevivo-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}'
    +'#aevivo-gate.shake .gate-card{animation:aevivo-shake .4s ease}';
  var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
  function render(){
    var el=document.createElement('div');el.id='aevivo-gate';
    el.innerHTML='<div class="gate-card"><div class="gate-mark">A</div><div class="gate-brand">Aevivo Clinical</div><h1 class="gate-heading">Practitioner <em>preview.</em></h1><p class="gate-sub">Aevivo Clinical is the EU-GMP supply channel for longevity, health and wellness clinics. Enter your access code to continue.</p><form id="aevivo-gate-form"><input id="aevivo-gate-input" type="password" placeholder="Access code" autocomplete="off" autofocus/><button type="submit">Enter</button><div class="gate-error" id="aevivo-gate-err"></div></form><div class="gate-foot">For research use only. Not for human consumption.</div></div>';
    document.body.appendChild(el);
    var form=document.getElementById('aevivo-gate-form'),input=document.getElementById('aevivo-gate-input'),err=document.getElementById('aevivo-gate-err');
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(input.value.trim().toUpperCase()===PW){
        try{localStorage.setItem(KEY,PW)}catch(_){}
        document.documentElement.removeAttribute('data-aevivo-locked');
        el.remove();
      }else{
        err.textContent='Incorrect access code.';
        el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake');
        input.value='';input.focus();
      }
    });
    setTimeout(function(){input.focus()},50);
  }
  if(document.readyState!=='loading')render();
  else document.addEventListener('DOMContentLoaded',render);
})();
