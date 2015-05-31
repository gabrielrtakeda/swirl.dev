function Slider(productList)
{
    this.productList = productList;
    this.currentIndex;

    this.__construct = function(productList)
    {
        this.currentIndex = 0;
        this.initialize();
        this.previous();
        this.next();
    }

    this.initialize = function()
    {
        this.setProduct(
            this.productList[0].image,
            this.productList[0].title
        );
    }

    this.previous = function()
    {
        var self = this;
        $('#slider .arrow.left').click(function() {
            self.setCurrentIndex(
                self.getPreviousIndex()
            );
            self.setProduct(
                self.getCurrentProduct().image,
                self.getCurrentProduct().title
            );
        });
    }

    this.next = function()
    {
        var self = this;
        $('#slider .arrow.right').click(function() {
            self.setCurrentIndex(
                self.getNextIndex()
            );
            self.setProduct(
                self.getCurrentProduct().image,
                self.getCurrentProduct().title
            );
        });
    }

    this.getCurrentProduct = function()
    {
        return this.getProduct(this.currentIndex);
    }

    this.getProduct = function(index)
    {
        return this.productList[index];
    }

    this.setCurrentIndex = function(currentIndex)
    {
        this.currentIndex = currentIndex;
    }

    this.getPreviousIndex = function()
    {
        return this.currentIndex >= 1
            ? --this.currentIndex
            : (productList.length - 1);
    }

    this.getNextIndex = function()
    {
        return this.currentIndex < (productList.length - 1)
            ? ++this.currentIndex
            : 0;
    }

    this.setProduct = function(image, title)
    {
        $('#slider .product img').attr('src', image);
        $('#slider .product .title').html(title);
    }

    this.__construct(productList);
}
