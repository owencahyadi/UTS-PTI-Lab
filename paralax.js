window.onload = function() {

  const p_item3 = document.getElementsByClassName('p-item3')[0];
  const button = document.getElementsByClassName('start')[0];
  const container = document.getElementsByClassName('container')[0];

  window.addEventListener('scroll', function(e) {
    
    let s = this.scrollY;
    let w = this.outerWidth;
    let h = document.getElementsByClassName('paralax')[0].clientWidth;
    let h_b = container.clientWidth;
    let p = s/h*100;
    let p_b = s/h_b*100;
    let opas = 1-1/100*p_b;
    let z_1 = 1 + (w / 10000 * p_b);
    document.getElementsByClassName('p-item4')[0].style= `transform: scale(${z_1});opacity: ${opas}`;
    let z_2 = 1+(w/5000000*p);
    document.getElementsByClassName('p-item1')[0].style= `transform: scale(${z_2})`;
    let hr = w/2000*p_b;
    let z_3 = 1+(w*0.000005*p_b);
    document.getElementsByClassName('p-item2')[0].style= `transform: translate3d(${hr}px,0,0) scale(${z_3})`;
    let hr_2 = w/1500*p_b;
    let z_4 = 1+(w*0.00001*p_b);

    if (p_b >= 100 && p_b <= 101) {
      p_item3.style.position = 'absolute';
      p_item3.style.bottom = 'auto';
      p_item3.style.zIndex = '1';
    } else {
      p_item3.style.position = 'fixed';
      p_item3.style.bottom = 'auto';
      p_item3.style.zIndex = '2';
    }

    if (p_b > 170) {
      button.style.zIndex = '2';
      button.style.display = 'block';
    } else {
      button.style.zIndex = '2';
      button.style.display = 'none';
    }

    p_item3.style.transform = `translate3d(${hr_2}px,0,0) scale(${z_4})`;


  })
}


