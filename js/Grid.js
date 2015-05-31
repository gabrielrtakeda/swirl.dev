function Grid(productList)
{
    this.productList = productList;
    this.imageSize = 21;
    this.perLine = 4;
    this.count = 1;

    this.__construct = function()
    {
        this.make();
    }

    this.make = function()
    {
        var html = '';
        for (i in this.productList) {
            html += this.processProductHtml(this.productList[i]);
        }

        console.log(html);

        $('#products').append(html);
    }

    this.processProductHtml = function(product)
    {
        var productHtml = '<div class="product">'
            + '<img class="image" src="' + product.image + '" width="100%" />'
            + '<img class="rate" src="images/rate-' + product.rate + '.png" />'
            + '<div class="title">' + product.title + '</div>'
            + '<div class="price">' + product.price + '</div>'
        + '</div>';

        if (this.count == 1) {
            productHtml = '<div class="row">' + productHtml;
            ++this.count;
            console.log('open row');

        } else if (this.count == 4) {
            productHtml = productHtml + '</div>';
            this.count = 1;
            console.log('close row');

        } else {
            ++this.count;
            console.log('moving on');
        }

        return productHtml;
    }

    this.__construct();
}
