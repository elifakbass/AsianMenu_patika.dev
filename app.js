const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

  const menuu= menu.map(item => (
    {
      id:item.id , title:item.title, category:item.category, price:item.price, img:item.img, desc:item.desc
      
    }
  )
     )


    var btn_container=document.getElementsByClassName('btn-container');

     let dataID=["All","Korea","Japan","China"];
     for(let i=0;i<dataID.length;i++){
        var button=document.createElement('button');
        button.className="btn btn-outline-dark btn-item";
        button.data_id=dataID[i];
        button.innerHTML=dataID[i];
        button.onclick=removeItem;
        btn_container[0].appendChild(button);
     }

     

     function removeItem(){
      var id=this.data_id;
     
    var menuSection=document.getElementsByClassName('section-center row');

    if(menuSection[0].hasChildNodes){  //ekli verilerimizi siler
      while(menuSection[0].childNodes.length>=1){
        menuSection[0].removeChild(menuSection[0].firstChild);
      }
    }

for(let i=0;i<menuu.length;i++){
  if(id=='All' || id===menuu[i].category){

    var div1=document.createElement('div');
    div1.className= "menu-items col-lg-6 col-sm-12";
    var img=document.createElement('img');
    img.className="photo";
    img.src=menuu[i].img;
    img.alt=menuu[i].title;

    var div2=document.createElement('div');
    div2.className="menu-info";
    
    var div3=document.createElement('div');
    div3.className="menu-title";
    var h4=document.createElement('h4');
    h4.innerText=menuu[i].title;
    var h44=document.createElement('h4');
    h44.className="price";
    h44.innerText=menuu[i].price;
    div3.appendChild(h4);
    div3.appendChild(h44);

    var div4=document.createElement('div');
    div4.className="menu-text";
    div4.innerHTML=menuu[i].desc;

    div2.appendChild(div3);
    div2.appendChild(div4);


    div1.appendChild(img);
    div1.appendChild(div2);

    menuSection[0].appendChild(div1);

    }
   
  }
}
    