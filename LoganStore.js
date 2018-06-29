window.DY.cart = window.DY.cart || [];

var addToCart = function(){
    var currProduct = DY.recommendationContext.data.toString();
    window.DY.cart.push(currProduct);
    console.log(currProduct + ' was added to cart!');
    DY.API('event', {
        name: 'Add to Cart',
        properties: {
            dyType: 'add-to-cart-v1',
            value: 34.45,
            currency: 'USD',
            productId: DY.recommendationContext.data.toString(),
            quantity: 1,
            size: 'S'
        }
    })
};



