const string =
`/*画一个可爱的皮卡丘*/
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

*::after,
*::before {
  box-sizing: border-box;
}
/*先给它上个皮肤
*/
.skin {
  height: 100vh;
  background: #ffe600;
  position: relative;
}

/*再来一个可爱的小鼻子
*/
.nose {
  position: relative;
  border: 10px solid black;
  border-color: black transparent transparent transparent;
  height: 0px;
  width: 0px;
  left: 50%;
  margin-left: -10px;
  top: 250px;
}

/*给它加个小特效
*/
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  33% {
    transform: rotate(10deg);
  }

  66% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}

.yuan {
  height: 10px;
  width: 20px;
  position: absolute;
  top: -16px;
  border-radius: 50%;
  background-color: black;
  left: -10px;
}

/*接下来要加眼睛了
皮卡丘的眼睛是圆圆的（净说废话）
*/
.eye {
  position: absolute;
  border: 2px solid #000;
  height: 64px;
  width: 64px;
  left: 50%;
  margin-left: -32px;
  background: rgb(45, 45, 45);
  top: 200px;
  border-radius: 50%;
}

/*让眼睛变得有神起来！
*/
.eye::before {
  content: '';
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  display: block;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 10px;
  top: 2px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

/*嘴巴肯定少不了啊，
先来一个平时呆萌的表情
*/
.mouth {
  width: 180px;
  height: 100px;
  position: absolute;
  left: 50%;
  margin-left: -90px;
  top: 275px;
  cursor: pointer;
}

.up {
  position: relative;
  z-index: 1;
}

.xxx{
  border: 3px solid black;
  height: 20px;
  width: 100px;
  border-radius: 20px 20px 60px 60px;
  position: relative;
  margin-left: -50px;
  top: 10px;
  left: 50%;
  background: rgb(155, 1, 9);
}

/*再来一个"皮卡皮卡"
*/
.lip {
  border: 3px solid black;
  height: 30px;
  width: 88.6px;
  border-top: none;
  position: absolute;
  background: #ffe600;
  top: 0;
}

.lip.left {
  border-radius: 0 0 0 30px;
  border-right: none;
  border-left: none;
  transform: rotate(-21deg);
  left: 0;
}

.lip.right {
  border-radius: 0 0 30px 0;
  border-left: none;
  border-right: none;
  transform: rotate(21deg);
  right: 0;
}

.down {
  height: 170px;
  position: absolute;
  width: 100%;
  top: 10px;
  overflow: hidden;
}

.down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: rgb(155, 1, 9);
}

.down .yuan2 {
  width: 200px;
  height: 290px;
  position: absolute;
  bottom: -150px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
  background: #ff485f;
}

/*还有标志性的两个红扑扑的脸蛋
(❤ ω ❤) 卡哇伊
*/
.face {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 86px;
  height: 86px;
  top: 300px;
  margin-left: -44px;
  cursor: pointer;
}

.face>img {
  position: absolute;
  left: 50%;
  top: 50%;
}

.face.left {
  transform: translate(-180px);
  background: rgb(255, 0, 0);
  border-radius: 50%;
}

/*它生气可是会放电的哦！
*/
.face.left>img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}

.face.right {
  transform: translate(180px);
  background: rgb(255, 0, 0);
  border-radius: 50%;
}
/*完美
快试着触摸它的鼻子和脸蛋吧
(・∀・(・∀・(・∀・*)
*/`
export default string;