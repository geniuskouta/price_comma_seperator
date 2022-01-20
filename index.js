function addCommaToTotalPrice(number) {
    var number = number.toString();
    number = number.split('');
    for(var i = 0; i < number.length; i++) {
        var naturalCount = i + 1;
        if(naturalCount % 3 === 0 && naturalCount !== number.length) {
            var commaNumIndex = number.length - naturalCount;
            number.splice(commaNumIndex, 1, ',' + number[commaNumIndex]);
        }
    }
    return number.join("");
}
