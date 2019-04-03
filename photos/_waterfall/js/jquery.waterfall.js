jQuery.fn.extend({
    waterfall: function () {

        var $_this = this;

        var totalWidth = $_this.width();
        console.log(totalWidth);

        var oneWidth = $_this.children('.item').eq(0).width();
        console.log(oneWidth);

        var coluNum = Math.floor(totalWidth / oneWidth);

        var margin = Math.floor((totalWidth - oneWidth * coluNum) / (coluNum + 1));


        var heightArr = [];
        for (var i = 0; i < coluNum; i++) {
            heightArr.push(margin);
        }

        $_this.children('.item').each(function (index, value) {

            var currentEle = $(value);

            var minHeight = heightArr[0],
                minIndex = 0;
            for (var i = 0; i < heightArr.length; i++) {
                if (heightArr[i] < minHeight) {
                    minHeight = heightArr[i];
                    minIndex = i;
                }
            }
            currentEle.css({
                top: minHeight,
                left: minIndex * (oneWidth + margin) + margin
            });
            heightArr[minIndex] += currentEle.height();
            heightArr[minIndex] += margin;
        });
        var maxHeight = heightArr[0];
        for(var i = 0 ;i<heightArr.length;i++){
            maxHeight = maxHeight<heightArr[i]?heightArr[i]:maxHeight;
        }
        $_this.height(maxHeight);
        console.log(totalWidth)
    }
})