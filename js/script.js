$("form").on("submit", createTable);

function createTable(event) {
    event.preventDefault();

    let tableSize = Number( $("#table-size").val() );
    let theTable = $("table");

    theTable.html("");
    for (let i = 0; i < tableSize; i++)
    {
        let theRow = $("<tr>");
        theTable.append(theRow);
        for (let j = 0; j < tableSize; j++)
        {
            let theCell = $("<td class='undug'>");
            theRow.append(theCell);
        }
    }

    let classes = [ 'bone point' ];
    $('.undug').each(function(i) {
        $(this).addClass(classes[ Math.floor( Math.random() * 100 >= 30)]);
    });

    let numberClasses = $('.bone').length;
    $('p.countBones').html("Bones Remaining: <span class='scoreBones'>" + numberClasses + "</span>");

    $('td').click(function(i) {
        if ($(this).hasClass('bone')){
            $(this).addClass('dug-bone');
        }else {
            $(this).addClass('dug');
        }

        if ($(this).hasClass('point')) {
            var subsNumbers = $('.scoreBones').html()-1;
            $('.scoreBones').text(subsNumbers);
            $(this).removeClass('point');
            if (subsNumbers == 0){
                $('.countBones').html("GOOD DOG! <br> YOU FOUND ALL BONES!");
            }
        }else{
            return false;
        }
    });
}











