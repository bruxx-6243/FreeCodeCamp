// =======================Text animations =================
const txtAnim = document.querySelector('.header__desc');
new Typewriter(txtAnim, {
    loop: true,
    deletespeed: 75
})

.changeDelay(75)
.typeString('Front-end developer Jr')
.pause(300)
.typeString('...!')
.pause(1000)
.deleteChars(26)
.typeString('<span style="color: #FD498C;">Je suis étudiant en Maths-info...</span>')
.pause(1000)
.deleteChars(33)
.typeString('<span style="color: #5ba5b8;">Je me connais un peu en:</span>')
.pause(800)
.deleteChars(24)
.typeString('<span style="font-weight: 700; color: #EA3D20;">HTML5 / CSS3...!</span>')
.pause(2000)
.deleteChars(16)
.typeString('<span style="font-weight: 700; color: #F3B900;">JavaScript...!</span>')
.pause(2000)
.deleteChars(14)
.typeString('<span style="font-weight: 700; color: #069C0F;">Python...!</span>')
.pause(2000)
.start()


