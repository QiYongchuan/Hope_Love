// 线上访问，模态窗的键盘事件

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.querySelector('#myModal');
// console.log(modal);
// console.log(openModalBtn);

// document.addEventListener('keydown', function(event) {
//   if (event.key == p) { // Tab key code is 9
//     console.log("弹出");
//     modal.style.display = 'block';
    
//   }
// });

// Close the modal when user clicks on Cancel button
// const closeModalBtns = document.querySelectorAll('[data-dismiss="modal"]');
// for (let i = 0; i < closeModalBtns.length; i++) {
//   closeModalBtns[i].addEventListener('click', function() {
//     modal.style.display = 'none';
//   });
// }

// document.addEventListener('keydown', function(event) {
//   console.log('Key code:', event.key);
//   console.log(modal,modal.style);
//   modal.style.display = 'block';
    
// });

// 第二个模态窗口设置
// 检查 localStorage 中是否存在 hasVisited 标志
if (!localStorage.getItem('hasVisited')) {
  // 如果不存在，则显示模态框
  const modal2 = document.getElementById('my-modal2');
   // 显示模态框
modal2.style.display = 'block'; 

  // 隐藏模态框的函数
  function hideModal() {
    modal2.style.display = 'none';
  }
  
  // 给关闭按钮添加事件处理程序
  const closeBtn = document.querySelector('#close-btn2');
  console.log('关闭按钮',closeBtn);
  closeBtn.onclick = function() {
    console.log('点击了关闭');
    hideModal();
    // 将 hasVisited 标记为 true，表示已经看过提示内容
    localStorage.setItem('hasVisited', true);
  };
 
}




// 设置一个操作指引，打开页面之后，先询问你是不是，询问你需要帮助吗？ 

// 放弃这种方式，每次都得询问
  // if(confirm("你是QYC吗")){
  //   alert('欢迎回来！')    
  // } else{
  //   alert('那你还是按一按回车键吧，就是Enter')
  // }


// 前提是按回车进入

document.addEventListener('keydown',function(event){
  if (event.key =='Enter'){
      if (confirm('你想看一看指引吗')) {
        window.location.href='https://github.com/QiYongchuan/Hope_Love/issues/2'
      }
      else{
        alert('summer white mute pink black flowers quest dark 试一试首字母吧')
      }
  }
})


// 背景音乐播放
const audio1 = document.querySelector('#myaudio1');

function playAudio(params) {
  audio1.play();
}

// 键盘事件
document.addEventListener("keydown",function(event){
  if(event.key == '1'){
    window.location.hash = 'find';
  }
  if (event.key == 'b'){
    playAudio()
    console.log("背景音经过按键播放");
  }
  if(event.key == 's'){
    playAudio2()
    window.location.hash = 'yunhai';
   
  }
  if (event.key =='d') {
    playAudioX(audio3)
    window.location.hash = 'xiangcun';
  }
  if (event.key =='f') {
    playAudioX(audioHua)
    window.location.hash = 'huahai';
  }
  if (event.key =='q') {
    playAudioX(audioQX)
    window.location.hash = 'chahua';
  }

  if(event.key =='w'){
    console.log('按下了w');
    document.body.style.backgroundColor = 'white'
  }
  
  if(event.key =='p'){
    console.log('按下了p');
    document.body.style.backgroundColor = 'pink'
  }

  if (event.key == 'g') {
    document.body.style.backgroundColor = 'green'
  }
})

// 监听hope和love，鼠标点击播放
const logoMusic = document.querySelector("#bg-music")
logoMusic.addEventListener('click',function(){
  console.log("背景音经过点击播放");
  playAudio();
})


// 设置另一个背景音乐 菊次郎的夏天

const audio2 = document.querySelector('#summerMusic');
const btnSummer = document.querySelector('.btnSummer');


function playAudio2(){
  audio2.play();
}

btnSummer.addEventListener("click",function(){
  console.log('点击了summer播放');
  playAudio2();
})



// 背景音乐稻香设置

const audio3 = document.querySelector('#daoxiang')
const btnDaoxiang = document.querySelector('.btnDaoxiang')


console.log(audio3);
console.log(btnDaoxiang);

// 这里将播放音乐的函数封装，参数是要播放的音频
function playAudioX(audio){
  audio.play()
}
btnDaoxiang.addEventListener('click',function(){
     playAudioX(audio3)
     console.log("点击了播放稻香");
})


// 花海播放设置

const audioHua = document.querySelector('#huahaiyinpin')

const btnflower =document.querySelector('.btnflower')

btnflower.addEventListener('click',function(){
  console.log('点击花海播放');
  playAudioX(audioHua);
})


// 千寻音乐设置

const audioQX = document.querySelector('#qianxunyinpin')

const btnqianxun =document.querySelector('.btnqianxun')

btnqianxun.addEventListener('click',function(){
  console.log('点击千寻播放');
  playAudioX(audioQX)
})


 // 音乐关闭函数，通过mute来实现整个浏览器中音乐的关闭？

 document.addEventListener('keydown',function(event){
  if(event.key =='m'){
    console.log('按下m');
    audio2.pause();
    audio1.pause();
    audio3.pause();
    audioHua.pause()
    audioQX.pause()
  }
 })


//  隐藏彩蛋音乐

const audioNowar = document.querySelector("#nowar")

const btnNowar = document.querySelectorAll('.btnNowar')

for (let i = 0; i < btnNowar.length; i++) {
  // 播放音乐
  btnNowar[i].addEventListener('click',function(){
    playAudioX(audioNowar)
  })
//  改变背景
  btnNowar[i].addEventListener('click',function(){
    playAudioX(audioNowar)
  })
}



 // 点击某些图片实现更换背景颜色

const star = document.querySelectorAll('.star')

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener('click', function() {
   
    document.body.style.backgroundColor = 'black';
  });

}
// star.addEventListener('click',function(){
//   document.body.style.backgroundColor = 'black'
// })


const pink = document.querySelectorAll('.pink')

console.log('pink',pink);

for (let i = 0; i < pink.length; i++) {
  pink[i].addEventListener('click', function() {
    console.log("点击了 pink");
    document.body.style.backgroundColor = 'pink';
  });
}

// 红配绿太难看了，不把背景颜色改成绿色了
// const green = document.querySelectorAll('.green')

// for (let i = 0; i < green.length; i++) {
//   green[i].addEventListener('click',function(){
//     document.body.style.backgroundColor = '#71af29';
//   })
// }




// pink.addEventListener('click',function(){
//   console.log("点击了pink");
//   document.body.style.backgroundColor = 'pink'
// })



