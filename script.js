var i=0;
  var num=0;
  function add()
  {
    var a = document.getElementById("change");

    i = i + 1;
    a.innerHTML = i;
  }
  function del()
  {
    var a = document.getElementById("change");

    if(i>0)
    {
    i = i - 1;

    a.innerHTML = i;
    }
    else
    {
      i = 0;

      a.innerHTML = i;
    }
  }
  function foto(g)
  {
    var g=g;
    var h = document.getElementById("mainFoto");
    var t = document.getElementById("boxForImg"+g+"");
    var n = document.getElementById("im"+g+"");
    var o = 1;

    h.src = "./images/image-product-"+g+".jpg";
    t.style.border = "2px solid hsl(26, 100%, 55%)";
    n.style.opacity="28%";
    

    while(o<=10)
    {
      if(o!=g)
      {
        document.getElementById("boxForImg"+o+"").style.border = "none";
        document.getElementById("im"+o+"").style.opacity = "100%";
      }
      o++;
    }
  }
  function cart1(j,p)
  {
    const bg = document.createElement("div");
    bg.classList.add(p+"","dl");
    bg.innerText = j;
    const gh = document.querySelector(".element");
    gh.appendChild(bg);
  }
  function cart()
  {
    if(num==1)
    {
      const toDell = document.querySelectorAll(".dl");
      for (const el of toDell) 
      {
        el.remove(); //usuwamy tylko z HTML
      }
      num=0;
    }
    else
    {
    const cart = document.createElement("div");
    cart.classList.add("element","dl");
    cart.style.position = 'absolute';
    const div = document.querySelector(".page");
    div.appendChild(cart);
    cart1("Cart","zm");
    num=1;
    }
  }
