// github页的逻辑

// 点击enter键，进入真正的github页面，来实现交互

const alertstring = "Trueman,do you wanna enter really world?\n 朋友，你想进入真实的世界吗"




document.addEventListener('keydown',function(event){
  console.log(event.key);
  if (event.key =='Enter') {
    alert(alertstring)
    if(confirm("really?\n 真的吗")){
      window.open('https://github.com/QiYongchuan', 'newWindow', 'height=300,width=400');
    } else {
      alert("That is ok")
    }
    
  }

})




// var newWindow = window.open('https://github.com/QiYongchuan', 'newWindow', 'height=300,width=400');