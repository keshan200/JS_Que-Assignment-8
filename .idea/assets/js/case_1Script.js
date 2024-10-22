let array = ["A","B","C","D","E","F"];
console.log(array)

$('#startbtn').on('click',()=>{

    let settime = setInterval(()=>{
        let remove_index = array.pop();
        array.unshift(remove_index);

        $('#A').text(array[5]);
        $('#B').text(array[4]);
        $('#C').text(array[3]);
        $('#D').text(array[2]);
        $('#E').text(array[1]);
        $('#F').text(array[0]);

        console.log(array)
    } ,800);



    $('#stopbtn').on('click' , ()=>{

        clearTimeout(settime);
    })

});