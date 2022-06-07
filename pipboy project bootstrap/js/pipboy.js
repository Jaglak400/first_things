$(document).ready(function(){
    var weapons = [
        {
            "name": "44_Pistol",
            "damage": 48,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99

        },

        {
            "name": "10mm_pistol",
            "damage": 28,
            "fire_rate": 46,
            "range": 119,
            "accuracy": 56,
            "weight": 4.2,
            "value": 53

        },

        {
            "name": "assault_riffle",
            "damage": 78,
            "fire_rate": 30,
            "range": 200,
            "accuracy": 80,
            "weight": 14.8,
            "value": 150

        }

    ];


    $('.item-list a').on('click', function(e) {
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('.item-list a').on('mouseenter', function(e) {
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for(item in weapons) {
            if(weapons[item].name == current_item) {
                console.log(weapons[item]);

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.range').html(weapons[item].range);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);


            }
          
        }
    });
});

















