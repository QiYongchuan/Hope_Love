// 线上访问，模态窗的键盘事件

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.querySelector('#myModal');
console.log(modal);
console.log(openModalBtn);

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

const btnNowar = document.querySelector('.btnNowar')


btnNowar.addEventListener('click',function(){
  playAudioX(audioNowar)
})

 // 点击某些图片实现更换背景颜色

const star = document.querySelector('.star')

star.addEventListener('click',function(){
  document.body.style.backgroundColor = 'black'
})


const pink = document.querySelector('.pink')

pink.addEventListener('click',function(){
  document.body.style.backgroundColor = 'pink'
})



