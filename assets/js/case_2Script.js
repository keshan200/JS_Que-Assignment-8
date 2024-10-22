
let array = ["red","lime","dodgerblue","yellow","peachpuff","deeppink"];
console.log(array);


$('.startbtn').on('click', () => {

    let intervel = setInterval(() => {
        let remove = array.pop();
        array.unshift(remove);

        $('#top_box').css('background-color', array[5]);
        $('#bottom_box').css('background-color', array[4]);
        $('#middle_box4').css('background-color', array[3]);
        $('#middle_box3').css('background-color', array[2]);
        $('#middle_box2').css('background-color', array[1]);
        $('#middle_box1').css('background-color', array[0]);


        console.log("array");
    },1000);

    $('.stopbtn').on('click',()=>{
        clearTimeout(intervel);
    })
});
