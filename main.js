document.addEventListener("DOMContentLoaded", () => {
  function InternetShop(name,site) {
    
    this.name = name;
    this.site = site;
    let shopCategories = [];
    this.shopCategories = null;
    const self = this;

    this.setCategories = (e)=>{
      let categories = {};
      categories.id = shopCategories.length;
      categories.category = e;
      shopCategories.push(categories);
      self.shopCategories = shopCategories;
    } 
    this.deleteCategories = (e)=>{
      shopCategories = shopCategories.filter((item) => item.category !== e)
    }

    this.addGoods = (e)=>{
      
    }
    const formSetCategories = document.querySelector('#setCategories');
    const btnSetCategories = formSetCategories.querySelector('button');
    const fildSetCategories = formSetCategories.querySelector('input');
    const allCategories = document.querySelector('#allCategories');
    const btnDeleteCat = document.querySelector('#btnDeleteCat');

    btnSetCategories.addEventListener('click',(e)=>{
      e.preventDefault();
      self.setCategories(fildSetCategories.value);
      let option = new Option(fildSetCategories.value, fildSetCategories.value);
      allCategories.appendChild(option);  
      fildSetCategories.value = '';
    })

    btnDeleteCat.addEventListener('click',(e)=>{
      let selectOption = document.querySelector('#allCategories option:checked');
      selectOption.remove();
      self.deleteCategories(selectOption.value);
    })
  }

let stoChehlov = new InternetShop('100 Чехлов','100chehlov.com.ua');

});
