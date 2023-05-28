var money = 0
var money_display = document.getElementById("money")
var first = 0
var first_display = document.getElementById("first")
var second = 0
var second_display = document.getElementById("second")
var third = 0
var third_display = document.getElementById("third")
var fourth = 0
var fourth_display = document.getElementById("fourth")
var fifth = 0
var fifth_display = document.getElementById("fifth")
var sixth = 0
var sixth_display = document.getElementById("sixth")
var seventh = 0
var seventh_display = document.getElementById("seventh")
var eighth = 0
var eighth_display = document.getElementById("eighth")
var ninth = 0
var ninth_display = document.getElementById("ninth")

//functions

function add() {
	money += 1
	update()
}

function buy1() {
	if(money >= 5)
{
	money -= 5
	first += 1
	update()}
}

function buy2() {
	if(money >= 25)
{
	money -= 25
	second += 1
	update()}
}

function buy3() {
	if(money >= 250)
{
	money -= 250
	third += 1
	update()}
}

function buy4() {
	if(money >= 2000)
{
	money -= 2000
	fourth += 1
	update()}
}

function buy5() {
	if(money >= 10000)
{
	money -= 10000
	fifth += 1
	update()}
}

function buy6() {
	if(money >= 200000)
{
	money -= 200000
	sixth += 1
	update()}
}

function buy7() {
	if(money >= 2000000)
{
	money -= 2000000
	seventh += 1
	update()}
}

function buy8() {
	if(money >= 50000000)
{
	money -= 50000000
	eighth += 1
	update()}
}

function buy9() {
	if(money >= 1000000000)
{
	money -= 1000000000
	ninth += 1
	update()}
}

function firstF() {
	if(money >= 5 * second)
{
	money -= 5 * second
	first += second}
}

function secondF() {
	if(money >= 25 * third)
{
	money -= 25 * third
	second += third}
}

function thirdF() {
	if(money >= 250 * fourth)
{
	money -= 250 * fourth
	third += fourth}
}

function fourthF() {
	if(money >= 2000 * fifth)
{
	money -= 2000 * fifth
	fourth += fifth}
}

function fifthF() {
	if(money >= 10000 * sixth)
{
	money -= 10000 * sixth
	fifth += sixth}
}

function sixthF() {
	if(money >= 200000 * seventh)
{
	money -= 200000 * seventh
	sixth += seventh}
}

function seventhF() {
	if(money >= 2000000 * eighth)
{
	money -= 2000000 * eighth
	seventh += eighth}
}

function eighthF() {
	if(money >= 50000000 * ninth)
{
	money -= 50000000 * ninth
	eighth += ninth}
}

function tick() {
	money += first
	firstF()
	secondF()
	thirdF()
	fourthF()
	fifthF()
	sixthF()
	seventhF()
	eighthF()
	update()
	if(money < 0)
	{lose()}
}

function lose() {
	location.reload();
	//setTimeout(alert("You lost to bankrupcy"),1000)
}

function update() {
money_display.innerHTML = money
first_display.innerHTML = first
second_display.innerHTML = second
third_display.innerHTML = third
fourth_display.innerHTML = fourth
fifth_display.innerHTML = fifth
sixth_display.innerHTML = sixth
seventh_display.innerHTML = seventh
eighth_display.innerHTML = eighth
ninth_display.innerHTML = ninth
}

setInterval(tick, 1000)
